'use client';
import React, { useState, useEffect } from 'react';
import { workExperience } from '@/data';
import { Button } from './ui/MovingBorders';
import { useSpring, animated } from 'react-spring';

interface ExperienceCardProps {
    id: number;
    title: string;
    desc: string;
    className?: string;
    thumbnails: string[];
}

const ExperienceCard = ({ card }: { card: ExperienceCardProps }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const thumbnails = Array.isArray(card.thumbnails) ? card.thumbnails : [card.thumbnails];

  const [props, set] = useSpring(() => ({
    from: { opacity: 1, transform: 'translate3d(0,0,0)' },
    to: async (next) => {
      while (1) {
        await next({ opacity: 1, transform: 'translate3d(0,0,0)' });
        await next({ opacity: 0, transform: 'translate3d(100%,0,0)' });
      }
    },
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % thumbnails.length);
      set({ opacity: 0, transform: 'translate3d(100%,0,0)' });
      setTimeout(() => set({ opacity: 1, transform: 'translate3d(0,0,0)' }), 300);
    }, 5000);

    return () => clearInterval(timer);
  }, [thumbnails.length, set]);

  return (
    <Button
      duration={Math.floor(Math.random() * 10000) + 10000}
      borderRadius="1.75rem"
      className="flex-1 text-black border-black dark:border-slate-950"
    >
      <div className='flex flex-col sm:flex-row items-center p-3 py-4 sm:py-6 md:p-5 lg:p-6 gap-2'>
        <animated.div style={props} className="w-full sm:w-auto flex justify-center">
          <img src={thumbnails[currentImageIndex]} alt={card.title} className='w-16 sm:w-20 md:w-24 lg:w-28 object-contain' />
        </animated.div>
        <div className='sm:ms-3 md:ms-4 lg:ms-5 mt-2 sm:mt-0 text-center sm:text-left'>
          <h1 className='text-lg sm:text-xl md:text-2xl font-bold'>
            {card.title}
          </h1>
          <p className='text-[#000033] mt-2 font-semibold text-sm sm:text-base'>
            {card.desc}
          </p>
        </div>
      </div>
    </Button>
  );
};

const Experience = () => {
  return (
    <div className='py-10 sm:py-16 md:py-20' id='services'>
      <h1 className='heading text-purple text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-6 sm:mb-8 md:mb-10' color='text-black'>
        We are a 360° Marketing{' '}
        <span className='text-black'>
          Agency specializing in
        </span>
      </h1>
      <div className='w-full mt-6 sm:mt-8 md:mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10'>
        {workExperience.map((card) => (
          <ExperienceCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Experience;