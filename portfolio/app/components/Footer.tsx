'use client';
import React, { useState } from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import WhatsAppButton from './WhatsAppButton'
import QuoteRequestForm from './QuoteRequestForm';


const Footer = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };
  return (
    <footer className='w-full  pb-10 mb-[100px] md:mb-5'  id='contact'>
        
        <div className='flex flex-col items-center'>
            <h1 className='text-purple heading lg:max-w-[45vw]'>
                Are you ready to tell your unique story and <span className='text-black'>make a lasting impression</span>  that drives business growth?
            </h1>
            <p className='text-black md:mt-10 my-5 text-bold italic'>Reach out today and let&apos;s discuss how we can help you achieve your goals.</p>
            <div className="flex flex-row justify-center items-center space-x-4 w-full">
              <div className='flex items-center h-12'>
                <a onClick={toggleFormVisibility} className="inline-block cursor-pointer">
                  <MagicButton 
                    title="Request Quotation"
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </a>
                {isFormVisible && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
                      <button 
                        onClick={toggleFormVisibility}
                        className="float-right text-gray-700 hover:text-gray-900"
                      >
                        ✕
                      </button>
                      <QuoteRequestForm />
                    </div>
                  </div>
                )}
              </div>

              <div className='flex items-center h-12'>
                <WhatsAppButton
                  phoneNumber="0740824455"
                  message="Chat with Us on WhatsApp"
                />
              </div>
            </div>

        </div>
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal  text-purple font-light">
          Copyright © 2024 sizzleafrica
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-purple rounded-lg border border-purple"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
    
  )
}

export default Footer
