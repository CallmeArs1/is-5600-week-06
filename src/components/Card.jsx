import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, name, price, description }) => (
  <div className="ba bw1 pa3 ma2">
    <h3>{name}</h3>
    <p>{description}</p>
    <p>${price}</p>
    <Link to={`/product/${id}`} className="blue">
      View Details
    </Link>
  </div>
);

export default Card;
