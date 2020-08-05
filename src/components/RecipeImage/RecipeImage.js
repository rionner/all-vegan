import React from 'react';

export const RecipeImage = ({ imageLink, description }) => {
	return (
		<div className="recipe-image">
			<img src={imageLink} alt={description}/>
		</div>
	);
}
