import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ScamSensei",
  description: "For scam prevention",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" class="scroll-smooth">

    <body className={"bg-gradient-radial min-h-screen "}>


      {children}


    </body>
    </html>
);
}
