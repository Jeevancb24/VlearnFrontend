import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  // State to track authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle login action
  const handleLogin = () => {
    // Perform login logic here (e.g., API call)
    setIsAuthenticated(true);
  };

  // Function to handle logout action
  const handleLogout = () => {
    // Perform logout logic here (e.g., clear tokens)
    setIsAuthenticated(false);
  };
  return (
    <div className="flex ">
      <div className="drawer w-full">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-base-100 w-full">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mx-2  flex-1 px-20">
              <Link to="/">Vlearn🤖</Link>
            </div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}

                <li>
                  <Link to="/work">Learn</Link>
                </li>
                <li>
                  <Link to="/chat">ChatRoom</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  {isAuthenticated ? (
                    // Show Logout link when authenticated
                    <Link to="/logout" onClick={handleLogout}>
                      Logout
                    </Link>
                  ) : (
                    // Show Login link when not authenticated
                    <Link to="/login" onClick={handleLogin}>
                      Login
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/chat">ChatRoom</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-4 py-3 bg-base-100 rounded-lg flex items-center gap-2 ml-4">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" className="grow" placeholder="Search" />
          <kbd className="kbd kbd-sm">⌘</kbd>
          <kbd className="kbd kbd-sm">K</kbd>
        </label>
      </div>
    </div>
  );
};

export default Navigation;
