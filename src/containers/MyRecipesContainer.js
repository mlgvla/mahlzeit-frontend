import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMyRecipes } from '../actions/recipeActions'

class MyRecipesContainer extends Component {

    
    componentDidMount(){
        this.props.getMyRecipes()
    }

    render() {
        return (
            <div>
                <h1>Here are my recipes!</h1>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyRecipesContainer);

// export default MyRecipesContainer;
