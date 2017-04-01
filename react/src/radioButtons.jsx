import React from 'react';
import $ from 'jquery';

class RadioButtonBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <nav className="navbar navbar-static-top">
          <div className="container">
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li><span className="btn radioButton" onClick={() => this.props.handleCategoryClick('salad')}>Salad</span></li>
                <li><span className="btn radioButton" onClick={() => this.props.handleCategoryClick('soup')}>Soup</span></li>
                <li><span className="btn radioButton" onClick={() => this.props.handleCategoryClick('mainDishes')}>Main Dishes</span></li>
                <li><span className="btn radioButton" onClick={() => this.props.handleCategoryClick('desserts')}>Desserts</span></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default RadioButtonBar;
