import React from 'react';

class Nav extends React.Component {
  constructor(props){
  	super(props);
  }

  render () {
  	// console.log(this.props);
  	return (
  	  <div className="nav"> 
        <section className="group">
      		<h1 className="title logo">FORKLY</h1>
      		<h3 className="title username">Welcome, {this.props.username}</h3>
          <nav>
            <div className="icon">
              <img className="navButton" src="assets/images/logout.png" alt="Logout"/>
              <span>Logout</span>
            </div>
            <div className="icon">
              <img className="navButton" src="assets/images/addRecipe.png" alt="Add Recipe"/>
              <span>Add Recipe</span>
            </div>
            <div className="icon">
              <img className="navButton" src="assets/images/fork.png" alt="My Forks"/>
              <span>My Forks</span>
            </div>
            <div className="icon">
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