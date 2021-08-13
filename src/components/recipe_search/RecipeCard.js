import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = (props) => {
    
    const recipeId = props.recipeHit.recipeId
    return (
        <div>
            <Link to={`/search/${recipeId}`}>{props.recipeHit.recipe.label}</Link>
        </div>
    );
}

export default RecipeCard;
