import React from 'react';

const galleryItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&q=80',
    title: 'Decorative Vase',
    description: 'Hand-blown glass vase with unique color patterns'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1572332571039-3c0f8c7b8863?auto=format&fit=crop&q=80',
    title: 'Art Installation',
    description: 'Custom glass sculpture for modern spaces'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1576020799627-aeac74d58064?auto=format&fit=crop&q=80',
    title: 'Lighting Fixture',
    description: 'Bespoke glass chandelier design'
  },
  // Add more gallery items as needed
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center mb-12">Our Creations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}