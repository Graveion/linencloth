import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Rune } from '../../types/Rune';
import { RuneDB } from '../../data/RuneDB'
import { Slot } from './RuneExplorer';

interface RuneExplorerState {
  runes: Rune[];
  selectedRunes: Record<Slot, Rune>;
}

const initialState: RuneExplorerState = {
  runes: [],
  selectedRunes: {} as Record<Slot, Rune>,
};

let runeDB = new RuneDB()

const runeExplorerSlice = createSlice({
  name: 'runeExplorer',
  initialState,
  reducers: {
    loadRuneData: (state, action: PayloadAction<string>) => {
      state.runes = runeDB.getRunes().filter((rune) => rune.playerClass === action.payload)
      state.selectedRunes = {} as Record<Slot, Rune>;
    },
    setSelectedRune: (state, action: PayloadAction<string>) => {
      let selectedRune = state.runes.find(e => (e.name === action.payload))
      if (selectedRune !== undefined) {
        state.selectedRunes[selectedRune.slot as Slot] = selectedRune
      }
    }
  },
  selectors: {
    selectRunes: runeExplorer => runeExplorer.runes,
    selectedRunes: runeExplorer => runeExplorer.selectedRunes,
  },
});

export const { loadRuneData, setSelectedRune } = runeExplorerSlice.actions;
export const { selectRunes, selectedRunes } = runeExplorerSlice.selectors

export default runeExplorerSlice.reducer;