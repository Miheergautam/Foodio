import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const OrderOnline = ({ restaurant }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  const handleAddItem = (item) => {
    const existingItemIndex = selectedItems.findIndex(
      (selectedItem) => selectedItem.name === item.name
    );
    if (existingItemIndex !== -1) {
      const updatedItems = [...selectedItems];
      updatedItems[existingItemIndex].quantity += 1;
      setSelectedItems(updatedItems);
    } else {
      setSelectedItems((prevItems) => [
        ...prevItems,
        { ...item, quantity: 1 },
      ]);
    }
  };

  const handleRemoveItem = (item) => {
    const updatedItems = selectedItems.filter(
      (selectedItem) => selectedItem.name !== item.name
    );
    setSelectedItems(updatedItems);
  };

  const handleNext = () => {
    navigate("/order-summary", { state: { selectedItems } });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-deep-b mb-4">Order Online</h2>

      {/* Menu and Order Details */}
      <div className="flex">
        <div className="w-1/4 p-4 border-r-2 border-gray-200">
          <h3 className="text-xl font-semibold text-deep-b mb-4">Menu Items</h3>
          <ul>
            {restaurant.menuItems?.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer py-2 px-4 rounded-lg mb-2 ${
                  selectedItem === item.name
                    ? "bg-deep-b text-white"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setSelectedItem(item.name)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-3/4 p-4">
          <h3 className="text-xl font-semibold text-deep-b mb-4">
            {selectedItem
              ? `${selectedItem} Details`
              : "Select a menu item to view details"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {restaurant.menuItems
              ?.filter((item) => item.name === selectedItem)
              .map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-4 flex flex-col"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-cover rounded-t-lg mb-4"
                  />
                  <h4 className="text-lg font-semibold text-deep-b">{item.name}</h4>
                  <p className="text-lg font-bold text-deep-b mt-2">
                    ${item.price}
                  </p>
                  <button
                    onClick={() => handleAddItem(item)}
                    className="bg-deep-b text-white py-2 px-6 rounded-lg hover:bg-deep-b-dark transition mt-4"
                  >
                    Add
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>

      {selectedItems.length > 0 && (
        <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-deep-b mb-4">Your Order</h3>
          <ul>
            {selectedItems.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md"
              >
                <span className="font-semibold text-deep-b">{item.name}</span>
                <span>x{item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
                <button
                  className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-700 transition"
                  onClick={() => handleRemoveItem(item)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-end">
            <button
              onClick={handleNext}
              className="bg-deep-b text-white py-2 px-4 rounded-lg hover:bg-deep-b-dark transition flex items-center"
            >
              Next <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderOnline;