"use client";
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

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div
      className={` w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden`}
    >
      <motion.h1
        variants={quote}
        initial="initial"
        animate="animate"
        className={` inline-block w-full text-dark font-bold capitalize text-8xl ${className}`}
      >
        {text.split(" ").map((word, i) => {
          return <span key={`${word}-${i}`}>{word} </span>;
        })}
      </motion.h1>
    </div>
  );
};
export default AnimatedText;
