import React from 'react';
import { Link } from 'react-router-dom';

const ViewRecipesNavBar = () => (
  <div>
    <nav className="navbar navbar-default navbar-static-top">
      <div className="container">
        <div className="navbar-header">
          <Link to ='/profile' className="navbar-brand">About Me</Link>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li><Link to='/savedRecipes'>Saved Recipes</Link></li>
            <li><Link to='/myRecipes'>My Recipes</Link></li>
            <li><Link to='/friends'>Friends</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default ViewRecipesNavBar;
