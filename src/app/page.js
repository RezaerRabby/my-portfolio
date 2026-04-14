export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-6">
      
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div className="text-center md:text-left">
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-blue-600">Your Name</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
            Frontend Developer 🚀
          </h2>

          <p className="text-gray-500 mb-8">
            I build modern, responsive, and user-friendly websites using
            React, Next.js, and Tailwind CSS.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
              View Projects
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition">
              Contact Me
            </button>

          </div>

        </div>

        {/* Right Image */}
        {/* <div className="flex justify-center">
          <img
            src="/profile.png"
            alt="profile"
            className="w-72 md:w-96 rounded-2xl shadow-lg"
          />
        </div> */}


   

<div className="flex justify-center">
  <div className="bg-white/30 backdrop-blur-lg p-4 rounded-3xl shadow-xl">
    <img
      src="/profile.png"
      alt="profile"
      className="w-72 md:w-96 rounded-2xl object-cover"
    />
  </div>
</div>

      </div>

    </main>
  );
}