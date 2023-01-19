import { createSlice } from '@reduxjs/toolkit'
import { ReactNode } from 'react'

export interface CursorState {
	open: boolean
	content: ReactNode | null
}

const initialState: CursorState = {
	open: false,
	content: null
}

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		dispatchOpen: (state, action) => {
			state.open = action.payload
		},
		dispatchContent: (state, action) => {
			state.content = action.payload
		}
	}
})

export const { dispatchOpen, dispatchContent } = modalSlice.actions

export default modalSlice.reducer
