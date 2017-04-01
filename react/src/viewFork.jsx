import React from 'react';
import $ from 'jquery';

import RecipeIngredients from './recipeIngredients';

class ViewFork extends React.Component {

  constructor(props) {
    super(props);
    this.forkMe = this.forkMe.bind(this);
  }

  componentDidMount(){
    let pathname = this.context.router.route.location.pathname;
    let recipeId = pathname.slice(pathname.lastIndexOf('/') + 1);
    let boundThis = this;
     $.ajax({
      url: '/getRecipeById',
      type:'POST',
      data: JSON.stringify({id: recipeId}),
      contentType: 'application/json',
      success: function(data){
        boundThis.setState({recipe: data});
      },
      error: function(err) {
        console.error('could not retrieve any recipes for user');
      }
    });
  }

  forkMe() {
    const { router } = this.context;
    var forked = router.route.location.pathname;
    let forkedId = forked.slice(forked.lastIndexOf('/') + 1);
    router.history.push('/addrecipe/' + forkedId);
  }

  render () {
    let template = '';
    if (this.state) {
      let { recipe } = this.state;
      template = 
      <div className="viewFork">
        <header>
          <h1 className="recipeName">{recipe.name}</h1>
          <br />
        </header>
        <img src={recipe.image} />
        <h3 className="saved-recipe-fork">Ingredients: </h3>
        <ol>{recipe.ingredients.map( (ingredient, index) => 
          <RecipeIngredients ingredient={ingredient} key={index}/>
          )}
        </ol>
        <br/>
        <h3 className="saved-recipe-fork"> Directions: </h3>
        <p>{recipe.directions}</p>
        <br />
        <button onClick={this.forkMe}>Fork Me</button>

      </div>
    } else {
      template = 
      <div>
        <h3>Loading Your Recipes...</h3>
      </div>
    }
    return (
      template
    );
  }
}

ViewFork.contextTypes = {
  router: React.PropTypes.object
}

export default ViewFork;