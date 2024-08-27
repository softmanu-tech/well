'use client'
import React, { useEffect, useState } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';

export const TextGenerate = ({
  words,
  className,
  filter = true,
  duration = 20,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const animateText = async () => {
      const wordsArray = words.split(' ');
      const punctuationIndexes: number[] = [];

      wordsArray.forEach((word, index) => {
        if (word.endsWith(',') || word.endsWith('.')) {
          punctuationIndexes.push(index);
        }
      });

      for (let i = 0; i < wordsArray.length; i++) {
        await animate(
          'span',
          { opacity: 1, filter: filter ? 'blur(0px)' : 'none' },
          { duration: 0.4, delay: stagger(0.2) }
        );

        await animate('span', { opacity: 0 }, { duration: 0.6 });

        setCurrentIndex((prevIndex) => (prevIndex + 1) % wordsArray.length);

        if (punctuationIndexes.includes(i + 1)) {
          await animate('span', { opacity: 0 }, { duration: 1 });
        }
      }
    };

    animateText();
  }, [scope.current, currentIndex]);

  const renderWords = () => {
    const wordsArray = words.split(' ');
    const punctuationIndexes: number[] = [];

    wordsArray.forEach((word, index) => {
      if (word.endsWith(',') || word.endsWith('.')) {
        punctuationIndexes.push(index);
      }
    });

    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          const adjustedIdx = (idx - currentIndex + wordsArray.length) % wordsArray.length;
          const shouldDisplay = adjustedIdx <= punctuationIndexes[Math.floor(adjustedIdx / punctuationIndexes.length)];

          return (
            <motion.span
              key={idx}
              className={`${shouldDisplay ? 'text-white' : 'hidden'} opacity-0 font-bold text-2xl italic`}
              style={{
                filter: filter ? 'blur(8px)' : 'none',
                fontFamily: 'Freight Text',
              }}
            >
              {word}{' '}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={className} style={{ fontFamily: 'Freight Text' }}>
      <span className="text-black font-bold text-2xl italic">
        Leading Provider Of Innovative Marketing Solutions and Corporate Branding,
      </span>
      {renderWords()}
    </div>
  );
};