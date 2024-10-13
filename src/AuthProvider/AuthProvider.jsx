import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const sinInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      // console.log(currentUser);
      setLoading(false);
      if (createUser) {
        axios
          .post(
            "https://crud-car-genius-server-58-lq3pqi7sf.vercel.app/jwt",
            loggedUser,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            // console.log(res.data);
          });
      } else {
        axios
          .post(
            "https://crud-car-genius-server-58-lq3pqi7sf.vercel.app/logout",
            loggedUser,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            // console.log("LOG OUT", res.data);/
          })
          .catch((err) => {
            console.error("Error during logout:", err);
          });
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authIInfo = {
    user,
    loading,
    setLoading,
    createUser,
    sinInUser,
    logOut,
  };
  return (
    <AuthContext.Provider value={authIInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
