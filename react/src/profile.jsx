import React from 'react';
import $ from 'jquery';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ViewRecipesNavBar from './viewRecipesNavBar';
import MyRecipes from './myRecipes';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        { this.props.user === null ?
          <p> Please Login first </p> :
          <ViewRecipesNavBar />
        }
      </div>
    );
  }
}

Profile.contextTypes = {
  router: React.PropTypes.object
}

export default Profile;