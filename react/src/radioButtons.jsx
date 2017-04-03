import React from 'react';
import $ from 'jquery';

const RadioButtonBar = (props) => (
  <div className="radio-button-bar">
    <span id="radio-button-title">Select categories</span>
    <nav className="navbar navbar-static-top">
      <div className="container">
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li><span className="btn btn-warning radioButton" onClick={() => props.handleCategoryClick('salad')}>Salad</span></li>
            <li><span className="btn btn-warning radioButton" onClick={() => props.handleCategoryClick('soup')}>Soup</span></li>
            <li><span className="btn btn-warning radioButton" onClick={() => props.handleCategoryClick('mainDishes')}>Main Dishes</span></li>
            <li><span className="btn btn-warning radioButton" onClick={() => props.handleCategoryClick('desserts')}>Desserts</span></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default RadioButtonBar;
