import React from 'react';
import { ArrowRight, Award, Users, Factory } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/photo-gallery.jpeg")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Premium Quality
            <span className="text-amber-400 block">Rice Manufacturing</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Shakti Rice Mill - Your trusted partner for high-quality rice production and distribution in Uttarakhand. 
            Committed to excellence since our establishment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Explore Our Products
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Contact Us Today
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
            <Award className="mx-auto mb-4 text-amber-400" size={48} />
            <h3 className="text-2xl font-bold text-white mb-2">Premium Quality</h3>
            <p className="text-gray-200">Certified high-grade rice processing</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
            <Users className="mx-auto mb-4 text-amber-400" size={48} />
            <h3 className="text-2xl font-bold text-white mb-2">Trusted Service</h3>
            <p className="text-gray-200">Serving customers across the region</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
            <Factory className="mx-auto mb-4 text-amber-400" size={48} />
            <h3 className="text-2xl font-bold text-white mb-2">Modern Facility</h3>
            <p className="text-gray-200">State-of-the-art processing equipment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;