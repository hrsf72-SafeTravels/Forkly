import React from 'react';
import { Link } from 'react-router-dom';

const ViewRecipesNavBar = () => (
  <div>
    <nav className="navbar navbar-default navbar-static-top">
      <div className="container">
        <div className="navbar-header">
          <Link to ='/profile' className="navbar-brand"><span className="navbar-text-color">About Me</span></Link>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li><Link to='/savedRecipes'><span className="navbar-text-color">Saved Recipes</span></Link></li>
            <li><Link to='/myRecipes'><span className="navbar-text-color">My Recipes</span></Link></li>
            <li><Link to='/friends'><span className="navbar-text-color">Friends</span></Link></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default ViewRecipesNavBar;
