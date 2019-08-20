import React, { useEffect, useState } from 'react';
import Friend from './Friend.js';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';

function FriendsList() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(res => {
        console.log(res, 'res');

        setFriends(res.data);
      })
      .catch(err => console.log(err.response));
  }, []);

  return (
    <div className="list-of-friends">
      {friends.map(friend => (
        <Friend friend={friend} />
      ))}
    </div>
  );
}

export default FriendsList;
