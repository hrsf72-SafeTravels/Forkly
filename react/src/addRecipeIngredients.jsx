import React from 'react';
import Awesomplete from './awesomplete.js'

class AddRecipeIngredients extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    let quantityInput = document.getElementById('quantity-input');
    let unitsInput = document.getElementById('units-input');
    let ingredientInput = document.getElementById('ingredient-input');

    let quantityComplete = new Awesomplete(quantityInput, {minChars: 1, autoFirst: true, maxItems: 6});
    let unitsComplete = new Awesomplete(unitsInput, {minChars: 1, autoFirst: true, maxItems: 6});
    let ingredientComplete = new Awesomplete(ingredientInput, {minChars: 1, autoFirst: true, maxItems: 6});

    quantityComplete.list = ['1', '2', '3', '4', '5', '1/2', '1/4', '3/4'];
    unitsComplete.list = ['Spoonful', 'Cupful', 'Oz', 'Lbs', 'Tons', 'mL', 'Qt', 'Gal', 'Fluid Oz'];
    ingredientComplete.list = ['Chicken', 'Pork', 'Steak', 'Sugar', 'Chocolate', 'Flour', 'Asbestos', 'Ground Beef'];
  }

  // handleChange(event) {
  //   this.props.handleIngredientsChange(event, this.props.index)
  // }

  onClick() {
    let ingredients = {
      quantity: document.getElementById('quantity-input').value,
      units: document.getElementById('units-input').value,
      ingredient: document.getElementById('ingredient-input').value,
      showButton: false,
    };
    this.props.addRow(ingredients, this.props.index);
  }

  render () {
    if (this.props.showButton === true) {
      return (
        <tbody>
          <tr>
            <td><input type="number" name="quantity" id="quantity-input"/></td>
            <td><input type="text" name="units" id="units-input"/></td>
            <td><input type="text" name="ingredient" id="ingredient-input"/></td>
            <td><input type="button" name="addRecipeNewRow" value="Add Row"
              onClick={this.onClick}
            /></td>
          </tr>
        </tbody>
      )
    } else {
      return (
        <tbody>
          <tr>
            <td><input type="number" name="quantity" default={this.props.quantity} /></td>
            <td><input type="text" name="units" default={this.props.units} /></td>
            <td><input type="text" name="ingredient" default={this.props.ingredient}/></td>
            <td><input type="button" name="updateRecipeRow" value="Update Recipe" onClick={this.onClick}/></td>
          </tr>
        </tbody>
      )
    }
  }
}

export default AddRecipeIngredients;