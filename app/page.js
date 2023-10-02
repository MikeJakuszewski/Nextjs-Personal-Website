"use client";
import Image from "next/image";
import profilePic from "./assets/developer.png";
import Layout from "./components/Layout";
import AnimatedText from "./components/AnimatedText";
import { motion } from "framer-motion";

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
              className="text-7.5xl  text-left"
            />
            <motion.p variants={quote} initial="initial" animate="animate">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </motion.p>
          </div>
        </div>
      </Layout>
    </main>
  );
}
