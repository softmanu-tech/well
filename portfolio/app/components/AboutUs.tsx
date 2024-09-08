import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const handleLearnMore = () => {
    // Replace '/path/to/your/document.pdf' with the actual path to your PDF document
    window.open('/p.pdf', '_blank');
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative min-h-screen min-w-screen flex items-center justify-center overflow-hidden" id='about'>
      {/* Video Background with Darkening Overlay */}
      <div className="absolute inset-0 z-10 w-full h-full">
        <div className="absolute inset-0 bg-purple opacity-60 z-30"></div>
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute inset-0 object-cover h-full w-full"
        >
          <source src="/vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Overlay */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.8 }}
        className="z-30 text-white text-center p w-full  mx-auto"
      >
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 sm:p-12 rounded-lg shadow-xl">
          <motion.h1 
            variants={fadeIn}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-serif"
          >
            About Us
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-base sm:text-lg lg:text-xl mb-8 max-w-4xl mx-auto font-light leading-relaxed"
          >
            We are the leading provider of innovative marketing solutions and corporate branding. Our integrated,
            cutting-edge strategies are designed to help clients achieve their goals and maximize efficiency, boost ROI, and enhance brand
            competence. With over a decade of experience in the corporate world, our team of marketing experts possesses the passion, skills,
            and creativity to develop specialized strategies that promote brand success.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto mb-8">
            <motion.div variants={fadeIn}>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3 font-serif">Our Mission</h2>
              <p className="text-sm sm:text-base font-light">To empower businesses and individuals through cutting-edge technology and exceptional service.</p>
            </motion.div>
            <motion.div variants={fadeIn}>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3 font-serif">Our Vision</h2>
              <p className="text-sm sm:text-base font-light">To be the leading force in digital transformation, shaping a better future for all.</p>
            </motion.div>
          </div>
          <motion.button 
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-purple hover:bg-slate-300 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out text-base sm:text-lg"
            onClick={handleLearnMore}
          >
            Read More..
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;