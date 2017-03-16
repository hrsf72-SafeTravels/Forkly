import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../src/nav.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      username: 'Forker Of Forks',
      currentPage: '/home'
    }
  }

  render () {
    return (<div>
      <Nav username={this.state.username}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


// from terminal, run:
// npm run react-dev
// npm run server-dev

