import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/main';

import { PageHeader } from './components/PageHeader/PageHeader';
import { GetRecipeList } from './components/RecipeList/GetRecipeList';

class App extends Component {
	render() {
		return (
			<div className="layout-document">
				<PageHeader />
				<GetRecipeList />
			</div>
		);
	}
}

// ========================================

const wrapper = document.getElementById('plant-based-life-recipes');
wrapper ? ReactDOM.render(
	<App />
, wrapper) : false;