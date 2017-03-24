import React from 'react';
import $ from 'jquery';

class Nav extends React.Component {
  constructor(props){
  	super(props);
    this.state = {
      username: 'Forker Of Forks'
    };

    this.getUsername();
  }

  getUsername () {
    var context = this;

    $.ajax({
      url: '/username',
      type: 'GET',
      contentType: 'application/json',
      success: function(data) {
        console.log('ajax request to search username was successful');
        console.log(data);
        context.setState({username: data});
      },
      error: function(err) {
        console.log('ajax request to search username failed');
      }
    });
  }

  render () {
  	// console.log(this.props);
  	return (
  	  <div className="nav"> 
        <section className="group">
      		<h1 className="title logo">FORKLY</h1>
      		<h3 className="title username">Welcome, {this.state.username}</h3>
          <nav>
            <div className="icon logout">
              <img className="navButton" src="assets/images/logout.png" alt="Logout"/>
              <span>Logout</span>
            </div>
            <div className="icon addRecipe">
              <img className="navButton" src="assets/images/addRecipe.png" alt="Add Recipe"/>
              <span>Add Recipe</span>
            </div>
            <div className="icon myForks">
              <img className="navButton" src="assets/images/fork.png" alt="My Forks"/>
              <span>My Forks</span>
            </div>
            <div className="icon home">
              <img className="navButton" src="assets/images/home.png" alt="Home"/>
              <span>Home</span>
            </div>
          </nav>
        </section>
	   </div>
	  )
  }
}

export default Nav;

// <a className="navImage home" src="assets/images/home.jpg">Home</a>
// <a className="navImage myForks">My Forks</a>
// <a className="navImage addRecipe">Add Recipe</a>