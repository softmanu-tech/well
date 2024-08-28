import React from 'react';
import { motion } from 'framer-motion';

interface Logo {
  src: string;
  alt: string;
}

const logos: Logo[] = [
  { src: "./saf.svg", alt: "" },
  { src: "./saf1.svg", alt: "" },
  { src: "./m.svg", alt: "" },
  { src: "./sob.svg", alt: "" },
  // Add more logos as needed
];

const ScrollingPortfolio: React.FC = () => {
  return (
    <div className='py-15'>
        <h2 className="text-4xl font-bold mb-6 text-center text-purple">
        Works & <span className="text-black">Portfolio</span>
      </h2>
        <div className="w-full overflow-hidden bg-purple p-8 m-4 md:p-12 md:m-6 rounded-lg">
      
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 overflow-hidden mb-6 md:mb-0">
          <motion.div 
            className="flex"
            initial={{ x: "50%" }}
            animate={{ x: "-100%" }}
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" },
            }}
          >
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex items-center justify-center w-50 h-50 mx-2 ">
                <img src={logo.src} alt={logo.alt} className="w-50 h-50 object-contain" />
              </div>
            ))}
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <p className="text-white">
            We've had the privilege of collaborating with a wide range of clients, both big and
            small, and have consistently exceeded their expectations. We take immense pride
            in <span className="text-black">showcasing an array of diverse projects</span> that span various industries and
            markets.
          </p>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default ScrollingPortfolio;