import React from 'react';
import RecipeSearch from './recipeSearch.jsx'

class Home extends React.Component {
  constructor(props) {
  	super(props);
  }

  render() {
  	return (
  	  <div>
        <h3>Welcome! Which recipes would you like to find?</h3>
  	  	<input type="text" 
               onKeyUp={ (event) => {
                          this.props.setSearchTerm(event.target.value)
                        }}
        />
        <button onClick={(event) => {
                          this.props.searchRecipes(this.props.searchTerm)
                        }}
        >Search</button>
        <div>
          <ul>
            {this.props.recipes.map(recipe => <RecipeSearch recipe={recipe}/>)}
          </ul>
        </div>
  	  </div>
  	)
  }
}

export default Home; 

