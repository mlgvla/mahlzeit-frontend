import React from 'react';
import { Link } from 'react-router-dom';
import '../recipe_search/RecipeCard.css'

const MyRecipeCard = (props) => {

    const id = props.recipe.id
    const recipe = props.recipe.attributes
    console.log(recipe)

    const handleDeleteRecipe = () => {
      
        if (window.confirm(`Are you sure you want to delete the recipe "${recipe.label}"?`))
            props.deleteRecipe(id)
    }

    return (
        <div>
                            <div className="col">
                    <div className="card myCard">
                        <img src={recipe.image} className="card-img-top" alt='' />
                        <div className="card-body">
                        <h5 className="card-title text-center">{recipe.label}</h5>
                        <small className="text-muted">{recipe.source}</small><br /><br />
                            <div className="subtitle">
                                <h6 className="card-subtitle mb-2 text-muted">{Math.round(recipe.calories/recipe.yield)} Calories</h6>
                                <h6 className="card-subtitle mb-2 text-muted">{recipe.ingredientLines.length} Ingredients</h6><br/>
                            </div>
                            
                            <div className="d-flex justify-content-around align-items-center">
                                {/* I just found out I can pass props through Route! */}
                            <Link className="btn btn-sm btn-outline-secondary"  role="button"to={`/myrecipes/${id}`}>View Recipe</Link>
                                    <button type="button" className="btn btn-sm btn-outline-secondary" onClick={handleDeleteRecipe}>Delete Recipe</button>
                                <div className="btn-group">
                                    
                                   
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>


            {/* <Link to={`/myrecipes/${id}`}>{recipe.label}</Link>
            <button onClick={handleDeleteRecipe} >Delete</button> */}
        </div>
    );
}

export default MyRecipeCard;
