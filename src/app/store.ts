import { configureStore } from '@reduxjs/toolkit'
import classSelectMenuSlice from "../features/classselectmenu/ClassSelectMenuSlice" 
import dropdownSlice from "../features/dropdown/DropdownSlice" 
import runeExplorerSlice from "../features/runeexplorer/RuneExplorerSlice" 
import logger from 'redux-logger'
import runeSelectMenuSlice from '../features/runeselectmenu/RuneSelectMenuSlice'

const reducer = {
  classSelectMenu: classSelectMenuSlice,
  dropdown: dropdownSlice,
  runeExplorer: runeExplorerSlice,
  runeSelectMenu: runeSelectMenuSlice,
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