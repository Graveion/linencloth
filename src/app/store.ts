import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import classSelectMenuSlice from "../features/classselectmenu/ClassSelectMenuSlice" 
import runeExplorerSlice from "../features/runeexplorer/RuneExplorerSlice" 
import levelSelectionSlice from "../features/levelselector/LevelSelectionSlice" 
import attackPowerPickerSlice from "../features/attackpowerpicker/AttackPowerPickerSlice"
import spellPowerPickerSlice from "../features/spellpowerpicker/SpellPowerPickerSlice"
import healerPowerPickerSlice from "../features/healerpowerpicker/HealerPowerPickerSlice"  

const reducer = {
  classSelectMenu: classSelectMenuSlice,
  runeExplorer: runeExplorerSlice,
  levelSelection: levelSelectionSlice,
  attackPowerPicker: attackPowerPickerSlice,
  spellPowerPicker: spellPowerPickerSlice,
  healerPowerPicker: healerPowerPickerSlice,
}

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>

// Infer the type of `store`
export type AppStore = typeof store
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"]

export default store