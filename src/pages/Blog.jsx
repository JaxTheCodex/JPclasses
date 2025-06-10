import React, { useState } from 'react';
import { motion } from 'framer-motion';

import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';
import blog4 from '../assets/blog4.jpg';
import blog5 from '../assets/blog5.jpg';
import blog6 from '../assets/blog6.jpg';

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      title: 'Boost Your Coding Skills With These Tips',
      author: 'John Doe',
      date: 'April 30, 2025',
      comments: 12,
      image: blog1,
      description:
        'Discover effective tips and practices to improve your coding productivity, habits, and skill set. Read more to explore daily routines, tool recommendations, and real-life case studies from professionals.',
    },
    {
      title: 'Design Thinking for Developers',
      author: 'Jane Smith',
      date: 'April 25, 2025',
      comments: 8,
      image: blog2,
      description:
        'Learn how to apply design thinking to development to create more user-friendly applications. Understand empathizing with users, prototyping fast, and iterating quickly in agile environments.',
    },
    {
      title: 'Top Tools Every Frontend Developer Should Know',
      author: 'Alex Johnson',
      date: 'April 20, 2025',
      comments: 16,
      image: blog3,
      description:
        'Explore the latest tools and frameworks that can supercharge your frontend workflow, from code editors and CSS preprocessors to browser extensions and performance testing tools.',
    },
    {
      title: 'Mastering Git and GitHub for Team Collaboration',
      author: 'Emily Carter',
      date: 'April 18, 2025',
      comments: 10,
      image: blog4,
      description:
        'Gain in-depth knowledge about Git and GitHub workflows to improve your team’s collaboration, from branching strategies to pull requests and conflict resolution.',
    },
    {
      title: 'A Beginner’s Guide to Fullstack Development',
      author: 'Michael Lee',
      date: 'April 15, 2025',
      comments: 14,
      image: blog5,
      description:
        'Understand the fundamentals of becoming a fullstack developer, covering both frontend and backend technologies, database basics, and deployment techniques.',
    },
    {
      title: 'How to Build Accessible Websites',
      author: 'Sophia Turner',
      date: 'April 10, 2025',
      comments: 7,
      image: blog6,
      description:
        'Learn best practices for building accessible websites that meet WCAG standards and ensure your applications are usable for all, including those with disabilities.',
    },
  ];
  

  return (
    <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 min-h-screen py-16 px-6 text-white font-sans md:mt-16 mt-28">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-14 font-orbitron">Our Latest Blogs
      </h2>

      <div className="grid gap-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-w-7xl mx-auto items-center justify-items-center">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-cyan-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/30 transition-all duration-300  max-w-[350px] min-h-[400px]"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-52 object-cover" />
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-cyan-500">{blog.title}</h3>
              <p className="text-gray-500 text-sm line-clamp-3">{blog.description}</p>
              <div className="flex items-center justify-between text-gray-500 text-xs">
                <div><i className="fas fa-user text-pink-500 mr-1" /> {blog.author}</div>
                <div><i className="fas fa-calendar-alt text-green-400 mr-1" /> {blog.date}</div>
                <div><i className="fas fa-comments text-yellow-400 mr-1" /> {blog.comments}</div>
              </div>
              <button
                onClick={() => setSelectedBlog(blog)}
                className="mt-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium rounded transition"
              >
                Read More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Blog Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 bg-opacity-70 z-50 flex items-center justify-center p-6 ">
          <div className="bg-white text-white max-w-2xl w-full rounded-xl p-8 relative border border-cyan-500">
            <button
              className="absolute top-4 right-4 text-cyan-400 text-xl hover:text-red-500"
              onClick={() => setSelectedBlog(null)}
            >
              <i className="fas fa-times" />
            </button>
            <h3 className="text-2xl font-bold text-cyan-500 mb-2">{selectedBlog.title}</h3>
            <p className="text-gray-500 mb-4">{selectedBlog.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-400">
              <div><i className="fas fa-user text-pink-500 mr-1" /> {selectedBlog.author}</div>
              <div><i className="fas fa-calendar-alt text-green-500 mr-1" /> {selectedBlog.date}</div>
              <div><i className="fas fa-comments text-yellow-500 mr-1" /> {selectedBlog.comments}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;

