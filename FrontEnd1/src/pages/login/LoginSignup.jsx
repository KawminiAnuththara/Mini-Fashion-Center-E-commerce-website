import React from "react";
import "./LoginSignup.css";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <label>Name</label>
        <input type="text" placeholder="Enter your name" />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" />

        <button type="submit">Login</button>

        <p>
          Don't have an account?{" "}
          <span onClick={() => navigate("/register")} className="register-link">
            Register
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginSignup;
