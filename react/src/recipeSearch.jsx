import React from 'react';
import $ from 'jquery';
import RecipeIngredients from './recipeIngredients';
import RecipeSaveButton from './RecipeSaveButton';

class RecipeSearch extends React.Component {
  constructor(props) {
  	super(props);
    this.saveRecipeClick = this.saveRecipeClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  setSearchTerm(searchTerm) {
    this.setState({searchTerm: searchTerm});
  }

  saveRecipeClick() {
    console.log('h');
    let { label, ingredients, image } = this.props.recipe;
    let name = label;
    let recipe = { name: name, ingredients: ingredients, image: image};
    $.ajax({
      url: '/saveRecipe',
      type: 'POST',
      data: JSON.stringify(recipe),
      contentType: 'application/json',
      success: function(data){
        console.log('Gabe is troller!');
      },
      error: function(err) {
        console.log('ajax request failed');
      }
    });
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

  handleClick(recipeId) {
    const { router } = this.context
    router.history.push('/recipe/' + recipeId);
  }

  render() {
    console.log(this.props)
  	return (
  	  <div className='recipes results col-md-3'>
        <div className="recipe-img-container">
          <img className="recipe-img" src={this.props.recipe.image} />
        </div>
        <div className='searchName'>
          <h4 className="searchName-header" onClick={() => this.handleClick(this.props.id)}>{this.props.recipe.label}</h4>
          <p className="diet-info">{this.props.recipe.dietLabels[0] || 'None'}</p>
        </div>
        <div>
          <RecipeSaveButton saveRecipeClick={this.saveRecipeClick} />
        </div>
  	  </div>
  	)
  }
}

RecipeSearch.contextTypes = {
  router: React.PropTypes.object
}

export default RecipeSearch;
