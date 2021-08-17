import React from 'react';
import { Link } from 'react-router-dom';

const MyRecipeCard = (props) => {

    const id = props.recipe.id
    const recipe = props.recipe.attributes

    const handleDeleteRecipe = () => {
      
        if (window.confirm(`Are you sure you want to delete the recipe "${recipe.label}"?`))
            props.deleteRecipe(id)
    }

    return (
        <div>
            <Link to={`/myrecipes/${id}`}>{recipe.label}</Link>
            <button onClick={handleDeleteRecipe} >Delete</button>
        </div>
    );
}

export default MyRecipeCard;
