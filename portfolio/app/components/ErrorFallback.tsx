"use client"
import React from 'react';

interface ErrorFallbackProps {
  error: Error;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>Error: {error.message}</p>
    </div>
  );
};

export default ErrorFallback;