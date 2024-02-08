import { configureStore } from '@reduxjs/toolkit'
import classselectmenuslice from "../features/classselectmenu/ClassSelectMenuSlice" 
import dropdownSlice from "../features/dropdown/DropdownSlice" 
import logger from 'redux-logger'

const reducer = {
  classSelectMenu: classselectmenuslice,
  dropdown: dropdownSlice,
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