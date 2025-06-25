import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img 
              src="/logo, shakti rice.png" 
              alt="Shakti Rice Mill" 
              className="h-16 w-auto mb-6 filter brightness-0 invert"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Shakti Rice Mill is your trusted partner for premium quality rice manufacturing 
              and distribution in Uttarakhand. We combine traditional expertise with modern 
              technology to deliver exceptional rice products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-amber-600 hover:bg-amber-700 p-2 rounded-lg transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-amber-600 hover:bg-amber-700 p-2 rounded-lg transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-amber-600 hover:bg-amber-700 p-2 rounded-lg transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-amber-600 hover:bg-amber-700 p-2 rounded-lg transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-amber-400 transition-colors">Our Services</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-amber-400 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="text-amber-400 flex-shrink-0" size={18} />
                <span className="text-gray-300">9876545672</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-amber-400 flex-shrink-0" size={18} />
                <span className="text-gray-300">info@shaktiricemill.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-amber-400 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-300">Kiccha, Uttarakhand</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Shakti Rice Mill. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Quality Standards</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;