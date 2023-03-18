import React, { useEffect } from 'react'
import { rows } from '../utils/keys'
import { useDispatch, useSelector } from 'react-redux'
import {
	addWrongIndexLetter,
	countLetters,
	restart,
	setActiveButton,
	setNotPressetLetter,
	setNotPressetLetters,
	setPressetLetters,
} from '../store/reducers/simulatorSlice'
import { specificKeys } from '../utils/specificKeys'
import { setVisible } from '../store/reducers/modalSlice'

export const Keyboard = () => {
	const indexLetter = useSelector(state => state.simulator.indexLetter)
	const defaultText = useSelector(state => state.simulator.defaultText)
	const activeButton = useSelector(state => state.simulator.activeButton)
	const pressetLetters = useSelector(state => state.simulator.pressetLetters)
	const notPressetLetters = useSelector(
		state => state.simulator.notPressetLetters,
	)
	const isVisible = useSelector(state => state.modal.isVisible)

	const dispatch = useDispatch()
	const countingLetters = e => {
		dispatch(countLetters())
		dispatch(setNotPressetLetters(notPressetLetters.slice(1)))
		dispatch(setPressetLetters(pressetLetters + notPressetLetters[0]))
		dispatch(setActiveButton(e.key))
	}

	const restartSimulation = () => {
		dispatch(restart())
	}

	const onKeypress = e => {
		if (isVisible && e.keyCode === 13) {
			restartSimulation()
			dispatch(setVisible(false))
			return null
		}
		if (
			!notPressetLetters ||
			Object.values(specificKeys).includes(e.keyCode) // shift key
		) {
			return null
		}

		countingLetters(e)

		if (!(e.key === defaultText[indexLetter])) {
			dispatch(addWrongIndexLetter(indexLetter))
		}
	}

	const onKeyup = () => {
		dispatch(setActiveButton(''))
		if (notPressetLetters.length === 0) {
			dispatch(setVisible(true))
		}
	}

	useEffect(() => {
		document.addEventListener('keydown', onKeypress)
		return () => {
			document.removeEventListener('keydown', onKeypress)
		}
	})

	useEffect(() => {
		document.addEventListener('keyup', onKeyup)
		return () => {
			document.removeEventListener('keyup', onKeyup)
		}
	})

	useEffect(() => {
		dispatch(setNotPressetLetter())
	}, [])

	return (
		<div className='simulator__body'>
			{rows.map((row, index) => (
				<div key={index} className='simulator__line'>
					{row.map((item, index) => (
						<div
							key={index}
							className={item[1]}
							style={
								activeButton === item[0]
									? {
											backgroundColor:
												'rgba(59, 59, 148, 0.884)',
											border: '2px solid rgba(59, 59, 148, 0.884)',
									  }
									: {}
							}>
							{item[0]}
						</div>
					))}
				</div>
			))}
		</div>
	)
}
