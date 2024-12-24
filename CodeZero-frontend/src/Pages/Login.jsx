import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <section className="h-full">
      <div className="contain">
        <div className="left">
          <div className="logo">
            <img src="/utils/logo.jpg" />
          </div>
          <h2>
            Code<span className="zero"> Zero</span>{" "}
          </h2>
        </div>
        <div className="right">
          <div className="login-form">
            <h2>Sign in</h2>
            <p>Access your account with ease</p>
            <form>
              <div className="form-group">
                <div className="input-container">
                  <label htmlFor="email">
                    <i className="fa fa-envelope" /> Your email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder=" Your email address"
                    required=""
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  <i className="fa fa-lock" /> Enter your password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  required=""
                />
              </div>
              <a href="#" className="forgot-password">
                Forgot your password?
              </a>
              <button type="submit" className="login">
                Log In
              </button>
              <div className="separator">
                <span>Or</span>
              </div>
              <button type="button" className="google">
                <i className="fa-brands fa-google" /> Continue with Google
              </button>
              <p className="register-text">
                Need to create an account? <a href="#">Register</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
