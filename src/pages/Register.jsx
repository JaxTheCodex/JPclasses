import { useState } from "react";

const Register = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [classType, setClassType] = useState("");

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
    setSelectedSubjects([]);
  };

  const handleSubjectToggle = (subject) => {
    setSelectedSubjects((prev) =>
      prev.includes(subject)
        ? prev.filter((s) => s !== subject)
        : [...prev, subject]
    );
  };

  const subjectsMap = {
    tuition: ["English", "Hindi", "Maths", "Science", "Social Science", "Computer"],
    "web-development": ["HTML", "CSS", "JavaScript", "React", "MySQL", "PHP", "Node", "Express"],
    languages: ["C", "C++", "JavaScript", "Java", "Python"],
    "computer-cources": ["MS Excel", "Tally", "PowerPoint", "Photoshop", "CorelDRAW"],
    "ai/ml": ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Python for AI", "Data Science"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex items-start justify-center p-6">
      <div className="mt-24 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-2xl">
        <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-8 drop-shadow-lg">
          Register for Classes
        </h1>

        <form
          action="https://formsubmit.co/jagarnathpatro836@gmail.com" // 
          method="POST"
          className="space-y-6"
        >
          {/* Hidden input to send selected subjects */}
          <input
            type="hidden"
            name="subjects"
            value={selectedSubjects.join(", ")}
          />

          {/* Full Name */}
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              placeholder="Your Name"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              placeholder="Your Phone"
            />
          </div>

          {/* Class Type */}
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">Class Type</label>
            <select
              name="classType"
              required
              value={classType}
              onChange={(e) => setClassType(e.target.value)}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            >
              <option value="">-- Select --</option>
              <option value="Demo Class">Demo Class</option>
              <option value="Regular Class">Regular Class</option>
            </select>
          </div>

          {/* Course Selection */}
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">Select Course</label>
            <select
              name="course"
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              value={selectedCourse}
              onChange={handleCourseChange}
            >
              <option value="">-- Select --</option>
              <option value="tuition">Tuition Class 1-10</option>
              <option value="web-development">Web Development</option>
              <option value="ai/ml">AI/ML</option>
              <option value="languages">Basic coding</option>
              <option value="computer-cources">Computer Cources</option>
            </select>
          </div>

          {/* Subjects */}
          {subjectsMap[selectedCourse] && (
            <div>
              <label className="block mb-2 text-gray-700 font-semibold">Select Subjects</label>
              <div className="grid grid-cols-2 gap-2">
                {subjectsMap[selectedCourse].map((subject) => (
                  <label key={subject} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-purple-600"
                      checked={selectedSubjects.includes(subject)}
                      onChange={() => handleSubjectToggle(subject)}
                    />
                    <span className="text-gray-700">{subject}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Submit */}
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
