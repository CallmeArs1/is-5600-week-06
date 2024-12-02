import React from 'react';
import { useParams, Link } from 'react-router-dom';

const SingleView = ({ data }) => {
  const { id } = useParams();
  const product = data.find((item) => item.id.toString() === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="pa3">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <p>Tags: {product.tags.join(', ')}</p>
      <Link to="/" className="blue">
        Back to Products
      </Link>
    </div>
  );
};

export default SingleView;
