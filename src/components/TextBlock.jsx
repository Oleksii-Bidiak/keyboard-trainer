import React from 'react'

export const TextBlock = () => (
	<div className='content'>
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
	</div>
)
