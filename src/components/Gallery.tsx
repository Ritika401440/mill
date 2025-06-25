import React from 'react';

const Gallery = () => {
  const images = [
    {
      src: "/mill/images/photo1.jpeg",
      alt: "Rice processing facility exterior",
      title: "Modern Processing Facility"
    },
    {
      src: "/mill/images/photo2.jpeg",
      alt: "Rice processing machinery",
      title: "Advanced Machinery"
    },
    {
      src: "/mill/images/photo3.jpeg",
      alt: "Rice processing equipment",
      title: "Quality Processing Equipment"
    },
    {
      src: "/mill/images/photo-gallery.jpeg",
      alt: "Rice fields and facility",
      title: "Our Operations"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-amber-600">Facility</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at our state-of-the-art rice processing facility and 
            the advanced machinery that ensures premium quality rice production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end">
                <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-semibold">{image.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">50+</div>
            <div className="text-gray-600">Tons Daily Capacity</div>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">15+</div>
            <div className="text-gray-600">Processing Machines</div>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">99%</div>
            <div className="text-gray-600">Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;