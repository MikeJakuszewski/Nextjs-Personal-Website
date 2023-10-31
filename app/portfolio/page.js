import Head from "next/head";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";

import { FaGithub } from "react-icons/fa6";

const FeaturedProject = ({ type, title, summary, img, link, githubLink }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:border-light dark:bg-dark">
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light " />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={githubLink} target="_blank" className="w-10">
            <FaGithub size={35} className=" dark:fill-light" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold  dark:text-dark dark:bg-light"
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
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:border-light dark:bg-dark">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>

        <div className=" w-full flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline dark:text-light"
          >
            Visit
          </Link>
          <Link href={githubLink} target="_blank" className="w-8">
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
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16 ">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
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
            <div className="col-span-6">
              <Project
                type="Featured Project"
                title="Airbnb clone"
                img={project1}
                link="https://travelapp-taupe.vercel.app/"
                githubLink="https://github.com/MikeJakuszewski/Next-Travel-Booking-App"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                type="Featured Project"
                title="Airbnb clone"
                img={project1}
                link="https://travelapp-taupe.vercel.app/"
                githubLink="https://github.com/MikeJakuszewski/Next-Travel-Booking-App"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};
export default page;
