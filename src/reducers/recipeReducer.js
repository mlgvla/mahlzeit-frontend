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
            //map through myRecipes
            const parsedRecipes = action.myRecipes.map(recipe => {
                recipe.attributes.ingredientLines =  JSON.parse(recipe.attributes.ingredientLines)
                return recipe
             })
            console.log(parsedRecipes)
            return {
                ...state,
                myRecipes: parsedRecipes
            }
        
        case "SAVE_TO_MY_RECIPES":  
            console.log(action.recipe)
            return {
                ...state,
                myRecipes: [...state.myRecipes, action.recipe]
                }
            
        case "DELETE_RECIPE":
            const myRecipes = state.myRecipes.filter(recipe => recipe.id !== action.id)
            return {...state, myRecipes}


        default:
            return state
    }
}

export default recipeReducer;
