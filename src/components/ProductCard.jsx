import React from 'react';

const ProductCard = ({ product }) => {
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
            onClick={() => console.log(`View product: ${product.id}`)}
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

export default ProductCard;