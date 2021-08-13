//import React from 'react';
import uuid from 'uuid';

const recipeReducer = (state = {
    recipeHits: [],
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
    
        default:
            return state
    }
}

export default recipeReducer;
