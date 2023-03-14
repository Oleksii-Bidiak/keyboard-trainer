import React from 'react'
import { useSelector } from 'react-redux'

export const TextBlock = () => {
	const pressetLetters = useSelector(state => state.simulator.pressetLetters)
	const notPressetLetters = useSelector(
		state => state.simulator.notPressetLetters,
	)
	const wrongIndexLetter = useSelector(
		state => state.simulator.wrongIndexLetter,
	)
	return (
		<h1>
			<span className='pressetLettert'>
				{pressetLetters &&
					pressetLetters.split('').map((pressetLetter, index) =>
						wrongIndexLetter.includes(index) ? (
							<span key={index} className='whong-letter'>
								{pressetLetter}
							</span>
						) : (
							pressetLetter
						),
					)}
			</span>
			{notPressetLetters}
		</h1>
	)
}
