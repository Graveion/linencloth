import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlayerClass } from '../../types/PlayerClass'

interface ClassSelectMenuSliceState {
    selectedPlayerClass: PlayerClass
}

const initialState: ClassSelectMenuSliceState = {
    selectedPlayerClass: PlayerClass.Warrior
}

const classSelectMenuSlice = createSlice({
    name: 'classSelectMenu',
    initialState,
    reducers: {
        selectClass(state, action: PayloadAction<string>) {
            state.selectedPlayerClass = action.payload as PlayerClass
        },
    },
    selectors: {
        selectedClass: classSelectMenu => classSelectMenu.selectedPlayerClass,
    },
})

export const { selectedClass } = classSelectMenuSlice.selectors
export const { selectClass } = classSelectMenuSlice.actions

export default classSelectMenuSlice.reducer