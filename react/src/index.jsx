import React from 'react';
import ReactDOM from 'react-dom';
import AddRecipe from './components/addRecipe.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  render () {
    return (<div>
      <AddRecipe />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
