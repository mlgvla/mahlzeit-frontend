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
            <div className="container">
                <div className="row">
                    <div className="col-4 offset-4">         
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-group mb-3">
                                <input className="form-control"
                                    type="text"        
                                    name="searchString" 
                                    value={this.state.searchString} 
                                    placeholder="ingredients or recipe name"
                                    onChange={this.handleChange}
                                />
                                <div className="input-group-append">
                                    {/* select box will go here */}
                                    <input  className="btn btn-outline-success"type="submit" value="Find Recipes" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default RecipeSearchForm;
