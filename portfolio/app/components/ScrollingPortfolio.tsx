import React from 'react';
import { motion } from 'framer-motion';

interface Logo {
  src: string;
  alt: string;
}

const logos: Logo[] = [
  { src: "./saf1.svg", alt: "SAF1 Logo" },
  { src: "./m.svg", alt: "M Logo" },
  { src: "./sob.svg", alt: "SOB Logo" },
  // Add more logos as needed
];

const ScrollingPortfolio: React.FC = () => {
  return (
    <div className=" max-w-7xl mx-auto flex flex-col items-center py-8 bg-gray-100">
      <h2 className="text-3xl font-bold  text-black mb-6">Our Clients & Partners</h2>
      
      {/* Text Section - Now on top for small screens */}
      <div className="w-full max-w-3xl px-4 mb-8 text-center">
        <p className="text-gray-700">
          We have had the privilege of collaborating with a wide range of clients. We take immense pride in 
          re-defining excellence for brands and providing innovative marketing solutions.
        </p>
      </div>

      {/* Icon Section */}
      <div className="w-full overflow-hidden">
        <motion.div 
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 mx-4">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain" // Increased sizes for different screen sizes
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollingPortfolio;