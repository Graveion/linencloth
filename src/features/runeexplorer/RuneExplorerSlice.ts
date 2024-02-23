import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Rune } from '../../types/Rune';
import { RuneDB } from '../../data/RuneDB'
import { Slot } from './RuneExplorer';
import { PlayerClass } from '../../types/PlayerClass';

interface RuneExplorerState {
  runes: Rune[];
  selectedRunes: Record<Slot, Rune>;
}

interface SelectedRune {
  slot: Slot
  rune: Rune
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

// What do we need to do:

// then we need to populate each image as a dropdown similar to how our previous dropdown worked

// once this is done each dropdown needs a selected value we can access
// same style as class select but useEffect fires up here and goes into the map
// since map is <K,V> its always unique on slot
// so we can either display nothing if there is nothing or 
// the selected icon for the slot

// we also need a level selector for damage formulas


export const { loadRuneData, setSelectedRune } = runeExplorerSlice.actions;
export const { selectRunes, selectedRunes } = runeExplorerSlice.selectors

export default runeExplorerSlice.reducer;