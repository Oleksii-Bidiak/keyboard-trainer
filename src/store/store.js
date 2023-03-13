import { combineReducers, configureStore } from '@reduxjs/toolkit'
import keyboardSlice from './reducers/keyboardSlice'

const rootReducer = combineReducers({
	keyboard: keyboardSlice,
})

export const store = configureStore({
	reducer: rootReducer,
})
