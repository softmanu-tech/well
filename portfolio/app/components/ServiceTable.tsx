import React, { useState } from 'react';
import QuoteRequestForm from './QuoteRequestForm';
import { FaLocationArrow } from 'react-icons/fa';
import MagicButton from './ui/MagicButton';

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
      { name: 'Hospitals', items: ['Logos & Visual Identity','Community Outreach','Marketing Materials','Staff Uniforms'] },
    ],
  },
  {
    name: 'ATL(Above-The-Line) Services',
    subcategories: [
      { name: 'Brand Ambassadors', items: [] },
      { name: 'Outdoor Advertising', items: [] },
      { name: 'Television Advertising)', items: [] },
      { name: 'Print Advertising', items: ['Newspapers','Billboards','Magazines'] },
      { name: 'Radio Advertising', items: ['creating audio ads for radio stations'] },
      { name: 'Public Relations', items: ['Brand awareness,credibility & reputation',] },
    ],
  },
  {
    name: 'BTL(Below-The-Line) Services',
    subcategories: [
      { name: 'Digital Marketing', items: ['Social Media Marketing', 'Email Marketing','Google Ads', 'Pay-Per-Click']},
      { name: 'Event Management', items: ['Event Conceptualization', 'Event Execution']},
      { name: 'Promotional Merchandise', items: ['Promotional Products', 'Branded products']},
      { name: 'Loyalty Programs', items: ['Rewarding repeat customers']},
      { name: 'Experiential Marketing', items:['Team Building']}
    ]
  },
  {
    name: 'Website Development',
    subcategories: [
      { name: 'Commercial Websites', items: ['eCommerce',' Airbnb','Retailer Websites','Online Travel', 'Food Delivery'] },
      { name: 'Personal Websites', items: ['Blogs','Portfolio','Wix','Diaries','Live Journal','Tumblr'] },
      { name: 'Management Websites', items: ['P.O.S','Project Management Tools','CMS','LMS','Housing','Hotel Management Systems','Church Management Systems','Hospital Management Systems'] },
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
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
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
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Categories</th>
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
                    <div className='flex items-center blur-bg{filter: blur(5px) opacity:0.3} '>
                        <a onClick={toggleFormVisibility} className="inline-block cursor-pointer">
                        <MagicButton 
                            title="Request Quotation"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                        </a>
                        {isFormVisible && (
                        <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50">
                            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md" onClick={toggleFormVisibility}></div>
                            <div className="relative bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg  max-w-md w-full m-4">
                            <button 
                                onClick={toggleFormVisibility}
                                className=" absolute top-2 right-2 float-right text-white hover:text-gray-900"
                            >
                                ✕
                            </button>
                            <QuoteRequestForm />
                            </div>
                        </div>
                        )}
                    </div>
                      
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
                
            
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceTable;