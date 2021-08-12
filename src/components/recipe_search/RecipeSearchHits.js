import React, { Component } from 'react';
import RecipeCard from './RecipeCard';

class RecipeSearchHits extends Component {

    render() {
        return (
            <div>
                {this.props.recipeHits.map(recipe => <RecipeCard recipeHit={recipe}/>)}
            </div>
        );
    }
}

export default RecipeSearchHits;


