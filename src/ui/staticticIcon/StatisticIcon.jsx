import React from 'react'
import './statisticIcon.scss'

export const StatisticIcon = ({ className, score, unitOfMeasurement }) => {
	return (
		<div className={`statistic-icon ${className}`}>
			<div className='statistic-icon__body'>
				<div className='statistic-icon__score'>
					{score}
					{unitOfMeasurement === 'precision' ? '%' : ''}
				</div>
				<div className='statistic-icon__unit-of-measurement'>
					{unitOfMeasurement}
				</div>
			</div>
		</div>
	)
}
