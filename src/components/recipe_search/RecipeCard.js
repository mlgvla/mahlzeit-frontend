import React from 'react';

const RecipeCard = (props) => {
    console.log(props)
    return (
        <div>
            {props.recipeHit.recipe.label}
        </div>
    );
}

export default RecipeCard;
