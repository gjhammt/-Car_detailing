import React, { useState } from 'react';
import { Star, Shield, Timer, Menu, X } from 'lucide-react';

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* Navigation Bar */}
      <nav className="relative z-20 bg-black bg-opacity-70 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">4Ten</span>
              <span className="text-2xl font-bold text-blue-400">.</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-white hover:text-blue-400 transition">Services</a>
              <a href="#gallery" className="text-white hover:text-blue-400 transition">Gallery</a>
              <a href="#about" className="text-white hover:text-blue-400 transition">About Us</a>
              <a href="#testimonials" className="text-white hover:text-blue-400 transition">Reviews</a>
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white focus:outline-none"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <a 
                href="#services" 
                className="block text-white hover:text-blue-400 transition px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#gallery" 
                className="block text-white hover:text-blue-400 transition px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </a>
              <a 
                href="#about" 
                className="block text-white hover:text-blue-400 transition px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </a>
              <a 
                href="#testimonials" 
                className="block text-white hover:text-blue-400 transition px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Reviews
              </a>
              <a 
                href="#contact" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Content */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-32 pt-40">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Premium Car Detailing Services 
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Expert Detailing, Ceramic Coatings & Paint Correction – Book Online Today!
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300">
              Get a Free Quote
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition duration-300">
              View Our Services
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-400" />
              <span>5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-400" />
              <span>1000+ Cars Detailed</span>
            </div>
            <div className="flex items-center gap-2">
              <Timer className="w-6 h-6 text-green-400" />
              <span>Certified Professionals</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
