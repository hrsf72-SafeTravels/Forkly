import React from 'react';
import AddRecipeIngredients from './AddRecipeIngredients.jsx';
// import ReactDOM from 'react-dom';

class AddRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [0, 1, 2]
    }
    this.addRow = this.addRow.bind(this);
  }


  addRow() {
    myIngredients = this.state.ingredients;
    myIngredients.push(0);
    this.setState({ingredients: myIngredients});
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
            <thead>
              <tr>
                <td>Quantity</td>
                <td>Units</td>
                <td>Ingredient</td>
              </tr>
            </thead>
            {this.state.ingredients.map(function() {
               return <AddRecipeIngredients addRow={this.addRow}/>;
             })}
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