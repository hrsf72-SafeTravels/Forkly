import React from 'react';
import AddRecipeIngredients from './addRecipeIngredients.jsx';
import $ from 'jquery';

class AddRecipe extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      directions: '',
      ingredients: [{quantity: '', units: '', ingredient: '', showButton: true}],
      categories: []
    };

    // this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addRow = this.addRow.bind(this);
  }

  componentDidMount () {

    var forked = this.context.router.history.location.pathname;
    let forkedId = forked.slice(forked.lastIndexOf('/') + 1);
    let context = this;
    // if history has url at end
    if (forkedId !== 'addrecipe' && forkedId.length > 0) {
      $.ajax({
        url: '/getRecipeById',
        type: 'POST',
        data: JSON.stringify({id: forkedId}),
        contentType: 'application/json',
        success: function(data){
          context.setState({
            name: data.name,
            directions: data.directions,
            ingredients: data.ingredients
          });
        },
        error: function(err) {
          console.error('could not retrieve any recipes for user');
        }
      });
    }
  }

  handleCategoryClick (category) {
    console.log('==========selected recipe is ', category);
    let categories = this.state.categories;
    categories.push(category);
    this.setState({categories: categories});
  }

  handleSubmit (event) {
    const { router } = this.context;
    $.ajax({
      url: '/api/addRecipe',
      data: JSON.stringify(this.state),
      method: 'POST',
      contentType: 'application/JSON',
      success: (recipeId) => {
        router.history.push('/recipe/' + recipeId);
      }
    });
    event.preventDefault();
  }

  addRow(ingredients, index) {
    // ingredients are passed from the values of the input field -- accomodates the autocomplete
    let copy = this.state.ingredients.slice();

    for (var key in ingredients) {
      copy[index][key] = ingredients[key];
    }

    this.setState({
      ingredients: copy,
    });

    // add new row only when we have clicked 'addRow'
    if (index === copy.length - 1) {
      this.setState({
        ingredients: this.state.ingredients.concat({quantity: '0', units: '', ingredient: '', showButton: true})
      });
    }
  }

  // handleIngredientsChange (event, index) {
  //   const target = event.target;
  //   const name = target.name;
  //   const value = target.value;

  //   let ing = this.state.ingredients;
  //   ing[index][name] = value;
  //   console.log(value);

  //   this.setState({
  //     ingredients: ing
  //   });
  // }

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
      <div className="createRecipe">
        
        <header>
          <h1 className="recipeHeader">Create a Recipe</h1>
        </header>
        <br />
        <img className="recipeImage" src="assets/images/sushi.jpg" alt="sushi"/>
        <br />
        <form onSubmit={this.handleSubmit}>

          <h3 className="recipeName">Recipe Name:</h3>
          <input type="text" value={this.state.name} name="name" onChange={this.handleInputChange}/>
          <br />
          <br />

          <h3 className="title">Ingredients:</h3>
          <table className="ingredients">
            <thead>
              <tr>
                <td>Quantity</td>
                <td>Units</td>
                <td>Ingredient</td>
              </tr>
            </thead>
            {this.state.ingredients.map(function(val, index) {
              return (<AddRecipeIngredients
                key={index}
                index={index}
                quantity={val.quantity}
                units={val.units}
                ingredient={val.ingredient}
                showButton={val.showButton}

                addRow={this.addRow}
              />);
            }, this)}
          </table>
          <br />

          <h3 className="title"> Directions: </h3>
          <textarea name="directions" placeholder={this.state.directions} onChange={this.handleInputChange}></textarea>
          <div>
            <span>Select categories</span>
            <nav className="navbar navbar-static-top">
              <div className="container">
                <div id="navbar" className="navbar-collapse collapse">
                  <ul className="nav navbar-nav">
                    <li><span className="btn radioButton" onClick={() => this.handleCategoryClick('salad')}>Salad</span></li>
                    <li><span className="btn radioButton" onClick={() => this.handleCategoryClick('soup')}>Soup</span></li>
                    <li><span className="btn radioButton" onClick={() => this.handleCategoryClick('mainDishes')}>Main Dishes</span></li>
                    <li><span className="btn radioButton" onClick={() => this.handleCategoryClick('desserts')}>Desserts</span></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <br />
          <div>
            <input type="submit" name="addRecipeSave" value="Save" />
            <input type="button" name="addRecipeCancel" value="Cancel" />
          </div>
        </form>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}

AddRecipe.contextTypes = {
  router: React.PropTypes.object
};

export default AddRecipe;
