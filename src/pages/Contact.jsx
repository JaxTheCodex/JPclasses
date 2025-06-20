import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen px-4 py-12 bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 mt-32 md:mt-16">
      {/* Heading */}
      <header className="text-center mb-4">
        <h1 className="text-5xl font-bold text-white drop-shadow-sm mb-3">Contact Us</h1>
        <p className="text-white text-lg">We’re here to help and answer any questions you might have.</p>
      </header>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
        {/* Contact Form */}
        <form
          action="https://formsubmit.co/jagarnathpatro861@gmail.com" // 
          method="POST"
          className="bg-white/70 backdrop-blur-md p-10 rounded-xl shadow-2xl space-y-6 border border-white/70 flex flex-col h-full"
          aria-label="Contact Form"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-500 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-500 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full border border-gray-500 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Your message here..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg text-lg font-semibold hover:scale-105 transition-transform duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Embedded Google Map */}
        <div className="rounded-xl overflow-hidden shadow-2xl border border-white/20 flex flex-col h-full">
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14046.126150135595!2d86.15777425040403!3d23.666060059645027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f423d31afc2879%3A0xfad0522040b6280a!2sSector%205%2C%20Bokaro%20Steel%20City%2C%20Jharkhand%20827006!5e1!3m2!1sen!2sin!4v1746062360679!5m2!1sen!2sin"
            width="100%"
            height="100%"  // This will make the map take up the full height of its parent container
            allowFullScreen=""
            loading="lazy"
            className="w-full h-full border-0"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
