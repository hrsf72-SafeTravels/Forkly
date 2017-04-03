import React from 'react';
import $ from 'jquery';
import ViewRecipesNavBar from './viewRecipesNavBar';
import RadioButtonBar from './radioButtons';

class MyRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
    this.handleCreatedRecipeClick = this.handleCreatedRecipeClick.bind(this);
  }

  //before initial render, use ajax call to retrieve all recipes belonging to user
  componentDidMount() {
    var boundThis = this;
    $.ajax({
      url: '/getAllRecipes',
      type:'GET',
      success: function(data){
        console.log(data);
        boundThis.setState({createdRecipes: data});
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

  handleCreatedRecipeClick(category) {
    let boundThis = this;
    $.ajax({
      url: '/getAllRecipes',
      type: 'GET',
      success: function(data){
        if(boundThis.state.clicked === false) {
          let filteredData = data.filter(function(value) {
            if(value.categories.includes(category)) {
              return value;
            }
          });
          boundThis.setState({ createdRecipes: filteredData, clicked: true });
        } else {
          boundThis.setState({ createdRecipes: data, clicked: false })
        }
      },
      error: function(err) {
        console.log('could not retrieve any recipes for user');
      }
    });
  }

  render () {
    var createdRecipesArray = [];
    var template = '';
    if (this.state.createdRecipes) {
      this.state.createdRecipes.forEach((recipe, index) => {
      createdRecipesArray.push(
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
        <div className="myRecipesTitle">My Recipes</div>
        <RadioButtonBar handleCategoryClick={this.handleCreatedRecipeClick}/>
        <div className="recipesArrays">
          <ul className="recipesArray">
            {createdRecipesArray}
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
          <h3>create your first recipe!</h3>
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

MyRecipes.contextTypes = {
  router: React.PropTypes.object
}

export default MyRecipes;