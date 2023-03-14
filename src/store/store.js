import { combineReducers, configureStore } from '@reduxjs/toolkit'
import simulatorSlice from './reducers/simulatorSlice'

const rootReducer = combineReducers({
	simulator: simulatorSlice,
})

export const store = configureStore({
	reducer: rootReducer,
})
