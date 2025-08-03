import React from 'react';
import products from '../data';
import ProductCard from '../components/ProductCard';

const ProductsPage = () => (
  <div className="products">
    <h2>Our Honey Collection</h2>
    <div className="product-grid">
      {products.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
  </div>
);

export default ProductsPage;
