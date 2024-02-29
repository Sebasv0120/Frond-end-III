import React from 'react';

const Card = ({ artist, song }) => {
  return (
    <div className="card">
      <h2>{artist}</h2>
      <p>{song}</p>
    </div>
  );
};

export default Card;