import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Chatroom = () => {
  const location = useLocation();
  const { class: selectedClass, subject, chapter } = location.state || {};
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [folderPath, setFolderPath] = useState("");
  const [isLocked, setIsLocked] = useState(true);

  useEffect(() => {
    if (selectedClass && subject && chapter) {
      setIsLocked(false);
    }
  }, [selectedClass, subject, chapter]);

  const handleSend = async () => {
    if (!query.trim()) return;
    const newMessages = [...messages, { sender: "user", text: query }];
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
      setMessages([
        ...newMessages,
        { sender: "bot", text: res.data.response + metadataInfo },
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

  const handleIngest = async () => {
    if (!folderPath.trim()) return;
    try {
      const res = await axios.post("http://localhost:8000/ingest", {
        folder_path: folderPath,
      });
      alert(res.data.message);
    } catch (err) {
      console.error(err);
      alert("Failed to ingest folder");
    }
  };

  return (
    <div
      className="flex min-h-screen flex-row hero"
      style={{ backgroundImage: "url(aug_8_01.jpg)" }}
    >
      <div className="w-1/5 flex flex-col">
        <h2 className="w-full px-20">ChatHistory</h2>
        <div className="h-screen">stored history</div>
      </div>
      <div className="flex flex-col h-screen w-full">
        <div className="text-center p-4 text-lg font-bold">
          {selectedClass && subject && chapter
            ? `Now you are querying on '${chapter}' of '${subject}' from '${selectedClass}'`
            : "Please select class, subject, and chapter to unlock chat"}
        </div>
        <div className="flex flex-col h-screen w-full p-10 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chat ${
                msg.sender === "user" ? "chat-end" : "chat-start"
              }`}
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
              <div className="chat-header">
                {msg.sender === "user" ? "You" : "Deep Research"}
                <time className="text-xs opacity-50">12:45</time>
              </div>
              <div className="chat-bubble whitespace-pre-line">{msg.text}</div>
              <div className="chat-footer opacity-50">
                {msg.sender === "user" ? "Sent" : "Received"}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-transparent sticky bottom-0 p-4 ">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your question"
              className="textarea textarea-md w-full bg-transparent"
              disabled={isLocked}
            ></textarea>
            <fieldset className="fieldset w-full md:w-auto">
              <legend className="fieldset-legend">Pick a file</legend>
              <input
                type="text"
                placeholder="Folder path"
                value={folderPath}
                onChange={(e) => setFolderPath(e.target.value)}
                className="file-input w-full"
              />
              <label className="label">Max size 2MB</label>
            </fieldset>
            <button
              onClick={handleIngest}
              className="btn btn-info w-full md:w-auto"
            >
              <img
                className="rounded-2xl"
                width="30"
                height="30"
                src="5845.jpg"
                alt="paper-plane"
              />
            </button>
            <button
              onClick={handleSend}
              disabled={isLocked}
              className="btn btn-info w-full md:w-auto"
            >
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-glyphs/30/paper-plane.png"
                alt="paper-plane"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatroom;
