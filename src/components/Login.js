import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Signup.css";
import wave from "../images/wave.png";
import avatar from "../images/avatar.svg";
import bg from "../images/bg.svg";
import AuthContext from "../context/AuthContext";
import { db } from "../firebase_config";
import { doc, getDoc } from "firebase/firestore";

export default function Login() {
  const authCtx = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handelSubmit = async (e) => {
    e.preventDefault();
    await authCtx.onLogin(credentials);

    const docRef = doc(db, "users", authCtx.user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log(docSnap.data());
      navigate("/home", { replace: true });
    } else {
      navigate("/informationform", { replace: true });
    }
  };
  const onChangeHandeler = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <img className="wave" src={wave} alt="Wave" />
      <div className="container">
        <div className="img">
          <img src={bg} alt="bg" />
        </div>
        <div className="login-content">
          <form onSubmit={handelSubmit}>
            <img src={avatar} alt="avatar" />
            <h2 className="title">Welcome</h2>
            <div className="input-div email">
              <div className="i">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="div">
                <input
                  type="text"
                  className="input"
                  placeholder="Email"
                  name="email"
                  value={credentials.email}
                  onChange={onChangeHandeler}
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
                  placeholder="Password"
                  name="password"
                  value={credentials.password}
                  onChange={onChangeHandeler}
                />
              </div>
            </div>
            <Link to="/signup">Create An Account</Link>
            <input type="submit" className="btn" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
}
