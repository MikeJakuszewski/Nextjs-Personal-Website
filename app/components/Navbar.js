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
import useToggleDarkMode from "../hooks/useToggleDarkMode";
import { useRouter } from "next/navigation";

const CustomLink = ({ href, title, className = "" }) => {
  const pathName = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathName === href ? "w-full" : "w-0 "
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const pathName = usePathname();
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block  absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 bg-light  ${
          pathName === href ? "w-full" : "w-0 "
        } dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useToggleDarkMode();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between relative z-10 lg:px-16 md:px-12 sm:px-8 ">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all ease-out duration-300 h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all ease-out duration-300 h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all ease-out duration-300 h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex gap-6  dark:text-light">
          <CustomLink href="/" title="Home" />
          <CustomLink href="/about" title="About" />
          <CustomLink href="/portfolio" title="Portfolio" />
        </nav>

        <nav className="flex items-center justify-center gap-6">
          <motion.a
            href="https://twitter.com/mikejakuszewski"
            target="_blank"
            whileHover={{ y: -2 }}
            aria-label="Twitter link"
          >
            <FaTwitter size={30} className=" text-cyan-400" name="twitter" />
          </motion.a>
          <motion.a
            href="https://github.com/MikeJakuszewski"
            target="_blank"
            whileHover={{ y: -2 }}
            aria-label="GitHub link"
          >
            <FaGithub size={30} className=" dark:fill-white" name="github" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/mikejakuszewski/"
            target="_blank"
            whileHover={{ y: -2 }}
            aria-label="LinkedIn link"
          >
            <FaLinkedin
              size={30}
              className="text-[#2D64BC] dark:bg-white rounded-lg "
              name="linkedIn"
            />
          </motion.a>
          <motion.div whileHover={{ y: -2 }}>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className=" flex item-center rounded-full p-1"
              type="button"
              aria-label="Dark Mode Toggle"
            >
              {mode === "dark" ? (
                <FaSun size={30} className="fill-white" />
              ) : (
                <FaMoon size={30} />
              )}
            </button>
          </motion.div>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center justify-center flex-col  dark:text-light">
            <CustomMobileLink href="/" title="Home" toggle={handleClick} />
            <CustomMobileLink
              href="/about"
              title="About"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/portfolio"
              title="Portfolio"
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center gap-6 mt-2">
            <motion.a
              href="https://twitter.com/mikejakuszewski"
              target="_blank"
              whileHover={{ y: -2 }}
            >
              <FaTwitter size={30} className=" text-cyan-400" />
            </motion.a>
            <motion.a
              href="https://github.com/MikeJakuszewski"
              target="_blank"
              whileHover={{ y: -2 }}
            >
              <FaGithub size={30} className=" dark:fill-black fill-light" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mikejakuszewski/"
              target="_blank"
              whileHover={{ y: -2 }}
            >
              <FaLinkedin
                size={30}
                className="text-[#2D64BC] bg-light rounded-lg "
              />
            </motion.a>
            <motion.div whileHover={{ y: -2 }}>
              <button
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className=" flex item-center rounded-full p-1"
              >
                {mode === "dark" ? (
                  <FaSun size={30} className="fill-white" />
                ) : (
                  <FaMoon size={30} />
                )}
              </button>
            </motion.div>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-4 translate-x-[-50%] lg:top-2">
        <Logo />
      </div>
    </header>
  );
};
export default Navbar;
