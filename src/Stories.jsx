import React from 'react';

import { useGlobalContext } from './context';

const Stories = () => {
	const { isLoading, hits, removeStory } = useGlobalContext();

	if (isLoading) return <div className='loading'></div>;

	return (
		<section className='stories'>
			{hits.map(story => {
				const { objectID, author, title, num_comments, url, points } = story;
				return (
					<article className='story' key={objectID}>
						<h4 className='title'>{title}</h4>
						<p className='info'>
							{points} by <span>{author} |</span> {num_comments} comments
						</p>

						<div>
							<a href={url} target='_blank' className='read-link'>
								Read more
							</a>
							<button
								className='remove-btn'
								onClick={() => removeStory(objectID)}>
								Remove
							</button>
						</div>
					</article>
				);
			})}
		</section>
	);
};

export default Stories;
