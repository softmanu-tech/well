"use client"; // Mark the component as a Client Component

import React, { useState, useEffect } from "react";

interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  items: OrderItem[];
  totalAmount: number;
  paymentMethod: string;
  orderStatus: string;
  paymentDetails: string;
  rating?: number | null;
  comment?: string;
}

interface MakeOrderProps {
  initialCartItems: OrderItem[];
}

const MakeOrder: React.FC<MakeOrderProps> = ({ initialCartItems }) => {
  const [cartItems, setCartItems] = useState<OrderItem[]>(initialCartItems);
  const [paymentMethod, setPaymentMethod] = useState<string>("Mpesa");
  const [mpesaNumber, setMpesaNumber] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardExpiry, setCardExpiry] = useState<string>("");
  const [cardCVV, setCardCVV] = useState<string>("");
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState<string>("");
  const [isConfirming, setIsConfirming] = useState<boolean>(false);
  const [orderHistory, setOrderHistory] = useState<Order[]>([]);
  const [validationError, setValidationError] = useState<string>("");

  useEffect(() => {
    setCartItems(initialCartItems);
  }, [initialCartItems]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const validatePaymentDetails = () => {
    if (paymentMethod === "Mpesa") {
      if (mpesaNumber.length !== 10 || !/^\d+$/.test(mpesaNumber)) {
        setValidationError("Please enter a valid Mpesa number (10 digits).");
        return false;
      }
    } else if (paymentMethod === "Card") {
      if (cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
        setValidationError("Please enter a valid 16-digit card number.");
        return false;
      }
      if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) {
        setValidationError("Please enter a valid card expiry date (MM/YY).");
        return false;
      }
      if (cardCVV.length !== 3 || !/^\d+$/.test(cardCVV)) {
        setValidationError("Please enter a valid 3-digit CVV.");
        return false;
      }
    }
    setValidationError("");
    return true;
  };

  const handleConfirmOrder = () => {
    if (!validatePaymentDetails()) return;

    setIsConfirming(true);
    setTimeout(() => {
      const paymentDetails = paymentMethod === "Mpesa" ? `Mpesa Number: ${mpesaNumber}` : `Card: **** **** **** ${cardNumber.slice(-4)}`;
      const newOrder: Order = {
        items: cartItems,
        totalAmount: calculateTotal(),
        paymentMethod,
        paymentDetails,
        orderStatus: "Processing",
        rating,
        comment,
      };

      setOrderHistory([...orderHistory, newOrder]);
      setIsConfirming(false);
      setMpesaNumber("");
      setCardNumber("");
      setCardExpiry("");
      setCardCVV("");
      setRating(null);
      setComment("");
      alert("Order placed successfully!");
    }, 2000);
  };

  const handleSubmitReview = () => {
    if (rating === null) {
      alert("Please provide a star rating before submitting.");
      return;
    }
    alert(`Review submitted! Rating: ${rating} stars. Comment: ${comment}`);
    // Here you would typically send the review data to the server
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      {/* Choose Payment Method */}
      <h2 className="text-3xl font-bold mb-6 text-indigo-600">Choose Payment Method</h2>
      <div className="mb-6">
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="Mpesa"
              checked={paymentMethod === "Mpesa"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <span className="text-lg font-medium text-gray-700">Mpesa</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="Card"
              checked={paymentMethod === "Card"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <span className="text-lg font-medium text-gray-700">Card</span>
          </label>
        </div>
      </div>

      {/* Mpesa or Card Details Input */}
      {paymentMethod === "Mpesa" && (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600">Mpesa Number</label>
          <input
            type="text"
            value={mpesaNumber}
            onChange={(e) => setMpesaNumber(e.target.value)}
            placeholder="Enter Mpesa Number"
            className="border border-indigo-300 rounded-lg w-full p-3 mt-1 focus:ring focus:ring-indigo-300 transition-all"
          />
        </div>
      )}

      {paymentMethod === "Card" && (
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-600">Card Number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Enter Card Number"
              className="border border-indigo-300 rounded-lg w-full p-3 mt-1 focus:ring focus:ring-indigo-300 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Expiry Date (MM/YY)</label>
            <input
              type="text"
              value={cardExpiry}
              onChange={(e) => setCardExpiry(e.target.value)}
              placeholder="MM/YY"
              className="border border-indigo-300 rounded-lg w-full p-3 mt-1 focus:ring focus:ring-indigo-300 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">CVV</label>
            <input
              type="text"
              value={cardCVV}
              onChange={(e) => setCardCVV(e.target.value)}
              placeholder="Enter CVV"
              className="border border-indigo-300 rounded-lg w-full p-3 mt-1 focus:ring focus:ring-indigo-300 transition-all"
            />
          </div>
        </div>
      )}

      {/* Confirm Button */}
      <button
        onClick={handleConfirmOrder}
        disabled={isConfirming}
        className={`w-full bg-indigo-600 text-white py-3 rounded-lg shadow hover:bg-indigo-700 transition-all ${
          isConfirming ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isConfirming ? "Confirming..." : "Place Order"}
      </button>

      {/* Review Your Order Section */}
      <h2 className="text-3xl font-bold mb-6 mt-8 text-indigo-600">Review Your Order</h2>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between border-b py-2 text-gray-700">
                <span>{item.name} (x{item.quantity})</span>
                <span>Ksh {item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="flex justify-between font-bold text-xl py-2">
          <span>Total</span>
          <span>Ksh {calculateTotal()}</span>
        </div>

        {/* Star Rating */}
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-gray-700">Rate Your Order</h3>
          <div className="flex space-x-2 mt-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className={`text-2xl ${rating && rating >= star ? "text-yellow-500" : "text-gray-300"}`}
                onClick={() => setRating(star)}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        {/* Comment Section */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-600">Leave a comment</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Your feedback..."
            className="border border-indigo-300 rounded-lg w-full p-3 mt-1 focus:ring focus:ring-indigo-300 transition-all"
          />
        </div>

        {/* Submit Review Button */}
        <button
          onClick={handleSubmitReview}
          className="w-full mt-4 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-all"
        >
          Submit Review
        </button>
      </div>

      {/* Order History Section */}
      <h2 className="text-3xl font-bold mb-6 mt-8 text-indigo-600">Order History</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        {orderHistory.length === 0 ? (
          <p>No orders yet.</p>
        ) : (
          <ul>
            {orderHistory.map((order, index) => (
              <li key={index} className="mb-4 border-b pb-2">
                <div className="text-lg font-semibold">Order {index + 1}</div>
                <div className="text-sm text-gray-600">
                  Status: {order.orderStatus} | Total: Ksh {order.totalAmount}
                </div>
                <div className="text-sm">Payment Method: {order.paymentMethod}</div>
                <div className="text-sm">Payment Details: {order.paymentDetails}</div>
                {order.rating && (
                  <div className="mt-2">
                    <span className="font-medium">Rating:</span> {order.rating} ★
                  </div>
                )}
                {order.comment && (
                  <div className="mt-2">
                    <span className="font-medium">Comment:</span> {order.comment}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MakeOrder;
