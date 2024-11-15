import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Modal = ({ modalType, closeModal }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30 font-alegreya">
      <div className="bg-white p-8 shadow-xl max-w-md w-full rounded-3xl relative">
        {/* Modal Header */}
        <h2 className="text-4xl mb-6 text-center font-extrabold text-deep-b">
          {modalType === "login" ? "Sign In" : "Sign Up"}
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              name="email"
              className="w-full p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-soft-b focus:outline-none"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="w-full p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-soft-b focus:outline-none"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
            </span>
          </div>

          {/* Confirm Password & Phone for Sign Up */}
          {modalType === "signup" && (
            <>
              {/* Confirm Password Input */}
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  className="w-full p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-soft-b focus:outline-none"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <span
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <AiOutlineEyeInvisible size={20} />
                  ) : (
                    <AiOutlineEye size={20} />
                  )}
                </span>
              </div>

              {/* Phone Input */}
              <div>
                <input
                  type="text"
                  name="phone"
                  className="w-full p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-soft-b focus:outline-none"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-deep-b text-white py-3 px-8 rounded-lg shadow-md hover:bg-soft-y hover:text-deep-b transition-all"
            >
              {modalType === "login" ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </form>

        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-700 text-2xl font-bold hover:text-deep-b transition-all"
          onClick={closeModal}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;