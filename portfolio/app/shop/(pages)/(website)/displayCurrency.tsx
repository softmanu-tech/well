'use client'; // Indicates this is a client-side component

import React from 'react';

// Define the type for the props the component will receive
interface DisplayCurrencyProps {
  amount: number;
}

// Define the DisplayCurrency component
const DisplayCurrency: React.FC<DisplayCurrencyProps> = ({ amount }) => {
  
  // Format the amount to Kenyan Shillings using Intl.NumberFormat
  const formattedAmount = new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES', // Currency set to Kenyan Shilling (KES)
  }).format(amount);

  // Return a styled span displaying the formatted currency
  return (
    <span className="text-green-600 font-bold text-lg bg-white px-2 py-1 rounded-lg shadow-md">
      {formattedAmount}
    </span>
  );
};

export default DisplayCurrency; // Export the component for reuse across the project

/*
  Example usage:
  
  // Inside your component, you can use DisplayCurrency like this:
  <DisplayCurrency amount={1000} />
  
  This will display "KSh 1,000.00" as the formatted currency.
*/
