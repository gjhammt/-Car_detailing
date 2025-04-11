import React from 'react';

const images = [
  {
    before: 'https://images.unsplash.com/photo-1605515298946-d664fc6fe14e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    after: 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Exterior Detail',
  },
  {
    before: 'https://images.unsplash.com/photo-1597007066704-67bf2068d5b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    after: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Interior Detail',
  },
  {
    before: 'https://images.unsplash.com/photo-1605515298946-d664fc6fe14e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    after: 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80,
    title: 'Paint Correction',
  },
];

const Gallery = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          See the Transformation
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Before & After Gallery
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="space-y-4">
              <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                <img
                  src={image.after}
                  alt={`${image.title} After`}
                  className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white text-lg font-semibold">
                    View Before & After
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-900">
                {image.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300">
            Book Your Detailing Session Now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
