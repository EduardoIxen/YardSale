import React, {useRef} from "react"; //imr
import "../styles/Login.scss";
import logo from "@logos/logo_yard_sale.svg";

const Login = () => {
  //slr
  const form = useRef(null); //null porque no se inicializa con nada

  const handleSubmit = (e) => {
    e.preventDefault(); //para que no se recargue la página
    const formData = new FormData(form.current);
    const data = {
      username: formData.get("email"),
      password: formData.get("password"),
    }

    console.log(data);
  };

  return (
    <div className="login">
      <div className="form-container">
        <img src={logo} alt="Logo de yard sale" className="logo" />
        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            name="email" //name para que sea accesible desde el objeto formData
            placeholder="email@example.com"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="*************"
            className="input input-password"
          />
          <button
            type="submit"
            className="primary-button login-button"
            onClick={handleSubmit}>
            Log in
          </button>
          <a href="/">Forgot my password</a>
        </form>
        <div className="button-design">
          <button
            className="secondary-button
            signup-button">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
