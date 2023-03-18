import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
	name: 'modal',
	initialState: {
		isVisible: false,
	},
	reducers: {
		setVisible(state, action) {
			state.isVisible = action.payload
		},
	},
})

export default modalSlice.reducer
export const { setVisible } = modalSlice.actions
