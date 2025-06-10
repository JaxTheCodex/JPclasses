import React from 'react';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about-us" className="bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 text-white min-h-screen py-16 px-4 sm:px-6 lg:px-20 mt-28 md:mt-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          <i className="fas fa-info-circle text-cyan-400 mr-2"></i>About Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Overview */}
          <div>
            <p className="text-lg leading-relaxed mb-4">
              Welcome to <strong className="text-cyan-400">JP Classes</strong> — your gateway to mastering future-proof skills.
              We offer high-quality online courses in Web Development, UI/UX Design, Graphic Design, and Video Editing.
            </p>
            <p className="text-lg leading-relaxed">
              Beyond education, we also build modern websites and applications for businesses,
              offer expert SEO optimization, and run impactful digital marketing campaigns.
            </p>
          </div>

          {/* Right: Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start">
              <i className="fas fa-laptop-code text-cyan-400 text-2xl mr-3 mt-1"></i>
              <div>
                <h4 className="font-semibold text-lg">Web Development</h4>
                <p className="text-sm text-gray-300">Build responsive, modern websites and web apps.</p>
              </div>
            </div>

            <div className="flex items-start">
              <i className="fas fa-paint-brush text-pink-400 text-2xl mr-3 mt-1"></i>
              <div>
                <h4 className="font-semibold text-lg">UI/UX & Graphic Design</h4>
                <p className="text-sm text-gray-300">Craft visually stunning and user-friendly designs.</p>
              </div>
            </div>

            <div className="flex items-start">
              <i className="fas fa-video text-yellow-400 text-2xl mr-3 mt-1"></i>
              <div>
                <h4 className="font-semibold text-lg">Video Editing</h4>
                <p className="text-sm text-gray-300">Learn the art of editing engaging video content.</p>
              </div>
            </div>

            <div className="flex items-start">
              <i className="fas fa-bullhorn text-green-400 text-2xl mr-3 mt-1"></i>
              <div>
                <h4 className="font-semibold text-lg">Digital Marketing & SEO</h4>
                <p className="text-sm text-gray-300">Grow your brand through SEO and marketing strategies.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-14 text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to Level Up Your Skills?</h3>
          <Link
            to="/courses"
            className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all"
          >
            Explore Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;

