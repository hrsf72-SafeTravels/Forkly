import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { Router, Redirect } from 'react-router';

import RecipeSearch from './recipeSearch.jsx';

class Home extends React.Component {
  constructor(props) {
  	super(props);
    this.state = {
      searchTerm: null,
      recipes: [],
      hasSearched: false,
    };
  }

  setSearchTerm(searchTerm) {
    this.setState({searchTerm: searchTerm});
  }

  searchRecipes(searchTerm) {
    // send ajax request to server, which then searches db for searchTerm
    var searchTerm = {searchTerm: this.state.searchTerm};
    var context = this;

    $.ajax({
      url: '/searchRecipes',
      type:'POST',
      data: JSON.stringify(searchTerm),
      // type: 'GET',
      // data: searchTerm,
      contentType: 'application/json',
      // upon success, adds results to this.state.recipes
      success: function(data){
        console.log('ajax request to search recipes was successful!');
        console.log('response', JSON.parse(data).hits);
        context.props.handleSearchedRecipes(JSON.parse(data).hits);
        //context.setState({recipes: JSON.parse(data).hits});
      },
      error: function(err) {
        console.log('ajax request to search recipes failed');
      }
    });
  };

  render() {
  	return (
  	  <div>
        { this.state.hasSearched ?
          <Redirect to="/recipes" />
          :
          <div className="search">
            <img className="searchImage" src="assets/images/steak.jpg" alt="steak"/>
            <span className="searchText">
              <h3>Yummly</h3>
              <form onSubmit={(event) => {
                  this.searchRecipes(this.state.searchTerm);
                  event.preventDefault();
                  this.setState({
                    hasSearched: true,
                  });
                }}>
                <input className="form-control" type="text"
                        onKeyUp={ (event) => {
                                  this.setSearchTerm(event.target.value)
                                }}
                />
                <button className="btn btn-default">Search Recipes</button>
              </form>
            </span>
          </div>
        }

        {/*<div className="results">
          <ul>
            {this.state.recipes.map((element, index) => <RecipeSearch recipe={element.recipe} key={index}/>)}
          </ul>
        </div>*/}
  	  </div>
  	)
  }
}

export default Home;

