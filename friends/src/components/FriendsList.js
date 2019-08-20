import React from 'react';

import { axiosWithAuth } from './utils/axiosWithAuth.js';

class FriendsList extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(res => {
        console.log(res, 'res');
        this.setState({
          friends: res.data.friends
        });
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return <p>Hello</p>;
  }
}

export default FriendsList;
