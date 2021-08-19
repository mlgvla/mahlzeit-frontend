import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import './RecipeDetail.css';

const RecipeDetail = (props) => {

    // find a way to use this component regardless of whether the props are coming from the recipehits or MyRecipes
    // maybe I don't have to use the params and can just pass identifiers in through the props - then use conditionals
    // this is too much logic for a presentational component.  Try to generalize what gets passed into props and put
    // the logic in the parent components

    const params = useParams()
    //find the recipe by recipeId?
    const recipe = props.recipeHits.find(recipeHit => params.recipeId === recipeHit.recipeId)
    // use an if in case recipe is not found
    const currentRecipe = recipe.recipe
    
    
 
    return (
        <section>
            <h1>{currentRecipe.label}</h1>
            <img src={currentRecipe.image} alt={currentRecipe.label} />
            <h3>Calories: {Math.round(currentRecipe.calories/currentRecipe.yield)}</h3>
            <h3>Servings: {currentRecipe.yield}</h3>
            <h3>Ingredients:</h3>
            <ul>
                {currentRecipe.ingredientLines.map(ingredient => <li>{ingredient}</li>)}
            </ul>
            <h3>Preparation Instructions:</h3>
            <h3><a href={currentRecipe.url} target="_blank" rel="noreferrer noopener">{currentRecipe.source}</a></h3>
        </section>
    );
}

//mapStateToProps to connect to Redux store to get the recipe from the store
//instead think of passing from a parent component, since the sources are going to be different
const mapStateToProps = state => {
    return {recipeHits: state.recipeHits }
}

export default connect(mapStateToProps)(RecipeDetail);
