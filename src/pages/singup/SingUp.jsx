/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const { registerUser, updateProfileInfo } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photo.value;

    // Password validation
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must include at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must include at least one lowercase letter.");
      return;
    }

    try {
      await registerUser(email, password);
      await updateProfileInfo(name, photoURL);
      toast.success("Registration successful!");
      form.reset();
    } catch (error) {
      toast.error("Registration failed. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <form
        onSubmit={handleSignUp}
        className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-6">
          Create an Account
        </h2>
        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
        </div>
        {/* Photo URL */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="photo">
            Photo URL
          </label>
          <input
            type="text"
            name="photo"
            id="photo"
            placeholder="Photo URL"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
        </div>
        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
        </div>
        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Your password"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
            <span
              className="absolute top-3 right-3 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold rounded-lg py-3 mt-4 hover:bg-blue-600 transition"
        >
          Sign Up
        </button>
        {/* Login Link */}
        <p className="text-sm text-gray-600 text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 font-semibold underline">
            Log in here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
