//import React from 'react';

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
    
            return {
                ...state,
                recipeHits: action.recipeHits,
                loading: false
            }
    
        default:
            return state
    }
}

export default recipeReducer;
