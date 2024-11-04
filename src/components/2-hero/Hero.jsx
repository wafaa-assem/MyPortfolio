import Lottie from "lottie-react";
import devAnimation from "./../../animation/dev.json";
import "./hero.css";
import { useRef } from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  const lottieRef = useRef();
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ damping: 7, type: "spring", stiffness: 100 }}
            src="me.jpeg"
            className="avatar"
            alt="avatar"
          />
          <div className="icon-verified" />
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Hi, I’m Wafaa Assem – a Front-End Developer passionate about web
          technologies.
        </motion.h1>
        <p className="subtitle">
          I specialize in creating responsive and dynamic web applications using
          HTML, CSS, JavaScript, and React. With a passion for clean design and
          seamless user experiences, I aim to build websites that are both
          visually appealing and highly functional.
        </p>
        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>
      <div className="right-section">
        <Lottie
          lottieRef={lottieRef}
          onLoadedImages={() => {
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};
