import { createSlice } from '@reduxjs/toolkit'

const keyboardSlice = createSlice({
	name: 'keyboard',
	initialState: {
		indexLetter: 0,
		wrongIndexLetter: [],
		defaultText:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam odio inventore, aut necessitatibus a sed sapiente repudiandae, sunt amet consequuntur iste illum iusto culpa id excepturi, cupiditate reprehenderit ratione laudantium.',
		notPressetLetters: '',
		pressetLetters: '',
		activeButton: '',
	},
	reducers: {
		countLetters(state) {
			state.indexLetter = state.indexLetter + 1
		},
		addWrongIndexLetter(state, action) {
			state.wrongIndexLetter.push(action.payload)
		},
		setActiveButton(state, action) {
			state.activeButton = action.payload
		},
		setNotPressetLetters(state, action) {
			state.notPressetLetters = action.payload
		},
		setPressetLetters(state, action) {
			state.pressetLetters = action.payload
		},
		setNotPressetLetter(state) {
			state.notPressetLetters = state.defaultText
		},
	},
})

export default keyboardSlice.reducer
export const {
	countLetters,
	addWrongIndexLetter,
	setActiveButton,
	setNotPressetLetters,
	setPressetLetters,
	setNotPressetLetter,
} = keyboardSlice.actions
