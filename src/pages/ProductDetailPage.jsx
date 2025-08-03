import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>Rs {product.price}</h3>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
