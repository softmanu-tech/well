'use client';
import React, { useState, useEffect } from 'react';
import { workExperience } from '@/data';
import { Button } from './ui/MovingBorders';
import { useSpring, animated } from 'react-spring';


interface ExperienceCardProps {
    id:number;
    title: string;
    desc: string;
    className?: string;
    thumbnails: string[];
    
}

const ExperienceCard = ({ card }:{card:ExperienceCardProps}) => {
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
      // Trigger the animation
      set({ opacity: 0, transform: 'translate3d(100%,0,0)' });
      setTimeout(() => set({ opacity: 1, transform: 'translate3d(0,0,0)' }), 300);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [thumbnails.length, set]);

  return (
    <Button
      duration={Math.floor(Math.random() * 10000) + 10000}
      borderRadius="1.75rem"
      className="flex-1 text-black border-black dark:border-slate-950"
    >
      <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
        <animated.div style={props}>
          <img src={thumbnails[currentImageIndex]} alt={card.title} className='lg:w-32 md:w-20 w-16' />
        </animated.div>
        <div className='lg:ms-5'>
          <h1 className='text-start text-xl md:text-2xl font-bold'>
            {card.title}
          </h1>
          <p className='text-start text-[#000033] mt-3 font-semibold'>
            {card.desc}
          </p>
        </div>
      </div>
    </Button>
  );
};

const Experience = () => {
  return (
    <div className='py-20' id='testimonials'>
      <h1 className='heading text-purple' color='text-black'>
        We are a 360° Marketing{' '}
        <span className='text-black'>
          Agency specializing in
        </span>
      </h1>
      <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
        {workExperience.map((card) => (
          <ExperienceCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Experience;