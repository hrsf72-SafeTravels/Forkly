import React from 'react';
import $ from 'jquery';

class ViewFork extends React.Component {
  constructor(props) {
  	super(props);
    this.state = {};
  }

  searchRecipe(searchTerm) {
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
  	  </div>
  	)
  }
}

export default ViewFork; 

