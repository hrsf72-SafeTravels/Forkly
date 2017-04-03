import React from 'react';
import $ from 'jquery';
import ViewRecipesNavBar from './viewRecipesNavBar';
import RadioButtonBar from './radioButtons';

class SavedRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
  }

  //before initial render, use ajax call to retrieve all recipes belonging to user
  componentDidMount() {
    let boundThis = this;
    $.ajax({
      url: '/getSavedRecipes',
      type: 'GET',
      success: function(data){
        boundThis.setState({ savedRecipes: data });
      },
      error: function(err) {
        console.log('could not retrieve any recipes for user');
      }
    });
  }

  handleClick(recipeId) {
    //redirect to /recipes/recipeId
    const { router } = this.context;
    router.history.push('/recipe/' + recipeId);
  }

  handleCategoryClick(category) {
    let boundThis = this;
    $.ajax({
      url: '/getSavedRecipes',
      type: 'GET',
      success: function(data){
        if(boundThis.state.clicked !== category) {
          let filteredData = data.filter(function(value) {
            if(value.categories.includes(category)) {
              return value;
            }
          });
          boundThis.setState({ savedRecipes: filteredData, clicked: category });
        } else {
          boundThis.setState({ savedRecipes: data, clicked: null })
        }
      },
      error: function(err) {
        console.log('could not retrieve any recipes for user');
      }
    });

  }

  render () {
    var recipesArray = [];
    var template = '';
    if (this.state.savedRecipes) {
      this.state.savedRecipes.forEach((recipe, index) => {
      recipesArray.push(
        <li className="recipeSingle"
          key={index}
          value={recipe}
          onClick={() => this.handleClick(recipe._id)}>
          {recipe.name}
        </li>)
      });
      template =
      <div className="myRecipes">
        <ViewRecipesNavBar />
        <div className="myRecipesTitle">Saved Recipes</div>
        <RadioButtonBar handleCategoryClick={this.handleCategoryClick} />
        <div className="recipesArrays">
          <ul className="recipesArray">
            {recipesArray}
          </ul>
        </div>
        <br />
        <br />
      </div>
    } else {
      template =
      <div className="myRecipes">
        <ViewRecipesNavBar />
        <div className="loadingText"> 
          <br/>
          <h3>fork other people's recipe first recipe!</h3>
          <br />
          <br />
        </div>
      </div>
    }
    return (
      template
    );
  }
}

SavedRecipes.contextTypes = {
  router: React.PropTypes.object
}

export default SavedRecipes;