import Project from "./Components/Project";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900">
      <div className="container mx-auto px-4 py-8 pb-20 sm:px-8 sm:py-20 font-[family-name:var(--font-geist-sans)]">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-10 -right-10 sm:w-[700px] sm:h-[700px] w-[350px] h-[350px] bg-purple-700/40 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-4 right-4 sm:w-[500px] sm:h-[500px] w-[200px] h-[200px] bg-purple-500/50 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute top-8 right-8 sm:w-[350px] sm:h-[350px] w-[120px] h-[120px] bg-purple-400/60 rounded-full blur-xl animate-pulse delay-2000"></div>

            <div className="absolute top-20 left-10 sm:w-[200px] sm:h-[200px] w-[80px] h-[80px] bg-purple-600/30 rounded-full blur-2xl animate-bounce"></div>
            <div className="absolute bottom-20 left-20 sm:w-[150px] sm:h-[150px] w-[60px] h-[60px] bg-purple-400/40 rounded-full blur-xl animate-pulse delay-3000"></div>
          </div>

          <div className="relative z-10 text-center">
            <div className="mb-8">
              <div className="inline-block">
                <span className="inline-block px-4 py-2 text-sm font-medium text-purple-300 bg-purple-900/50 rounded-full border border-purple-600/30 mb-6">
                  ✨ Welcome to my portfolio
                </span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Software Engineer
              </span>
              <span className="block bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                UI/UX Designer
              </span>
            </h1>

            <div className="mt-8 max-w-2xl mx-auto">
              <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed font-light">
                Crafting digital experiences that blend beautiful design with
                powerful functionality. Let's build something{" "}
                <span className="text-purple-400 font-medium">
                  extraordinary
                </span>{" "}
                together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row mt-12 gap-6 items-center justify-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:from-purple-700 hover:to-purple-800 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 active:scale-95">
                <span className="relative z-10 flex items-center gap-2">
                  About Me
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-200 to-amber-300 text-black font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:from-amber-300 hover:to-amber-400 hover:shadow-2xl hover:shadow-amber-400/25 hover:scale-105 active:scale-95">
                <span className="relative z-10 flex items-center gap-2">
                  Contact Me
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-amber-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-purple-500/50 rounded-tl-lg"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-purple-500/50 rounded-br-lg"></div>
          </div>
        </div>

        <div className="mt-24 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-purple-500 to-transparent"></div>
          <Project />
        </div>
      </div>
    </div>
  );
}
