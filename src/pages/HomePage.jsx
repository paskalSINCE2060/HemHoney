import React, { useState } from 'react';
import { ShoppingCart, Star, Truck, Shield, Heart, ChevronRight, Menu, X } from 'lucide-react';
import premiumHoney from '../assets/premiumHoney.jpg'; 
import wildflower from '../assets/wildflower.jpg'; 
import Clover from '../assets/Clover.jpg'; 
import ManukaHoney from '../assets/ManukaHoney.jpg';
import Lavender from '../assets/Lavender.jpg';
import OurStory from '../assets/OurStory.jpg';

// Mock data for products
const products = [
  {
    id: 1,
    name: "Raw Wildflower Honey",
    price: 24.99,
    image: wildflower,
    rating: 4.9,
    reviews: 127
  },
  {
    id: 2,
    name: "Organic Clover Honey",
    price: 19.99,
    image: Clover,
    rating: 4.8,
    reviews: 89
  },
  {
    id: 3,
    name: "Manuka Honey",
    price: 49.99,
    image: ManukaHoney,
    rating: 5.0,
    reviews: 203
  },
  {
    id: 4,
    name: "Lavender Infused Honey",
    price: 29.99,
    image: Lavender,
    rating: 4.7,
    reviews: 156
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "The best honey I've ever tasted! Pure, natural, and absolutely delicious.",
    rating: 5
  },
  {
    name: "Mike Chen",
    text: "HemHoney's quality is unmatched. My family loves every variety we've tried.",
    rating: 5
  },
  {
    name: "Emma Davis",
    text: "Fast shipping and excellent customer service. Highly recommend!",
    rating: 5
  }
];

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
    <div className="relative">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md">
        <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors cursor-pointer" />
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-lg font-semibold text-amber-900 mb-2">{product.name}</h3>
      <div className="flex items-center mb-3">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>
        <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-amber-800">Rs{product.price}</span>
        <button className="bg-yellow-400 hover:bg-amber-500 text-amber-900 px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2">
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-400 via-yellow-300 to-amber-400 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-6xl font-bold text-amber-900 mb-6">
                Pure, Natural
                <span className="block text-yellow-700">Golden Honey</span>
              </h2>
              <p className="text-xl text-amber-800 mb-8 leading-relaxed">
                Experience the finest organic honey, sourced directly from local beekeepers. 
                Pure, unprocessed, and bursting with natural goodness for your health and wellness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-amber-900 hover:bg-amber-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2">
                  Shop Now
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="bg-white hover:bg-gray-50 text-amber-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 border-2 border-amber-900">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={premiumHoney}
                alt="Premium Honey"
                className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto lg:max-w-none"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-800">100%</div>
                  <div className="text-sm text-gray-600">Pure & Natural</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-amber-900 mb-4">Why Choose HemHoney?</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're committed to bringing you the highest quality honey with exceptional service
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl hover:bg-yellow-50 transition-colors">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="text-xl font-semibold text-amber-900 mb-3">100% Pure & Natural</h4>
              <p className="text-gray-600">
                Our honey is completely unprocessed and free from additives, ensuring you get the purest taste of nature.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl hover:bg-yellow-50 transition-colors">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="text-xl font-semibold text-amber-900 mb-3">Fast & Free Shipping</h4>
              <p className="text-gray-600">
                Free shipping on orders over Rs1500. Get your honey delivered fresh to your doorstep within 2-3 days.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl hover:bg-yellow-50 transition-colors">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="text-xl font-semibold text-amber-900 mb-3">Supporting Local Beekeepers</h4>
              <p className="text-gray-600">
                Every purchase supports local beekeeping communities and helps maintain healthy bee populations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-amber-900 mb-4">Featured Products</h3>
            <p className="text-gray-600 text-lg">Discover our premium collection of artisanal honey</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-yellow-400 hover:bg-amber-500 text-amber-900 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-200 inline-flex items-center gap-2">
              View All Products
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={OurStory} 
                alt="Beekeeper at work"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-amber-900 mb-6">Our Story</h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                HemHoney was born from a passion for pure, natural honey and a commitment to supporting local beekeeping communities. 
                We work directly with experienced beekeepers who share our values of sustainability and quality.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Every jar of our honey is carefully harvested, minimally processed, and tested for purity to ensure you receive 
                the finest honey nature has to offer. From our family to yours, taste the difference that care and quality make.
              </p>
              <button className="bg-amber-900 hover:bg-amber-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-100 to-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-amber-900 mb-4">What Our Customers Say</h3>
            <p className="text-gray-600 text-lg">Join thousands of satisfied customers who love our honey</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="font-semibold text-amber-900">- {testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-amber-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Stay Sweet with Our Newsletter</h3>
          <p className="text-amber-100 text-lg mb-8">
            Get exclusive offers, honey recipes, and beekeeping insights delivered to your inbox
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
            <button className="bg-yellow-400 hover:bg-yellow-500 text-amber-900 px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;