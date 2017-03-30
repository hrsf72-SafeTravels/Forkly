import React from 'react';
import { Link } from 'react-router-dom';

const ViewRecipesNavBar = () => (
  <div>
    <nav className="navbar navbar-default navbar-static-top">
      <div className="container">
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <Link to='/profile'><li className="profile-nav">About Me</li></Link>
            <Link to='/savedRecipes'><li>Saved Recipes</li></Link>
            <Link to='/myRecipes'><li>My Recipes</li></Link>
            <Link to='/friends'><li>Friends</li></Link>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default ViewRecipesNavBar;
