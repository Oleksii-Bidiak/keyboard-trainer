import React from 'react'
import { KeyBoard } from './KeyBoard.jsx'

export const App = () => {
	const startText =
		'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam odio inventore, aut necessitatibus a sed sapiente repudiandae, sunt amet consequuntur iste illum iusto culpa id excepturi, cupiditate reprehenderit ratione laudantium.'
	//   const startText = "Lorem, ipsum dolor";
	return (
		<>
			<main className='page'>
				<KeyBoard startText={startText} />
			</main>
		</>
	)
}
