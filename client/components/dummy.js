import React from 'react';

const dummy = () => {
  let myStorage = window.localStorage;
  myStorage = {
    title: 'Adam',
    description: 'Christina',
    price: 100000
  };

  return <h1>{myStorage}</h1>;
};

export default dummy;
