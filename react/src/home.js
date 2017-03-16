import React from 'react';

class Home extends React.Component {
  constructor(props) {
  	super(props);
  }

  render() {
  	return (
  	  <div>
        <h3>Welcome! Which recipes would you like to search for?</h3>
  	  	<input></input>
        <button>Search</button>
  	  </div>
  	)
  }

}

export default Home; 