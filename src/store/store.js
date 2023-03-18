import { combineReducers, configureStore } from '@reduxjs/toolkit'
import modalSlice from './reducers/modalSlice'
import simulatorSlice from './reducers/simulatorSlice'

const rootReducer = combineReducers({
	simulator: simulatorSlice,
	modal: modalSlice,
})

export const store = configureStore({
	reducer: rootReducer,
})
