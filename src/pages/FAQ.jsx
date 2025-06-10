import React, { useState } from 'react';

const initialFaqs = [
  {
    question: "What subjects do you provide tuition for?",
    answer: "We offer tuition for a wide range of subjects including Mathematics, Science, English, and Computer Science from grades 6 to 12.",
  },
  {
    question: "Do you offer custom software development services?",
    answer: "Yes, we provide end-to-end custom software development services tailored to your business requirements.",
  },
  {
    question: "Are the classes live or recorded?",
    answer: "We provide both live interactive classes and recorded sessions for flexible learning.",
  },
  {
    question: "What technologies do you use for software development?",
    answer: "Our stack includes React, Node.js, Python, Django, Flutter, and more based on project needs.",
  },
  {
    question: "How can I contact support?",
    answer: "You can contact us through email, phone, or our live chat feature available on the website.",
  },
];

const FAQ = () => {
  const [faqs] = useState(initialFaqs);
  const [openIndex, setOpenIndex] = useState(null);
  const [query, setQuery] = useState({ name: '', email: '', question: '', image: null });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setQuery({ ...query, image: files[0] });
    } else {
      setQuery({ ...query, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission — in real app, send to backend
    console.log("Submitted Query:", query);

    // Reset form
    setQuery({ name: '', email: '', question: '', image: null });

    alert("Your question has been submitted. We will respond soon!");
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 px-6 md:px-16 mt-32 md:mt-16">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
            >
              <span className="text-lg font-medium text-gray-800">{faq.question}</span>
              <i
                className={`fas ${
                  openIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'
                } text-indigo-600`}
              ></i>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>

      {/* Question Submission Form */}
      <div className="max-w-2xl mx-auto mt-16 bg-white p-6 rounded-lg shadow-xl border border-gray-200">
        <h3 className="text-2xl font-bold text-indigo-700 mb-4">Have a question? Ask us!</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={query.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={query.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
          <textarea
            name="question"
            placeholder="Type your question here..."
            value={query.question}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded h-28"
            required
          ></textarea>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded hover:bg-indigo-700 transition duration-200"
          >
            Submit Question
          </button>
        </form>
      </div>
    </section>
  );
};

export default FAQ;
