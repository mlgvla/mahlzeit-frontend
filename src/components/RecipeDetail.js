import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const RecipeDetail = (props) => {
    const params = useParams()
    //find the recipe by recipeId?
    const recipe = props.recipeHits.find(recipeHit => params.recipeId === recipeHit.recipeId)
    // use an if in case recipe is not found
 
    return (
        <section>
            <h1>Recipe Detail for {recipe.recipe.label}</h1>
        </section>
    );
}

//mapStateToProps to connect to Redux store to get the recipe from the store
const mapStateToProps = state => {
    return {recipeHits: state.recipeHits }
}

export default connect(mapStateToProps)(RecipeDetail);
