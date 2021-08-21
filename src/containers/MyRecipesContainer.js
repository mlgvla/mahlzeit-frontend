import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMyRecipes, deleteRecipe } from '../actions/recipeActions'
import MyRecipes from '../components/my_recipes/MyRecipes';

class MyRecipesContainer extends Component {

    
    componentDidMount(){
        this.props.getMyRecipes()
    }

    render() {
        return (
            <div style={{backgroundColor: 'oldlace', height: '100vh', minHeight: '10vh'}}>
                <MyRecipes deleteRecipe={this.props.deleteRecipe} myRecipes={this.props.myRecipes}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        myRecipes: state.myRecipes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMyRecipes: () => dispatch(getMyRecipes()),
        deleteRecipe: (id) => dispatch(deleteRecipe(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyRecipesContainer);

// export default MyRecipesContainer;
