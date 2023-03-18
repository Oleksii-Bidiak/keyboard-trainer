import React from 'react'
import { useSelector } from 'react-redux'
import { Header } from '../components/Header'
import { Keyboard } from '../components/Keyboard'
import { ModulStatictic } from '../components/ModulStatictic'
import { TextBlock } from '../components/TextBlock'
import { СurrentStatistic } from '../components/СurrentStatistic'
import '../styles/simulator.scss'

export const Simulator = () => {
	const visible = useSelector(state => state.modal.isVisible)

	return (
		<>
			<Header />
			<main className='page'>
				<div className='page__simulator simulator'>
					<div className='simulator__container'>
						<СurrentStatistic />
						<TextBlock className='simulator' />
						<Keyboard />
						{visible && <ModulStatictic />}
					</div>
				</div>
			</main>
		</>
	)
}
