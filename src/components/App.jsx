import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Simulator } from '../pages/Simulator'

export const App = () => {
	return (
		<div className='wrapper'>
			<Routes>
				<Route path='/simulator' element={<Simulator />} />
				<Route path='/' element={<Home />} />
			</Routes>
		</div>
	)
}
