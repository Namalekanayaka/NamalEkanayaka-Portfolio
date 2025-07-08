import { X } from "lucide-react";
import Image from "next/image";

export default function ProjectModal({ project, onClose, onNext, onPrev }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50 p-2 sm:p-4">
      <div className="bg-gray-900 rounded-xl sm:rounded-2xl w-full max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl max-h-[98vh] sm:max-h-[95vh] overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-[1.01]">
        {/* Responsive Header Section */}
        <div className="relative bg-gradient-to-r from-gray-800 to-gray-850 p-4 sm:p-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex-1 pr-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-50 mb-2 tracking-tight line-clamp-2">
                {project.title}
              </h2>
              <div className="h-1 w-12 sm:w-16 lg:w-20 bg-purple-500 rounded-full"></div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-purple-200 transition-all duration-200 hover:rotate-90 transform p-2 rounded-full hover:bg-gray-800 flex-shrink-0"
            >
              <X size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-4 sm:p-6 lg:p-8 overflow-y-auto max-h-[calc(95vh-160px)]">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {/* Left Column - Content */}
            <div className="space-y-4 sm:space-y-6 order-2 xl:order-1">
              {/* Description Card */}
              <div className="bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-purple-500/30 transition-colors duration-300">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-3 sm:mb-4 flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Project Overview
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3 sm:mb-4">
                  {project.description}
                </p>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Tech Stack Card */}
              <div className="bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-purple-500/30 transition-colors duration-300">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-3 sm:mb-4 flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-purple-500/20 text-purple-200 rounded-full border border-purple-500/30 hover:bg-purple-500/30 hover:border-purple-400/50 transition-all duration-200 cursor-default transform hover:scale-105"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="space-y-4 sm:space-y-6 order-1 xl:order-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500/30 transition-all duration-300">
                  <div className="relative w-full h-48 sm:h-64 md:h-80 xl:h-96">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Footer with Navigation */}
        <div className="bg-gray-800 border-t border-gray-700 p-3 sm:p-4">
          <div className="flex justify-between items-center">
            <button
              onClick={onPrev}
              className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-400 hover:text-purple-200 transition-colors duration-200 hover:bg-gray-700 rounded-lg"
            >
              <span>← Prev</span>
            </button>

            <div className="flex space-x-1 sm:space-x-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-600 rounded-full"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-600 rounded-full"></div>
            </div>

            <button
              onClick={onNext}
              className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-400 hover:text-purple-200 transition-colors duration-200 hover:bg-gray-700 rounded-lg"
            >
              <span>Next →</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
