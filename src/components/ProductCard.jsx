import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>Rs {product.price}</p>
    <Link to={`/product/${product.id}`}>View Details</Link>
  </div>
);

export default ProductCard;
