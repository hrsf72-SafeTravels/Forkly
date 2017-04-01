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
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
  }

  //before initial render, use ajax call to retrieve all recipes belonging to user
  componentDidMount() {
    var boundThis = this;
    $.ajax({
      url: '/getAllRecipes',
      type:'GET',
      success: function(data){
        console.log(data);
        boundThis.setState({recipes: data});
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

  handleCategoryClick(category) {
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
          boundThis.setState({ recipes: filteredData, clicked: true });
        } else {
          boundThis.setState({ recipes: data, clicked: false })
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
    if (this.state.recipes) {
      this.state.recipes.forEach((recipe, index) => {
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
        <RadioButtonBar handleCategoryClick={this.handleCategoryClick}/>
        <div className="myRecipesTitle">My Recipes</div>
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