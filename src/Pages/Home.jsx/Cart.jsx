import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';

const Cart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: 'Apple iPhone 14 (128GB)',
      price: 69999,
      quantity: 1,
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23 Ultra',
      price: 124999,
      quantity: 1,
      image: 'https://via.placeholder.com/100',
    },
  ]);

  const increaseQuantity = id => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = id => {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 pt-16">
        <div className="container mx-auto p-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Shopping Cart
          </h2>

          {cart.length === 0 ? (
            <div className="text-center text-gray-600">
              <p>Your cart is empty.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {/* Left Section - Cart Items */}
              <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
                {cart.map(item => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-300 pb-4 mb-4"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        className="h-20 w-20 rounded-lg shadow"
                        src={item.image}
                        alt={item.name}
                      />
                      <div>
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-blue-600 font-semibold text-md">
                          ₹{item.price.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-2 sm:mt-0">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="bg-gray-300 hover:bg-gray-400 text-black px-3 py-1 rounded-lg"
                      >
                        −
                      </button>
                      <span className="text-lg font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Section - Price Summary */}
              <div className="bg-white p-6 rounded-lg shadow-md h-fit">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Price Details
                </h3>
                <div className="flex justify-between text-gray-700 mb-2">
                  <span>
                    Price ({cart.length} item{cart.length > 1 ? 's' : ''})
                  </span>
                  <span>₹{getTotalPrice().toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-700 mb-2">
                  <span>Delivery Charges</span>
                  <span className="text-green-600 font-medium">FREE</span>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between text-lg font-semibold text-gray-800">
                  <span>Total Amount</span>
                  <span>₹{getTotalPrice().toLocaleString()}</span>
                </div>
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-2 mt-4 rounded-lg font-semibold">
                  Place Order
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
