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
              Welcome to <strong className="text-cyan-400">JP Classes</strong> — your one-stop destination for personalized learning and digital skill development.
              We offer academic support from <strong>Class 1 to 10</strong>, along with hands-on training in <strong>programming</strong>, <strong>web development</strong>, <strong>UI/UX design</strong>, <strong>graphic designing</strong>, and <strong>video editing</strong>.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you're a student looking to strengthen your foundation or a learner eager to build tech skills, we provide the right resources through both <strong>online classes</strong> and <strong>home tuition</strong>.
              Our mission is to make learning fun, practical, and future-ready.
            </p>
          </div>

          {/* Right: Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start">
              <i className="fas fa-book text-yellow-300 text-2xl mr-3 mt-1"></i>
              <div>
                <h4 className="font-semibold text-lg">Class 1–10 Tuition</h4>
                <p className="text-sm text-gray-300">Subject-wise academic guidance for school students with board prep and mock tests.</p>
              </div>
            </div>

            <div className="flex items-start">
              <i className="fas fa-code text-cyan-400 text-2xl mr-3 mt-1"></i>
              <div>
                <h4 className="font-semibold text-lg">Coding & Programming</h4>
                <p className="text-sm text-gray-300">Learn HTML, CSS, JavaScript, React, C, and C++ — from basics to advanced levels.</p>
              </div>
            </div>

            <div className="flex items-start">
              <i className="fas fa-pencil-ruler text-pink-300 text-2xl mr-3 mt-1"></i>
              <div>
                <h4 className="font-semibold text-lg">UI/UX & Graphic Design</h4>
                <p className="text-sm text-gray-300">Design intuitive and beautiful interfaces and visuals using modern tools like Figma and Photoshop.</p>
              </div>
            </div>

            <div className="flex items-start">
              <i className="fas fa-video text-red-300 text-2xl mr-3 mt-1"></i>
              <div>
                <h4 className="font-semibold text-lg">Video Editing</h4>
                <p className="text-sm text-gray-300">Master Premiere Pro, After Effects, and mobile apps to create professional videos.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-14 text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to Begin Your Learning Journey?</h3>
          <Link
            to="/courses"
            className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all"
          >
            Explore Our Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
