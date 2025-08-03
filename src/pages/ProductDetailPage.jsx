import React, { useState } from 'react';
import products from '../data';
import { Star, Heart, ShoppingCart, Truck, Shield, Award, ArrowLeft, Plus, Minus } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetailPage = ({ productId, onNavigateBack, onNavigateToProduct }) => {

    const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  // In a real app, this would come from useParams()  
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) {
    return (
      <div style={{ backgroundColor: '#FFF8E1' }} className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🍯</div>
          <h2 className="text-2xl font-bold text-amber-900 mb-4">Product not found</h2>
          <button 
            onClick={onNavigateBack}
            className="bg-yellow-400 text-amber-900 font-semibold px-6 py-3 rounded-xl hover:bg-amber-500 transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  // Mock additional images (in real app, this would come from product data)
  const productImages = [product.image, product.image, product.image];

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const calculateSavings = () => {
    if (product.originalPrice && product.originalPrice > product.price) {
      return product.originalPrice - product.price;
    }
    return 0;
  };

  const savingsPercentage = () => {
    const savings = calculateSavings();
    if (savings > 0) {
      return Math.round((savings / product.originalPrice) * 100);
    }
    return 0;
  };

  return (
    <div style={{ backgroundColor: '#FFF8E1' }} className="min-h-screen">
      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <button 
          onClick={onNavigateBack}
          className="flex items-center text-amber-900 hover:text-amber-700 transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span className="font-medium">Back to Products</span>
        </button>
      </div>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src={productImages[selectedImage]} 
                alt={product.name}
                className="w-full h-96 sm:h-[500px] object-cover"
              />
              {/* Badges */}
              <div className="absolute top-4 left-4 space-y-2">
                {product.bestseller && (
                  <span className="bg-yellow-400 text-amber-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Bestseller
                  </span>
                )}
                {savingsPercentage() > 0 && (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold block">
                    {savingsPercentage()}% OFF
                  </span>
                )}
              </div>
              
              {/* Stock Status */}
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  product.inStock 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Product Header */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h1 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-2">
                    {product.name}
                  </h1>
                  <div className="flex items-center space-x-4 mb-4">
                    {/* Rating */}
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-5 h-5 ${
                              i < Math.floor(product.rating) 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-gray-300'
                            }`} 
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-amber-700 font-medium">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Wishlist Button */}
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Heart 
                    className={`w-6 h-6 ${
                      isWishlisted 
                        ? 'text-red-500 fill-current' 
                        : 'text-gray-400 hover:text-red-400'
                    }`} 
                  />
                </button>
              </div>

              {/* Category and Weight */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="bg-yellow-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  {product.weight}
                </span>
              </div>
            </div>

            {/* Price Section */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-4xl font-bold text-amber-900">
                  Rs{product.price.toLocaleString()}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <>
                    <span className="text-xl text-gray-500 line-through">
                      Rs{product.originalPrice.toLocaleString()}
                    </span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                      Save Rs{calculateSavings()}
                    </span>
                  </>
                )}
              </div>
              
              {/* Quantity and Add to Cart */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                {/* Quantity Selector */}
                <div className="flex items-center border border-yellow-300 rounded-xl">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-3 hover:bg-yellow-50 transition-colors rounded-l-xl"
                  >
                    <Minus className="w-4 h-4 text-amber-900" />
                  </button>
                  <span className="px-6 py-3 font-semibold text-amber-900 border-x border-yellow-300">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-3 hover:bg-yellow-50 transition-colors rounded-r-xl"
                  >
                    <Plus className="w-4 h-4 text-amber-900" />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button 
                  disabled={!product.inStock}
                  className={`flex-1 flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 ${
                    product.inStock
                      ? 'bg-yellow-400 hover:bg-amber-500 text-amber-900 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-amber-900 mb-4">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    <span className="text-amber-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping & Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-md text-center">
                <Truck className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-sm font-semibold text-amber-900">Free Delivery</div>
                <div className="text-xs text-amber-700">On orders above Rs500</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md text-center">
                <Shield className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-sm font-semibold text-amber-900">Quality Assured</div>
                <div className="text-xs text-amber-700">100% Pure & Natural</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md text-center">
                <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-sm font-semibold text-amber-900">Certified</div>
                <div className="text-xs text-amber-700">Organic & Premium</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-amber-900 mb-6">About This Product</h2>
          <p className="text-amber-700 leading-relaxed text-lg mb-6">
            {product.description}
          </p>
          
          {/* Additional Product Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Product Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-yellow-100">
                  <span className="text-amber-700">Category:</span>
                  <span className="font-medium text-amber-900">{product.category}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-yellow-100">
                  <span className="text-amber-700">Weight:</span>
                  <span className="font-medium text-amber-900">{product.weight}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-yellow-100">
                  <span className="text-amber-700">Rating:</span>
                  <span className="font-medium text-amber-900">{product.rating}/5 ⭐</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-amber-700">Reviews:</span>
                  <span className="font-medium text-amber-900">{product.reviews} reviews</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Why Choose This Honey?</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span className="text-amber-700">Harvested from pristine locations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span className="text-amber-700">No artificial additives or preservatives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span className="text-amber-700">Rich in natural enzymes and nutrients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span className="text-amber-700">Sustainably sourced from local beekeepers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-8 text-center">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(relatedProduct => (
              <div 
                key={relatedProduct.id}
                onClick={() => onNavigateToProduct && onNavigateToProduct(relatedProduct.id)}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer border border-yellow-100"
              >
                <img 
                  src={relatedProduct.image} 
                  alt={relatedProduct.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-amber-900 mb-2">{relatedProduct.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-amber-900">
                      Rs{relatedProduct.price.toLocaleString()}
                    </span>
                    <button className="bg-yellow-400 hover:bg-amber-500 text-amber-900 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Brand Footer */}
      <div className="bg-amber-900 text-center py-8 mt-16">
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

export default ProductDetailPage;