import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../src/nav.js'
import $ from 'jquery';
import Home from './home.jsx'
import AddRecipe from './components/addRecipe.jsx';
import Login from './components/login.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      username: 'Forker Of Forks',
      currentPage: '/home'
      recipes: [],
      currentPage: 'home',
      searchTerm: null
    }
  }



  setSearchTerm(searchTerm) {
    this.setState({searchTerm: searchTerm});
  }

  searchRecipes(searchTerm) {
    // send ajax request to server, which then searches db for searchTerm
    var searchTerm = {searchTerm: this.state.searchTerm};
    var context = this;

    $.ajax({
      url: '/searchRecipes',
      type:'POST',
      data: JSON.stringify(searchTerm),
      // type: 'GET',
      // data: searchTerm,
      contentType: 'application/json',
      // upon success, adds results to this.state.recipes
      success: function(data){
        console.log('ajax request was successful!');
        console.log('response', data);
        context.setState({recipes: data});
        
      },
      error: function(err) {
        console.log('ajax request failed');
      }

    });
  };


  render () {
    // return (<div>
    //   <Home setSearchTerm={this.setSearchTerm.bind(this)}
    //         searchRecipes={this.searchRecipes.bind(this)}
    //         searchTerm={this.state.searchTerm}
    //         recipes={this.state.recipes}
    //   />
    // </div>)
    return (<div>
      <Nav username={this.state.username}/>
      <Home setSearchTerm={this.setSearchTerm.bind(this)}
            searchRecipes={this.searchRecipes.bind(this)}
            searchTerm={this.state.searchTerm}
            recipes={this.state.recipes}
      />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


// from terminal, run:
// npm run react-dev
// npm run server-dev

