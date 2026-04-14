export default function About() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Image */}
        <div className="flex justify-center">
          <div className="p-2 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-3xl">
            <img
              src="/profile.png"
              alt="about"
              className="w-72 md:w-96 rounded-2xl object-cover shadow-xl"
            />
          </div>
        </div>

        {/* Right Content */}
        <div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            About Me
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Hello! I'm a passionate Frontend Developer who loves building modern, 
            responsive, and user-friendly websites. I enjoy working with technologies 
            like React, Next.js, and Tailwind CSS.
          </p>

          <p className="text-gray-500 mb-6 leading-relaxed">
            I am currently learning full-stack development including PHP and Laravel. 
            My goal is to become a professional software engineer and work on real-world projects.
          </p>

          {/* Skills */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-700">
              Skills
            </h3>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm">HTML</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm">CSS</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm">JavaScript</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm">React</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm">Next.js</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm">Tailwind CSS</span>
            </div>
          </div>

          {/* Button */}
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
            Download CV
          </button>

        </div>

      </div>

    </section>
  );
}