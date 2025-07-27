"use client";

import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-yellow-100 to-yellow-200 px-8 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-2xl font-bold text-gray-800 tracking-wide">
          navdev
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-12">
          <a
            href="#"
            className="text-gray-700 font-medium hover:text-gray-900 transition-colors duration-200 relative group"
          >
            PORTFOLIO
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a
            href="#"
            className="text-gray-700 font-medium hover:text-gray-900 transition-colors duration-200 relative group"
          >
            ABOUT
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a
            href="#"
            className="text-gray-700 font-medium hover:text-gray-900 transition-colors duration-200 relative group"
          >
            SERVICES
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a
            href="#"
            className="text-gray-700 font-medium hover:text-gray-900 transition-colors duration-200 relative group"
          >
            CONTACT
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-200 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </nav>
  );
}
