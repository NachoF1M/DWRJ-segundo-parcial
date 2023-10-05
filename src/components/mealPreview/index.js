import React from 'react';

import './index.css';

const MealPreviw = ({ meal }) => {
    return (
        <div className="meal-details">
            <h2>{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>{meal.strInstructions}</p>
        </div>
    );
};
export default MealPreviw;
