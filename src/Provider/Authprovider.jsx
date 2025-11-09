import React, { createContext, useEffect, useState } from 'react';
import { 
  createUserWithEmailAndPassword, 
  getAuth, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut, 
  updateProfile,
  GoogleAuthProvider,
  sendPasswordResetEmail
} from "firebase/auth";
import app from '../firebase/Firebase.config.js';

const googleprovider = new GoogleAuthProvider();
export const Authcontex = createContext();

const auth = getAuth(app);

const Authprovider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  const createuser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googlesign = () => {
    return signInWithPopup(auth, googleprovider);
  };

  const logout = () => {
    return signOut(auth);
  };

  const updateuser = (updateddata) => {
    return updateProfile(auth.currentUser, updateddata);
  };
const resetpass=(email)=>{
   return sendPasswordResetEmail(auth,email)
}
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setuser(currentuser);
      setloading(false);
    });
    return () => unsubscribe();
  }, []);

  const authData = {
    user,
    setuser,
    createuser,
    signin,
    logout,
    loading,
    setloading,
    updateuser,
    googlesign,
    resetpass,
  };

  return (
    <Authcontex.Provider value={authData}>
      {children}
    </Authcontex.Provider>
  );
};

export default Authprovider;
