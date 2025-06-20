import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/Logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMore = () => {
    setIsMoreOpen(!isMoreOpen);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* Upper bar */}
      <div className="bg-black text-white text-xs md:text-sm py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-left">
            <div className="flex items-center space-x-1">
              <i className="fas fa-phone-alt" aria-hidden="true"></i>
              <a href="tel:+919876543210" className="hover:underline" title="Call us">+91 6200505664</a>
            </div>
            <div className="flex items-center space-x-1">
              <i className="fas fa-envelope" aria-hidden="true"></i>
              <a href="mailto:info@smartclasses.com" className="hover:underline" title="Email us">jagarnathpatro861.com</a>
            </div>
            <div className="flex items-center space-x-1">
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
              <span>Bokaro Steel City, Jharkhand</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://api.whatsapp.com/send/?phone=916200505664&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-gray-400"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="https://t.me/yourtelegramlink"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="hover:text-gray-400"
            >
              <i className="fab fa-telegram-plane"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/jagarnath-patro-0a4413244/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-gray-400"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Lower bar */}
      <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 text-white py-3 shadow-md">
        <div className="container mx-auto flex justify-between items-center flex-wrap px-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="JPclasses Logo"
              className="w-10 h-10 object-contain transition-transform duration-300 hover:rotate-6 rounded-full"
            />
            <Link
              to="/"
              className="text-3xl font-bold tracking-wide hover:scale-105 transform transition-all duration-300"
              title="JPclasses Home"
            >
              JP<span className="text-yellow-300">classes</span>
            </Link>
          </div>

          {/* Hamburger */}
          <div className="md:hidden flex items-center ml-auto" onClick={toggleMenu}>
            <button aria-label="Toggle Menu" className="text-white focus:outline-none">
              {isMenuOpen ? <span className="text-3xl">&times;</span> : <span className="text-3xl">&#9776;</span>}
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            <Link to="/" className="relative group text-lg font-medium" title="Home">
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/courses" className="relative group text-lg font-medium" title="Courses">
              Courses
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="relative group text-lg font-medium" title="About">
              About
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className="relative group text-lg font-medium" title="Contact">
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </Link>

            {/* More Dropdown */}
            <div className="relative group">
  <button
    onClick={toggleMore}
    className="relative group text-lg font-semibold flex items-center transition duration-300 hover:text-yellow-300"
  >
    More <i className="fas fa-caret-down ml-1"></i>
    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
  </button>

  {isMoreOpen && (
    <div className="absolute right-0 mt-2 min-w-[180px] bg-black text-white shadow-lg z-50 animate-fade-in rounded-md overflow-hidden">
      <Link
        to="/testimonials"
        className="block px-5 py-3 hover:bg-white hover:text-black transition duration-300 font-medium"
        onClick={() => setIsMoreOpen(false)}
      >
        <i className="fas fa-comment-dots mr-2 text-yellow-400"></i>Testimonials
      </Link>
      <Link
        to="/faq"
        className="block px-5 py-3 hover:bg-white hover:text-black transition duration-300 font-medium"
        onClick={() => setIsMoreOpen(false)}
      >
        <i className="fas fa-question-circle mr-2 text-yellow-400"></i>FAQ
      </Link>
      <Link
        to="/blog"
        className="block px-5 py-3 hover:bg-white hover:text-black transition duration-300 font-medium"
        onClick={() => setIsMoreOpen(false)}
      >
        <i className="fas fa-blog mr-2 text-yellow-400"></i>Blog
      </Link>
    </div>
  )}
</div>

          </div>

          {/* Register (Desktop only)
          <div className="hidden md:flex items-center space-x-4 ml-6">
            <Link to="/register" className="bg-white text-purple-700 font-bold px-5 py-2 rounded-full shadow-md hover:bg-purple-100 transition duration-300" title="Register Now">
              Register
            </Link>
          </div> */}
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col items-center py-4 space-y-2">
            <Link to="/" onClick={toggleMenu} className="text-lg font-medium">Home</Link>
            <Link to="/courses" onClick={toggleMenu} className="text-lg font-medium">Courses</Link>
            <Link to="/about" onClick={toggleMenu} className="text-lg font-medium">About</Link>
            <Link to="/contact" onClick={toggleMenu} className="text-lg font-medium">Contact</Link>
            <Link to="/testimonials" onClick={toggleMenu} className="text-lg font-medium">Testimonials</Link>
            <Link to="/faq" onClick={toggleMenu} className="text-lg font-medium">FAQ</Link>
            <Link to="/blog" onClick={toggleMenu} className="text-lg font-medium">Blog</Link>
            <Link to="/register" onClick={toggleMenu} className="bg-white text-purple-700 font-bold px-5 py-2 rounded-full shadow-md hover:bg-purple-100 transition duration-300 mt-2" title="Register Now">
              Register
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
