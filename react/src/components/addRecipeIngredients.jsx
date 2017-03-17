import React from 'react';
// import ReactDOM from 'react-dom';

class AddRecipeIngredients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addRecipeQuantity: 0,
      addRecipeUnits: 'units',
      addRecipeIngredient: 'ingredients'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange (event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  }

  render () {
    return (
      <tbody>
        <tr>
          <td><input type="number" name="addRecipeQuantity" value={this.state.quantity} onChange={this.handleInputChange} /></td>
          <td><input type="text" name="addRecipeUnits" value={this.state.units} onChange={this.handleInputChange} /></td>
          <td><input type="text" name="addRecipeIngredient" value={this.state.ingredients} onChange={this.handleInputChange}/></td>
          <td><input type="button" name="addRecipeNewRow" value="Add Row" onClick={this.props.addRow}/></td>
        </tr>
      </tbody>
    )
  }
}

export default AddRecipeIngredients;