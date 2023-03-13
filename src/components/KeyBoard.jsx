import React, { useEffect } from 'react'
import '../styles/components/keyboard.scss'
import { rows } from '../utils/keys'
import { useDispatch, useSelector } from 'react-redux'
import {
	addWrongIndexLetter,
	countLetters,
	setActiveButton,
	setNotPressetLetter,
	setNotPressetLetters,
	setPressetLetters,
} from '../store/reducers/keyboardSlice'

export const Keyboard = () => {
	// const [notPressetLetters, setNotPressetLetters] = useState(startText)
	// const [pressetLetters, setPressetLetters] = useState('')

	const indexLetter = useSelector(state => state.keyboard.indexLetter)
	const defaultText = useSelector(state => state.keyboard.defaultText)
	const wrongIndexLetter = useSelector(
		state => state.keyboard.wrongIndexLetter,
	)
	const activeButton = useSelector(state => state.keyboard.activeButton)
	const pressetLetters = useSelector(state => state.keyboard.pressetLetters)
	const notPressetLetters = useSelector(
		state => state.keyboard.notPressetLetters,
	)

	const dispatch = useDispatch()

	const countingLetters = e => {
		const chengeStr = notPressetLetters.slice(1)
		const firstLetter = pressetLetters + notPressetLetters[0]
		dispatch(countLetters())
		dispatch(setNotPressetLetters(chengeStr))
		dispatch(setPressetLetters(firstLetter))
		setPressetLetters(pressetLetters + notPressetLetters[0])
		dispatch(setActiveButton(e.key))
	}

	const onKeypress = e => {
		if (!notPressetLetters || e.keyCode === 16) {
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
		console.log(activeButton)
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
		<div className='keyboard'>
			<div className='keyboard__container'>
				<div className='content'>
					<h1>
						<span className='pressetLettert'>
							{pressetLetters &&
								pressetLetters
									.split('')
									.map((pressetLetter, index) =>
										wrongIndexLetter.includes(index) ? (
											<span
												key={index}
												className='whong-letter'>
												{pressetLetter}
											</span>
										) : (
											pressetLetter
										),
									)}
						</span>
						{notPressetLetters}
					</h1>
				</div>
				<div className='keyboard__body'>
					{rows.map((row, index) => (
						<div key={index} className='keyboard__line'>
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
			</div>
		</div>
	)
}
