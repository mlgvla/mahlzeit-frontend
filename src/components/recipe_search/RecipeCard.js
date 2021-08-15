import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = (props) => {
    
    const recipeId = props.recipeHit.recipeId
    const recipeHit = props.recipeHit.recipe

    const handleClick = () => {
    
        let mappedRecipe = {
            label: recipeHit.label,
            image: recipeHit.image,
            url: recipeHit.url,
            yield: recipeHit.yield,
            calories: recipeHit.calories,
            ingredientLines: JSON.stringify(recipeHit.ingredientLines),
            source: recipeHit.source
        }
        props.saveToMyRecipes(mappedRecipe)
    }
    return (
        <div>
            <Link to={`/search/${recipeId}`}>{props.recipeHit.recipe.label}</Link>
            <button onClick={handleClick} >Save</button>
        </div>
    );
}

export default RecipeCard;
