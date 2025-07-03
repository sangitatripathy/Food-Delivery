import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-700 text-gray-200 py-10 px-8 md:px-20" id='contact'>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <img src={assets.logo} alt="Logo" className="h-12 w-auto" />
            <span className="text-2xl font-bold text-white">Food Delivery</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Our food delivery app brings a variety of local cuisines to your doorstep with just a few taps. Enjoy fast, reliable service with easy navigation and real-time order tracking.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Facebook" className="hover:scale-110 transition-transform">
              <img src={assets.facebook_icon} alt="Facebook" className="h-7 w-7" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:scale-110 transition-transform">
              <img src={assets.twitter_icon} alt="Twitter" className="h-7 w-7" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:scale-110 transition-transform">
              <img src={assets.linkedin_icon} alt="Instagram" className="h-7 w-7" />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Company</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-white transition-colors">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">Delivery</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Get In Touch</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="tel:+12345678901" className="hover:text-white transition-colors">+1-234-567-8901</a>
            </li>
            <li>
              <a href="mailto:info@fooddelivery.com" className="hover:text-white transition-colors">info@fooddelivery.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Food Delivery. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer