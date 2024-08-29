import React from 'react';
import Link from 'next/link';
import { FaLocationArrow } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface MagicButtonProps {
  title: string;
  icon: React.ReactNode;
  position: 'left' | 'right';
  className?: string;
}

const MagicButton: React.FC<MagicButtonProps> = ({ title, icon, position, className }) => {
  return (
    <button className={`flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full transition duration-300 ease-in-out transform hover:scale-105 ${className} shadow-lg hover:shadow-xl active:shadow-md relative overflow-hidden`}>
      <span className="absolute inset-0 bg-black opacity-20"></span>
      <span className="relative z-10 flex items-center justify-center">
        {position === 'left' && icon}
        <span>{title}</span>
        {position === 'right' && icon}
      </span>
    </button>
  );
};

const Hero: React.FC = () => {
  return (
    <div className="relative w-full min-h-[60vh] sm:min-h-[80vh] md:h-screen overflow-hidden" id='home'>
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-100 bg-opacity-80 backdrop-filter backdrop-blur-md"></div>

      <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>

      <div className='relative z-10 flex flex-col items-center justify-center min-h-[60vh] sm:min-h-[80vh] md:min-h-screen px-4 sm:px-6 lg:px-8 py-12 md:py-0'>
        <div className='w-full max-w-[90vw] md:max-w-3xl lg:max-w-4xl xl:max-w-5xl text-center'>
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-4 sm:mb-6 tracking-tight"
            style={{
              textShadow: '0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)',
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ignite Your Brand<br className="hidden sm:inline" /> with Sizzle Africa Marketing Limited
          </motion.h1>

          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-6 sm:mb-10 font-semibold"
            style={{
               textShadow: '0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Innovative Marketing Solutions<br className="hidden sm:inline" /> Defining Excellence For You.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="#about" passHref>
              <MagicButton 
                title="Discover Our Work"
                icon={<FaLocationArrow />}
                position='right'
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-purple border-b-4 border-purple-700 hover:border-b-0 hover:translate-y-1 transition-all duration-300 ease-out"
              />
            </Link>
            <Link href="#contact" passHref>
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-full hover:bg-purple transition-all duration-300 ease-out border-b-4 border-gray-800 hover:border-b-0 hover:translate-y-1 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl active:shadow-md relative overflow-hidden">
                <span className="absolute inset-0 bg-white opacity-20"></span>
                <span className="relative z-10">Contact Us</span>
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;