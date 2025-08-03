import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Heart, User, Search } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(3); // Example cart count

  const toggleMenu = () => setOpen(!open);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#E9B824]/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-[#E9B824] shadow-md py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo with Honey Drop Animation */}
        <a 
          href="/" 
          className="flex items-center space-x-2 text-2xl font-bold tracking-wide text-[#5C3A00] hover:scale-105 transition-transform duration-300"
        >
          <div className="relative">
            <span className="text-3xl animate-bounce">🍯</span>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#F4A261] rounded-full animate-ping"></div>
          </div>
          <span className="bg-gradient-to-r from-[#5C3A00] to-[#D98E04] bg-clip-text text-transparent">
            HemHoney
          </span>
        </a>

        {/* Search Bar (Desktop) */}
        <div className="hidden lg:flex items-center bg-[#FFF8E1]/80 rounded-full px-4 py-2 flex-1 max-w-md mx-8">
          <Search className="text-[#5C3A00] mr-2 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search honey products..." 
            className="bg-transparent outline-none flex-1 text-[#5C3A00] placeholder-[#5C3A00]/60"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 font-medium">
          {navItems.map((item, index) => (
            <li key={item.name} className="relative group">
              <a 
                href={item.path} 
                className="text-[#5C3A00] hover:text-[#D98E04] transition-colors duration-300 py-2 px-1 relative overflow-hidden"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F4A261] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Wishlist */}
          <button className="relative p-2 text-[#5C3A00] hover:text-[#D98E04] hover:bg-[#FFF8E1]/50 rounded-full transition-all duration-300">
            <Heart className="w-5 h-5" />
          </button>

          {/* Cart with Badge */}
          <a 
            href="/cart" 
            className="relative p-2 text-[#5C3A00] hover:text-[#D98E04] hover:bg-[#FFF8E1]/50 rounded-full transition-all duration-300 group"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#F4A261] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </a>

          {/* User Account */}
          <button className="p-2 text-[#5C3A00] hover:text-[#D98E04] hover:bg-[#FFF8E1]/50 rounded-full transition-all duration-300">
            <User className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-3">
          {/* Mobile Cart */}
          <a href="/cart" className="relative p-2 text-[#5C3A00]">
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#F4A261] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </a>
          
          {/* Hamburger with Animation */}
          <button 
            onClick={toggleMenu}
            className="text-2xl text-[#5C3A00] p-1 hover:bg-[#FFF8E1]/50 rounded-lg transition-all duration-300"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-1 left-0 w-6 h-0.5 bg-[#5C3A00] transition-all duration-300 ${
                open ? 'rotate-45 top-3' : ''
              }`}></span>
              <span className={`absolute top-3 left-0 w-6 h-0.5 bg-[#5C3A00] transition-all duration-300 ${
                open ? 'opacity-0' : ''
              }`}></span>
              <span className={`absolute top-5 left-0 w-6 h-0.5 bg-[#5C3A00] transition-all duration-300 ${
                open ? '-rotate-45 top-3' : ''
              }`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`} onClick={toggleMenu}></div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-[#FFF8E1] to-[#E9B824]/20 backdrop-blur-xl shadow-2xl transform transition-transform duration-300 ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🍯</span>
              <span className="font-bold text-[#5C3A00]">HemHoney</span>
            </div>
            <button 
              onClick={toggleMenu}
              className="p-2 text-[#5C3A00] hover:bg-[#E9B824]/30 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Search */}
          <div className="mb-6">
            <div className="flex items-center bg-white/80 rounded-full px-4 py-3 shadow-sm">
              <Search className="text-[#5C3A00] mr-3 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent outline-none flex-1 text-[#5C3A00]"
              />
            </div>
          </div>

          {/* Mobile Navigation */}
          <ul className="space-y-1 mb-8">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <a 
                  href={item.path} 
                  onClick={toggleMenu}
                  className="flex items-center py-3 px-4 text-[#5C3A00] hover:bg-[#E9B824]/30 rounded-xl transition-all duration-200 font-medium"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Action Buttons */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center py-3 px-4 bg-[#F4A261] text-white rounded-xl font-medium hover:bg-[#D98E04] transition-colors duration-300">
              <User className="mr-2 w-4 h-4" />
              Sign In
            </button>
            <button className="w-full flex items-center justify-center py-3 px-4 border-2 border-[#F4A261] text-[#5C3A00] rounded-xl font-medium hover:bg-[#F4A261] hover:text-white transition-all duration-300">
              <Heart className="mr-2 w-4 h-4" />
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;