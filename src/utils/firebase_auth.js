import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase_config";

const auth = getAuth(app);

export const register = async (email, password) => {
  let user;
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      // ..
    });
  return user;
};

export const login = async (email, password) => {
  let user;
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
  return user;
};
