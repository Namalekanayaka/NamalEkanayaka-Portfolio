"use client";

import React from "react";

export default function GhostTextAnimation() {
  // Removed unused scrollY state and effect

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      <div className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8">
        <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-8">
          {/* Main static text */}
          <div className="text-center">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-tight select-none">
              <span className="block sm:inline">WEB</span>
              <br className="hidden sm:block" />
              <span className="block sm:inline"> </span>
              <span className="block sm:inline">DEVELOPER</span>
            </h1>
          </div>

          {/* Ghost sliding text */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="ghost-slide">
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-tight whitespace-nowrap">
                WEB DEVELOPER
              </h1>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap");

        * {
          font-family:
            "Inter",
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            "Roboto",
            sans-serif;
        }

        @keyframes ghostMove {
          0% {
            transform: translateX(-100vw);
          }
          100% {
            transform: translateX(100vw);
          }
        }

        @keyframes ghostMoveReverse {
          0% {
            transform: translateX(100vw);
          }
          100% {
            transform: translateX(-100vw);
          }
        }

        @keyframes scrollFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .ghost-slide {
          animation: ghostMove 8s linear infinite;
          mix-blend-mode: exclusion;
        }

        .ghost-slide-delayed {
          animation: ghostMoveReverse 12s linear infinite;
          animation-delay: -4s;
          mix-blend-mode: difference;
        }

        .ghost-slide-slow {
          animation: ghostMove 15s linear infinite;
          animation-delay: -8s;
          mix-blend-mode: overlay;
        }

        .ghost-scroll {
          mix-blend-mode: exclusion;
          animation: scrollFloat 4s ease-in-out infinite;
        }

        .ghost-final {
          mix-blend-mode: difference;
          animation: scrollFloat 6s ease-in-out infinite reverse;
        }

        /* Glowing effect on hover */
        .ghost-slide:hover,
        .ghost-scroll:hover,
        .ghost-final:hover {
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
        }

        /* Additional ghost particles - Mobile optimized */
        .ghost-slide::before {
          content: "";
          position: absolute;
          top: 50%;
          left: -30px;
          width: 15px;
          height: 15px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          animation: float 2s ease-in-out infinite alternate;
        }

        .ghost-slide::after {
          content: "";
          position: absolute;
          top: 30%;
          right: -20px;
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          animation: float 2.5s ease-in-out infinite alternate-reverse;
        }

        @keyframes float {
          0% {
            transform: translateY(-10px);
            opacity: 0.7;
          }
          100% {
            transform: translateY(10px);
            opacity: 1;
          }
        }

        /* Scroll indicator */
        .ghost-scroll::before {
          content: "↓ SCROLL ↓";
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          color: rgba(255, 255, 255, 0.6);
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 2px;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }

        /* Scroll indicator */
        .ghost-scroll::before {
          content: "↓ SCROLL ↓";
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          color: rgba(255, 255, 255, 0.6);
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 2px;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .ghost-slide h1,
          .ghost-slide-delayed h1,
          .ghost-slide-slow h1,
          .ghost-scroll h2,
          .ghost-final h3 {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 1024px) {
          .ghost-slide h1,
          .ghost-slide-delayed h1,
          .ghost-slide-slow h1 {
            font-size: 4rem;
          }

          .ghost-scroll h2 {
            font-size: 3rem;
          }

          .ghost-final h3 {
            font-size: 2.5rem;
          }
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #111;
        }

        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  );
}
