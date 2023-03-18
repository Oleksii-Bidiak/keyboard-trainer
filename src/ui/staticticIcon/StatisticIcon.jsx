import React from 'react'
import './statisticIcon.scss'

export const StatisticIcon = ({ className, score, unitOfMeasurement }) => {
	return (
		<div className={`statictic-icon ${className}`}>
			<div className='statictic-icon__score'>{score}</div>
			<div className='statictic-icon__unit-of-measurement'>
				{unitOfMeasurement}
			</div>
		</div>
	)
}
