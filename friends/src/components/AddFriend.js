import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Field, withFormik } from 'formik';
import { Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import { Button, Form, FormInput } from 'shards-react';

const AddFriend = ({ submitFriend }) => {
  const [friend, setFriend] = useState({ name: '', email: '', age: '' });

  const handleChange = event =>
    setFriend({ ...friend, [event.target.name]: event.target.value });
  const handleSubmit = event => {
    event.preventDefault();
    submitFriend(friend);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormInput
        name="name"
        placeholder="Name"
        value={friend.name}
        onChange={handleChange}
      />
      <FormInput
        name="email"
        placeholder="Email"
        value={friend.email}
        onChange={handleChange}
      />

      <FormInput
        name="age"
        placeholder="Age"
        value={friend.age}
        onChange={handleChange}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default AddFriend;
