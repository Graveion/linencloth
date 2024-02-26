import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import classSelectMenuSlice from "../features/classselectmenu/ClassSelectMenuSlice" 
import runeExplorerSlice from "../features/runeexplorer/RuneExplorerSlice" 
import levelSelectionSlice from "../features/levelselector/LevelSelectionSlice" 

const reducer = {
  classSelectMenu: classSelectMenuSlice,
  runeExplorer: runeExplorerSlice,
  levelSelection: levelSelectionSlice,
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