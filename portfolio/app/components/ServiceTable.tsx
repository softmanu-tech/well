import React, { useState } from 'react';

interface Service {
  name: string;
  subcategories: { name: string; items: string[] }[];
}

const services: Service[] = [
  {
    name: 'Corporate Branding',
    subcategories: [
      { name: 'Airline', items: ['Aircraft wraps', 'E-Ticket', 'Website Adverts', 'Trays', 'Headrest', 'Merchandise'] },
      { name: 'Automotive', items: ['Car branding'] },
      { name: 'FMCG', items: ['Branding FMCG', 'Promotional kiosk'] },
      { name: 'Hospitals', items: [] },
    ],
  },
  {
    name: 'BTL/ATL Services',
    subcategories: [
      { name: 'Events', items: [] },
      { name: 'Billboards', items: [] },
      { name: 'TVC (TV Adverts)', items: [] },
      { name: 'Print Media', items: [] },
    ],
  },
  {
    name: 'Website Development',
    subcategories: [
      { name: 'Commercial Websites', items: [] },
      { name: 'Personal Websites', items: [] },
      { name: 'Management Websites', items: [] },
    ],
  },
  {
    name: 'Website Marketing Services',
    subcategories: [
      { name: 'SEO', items: [] },
      { name: 'PPC', items: [] },
      { name: 'Email Marketing', items: [] },
      { name: 'Google Ads', items: [] },
      { name: 'Social Media Marketing', items: [] },
    ],
  },
  {
    name: 'Business Intelligence and Mentorship',
    subcategories: [
      { name: '1 Day Training', items: [] },
      { name: '2 Weeks', items: [] },
      { name: '1 Month', items: [] },
      { name: '3 Months', items: [] },
    ],
  },
];

const ServiceTable: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const handleRequestQuote = (serviceName: string) => {
    setSelectedService(serviceName);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedService('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple to-indigo-900 p-4 md:p-8" id='service'>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">Our Services</h1>
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full backdrop-blur-lg bg-white bg-opacity-10 rounded-lg shadow-xl">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Service</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Subcategories</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {services.map((service) => (
                  <tr key={service.name} className="hover:bg-white hover:bg-opacity-10 transition-colors">
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">{service.name}</td>
                    <td className="px-4 py-4 text-sm text-gray-200">
                      <ul className="list-disc list-inside">
                        {service.subcategories.map((subcategory) => (
                          <li key={subcategory.name}>
                            <strong>{subcategory.name}:</strong> {subcategory.items.join(', ')}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => handleRequestQuote(service.name)}
                        className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-300"
                      >
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-purple px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                          Request Quotation
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-lg w-full max-w-md m-4">
            <h2 className="text-2xl text-white font-bold mb-4">Request Quotation for {selectedService}</h2>
            <form>
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="brandName">
                  Brand Name
                </label>
                <input
                  className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white bg-opacity-50"
                  id="brandName"
                  type="text"
                  placeholder="Your Brand Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white bg-opacity-50"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="contact">
                  Contact
                </label>
                <input
                  className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white bg-opacity-50"
                  id="contact"
                  type="text"
                  placeholder="Your Contact Number"
                />
              </div>
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="summary">
                  Summary
                </label>
                <textarea
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white bg-opacity-50"
                  id="summary"
                  placeholder="Brief summary of your request"
                  rows={4}
                ></textarea>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition-colors"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceTable;