import Script from "next/script";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mike Jakusewski | Portfolio",
  description: "Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-light w-full dark:bg-dark min-h-screen`}
      >
        <Script id="theme-toggle" strategy="beforeInteractive">
          {`if (localStorage.theme === 'dark' || (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)){" "}
          {document.documentElement.classList.add("dark")} else{" "}
          {document.documentElement.classList.remove("dark")}`}
        </Script>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
