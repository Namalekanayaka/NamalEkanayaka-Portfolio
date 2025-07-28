"use client";

import React, { useEffect, useState } from "react";
import Project from "./Components/Project";
import Navbar from "./Components/navbar";
import Image from "next/image";
import Service from "./Components/Service";
import Gost from "./Components/gost";

// Custom hook for scroll animations with performance optimization
const useScrollAnimation = () => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -30px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          // Unobserve after animation to improve performance
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Use requestAnimationFrame to batch DOM queries
    requestAnimationFrame(() => {
      const animatedElements = document.querySelectorAll(".scroll-animate");
      animatedElements.forEach((el) => observer.observe(el));
    });

    return () => observer.disconnect();
  }, []);

  return reducedMotion;
};

export default function Home() {
  const reducedMotion = useScrollAnimation();

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <style jsx global>{`
        /* Base animations - optimized for performance */
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 40px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translate3d(-40px, 0, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translate3d(40px, 0, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale3d(0.95, 0.95, 1);
          }
          to {
            opacity: 1;
            transform: scale3d(1, 1, 1);
          }
        }

        @keyframes glowText {
          0%,
          100% {
            text-shadow: 0 0 5px rgba(250, 204, 21, 0.3);
          }
          50% {
            text-shadow:
              0 0 15px rgba(250, 204, 21, 0.5),
              0 0 25px rgba(250, 204, 21, 0.3);
          }
        }

        /* Simplified gooey effects for better performance */
        @keyframes gooeyFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -5px, 0);
          }
        }

        .gooey-marquee {
          display: inline-block;
          animation: ${reducedMotion
            ? "none"
            : "gooeyFloat 4s ease-in-out infinite"};
          will-change: transform;
        }

        .gooey-marquee::before {
          content: "";
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          background: radial-gradient(
            circle,
            rgba(250, 204, 21, 0.2) 0%,
            transparent 70%
          );
          border-radius: 30px;
          z-index: -1;
          filter: blur(10px);
        }

        .scroll-animate {
          opacity: 0;
          transform: translate3d(0, 30px, 0);
          transition:
            opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: opacity, transform;
        }

        .scroll-animate.animate-in {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .scroll-animate {
            transition: opacity 0.3s ease;
            transform: none;
          }

          .gooey-marquee,
          .glow-text,
          .word-animation {
            animation: none !important;
          }
        }

        .slide-in-left {
          animation: ${reducedMotion
            ? "fadeInUp 0.5s ease forwards"
            : "slideInLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards"};
        }

        .slide-in-right {
          animation: ${reducedMotion
            ? "fadeInUp 0.5s ease forwards"
            : "slideInRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards"};
        }

        .fade-in-up {
          animation: fadeInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .scale-in {
          animation: scaleIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .glow-text {
          animation: ${reducedMotion
            ? "none"
            : "glowText 2s ease-in-out infinite"};
        }

        /* Stagger delays - reduced for faster loading */
        .stagger-1 {
          animation-delay: 0.1s;
        }
        .stagger-2 {
          animation-delay: 0.15s;
        }
        .stagger-3 {
          animation-delay: 0.2s;
        }
        .stagger-4 {
          animation-delay: 0.25s;
        }
        .stagger-5 {
          animation-delay: 0.3s;
        }
        .stagger-6 {
          animation-delay: 0.35s;
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
          animation: ${reducedMotion
            ? "none"
            : "revealText 1s cubic-bezier(0.77, 0, 0.175, 1) forwards"};
          animation-delay: 0.3s;
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
          animation: ${reducedMotion
            ? "fadeInUp 0.4s ease forwards"
            : "wordSlideUp 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards"};
        }

        @keyframes wordSlideUp {
          from {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        /* Mobile-specific optimizations */
        @media (max-width: 768px) {
          .scroll-animate {
            transform: translate3d(0, 20px, 0);
          }

          .gooey-marquee::before {
            filter: blur(5px);
          }
        }
      `}</style>

      {/* SVG Filter for Gooey Effect - simplified for mobile */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -7"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Header - Mobile Responsive */}
      <header className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-800 opacity-0 slide-in-left">
        <div className="text-xs sm:text-sm text-gray-400 font-mono">
          /developer/
        </div>
        <button className="text-xs sm:text-sm border border-gray-600 px-3 py-2 sm:px-4 hover:bg-gray-900 transition-all duration-300 font-mono hover:border-yellow-400 hover:text-yellow-400">
          contact
        </button>
      </header>

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 font-mono">
        <div className="max-w-6xl mx-auto">
          {/* Main heading with Gooey Marquee Effect - Mobile Responsive */}
          <div className="mb-8 sm:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light text-yellow-400 leading-tight glow-text">
              <span className="gooey-marquee">
                <span className="gooey-text">Namal</span>
              </span>{" "}
              <span
                className="gooey-marquee"
                style={{ animationDelay: "0.5s" }}
              >
                <span className="gooey-text">Ekanayaka</span>
              </span>
            </h1>
            <div className="text-lg sm:text-xl md:text-2xl text-gray-400 mt-4 scroll-animate stagger-3">
              <span className="text-reveal">Experience web developer</span>
            </div>
          </div>

          {/* Profile image - Mobile Responsive */}
          <div className="flex justify-center sm:justify-start mb-12 sm:mb-16 scroll-animate stagger-4">
            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 relative bg-gray-800 rounded-lg overflow-hidden scale-in hover:scale-105 transition-transform duration-500">
              <Image
                src="/namal.png"
                alt="Namal Ekanayaka - Experience Designer"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 384px"
              />
            </div>
          </div>

          {/* Info Sections Grid - Mobile Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-16 sm:mb-20">
            {/* Experience */}
            <div className="scroll-animate stagger-1">
              <h3 className="text-sm text-gray-400 mb-4 text-reveal">
                /experience/
              </h3>
              <div className="text-sm leading-relaxed">
                <p className="mb-2 word-animation stagger-1">2 years of</p>
                <br />
                <p className="mb-2 word-animation stagger-2">designing</p>
                <br />
                <p className="mb-2 word-animation stagger-3">digital</p>
                <br />
                <p className="mb-2 word-animation stagger-4">experiences</p>
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
                <p className="mb-2 word-animation stagger-1">Sri Lankan</p>
                <br />
                <p className="mb-2 word-animation stagger-2">web-designer</p>
                <br />
                <p className="mb-2 word-animation stagger-3">based in</p>
                <br />
                <p className="mb-2 word-animation stagger-4">Kandy</p>
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

          {/* Portfolio Section - Mobile Responsive */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Portfolio Text */}
            <div className="scroll-animate order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-light text-yellow-400 mb-6 sm:mb-8 glow-text">
                <span className="text-reveal">portfolio</span>
              </h2>

              <div className="text-sm leading-relaxed mb-6 sm:mb-8 scroll-animate stagger-1">
                <p className="word-animation">
                  User experience design, product design, interface design,
                  design systems and digital transformation projects. I always
                  work with innovative approaches based on user research and
                  data-driven decisions.
                </p>
              </div>

              <button className="text-sm border border-gray-600 px-6 py-3 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 mb-8 sm:mb-12 scroll-animate stagger-2 transform hover:scale-105">
                portfolio
              </button>

              {/* Projects List */}
              <div className="mb-8 scroll-animate stagger-3">
                <h3 className="text-lg text-white mb-6 text-reveal">
                  PROJECTS
                </h3>
                <div className="space-y-4 text-sm">
                  {[
                    {
                      name: "ODINOR",
                      year: "2024",
                      type: "CLOTHING WEBSITE",
                    },
                    {
                      name: "EDUCATION ONE",
                      year: "2023",
                      type: "EDUCATION WEBSITE",
                    },
                    {
                      name: "MEDICAL APP",
                      year: "2025",
                      type: "POS SYSTREM",
                    },
                    { name: "MOBILE APP", year: "2022", type: "UX DESIGN" },
                  ].map((project, index) => (
                    <div
                      key={project.name}
                      className={`word-animation stagger-${index + 1} hover:text-yellow-400 transition-colors duration-300 cursor-pointer`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-xs sm:text-sm">
                          {project.name}
                        </span>
                        <span className="text-gray-400 text-xs sm:text-sm">
                          {project.year}
                        </span>
                      </div>
                      <div className="text-gray-400 text-xs mt-1">
                        {project.type}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-xs text-gray-500 mt-8 sm:mt-12 scroll-animate stagger-4">
                <p className="word-animation stagger-1">
                  Experience web- Designer
                </p>
                <p className="mt-4 sm:mt-8 word-animation stagger-2">2025</p>
              </div>
            </div>

            {/* Portfolio Showcase */}
            <div className="relative scroll-animate stagger-2 order-1 lg:order-2">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-6 sm:p-8 text-center relative overflow-hidden min-h-80 sm:min-h-96 scale-in hover:scale-105 transition-transform duration-500 cursor-pointer">
                <div className="text-white text-xs uppercase tracking-wide mb-4 opacity-80 word-animation stagger-1">
                  UX/UI DESIGN
                  <br />
                  NAMAL EKANAYAKA
                </div>

                <div className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  <span className="word-animation stagger-2">
                    User Experience
                  </span>
                  <br />
                  <span className="word-animation stagger-3">Design</span>
                </div>

                <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-6">
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

                {/* Background pattern - simplified for mobile */}
                <div className="absolute inset-0 opacity-5 hidden sm:block">
                  <div className="text-xs text-white leading-tight h-full overflow-hidden">
                    {Array(10)
                      .fill(undefined)
                      .map((_, i) => (
                        <div key={i}>
                          EXPERIENCE DESIGN • UX/UI • PRODUCT DESIGN • USER
                          RESEARCH •
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Gost />

        {/* Featured Projects section */}
        <div className="mt-16 sm:mt-24 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-8 sm:h-16 bg-gradient-to-b from-yellow-400 to-transparent"></div>

          {/* Projects section */}
          <div className="text-black rounded-lg p-4 sm:p-8 mb-8 sm:mb-12">
            <Project />
          </div>

          {/* Service section */}
          <div className="bg-white text-black rounded-lg p-4 sm:p-8">
            <Service />
          </div>
        </div>
      </div>
    </div>
  );
}
