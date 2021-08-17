//import React from 'react';
import uuid from 'uuid';

const recipeReducer = (state = {
    recipeHits: [],
    myRecipes: [],
    loading: false
    }, 
    action) => {
   
    switch (action.type) {
        case "LOADING_RECIPES_HITS":
            return {
                ...state,
                recipeHits: [...state.recipeHits],
                loading: true
            }

        case "ADD_RECIPE_HITS":
            
            const hitsWithRecipeId = action.recipeHits.map(recipeHit => ({...recipeHit, recipeId: uuid()}))
            return {
                ...state,
                recipeHits: hitsWithRecipeId,
                loading: false
            }

        case "LOADING_MY_RECIPES":
            // console.log("In LOADING_MY_RECIPES")
            // this is creating a nested array - why?
            return {
                ...state,
                myRecipes: [...state.myRecipes],
                loading: true
            }

        case "LOAD_MY_RECIPES":
            // console.log("in load my recipes")
            console.log(action.myRecipes)
            console.log("Here are my recipes as they are before parsing")
            //map through myRecipes
            const parsedRecipes = action.myRecipes.map(recipe => { 
               
               
                return {...recipe, ingredientLines: JSON.parse(recipe.attributes.ingredientLines) }
                
            )
            console.log("These are the parsedRecipes:")
            console.log(parsedRecipes)
            return {
                ...state,
                myRecipes: parsedRecipes
            }
        
        case "SAVE_TO_MY_RECIPES":  
            console.log(action.recipe)
            // action.recipe includes "data" at top level - need to remove that before putting in global store so the record matches the recipes loaded directly from database
            return {
                ...state,
                myRecipes: [...state.myRecipes, action.recipe]
                }
            
    
        default:
            return state
    }
}

export default recipeReducer;
