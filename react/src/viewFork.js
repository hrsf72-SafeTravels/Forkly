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
    // this.addRow = this.addRow.bind(this);
    // this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  // navigate() {
  //   // const { router } = this.context
  //   var router = this.context.router;
  //   router.history.push('/')
  // }

  // handleSubmit (event) {
  //   event.preventDefault();
  //   $.ajax({
  //     url: "/api/viewFork",
  //     data: JSON.stringify(this.state),
  //     method: 'POST',
  //     contentType: 'application/JSON',
  //     error: (error) => {
  //       console.log('you have an error', error);
  //     },
  //     success: (result) => {
  //       //implement a redirect to the users recipe page
  //       console.log('POST successful');
  //       this.navigate();
  //     }
  //   });
  // }

  // addRow() {
  //   let myIngredients = this.state.ingredients;
  //   myIngredients[myIngredients.length - 1].showButton = false;
  //   myIngredients.push({quantity: 0, units: '', ingredient: '', showButton: true});
  //   this.setState({ingredients: myIngredients});
  // }

  // handleIngredientsChange (event, index) {
  //   const target = event.target;
  //   const name = target.name;
  //   const value = target.value;

  //   let ing = this.state.ingredients;
  //   ing[index][name] = value;

  //   this.setState({
  //     ingredients: ing
  //   });
  // }

  // handleInputChange (event) {
  //   const target = event.target;
  //   const name = target.name;
  //   const value = target.value;

  //   this.setState({
  //     [name]: value
  //   });
  // }

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

// viewFork.contextTypes = {
//   router: React.PropTypes.object
// }

export default ViewFork;