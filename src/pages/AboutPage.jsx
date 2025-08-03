import React from 'react';
import { Heart, Leaf, Award, Users, Mountain, Droplets, Shield, Clock } from 'lucide-react';
import Bookkeepers from '../assets/Bookkeepers.jpg';

const AboutPage = () => {
  const stats = [
    { number: '10+', label: 'Years of Experience', icon: Clock },
    { number: '500+', label: 'Happy Customers', icon: Users },
    { number: '15+', label: 'Honey Varieties', icon: Droplets },
    { number: '100%', label: 'Pure & Natural', icon: Shield }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Quality',
      description: 'We are passionate about delivering the highest quality honey that preserves all natural nutrients and flavors.'
    },
    {
      icon: Leaf,
      title: 'Sustainable Practices',
      description: 'Our commitment to environmental sustainability ensures that our practices protect both bees and their natural habitats.'
    },
    {
      icon: Award,
      title: 'Premium Standards',
      description: 'Every jar of HemHoney meets rigorous quality standards, ensuring you receive only the finest honey products.'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'We work closely with local beekeepers, supporting their livelihoods and preserving traditional honey harvesting methods.'
    }
  ];

  const timeline = [
    {
      year: '2014',
      title: 'The Beginning',
      description: 'Started as a small family business with a passion for pure, natural honey.'
    },
    {
      year: '2017',
      title: 'Local Partnerships',
      description: 'Established partnerships with local beekeepers across Nepal\'s diverse regions.'
    },
    {
      year: '2020',
      title: 'Organic Certification',
      description: 'Achieved organic certification and expanded our premium honey collection.'
    },
    {
      year: '2024',
      title: 'Digital Expansion',
      description: 'Launched our online platform to bring Nepal\'s finest honey to your doorstep.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#FFF8E1' }} className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-yellow-400 via-yellow-300 to-orange-300 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <div className="mb-8">
              <span className="text-6xl sm:text-8xl">🍯</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-900 mb-6">
              About HemHoney
            </h1>
            <p className="text-xl sm:text-2xl text-amber-800 max-w-4xl mx-auto leading-relaxed">
              We provide pure, organic honey harvested with love and care by local beekeepers 
              from the pristine landscapes of Nepal
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white/25 backdrop-blur-sm rounded-full px-6 py-3">
                <Mountain className="w-5 h-5 text-amber-900 mr-2" />
                <span className="text-amber-900 font-semibold">Himalayan Heritage</span>
              </div>
              <div className="flex items-center bg-white/25 backdrop-blur-sm rounded-full px-6 py-3">
                <Leaf className="w-5 h-5 text-amber-900 mr-2" />
                <span className="text-amber-900 font-semibold">100% Natural</span>
              </div>
              <div className="flex items-center bg-white/25 backdrop-blur-sm rounded-full px-6 py-3">
                <Heart className="w-5 h-5 text-amber-900 mr-2" />
                <span className="text-amber-900 font-semibold">Made with Love</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/15 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/20 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-4">
                    <div className="bg-yellow-100 p-4 rounded-2xl group-hover:bg-yellow-200 transition-colors">
                      <IconComponent className="w-8 h-8 text-amber-900" />
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-amber-900 mb-2">{stat.number}</div>
                  <div className="text-amber-700 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-6">
                Our Sweet Journey
              </h2>
              <div className="space-y-6 text-amber-700 text-lg leading-relaxed">
                <p>
                  HemHoney began as a dream to share the pure, untouched sweetness of Nepal's 
                  diverse landscapes with the world. Founded by a family passionate about 
                  preserving traditional beekeeping methods, we started our journey in the 
                  foothills of the Himalayas.
                </p>
                <p>
                  Our honey is more than just a product – it's a testament to the harmony 
                  between nature and craftsmanship. Each jar carries the essence of Nepal's 
                  pristine forests, mountain meadows, and the dedication of our local beekeepers 
                  who have mastered their craft over generations.
                </p>
                <p>
                  Today, HemHoney stands as a symbol of purity, quality, and sustainability. 
                  We continue to work hand-in-hand with local communities, ensuring that every 
                  drop of honey we offer meets the highest standards of excellence while 
                  supporting the livelihoods of our beekeeping partners.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-200 to-orange-200 rounded-3xl p-8 shadow-2xl">
                <img 
                  src={Bookkeepers}
                  alt="Beekeepers in Nepal" 
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
              {/* Decorative honey drops */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-orange-300 rounded-full opacity-60"></div>
              <div className="absolute top-1/2 -right-6 w-6 h-6 bg-yellow-300 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-amber-700 max-w-3xl mx-auto">
              The principles that guide us in our mission to bring you the finest honey while 
              supporting our communities and environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-yellow-50 rounded-2xl p-8 hover:bg-yellow-100 transition-colors group">
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-400 p-4 rounded-xl group-hover:bg-amber-500 transition-colors">
                      <IconComponent className="w-6 h-6 text-amber-900" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-amber-900 mb-3">{value.title}</h3>
                      <p className="text-amber-700 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4">
              Our Journey Through Time
            </h2>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
              Milestones that shaped HemHoney into the trusted brand it is today
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-yellow-300"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-yellow-400 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`flex-1 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-center mb-4">
                        <span className="bg-yellow-400 text-amber-900 px-4 py-2 rounded-full font-bold text-lg">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-amber-900 mb-3">{item.title}</h3>
                      <p className="text-amber-700 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 sm:p-12">
              <div className="text-center mb-8">
                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-amber-900" />
                </div>
                <h3 className="text-2xl font-bold text-amber-900">Our Mission</h3>
              </div>
              <p className="text-amber-700 text-lg leading-relaxed text-center">
                To provide the world's finest, purest honey while supporting local beekeepers 
                and preserving traditional honey harvesting methods that have been passed down 
                through generations in Nepal.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 sm:p-12">
              <div className="text-center mb-8">
                <div className="bg-orange-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mountain className="w-8 h-8 text-amber-900" />
                </div>
                <h3 className="text-2xl font-bold text-amber-900">Our Vision</h3>
              </div>
              <p className="text-amber-700 text-lg leading-relaxed text-center">
                To become the most trusted honey brand globally, known for our unwavering 
                commitment to quality, sustainability, and the preservation of Nepal's 
                rich beekeeping heritage.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-300 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-6">
            Experience the HemHoney Difference
          </h2>
          <p className="text-lg text-amber-800 mb-10 leading-relaxed">
            Join thousands of customers who have discovered the pure, natural sweetness of 
            Nepal's finest honey. Taste the tradition, quality, and love in every jar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-900 font-bold py-4 px-8 rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Shop Our Honey
            </button>
            <button className="bg-amber-900 text-white font-bold py-4 px-8 rounded-xl hover:bg-amber-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Brand Footer */}
      <div className="bg-amber-900 text-center py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-4">
            <span className="text-6xl">🍯</span>
          </div>
          <p className="text-yellow-200 text-xl font-semibold mb-2">
            HemHoney - Pure, Natural, Trusted since generations
          </p>
          <p className="text-yellow-300">
            Bringing you the finest honey from Nepal's pristine landscapes
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;