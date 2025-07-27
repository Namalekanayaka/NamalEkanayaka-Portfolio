"use client";

import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center py-6 bg-white border-b border-gray-100">
      <div className="flex space-x-8">
        <a
          href="#"
          className="text-gray-900 font-semibold hover:text-gray-600 transition-colors"
        >
          Jonny Czar
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          Highlights
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          Work
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
}
