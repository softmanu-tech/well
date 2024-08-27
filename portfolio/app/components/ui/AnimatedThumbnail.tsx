import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';

interface AnimatedThumbnailProps{
  thumbnails: string[];
}

// Apply the props type to the component
const AnimatedThumbnail: React.FC<AnimatedThumbnailProps> = ({ thumbnails }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(state => (state + 1) % thumbnails.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(timer);
  }, [thumbnails.length]);

  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {transitions((style, i) => (
        <animated.img
          src={thumbnails[i]}
          alt={`Thumbnail ${i + 1}`}
          style={{
            ...style,
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedThumbnail;