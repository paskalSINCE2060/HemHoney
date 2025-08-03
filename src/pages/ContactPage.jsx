import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Heart, Star, Shield } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFF8E1' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 rounded-full opacity-20 animate-bounce" style={{ backgroundColor: '#E9B824', animationDelay: '0s' }}></div>
        <div className="absolute top-32 right-20 w-2 h-2 rounded-full opacity-20 animate-bounce" style={{ backgroundColor: '#F4A261', animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-4 h-4 rounded-full opacity-20 animate-bounce" style={{ backgroundColor: '#E9B824', animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 rounded-full opacity-20 animate-bounce" style={{ backgroundColor: '#F4A261', animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-8 h-8 mr-3 animate-pulse" style={{ color: '#E9B824' }} />
            <h1 className="text-4xl md:text-5xl font-bold" style={{ color: '#5C3A00',marginTop:'50px' }}>
              Contact HemHoney
            </h1>
            <Heart className="w-8 h-8 ml-3 animate-pulse" style={{ color: '#E9B824' }} />
          </div>
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: '#5C3A00' }}>
            Sweet connections start here. Reach out to us for the finest honey experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div 
              className="p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: 'white' }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center" style={{ color: '#5C3A00' }}>
                <Send className="w-6 h-6 mr-3" style={{ color: '#E9B824' }} />
                Send us a Message
              </h2>
              
              <div className="space-y-6">
                <div className="group">
                  <label className="block text-sm font-medium mb-2" style={{ color: '#5C3A00' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 group-hover:shadow-md"
                    style={{ 
                      borderColor: '#E9B824'
                    }}
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium mb-2" style={{ color: '#5C3A00' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 group-hover:shadow-md"
                    style={{ 
                      borderColor: '#E9B824'
                    }}
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium mb-2" style={{ color: '#5C3A00' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your honey needs, questions, or feedback..."
                    rows="5"
                    required
                    className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 group-hover:shadow-md resize-none"
                    style={{ 
                      borderColor: '#E9B824'
                    }}
                  ></textarea>
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  style={{ 
                    backgroundColor: '#E9B824'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#D98E04'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#E9B824'}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2 space-y-6">
            <div 
              className="p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: 'white' }}
            >
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 mr-3" style={{ color: '#E9B824' }} />
                <h3 className="text-xl font-semibold" style={{ color: '#5C3A00' }}>Location</h3>
              </div>
              <p style={{ color: '#5C3A00' }}>
                123 Honey Valley Lane<br />
                Sweet Creek, HC 12345<br />
                United States
              </p>
            </div>

            <div 
              className="p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: 'white' }}
            >
              <div className="flex items-center mb-4">
                <Phone className="w-6 h-6 mr-3" style={{ color: '#E9B824' }} />
                <h3 className="text-xl font-semibold" style={{ color: '#5C3A00' }}>Phone</h3>
              </div>
              <p style={{ color: '#5C3A00' }}>
                <span className="hover:underline transition-all duration-200 cursor-pointer">
                  +1 (234) 567-8900
                </span>
              </p>
            </div>

            <div 
              className="p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: 'white' }}
            >
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 mr-3" style={{ color: '#E9B824' }} />
                <h3 className="text-xl font-semibold" style={{ color: '#5C3A00' }}>Email</h3>
              </div>
              <p style={{ color: '#5C3A00' }}>
                <span className="hover:underline transition-all duration-200 cursor-pointer">
                  hello@hemhoney.com
                </span>
              </p>
            </div>

            <div 
              className="p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: 'white' }}
            >
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 mr-3" style={{ color: '#E9B824' }} />
                <h3 className="text-xl font-semibold" style={{ color: '#5C3A00' }}>Business Hours</h3>
              </div>
              <div style={{ color: '#5C3A00' }}>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            {/* Decorative honey element */}
            <div className="text-center pt-8">
              <div className="inline-block p-8 rounded-full animate-pulse" style={{ backgroundColor: '#F4A261', opacity: 0.1 }}>
                <Heart className="w-16 h-16" style={{ color: '#E9B824' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 p-8 rounded-2xl" style={{ backgroundColor: 'white' }}>
          <h3 className="text-2xl font-bold mb-4" style={{ color: '#5C3A00' }}>
            Why Choose HemHoney?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#F4A261' }}>
                <Star className="w-8 h-8" style={{ color: 'white' }} />
              </div>
              <h4 className="font-semibold mb-2" style={{ color: '#5C3A00' }}>Pure & Natural</h4>
              <p className="text-sm" style={{ color: '#5C3A00' }}>100% raw honey sourced directly from our apiaries</p>
            </div>
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#E9B824' }}>
                <Send className="w-8 h-8" style={{ color: 'white' }} />
              </div>
              <h4 className="font-semibold mb-2" style={{ color: '#5C3A00' }}>Fast Delivery</h4>
              <p className="text-sm" style={{ color: '#5C3A00' }}>Quick and secure shipping to your doorstep</p>
            </div>
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#D98E04' }}>
                <Shield className="w-8 h-8" style={{ color: 'white' }} />
              </div>
              <h4 className="font-semibold mb-2" style={{ color: '#5C3A00' }}>24/7 Support</h4>
              <p className="text-sm" style={{ color: '#5C3A00' }}>Always here to help with your honey needs</p>
            </div>
          </div>
        </div>

        {/* Hexagonal pattern decoration */}
        <div className="mt-12 flex justify-center">
          <div className="grid grid-cols-3 gap-2 opacity-20">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="w-8 h-8 transform rotate-45 animate-pulse"
                style={{ 
                  backgroundColor: i % 2 === 0 ? '#E9B824' : '#F4A261',
                  animationDelay: `${i * 0.2}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;