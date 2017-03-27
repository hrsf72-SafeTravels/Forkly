import React from 'react';

class ViewRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //before initial render, use ajax call to retrieve all recipes belonging to user
  componentWillMount() {
    $.ajax({
      url: '/verifylogin',
      type: 'GET',
      success: function(user) {
        // console.log('req.user object: ', user);
        this.state.userId = user._id;
        $.ajax({
          url: '/getAllRecipes',
          type:'POST',
          data: JSON.stringify(this.state.userId),
          contentType: 'application/json',
          success: function(data){
            this.state.recipes = data;
          },
          error: function(err) {
            console.log('could not retrieve any recipes for user');
          }
        });
      },
      error: function(err) {
        console.log('unable to make initial GET request')
      }
    })
  }

  handleClick(recipeId) {
    //redirect to /recipes/recipeId
    const { router } = this.context
    router.history.push('/recipe/' + recipeId);
  }

  render () {
    var recipesArray = [];

    this.state.recipes.forEach((recipe, index) => {
      recipesArray.push(<li key={index} onClick={() => this.handleClick(recipe._id)} recipe={recipe}>{recipe.name}</li>)
    })
    //need to render list of all recipes belonging to user
    return (
      <div>
        <h3>Welcome, here are your recipes!</h3>
          <ul>
          {recipesArray}
          </ul>
      </div>
    )
  }
}

ViewRecipes.contextTypes = {
  router: React.PropTypes.object
}

export default ViewRecipes;