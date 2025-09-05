import React from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-wrapper">
      <div className="landing-container">
        <div className="content">
          <h2>Welcome to PopX</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        </div>
        <div className="actions">
          <button
            className="btn-primary"
            onClick={() => navigate("/signup")}
          >
            Create Account
          </button>
          <button
            className="btn-secondary"
            onClick={() => navigate("/login")}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}
