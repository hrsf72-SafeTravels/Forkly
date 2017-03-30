import React from 'react';
import $ from 'jquery';
import ViewRecipesNavBar from './viewRecipesNavBar';

class Friends extends React.Component {
  constructor(props) {
    super(props);
  }

  //before initial render, use ajax call to retrieve all recipes belonging to user
  componentDidMount() {
    var boundThis = this;
    $.ajax({
      url: '/getFriends',
      type: 'GET',
      success: function(data){
        boundThis.setState({friends: data});
      },
      error: function(err) {
        console.log('could not retrieve any recipes for user');
      }
    });
  }

  // handleClick(friendId) {
  //   //
  //   // how does it work??
  //   //
  //   const { router } = this.context
  //   router.history.push('/friends/' + recipeId);
  // }

  render () {
    var friendsList = [];
    var template = '';
    if (this.state) {
      this.state.friends.forEach((friend, index) => {
      friendsList.push(
        <li className="recipeSingle"
          key={index} 
          value={friend} 
          onClick={() => this.handleClick(friend._id)}>
          {friend.name}
        </li>)
      });
      template = 
      <div className="myRecipes">
        <ViewRecipesNavBar />
        <ul className="recipesArray">
          {friendsList}
        </ul>
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