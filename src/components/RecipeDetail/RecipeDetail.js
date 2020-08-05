import React from 'react';
import { RecipeImage } from '../RecipeImage/RecipeImage';

export const RecipeDetail = ({ recipe }) => {
	return (
		<div className="recipe-full">
			<div className="layout-column-parent">
				<RecipeImage imageDescription={recipe.title} imageLink={recipe.image} />	
			</div>
			<p className="body-text" dangerouslySetInnerHTML={{ __html:recipe.summary}} />
			<div className="layout-row-parent">
				<h3 className="layout-child-2col">
					Serves: {recipe.servings}
				</h3>
				<h3 className="layout-child-2col">
					Ready in: {recipe.readyInMinutes} Minutes
				</h3>
			</div>
		</div>
	);
}
