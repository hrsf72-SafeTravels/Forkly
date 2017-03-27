import React from 'react';
import $ from 'jquery';

class ViewFork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Rum Ham',
      directions: 'Soak in rum and bake',
      ingredients: [{quantity: 1, units: 'whole', ingredient: 'ham'}, {quantity: 1, units: 'gallon', ingredient: 'rum'}]
    }
  }

  componentWillMount () {
    $.ajax({
      url: "/searchRecipes",
      data: JSON.stringify(this.state),
      method: 'GET',
      contentType: 'application/JSON',
      error: (error) => {
        console.log('Error trying to search for recipes', error);
      },
      success: (result) => {
        //implement a redirect to the users recipe page
        console.log('POST successful');
        this.navigate();
      }
    });
  }

  render () {
    return (
      <div>
        <header>
          <h1>{this.state.name}</h1>
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
          {this.state.ingredients.map(function(val, index) {
            return (
              <tr>
                <td>{val.quantity}</td>
                <td>{val.units}</td>
                <td>{val.ingredient}</td>
              </tr>
            )
           }, this)}
          </tbody>
        </table>
        Directions: <br />
        <p>{this.state.directions}</p>
      </div>
    )
  }
}

export default ViewFork;