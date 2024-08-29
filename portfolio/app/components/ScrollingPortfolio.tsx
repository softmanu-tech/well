import React from 'react';
import { motion } from 'framer-motion';

interface Logo {
  src: string;
  alt: string;
}

const logos: Logo[] = [
  { src: "./saf.svg", alt: "SAF Logo" },
  { src: "./saf1.svg", alt: "SAF1 Logo" },
  { src: "./m.svg", alt: "M Logo" },
  { src: "./sob.svg", alt: "SOB Logo" },
  // Add more logos as needed
];

const ScrollingPortfolio: React.FC = () => {
  return (
    <div className='py-15'>
      <h2 className="text-4xl font-bold mb-6 text-center">
        <span className="text-purple">Works &</span> <span className="text-black">Portfolio</span>
      </h2>
      <div className="w-full overflow-hidden bg-purple-600 p-8 m-4 md:p-12 md:m-6 rounded-lg">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-2/3 overflow-hidden mb-6 md:mb-0">
            <motion.div 
              className="flex"
              initial={{ x: "0%" }}
              animate={{ x: "-50%" }}
              transition={{
                x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" },
              }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="flex items-center justify-center w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mx-4">
                  <img src={logo.src} alt={logo.alt} className="w-full h-full object-contain" />
                </div>
              ))}
            </motion.div>
          </div>
          <div className="w-full md:w-1/3 md:pl-8 sm:w-full">
            <p className="text-purple text-sm md:text-base">
              We've had the privilege of collaborating with a wide range of clients, both big and
              small, and have consistently exceeded their expectations. We take immense pride
              in <span className="text-brown-300 font-semibold">showcasing an array of diverse projects</span> that span various industries and
              markets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingPortfolio;