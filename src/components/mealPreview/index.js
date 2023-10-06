import React from 'react';

import './index.css';

const MealPreviw = ({ meal }) => {
	return (
		<div>
		<div class="meal-title"><h2>{meal.strMeal}</h2> </div>
			<div class="meal-details">

				<div class="column">

					<img class="img-details" src={meal.strMealThumb} alt={meal.strMeal} />
				</div>
				<div class="column">
					<div class="meal-info">
						<h4>Intructions:</h4>
						<p>{meal.strInstructions}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default MealPreviw;
