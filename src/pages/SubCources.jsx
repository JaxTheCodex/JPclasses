import React, { useState } from 'react';
import ui1 from '../assets/ui1.png'
import ui2 from '../assets/ui2.png'
import ui3 from '../assets/ui3.jpg'
import ui4 from '../assets/ui4.png'

import web1 from '../assets/web1.png'
import web2 from '../assets/web2.jpg'
import web3 from '../assets/web3.png'
import web4 from '../assets/web4.jpg'

import gd1 from '../assets/gd1.jpeg'
import gd2 from '../assets/gd2.jpeg'
import gd3 from '../assets/gd3.jpg'
import gd4 from '../assets/gd4.jpg'

import ve1 from '../assets/ve1.png'
import ve2 from '../assets/ve2.jpg'
import ve3 from '../assets/ve3.png'
import ve4 from '../assets/ve4.jpg'

import image1 from '../assets/test1.png';
import image2 from '../assets/test2.png';
import image3 from '../assets/test3.png';
import image4 from '../assets/test4.png';
import image5 from '../assets/test5.png';

const courseData = [
  // UI/UX Designing Courses
  {
    id: 1,
    category: 'UI/UX Designing',
    title: 'Mastering UI/UX Design',
    description: 'Learn to create stunning and user-friendly interfaces.',
    rating: 4.7,
    thumbnail: ui1,
    teacherName: 'Ayesha Sharma',
    teacherPhoto: image1,
    price: 6999,
    duration: '3 months',
  },
  {
    id: 2,
    category: 'UI/UX Designing',
    title: 'UI/UX Fundamentals',
    description: 'Understand the basics of great UX and UI design.',
    rating: 4.6,
    thumbnail: ui2,
    teacherName: 'Karan Mehta',
    teacherPhoto: image2,
    price: 4999,
    duration: '2 months',
  },
  {
    id: 3,
    category: 'UI/UX Designing',
    title: 'Design Thinking Mastery',
    description: 'Apply design thinking to real-world problems.',
    rating: 4.8,
    thumbnail: ui3,
    teacherName: 'Sneha Kapoor',
    teacherPhoto: image3,
    price: 7999,
    duration: '2.5 months',
  },
  {
    id: 4,
    category: 'UI/UX Designing',
    title: 'Prototyping with Figma',
    description: 'Master Figma to create interactive UI prototypes.',
    rating: 4.7,
    thumbnail: ui4,
    teacherName: 'Manish Singh',
    teacherPhoto: image4,
    price: 7499,
    duration: '3 months',
  },

  // Web Development Courses
  {
    id: 5,
    category: 'Web Development',
    title: 'Frontend developer the beginner course',
    description: 'Become a frontend web developer.',
    rating: 4.8,
    thumbnail: web1,
    teacherName: 'Rohit Verma',
    teacherPhoto: image5,
    price: 8499,
    duration: '4 months',
  },
  {
    id: 6,
    category: 'Web Development',
    title: 'Frontend Web Development',
    description: 'Learn React, Tailwind, and JavaScript fundamentals.',
    rating: 4.7,
    thumbnail: web2,
    teacherName: 'Ananya Chatterjee',
    teacherPhoto: image1,
    price: 7499,
    duration: '3.5 months',
  },
  {
    id: 7,
    category: 'Web Development',
    title: 'MERN Stack full course',
    description: 'Learn Express, MongoDB, and API building.',
    rating: 4.6,
    thumbnail: web3,
    teacherName: 'Siddharth Kumar',
    teacherPhoto: image2,
    price: 7999,
    duration: '3 months',
  },
  {
    id: 8,
    category: 'Web Development',
    title: 'Responsive Web Design',
    description: 'Create beautiful responsive websites with HTML/CSS.',
    rating: 4.5,
    thumbnail: web4,
    teacherName: 'Neha Gupta',
    teacherPhoto: image3,
    price: 5999,
    duration: '2.5 months',
  },

  // Graphic Designing Courses
  {
    id: 9,
    category: 'Graphic Designing',
    title: 'Graphic Design Masterclass',
    description: 'Master Photoshop, Illustrator, and more.',
    rating: 4.6,
    thumbnail: gd1,
    teacherName: 'Priya Singh',
    teacherPhoto: image4,
    price: 5999,
    duration: '2.5 months',
  },
  {
    id: 10,
    category: 'Graphic Designing',
    title: 'Logo Design Fundamentals',
    description: 'Design eye-catching logos with Illustrator.',
    rating: 4.5,
    thumbnail: gd2,
    teacherName: 'Rajiv Menon',
    teacherPhoto: image5,
    price: 4999,
    duration: '2 months',
  },
  {
    id: 11,
    category: 'Graphic Designing',
    title: 'Adobe Photoshop Essentials',
    description: 'Learn Photoshop tools, layers, and retouching skills.',
    rating: 4.7,
    thumbnail: gd3,
    teacherName: 'Megha Bhatt',
    teacherPhoto: image1,
    price: 5999,
    duration: '2.5 months',
  },
  {
    id: 12,
    category: 'Graphic Designing',
    title: 'Social Media Graphics Design',
    description: 'Create stunning graphics for Instagram, Facebook, and more.',
    rating: 4.6,
    thumbnail: gd4,
    teacherName: 'Saurav Jain',
    teacherPhoto: image2,
    price: 5499,
    duration: '2 months',
  },

  // Video Editing Courses
  {
    id: 13,
    category: 'Video Editing',
    title: 'Complete Video Editing Course',
    description: 'Learn Premiere Pro, After Effects, and editing techniques.',
    rating: 4.5,
    thumbnail: ve1,
    teacherName: 'Vikas Gupta',
    teacherPhoto: image3,
    price: 6499,
    duration: '3 months',
  },
  {
    id: 14,
    category: 'Video Editing',
    title: 'Editing YouTube Videos like a Pro',
    description: 'Special course for YouTubers and influencers.',
    rating: 4.6,
    thumbnail: ve2,
    teacherName: 'Tanya Bansal',
    teacherPhoto: image4,
    price: 4999,
    duration: '2.5 months',
  },
  {
    id: 15,
    category: 'Video Editing',
    title: 'Motion Graphics and Animation',
    description: 'Create motion graphics using After Effects.',
    rating: 4.7,
    thumbnail: ve3,
    teacherName: 'Aditya Rao',
    teacherPhoto: image4,
    price: 7999,
    duration: '3 months',
  },
  {
    id: 16,
    category: 'Video Editing',
    title: 'Mobile Video Editing with Kinemaster',
    description: 'Edit videos professionally using just your smartphone.',
    rating: 4.5,
    thumbnail: ve4,
    teacherName: 'Divya Narayan',
    teacherPhoto: image1,
    price: 3999,
    duration: '1.5 months',
  },
];

const categories = ['UI/UX Designing', 'Web Development', 'Graphic Designing', 'Video Editing'];

const SubCources = () => {
  const [selectedCategory, setSelectedCategory] = useState('UI/UX Designing');
  const [searchQuery, setSearchQuery] = useState('');


  const filteredCourses = courseData.filter(
    (course) =>
      course.category === selectedCategory &&
      (course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="py-10 px-5 mx-auto bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 text-white flex justify-center">
      <div className="max-w-7xl w-full">
        <h2 className="text-3xl font-bold text-center mt-18 mb-8">Coding Courses</h2>
  
        {/* 🔍 Search Bar */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full md:w-1/2 px-5 py-3 rounded-full text-white bg-white/20 placeholder-white focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-lg transition-all duration-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
  
        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300
                ${selectedCategory === cat
                ? 'bg-blue-600 text-white'
                : 'border border-white text-white hover:bg-blue-600 hover:border-blue-600 hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>
  
        {/* Courses */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col max-w-[350px] min-h-[400px]"
            >
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
  
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {course.title}
                </h3>
  
                {/* Rating */}
                <div className="flex items-center text-yellow-500 mb-2">
                  <i className="fas fa-star mr-1"></i> {course.rating}/5
                </div>
  
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 overflow-hidden">
                  {course.description}
                </p>
  
                {/* Teacher Info */}
                <div className="flex items-center mt-auto">
                  <img
                    src={course.teacherPhoto}
                    alt={course.teacherName}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{course.teacherName}</p>
                    <p className="text-xs text-gray-500">{course.duration}</p>
                  </div>
                </div>
  
                {/* Price & Duration */}
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-blue-600">₹{course.price}</span>
                  <span className="text-gray-400 text-sm">
                    <i className="far fa-clock mr-1"></i>{course.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default SubCources;
