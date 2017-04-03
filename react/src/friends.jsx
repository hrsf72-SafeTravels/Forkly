import React from 'react';
import $ from 'jquery';
import ViewRecipesNavBar from './viewRecipesNavBar';
import RadioButtonBar from './radioButtons';

class Friends extends React.Component {
  constructor(props) {
    super(props);
  }

  //before initial render, use ajax call to retrieve all recipes belonging to user
  componentDidMount() {
    var boundThis = this;
    $.ajax({
      url: '/getUserFriends',
      type: 'GET',
      success: function(data){
        boundThis.setState({friends: data});
      },
      error: function(err) {
        console.log('could not retrieve any recipes for user');
      }
    });
  }

  handleFriendClick(friend) {
    var boundThis = this;
    $.ajax({
      url: `/friends/${friend.id}`,
      type: 'GET',
      success: function(data){
        console.log('successfully found friend!', data);
        boundThis.setState({ friendName: friend.name,
          friendSavedRecipes: data.savedRecipes,
          friendCreatedRecipes: data.createdRecipes });
      },
      error: function(err) {
        console.log('could not retrieve any recipes for user');
      }
    });
  }

  handleClick(recipeId) {
    //redirect to /recipes/recipeId
    const { router } = this.context
    router.history.push('/recipe/' + recipeId);
  }
 
  render () {
    var friendsList = [];
    var savedRecipesArray = [];
    var createdRecipesArray = [];
    var template = '';
    if (this.state) {
      this.state.friends.forEach((friend, index) => {
      friendsList.push(
        <li className="recipeSingle"
          key={index} 
          value={friend} 
          onClick={() => this.handleFriendClick(friend)}>
          {friend.name}
        </li>)
      });
      if(this.state.friendSavedRecipes) {
        this.state.friendSavedRecipes.forEach((recipe, index) => {
        savedRecipesArray.push(
          <li className="recipeSingle"
            key={index}
            value={recipe}
            onClick={() => this.handleClick(recipe._id)}>
            {recipe.name}
          </li>)
        });
      }
      console.log(this.state);
      if(this.state.friendCreatedRecipes) {
        this.state.friendCreatedRecipes.forEach((recipe, index) => {
        createdRecipesArray.push(
          <li className="recipeSingle"
            key={index}
            value={recipe}
            onClick={() => this.handleClick(recipe._id)}>
            {recipe.name}
          </li>)
        });
      }
      template = 
      <div className="myRecipes">
        <ViewRecipesNavBar />
        <div className="col-xs-6 col-md-4">
          <div className="myRecipesTitle row">Friends</div>
          <div className="row">
            <ul className="recipesArray">
              {friendsList}
            </ul>
          </div>
        </div>
        { this.state.friendSavedRecipes ?
          <div className="col-xs-12 col-md-8">
            <div className="myRecipesTitle row">{this.state.friendName}'s Saved Recipes</div>
            <div className="row">
              <ul className="recipesArrays">
                {savedRecipesArray}
              </ul>
            </div>
            { this.state.friendCreatedRecipes ?
              <div>
              <div className="myRecipesTitle row">{this.state.friendName}'s Created Recipes</div>
              <div className="row">
                <ul className="recipesArrays">
                  {createdRecipesArray}
                </ul>
              </div></div> : null
            }
          </div> : null
          }
        <br />
        <br />
      </div>
    } else {
      template = 
      <div className="myRecipes">
        <ViewRecipesNavBar />
        <div className="loadingText">
          <br/>
          <h3>You don't have any friend, sorry</h3>
          <br />
          <br />
        </div>
      </div>
    }
    return (
      template
    );
  }
}

Friends.contextTypes = {
  router: React.PropTypes.object
}

export default Friends;
