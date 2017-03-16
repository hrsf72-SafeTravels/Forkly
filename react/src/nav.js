import React from 'react';

class Nav extends React.Component {
  constructor(props){
  	super(props);
  }

  render () {
  	console.log(this.props);
  	return (
  	  <div> 
		<h1>FORKLY</h1>
		<h3>Welcome, {this.props.username}</h3>
		<button>Home</button>
		<button>My Forks</button>
		<button>Add Recipe</button>
	  </div>
	  )
  }

}

export default Nav;