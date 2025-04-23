import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AquireDetails = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedChapter, setSelectedChapter] = useState("");
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

  const classOptions = ["Class 8", "Class 9", "Class 10"];
  const subjectOptions = ["Geo", "science", "english", "economics", "Politics"];
  const chapterOptions = ["Chapter 1", "Chapter 2", "Chapter 3"];

  const renderCardOptions = (options, selected, setSelected) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {options.map((option) => (
        <div
          key={option}
          className={`card bg-base-100 shadow-xl cursor-pointer transition-transform transform hover:scale-105 ${
            selected === option ? "border-4 border-primary" : "border"
          }`}
          onClick={() => setSelected(option)}
        >
          <div className="card-body items-center text-center">
            <h2 className="card-title">{option}</h2>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div
      className="flex min-h-screen hero flex-col gap-10 p-6 max-w-screen mx-auto"
      style={{ backgroundImage: "url(4884273.jpg)" }}
    >
      <h2 className="text-3xl font-bold text-center text-primary">
        Get Started
      </h2>
      <p className="text-center text-base-content text-lg">
        Please select your <strong>Class</strong>, <strong>Subject</strong>, and{" "}
        <strong>Chapter</strong> to continue
      </p>

      <div>
        <h3 className="text-xl font-semibold mb-4">Select Class</h3>
        {renderCardOptions(classOptions, selectedClass, setSelectedClass)}
      </div>

      {selectedClass && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Select Subject</h3>
          {renderCardOptions(
            subjectOptions,
            selectedSubject,
            setSelectedSubject
          )}
        </div>
      )}

      {selectedSubject && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Select Chapter</h3>
          {renderCardOptions(
            chapterOptions,
            selectedChapter,
            setSelectedChapter
          )}
        </div>
      )}

      {selectedChapter && (
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="btn btn-primary btn-lg mt-4"
          >
            Start Chat
          </button>
        </div>
      )}
    </div>
  );
};

export default AquireDetails;
