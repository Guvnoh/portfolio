import { motion } from "framer-motion";
import { FiArrowDown, FiSend } from "react-icons/fi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg-gradient" />

      <motion.div
        className="hero__content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="hero__greeting" variants={itemVariants}>
          <span />
          {/* TODO: Replace with your name */}
          Hi, I'm Chukwuka
        </motion.p>

        <motion.h1 className="hero__headline" variants={itemVariants}>
          Let's get your business{" "}
          <span className="hero__headline-accent">a website!</span>
        </motion.h1>

        <motion.p className="hero__subtitle" variants={itemVariants}>
          {/* TODO: Replace with your own tagline */}
          Frontend · Backend · Full-Stack
        </motion.p>

        <motion.div className="hero__ctas" variants={itemVariants}>
          <a href="#projects" className="btn btn--primary">
            See My Work
            <FiArrowDown className="btn__icon" />
          </a>
          <a href="#contact" className="btn btn--outline">
            Let's Talk
            <FiSend className="btn__icon" />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-dot" />
        </div>
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
