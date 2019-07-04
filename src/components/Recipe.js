import React from 'react';

const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className="recipe-item">
            <h1>{title}</h1>
            <img src={image} alt=""/>
            <ul className="ingredients">
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p><strong>Калории: {calories.toFixed(0)}</strong></p>
        </div>
    );
}

export default Recipe;