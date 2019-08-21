import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'shards-react';

const Login = ({ history }) => {
  const [creds, setCreds] = useState({ username: '', password: '' });

  const handleChanges = event => {
    setCreds({ ...creds, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/api/login', creds)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        history.push('/friends');
      })
      .catch(err => console.log(err.response));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="username"
        onChange={handleChanges}
        value={creds.username}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={handleChanges}
        value={creds.password}
      />
      <Button type="submit">Log In</Button>
    </form>
  );
};

export default Login;
