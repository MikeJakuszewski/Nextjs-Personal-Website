"use client";
import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Image from "next/image";
import profilePicture from "../assets/Personal.jpeg";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { Skills } from "../components/Skills";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const page = () => {
  return (
    <>
      <Head>
        <title>Mike Jakuszewski | About Page</title>
        <meta name="description" content="About page" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                About me
              </h2>
              <p className="font-medium text-lg">
                I'm Mike Jakuszewski, a passionate full-stack developer
                specializing in JavaScript. With expertise in front-end
                development using frameworks like React and Nextjs, as well as
                back-end skills in Node.js and Express.js, I excel in crafting
                robust web applications and delivering exceptional user
                experiences.
              </p>
              <p className="mt-4 font-medium text-lg ">
                Having worked in various industries, these roles have equipped
                me with a unique perspective and a keen eye for detail, as I've
                honed my love for numbers and problem-solving. Combining my
                passion for technology with my experience, I thrive in
                delivering innovative solutions that marry technical excellence
                with a deep understanding of business needs.
              </p>
              <p className="mt-4 font-medium text-lg">
                On this portfolio site, you'll find projects that demonstrate my
                technical prowess and creativity. Each project showcases my
                attention to detail and commitment to excellence.
              </p>
            </div>
            <div className="col-span-3 relative  h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={profilePicture}
                alt="Mike Jakuszewski profile picture"
                className="w-max rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
        </Layout>
      </main>
    </>
  );
};
export default page;
