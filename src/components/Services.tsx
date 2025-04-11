import React from 'react';
import { Droplet, Car, Shield, Wrench, Package, Plus } from 'lucide-react';

const services = [
  {
    icon: Droplet,
    title: 'Basic Wash & Wax',
    description: 'Exterior hand wash, wheel cleaning, wax application',
    price: 'From $149',
  },
  {
    icon: Car,
    title: 'Interior Detailing',
    description: 'Deep cleaning, leather conditioning, odor removal',
    price: 'From $199',
  },
  {
    icon: Shield,
    title: 'Ceramic Coating',
    description: 'Long-term paint protection (1-5 year options)',
    price: 'From $699',
  },
  {
    icon: Wrench,
    title: 'Paint Correction',
    description: 'Scratch/swirl removal for flawless finish',
    price: 'From $499',
  },
  {
    icon: Package,
    title: 'Full Detailing Package',
    description: 'Interior + Exterior + Engine Bay',
    price: 'From $399',
  },
  {
    icon: Plus,
    title: 'Add-Ons',
    description: 'Headlight restoration, fabric protection, etc',
    price: 'From $79',
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Our Premium Detailing Services
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Professional detailing services tailored to your needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-300"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-xl font-bold text-blue-600">{service.price}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300">
            Customize Your Package →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;