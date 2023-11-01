"use client";
import Image from "next/image";
import profilePic from "./assets/developer.png";
import Layout from "./components/Layout";
import AnimatedText from "./components/AnimatedText";
import { motion } from "framer-motion";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import HireMe from "./components/HireMe";
import lightBulb from "../public/images/svgs/miscellaneous_icons_1.svg";
const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
};

export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
      <Layout className="pt-0 md:p-16 sm:pt-8">
        <div className="flex items-center justify-between w-full gap-4 lg:flex-col">
          <div className="w-1/2 md:w-full">
            <Image
              src={profilePic}
              alt="developer"
              width={800}
              height={800}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              className=" scale-x-[-1] w-full h-auto  lg:hidden md:inline-block md:w-full "
              priority
            />
          </div>
          <div className="w-1/2 flex flex-col  text-left gap-4 lg:w-full lg:text-center">
            <AnimatedText
              text="Turning Vision Into Reality With Code And Design."
              className="  text-7xl  text-left 2xl:text-6xl  xl:text-5xl lg:text-center lg:text-6xl  md:text-5xl sm:text-3xl"
            />
            <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex items-center mt-2  lg:self-center">
              <Link
                href="/resume.pdf"
                target="_blank"
                className="flex items-center justify-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:text-dark dark:bg-light dark:hover:border-light dark:hover:bg-dark  dark:hover:text-light md:p-2 md:px-4 md:text-base"
              >
                Resume <BiLinkExternal className="w-6 ml-1" />
              </Link>
              <Link
                href="mailto:michael_jakuszewski@hotmail.com"
                className="ml-4 text-lg font-medium capitalize text-dark underline underline-offset-2 dark:text-light md:text-base"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>

      <HireMe />
      <div className="absolute right-8 bottom-8 inline-block w-24">
        <Image
          src={lightBulb}
          alt="MikeJakuszewski"
          className="w-full h-auto md:hidden "
        />
      </div>
    </main>
  );
}
