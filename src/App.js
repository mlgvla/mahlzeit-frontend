import './App.css';
import { Route } from 'react-router-dom';
// import { connect } from 'react-redux'
import Home from './components/Home';
import RecipeSearchContainer from './containers/RecipeSearchContainer';
import MyRecipesContainer from './containers/MyRecipesContainer';
import MainHeader from './components/MainHeader';
import RecipeDetail from './components/recipe_search/RecipeDetail';
import MyRecipeDetail from './components/my_recipes/MyRecipeDetail';
import { Component } from 'react';
// import { getMyRecipes } from './actions/recipeActions'



class App extends Component {
   

    render() {
        return (
            <div className="App">
                <MainHeader />
                <main>
                    <Route exact path='/'><Home /></Route>
                    <Route exact path='/search'><RecipeSearchContainer /></Route>
                    {/* will need a unique id for each hit - do that in the reducer */}
                    <Route path='/search/:recipeId'><RecipeDetail /></Route>
                    <Route exact path='/myrecipes'><MyRecipesContainer /></Route>
                    <Route path='/myrecipes/:id'><MyRecipeDetail/></Route>
                    {/* <Route path='/myrecipes/:parent/:id'><MyRecipeDetail/></Route> */}
                </main>
                
            </div>
        )
    }
 
}

// const mapStateToProps = state => {
//     return {}
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         getMyRecipes: () => dispatch(getMyRecipes()),
//     }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
