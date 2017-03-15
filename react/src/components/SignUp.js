import React from 'react';
import reactDOM from 'react-dom';
import { postUser } from '../helper'

class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  verifyUser(username, password, passwordTwo) {
    //make a post request to the server
    //render error message if reponse is an error
    event.preventDefault();
    

  }

  render() {
    return (
      <div>
        <form className="signUpForm" >
          <input type="text" placeholder="Username" ref={(input) => {this.username = input}} />
          <input type="text" placeholder="Password" ref={(input) => {this.password = input}} />
          <input type="text" placeholder="Re-Enter Password" ref={(input) => {this.passwordTwo = input}} />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default SignUp;