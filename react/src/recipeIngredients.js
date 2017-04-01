import React from 'react';

class RecipeIngredient extends React.Component {
  constructor(props) {
  	super(props);
  }

  render() {
    console.log('rendering recipe ingredients', this.props);
    return (
      <li className="saved-recipe-fork-ingredient">
        {this.props.ingredient.quantity !== '0' && (
          <div>
            <span>{this.props.ingredient.quantity} </span>
            <span>{this.props.ingredient.units} </span>
            <span>{this.props.ingredient.ingredient}</span>
          </div>
        )}
      </li>
    );
  }
}

export default RecipeIngredient;