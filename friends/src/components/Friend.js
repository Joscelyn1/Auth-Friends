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

function Friend({ friend }) {
  return (
    <Card className="friend-card">
      <CardTitle>{friend.name}</CardTitle>
      <p>{friend.age} years old</p>
      <p>{friend.email}</p>
    </Card>
  );
}

export default Friend;
