import React from 'react'
import { Footer } from './Footer.jsx'
import { Header } from './Header.jsx'

export const App = () => {
	const startText =
		'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam odio inventore, aut necessitatibus a sed sapiente repudiandae, sunt amet consequuntur iste illum iusto culpa id excepturi, cupiditate reprehenderit ratione laudantium.'
	return (
		<main className='page'>
			<Header />
			<Footer />
		</main>
	)
}
