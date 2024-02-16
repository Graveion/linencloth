import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Rune } from '../../types/Rune';
import { runeDB } from '../../data/RuneDB'
import { Slot } from './RuneExplorer';

interface RuneExplorerState {
  runes: Rune[];
  selectedRunes: Map<Slot, Rune>;
}

const initialState: RuneExplorerState = {
  runes: [],
  selectedRunes: new Map<Slot, Rune>(),
};

const runeExplorerSlice = createSlice({
    name: 'runeExplorer',
    initialState,
    reducers: {
        loadRuneData: (state, action: PayloadAction<string>) => {
            state.runes = runeDB.filter((rune) => rune.getPlayerClass() === action.payload)
            state.selectedRunes = new Map<Slot, Rune>();
        },
    },
    selectors: {
        runes: runeExplorer => runeExplorer.runes,
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


export const { loadRuneData } = runeExplorerSlice.actions;
export const { runes, selectedRunes } = runeExplorerSlice.selectors

export default runeExplorerSlice.reducer;