import React from 'react';
import $ from 'jquery';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ViewRecipesNavBar from './viewRecipesNavBar';
import MyRecipes from './myRecipes';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  //before initial render, use ajax call to retrieve all recipes belonging to user
  // componentDidMount() {
  //   var boundThis = this;
  //   $.ajax({
  //     url: '/getAllRecipes',
  //     type:'GET',
  //     success: function(data){
  //       boundThis.setState({recipes: data});
  //     },
  //     error: function(err) {
  //       console.log('could not retrieve any recipes for user');
  //     }
  //   });
  // }

  // handleClick(recipeId) {
  //   //redirect to /recipes/recipeId
  //   const { router } = this.context
  //   router.history.push('/recipe/' + recipeId);
  // }

  render () {
    return (
      <div>
        <ViewRecipesNavBar />

      </div>
    );
  }
}

Profile.contextTypes = {
  router: React.PropTypes.object
}

export default Profile;