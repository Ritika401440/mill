import React, { useState } from 'react';
import { ArrowRight, Award, Users, Factory, X } from 'lucide-react';

const products = [
  {
    name: 'IR64 WHITE 5%',
    image: '/images/photo1.jpeg',
    description: 'High-quality IR64 rice with 5% broken grains. Known for its long grain, affordability, and suitability for daily meals and export.'
  },
  {
    name: 'IR64 WHITE 25%',
    image: '/images/photo2.jpeg',
    description: 'IR64 rice with 25% broken grains. Economical and ideal for bulk use in food service, hotels, and catering.'
  },
  {
    name: 'Swarna white 5%',
    image: '/images/photo3.jpeg',
    description: 'Premium Swarna rice with only 5% broken. Popular for its taste, texture, and nutritional value.'
  },
  {
    name: 'Swarna 25%',
    image: '/images/photo-gallery.jpeg',
    description: 'Swarna rice with 25% broken grains. Cost-effective and widely used in institutional kitchens.'
  },
  {
    name: 'Broken white 100%',
    image: '/images/photo1.jpeg',
    description: '100% broken white rice. Used for rice flour, snacks, brewing, and animal feed.'
  },
  {
    name: 'Sona masoori steam',
    image: '/images/photo2.jpeg',
    description: 'Steamed Sona Masoori rice. Lightweight, aromatic, and perfect for South Indian cuisine.'
  },
  {
    name: 'PR 26 White 5%',
    image: '/images/photo3.jpeg',
    description: 'PR 26 variety with 5% broken. Soft texture, ideal for daily meals and export.'
  },
  {
    name: 'PR 26 steam 5%',
    image: '/images/photo-gallery.jpeg',
    description: 'Steamed PR 26 rice with 5% broken. Retains nutrients and flavor, suitable for a variety of dishes.'
  },
  {
    name: 'Mota (common) 5%',
    image: '/images/photo1.jpeg',
    description: 'Mota rice with 5% broken. Commonly used in local cuisines for its filling nature.'
  },
  {
    name: 'Sona masoori white 5%',
    image: '/images/photo2.jpeg',
    description: 'White Sona Masoori rice with 5% broken. Soft, fluffy, and aromatic, perfect for daily use.'
  },
];

const Hero = () => {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${import.meta.env.BASE_URL}images/photo-gallery.jpeg")`,
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
            <button
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              onClick={() => setShowProducts(true)}
            >
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

      {/* Products Modal */}
      {showProducts && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
              onClick={() => setShowProducts(false)}
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Rice Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((product, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg shadow p-4 flex flex-col items-center">
                  <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{product.name}</h3>
                  <p className="text-gray-700 text-center">{product.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;