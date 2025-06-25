import React from 'react';

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

const Products = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Our <span className="text-amber-600">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our wide range of premium rice varieties, each processed with care and quality assurance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center">
              <img src={product.image} alt={product.name} className="w-full h-56 object-cover rounded mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">{product.name}</h3>
              <p className="text-gray-700 text-center">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products; 