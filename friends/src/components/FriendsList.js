import React, { useEffect, useState } from 'react';
import Friend from './Friend.js';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';
import AddFriend from './AddFriend.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function FriendsList() {
  const [friends, setFriends] = useState([]);

  const getFriends = () => {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log(err.response));
  };

  useEffect(() => {
    getFriends();
  }, []);

  const addFriend = friend => {
    axiosWithAuth()
      .post('http://localhost:5000/api/friends', friend)
      .then(res => {
        setFriends(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err.response));
  };

  return (
    <div className="my-friends">
      <h3>My Friends</h3>
      <Route
        exact
        path="/friends"
        render={props => <AddFriend {...props} submitFriend={addFriend} />}
      />

      <div className="list-of-friends">
        {friends.map(friend => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </div>
      <div />
    </div>
  );
}

export default FriendsList;
