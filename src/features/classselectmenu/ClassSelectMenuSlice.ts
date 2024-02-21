import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlayerClass } from "./ClassSelectMenu"

interface ClassSelectMenuSliceState {
    selectedClass: PlayerClass
}

const initialState: ClassSelectMenuSliceState = {
    selectedClass: PlayerClass.Warrior
}

const classSelectMenuSlice = createSlice({
    name: 'classSelectMenu',
    initialState,
    reducers: {
        selectClass(state, action: PayloadAction<string>) {
            state.selectedClass = action.payload as PlayerClass
        },
    },
    selectors: {
        selectedClass: classSelectMenu => classSelectMenu.selectedClass,
    },
})

export const { selectedClass } = classSelectMenuSlice.selectors
export const { selectClass } = classSelectMenuSlice.actions

export default classSelectMenuSlice.reducer