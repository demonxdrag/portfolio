import { configureStore } from '@reduxjs/toolkit'
import cursorReducer from '../state/cursor'
import modalReducer from '../state/modal'

export const store = configureStore({
  reducer: {
    cursor: cursorReducer,
    modal: modalReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
