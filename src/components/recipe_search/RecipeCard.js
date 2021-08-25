import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css'

const RecipeCard = (props) => {
    
    const recipeId = props.recipeHit.recipeId
    const recipeHit = props.recipeHit.recipe
    const imgNotAvailable = "https://imgur.com/7FOqG92"
    //need img onerror handling for broken link

    const handleClick = () => {
    
        let mappedRecipe = {
            label: recipeHit.label,
            image: recipeHit.image,
            url: recipeHit.url,
            yield: recipeHit.yield,
            calories: recipeHit.calories,
            ingredientLines: JSON.stringify(recipeHit.ingredientLines),
            source: recipeHit.source
        }
        props.saveToMyRecipes(mappedRecipe)
    }
    return (
            <div>
                <div className="col">
                    <div className="card myCard">
                        <img src={recipeHit.image || imgNotAvailable} className="card-img-top" alt='' />
                        <div className="card-body">
                        <h5 className="card-title text-center">{recipeHit.label}</h5>
                        <small className="text-muted">{recipeHit.source}</small><br /><br />
                            <div className="subtitle">
                                <h6 className="card-subtitle mb-2 text-muted">{Math.round(recipeHit.calories/recipeHit.yield)} Calories</h6>
                                <h6 className="card-subtitle mb-2 text-muted">{recipeHit.ingredientLines.length} Ingredients</h6><br/>
                            </div>
                            
                            <div className="d-flex justify-content-around align-items-center">
                                {/* try sending the Link to={`/search/${name of parent component/${recipeId}}`} */}
                            <Link className="btn btn-sm btn-outline-secondary"  role="button" to={`/search/${recipeId}`}>View Recipe</Link>
                                    <button type="button" className="btn btn-sm btn-outline-secondary" onClick={handleClick}>Save Recipe</button>
                                <div className="btn-group">
                                    
                                   
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div>
                    <Link to={`/search/${recipeId}`}>{props.recipeHit.recipe.label}</Link>
                    <button onClick={handleClick} >Save</button>
                </div> */}
            </div>
                
        //put info into a card here - include key
       
    );
}

export default RecipeCard;
