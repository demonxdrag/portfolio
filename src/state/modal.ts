import { createSlice } from '@reduxjs/toolkit'

export interface CursorState {
	open: boolean
	content: HTMLElement | null
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
