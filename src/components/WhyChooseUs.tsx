import React from 'react';
import { Award, Car, Clock, Leaf, Shield } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Certified Detailers',
    description: 'Trained & experienced professionals',
  },
  {
    icon: Car,
    title: 'Mobile Service Available',
    description: 'We come to you',
  },
  {
    icon: Clock,
    title: 'Same-Day Appointments',
    description: 'Fast, convenient service',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Products',
    description: 'Safe for your car & the environment',
  },
  {
    icon: Shield,
    title: '100% Satisfaction Guarantee',
    description: 'Or we\'ll redo it for free',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Why Elite Shine Stands Out
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Experience the difference of professional detailing
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 rounded-lg hover:bg-gray-50 transition duration-300"
            >
              <feature.icon className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600709415011-324b6f242b71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Before and After Comparison"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
            <div className="text-white p-8">
              <h3 className="text-3xl font-bold mb-4">See the Difference</h3>
              <p className="text-xl mb-6">
                Swipe to reveal the amazing transformation
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition duration-300">
                View More Examples
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;