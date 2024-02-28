'use client'
import { createContext, useState, useEffect, useContext } from "react";
import { loginUser, checkAuthStatus, logoutUser, signupUser, scamSubmit } from "../helpers/api-communicator";
import toast from "react-hot-toast";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      try {
        const data = await checkAuthStatus();
        if (data) {
          setUser({ email: data.email, name: data.name });
          setIsLoggedIn(true);
        }
      } catch (error) {
        // Handle error appropriately
        console.error("Error checking authentication status:", error);
      }
    }
    checkAuth();
  }, []);

  const login = async (email, password) => {
    try {
      const data = await loginUser(email, password);
      if (data) {
        setUser({ email: data.email, name: data.name });
        setIsLoggedIn(true);
      }
    } catch (error) {
      // Handle error appropriately
      console.error("Error logging in:", error);
    }
  };

  const signup = async (name, email, password) => {
    try {
      const data = await signupUser(name, email, password);
      if (data) {
        setUser({ email: data.email, name: data.name });
        setIsLoggedIn(true);
      }
    } catch (error) {
      // Handle error appropriately
      console.error("Error signing up:", error);
    }
  };

  const logout = async () => {
    try {
      await logoutUser();
      setIsLoggedIn(false);
      setUser(null);
    } catch (error) {
      // Handle error appropriately
      console.error("Error logging out:", error);
    }
  };

  const scamPost = async (name, email, province, scam) => {
    try {
      await scamSubmit(name, email, province, scam);
    } catch (error) {
      // Handle error appropriately
      console.error("Error submitting scam:", error);
    }
  };

  const value = { user, isLoggedIn, login, signup, logout, scamPost };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
