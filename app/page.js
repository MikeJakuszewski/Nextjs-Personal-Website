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
    <main className="flex items-center text-dark w-full min-h-screen ">
      <Layout className="pt-0">
        <div className="flex items-center justify-between w-full gap-4">
          <div className="w-1/2">
            <Image
              src={profilePic}
              alt="developer"
              width={800}
              height={800}
              sizes="100vw"
              className=" scale-x-[-1] "
            />
          </div>
          <div className="w-1/2 flex flex-col  text-left gap-4">
            <AnimatedText
              text="Turning Vision Into Reality With Code And Design."
              className="text-7xl  text-left"
            />
            <p className="my-4 text-base font-medium">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex items-center mt-2">
              <Link
                href="/resume.pdf"
                target="_blank"
                className="flex items-center justify-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark "
              >
                Resume <BiLinkExternal className="w-6 ml-1" />
              </Link>
              <Link
                href="mailto:michael_jakuszewski@hotmail.com"
                className="ml-4 text-lg font-medium capitalize text-dark underline underline-offset-2"
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
          className="w-full h-auto "
        />
      </div>
    </main>
  );
}
