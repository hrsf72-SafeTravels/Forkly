import React from 'react';
// import ReactDOM from 'react-dom';

class AddRecipe extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <header>
          <h1>Add Recipe</h1>
        </header>
        <form>
          Name: <input type="text" name="addRecipeName" />
          <table>
            <tr>
              <td>Quantity</td>
              <td>Units</td>
              <td>Ingredient</td>
            </tr>
            <tr>
              <td><input type="number" name="addRecipeQuantity" /></td>
              <td><input type="text" name="addRecipeUnits" /></td>
              <td><input type="text" name="addRecipeIngredient" /></td>
              <td><input type="button" name="addRecipeNewRow" value="Add Row" /></td>
            </tr>
          </table>
          Directions: <br />
          <textarea name="addRecipeInstructions"></textarea>
          <div>
            <input type="file" name="addRecipePicture" />
          </div>
          <div>
            <input type="submit" name="addRecipeSave" value="Save" />
            <input type="button" name="addRecipeCancel" value="Cancel" />
          </div>
        </form>
      </div>
    )
  }
}

export default AddRecipe;