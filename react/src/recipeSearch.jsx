import React from 'react';

class RecipeSearch extends React.Component {
  constructor(props) {
  	super(props);
  }


  render() {
  	return (
  	  <li>
        <div className='recipeName'>
          <h3><em>{this.props.recipe.name}!</em></h3>
        </div>
        <div className='ingredients'>
          <h4> Ingredients </h4>
          <p>{this.props.recipe.ingredients}</p>
        </div>
        <div className='directions'>
          <h4> Directions </h4>
          <p>{this.props.recipe.directions}</p>
        </div>
  	  </li>
  	)
  }

}

export default RecipeSearch;