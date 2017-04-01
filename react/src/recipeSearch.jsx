import React from 'react';
import $ from 'jquery';
import RecipeIngredients from './recipeIngredients';
import RecipeSaveButton from './RecipeSaveButton';
import diaglog from 'jquery-ui/ui/widgets/dialog';
import CategorySelection from './CategorySelection';

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
    $('body').addClass('stop-scrolling');
     var popUpList = $(`<div class="category-card"> 
      <div class="popup-container">
        <h2 class="popup-title">Saved ${this.props.recipe.label} to favorites. Pick categories.</h2>
        <hr />
          <div>
            <img class="popup-img" src=${this.props.recipe.image}>
            <p>
              <input type="checkbox" id="salad" value="first_checkbox">
              <label for="cbox1">Salad</label>
            </p>
            <p>
              <input type="checkbox" id="soup" value="second_checkbox">
              <label for="cbox2">Soup</label>
            </p>
            <p>
              <input type="checkbox" id="mainDishes" value="third_checkbox">
              <label for="cbox3">Main Dishes</label>
            </p>
            <p>
              <input type="checkbox" id="desserts" value="fourth_checkbox">
              <label for="cbox4">Desserts</label>
            </p>
            <button class="popup-btn btn">All Done</button>
          </div>
      </div>
      </div>`);
     
   
    popUpList.dialog({
      modal: true,
      open: function(event, ui) {
          popUpList.removeAttr('style');
          $(".ui-dialog-titlebar-close", ui.dialog | ui).hide();
      },
     // buttons: { "OK": function() { $(this).dialog("close"); } },       
      minHeight: 450,
      height: 400,
      width: 450
    });

    var saladSelected = false;
    var soupSelected = false;
    var dessertsSelected = false;
    var mainDishesSelected = false;
    $(document).on('change', '#salad', () => {
        console.log('salad is checked');
        saladSelected = !saladSelected;
    });

    $(document).on('change', '#soup', () => {
        console.log('soup is checked');
        soupSelected = !soupSelected;
    });

    $(document).on('change', '#desserts', () => {
        console.log('desserts is checked');
        dessertsSelected = !dessertsSelected;
    });

    $(document).on('change', '#mainDishes', () => {
        console.log('mainDishes is checked');
        mainDishesSelected = !mainDishesSelected;
    });

    $(document).on('click', '.popup-btn', () => {
      $('body').removeClass('stop-scrolling');
      console.log('popup-btn is clicked');
      //console.log('=======>', saladSelected);
      let { label, ingredients, image } = this.props.recipe;
      let name = label;
      let categories = [];
      if (saladSelected) {
        categories.push('salad');
      }
      if (soupSelected) {
        categories.push('soup');
      }
      if (dessertsSelected) {
        categories.push('desserts');
      }
      if (mainDishesSelected) {
        categories.push('mainDishes');
      }
      let recipe = { name, ingredients, categories, image };
      popUpList.dialog('close');
      $.ajax({
        url: '/saveRecipe',
        type:'POST',
        data: JSON.stringify(recipe),
        contentType: 'application/json',
        success: function(data){
          console.log('Gabe is troller!');
        },
        error: function(err) {
          console.log('ajax request failed');
        }
      });
    });
   

    // console.log('hihi', popUpList.classList);

    // let { label, ingredients } = this.props.recipe;
    // let name = label;
    // let recipe = { name: name, ingredients: ingredients };
    // $.ajax({
    //   url: '/saveRecipe',
    //   type:'POST',
    //   data: JSON.stringify(recipe),
    //   contentType: 'application/json',
    //   success: function(data){
    //     console.log('Gabe is troller!');
    //   },
    //   error: function(err) {
    //     console.log('ajax request failed');
    //   }
    // });
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
