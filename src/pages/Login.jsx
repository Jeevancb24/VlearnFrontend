import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const openUserProfile = () => {
    navigate("/");
  };
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(19187761.jpg)",
      }}
    >
      <div className=" w-fit">
        <div className="text-center ">
          <h1 className="text-5xl font-bold py-2 px-2">Login now!</h1>
        </div>
        <div className="card bg-base-100 px-24 py-4 w-xl shrink-0 shadow-xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="fieldset-label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="fieldset-label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <Link to="/signup" className="link link-hover">
                  Not a member? SignUP!
                </Link>{" "}
              </div>
              <button
                onClick={openUserProfile}
                className="btn btn-neutral mt-4"
              >
                Login
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
