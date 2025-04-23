import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(5079835.jpg)",
        }}
      >
        <div>
          <div className="text-center ">
            <h1 className="text-5xl font-bold py-2 px-2">Signup now!</h1>
          </div>
          <div className="card bg-base-100 px-24 py-4 w-xl shrink-0 shadow-xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <Link to="/login" className="link link-hover">
                    Already a member? login!
                  </Link>
                </div>
                <button className="btn btn-neutral mt-4">SignUP</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
