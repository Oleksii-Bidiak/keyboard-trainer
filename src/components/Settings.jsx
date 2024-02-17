import React from 'react'
import '../styles/components/settings.scss'

export const Settings = () => {
	const [visible, setVisible] = useState(false)

	return (
		<div className='settings _icon-settings'>
			{visible && (
				<div className='setting__modal'>
					<input className='settings__input' placeholder='' />
				</div>
			)}
		</div>
	)
}
