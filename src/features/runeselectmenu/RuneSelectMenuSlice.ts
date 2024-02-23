import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface RuneSelectMenuSliceState {
    showDropdown: boolean
}

const initialState: RuneSelectMenuSliceState = {
    showDropdown: false,
}

const runeSelectMenuSlice = createSlice({
    name: 'runeSelectMenu',
    initialState,
    reducers: {
        setShowDropdown(state, action: PayloadAction<boolean>) {
            state.showDropdown = action.payload
        },
    },
    selectors: {
        showDropdown: runeSelectMenu => runeSelectMenu.showDropdown,
    },
})

export const { showDropdown } = runeSelectMenuSlice.selectors
export const { setShowDropdown } = runeSelectMenuSlice.actions

export default runeSelectMenuSlice.reducer