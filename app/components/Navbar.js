"use client";
import Link from "next/link";
import Logo from "./Logo";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaSun,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const pathName = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathName === href ? "w-full" : "w-0 "
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav className="flex gap-6 ">
        <CustomLink href="/" title="Home" />
        <CustomLink href="/about" title="About" />
        <CustomLink href="/portfolio" title="Portfolio" />
      </nav>

      <Logo />

      <nav className="flex items-center justify-center gap-6">
        <motion.a
          href="https://www.google.com"
          target="_blank"
          whileHover={{ y: -2 }}
        >
          <FaTwitter size={25} className=" text-cyan-400" />
        </motion.a>
        <motion.a href="/" target="_blank" whileHover={{ y: -2 }}>
          <FaGithub size={25} className=" " />
        </motion.a>
        <motion.a href="/" target="_blank" whileHover={{ y: -2 }}>
          <FaLinkedin size={25} className="text-[#2D64BC]" />
        </motion.a>
        <motion.div
          onClick={() => setIsDarkMode(!isDarkMode)}
          whileHover={{ y: -2 }}
        >
          {isDarkMode ? (
            <FaSun size={25} className="text-white" />
          ) : (
            <FaMoon size={25} />
          )}
        </motion.div>
      </nav>
    </div>
  );
};
export default Navbar;
