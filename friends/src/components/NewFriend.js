import React, { useState } from 'react';
import { axiosWithAuth } from '../Utils/axiosWithAuth';

const NewFriendForm = () => {
  const [addFriend, setAddFriend] = useState({

    name: '',
    age: '',
    email: ''

  });

  const handleChange = event => {
    setAddFriend({
      ...addFriend,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    axiosWithAuth()
      .post('http://localhost:5000/api/friends/', addFriend)
      .then(res => {
        console.log(addFriend)
        console.log(res)
        setAddFriend({
          ...addFriend,
          name: '',
          age: '',
          email: ''
        });
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
    
      <form onSubmit={handleSubmit}>

        <label> Name: </label>
        <input
          type='text'
          name='name'
          value={addFriend.name}
          onChange={handleChange}
        />
        <p> </p>
        <label> Age: </label>
        <input
          type='text'
          name='age'
          value={addFriend.age}
          onChange={handleChange}
        />
        <p> </p>
        <label> Email: </label>
        <input
          type='text'
          name='email'
          value={addFriend.email}
          onChange={handleChange}
        />
        <p> </p>
        <button type='submit'>Add new friend</button>
      </form>
    </div>
  );
};

export default NewFriendForm;