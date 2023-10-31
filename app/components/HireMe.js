import Image from "next/image";
import circularText from "../assets/Circular-text.svg";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative ">
        <Image
          src={circularText}
          alt="circular-text"
          className="animate-spin-slow dark:invert  "
        />
      </div>
      <Link
        href="mailto:michael_jakuszewski@hotmail.com"
        className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark w-[5.5rem] h-[5.5rem] text-light shadow-md border border-solid border-dark rounded-full font-semibold hover:bg-light hover:text-dark border-transparent dark:text-dark dark:bg-light dark:hover:bg-dark dark:hover:text-light dark:border-light"
      >
        {" "}
        Hire Me
      </Link>
    </div>
  );
};
export default HireMe;
