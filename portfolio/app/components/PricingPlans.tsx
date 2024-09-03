import React from 'react';

interface PricingData {
  service: string;
  basic: string;
  premium: string;
  elite: string;
}

const pricingData: PricingData[] = [
  {
    service: "Social Media Marketing",
    basic: "41,750",
    premium: "132,500",
    elite: "192,500"
  },
  
  
  {
    service: "Website Development(Blogs, Portfolios, Product Landing Pages, Online Gallaries, Artiest Portfolios , Lead Generation Pages,Kinyozi & Saloon Beauty Shop)",
    basic: "28,000",
    premium: "40,500 ",
    elite: "60,000"
  },
  {
    service: "eCommerce Website Design, Wikis and Knowledge Bases, Resource Websites",
    basic: "60,000",
    premium: "110,000",
    elite: "150,000"
  },
  {
    service: "Email Marketing",
    basic: "24,400",
    premium: "48,250 ",
    elite: "77,500"
  },
  {
    service: "LMS Websites, E-library, Hospital,Hotel, University and School Websites,Real Estate Websites",
    basic: "60,000",
    premium: "110,000",
    elite: "250,000"
  },
  
  {
    service: "Search Engine Optimization (SEO)",
    basic: "43,000",
    premium: "107,000 ",
    elite: "custom based on the work scope"
  },
  {
    service: "Google Ads/Pay-Per-Click Advertising (PPC)",
    basic: "55,000",
    premium: "100,000",
    elite: "200,000 "
  },
  {
    service: "POS Website Development, Goverment Websites, Charity Websites, Church Management System",
    basic: "60,000",
    premium: "110,000",
    elite: "190,000"
  },
  {
    service: "Web Portals, Content Aggregators, Subscription-Based Websites, Community-Based Sites,  Job Portals, ",
    basic: "40,000",
    premium: "100,000",
    elite: "150,000"
  },
];

const PricingTable: React.FC = () => {
  const formatValue = (value: string) => {
    return value.startsWith('...') ? value : `KSh. ${value}`;
  };

  return (
    <div className="min-h-screen bg-slate-200 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-purple mb-6">Pricing Plan</h1>
      <div className="w-full max-w-6xl overflow-x-auto">
        <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden backdrop-blur-sm bg-white bg-opacity-20">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-black bg-purple text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Service
                </th>
                <th className="px-5 py-3 border-b-2 border-black bg-purple text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Basic Package
                </th>
                <th className="px-5 py-3 border-b-2 border-black bg-purple text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Premium Package
                  <p className="text-xs text-black">(One-Off)</p>
                </th>
                <th className="px-5 py-3 border-b-2 border-black bg-purple text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Elite Package
                </th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((item, index) => (
                <tr key={index}>
                  <td className="px-5 py-5 border-b border-black text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{item.service}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-black text-sm">
                    <p className="text-black font-bold whitespace-no-wrap">{formatValue(item.basic)}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-black text-sm">
                    <p className="text-black font-bold whitespace-no-wrap">{formatValue(item.premium)}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-black text-sm">
                    <p className="text-black font-bold whitespace-no-wrap">{formatValue(item.elite)}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;

