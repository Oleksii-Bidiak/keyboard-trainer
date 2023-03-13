import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Trainer } from '../pages/Trainer'
import { Footer } from './Footer'
import { Header } from './Header'

export const App = () => {
	return (
		<>
			<Header />
			<main className='page'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/' element={<Trainer />} />
				</Routes>
			</main>
			<Footer />
		</>
	)
}
