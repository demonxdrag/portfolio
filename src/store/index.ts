import { configureStore } from '@reduxjs/toolkit'
import cursorReducer from '../state/cursor'

export const store = configureStore({
  reducer: {
    cursor: cursorReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
