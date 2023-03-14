import React, { useEffect } from 'react'
import { rows } from '../utils/keys'
import { useDispatch, useSelector } from 'react-redux'
import {
	addWrongIndexLetter,
	countLetters,
	setActiveButton,
	setNotPressetLetter,
	setNotPressetLetters,
	setPressetLetters,
} from '../store/reducers/simulatorSlice'
import { specificKeys } from '../utils/specificKeys'

export const Keyboard = () => {
	const indexLetter = useSelector(state => state.simulator.indexLetter)
	const defaultText = useSelector(state => state.simulator.defaultText)
	const activeButton = useSelector(state => state.simulator.activeButton)
	const pressetLetters = useSelector(state => state.simulator.pressetLetters)
	const notPressetLetters = useSelector(
		state => state.simulator.notPressetLetters,
	)

	const dispatch = useDispatch()
	const countingLetters = e => {
		dispatch(countLetters())
		dispatch(setNotPressetLetters(notPressetLetters.slice(1)))
		dispatch(setPressetLetters(pressetLetters + notPressetLetters[0]))
		dispatch(setActiveButton(e.key))
	}

	const onKeypress = e => {
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
	}, [activeButton])

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
