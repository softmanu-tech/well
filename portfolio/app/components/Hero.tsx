import React from 'react';
import Link from 'next/link';
import { FaSearch ,FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';


interface MagicButtonProps {
  title: string;
  icon: React.ReactNode;
  position: 'left' | 'right';
  className?: string;
}

const MagicButton: React.FC<MagicButtonProps> = ({ title, icon, position, className }) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className=" absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
      <span className="relative z-10 flex justify-centerinline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-sm font-medium text-white backdrop-blur-3xl">
        {position === 'right' && icon}
        <span>{title}</span>
        {position === 'left' && icon}
      </span>
    </button>
    
  );
};

const Hero: React.FC = () => {
  return (
    <div className=" w-full min-h-[60vh] sm:min-h-[80vh] md:h-screen overflow-hidden" id='home'>
      {/* Video Background   <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Get Started
              </span>
            </button>*/}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/vid.mp4" type="video/mp4" />
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
            Ignite Your Brand<br className="hidden sm:inline" /> with <span className='text-purple'> Sizzle Africa Marketing Limited</span>
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
            <span className=''
              style={{
                
                fontFamily: 'Freight Text',
              }}
            
            
            >The Leading  provider of innovative
            marketing Solutions &  branding</span><br className="hidden sm:inline" /> <span className='text-black  sm:text-sm'

                style={{
                  
                  fontFamily: "'Kepler Std', serif",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  
                  
                }}
            
            
            >Defining Excellence for  YOU</span>.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
           
            <Link href="#service" passHref>
              <button className="w-full sm:w-auto px-6 sm:px-8 py-1 sm:py-4 bg-black text-white rounded-full hover:bg-purple transition-all duration-300 ease-out border-b-4 border-gray-800 hover:border-b-0 hover:translate-y-1 text-base sm:text-lg font-bold shadow-lg hover:shadow-xl active:shadow-md relative overflow-hidden">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="absolute inset-0 bg-white opacity-20"></span>
                <span className="relative z-10 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-1 py-1 text-sm font-medium text-white backdrop-blur-2xl">
                < FaSearch className="h-6 w-6 mr-2" />
                  Discover Our Work</span>
              </button>
              
            </Link>
            <Link href="#contact" passHref>
              <MagicButton 
                icon={<FaPhoneAlt  className="h-5 w-5 mr-2"/>}
                title="Contact Us"
                
                position='right'
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-purple border-b-4 border-purple-700 hover:border-b-0 hover:translate-y-1 transition-all duration-300 ease-out "
              />
          </Link>
            
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;