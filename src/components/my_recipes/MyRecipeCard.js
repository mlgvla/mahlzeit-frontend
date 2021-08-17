import React from 'react';
import { Link } from 'react-router-dom';

const MyRecipeCard = (props) => {

    const id = props.recipe.id
    const recipe = props.recipe

    const handleDeleteRecipe = (id) => {
        //show alert
        //deleteRecipe(id)
    }

    return (
        <div>
            <Link to={`/myrecipes/${id}`}>{recipe.attributes.label}</Link>
            <button onClick={handleDeleteRecipe} >Delete</button>
        </div>
    );
}

export default MyRecipeCard;
