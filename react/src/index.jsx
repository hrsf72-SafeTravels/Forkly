import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      currentPage: 'home'
    }
  }

  render () {
    return (<div>
      <Home /> 
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
