import React from 'react';

const ViewFork = () => {
  let { recipe } = this.props;
  return (
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
      <p>{recipe.directions}</p>
    </div>
  )
}

export default ViewFork;