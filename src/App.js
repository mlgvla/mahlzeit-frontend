import './App.css';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'
import Home from './components/Home';
import RecipeSearchContainer from './containers/RecipeSearchContainer';
import MyRecipesContainer from './containers/MyRecipesContainer';
import MainHeader from './components/MainHeader';
import RecipeDetail from './components/RecipeDetail';
import { Component } from 'react';


class App extends Component {
   
    componentDidMount() {
        console.log(this.props)
        //this.props.getMyRecipes()
    }

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
                </main>
                
            </div>
        )
    }
 
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispath => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
