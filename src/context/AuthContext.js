import React, { useState, useEffect } from "react";
import { register, login } from "../utils/firebase_auth";
import { db } from "../firebase_config";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogin: async () => {},
  onSignin: async () => {},
  onLogout: () => {},
  user: {},
  userCompleteDetails: {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState({});
  const [userCompleteDetails, setUserCompleteDetails] = useState({});

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
    const getUserDataFromDB = async (uid) => {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data());
      setUserCompleteDetails(docSnap.data());
    };

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
      getUserDataFromDB(userObjStored.uid);
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
        userCompleteDetails: userCompleteDetails,
        setUserCompleteDetails: setUserCompleteDetails,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
