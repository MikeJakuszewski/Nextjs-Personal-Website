"use client";
import Head from "next/head";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
// import project1 from "../../public/images/crypto-screener-cover-image.jpg";
import project1 from "../assets/AirBnBClone.png";
import project2 from "../assets/TechNexusHome.png";
import project3 from "../assets/CocktailQueryHome.png";
import { motion } from "framer-motion";

import { FaGithub } from "react-icons/fa6";
import TransitionEffect from "../components/TransitionEffect";
const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, githubLink }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:border-light dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] " />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="w-full h-auto"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          priority
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={githubLink} target="_blank" className="w-10">
            <FaGithub size={35} className=" dark:fill-light" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold  dark:text-dark dark:bg-light sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, githubLink }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:border-light dark:bg-dark xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full max-h-[32rem]"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className=" w-full flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline dark:text-light md:text-base"
          >
            Visit
          </Link>
          <Link href={githubLink} target="_blank" className="w-8  md:w-6">
            <FaGithub size={35} className=" dark:fill-light" />
          </Link>
        </div>
      </div>
    </article>
  );
};

const page = () => {
  return (
    <>
      <Head>
        <title>Mike Jakuszewski | Portfolio</title>
        <meta name="description" content="Portfolio page" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16 ">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:text-7xl sm:mb-8 sm:text-6xl xs:text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Airbnb clone"
                img={project1}
                link="https://travelapp-taupe.vercel.app/"
                githubLink="https://github.com/MikeJakuszewski/Next-Travel-Booking-App"
                summary="Created a fully functional Airbnb clone for my portfolio site, showcasing my skills in web development, UI/UX design, and backend programming. Implemented user authentication, property listings, and booking functionality demonstrating a seamless and user-friendly experience."
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="E-com Website"
                title="E-commerce Tech Store"
                img={project2}
                link="https://mern-ecom-m5ef.onrender.com/"
                githubLink="https://github.com/MikeJakuszewski/Mern-Stack-Ecomm"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                type="SPA - Website"
                title="CocktailQuery"
                img={project3}
                link="https://cocktailquery.netlify.app/"
                githubLink="https://github.com/MikeJakuszewski/CocktailQuery"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};
export default page;
