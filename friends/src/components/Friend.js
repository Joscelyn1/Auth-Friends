import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from 'shards-react';

function Friend({ friend, deleteFriend }) {
  return (
    <Card className="friend-card">
      <div
        onClick={() => deleteFriend(friend.id)}
        className="close material-icons"
      >
        close
      </div>
      <CardTitle>{friend.name}</CardTitle>
      <p>{friend.age} years old</p>
      <p>{friend.email}</p>
    </Card>
  );
}

export default Friend;
