import React, { Component } from 'react';

class RecipeSearchForm extends Component {

    state = {
        searchString: ''
    }

    handleChange = (e) => {
        this.setState({
            searchString: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let query = this.state.searchString.split(', ').join('%20') //parsed string for fetch request
        this.props.fetchRecipes(query)
       
        this.setState({
            searchString: ''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        size="40" 
                        name="searchString" 
                        value={this.state.searchString} 
                        placeholder="ingredients or recipe name"
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="Find Recipes" />
                </form>
            </div>
        );
    }
}

export default RecipeSearchForm;
