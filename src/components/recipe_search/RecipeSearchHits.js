import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
// we need to send a key=recipeId to each Card - assign in reducer? That's what I've done so far
// is it better to just assign an index in the map function and use that as the key?
// I am keeping recipes that are fetched from the Internet separate from My Recipes that have been saved to the database

class RecipeSearchHits extends Component {

    render() {
        console.log(this.props.recipeHits)
        return (
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                    {this.props.recipeHits.map(recipe => <RecipeCard key={recipe.recipeId} recipeHit={recipe} saveToMyRecipes = {this.props.saveToMyRecipes}/>)}
                </div>
            </div>
            
        );
    }
}

export default RecipeSearchHits;


