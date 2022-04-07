import React from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
	const { handleQuery, query } = useGlobalContext();
	console.log(query);
	return (
		<form className='search-form' onSubmit={e => e.preventDefault()}>
			<h2>Search hacker news</h2>
			<input
				className='form-input'
				type='text'
				value={query}
				onChange={e => handleQuery(e.target.value)}
			/>
		</form>
	);
};

export default SearchForm;
