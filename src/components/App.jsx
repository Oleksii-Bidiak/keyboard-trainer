import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Simulator } from '../pages/Simulator'
import { Footer } from './Footer'
import { Header } from './Header'

export const App = () => {
	return (
		<>
			<Header />
			<main className='page'>
				<Routes>
					<Route path='/simulator' element={<Simulator />} />
					<Route path='/' element={<Home />} />
				</Routes>
			</main>
			<Footer />
		</>
	)
}
