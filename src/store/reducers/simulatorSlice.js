import { createSlice } from '@reduxjs/toolkit'

const simulatorSlice = createSlice({
	name: 'simulator',
	initialState: {
		indexLetter: 0,
		wrongIndexLetter: [],
		defaultText:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam odio inventore, aut necessitatibus a sed sapiente repudiandae, sunt amet consequuntur iste illum iusto culpa id excepturi, cupiditate reprehenderit ratione laudantium.',
		notPressetLetters: '',
		pressetLetters: '',
		countWrongtLetters: 0,
		activeButton: '',
	},
	reducers: {
		countLetters(state) {
			state.indexLetter = state.indexLetter + 1
		},
		addWrongIndexLetter(state, action) {
			state.wrongIndexLetter.push(action.payload)
			state.countWrongtLetters = state.countWrongtLetters + 1
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
		restart(state) {
			state.indexLetter = 0
			state.wrongIndexLetter = []
			state.notPressetLetters = state.defaultText
			state.pressetLetters = ''
			state.countWrongtLetters = 0
			state.activeButton = ''
		},
	},
})

export default simulatorSlice.reducer
export const {
	countLetters,
	addWrongIndexLetter,
	setActiveButton,
	setNotPressetLetters,
	setPressetLetters,
	setNotPressetLetter,
	restart,
} = simulatorSlice.actions
