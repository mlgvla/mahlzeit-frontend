export const fetchRecipes = (query) => {
    const API_ID = "b68cd465"
    const API_KEY = "060060896a4285d7f877c5bcfeb4eddf"
  
    return (dispatch) => {
        dispatch( { type: "LOADING_RECIPES" } )
        fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${API_ID}&app_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                dispatch( { type: "ADD_RECIPE_HITS", recipeHits: data.hits } )
            })
    }
}

export const getMyRecipes = () => {
    console.log("in getMyRecipes")

    return (dispatch) => {
        dispatch( { type: "LOADING_MY_RECIPES" } )
        fetch("http://localhost:3001/recipes")
        .then(res => res.json())
        .then(myRecipes => {
            dispatch( { type: "LOAD_MY_RECIPES", myRecipes: myRecipes.data } )
        })
    }
    
}

