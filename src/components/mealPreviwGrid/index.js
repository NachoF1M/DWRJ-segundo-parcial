import React, { useState, useEffect } from 'react';
import { SearchMealByName } from '../../services/mealtService.js';
import './index.css';
import MealPreview from '../../components/mealPreview/index.js';
import SearchBox from '../../components/searchBox';

const MealPreviwGrid = () => {
	const [meals, setMeals] = useState([]);
	const [selectedMeal, setSelectedMeal] = useState(null);
	const [searchTerm, setSearchTerm] = useState('Bread');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const searchMeals = async () => {
			setLoading(true);
			try {
				const mealData = await SearchMealByName(searchTerm);

				// Check if there are no meals found
				if (!mealData || mealData.length === 0) {
					console.log('No meals found.');
					setMeals([]);
				} else {
					setMeals(mealData);
				}
			} catch (error) {
				console.error('Error searching for meals:', error);
			} finally {
				setLoading(false);
			}
		};

		searchMeals();
	}, [searchTerm]);
	const handleMealClick = (meal) => {
		setSelectedMeal(meal);
	};

	return (
		<div>
			<SearchBox onSearch={setSearchTerm} />
			{loading && <div>Loading meals...</div>}
			{!loading && meals.length === 0 && <div>No se encontraron comidas.</div>}
			<div className="meal-grid">
				{selectedMeal ? (
					<MealPreview meal={selectedMeal} />
				) : (
					meals.map((meal) => (
						<div key={meal.idMeal} className="meal-item" onClick={() => handleMealClick(meal)}>
							<img src={meal.strMealThumb} alt={meal.strMeal} />
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default MealPreviwGrid;
