import React from 'react';
import { RecipeBrief } from '../RecipeBrief';

export const RecipeList = ({ recipes, selectRecipe }) => {
  const listItems = recipes.map((recipe, index) =>
    <RecipeBrief key={index} recipe={recipe} selectRecipe={selectRecipe}/>
  );
	return (
		<div className="recipe-list">
			{listItems}
		</div>
	);
}