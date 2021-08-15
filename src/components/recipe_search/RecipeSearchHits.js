import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
// we need to send a key=recipeId to each Card - assign in reducer? That's what I've done so far
// is it better to just assign an index in the map function and use that as the key?
// I am keeping recipes that are fetched from the Internet separate from My Recipes that have been saved to the database

class RecipeSearchHits extends Component {

    render() {
        console.log(this.props.recipeHits)
        return (
            <div>
                {this.props.recipeHits.map(recipe => <RecipeCard key={recipe.recipeId} recipeHit={recipe} saveToMyRecipes = {this.props.saveToMyRecipes}/>)}
            </div>
        );
    }
}

export default RecipeSearchHits;


