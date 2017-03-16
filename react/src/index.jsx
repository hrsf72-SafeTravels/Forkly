import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      recipes: [],
      currentPage: 'home',
      searchTerm: null
    }
  }

  setSearchTerm(searchTerm) {
    this.setState({searchTerm: searchTerm});
  };

  searchRecipes(searchTerm) {
    // send ajax request to server, which then searches db for searchTerm

    // adds results to this.state.recipes
    this.setState({recipes: [
      {
        name: 'Hamburger', 
        ingredients: '2 cups beef, 1 Tbsp salt',
        directions: 'Mix it all up!'
      }, 
      {
        name: 'Extra Beefy Hamburger',
        ingredients: '3 cups beef, 1 Tbsp salt',
        directions: 'Mix it all up!'
      }
      ]})
    console.log(this.state);
  };


  render () {
    return (<div>
      <Home setSearchTerm={this.setSearchTerm.bind(this)}
            searchRecipes={this.searchRecipes.bind(this)}
            searchTerm={this.state.searchTerm}
            recipes={this.state.recipes}
      /> 
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
