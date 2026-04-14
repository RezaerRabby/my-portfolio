export default function Contact() {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16 flex items-center justify-center">
      
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-2xl p-8 grid md:grid-cols-2 gap-10">
        
        {/* Left Info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Contact Me
          </h2>

          <p className="text-gray-500 mb-6">
            Feel free to contact me for any work or suggestions.
          </p>

          <div className="space-y-4 text-gray-600">
            <p>📧 Email: your@email.com</p>
            <p>📱 Phone: +880123456789</p>
            <p>📍 Location: Bangladesh</p>
          </div>
        </div>

        {/* Right Form */}
        <form className="space-y-4">
          
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}