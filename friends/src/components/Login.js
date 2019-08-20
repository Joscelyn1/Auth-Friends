import React from 'react';
import axios from 'axios';
import { Button, Form, FormInput } from 'shards-react';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <div>
        <form className="my-form" onSubmit={this.login}>
          <input
            className="my-form-input"
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <Button>Login</Button>
        </form>
      </div>
    );
  }
}

export default Login;
