import React, { useState } from "react";
import axios from "axios";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Modal = ({ modalType, closeModal }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const endpoint =
        modalType === "login"
          ? "http://localhost:3000/api/auth/login"
          : "http://localhost:3000/api/auth/register";
      const payload =
        modalType === "login"
          ? { email: formData.email, password: formData.password }
          : formData;

      const response = await axios.post(endpoint, payload);

      console.log("Response:", response.data);
      alert(response.data.message || "Success!");
      closeModal(); 
      navigate("/home");
    } catch (error) {
      console.error(
        "Error submitting the form:",
        error.response?.data || error.message
      );
      alert(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
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
              {showPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
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