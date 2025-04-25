import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Chatroom = () => {
  const location = useLocation();
  const { class: selectedClass, subject, chapter } = location.state || {};
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLocked, setIsLocked] = useState(true);
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    if (selectedClass && subject && chapter) {
      setIsLocked(false);
    }
  }, [selectedClass, subject, chapter]);

  const handleSend = async () => {
    if (!query.trim()) return;

    const newUserMsg = { sender: "user", text: query };
    const newMessages = [...messages, newUserMsg];
    setMessages(newMessages);
    setQuery("");

    try {
      const res = await axios.get("http://localhost:8000/query", {
        params: {
          q: query,
          class_name: selectedClass,
          subject,
          chapter,
        },
      });

      const metadata = res.data.metadata?.[0];
      const metadataInfo = metadata
        ? `\n\n[Info: ${metadata.class} - ${metadata.subject} - ${metadata.chapter} - ${metadata.filename}]`
        : "";

      const botReply = {
        sender: "bot",
        text: res.data.response + metadataInfo,
      };

      setMessages([...newMessages, botReply]);

      setChatHistory((prev) => [
        ...prev,
        {
          query,
          chapter: chapter || "Unknown",
          subject: subject || "Unknown",
          class: selectedClass || "Unknown",
        },
      ]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className="flex min-h-screen flex-row"
      style={{
        background: "linear-gradient(135deg, #111, #1b1b1b, #0f0f0f)",
        color: "#e0e0e0",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Sidebar: Chat History */}
      <div className="w-1/5 flex flex-col bg-black bg-opacity-40 p-4 backdrop-blur-md border-r border-gray-700">
        <h2 className="text-xl mb-4 font-semibold border-b border-gray-600 pb-2">
          Chat History
        </h2>
        <div className="overflow-y-auto space-y-4 h-full text-sm text-gray-300">
          {chatHistory.length === 0 ? (
            <p className="text-gray-500">No previous queries</p>
          ) : (
            chatHistory.map((item, index) => (
              <div
                key={index}
                className="p-2 rounded-md bg-gray-800/60 hover:bg-gray-700 transition duration-200"
              >
                <div className="font-bold">{item.chapter}</div>
                <div className="text-xs text-gray-400">
                  {item.subject} · {item.class}
                </div>
                <div className="text-sm mt-1 line-clamp-2">{item.query}</div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex flex-col h-screen w-full">
        <div className="text-center p-4 text-lg font-bold bg-[#1a1a1a] text-white shadow border-b border-gray-700">
          {selectedClass && subject && chapter
            ? `Now you are querying on '${chapter}' of '${subject}' from '${selectedClass}'`
            : "Please select class, subject, and chapter to unlock chat"}
        </div>

        <div className="flex flex-col h-full w-full px-10 py-6 overflow-y-auto">
          <AnimatePresence initial={false}>
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`chat ${
                  msg.sender === "user" ? "chat-end" : "chat-start"
                } mb-4`}
              >
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="avatar"
                      src={
                        msg.sender === "user"
                          ? "307ce493-b254-4b2d-8ba4-d12c080d6651.jpg"
                          : "Cartoon Style Robot.jpg"
                      }
                    />
                  </div>
                </div>
                <div className="chat-header mb-1 text-sm text-gray-400">
                  {msg.sender === "user" ? "You" : "Deep Research"}
                  <time className="text-xs opacity-50 ml-2">12:45</time>
                </div>
                <div className="chat-bubble bg-[#2a2a2a] text-white whitespace-pre-line">
                  {msg.text}
                </div>
                <div className="chat-footer text-xs text-gray-500 mt-1">
                  {msg.sender === "user" ? "Sent" : "Received"}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Input Area */}
        <div
          className="sticky bottom-0 p-4 border-t border-gray-700"
          style={{
            background: "linear-gradient(to right, #191919, #111)",
          }}
        >
          <div className="flex flex-col md:flex-row items-center gap-2">
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your question"
              className="textarea textarea-md w-full bg-[#1e1e1e] text-white border border-gray-600 rounded-lg placeholder-gray-400 focus:outline-none"
              disabled={isLocked}
            ></textarea>

            <button
              onClick={handleSend}
              disabled={isLocked}
              className="btn px-4 py-2 bg-[#292929] border border-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
            >
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/ios-glyphs/30/paper-plane.png"
                alt="Send"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatroom;
