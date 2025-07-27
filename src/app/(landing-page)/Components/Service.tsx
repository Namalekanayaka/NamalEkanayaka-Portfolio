"use client";

import React from "react";

export default function N26ProjectPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Project identifier */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">N26</h2>
        </div>

        {/* Main heading */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-8">
            A home for the
            <br />
            <span className="relative">
              easier-than-ever
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-yellow-400 rounded"></div>
            </span>
            <br />
            finances
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            From bills to budgeting, money management can be challenging. Check
            out the design process of redesigning the Home screen and
            Transaction of one of Europes first completely mobile banks.
          </p>
        </div>

        {/* Phone mockup */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            <div className="w-80 h-[600px] bg-black rounded-[3rem] p-3 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                {/* Status bar */}
                <div className="flex justify-between items-center px-6 py-2 text-xs text-gray-900">
                  <span>9:41</span>
                  <div className="flex space-x-1">
                    <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                    <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                    <div className="w-4 h-2 bg-gray-900 rounded-sm"></div>
                  </div>
                </div>

                {/* App content */}
                <div className="px-6 py-4">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      €1,234.56
                    </h3>
                    <p className="text-sm text-gray-600">Available balance</p>
                  </div>

                  {/* Action buttons */}
                  <div className="flex justify-center space-x-4 mb-8">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Transaction list */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        <div>
                          <p className="text-sm font-medium">Spotify</p>
                          <p className="text-xs text-gray-500">Music & Audio</p>
                        </div>
                      </div>
                      <span className="text-sm font-medium">-€9.99</span>
                    </div>

                    <div className="flex justify-between items-center py-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        <div>
                          <p className="text-sm font-medium">Salary</p>
                          <p className="text-xs text-gray-500">
                            Monthly income
                          </p>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-green-600">
                        +€3,500.00
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        <div>
                          <p className="text-sm font-medium">Grocery Store</p>
                          <p className="text-xs text-gray-500">Food & Drink</p>
                        </div>
                      </div>
                      <span className="text-sm font-medium">-€45.67</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom metrics */}
        <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">N</span>
            </div>
            <div>
              <p className="font-semibold text-gray-900">N26</p>
              <div className="flex text-yellow-400 text-sm">
                {"★".repeat(5)}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">+8</span>
            </div>
            <div>
              <p className="font-semibold text-gray-900">+8 millions</p>
              <p className="text-gray-600 text-sm">customers</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">F</span>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Worlds best</p>
              <p className="text-gray-600 text-sm">Banks</p>
            </div>
          </div>

          <div className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors cursor-pointer">
            <span className="font-medium">N26 Case Study →</span>
          </div>
        </div>
      </div>
    </div>
  );
}
