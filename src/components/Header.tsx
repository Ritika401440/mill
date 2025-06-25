import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-amber-700 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>9876545672</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin size={14} />
              <span>Kiccha, Uttarakhand</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Mail size={14} />
            <span>info@shaktiricemill.com</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img 
              src="/logo, shakti rice.png" 
              alt="Shakti Rice Mill" 
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-amber-700 font-medium transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-amber-700 font-medium transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-amber-700 font-medium transition-colors">Services</a>
            <a href="#gallery" className="text-gray-700 hover:text-amber-700 font-medium transition-colors">Gallery</a>
            <a href="#contact" className="text-gray-700 hover:text-amber-700 font-medium transition-colors">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-amber-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-amber-700 font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-amber-700 font-medium">About</a>
              <a href="#services" className="text-gray-700 hover:text-amber-700 font-medium">Services</a>
              <a href="#gallery" className="text-gray-700 hover:text-amber-700 font-medium">Gallery</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-700 font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;