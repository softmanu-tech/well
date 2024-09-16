'use client';

import React, { useState } from 'react';

// Define TypeScript interfaces for products and cart items
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

// Define a sample product list
const products: Product[] = [
  { id: 1, name: 'Shirt', description: 'Cotton T-shirt', price: 44.00, imageUrl: 'https://i.imgur.com/1GrakTl.jpg' },
  { id: 2, name: 'Shirt', description: 'Cotton T-shirt', price: 44.00, imageUrl: 'https://i.imgur.com/ba3tvGm.jpg' },
  { id: 3, name: 'Shirt', description: 'Cotton T-shirt', price: 44.00, imageUrl: 'https://i.imgur.com/pHQ3xT3.jpg' },
];

const AddToCart: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Add product to cart
  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const itemIndex = prevCart.findIndex(item => item.product.id === product.id);
      if (itemIndex > -1) {
        // Increment quantity for existing item
        const updatedCart = [...prevCart];
        updatedCart[itemIndex].quantity += 1;
        return updatedCart;
      } else {
        // Add new item to cart
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
  };

  // Update item quantity
  const updateQuantity = (productId: number, change: number) => {
    setCart(prevCart => {
      const itemIndex = prevCart.findIndex(item => item.product.id === productId);
      if (itemIndex > -1) {
        const updatedCart = [...prevCart];
        // Ensure that quantity is updated correctly
        updatedCart[itemIndex].quantity = Math.max(updatedCart[itemIndex].quantity + change, 1);
        return updatedCart;
      }
      return prevCart;
    });
  };

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const shippingCost = 5.00;
  const totalAmount = totalPrice + shippingCost;

  return (
    <div className="bg-gradient-to-br from-teal-200 to-purple-300 min-h-screen py-10 px-5 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-6xl mx-auto flex flex-col md:flex-row">

        {/* Product Section */}
        <div className="products p-6 md:w-2/3 bg-gray-100">
          <h4 className="text-xl font-bold mb-6 text-center text-indigo-900">Available Products</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                <img className="w-24 h-24 object-cover mb-2" src={product.imageUrl} alt={product.name} />
                <div className="text-center">
                  <h5 className="text-md font-bold text-gray-700 mb-2">{product.name}</h5>
                  <p className="text-sm text-gray-500">{product.description}</p>
                </div>
                <div className="flex justify-between items-center mt-2 w-full">
                  <span className="text-green-600 font-bold">&euro;{product.price.toFixed(2)}</span>
                  <button onClick={() => addToCart(product)} className="bg-blue-600 text-white px-4 py-1 rounded-lg shadow hover:bg-blue-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Section */}
        <div className="cart p-6 md:w-1/3 bg-gray-800 text-white">
          <h4 className="text-2xl font-bold mb-6">Your Cart</h4>
          {cart.length === 0 ? (
            <p className="text-center text-gray-400">Your cart is empty.</p>
          ) : (
            cart.map(item => (
              <div key={item.product.id} className="flex items-center border-b border-gray-700 py-4">
                <img className="w-16 h-16 object-cover rounded-lg mr-4" src={item.product.imageUrl} alt={item.product.name} />
                <div className="flex-1">
                  <h5 className="text-lg font-semibold">{item.product.name}</h5>
                </div>
                <div className="flex items-center mx-2">
                  <button onClick={() => updateQuantity(item.product.id, -1)} className="px-2 py-1 bg-gray-600 text-white rounded-md shadow hover:bg-gray-500">-</button>
                  <span className="mx-3 text-xl font-semibold">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.product.id, 1)} className="px-2 py-1 bg-gray-600 text-white rounded-md shadow hover:bg-gray-500">+</button>
                </div>
                <div className="ml-4 text-right">
                  <div className="text-xl font-semibold">&euro; {item.product.price.toFixed(2)}</div>
                  <button onClick={() => removeFromCart(item.product.id)} className="text-red-500 hover:text-red-700 text-lg">&times;</button>
                </div>
              </div>
            ))
          )}
          <div className="mt-6 border-t border-gray-700 pt-4">
            <div className="flex justify-between mb-4 text-lg font-bold">
              <span>Items: {cart.length}</span>
              <span>Total: &euro; {totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 rounded-lg font-semibold shadow-lg hover:bg-gradient-to-l from-green-500 to-blue-600">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
