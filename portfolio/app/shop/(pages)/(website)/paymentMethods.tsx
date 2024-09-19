'use client';

import React, { useState } from 'react';

const PaymentMethod: React.FC = () => {
  const [paymentType, setPaymentType] = useState<'Mpesa' | 'Card' | ''>(''); // Selected payment method
  const [mpesaNumber, setMpesaNumber] = useState(''); // Mpesa number input
  const [cardNumber, setCardNumber] = useState(''); // Card number input
  const [expiryDate, setExpiryDate] = useState(''); // Expiry date input
  const [cvv, setCvv] = useState(''); // CVV input
  const [cardHolderName, setCardHolderName] = useState(''); // Cardholder name input
  const [error, setError] = useState(''); // Error message state

  // Mpesa number validation (Mpesa number is a 10-digit number starting with '07')
  const validateMpesaNumber = () => {
    const regex = /^07[0-9]{8}$/;
    return regex.test(mpesaNumber);
  };

  // Card details validation
  const validateCardDetails = () => {
    const cardNumberRegex = /^[0-9]{16}$/; // 16-digit card number
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/YY expiry format
    const cvvRegex = /^[0-9]{3,4}$/; // 3 or 4 digit CVV
    const nameRegex = /^[A-Za-z ]{3,}$/; // Cardholder name validation (minimum 3 letters)
    return (
      cardNumberRegex.test(cardNumber) &&
      expiryDateRegex.test(expiryDate) &&
      cvvRegex.test(cvv) &&
      nameRegex.test(cardHolderName)
    );
  };

  // Function to handle payment processing
  const handleProceedToPay = () => {
    if (paymentType === 'Mpesa' && !validateMpesaNumber()) {
      setError('Please enter a valid Mpesa number starting with 07 and followed by 8 digits.');
    } else if (paymentType === 'Card' && !validateCardDetails()) {
      setError('Please enter valid card details.');
    } else {
      setError(''); // Clear errors if validation passes
      alert('Payment processing...'); // Simulate payment processing
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-8"> {/* Centered and responsive container */}
      <h4 className="text-xl font-bold mb-4 text-center text-indigo-900">Select Payment Method</h4>

      {/* Payment method buttons */}
      <div className="flex justify-around mb-4">
        <button
          onClick={() => setPaymentType('Mpesa')}
          className={`px-4 py-2 rounded-lg shadow-md w-1/3 text-center ${paymentType === 'Mpesa' ? 'bg-green-500 text-white' : 'bg-white text-black'}`}
        >
          Mpesa
        </button>
        <button
          onClick={() => setPaymentType('Card')}
          className={`px-4 py-2 rounded-lg shadow-md w-1/3 text-center ${paymentType === 'Card' ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
        >
          Card
        </button>
      </div>

      {/* Mpesa number input */}
      {paymentType === 'Mpesa' && (
        <div className="mb-4">
          <label htmlFor="mpesaNumber" className="block mb-2 text-lg text-gray-700">
            Mpesa Number
          </label>
          <input
            type="text"
            id="mpesaNumber"
            value={mpesaNumber}
            onChange={(e) => setMpesaNumber(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your Mpesa number"
          />
        </div>
      )}

      {/* Card details input */}
      {paymentType === 'Card' && (
        <div className="space-y-4 mb-4">
          <div>
            <label htmlFor="cardNumber" className="block mb-2 text-lg text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="1234 5678 9123 4567"
            />
          </div>
          <div className="flex space-x-4">
            <div>
              <label htmlFor="expiryDate" className="block mb-2 text-lg text-gray-700">
                Expiry Date (MM/YY)
              </label>
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label htmlFor="cvv" className="block mb-2 text-lg text-gray-700">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="123"
              />
            </div>
          </div>
          <div>
            <label htmlFor="cardHolderName" className="block mb-2 text-lg text-gray-700">
              Card Holder Name
            </label>
            <input
              type="text"
              id="cardHolderName"
              value={cardHolderName}
              onChange={(e) => setCardHolderName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
            />
          </div>
        </div>
      )}

      {/* Error display */}
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      {/* Proceed to Pay button */}
      <button
        onClick={handleProceedToPay}
        className="w-full py-2 text-lg font-bold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
      >
        Proceed to Pay
      </button>
    </div>
  );
};

export default PaymentMethod;


/*
Usage Example:

<PaymentMethod onSelectPayment={(method) => console.log('Selected payment method:', method)} />
*/
