import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loader, setLoader] = useState(true)

   const signupUser = (email, password) => {
      setLoader(true)
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const loginUser = (email, password) => {
      setLoader(true)
      return signInWithEmailAndPassword(auth, email, password)
   };

   const signInGoogle = () => {
      setLoader(true)
      return signInWithPopup(auth, googleProvider);
   }

   const logout = () => {
      setLoader(true)
      return signOut(auth);
   };

   const updateProfileInfo = ({ displayName, photoURL }) => {
      return updateCurrentUser(auth.currentUser, { displayName, photoURL })
   };

   // CurrentlysignInuser
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, user => {
         setLoader(false)
         setUser(user)
         // console.log(user)
      });
      return () => {
         unsubscribe();
      }
   }, [])

   const authInfo = { user, signupUser, loginUser, signInGoogle, updateProfileInfo, logout, loader }
   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;