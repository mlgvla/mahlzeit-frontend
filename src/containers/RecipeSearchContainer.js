import React, { Component } from 'react';
import RecipeSearchForm from '../components/recipe_search/RecipeSearchForm'
import RecipeSearchHits from '../components/recipe_search/RecipeSearchHits';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions/recipeActions';

class RecipeSearchContainer extends Component {
    
    render() {
        console.log(this.props)
        return (
            <div>
                <RecipeSearchForm fetchRecipes={this.props.fetchRecipes} />
                <br /><br /><br />
                <RecipeSearchHits recipeHits={this.props.recipeHits}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        recipeHits: state.recipeHits,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRecipes: (query) => dispatch(fetchRecipes(query))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(RecipeSearchContainer);
