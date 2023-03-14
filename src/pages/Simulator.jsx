import React from 'react'
import { Keyboard } from '../components/Keyboard'
import { TextBlock } from '../components/TextBlock'
import '../styles/simulator.scss'

export const Simulator = () => {
	return (
		<div className='simulator'>
			<div className='simulator__container'>
				<TextBlock />
				<Keyboard />
			</div>
		</div>
	)
}
