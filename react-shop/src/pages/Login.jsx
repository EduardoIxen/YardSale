import React from "react"; //imr
import "../styles/Login.scss";
import logo from "@logos/logo_yard_sale.svg";

const Login = () => {
  //slr
  return (
    <div className="login">
      <div className="form-container">
        <img src={logo} alt="Logo de yard sale" className="logo" />
        <form action="/" className="form">
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            id="email"
            placeholder="email@example.com"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="*************"
            className="input input-password"
          />
          <input
            type="submit"
            value="Log in"
            className="primary-button login-button"
          />
          <a href="/">Forgot my password</a>
        </form>
        <div className="button-design">
          <button className="secondary-button signup-button">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
