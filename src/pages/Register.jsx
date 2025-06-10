const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center p-4">
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-2xl">
        <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-8 drop-shadow-lg">
          Register for Classes
        </h1>
        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">Full Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">Phone Number</label>
            <input
              type="tel"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              placeholder="Your Phone"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">Select Course</label>
            <select className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition">
              <option>Tution Class 1-10</option>
              <option>HTML/CSS/JS Coding</option>
              <option>ReactJS Development</option>
              <option>C / C++ / Java / Python</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
