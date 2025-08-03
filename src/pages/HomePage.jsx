import React from 'react';
import products from '../data';
import ProductCard from '../components/ProductCard';

const HomePage = () => (
  <div className="home">
    <h2>Welcome to HemHoney</h2>
    <p>Pure, organic, and natural honey for your health</p>
    <div className="product-grid">
      {products.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
  </div>
);

export default HomePage;
