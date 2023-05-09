import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Signup.css";
import wave from "../images/wave.png";
import avatar from "../images/avatar.svg";
import bg from "../images/bg.svg";
import AuthContext from "../context/AuthContext";

export default function SignUp() {
  const authCtx = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credentials.password === credentials.cpassword) {
      await authCtx.onSignin(credentials);
      navigate("/", { replace: true });
    }
  };
  const onChangeHandler = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };
  return (
    <div>
      <img className="wave" src={wave} alt="img" />
      <div className="container">
        <div className="img">
          <img src={bg} alt="img" />
        </div>
        <div className="login-content">
          <form onSubmit={handleSubmit}>
            <img src={avatar} alt="img" />
            <h2 className="title">Welcome</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <input
                  type="text"
                  className="input"
                  id="username"
                  placeholder="Username"
                  value={credentials.username}
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <div className="input-div email">
              <div className="i">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="div">
                <input
                  type="text"
                  className="input"
                  id="email"
                  placeholder="Email"
                  value={credentials.email}
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <input
                  type="password"
                  className="input"
                  id="password"
                  placeholder="Password"
                  value={credentials.password}
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <div className="input-div cpass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <input
                  type="password"
                  className="input"
                  id="cpassword"
                  placeholder="Confirm Password"
                  value={credentials.cpassword}
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <Link to="/">Already Have An Account</Link>
            <input type="submit" className="btn" value="SignUp" />
          </form>
        </div>
      </div>
    </div>
  );
}
