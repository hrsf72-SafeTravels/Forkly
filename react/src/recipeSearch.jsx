import React from 'react';

class RecipeSearch extends React.Component {
  constructor(props) {
  	super(props);
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
        console.log('ajax request was successful!');
        console.log('response', data);
        context.setState({recipes: data});
        
      },
      error: function(err) {
        console.log('ajax request failed');
      }

    });
  };

  render() {
  	return (
  	  <li>
        <div className='recipeName'>
          <h3><a href='#'>{this.props.recipe.name}</a></h3>
        </div>
  	  </li>
  	)
  }

}

export default RecipeSearch;