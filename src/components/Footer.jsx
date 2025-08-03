import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-yellow-50 to-orange-50 border-t-4 border-yellow-400">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-yellow-900 font-bold text-lg">🍯</span>
              </div>
              <h3 className="text-2xl font-bold text-yellow-900">HemHoney</h3>
            </div>
            <p className="text-yellow-800 mb-6 leading-relaxed text-sm">
              Pure, natural honey harvested with love from our sustainable apiaries. 
              Bringing you the finest quality honey straight from nature to your table.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-yellow-900" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-yellow-900" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-yellow-900" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold text-yellow-900 mb-6 border-b border-yellow-300 pb-2">Quick Links</h4>
            <ul className="space-y-3 flex-grow">
              {['Our Honey', 'About Us', 'Bee Farm Tours', 'Wholesale', 'Recipes', 'Blog'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-yellow-800 hover:text-orange-600 transition-colors duration-300 flex items-center group text-sm"
                  >
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:bg-orange-500 transition-colors duration-300 flex-shrink-0"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold text-yellow-900 mb-6 border-b border-yellow-300 pb-2">Our Products</h4>
            <ul className="space-y-3 flex-grow">
              {['Raw Honey', 'Wildflower Honey', 'Manuka Honey', 'Honey Combs', 'Bee Pollen', 'Propolis'].map((product) => (
                <li key={product}>
                  <a 
                    href="#" 
                    className="text-yellow-800 hover:text-orange-600 transition-colors duration-300 flex items-center group text-sm"
                  >
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:bg-orange-500 transition-colors duration-300 flex-shrink-0"></span>
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-semibold text-yellow-900 mb-6 border-b border-yellow-300 pb-2">Contact Us</h4>
            <div className="space-y-4 flex-grow">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-yellow-800 text-sm leading-relaxed">
                    123 Honeybee Lane<br />
                    Sweet Valley, SV 12345
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-600 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-yellow-800 hover:text-orange-600 transition-colors duration-300 text-sm">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-600 flex-shrink-0" />
                <a href="mailto:info@hemhoney.com" className="text-yellow-800 hover:text-orange-600 transition-colors duration-300 text-sm">
                  info@hemhoney.com
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h5 className="text-md font-medium text-yellow-900 mb-4">Sweet Updates</h5>
              <div className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="w-full px-4 py-3 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-white text-yellow-900 placeholder-yellow-600 text-sm"
                />
                <button className="w-full px-4 py-3 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-medium rounded-lg transition-colors duration-300 text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-yellow-900 bg-opacity-10 border-t border-yellow-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 text-center lg:text-left">
            <div className="text-yellow-800 text-sm">
              <span>&copy; {new Date().getFullYear()} HemHoney. All rights reserved.</span>
            </div>
            
            <div className="flex items-center justify-center space-x-1 text-yellow-800 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current mx-1" />
              <span>by nature's finest bees</span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-end space-x-4 lg:space-x-6 text-sm">
              <a href="#" className="text-yellow-800 hover:text-orange-600 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-yellow-800 hover:text-orange-600 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-yellow-800 hover:text-orange-600 transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;