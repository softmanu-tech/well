import React, { useState, useEffect } from 'react';

const images = [
  '/g1.jpeg',
  '/api/placeholder/400/300',
  '/api/placeholder/400/300',
];

const Card3D = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div
        className="relative w-64 h-96 rounded-xl shadow-xl transition-all duration-200 ease-out transform hover:scale-105"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-xl" style={{ transform: 'translateZ(-50px)' }}></div>
        <div className="absolute inset-4 bg-white rounded-lg shadow-inner flex flex-col justify-between p-4" style={{ transform: 'translateZ(30px)' }}>
          <img
            src={images[currentImage]}
            alt={`Image ${currentImage + 1}`}
            className="w-full h-48 object-cover rounded-md mb-4"
            style={{ transform: 'translateZ(20px)' }}
          />
          <h2 className="text-2xl font-bold mb-2 text-gray-800" style={{ transform: 'translateZ(40px)' }}>3D Card</h2>
          <p className="text-sm text-gray-600" style={{ transform: 'translateZ(30px)' }}>Hover and move your mouse to see the 3D effect!</p>
        </div>
      </div>
    </div>
  );
};

export default Card3D;