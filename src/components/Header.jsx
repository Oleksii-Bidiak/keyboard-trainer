import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/header.scss'
import Logo from '../assets/img/logo.svg'

export const Header = () => {
	return (
		<header className='header'>
			<div className='header__container'>
				<Link to={'/'}>
					<img className='header__logo' src={Logo} alt='logo' />
				</Link>
			</div>
		</header>
	)
}
