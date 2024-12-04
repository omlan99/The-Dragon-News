/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/Firebase.init";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] =  useState(true)
  console.log(user);
  // new user function
  const createNewUser = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login function
  const singInUser = (email, password) =>{
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  // sign out function
  const logout = () => {
    setLoader(true)
    return signOut(auth);
  };
  const authInfo = {
    user,
    setUser,
    createNewUser,
    logout,
    singInUser,
    loader
  };
  console.log(user)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setLoader(false)
      setUser(loggedUser);
    
    });
    return () => {  
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
