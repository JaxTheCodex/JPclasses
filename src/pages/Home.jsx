import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from "react";



// Importing images from assets folder
import classroom from '../assets/classroom.jpg';
import coding from '../assets/coding.jpg';
import students from '../assets/students.jpg';
import onlineLearning from '../assets/online-learning.jpg';

const images = [
  {
    src: classroom,
    title: "Learn with Experts",
    description: "Smart classrooms to boost your knowledge."
  },
  {
    src: coding,
    title: "Master Coding",
    description: "HTML, CSS, JavaScript, React, and more."
  },
  {
    src: students,
    title: "Achieve Excellence",
    description: "Join thousands of successful students."
  },
  {
    src: onlineLearning,
    title: "Flexible Learning",
    description: "Learn anytime, anywhere with online classes."
  }
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [votes, setVotes] = useState([
    { up: 0, down: 0 }, // Testimonial 1
    { up: 0, down: 0 }, // Testimonial 2
    { up: 0, down: 0 }, // Testimonial 3
    { up: 0, down: 0 }, // Testimonial 4
  ]);

  const handleVote = (index, type) => {
    const updatedVotes = [...votes]; // Create a copy of the votes array
    if (type === 'up') {
      updatedVotes[index].up += 1; // Increment upvote for the clicked testimonial
    } else {
      updatedVotes[index].down += 1; // Increment downvote for the clicked testimonial
    }
    setVotes(updatedVotes); // Update the state with the new votes
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 1 second interval

    return () => clearInterval(interval); // Cleanup when unmounted
  }, []);


  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div id="Home" className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 text-white overflow-hidden relative mt-12 md:mt-8">


      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-6xl font-extrabold text-center drop-shadow-lg mt-8"
      >
        Welcome to JP Classes
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-xl mb-8 text-center max-w-2xl px-4"
      >
        Best Tuition for Class 1-10 (All Subjects) and Advanced Coding Classes: HTML, CSS, JavaScript, React, C, C++, Java, Python.
      </motion.p>

      {/* View Courses Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Link
          to="/courses"
          className="bg-white text-purple-700 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-purple-100 transition-all duration-300"
        >
          View Courses
        </Link>
      </motion.div>

      {/* Carousel */}
      <div className="relative w-full max-w-4xl mt-8 px-4">
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          {/* Image */}
          <motion.img
            key={current}
            src={images[current].src}
            alt="Smart Classes"
            className="w-full h-64 md:h-96 object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Soft overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent flex flex-col items-center justify-center text-center p-6">
            {/* Title */}
            <motion.h2
              key={images[current].title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-4xl font-bold mb-2"
            >
              {images[current].title}
            </motion.h2>

            {/* Description */}
            <motion.p
              key={images[current].description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-md md:text-lg"
            >
              {images[current].description}
            </motion.p>
          </div>
        </div>

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-8  transform -translate-y-1/2  text-white p-3 rounded-full shadow hover:bg-purple-200 hover:text-purple-600 transition"
        >
          ❮
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-8 transform -translate-y-1/2  text-white p-3 rounded-full shadow hover:bg-purple-200 hover:text-purple-600 transition"
        >
          ❯
        </button>
      </div>

      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 top-1/2 left-1/3 animate-blob"></div>
        <div className="absolute w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 top-1/4 left-2/3 animate-blob animation-delay-4000"></div>
      </div>
    </div>
  )
}

export default Home;
