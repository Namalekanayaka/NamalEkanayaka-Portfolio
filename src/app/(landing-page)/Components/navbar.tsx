"use client";

import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full bg-gradient-to-r from-yellow-100 to-yellow-200 px-4 sm:px-6 lg:px-8 py-4 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-xl sm:text-2xl font-bold text-gray-800 tracking-wide z-20 relative">
          navdev
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
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

        {/* Modern Dot Grid Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden grid grid-cols-3 gap-1 w-8 h-8 z-20 relative focus:outline-none p-1"
          aria-label="Toggle menu"
        >
          <span
            className={`w-1.5 h-1.5 bg-gray-800 rounded-full transition-all duration-300 ${
              isMenuOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
            }`}
          ></span>
          <span
            className={`w-1.5 h-1.5 bg-gray-800 rounded-full transition-all duration-300 delay-75 ${
              isMenuOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
            }`}
          ></span>
          <span
            className={`w-1.5 h-1.5 bg-gray-800 rounded-full transition-all duration-300 delay-150 ${
              isMenuOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
            }`}
          ></span>
          <span
            className={`w-1.5 h-1.5 bg-gray-800 rounded-full transition-all duration-300 delay-75 ${
              isMenuOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
            }`}
          ></span>
          <span
            className={`w-1.5 h-1.5 bg-gray-800 rounded-full transition-all duration-300 ${
              isMenuOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
            }`}
          ></span>
          <span
            className={`w-1.5 h-1.5 bg-gray-800 rounded-full transition-all duration-300 delay-75 ${
              isMenuOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
            }`}
          ></span>
          <span
            className={`w-1.5 h-1.5 bg-gray-800 rounded-full transition-all duration-300 delay-150 ${
              isMenuOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
            }`}
          ></span>
          <span
            className={`w-1.5 h-1.5 bg-gray-800 rounded-full transition-all duration-300 delay-75 ${
              isMenuOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
            }`}
          ></span>
          <span
            className={`w-1.5 h-1.5 bg-gray-800 rounded-full transition-all duration-300 ${
              isMenuOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
            }`}
          ></span>

          {/* Close X when menu is open */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
              isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-180"
            }`}
          >
            <div className="relative w-6 h-6">
              <span className="absolute top-1/2 left-1/2 w-4 h-0.5 bg-gray-800 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></span>
              <span className="absolute top-1/2 left-1/2 w-4 h-0.5 bg-gray-800 transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></span>
            </div>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black z-10 transition-all duration-500 ${
          isMenuOpen ? "bg-opacity-95 visible" : "bg-opacity-0 invisible"
        }`}
        onClick={closeMenu}
      >
        {/* Vanishing Mobile Menu Content */}
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center space-y-8">
            <a
              href="#"
              onClick={closeMenu}
              className={`block text-4xl md:text-5xl font-bold text-white transition-all duration-700 hover:text-yellow-400 transform ${
                isMenuOpen
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-10 opacity-0 scale-95"
              }`}
              style={{ transitionDelay: isMenuOpen ? "100ms" : "0ms" }}
            >
              PORTFOLIO
            </a>
            <a
              href="#"
              onClick={closeMenu}
              className={`block text-4xl md:text-5xl font-bold text-white transition-all duration-700 hover:text-yellow-400 transform ${
                isMenuOpen
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-10 opacity-0 scale-95"
              }`}
              style={{ transitionDelay: isMenuOpen ? "200ms" : "0ms" }}
            >
              ABOUT
            </a>
            <a
              href="#"
              onClick={closeMenu}
              className={`block text-4xl md:text-5xl font-bold text-white transition-all duration-700 hover:text-yellow-400 transform ${
                isMenuOpen
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-10 opacity-0 scale-95"
              }`}
              style={{ transitionDelay: isMenuOpen ? "300ms" : "0ms" }}
            >
              SERVICES
            </a>
            <a
              href="#"
              onClick={closeMenu}
              className={`block text-4xl md:text-5xl font-bold text-white transition-all duration-700 hover:text-yellow-400 transform ${
                isMenuOpen
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-10 opacity-0 scale-95"
              }`}
              style={{ transitionDelay: isMenuOpen ? "400ms" : "0ms" }}
            >
              CONTACT
            </a>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-yellow-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-yellow-400 rounded-full opacity-30 animate-ping"></div>
        <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-yellow-400 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute bottom-1/3 left-3/4 w-3 h-3 bg-yellow-400 rounded-full opacity-40 animate-pulse"></div>
      </div>

      {/* Tablet Navigation (Medium screens) */}
      <div className="hidden md:flex lg:hidden items-center space-x-6 absolute top-full left-0 w-full bg-gradient-to-r from-yellow-100 to-yellow-200 px-4 sm:px-6 py-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-center space-x-8">
          <a
            href="#"
            className="text-gray-700 font-medium hover:text-gray-900 transition-colors duration-200 relative group text-sm"
          >
            PORTFOLIO
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a
            href="#"
            className="text-gray-700 font-medium hover:text-gray-900 transition-colors duration-200 relative group text-sm"
          >
            ABOUT
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a
            href="#"
            className="text-gray-700 font-medium hover:text-gray-900 transition-colors duration-200 relative group text-sm"
          >
            SERVICES
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a
            href="#"
            className="text-gray-700 font-medium hover:text-gray-900 transition-colors duration-200 relative group text-sm"
          >
            CONTACT
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-200 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </nav>
  );
}
