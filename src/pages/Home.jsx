import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Layers, MessageCircle } from "lucide-react"; // or use your own image URLs

function Home() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/work");
  };

  const featureCards = [
    {
      title: "Upload Documents",
      description:
        "Easily upload documents across different classes and subjects. Instant processing with AI.",
      icon: <Layers size={40} className="text-indigo-600 mb-4" />,
    },
    {
      title: "Smart Class Selection",
      description:
        "Choose the class and subject that best matches your learning needs.",
      icon: <BookOpen size={40} className="text-indigo-600 mb-4" />,
    },
    {
      title: "AI Chatroom",
      description:
        "Ask questions and get AI-powered answers in real-time, powered by RAG technology.",
      icon: <MessageCircle size={40} className="text-indigo-600 mb-4" />,
    },
  ];

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-black to-gray-800">
      {/* Hero Section */}
      <div className="hero min-h-screen flex items-center justify-center relative text-center">
        <div className="hero-overlay bg-black bg-opacity-50 absolute inset-0"></div>
        <motion.div
          className="hero-content text-neutral-content relative z-10 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-lg mx-auto"
          >
            <h1 className="mb-4 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-600">
              Hey👋🏻 Welcome to VLEARN!
            </h1>
            <h1 className="mb-5 text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">
              Your AI-Powered Learning Assistant 🚀
            </h1>
            <p className="mb-5 text-lg text-white">
              Upload documents, choose your class, and dive into the future of
              learning with AI-powered assistance at your fingertips.
            </p>
            <p className="mb-5 text-lg text-white">
              Whether you are studying for exams or looking to explore new
              topics, VLearn is here to make learning smarter, easier, and more
              fun.
            </p>
            <div className="space-x-4">
              <button
                onClick={goToLogin}
                className="btn btn-primary text-lg transform transition-all hover:scale-105"
              >
                Get Started
              </button>
              <button
                onClick={() =>
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                  })
                }
                className="btn btn-outline btn-accent text-lg transform transition-all hover:scale-105"
              >
                Explore Features
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600"
        >
          Key Features
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {featureCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800 via-black to-gray-900 text-white shadow-xl rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300 hover:shadow-2xl border border-gray-700"
            >
              <div className="flex justify-center">{card.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-indigo-400">
                {card.title}
              </h3>
              <p className="text-gray-300">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Information Section */}
      <div className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500"
        >
          Why Choose VLearn?
        </motion.h2>
        <div className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed">
          <p className="mb-6">
            VLearn combines cutting-edge AI with an intuitive user interface. By
            using RAG (Retrieval-Augmented Generation), we are able to provide
            highly accurate and personalized learning experiences.
          </p>
          <p className="mb-6">
            Whether you're preparing for exams, exploring new topics, or need
            assistance with understanding complex concepts, VLearn adapts to
            your needs. Our smart class selection ensures you're always working
            with the most relevant resources.
          </p>
        </div>
      </div>

      {/* Background Animation Section */}
      <motion.div
        className="relative bg-gradient-to-br from-teal-500 via-indigo-600 to-purple-600 text-white py-16 px-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4">
          Start Your AI Learning Journey Now!
        </h2>
        <p className="mb-6">
          Dive into the future of education with VLearn and discover how AI can
          enhance your learning experience.
        </p>
        <button
          onClick={goToLogin}
          className="btn btn-accent text-white text-lg"
        >
          Launch VLearn
        </button>
      </motion.div>
    </div>
  );
}

export default Home;
