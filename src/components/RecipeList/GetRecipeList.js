
import React, { useState, useEffect } from 'react';
import { RecipeList } from './RecipeList';
import { GetRecipe } from '../GetRecipe';

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = `https://api.spoonacular.com/recipes/search?apiKey=${apiKey}`;
const controllerClass = new AbortController();

export const GetRecipeList = () => {
	const [controller, setController] = useState(controllerClass);
	const [isLoading, setIsLoading] = useState(false);
	const [recipes, setRecipes] = useState([]);
	const [selectedRecipe, setSelectedRecipe] = useState(null);

	const [page, setPage] = useState(0);
	const [increment, setIncrement] = useState(2);

	const selectRecipe = recipe => {
		console.log('selectRecipe', recipe);
		setSelectedRecipe(recipe);
	}

	useEffect(() => {
		try {
			const signal = controller.signal;
			setIsLoading(true);

			fetch(`${apiUrl}&diet=vegan&number=${increment}`, {signal})
				.then(data => data.json())
				.then(data => {
					setRecipes(data.results);
					setIsLoading(false);
					console.log('recipes', data.results);
				});
		} catch (error) {
			setIsLoading(false);
		}

		// Specify cleanup after effect
		return function cleanup() {
			controller.abort();
		}
	}, [increment, controller, setIsLoading, setRecipes]);

	return (
		<div className="get-recipe-list">
			{selectedRecipe && (
				<GetRecipe recipeBrief={selectedRecipe} />
			)}
			{ isLoading ? 
				<h2>Loading recipes...</h2> :
				<RecipeList recipes={recipes} selectRecipe={selectRecipe}/>
			}
		</div>
	);
}

// <GetRecipe recipeBrief={selectedRecipe} />
