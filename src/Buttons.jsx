import React from 'react';
import { useGlobalContext } from './context';

const Buttons = () => {
	const { isLoading, handlePage, page, nbPages } = useGlobalContext();

	return (
		<div className='btn-container'>
			<button onClick={() => handlePage('decrease')} disabled={isLoading}>
				prev
			</button>

			<p>
				{page + 1} of {nbPages}
			</p>
			<button onClick={() => handlePage('increase')} disabled={isLoading}>
				next
			</button>
		</div>
	);
};

export default Buttons;
