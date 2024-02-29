import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import axios from "axios";
// axios.defaults.baseURL = "http://localhost:3100/api/v1";
// axios.defaults.withCredentials = true;
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ScamSensei",
  description: "For scam prevention",
};

export default function RootLayout({ children }) {
  return (
   
      
    <html lang="en" className="scroll-smooth">
 <AuthProvider>
    <body className={"bg-gradient-radial min-h-screen "}>
    <Toaster position="top-center"  />
   
      {children}

    
    </body>
    </AuthProvider>
    </html>
    
);
}
