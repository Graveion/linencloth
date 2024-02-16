import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PlayerClass } from "./ClassSelectMenu"

interface ClassSelectMenuSliceState {
    selectedClass: PlayerClass
    showDropdown: boolean
}

const initialState: ClassSelectMenuSliceState = {
    selectedClass: PlayerClass.Warrior,
    showDropdown: false,
}

const classSelectMenuSlice = createSlice({
    name: 'classSelectMenu',
    initialState,
    reducers: {
        selectClass(state, action: PayloadAction<string>) {
            state.selectedClass = action.payload as PlayerClass
        },
        setShowDropdown(state, action: PayloadAction<boolean>) {
            state.showDropdown = action.payload
        },
    },
    selectors: {
        selectedClass: classSelectMenu => classSelectMenu.selectedClass,
        showDropdown: classSelectMenu => classSelectMenu.showDropdown,
    },
})

export const { selectedClass, showDropdown } = classSelectMenuSlice.selectors
export const { selectClass, setShowDropdown } = classSelectMenuSlice.actions

export default classSelectMenuSlice.reducer