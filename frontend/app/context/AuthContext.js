'use client'

import { createContext, use, useState, useEffect,useContext } from "react";
import { loginUser,checkAuthStatus, logoutUser, signupUser, scamSubmit } from "../helpers/api-communicator";
import toast from "react-hot-toast";
const AuthContext = createContext(null);


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    //fetch if the user cookies are valid
    async function checkAuth(){
        const data = await checkAuthStatus()
        if (data) {
            setUser({ email: data.email, name: data.name });
            setIsLoggedIn(true);
          }
    }
    checkAuth()
  }, []);

  const login = async (email, password) => {
const data = await loginUser(email, password);
    if (data) {
      setUser({ email: data.email, name: data.name });
      setIsLoggedIn(true);
    }

  };
  const signup = async (name, email, password) => {
    const data = await signupUser(name, email, password);
    if (data) {
      setUser({ email: data.email, name: data.name });
      setIsLoggedIn(true);
    }
  };
  
  const logout = async () => {
    await logoutUser();
    setIsLoggedIn(false);
    setUser(null);
    window.location.reload();
  };
  const scamPost = async (name,email,province,scam) => {
    await scamSubmit(name,email,province,scam);
    
  };

  const value = { user,isLoggedIn, login, signup, logout,scamPost };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
   return useContext(AuthContext);
}