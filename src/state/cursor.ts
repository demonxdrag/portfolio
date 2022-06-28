import { createSlice } from '@reduxjs/toolkit'

export interface CursorState {
  target: HTMLElement | null
  cursor: HTMLElement | null
  isHovered: boolean
}

const initialState: CursorState = {
  target: null,
  cursor: null,
  isHovered: false
}

export const cursorSlice = createSlice({
  name: 'cursor',
  initialState,
  reducers: {
    dispatchTarget: (state, action) => {
      state.target = action.payload
    },
    dispatchCursor: (state, action) => {
      state.cursor = action.payload
    },
    dispatchHovered: (state, action) => {
      state.isHovered = action.payload
    }
  }
})

export const { dispatchTarget, dispatchCursor, dispatchHovered } = cursorSlice.actions

export default cursorSlice.reducer
