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
  }

  componentDidMount() {
    var input = document.getElementById("myinput");
    var awesomplete = new Awesomplete(input, {minChars: 1, autoFirst: true, maxItems: 6});
    awesomplete.list = [ 'apple', 'beef', 'chicken', 'cucumber', 'egg', 'eggplant', 'flour', 'lamb','leak', 'peas', 'pork', 'rice' ];
  }

  setSearchTerm(searchTerm) {
    this.setState({searchTerm: searchTerm});
  }

  searchRecipes() {
    // send ajax request to server, which then searches db for searchTerm
    var searchTerm = {searchTerm: this.state.searchTerm};

    $.ajax({
      url: '/searchRecipes',
      type:'POST',
      data: JSON.stringify(searchTerm),
      contentType: 'application/json',
      // upon success, adds results to this.state.recipes
      success: function(data){
        console.log('ajax request to search recipes was successful!');
        console.log('response', JSON.parse(data).hits);
        this.props.handleSearchedRecipes(JSON.parse(data).hits);
      }.bind(this),
      error: function(err) {
        console.log('ajax request to search recipes failed');
      }
    });
  };

  searchYoutube() {
    var searchTerm = {searchTerm: this.state.searchTerm};
    var context = this;

    $.ajax({
      url: '/searchYoutube',
      type: 'POST',
      data: JSON.stringify(searchTerm),
      contentType: 'application/json',
      success: function(data) {
        console.log('ajax request to search youtube was successful');
        console.log('response from youtube search', JSON.parse(data).hits);
        this.props.handleSearchedVideos(JSON.parse(data));
      }.bind(this),
      error: function(err) {
        console.log('ajax request to search youtube failed');
      }
    })
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
                  this.searchRecipes(this.state.searchTerm);
                  event.preventDefault();
                  this.setState({
                    hasSearched: true,
                  });
                }}>
                <input id="myinput" className="form-control awesomplete" type="text"
                        onKeyUp={ (event) => {
                                  this.setSearchTerm(event.target.value)
                                }}
                />
                <button className="btn btn-default">Search Recipes</button>
              </form>
            </span>
          </div>
        }
        {/*<div className="search">
          <img className="searchImage" src="assets/images/steak.jpg" alt="steak"/>
          <span className="searchText">
            <h1 className="search-title">Yummly</h1>
            <input id="myinput" className="form-control awesomplete" type="text"
                   onKeyUp={ (event) => {
                              this.setSearchTerm(event.target.value)
                            }}
            />
            <Link to='/recipes'><button className="btn btn-default search-btn" onClick={(event) => {
                              this.searchRecipes(this.state.searchTerm)
                            }}
            >Search Recipes</button></Link>
          </span>
        </div>*/}

        {/*<div className="results">
          <ul>
            {this.state.recipes.map((element, index) => <RecipeSearch recipe={element.recipe} key={index}/>)}
          </ul>
        </div>*/}
  	  </div>
  	)
  }
}

export default Home;

