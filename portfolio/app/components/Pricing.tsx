"use client"
import React, { useState, useEffect, useRef } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs'; 
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import QuoteRequestForm from './QuoteRequestForm';

// Custom hook for animating the price
const useCountAnimation = (endPrice: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef<number>();

  useEffect(() => {
    const startTime = Date.now();
    
    const animateCount = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = (elapsed % duration) / duration;
      const nextCount = Math.floor(progress * endPrice);

      setCount(nextCount);

      if (!isHovered) {
        animationRef.current = requestAnimationFrame(animateCount);
      }
    };

    animationRef.current = requestAnimationFrame(animateCount);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [endPrice, duration, isHovered]);

  useEffect(() => {
    if (isHovered) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      setCount(endPrice);
    }
  }, [isHovered, endPrice]);

  return { count, setIsHovered };
};

interface PricingCardProps {
  price: number;
  period: string;
  features: string[];
  color: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ price, period, features, color }) => {
  const { count, setIsHovered } = useCountAnimation(price);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    
    <div className="max-w-sm w-full bg-white rounded-lg overflow-hidden shadow-lg">
       
      <div className={`${color} p-6 text-white`}
           onMouseEnter={() => setIsHovered(true)}
           onMouseLeave={() => setIsHovered(false)}>
        <h2 className="text-3xl font-bold">Ksh. {count.toLocaleString()}</h2>
        <p className="text-sm">/{period}</p>
      </div>
      <div className="p-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <BsCheckCircleFill className="flex-shrink-0 w-5 h-5 text-black mr-2 mt-1" />
              <span className="text-sm text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        
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
      </div>
    </div>
  );
};

const PricingCards: React.FC = () => {
  const cards = [
    {
      price: 48000, period: 'Website Services',
      
      features: [
        'No. of Website Pages (18 Max)',
        'Premium Theme Samples (1)',
        'Responsive On All Devices',
        'Custom Headers, Footers & Widgets',
        'Picture & Image Gallery (1)',
        'Campaign Landing Pages (1)',
        'Lead Capture Website Forms (2)',
        'Social Media & Blog Integrated',
        'Website Analytics Integrated',
        'Premium Website Security Firewall',
        'WhatsApp Chat Functionality',
        'Basic Optimization (On-page SEO)',
        'Delivery Time (14 Working Days)'
      ],
      color: 'bg-purple'
    },
    {
      price: 41750,period: 'Basic Marketing Campaign ',
      
      features: [
        'Facebook + Instagram + X (formerly Twitter)',
        'Custom Digital Strategy',
        'Profile Optimization',
        '12 Campaign Posts',
        '8 Themed Graphic Designs: Including posters and cover photos to maintain a cohesive visual identity.',
        'Targeted Advertising',
        'Community Management: Actively engaging with your audience through comments, messages, and discussions.',
        'Weekly Updates & Monthly Report: Detailed monthly report summarizing campaign performance and key insights.'
      ],
      color: 'bg-purple'
    },
    {
      price: 55210,period: 'Premium Marketing Campaign',
      
      features: [
        '(1) Search or Performance Max Ad Format',
        'Keywords Research, Sorting & Sifting',
        'Goal-Based Campaigns',
        'Quality Score Optimization',
        'Audience Targeting',
        'Ad Extensions',
        'Automatic or Manual Ad Bidding & Placements',
        'Geotargeting',
        'Certified Google Ads Specialist',
        'Keyword-rich Headings & Descriptions',
        'Weekly Updates & Performance Reports'
      ],
      color: 'bg-purple'
    }
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-6 p-6 bg-gray-100">
      {cards.map((card, index) => (
        <PricingCard key={index} {...card} />
      ))}
    </div>
  );
};

export default PricingCards;