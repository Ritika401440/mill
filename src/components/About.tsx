import React from 'react';
import { CheckCircle, Leaf, Shield, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-amber-600">Shakti Rice Mill</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Located in the heart of Kiccha, Uttarakhand, Shakti Rice Mill has been a cornerstone 
              of quality rice manufacturing and distribution. We pride ourselves on delivering 
              premium-grade rice products that meet the highest standards of quality and purity.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our state-of-the-art facility combines traditional expertise with modern technology 
              to ensure every grain of rice meets our exacting standards. From sourcing the finest 
              raw materials to the final packaging, we maintain strict quality control at every step.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Quality Assurance</h4>
                  <p className="text-gray-600 text-sm">Rigorous testing and quality control</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Leaf className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Natural Processing</h4>
                  <p className="text-gray-600 text-sm">Preserving natural nutrients and flavor</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Food Safety</h4>
                  <p className="text-gray-600 text-sm">Certified safe processing standards</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Timely Delivery</h4>
                  <p className="text-gray-600 text-sm">Reliable and prompt service</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src={`${import.meta.env.BASE_URL}images/photo1.jpeg`} 
              alt="Rice processing facility" 
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold">25+</h4>
              <p className="text-amber-100">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;