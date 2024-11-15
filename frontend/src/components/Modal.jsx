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
    <div className="fixed inset-0 bg-soft-b bg-opacity-40 flex justify-center items-center z-20 font-alegreya">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full rounded-3xl">
        <h2 className="text-4xl mb-6 text-center font-bold text-deep-b">
          {modalType === "login" ? "Sign In" : "Sign Up"}
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded-xl"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="w-full p-2 border rounded-xl"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>

          {modalType === "signup" && (
            <>
              <div className="mb-4 relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  className="w-full p-2 border rounded-xl"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <AiOutlineEyeInvisible />
                  ) : (
                    <AiOutlineEye />
                  )}
                </span>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="phone"
                  className="w-full p-2 border rounded-xl"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-deep-b text-white py-2 px-6 rounded-2xl hover:bg-soft-y hover:text-deep-b"
            >
              {modalType === "login" ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </form>

        <button
          className="absolute top-2 right-2 text-neutral-900 text-5xl"
          onClick={closeModal}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
