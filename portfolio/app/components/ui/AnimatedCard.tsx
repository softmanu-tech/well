import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div 
      className={`bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-opacity-20 ${className}`}
    >
      {children}
    </div>
  );
};

const CardHeader: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
};

const CardTitle: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <h3 className={`text-xl font-semibold ${className}`}>
      {children}
    </h3>
  );
};

const CardContent: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export { Card, CardHeader, CardTitle, CardContent };