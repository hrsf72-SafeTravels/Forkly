import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { Router, Redirect } from 'react-router';
import Awesomplete from './awesomplete.js';
import RecipeSearch from './recipeSearch.jsx';

class Home extends React.Component {
  constructor(props) {
  	super(props);
    this.state = {
      searchTerm: null,
      recipes: [],
      hasSearched: false,
    };
    this.searchRecipes = this.searchRecipes.bind(this);
    this.searchYoutube = this.searchYoutube.bind(this);
  }

  componentDidMount() {
    var input = document.getElementById("myinput");
    var awesomplete = new Awesomplete(input, {minChars: 1, autoFirst: true, maxItems: 6});
    awesomplete.list = [ 'apple', 'beef', 'chicken', 'cucumber', 'egg', 'eggplant', 'flour', 'lamb','leak', 'peas', 'pork', 'rice' ];
  }

  searchRecipes(term) {
    // send ajax request to server, which then searches db for searchTerm
    console.log('we are searching recipes', term)
    let searchTerm = {searchTerm: term};
    $.ajax({
      url: '/searchRecipes',
      type:'POST',
      data: JSON.stringify(searchTerm),
      contentType: 'application/json',

      success: function(data){
        console.log('ajax request to search recipes was successful!');
        console.log('recipes', JSON.parse(data).hits);
        this.searchYoutube(JSON.parse(data).hits, searchTerm);
      }.bind(this),
      error: function(err) {
        console.log('ajax request to search recipes failed');
        console.log(err);
      }
    });
  };

  searchYoutube(recipes, searchTerm) {
    var context = this;

    console.log('in searchyoutube', recipes)
    $.ajax({
      url: '/searchYoutube',
      type: 'POST',
      data: JSON.stringify(searchTerm),
      contentType: 'application/json',
      success: function(data) {
        console.log('ajax request to search youtube was successful');
        console.log('response from youtube search', JSON.parse(data));

        this.props.handleSearched(recipes, JSON.parse(data).items);

      }.bind(this),
      error: function(err) {
        console.log('ajax request to search youtube failed');
      },
    });
  };

  render() {
  	return (
  	  <div>
        { this.state.hasSearched ?
          <Redirect to="/recipes" />
          :
          <div className="search">
            <img className="searchImage" src="assets/images/steak.jpg" alt="steak"/>
            <span className="searchText">
              <h1 className="search-title">Yummly</h1>
              <form onSubmit={(event) => {
                  const input = document.getElementById('myinput').value;
                  this.searchRecipes(input);
                  event.preventDefault();
                  this.setState({
                    hasSearched: true,
                    searchTerm: input,
                  });
                }}>
                <input id="myinput" className="form-control awesomplete" type="text"
                />
                <button className="btn btn-default">Search Recipes</button>
              </form>
            </span>
          </div>
        }
  	  </div>
  	)
  }
}

export default Home;

