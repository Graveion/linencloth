import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import classSelectMenuReducer from "../features/classselectmenu/ClassSelectMenuSlice" 
import runeExplorerReducer from "../features/runeexplorer/RuneExplorerSlice" 
import levelSelectionReducer from "../features/levelselector/LevelSelectionSlice" 
import attackPowerPickerReducer from "../features/attackpowerpicker/AttackPowerPickerSlice"
import spellPowerPickerReducer from "../features/spellpowerpicker/SpellPowerPickerSlice"
import healerPowerPickerReducer from "../features/healerpowerpicker/HealerPowerPickerSlice"  

const reducer = {
  classSelectMenu: classSelectMenuReducer,
  runeExplorer: runeExplorerReducer,
  levelSelection: levelSelectionReducer,
  attackPowerPicker: attackPowerPickerReducer,
  spellPowerPicker: spellPowerPickerReducer,
  healerPowerPicker: healerPowerPickerReducer,
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