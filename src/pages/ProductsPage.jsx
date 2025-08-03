import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

// Import data from the existing data.js file
import products, { categories, getBestsellers, getInStockProducts, getProductsByCategory } from '../data';

// ProductCard Component
const ProductCard = ({ product, onNavigate }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-yellow-100">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Stock Badge */}
        {product.inStock !== undefined && (
          <div className="absolute top-3 right-3">
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
              product.inStock 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
        )}
        {/* Bestseller Badge */}
        {product.bestseller && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
              Bestseller
            </span>
          </div>
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        {/* Product Name */}
        <h3 className="text-lg sm:text-xl font-bold text-amber-900 mb-2 group-hover:text-amber-800 transition-colors duration-200">
          {product.name}
        </h3>

        {/* Description */}
        {product.description && (
          <p className="text-sm text-amber-700 mb-3 opacity-80 line-clamp-2">
            {product.description}
          </p>
        )}

        {/* Weight */}
        {product.weight && (
          <div className="flex items-center mb-3">
            <span className="text-xs font-medium text-amber-600 bg-yellow-50 px-2 py-1 rounded-full">
              {product.weight}
            </span>
          </div>
        )}

        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-amber-900">
              Rs {typeof product.price === 'number' ? product.price.toLocaleString() : product.price}
            </span>
            <span className="text-xs text-amber-600">
              Free delivery available
            </span>
          </div>
          
          <button 
            onClick={() => onNavigate(`/product/${product.id}`)}
            className="inline-flex items-center px-4 py-2 bg-yellow-400 hover:bg-amber-500 text-amber-900 font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 shadow-md hover:shadow-lg"
          >
            <span className="text-sm">View Details</span>
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Decorative Honey Drop */}
      <div className="absolute top-2 left-2 w-6 h-6 bg-yellow-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
    </div>
  );
};

// Main ProductsPage Component
const ProductsPage = () => {
    const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All Products');

  // Filter products based on active filter
  const filteredProducts = useMemo(() => {
    switch (activeFilter) {
      case 'All Products':
        return products;
      case 'In Stock':
        return getInStockProducts();
      case 'Premium':
        return products.filter(product => 
          product.category === 'Premium Honey' || 
          product.category === 'Therapeutic Honey' ||
          product.price > 800
        );
      case 'Organic':
        return products.filter(product => 
          product.features.some(feature => 
            feature.toLowerCase().includes('organic') || 
            feature.toLowerCase().includes('natural')
          )
        );
      case 'Bestsellers':
        return getBestsellers();
      default:
        // Handle category filters
        return getProductsByCategory(activeFilter);
    }
  }, [activeFilter]);

  // Available filter options
  const filterOptions = [
    'All Products',
    'In Stock', 
    'Premium',
    'Organic',
    'Bestsellers',
    ...categories.filter(cat => cat !== 'All Products')
  ];

  return (
    <div style={{ backgroundColor: '#FFF8E1' }} className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-yellow-400 via-yellow-300 to-orange-300 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-900 mb-6">
              Our Honey Collection
            </h1>
            <p className="text-lg sm:text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
              Discover nature's sweetest treasures with our premium selection of pure, 
              raw honey sourced from the finest apiaries across Nepal
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-amber-900 font-semibold text-sm">✨ 100% Pure</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-amber-900 font-semibold text-sm">🌿 Organic</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-amber-900 font-semibold text-sm">🚚 Free Delivery</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/15 rounded-full"></div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Filter Products</h3>
              <p className="text-amber-700 text-sm">Find your perfect honey variety</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {filterOptions.slice(0, 4).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-xl font-semibold text-sm transition-colors ${
                    activeFilter === filter
                      ? 'bg-yellow-400 text-amber-900'
                      : 'bg-white border border-yellow-400 text-amber-900 hover:bg-yellow-50'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          
          {/* Additional Category Filters */}
          <div className="mt-6 pt-4 border-t border-yellow-100">
            <h4 className="text-sm font-semibold text-amber-900 mb-3">Categories:</h4>
            <div className="flex flex-wrap gap-2">
              {categories.filter(cat => cat !== 'All Products').map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                    activeFilter === category
                      ? 'bg-amber-500 text-white'
                      : 'bg-yellow-50 text-amber-700 hover:bg-yellow-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-4">
            {activeFilter === 'All Products' ? 'Premium Honey Collection' : `${activeFilter} Collection`}
          </h2>
          <p className="text-amber-700 max-w-2xl mx-auto">
            {filteredProducts.length === 0 
              ? 'No products found for the selected filter.'
              : `Showing ${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''} - Each jar of HemHoney is carefully harvested and processed to preserve the natural goodness and unique flavors`
            }
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} onNavigate={navigate} />            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🍯</div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">No products found</h3>
            <p className="text-amber-700 mb-6">Try selecting a different filter or category</p>
            <button
              onClick={() => setActiveFilter('All Products')}
              className="bg-yellow-400 text-amber-900 font-semibold px-6 py-3 rounded-xl hover:bg-amber-500 transition-colors"
            >
              View All Products
            </button>
          </div>
        )}
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-900 mb-2">500+</div>
              <div className="text-amber-700 text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-900 mb-2">100%</div>
              <div className="text-amber-700 text-sm">Pure & Natural</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-900 mb-2">15+</div>
              <div className="text-amber-700 text-sm">Honey Varieties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-900 mb-2">5★</div>
              <div className="text-amber-700 text-sm">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-amber-800 mb-8 max-w-2xl mx-auto">
              Contact us for custom honey varieties or bulk orders. We're here to help you find the perfect honey for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-amber-900 font-bold py-3 px-8 rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Contact Us
              </button>
              <button 
                onClick={() => setActiveFilter('All Products')}
                className="bg-amber-900 text-white font-bold py-3 px-8 rounded-xl hover:bg-amber-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View All Products
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Footer */}
      <div className="bg-amber-900 text-center py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-yellow-200 text-lg font-semibold">
            🍯 HemHoney - Pure, Natural, Trusted since generations
          </p>
          <p className="text-yellow-300 text-sm mt-2">
            Bringing you the finest honey from Nepal's pristine landscapes
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;