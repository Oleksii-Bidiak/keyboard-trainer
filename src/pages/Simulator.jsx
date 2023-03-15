import React from 'react'
import { Header } from '../components/Header'
import { Keyboard } from '../components/Keyboard'
import { TextBlock } from '../components/TextBlock'
import '../styles/simulator.scss'

export const Simulator = () => {
	return (
		<>
			<Header />
			<main className='page'>
				<div className='page__simulator simulator'>
					<div className='simulator__container'>
						<TextBlock />
						<Keyboard />
					</div>
				</div>
			</main>
		</>
	)
}
