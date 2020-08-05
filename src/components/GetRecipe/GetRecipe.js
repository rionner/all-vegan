
import React, { useState, useEffect } from 'react';
import { RecipeDetail } from '../RecipeDetail';
import { ModalContainer } from '../DesignSystem/Modal';

const apiKey = process.env.REACT_APP_API_KEY;
const recipeUrl = `https://api.spoonacular.com/recipes/`;
const apiParam = `/information?apiKey=${apiKey}`;
const controllerClass = new AbortController();

export const GetRecipe = ({ recipeBrief }) => {
	const [controller, setController] = useState(controllerClass);
	const [isLoading, setIsLoading] = useState(false);
	const [recipe, setRecipe] = useState({});
	let { id } = recipeBrief;

	useEffect(() => {
		try {
			const signal = controller.signal;
			setIsLoading(true);

			fetch(`${recipeUrl}${id}${apiParam}`, {signal})
				.then(data => data.json())
				.then(data => {
					console.log('data', data);
					setRecipe(data);
					setIsLoading(false);
				});
		} catch (error) {
			setIsLoading(false);
		}

		// Specify cleanup after effect
		return function cleanup() {
			controller.abort();
		}
	}, [controller, id, setIsLoading, setRecipe]);

	return (
		<div className="get-recipe">
			{ isLoading ? 
				<h2>Loading recipe...</h2> :
				<ModalContainer
					title={recipe.title}
					body={<RecipeDetail recipe={recipe} />}
				/>
			}
		</div>
	);
}
