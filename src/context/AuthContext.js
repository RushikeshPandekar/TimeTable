import React, { useState, useEffect } from "react";
import { register, login } from "../utils/firebase_auth";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogin: async () => {},
  onSignin: async () => {},
  onLogout: () => {},
  user: {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState({});

  const loginHandler = async (credentials) => {
    const user = await login(credentials.email, credentials.password);
    setUserObj(user);
    const userDetails = {
      uid: user.uid,
      email: user.email,
      accessToken: user.accessToken,
      refreshToken: user.stsTokenManager.refreshToken,
    };
    localStorage.setItem("userObj", JSON.stringify(userDetails));
    setIsLoggedIn(true);
  };

  const signinHandler = async (credentials) => {
    const user = await register(credentials.email, credentials.password);
    setUserObj(user);
  };

  const logoutHandler = () => {
    localStorage.removeItem("userObj");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    let userObjStored = localStorage.getItem("userObj");
    if (userObjStored) {
      userObjStored = JSON.parse(userObjStored);
      console.log(userObjStored?.uid);
      setIsLoggedIn(true);
      setUserObj((prevVal) => ({
        ...prevVal,
        uid: userObjStored.uid,
        email: userObjStored.email,
        accessToken: userObjStored.accessToken,
      }));
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onSignin: signinHandler,
        onLogout: logoutHandler,
        user: userObj,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
