import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Rune } from '../../types/Rune'

interface RuneSelectMenuSliceState {
    selectedRune: Rune | undefined
    showDropdown: boolean
}

const initialState: RuneSelectMenuSliceState = {
    selectedRune: undefined,
    showDropdown: false,
}

const runeSelectMenuSlice = createSlice({
    name: 'runeSelectMenu',
    initialState,
    reducers: {
        selectClass(state, action: PayloadAction<Rune>) {
            state.selectedRune = action.payload as Rune
        },
        setShowDropdown(state, action: PayloadAction<boolean>) {
            state.showDropdown = action.payload
        },
    },
    selectors: {
        selectSelectedRune: runeSelectMenu => runeSelectMenu.selectedRune,
        showDropdown: runeSelectMenu => runeSelectMenu.showDropdown,
    },
})

export const { selectSelectedRune, showDropdown } = runeSelectMenuSlice.selectors
export const { selectClass, setShowDropdown } = runeSelectMenuSlice.actions

export default runeSelectMenuSlice.reducer