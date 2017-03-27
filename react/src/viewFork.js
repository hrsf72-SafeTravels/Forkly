import React from 'react';
import $ from 'jquery';

class ViewFork extends React.Component {
  constructor(props) {
    super(props);
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
  render () {
    let template = '';
    if (this.state) {
      let { recipe } = this.state;
      template = 
      <div>
        <header>
          <h1>{recipe.name}</h1>
        </header>
        <table>
          <thead>
            <tr>
              <td>Quantity</td>
              <td>Units</td>
              <td>Ingredient</td>
            </tr>
          </thead>
          <tbody>
          {recipe.ingredients.map(function(val, index) {
            return (
              <tr key={index}>
                <td>{val.quantity}</td>
                <td>{val.units}</td>
                <td>{val.ingredient}</td>
              </tr>
            )
           }, this)}
          </tbody>
        </table>
        Directions: <br />
        <p>{recipe.directions}</p>
      </div>
    } else {
      template = 
      <div>
        <h3>Loading Your Recipes!</h3>
      </div>
    }
    return (
      template
    )
  }
}

ViewFork.contextTypes = {
  router: React.PropTypes.object
}

export default ViewFork;