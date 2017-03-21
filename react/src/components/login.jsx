import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  componentDidMount() {
  }

  render () {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <label>
            Username: 
            <input type="text" value={this.state.username}/>
          </label>
          <label>
            Password: 
            <input type="text" value={this.state.password}/>
          </label>
        </form>
      </div>
    )
  }
}

export default Login