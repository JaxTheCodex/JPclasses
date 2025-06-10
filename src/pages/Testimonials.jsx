import { useState, useRef } from 'react';
import image1 from '../assets/test1.png';
import image2 from '../assets/test2.png';
import image3 from '../assets/test3.png';
import image4 from '../assets/test4.png';
import image5 from '../assets/test5.png';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    {
      text: '"My child absolutely loves this program!"',
      author: '- Parent of Emma',
      image: image1,
    },
    {
      text: '"Amazing instructors, I’ve learned so much!"',
      author: '- Student: John Doe',
      image: image3,
    },
    {
      text: '"This is the best educational platform out there!"',
      author: '- Parent: Lisa Walker',
      image: image4,
    },
    {
      text: '"Highly recommend to every student and parent!"',
      author: '- Parent: Sam Carter',
      image: image2,
    },
    {
      text: '"Very interactive and helpful!"',
      author: '- Student: Alice Green',
      image: image5,
    },
  ]);

  const [votes, setVotes] = useState(testimonials.map(() => ({ up: 0, down: 0 })));
  const [formData, setFormData] = useState({ text: '', author: '', image: null });
  const containerRef = useRef(null);

  const handleVote = (index, type) => {
    const newVotes = [...votes];
    if (type === 'up') {
      newVotes[index].up += 1;
    } else {
      newVotes[index].down += 1;
    }
    setVotes(newVotes);
  };

  const handleScroll = (direction) => {
    const container = containerRef.current;
    const cardWidth = container.offsetWidth / (window.innerWidth >= 768 ? 3 : 1);
    container.scrollBy({ left: direction === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' });
  };

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: URL.createObjectURL(files[0]) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.text && formData.author && formData.image) {
      setTestimonials([...testimonials, formData]);
      setVotes([...votes, { up: 0, down: 0 }]);
      setFormData({ text: '', author: '', image: null });
    }
  };

  return (
    <section className="bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 text-white py-20 relative mt-24 min-h-screen">
      <div className="w-[90%] max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-12">What Parents & Students Say</h2>

        {/* Scroll Buttons */}
        <button
          onClick={() => handleScroll('left')}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-indigo-800 p-3 rounded-full shadow-md hover:bg-indigo-900 z-10"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <div ref={containerRef} className="flex overflow-x-auto no-scrollbar scroll-smooth px-4 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[90%] sm:min-w-[60%] md:min-w-[30%] p-6 mx-2 bg-indigo-600 rounded-lg shadow-lg flex flex-col items-center flex-shrink-0"
            >
              <img
                src={testimonial.image}
                alt="Reviewer"
                className="w-16 h-16 rounded-full mb-6 object-cover"
              />
              <div className="text-center">
                <p className="italic text-lg">{testimonial.text}</p>
                <p className="font-semibold text-xl mt-4">{testimonial.author}</p>
                <div className="flex justify-center items-center gap-4 mt-4">
                  <button
                    onClick={() => handleVote(index, 'up')}
                    className={`cursor-pointer ${votes[index]?.up > 0 ? 'text-green-500' : ''}`}
                  >
                    <i className="fas fa-thumbs-up"></i>
                  </button>
                  <span className="text-sm">{votes[index]?.up}</span>
                  <button
                    onClick={() => handleVote(index, 'down')}
                    className={`cursor-pointer ${votes[index]?.down > 0 ? 'text-red-500' : ''}`}
                  >
                    <i className="fas fa-thumbs-down"></i>
                  </button>
                  <span className="text-sm">{votes[index]?.down}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => handleScroll('right')}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-indigo-800 p-3 rounded-full shadow-md hover:bg-indigo-900 z-10"
        >
          <i className="fas fa-chevron-right"></i>
        </button>

        {/* Testimonial Form */}
        <div className="mt-12 bg-white text-gray-800 p-6 rounded-lg shadow-xl max-w-xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-purple-700">Add Your Testimonial</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="text"
              placeholder="Your testimonial..."
              value={formData.text}
              onChange={handleFormChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="author"
              placeholder="Your name or relation"
              value={formData.author}
              onChange={handleFormChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleFormChange}
              className="w-full"
              required
            />
            <button
              type="submit"
              className="w-full bg-purple-700 text-white p-3 rounded hover:bg-purple-800"
            >
              Submit Testimonial
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
