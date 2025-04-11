import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'John D.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    quote: 'Elite Shine made my 10-year-old car look brand new! Their attention to detail is remarkable.',
    rating: 5,
  },
  {
    name: 'Sarah M.',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    quote: 'The ceramic coating they applied has kept my car looking amazing for months. Worth every penny!',
    rating: 5,
  },
  {
    name: 'Michael R.',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    quote: 'Professional, punctual, and perfect results. I wouldn\'t trust my car with anyone else.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Don't just take our word for it
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center space-x-8 mt-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">5.0</div>
            <div className="text-gray-600">Google Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">1000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">100%</div>
            <div className="text-gray-600">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;