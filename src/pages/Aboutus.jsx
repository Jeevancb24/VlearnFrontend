import React from "react";
import { FaEnvelope, FaComments, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const team = [
  {
    name: "Shriraksha",
    role: "Frontend Developer",
    img: "shreeraksha.jpg",
  },
  {
    name: "Dhanya ",
    role: "UI/UX Designer",
    img: "dhanya.jpg",
  },
  {
    name: "Kavana",
    role: "AI Specialist",
    img: "kavana.jpg",
  },
];

const Aboutus = () => {
  return (
    <div
      className="min-h-screen w-full text-white font-inter"
      style={{
        background: "linear-gradient(135deg, #2a2a2a, #0f0f0f)",
      }}
    >
      <div className="px-6 py-16">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl font-quicksand font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
          >
            Meet the Minds Behind VLearn
          </motion.h1>

          {/* Intro Paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-300"
          >
            We’re three passionate students who built{" "}
            <span className="text-blue-400 font-semibold">VLearn</span> out of
            frustration with boring study tools. So we created a smart, fun, and
            adaptive platform that puts you at the center of learning.
          </motion.p>

          {/* Team Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
            {team.map((member, i) => (
              <motion.div
                key={i}
                className="bg-[#1b1b1b] text-white rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * i, duration: 0.6 }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500 shadow-md"
                />
                <h3 className="text-xl font-semibold font-quicksand text-cyan-400">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-20">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold font-quicksand text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-10"
            >
              Contact Us
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Email */}
              <div className="bg-[#1c1c1c] p-6 rounded-xl shadow-md hover:bg-[#232323] transition">
                <FaEnvelope className="text-2xl text-cyan-300 mb-3" />
                <h3 className="text-xl font-semibold text-white">Email Us</h3>
                <p className="text-sm text-gray-400">support@vlearn.com</p>
              </div>

              {/* Chat */}
              <div className="bg-[#1c1c1c] p-6 rounded-xl shadow-md hover:bg-[#232323] transition">
                <FaComments className="text-2xl text-green-300 mb-3" />
                <h3 className="text-xl font-semibold text-white">Live Chat</h3>
                <p className="text-sm text-gray-400">
                  Chat with our assistant anytime
                </p>
              </div>

              {/* Phone */}
              <div className="bg-[#1c1c1c] p-6 rounded-xl shadow-md hover:bg-[#232323] transition">
                <FaPhoneAlt className="text-2xl text-purple-300 mb-3" />
                <h3 className="text-xl font-semibold text-white">Call Us</h3>
                <p className="text-sm text-gray-400">+1 (800) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
