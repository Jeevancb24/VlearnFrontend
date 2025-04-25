import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const AquireDetails = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedChapter, setSelectedChapter] = useState("");
  const [folderPath, setFolderPath] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState(""); // Snackbar message
  const [loading, setLoading] = useState(false); // Loading state to handle the spinner

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (selectedClass && selectedSubject && selectedChapter) {
      navigate("/chat", {
        state: {
          class: selectedClass,
          subject: selectedSubject,
          chapter: selectedChapter,
        },
      });
    }
  };

  const handleIngest = async () => {
    if (!folderPath) {
      setSnackbarMessage("Please provide a valid folder path.");
      return;
    }

    setLoading(true); // Start loading animation

    try {
      const res = await fetch("http://localhost:8000/ingest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ folder_path: folderPath }),
      });

      const data = await res.json();

      // Check for 'error' key in response
      if (data.error) {
        setSnackbarMessage(data.error); // Display error message from API
      } else {
        setSnackbarMessage(data.message || "Ingestion complete!"); // Display success message if available
      }
    } catch (err) {
      console.error(err);
      setSnackbarMessage("Failed to ingest folder.");
    } finally {
      setLoading(false); // End loading animation after API response
    }
  };

  const classOptions = ["Class 8", "Class 9", "Class 10"];
  const subjectOptions = [
    "Geography",
    "Science",
    "English",
    "Economics",
    "Politics",
  ];
  const chapterOptions = ["Chapter 1", "Chapter 2", "Chapter 3"];

  const renderCardOptions = (options, selected, setSelected) => (
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {options.map((option) => (
        <motion.div
          key={option}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`p-4 rounded-lg text-center shadow-md cursor-pointer text-sm sm:text-base font-medium transition-all duration-300 ${
            selected === option
              ? "bg-white text-primary border-2 border-primary"
              : "bg-white/80 text-gray-800 hover:bg-white"
          }`}
          onClick={() => setSelected(option)}
        >
          {option}
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-6"
      style={{
        background: "linear-gradient(135deg, #2e2e2e 0%, #0d0d0d 100%)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div className="w-full max-w-5xl bg-white/20 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-2xl space-y-10">
        <div className="text-center space-y-4">
          <motion.h1
            className="text-4xl font-extrabold text-white drop-shadow"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            🎓 Welcome to VLearn
          </motion.h1>
          <motion.p
            className="text-gray-200 text-lg sm:text-xl font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Choose your <strong>Class</strong>, <strong>Subject</strong>, and{" "}
            <strong>Chapter</strong> to start learning with AI assistance.
          </motion.p>
        </div>

        {/* 🔍 File Upload Section */}
        <motion.div
          className="bg-white/20 border border-white/30 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-white mb-2">
            📂 Optional: Add Files for Better Querying
          </h2>
          <p className="text-gray-300 mb-4">
            If you want the assistant to understand specific files (like PDFs or
            notes), input the folder path where the files are located.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <input
              type="text"
              value={folderPath}
              onChange={(e) => setFolderPath(e.target.value)}
              placeholder="Enter folder path"
              className="bg-[#ffffff20] border border-gray-500 text-white py-2 px-4 rounded-lg hover:bg-white/30 transition"
              disabled={loading} // Disable input when loading
            />
            <button
              onClick={handleIngest}
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition shadow-md"
              disabled={loading} // Disable button when loading
            >
              {loading ? (
                <div className="spinner-border text-white" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                "🚀 Ingest Folder"
              )}
            </button>
          </div>
        </motion.div>

        {/* 📚 Class, Subject, Chapter Selection (remains unchanged) */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-4">
            Select Class
          </h3>
          {renderCardOptions(classOptions, selectedClass, setSelectedClass)}
        </div>

        <AnimatePresence>
          {selectedClass && (
            <motion.div
              key="subject"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-4 mt-6">
                Select Subject
              </h3>
              {renderCardOptions(
                subjectOptions,
                selectedSubject,
                setSelectedSubject
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {selectedSubject && (
            <motion.div
              key="chapter"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-4 mt-6">
                Select Chapter
              </h3>
              {renderCardOptions(
                chapterOptions,
                selectedChapter,
                setSelectedChapter
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {selectedChapter && (
            <motion.div
              className="flex justify-center"
              key="start-button"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <button
                onClick={handleSubmit}
                className="px-8 py-3 bg-white text-primary font-semibold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Start Chat
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Snackbar Popup - Top Right Corner */}
      <AnimatePresence>
        {snackbarMessage && (
          <motion.div
            className={`fixed top-5 right-5 p-4 text-white rounded-lg shadow-lg ${
              snackbarMessage.includes("error") ? "bg-red-600" : "bg-green-600"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{snackbarMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AquireDetails;
