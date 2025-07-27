import React from "react";
import Project from "./Components/Project";
import Navbar from "./Components/navbar";
import Image from "next/image";
import Service from "./Components/Service";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Main content */}
      <div className="container mx-auto px-4 py-16 font-sans">
        {/* Yellow accent line */}
        <div className="flex justify-center mb-12"></div>

        {/* Main content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-8">
            Namal Ekanayaka is
            <br />
            <span className="block">Experience Designer</span>
            <span className="block">at Hotjar</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-700 mb-16 font-normal">
            15 years of Design. Brazilian. Berlin based.
          </p>

          {/* Profile image */}

          {/* Profile image */}
          <div className="flex justify-center mb-16">
            <div className="w-80 h-80 sm:w-96 sm:h-96 relative bg-gray-200 rounded-lg overflow-hidden shadow-lg">
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

          {/* Description */}
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Crafting digital experiences that blend beautiful design with
              powerful functionality. Lets build something{" "}
              <span className="text-gray-900 font-medium">extraordinary</span>{" "}
              together.
            </p>
          </div>
        </div>

        {/* Projects section */}
        <div className="mt-24 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-yellow-400 to-transparent"></div>
          <Project />
          <Service />
        </div>
      </div>
    </div>
  );
}
