import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: 'kimchi',
    image: 'https://images.unsplash.com/photo-1583224944844-5b268c057b72?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
    rating: 5,
  },
  {
    id: 2,
    name: 'ramen',
    image: 'https://images.unsplash.com/photo-1600326145359-3a44909d1a39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    rating: 4.3,
  },
  {
    id: 3,
    name: 'bibimbap',
    image: 'https://images.unsplash.com/photo-1600688654899-379ec76aca42?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2066&q=80',
    rating: 4.5,
  },
];

function Food(props) {
  return (
    <div>
      <h1>I love {props.name}</h1>
      <h3>rating : {props.rating}/5.0</h3>
      <img src={props.picture} alt={props.name}></img>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map((item) => (
        <Food key={item.id} name={item.name} picture={item.image} rating={item.rating} />
      ))}
    </div>
  );
}

export default App;
