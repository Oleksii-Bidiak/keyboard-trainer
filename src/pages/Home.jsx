import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.scss'
import Logo from '../assets/img/logo.svg'

export const Home = () => {
	return (
		<main className='page'>
			<div className='page__home home'>
				<section className='home__main-screen main-screen'>
					<div className='main-screen__container'>
						<img
							className='main-screen__logo'
							src={Logo}
							alt='logo'
						/>
						<h1 className='main-screen__title title'>
							Keyboard Simulator
							<span className='title__link'>
								<Link to='/simulator'>Get started</Link>
							</span>
						</h1>
					</div>
				</section>
			</div>
		</main>
	)
}
