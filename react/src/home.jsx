import React from 'react';
import $ from 'jquery';

import RecipeSearch from './recipeSearch.jsx';

class Home extends React.Component {
  constructor(props) {
  	super(props);
    this.state = {
      searchTerm: null,
      recipes: []
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
        console.log('response', data);
        context.setState({recipes: data});
        
      },
      error: function(err) {
        console.log('ajax request to search recipes failed');
      }
    });
  };

  render() {
  	return (
  	  <div>
        <h3>Welcome! Which recipes would you like to find?</h3>
  	  	<input type="text" 
               onKeyUp={ (event) => {
                          this.setSearchTerm(event.target.value)
                        }}
        />
        <button onClick={(event) => {
                          this.searchRecipes(this.state.searchTerm)
                        }}
        >Search</button>
        <div>
          <ul>
            {this.state.recipes.map(recipe => <RecipeSearch recipe={recipe}/>)}
          </ul>
        </div>
  	  </div>
  	)
  }
}

export default Home; 

