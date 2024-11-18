import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const BillPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedItems = location.state?.selectedItems || [];
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const totalAmount = selectedItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const userName = "Nick";

  const applyPromoCode = () => {
    if (promoCode.trim().toLowerCase() === "save10") {
      setDiscount(totalAmount * 0.1);
    } else {
      setDiscount(0);
      alert("Invalid Promo Code!");
    }
  };

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gray-100 font-alegreya">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-deep-b">Foodio</span>
          </div>

          {/* User Info */}
          <div className="flex items-center space-x-3">
            <FaUserCircle className="text-2xl text-deep-b" />
            <span className="text-lg font-medium text-gray-700">
              {userName}
            </span>
          </div>
        </div>
      </nav>

      {/* Order Summary */}
      <div className="max-w-3xl mx-auto bg-white mt-10 shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-deep-b mb-6 text-center">
          Order Summary
        </h2>
        <div className="border-b border-gray-300 pb-4 mb-4">
          <div className="grid grid-cols-3 text-gray-500 font-semibold">
            <span>Item</span>
            <span className="text-center">Quantity</span>
            <span className="text-right">Price</span>
          </div>
        </div>
        <ul className="space-y-4">
          {selectedItems.map((item, index) => (
            <li
              key={index}
              className="grid grid-cols-3 items-center text-gray-700 font-medium"
            >
              <span>{item.name}</span>
              <span className="text-center">x{item.quantity}</span>
              <span className="text-right">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <label
            htmlFor="promoCode"
            className="block text-gray-700 font-medium mb-2"
          >
            Promo Code
          </label>
          <div className="flex space-x-2">
            <input
              id="promoCode"
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-b"
              placeholder="Enter Promo Code"
            />
            <button
              onClick={applyPromoCode}
              className="bg-deep-b text-white py-2 px-4 rounded-md hover:bg-deep-b-dark transition"
            >
              Apply
            </button>
          </div>
        </div>
        {discount > 0 && (
          <div className="mt-4 text-green-600 font-semibold">
            Promo applied! You saved ${discount.toFixed(2)}.
          </div>
        )}
        <div className="border-t border-gray-300 mt-6 pt-4">
          <div className="flex justify-between text-gray-700 font-semibold text-lg">
            <span>Total</span>
            <span>${(totalAmount - discount).toFixed(2)}</span>
          </div>
        </div>
        <button
          onClick={handlePlaceOrder}
          className="w-full mt-6 bg-deep-b text-white py-2 px-4 rounded-lg hover:bg-deep-b-dark transition"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default BillPage;
