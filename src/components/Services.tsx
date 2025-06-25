import React from 'react';
import { Package, Truck, Settings, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Package className="text-amber-600" size={48} />,
      title: "Rice Manufacturing",
      description: "Complete rice processing from paddy to polished rice using advanced machinery and traditional expertise.",
      features: ["Premium quality processing", "Multiple rice varieties", "Custom packaging options"]
    },
    {
      icon: <Truck className="text-amber-600" size={48} />,
      title: "Distribution & Sales",
      description: "Reliable distribution network ensuring fresh rice reaches customers across Uttarakhand and beyond.",
      features: ["Timely delivery", "Bulk orders", "Retail partnerships"]
    },
    {
      icon: <Settings className="text-amber-600" size={48} />,
      title: "Custom Processing",
      description: "Tailored processing services to meet specific customer requirements and quality standards.",
      features: ["Custom specifications", "Quality testing", "Flexible quantities"]
    },
    {
      icon: <Users className="text-amber-600" size={48} />,
      title: "Consultation Services",
      description: "Expert guidance on rice quality, storage, and best practices for retailers and distributors.",
      features: ["Quality assessment", "Storage guidance", "Market insights"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-amber-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive rice manufacturing and distribution services designed to meet 
            all your rice-related needs with uncompromising quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-amber-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Shakti Rice Mill?
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We combine decades of experience with modern technology to deliver 
                exceptional rice products that exceed expectations.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">100%</div>
                  <div className="text-gray-600">Quality Assured</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">24/7</div>
                  <div className="text-gray-600">Customer Support</div>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Get Quote Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;