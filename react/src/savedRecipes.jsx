import React from 'react';
import $ from 'jquery';
import ViewRecipesNavBar from './viewRecipesNavBar';

class SavedRecipes extends React.Component {
  constructor(props) {
    super(props);
  }

  //before initial render, use ajax call to retrieve all recipes belonging to user
  componentDidMount() {
    var boundThis = this;
    $.ajax({
      url: '/getSavedRecipes',
      type: 'GET',
      success: function(data){
        console.log("======>", data);
        boundThis.setState({ savedRecipes: data });
      },
      error: function(err) {
        console.log('could not retrieve any recipes for user');
      }
    });
  }

  handleClick(recipeId) {
    //redirect to /recipes/recipeId
    const { router } = this.context
    router.history.push('/recipe/' + recipeId);
  }

  render () {
    var recipesArray = [];
    var template = '';
    if (this.state) {
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