import React, { useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'

const LoginPopup = ({setShowLogin}) => {
  const[currentState,setCurrentState]=useState('Sign up')
  return (
   <div className="fixed inset-0 z-50 grid place-items-center bg-black/60">
  <div className="relative w-[90%] max-w-md bg-white rounded-xl shadow-lg p-6">
    
    {/* Close Icon */}
    <img
      src={assets.cross_icon}
      alt="Close"
      className="absolute top-4 right-4 w-6 h-6 cursor-pointer"
      onClick={() => setShowLogin(false)}
    />

    <h2 className="text-2xl font-semibold text-center mb-4">{currentState}</h2>

    <form action="submit" className="space-y-4">
      {currentState !== "Login" && (
        <input
          type="text"
          placeholder="Enter your name"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}
      <input
        type="email"
        placeholder="Enter your email"
        required
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="password"
        placeholder="Type your Password"
        required
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-500 text-white py-2 rounded-md font-semibold transition"
      >
        {currentState === "Sign up" ? "Create Account" : "Login"}
      </button>
      <div className="flex items-start gap-2 text-sm">
        <input type="checkbox" required className="mt-1" />
        <p>
          By continuing, I agree to the Terms of Use and Privacy Policy.
        </p>
      </div>
      {currentState === "Login" ? (
        <p className="text-center text-sm">
          Create a new account?{" "}
          <span
            className="text-orange-500 cursor-pointer underline"
            onClick={() => setCurrentState("Sign up")}
          >
            Click here
          </span>
        </p>
      ) : (
        <p className="text-center text-sm">
          Already have an account?{" "}
          <span
            className="text-orange-500 cursor-pointer underline"
            onClick={() => setCurrentState("Login")}
          >
            Login here
          </span>
        </p>
      )}
    </form>
  </div>
</div>

  )
}

export default LoginPopup