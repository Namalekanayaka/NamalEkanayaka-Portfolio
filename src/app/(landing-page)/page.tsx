"use client";

import React, { useEffect } from "react";
import Project from "./Components/Project";
import Navbar from "./Components/navbar";
import Image from "next/image";
import Service from "./Components/Service";
import Gost from "./Components/gost";

// Custom hook for scroll animations
const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll(".scroll-animate");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default function Home() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <style jsx global>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes glowText {
          0%,
          100% {
            text-shadow: 0 0 5px rgba(250, 204, 21, 0.3);
          }
          50% {
            text-shadow:
              0 0 20px rgba(250, 204, 21, 0.6),
              0 0 30px rgba(250, 204, 21, 0.4);
          }
        }

        /* Gooey Marquee Effect */
        @keyframes gooeyMarquee {
          0% {
            transform: translateX(0) scaleX(1);
          }
          25% {
            transform: translateX(-20px) scaleX(1.1);
          }
          50% {
            transform: translateX(-40px) scaleX(0.9);
          }
          75% {
            transform: translateX(-20px) scaleX(1.05);
          }
          100% {
            transform: translateX(0) scaleX(1);
          }
        }

        @keyframes gooeyStretch {
          0%,
          100% {
            transform: scaleX(1) scaleY(1);
            filter: blur(0px);
          }
          25% {
            transform: scaleX(1.2) scaleY(0.8);
            filter: blur(1px);
          }
          50% {
            transform: scaleX(0.8) scaleY(1.2);
            filter: blur(0.5px);
          }
          75% {
            transform: scaleX(1.1) scaleY(0.9);
            filter: blur(0.3px);
          }
        }

        @keyframes gooeyFloat {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(1deg);
          }
          66% {
            transform: translateY(5px) rotate(-1deg);
          }
        }

        .gooey-marquee {
          position: relative;
          display: inline-block;
          animation:
            gooeyMarquee 8s ease-in-out infinite,
            gooeyFloat 6s ease-in-out infinite;
          transform-origin: center center;
        }

        .gooey-marquee::before {
          content: "";
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          background: radial-gradient(
            circle,
            rgba(250, 204, 21, 0.3) 0%,
            transparent 70%
          );
          border-radius: 50px;
          animation: gooeyStretch 4s ease-in-out infinite;
          z-index: -1;
          filter: blur(20px);
        }

        .gooey-marquee .gooey-text {
          display: inline-block;
          animation: gooeyStretch 3s ease-in-out infinite;
          animation-delay: 0.5s;
          position: relative;
          z-index: 1;
        }

        /* Gooey filter for the container */
        .gooey-container {
          filter: url(#gooey);
        }

        .scroll-animate {
          opacity: 0;
          transform: translateY(60px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .scroll-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .slide-in-left {
          animation: slideInLeft 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
        }

        .slide-in-right {
          animation: slideInRight 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
        }

        .fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .scale-in {
          animation: scaleIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .glow-text {
          animation: glowText 3s ease-in-out infinite;
        }

        .typewriter {
          overflow: hidden;
          white-space: nowrap;
          animation: typewriter 3s steps(40, end) forwards;
        }

        .stagger-1 {
          animation-delay: 0.1s;
        }
        .stagger-2 {
          animation-delay: 0.2s;
        }
        .stagger-3 {
          animation-delay: 0.3s;
        }
        .stagger-4 {
          animation-delay: 0.4s;
        }
        .stagger-5 {
          animation-delay: 0.5s;
        }
        .stagger-6 {
          animation-delay: 0.6s;
        }

        .text-reveal {
          position: relative;
          overflow: hidden;
        }

        .text-reveal::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #facc15;
          transform: translateX(-100%);
          animation: revealText 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards;
          animation-delay: 0.5s;
        }

        @keyframes revealText {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .word-animation {
          display: inline-block;
          opacity: 0;
          animation: wordSlideUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
        }

        @keyframes wordSlideUp {
          from {
            opacity: 0;
            transform: translateY(40px) rotateX(90deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }
      `}</style>

      {/* SVG Filter for Gooey Effect */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-gray-800 opacity-0 slide-in-left">
        <div className="text-sm text-gray-400 font-mono typewriter">
          /developer/
        </div>
        <button className="text-sm border border-gray-600 px-4 py-2 hover:bg-gray-900 transition-all duration-300 font-mono hover:border-yellow-400 hover:text-yellow-400">
          contact
        </button>
      </header>

      {/* Main content */}
      <div className="container mx-auto px-4 py-16 font-mono">
        {/* Main content */}
        <div className="max-w-6xl mx-auto">
          {/* Main heading with Gooey Marquee Effect */}
          <div className="mb-12 gooey-container">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-light text-yellow-400 leading-tight glow-text">
              <span className="gooey-marquee">
                <span className="gooey-text">Namal</span>
              </span>{" "}
              <span className="gooey-marquee" style={{ animationDelay: "1s" }}>
                <span className="gooey-text">Ekanayaka</span>
              </span>
            </h1>
            <br />
            <div className="text-xl sm:text-2xl text-gray-400 mt-4 scroll-animate stagger-3">
              <span className="text-reveal">Experience web deverloper</span>
            </div>
          </div>

          {/* Profile image */}
          <div className="flex justify-start mb-16 scroll-animate stagger-4">
            <div className="w-80 h-80 sm:w-96 sm:h-96 relative bg-gray-800 rounded-lg overflow-hidden scale-in hover:scale-105 transition-transform duration-500">
              <Image
                src="/namal.png"
                alt="Namal Ekanayaka - Experience Designer"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 320px, 384px"
              />
            </div>
          </div>

          {/* Info Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            {/* Experience */}
            <div className="scroll-animate stagger-1">
              <h3 className="text-sm text-gray-400 mb-4 text-reveal">
                /experience/
              </h3>
              <div className="text-sm leading-relaxed">
                <p className="mb-2 word-animation stagger-1">2 years of</p>
                <p className="mb-2 word-animation stagger-2">designing</p>
                <p className="mb-2 word-animation stagger-3">digital</p>
                <p className="mb-2 word-animation stagger-4">experiences</p>
                <p className="word-animation stagger-5"></p>
              </div>
            </div>

            {/* Projects */}
            <div className="scroll-animate stagger-2">
              <h3 className="text-sm text-gray-400 mb-4 text-reveal">
                /projects/
              </h3>
              <div className="text-sm leading-relaxed">
                <p className="mb-2 word-animation stagger-1">
                  user experience design, product design,
                </p>
                <p className="mb-2 word-animation stagger-2">
                  interface design, design systems and
                </p>
                <p className="mb-2 word-animation stagger-3">
                  digital transformation projects.
                </p>
                <p className="word-animation stagger-4">
                  Beautiful and functional solutions
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="scroll-animate stagger-3">
              <h3 className="text-sm text-gray-400 mb-4 text-reveal">
                /location/
              </h3>
              <div className="text-sm leading-relaxed">
                <p className="mb-2 word-animation stagger-1">Srilankan</p>
                <p className="mb-2 word-animation stagger-2">designer</p>
                <p className="mb-2 word-animation stagger-3">based in</p>
                <p className="mb-2 word-animation stagger-4">Kandy,</p>
                <p className="word-animation stagger-5">Germany</p>
              </div>
            </div>

            {/* Philosophy */}
            <div className="scroll-animate stagger-4">
              <h3 className="text-sm text-gray-400 mb-4 text-reveal">
                /philosophy/
              </h3>
              <div className="text-sm leading-relaxed">
                <p className="mb-2 word-animation stagger-1">
                  Crafting digital experiences that blend
                </p>
                <p className="mb-2 word-animation stagger-2">
                  beautiful design with powerful
                </p>
                <p className="mb-2 word-animation stagger-3">
                  functionality. Focus on user-centered
                </p>
                <p className="word-animation stagger-4">
                  design and meaningful interactions.
                </p>
              </div>
            </div>
          </div>

          {/* Portfolio Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Portfolio Text */}
            <div className="scroll-animate">
              <h2 className="text-4xl md:text-6xl font-light text-yellow-400 mb-8 glow-text">
                <span className="text-reveal">portfolio</span>
              </h2>

              <div className="text-sm leading-relaxed mb-8 max-w-md scroll-animate stagger-1">
                <p className="word-animation">
                  User experience design, product design, interface design,
                  design systems and digital transformation projects. I always
                  work with innovative approaches based on user research and
                  data-driven decisions.
                </p>
              </div>

              <button className="text-sm border border-gray-600 px-6 py-3 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 mb-12 scroll-animate stagger-2 transform hover:scale-105">
                portfolio
              </button>

              {/* Projects List */}
              <div className="mb-8 scroll-animate stagger-3">
                <h3 className="text-lg text-white mb-6 text-reveal">
                  PROJECTS
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="word-animation stagger-1 hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
                    <div className="flex justify-between items-center">
                      <span>HOTJAR DASHBOARD</span>
                      <span className="text-gray-400">2024</span>
                    </div>
                    <div className="text-gray-400 text-xs mt-1">
                      UX/UI DESIGN
                    </div>
                  </div>

                  <div className="word-animation stagger-2 hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
                    <div className="flex justify-between items-center">
                      <span>USER INSIGHTS</span>
                      <span className="text-gray-400">2023</span>
                    </div>
                    <div className="text-gray-400 text-xs mt-1">
                      PRODUCT DESIGN
                    </div>
                  </div>

                  <div className="word-animation stagger-3 hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
                    <div className="flex justify-between items-center">
                      <span>DESIGN SYSTEM</span>
                      <span className="text-gray-400">2023</span>
                    </div>
                    <div className="text-gray-400 text-xs mt-1">
                      SYSTEM DESIGN
                    </div>
                  </div>

                  <div className="word-animation stagger-4 hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
                    <div className="flex justify-between items-center">
                      <span>MOBILE APP</span>
                      <span className="text-gray-400">2022</span>
                    </div>
                    <div className="text-gray-400 text-xs mt-1">UX DESIGN</div>
                  </div>
                </div>
              </div>

              <div className="text-xs text-gray-500 mt-12 scroll-animate stagger-4">
                <p className="word-animation stagger-1">Experience Designer</p>
                <p className="mt-8 word-animation stagger-2">2025</p>
              </div>
            </div>

            {/* Portfolio Showcase */}
            <div className="relative scroll-animate stagger-2">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-8 text-center relative overflow-hidden min-h-96 scale-in hover:scale-105 transition-transform duration-500 cursor-pointer">
                <div className="text-white text-xs uppercase tracking-wide mb-4 opacity-80 word-animation stagger-1">
                  UX/UI DESIGN
                  <br />
                  NAMAL EKANAYAKA
                </div>

                <div className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  <span className="word-animation stagger-2">
                    User Experience
                  </span>
                  <br />
                  <span className="word-animation stagger-3">Design</span>
                </div>

                <div className="text-lg md:text-2xl font-bold text-white mb-6">
                  <span className="word-animation stagger-4">NEW way</span>
                  <br />
                  <span className="word-animation stagger-5">
                    OF interaction
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold hover:bg-white transition-colors duration-300 word-animation stagger-6">
                  view work
                </div>

                <div className="absolute bottom-4 left-4 text-white text-xs word-animation stagger-6">
                  2025
                  <br />
                  PORTFOLIO SHOWCASE
                </div>

                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="text-xs text-white leading-tight h-full overflow-hidden">
                    {Array(20)
                      .fill(undefined)
                      .map((_, i) => (
                        <div key={i}>
                          EXPERIENCE DESIGN • HOTJAR • BERLIN • UX/UI • PRODUCT
                          DESIGN • USER RESEARCH •
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Gost />

        {/* Featured Projects section - keeping original functionality */}
        <div className="mt-24 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-yellow-400 to-transparent"></div>

          {/* Projects section with original styling restored */}
          <div className=" text-black rounded-lg p-8 mb-12">
            <Project />
          </div>

          {/* Service section with original styling restored */}
          <div className="bg-white text-black rounded-lg p-8">
            <Service />
          </div>
        </div>
      </div>
    </div>
  );
}
