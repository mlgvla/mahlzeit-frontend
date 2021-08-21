import React, { Component } from 'react';
import MyRecipeCard from './MyRecipeCard';

class MyRecipes extends Component {

    
    
    render() {
        console.log(this.props.myRecipes)
        const recipes = this.props.myRecipes
        return (
            //put info into a card here
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                    {recipes.map(recipe => <MyRecipeCard key={recipe.id} recipe={recipe} deleteRecipe = {this.props.deleteRecipe}/>)}
                </div>
            </div>

            // <div>
            //     {recipes.map(recipe => <MyRecipeCard key={recipe.id} recipe={recipe} deleteRecipe = {this.props.deleteRecipe}/>)}
            // </div>
        );
    }
}

export default MyRecipes;
