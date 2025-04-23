import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(6005990.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-4 text-4xl font-bold">Hey👋🏻</h1>
          <h1 className="mb-5 text-5xl font-bold">It's VLEARN!🚀</h1>
          <p className="mb-5">
            With VLearn, education becomes more interactive, efficient, and
            engaging, making complex concepts easier to grasp with AI-powered
            guidance.
          </p>
          <button onClick={goToLogin} className="btn btn-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
