import React from 'react';

export const RecipeBrief = ({ recipe, selectRecipe }) => {
	return (
		<div className="">
			{/* <RecipeImage imageLink={recipe.image} /> */}
			<h2>
				{recipe.title}
			</h2>
			<button type="button" className="primary-button" onClick={() =>  selectRecipe(recipe)}>
				View Details
			</button>
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
