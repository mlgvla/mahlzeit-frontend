import React, { Component } from 'react';
import Select from "react-select";
import makeAnimated from "react-select/animated";

const healthOptionsArray = [
    { label: "alcohol-free", value: "alcohol-free" },
    { label: "dairy-free", value: "dairy-free" },
    { label: "egg-free", value: "egg-free" },
    { label: "gluten-free", value: "gluten-free" },
    { label: "kosher", value: "kosher" },
    { label: "low-sugan", value: "low-sugar" },
    { label: "Mediterranean", value: "Mediterranean" },
    { label: "no-oil-added", value: "no-oil-added" },
    { label: "paleo", value: "paleo" },
    { label: "pescatarian", value: "pescatarian" },
    { label: "shellfish-free", value: "shellfish-free" },
    { label: "tree-nut-free", value: "tree-nut-free" },
    { label: "vegan", value: "vegan" },
    { label: "vegetarian", value: "vegetarian" },
    { label: "wheat-free", value: "wheat-free" }
  ];

class RecipeSearchForm extends Component {

    state = {
        searchString: "",
        healthOptions: []
    };

    handleChange = (e) => {
        this.setState({
            searchString: e.target.value
        })
    }

    handleSelectChange = (options) => {
        // isMulti cancels the event and sends an array of options
        this.setState({
          healthOptions: options
        })
        // console.log(this.state.healthOptions)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let query = this.state.searchString.split(/\s+|,\s+/).join("%20"); //parsed string for fetch request
        let healthOptions;
    
        if (this.state.healthOptions.length > 0) {
          healthOptions = this.state.healthOptions
            .map((option) => "&health=" + option.value)
            .join("");
        } else {
          healthOptions = ""
        }
    
        
        console.log(query);
        console.log(healthOptions);

        this.props.fetchRecipes(query,healthOptions);
        this.setState({
          searchString: "",
          healthOptions: []
        })
    }
    
    render() {
        return  (
            <div className="container">
              <form onSubmit={this.handleSubmit}>
                <div className="row mt-3">
                  <div className="col-4">
                    <input
                      className="form-control"
                      type="text"
                      name="searchString"
                      value={this.state.searchString}
                      placeholder="ingredients or recipe name"
                      onChange={this.handleChange}
                    />
                  </div>
      
                  {/* select box will go here */}
                  <div className="col-4">
                    <Select
                      options={healthOptionsArray}
                      onChange={this.handleSelectChange}
                      isMulti
                      value={this.state.healthOptions}
                      placeholder="Select Dietary Options"
                      components={makeAnimated()}
                    />
                  </div>
                  <div className="col-1">
                    <input
                      className="btn btn-outline-secondary"
                      type="submit"
                      value="Find Recipes"
                    />
                  </div>
                </div>
              </form>
            </div>
          )
    }
}
export default RecipeSearchForm;
