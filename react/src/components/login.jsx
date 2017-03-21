import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
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
            <input name="username" type="text" value={this.state.username} onChange={this.handleInputChange}/>
          </label>
          <label>
            Password: 
            <input name="password" type="text" value={this.state.password} onChange={this.handleInputChange}/>
          </label>
        </form>
      </div>
    )
  }
}

export default Login