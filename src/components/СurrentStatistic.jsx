import React from 'react'
import { useSelector } from 'react-redux'
import { StatisticIcon } from '../ui/staticticIcon/StatisticIcon'

export const СurrentStatistic = ({ className }) => {
	const countWrongtLetters = useSelector(
		state => state.simulator.countWrongtLetters,
	)
	const defaultTextLength = useSelector(
		state => state.simulator.defaultText.length,
	)

	const persentRightLetters =
		100 - Math.ceil((countWrongtLetters / defaultTextLength) * 100)

	return (
		<div className={`${className}__current-statistic current-statistic`}>
			<div className='current-statistic__body'>
				{/* <StatisticIcon
					className='_icon-speed'
					// score={}
					// unitOfMeasurement='symbol per minute'
				/> */}
				<StatisticIcon
					className='_icon-precision'
					score={persentRightLetters}
					unitOfMeasurement='precision'
				/>
				<StatisticIcon
					className='_icon-skull'
					score={countWrongtLetters}
					unitOfMeasurement='errors'
				/>
			</div>
		</div>
	)
}
