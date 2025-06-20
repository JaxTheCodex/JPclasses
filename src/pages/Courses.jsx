import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const classSubjects = {
  'Class 1–5': ['English', 'Hindi', 'Mathematics', 'EVS', 'Moral Science (optional)'],
  'Class 6–8': [
    'Mathematics',
    'Science (Physics, Chemistry, Biology basics)',
    'English Grammar & Literature',
    'Hindi',
    'Social Science (Geography, History, Civics)',
  ],
  'Class 9–10': [
    'Mathematics (NCERT + RS Aggarwal/RD Sharma)',
    'Science (Physics, Chemistry, Biology)',
    'English (Literature + Grammar)',
    'Social Science (History, Civics, Geography, Economics)',
    'Hindi',
  ],
};

const codingCourses = [
  {
    level: 'Beginner',
    courses: [
      {
        title: 'HTML & CSS',
        description: 'Structure and design of websites. Projects: Personal site, Resume page.',
        duration: '2–4 weeks',
      },
      {
        title: 'JavaScript (Basic)',
        description: 'Logic & interactivity. Projects: Calculator, Quiz Game.',
        duration: '4 weeks',
      },
    ],
  },
  {
    level: 'Intermediate',
    courses: [
      {
        title: 'C Programming',
        description: 'Loops, Arrays, Pointers. Great for school/college curriculum.',
        duration: '6 weeks',
      },
      {
        title: 'C++ Programming',
        description: 'OOP concepts: Classes, Objects, Inheritance.',
        duration: '8 weeks',
      },
    ],
  },
  {
    level: 'Advanced',
    courses: [
      {
        title: 'React.js',
        description: 'JSX, props, hooks. Projects: Todo App, Portfolio.',
        duration: '2–3 months',
      },
      {
        title: 'Front-End Full Bundle',
        description: 'HTML + CSS + JS + React. Build dynamic web apps.',
        duration: '3 months',
      },
    ],
  },
];

const Courses = () => {
  const [tab, setTab] = useState('Class 1–5');

  return (
    <div className="bg-gradient-to-br from-purple-700 via-pink-600 to-yellow-400 text-white py-20 px-6 font-[Orbitron] mt-24">
      <h2 className="text-4xl font-bold text-center mb-14 drop-shadow-md">📘 Courses Offered</h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {['Class 1–5', 'Class 6–8', 'Class 9–10', 'Coding Courses'].map((item) => (
          <button
            key={item}
            onClick={() => setTab(item)}
            className={`px-6 py-2 rounded-full font-semibold border text-sm uppercase tracking-wide transition-all duration-300
              ${
                tab === item
                  ? 'bg-white text-blue-700 shadow-lg scale-105'
                  : 'bg-transparent border-white text-white hover:bg-white hover:text-blue-600'
              }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Subject List */}
      {tab !== 'Coding Courses' ? (
        <div className="max-w-4xl mx-auto bg-white text-gray-800 rounded-3xl shadow-2xl p-10 relative z-10">
          <h3 className="text-3xl font-bold mb-6 text-blue-600 border-b pb-2">{tab}</h3>
          <ul className="list-disc list-inside space-y-2 text-lg mb-6">
            {classSubjects[tab].map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul>
          <div className="text-gray-700 text-sm space-y-1">
            <p>✨ Fun, interactive learning with attention to handwriting, concepts & speed.</p>
            <p>📘 Weekly tests, doubt-clearing, board prep with digital resources.</p>
            <p>🎯 Mode: Online / Home Tuition | Medium: English / Hindi</p>
          </div>
          <div className="mt-6 text-center">
            <Link to='/register' className="bg-blue-600 hover:bg-blue-700 transition-all px-6 py-2 rounded-full text-white font-semibold shadow-md hover:scale-105">
              Enroll Now
            </Link>
          </div>
        </div>
      ) : (
        // Coding Courses Cards
<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
  {codingCourses.map((group, idx) => (
    <div
      key={idx}
      className="bg-white/90 backdrop-blur-md text-gray-900 rounded-3xl shadow-2xl p-6 hover:shadow-blue-400 hover:scale-[1.03] transition-all duration-300 border-t-4 border-blue-600"
    >
      {/* Course Level Tag */}
      <span className="inline-flex items-center gap-2 text-xs bg-blue-600 text-white px-3 py-1 rounded-full font-semibold mb-5 shadow">
        🚀 {group.level} Level
      </span>

      {/* Course Details */}
      <div className="space-y-6">
        {group.courses.map((course, i) => (
          <div
            key={i}
            className="group relative border-l-4 border-blue-300 pl-4 py-3 rounded-md bg-white hover:bg-blue-50 transition-all"
          >
            <h5 className="font-bold text-lg text-blue-800 mb-1">{course.title}</h5>
            <p className="text-sm text-gray-700">{course.description}</p>
            <div className="mt-2 flex flex-wrap items-center text-xs text-gray-500 gap-x-3">
              <span className="inline-flex items-center gap-1">
                ⏳ <strong>{course.duration}</strong>
              </span>
              <span className="inline-flex items-center gap-1">
                🎓 Certificate: <strong>Yes</strong>
              </span>
              <span className="inline-flex items-center gap-1">
                🖥 Mode: <strong>Online</strong>
              </span>
              <span className="inline-flex items-center gap-1">
                🗣️ Medium: <strong>English / Hindi</strong>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-6">
        <Link
          to="/subcources"
          className="inline-block text-sm font-bold text-blue-700 hover:text-blue-900 hover:underline transition"
        >
          🔍 View All Courses →
        </Link>
      </div>
    </div>
  ))}
</div>

      )}
    </div>
  );
};

export default Courses;
