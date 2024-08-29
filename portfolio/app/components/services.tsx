import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Digital Marketing',
      description: 'Boost your online presence with our comprehensive digital marketing strategies.',
      icon: '🚀',
    },
    {
      title: 'Brand Development',
      description: 'Create a strong, memorable brand identity that resonates with your target audience.',
      icon: '🎨',
    },
    {
      title: 'Social Media Management',
      description: 'Engage your audience and grow your following with our expert social media services.',
      icon: '📱',
    },
    {
      title: 'Content Creation',
      description: 'Captivate your audience with high-quality, engaging content across all platforms.',
      icon: '✍️',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
