import React, { useState, useEffect, useRef } from 'react';

const cardData = [
  { id: 1, title: 'Elevate Your Brand', images: ["/a1.jpeg", "/a2.jpeg/","/a3.jpeg","/a4.png","/a5.jpg","/a6.jpg"], description: 'Make a lasting impression that drives business growth' },
  { id: 2, title: 'Marketing collaterals', images: ["/p.jpeg","/p1.jpeg","/p2.jpeg", "/p6.jpeg","/p4.jpeg","/p5.jpeg","/p6.jpeg","/p7.jpeg","/p8.jpeg"], description: 'Pens for your team' },
  { id: 3, title: 'Engage, Inform, Impress', images: ["/g2.jpeg","/g3.jpg","/g2.jpeg","/h1.jpeg"], description: 'Deliver tailored messages and experiences to your audience in real-time' },
  { id: 4, title: 'Brand Your Goods', images: ["/c4.jpeg", "/c2.jpeg","/b2.png","/b1.png"], description: 'Discover the depth of layered designs.' },
  {id:  5, title: 'Make your Memories with the best Brand', images: ["/m.jpeg","/b3.png", "/m2.jpeg","/m1.jpeg"],description: "Get a lasting impression for your brands"}
];

const TypewriterEffect: React.FC<{ text: string }> = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return <p className="text-sm text-gray-600 h-12" style={{ transform: 'translateZ(30px)' }}>{displayText}</p>;
};

const Card3D: React.FC<{ data: typeof cardData[0] }> = ({ data }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % data.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [data.images]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      className="w-64 h-96 rounded-xl shadow-xl transition-all duration-200 ease-out transform hover:scale-105 flex-shrink-0 mx-4" id=''
      style={{
        transformStyle: 'preserve-3d',
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 bg-gradient-to-br from- to-purple rounded-xl backdrop-blur-md" style={{ transform: 'translateZ(-50px)' }}></div>
      <div className="absolute inset-4 bg-white rounded-lg shadow-inner flex flex-col justify-between p-4 backdrop-blur-sm" style={{ transform: 'translateZ(30px)' }}>
        <img
          src={data.images[currentImage]}
          alt={`Image ${currentImage + 1}`}
          className="w-full h-48 object-cover rounded-md mb-4"
          style={{ transform: 'translateZ(20px)' }}
        />
        <h2 className="text-2xl font-bold mb-2 text-gray-800" style={{ transform: 'translateZ(40px)' }}>{data.title}</h2>
        <TypewriterEffect text={data.description} />
      </div>
    </div>
  );
};

const ScrollingCards = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalWidth = cardData.length * 320; // 320px is the width of each card + margin
    const scrollSpeed = 0.5; // pixels per frame

    const animationFrame = requestAnimationFrame(function animate() {
      setScrollPosition((prevPosition) => {
        const newPosition = (prevPosition + scrollSpeed) % totalWidth;
        container.style.transform = `translateX(-${newPosition}px)`;
        return newPosition;
      });
      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className='py-10 sm:py-16 md:py-20'>
    <h1 className='text-purple z-30 text-center px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto text-3xl font-bold'> Brand  Your Products with Us</h1>

    <div className="flex items-center justify-center h-100 bg-gray-100 p-4 overflow-hidden">
      
      <div className="relative w-full" style={{ height: '24rem' }}>
        <div ref={containerRef} className="flex absolute" style={{ width: `${cardData.length * 200}%` }}>
          {[...cardData, ...cardData, ...cardData].map((card, index) => (
            <Card3D key={`${card.id}-${index}`} data={card} />
          ))}
        </div>
      </div>
    </div>


    </div>
    
  );
};

export default ScrollingCards;