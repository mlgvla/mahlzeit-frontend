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
    //can destructure params:  const {parent, id} = useParams()

    //use an if statement here to find the appropriate recipe from recipeHits or myRecipes

    //find the recipe by recipeId?
    const recipe = props.recipeHits.find(recipeHit => params.recipeId === recipeHit.recipeId)
    // use an if in case recipe is not found
    const currentRecipe = recipe.recipe
  
    
 
    return (
        <div className="container" >
            <div className="card mt-3 mb-3 offset-2" style={{ width: '75%' }}>
                <div className="row g-0">
                    <div className="col-4">
                        <img src={currentRecipe.image} className="img-fluid rounded-start" alt="..." width="100%" />
                    </div>
                    <div className="col-8 align-self-center text-center ">
                        <div className="card-body">
                            <h2 className="card-title">{currentRecipe.label}</h2>
                            <h5>
                                <p className="card-text">Get the full recipe at <a href={currentRecipe.url} target="_blank" rel="noreferrer noopener">{currentRecipe.source}</a></p>
                                <p className="card-text">Calories/Serving: {Math.round(currentRecipe.calories/currentRecipe.yield)}</p>
                                <p className="card-text">Number of Servings: {currentRecipe.yield}</p>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 offset-2">
                        <div className="card-header">
                        <h3>Ingredients</h3>
                        </div>
                        <div className="card-body">
                            <div className="card-text">
                                <ul>
                                    {currentRecipe.ingredientLines.map(ingredient => <li>{ingredient}</li>)}    
                                </ul>
                                Preparation instructions at <a href={currentRecipe.url} target="_blank" rel="noreferrer noopener">{currentRecipe.source}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <section>
        //     <h1>{currentRecipe.label}</h1>
        //     <img src={currentRecipe.image} alt={currentRecipe.label} />
        //     <h3>Calories: {Math.round(currentRecipe.calories/currentRecipe.yield)}</h3>
        //     <h3>Servings: {currentRecipe.yield}</h3>
        //     <h3>Ingredients:</h3>
        //     <ul>
        //         {currentRecipe.ingredientLines.map(ingredient => <li>{ingredient}</li>)}
        //     </ul>
        //     <h3>Preparation Instructions:</h3>
        //     <h3><a href={currentRecipe.url} target="_blank" rel="noreferrer noopener">{currentRecipe.source}</a></h3>
        // </section>
    );
}

//mapStateToProps to connect to Redux store to get the recipe from the store
//instead think of passing from a parent component, since the sources are going to be different
const mapStateToProps = state => {
    return {recipeHits: state.recipeHits }
}

export default connect(mapStateToProps)(RecipeDetail);
