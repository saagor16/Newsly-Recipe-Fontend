/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "../firebase/firebase.config";

// Create Context for Auth
export const AuthContext = createContext(null);

// Initialize Google Auth Provider
const googleProvider = new GoogleAuthProvider();

// Initialize Firebase Auth
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State for logged-in user
  const [isLoading, setIsLoading] = useState(true); // State for loading spinner

  // Register User with Email and Password
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Update User Profile (Name and Photo)
  const updateProfileInfo = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // Login with Google
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Login with Email and Password
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout User
  const logOut = () => {
    return signOut(auth);
  };

  // Monitor Authentication State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update user state
      setIsLoading(false); // Stop loading spinner
    });

    // Cleanup subscription on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  // Authentication Information to Pass via Context
  const authInfo = {
    user,
    isLoading,
    registerUser,
    updateProfileInfo,
    googleLogin,
    logIn,
    logOut,
  };

  // Show Spinner While Loading
  if (isLoading) {
    return (
      <div className="container mx-auto mt-20 text-center">
        <span className="loading loading-bars loading-lg text-warning"></span>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
