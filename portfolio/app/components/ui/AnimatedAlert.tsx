
import React, { useState, useEffect } from 'react';
import { FaInfoCircle, FaCheckCircle, FaExclamationTriangle, FaTimesCircle } from 'react-icons/fa';

interface AlertProps {
  title?: string;
  description?: string;
  type?: 'info' | 'success' | 'warning' | 'error';
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({ title, description, type = 'info', onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setIsVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const getIcon = () => {
    switch (type) {
      case 'success': return <FaCheckCircle className="text-green-400" />;
      case 'warning': return <FaExclamationTriangle className="text-yellow-400" />;
      case 'error': return <FaTimesCircle className="text-red-400" />;
      default: return <FaInfoCircle className="text-blue-400" />;
    }
  };

  const getBgColor = () => {
    switch (type) {
      case 'success': return 'bg-green-100 dark:bg-green-900';
      case 'warning': return 'bg-yellow-100 dark:bg-yellow-900';
      case 'error': return 'bg-red-100 dark:bg-red-900';
      default: return 'bg-blue-100 dark:bg-blue-900';
    }
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-4 right-4 max-w-sm w-full ${getBgColor()} rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-in-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">{getIcon()}</div>
          <div className="ml-3 w-0 flex-1 pt-0.5">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{title}</p>
            {description && (
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{description}</p>
            )}
          </div>
          <div className="ml-4 flex-shrink-0 flex">
            <button
              className="bg-white dark:bg-gray-800 rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => {
                setIsVisible(false);
                onClose && onClose();
              }}
            >
              <span className="sr-only">Close</span>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
    </div>
  );
};

const AlertTitle: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <h3 className="text-lg font-medium">{children}</h3>
);

const AlertDescription: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <div className="mt-2 text-sm">{children}</div>
);

export { Alert, AlertTitle, AlertDescription };