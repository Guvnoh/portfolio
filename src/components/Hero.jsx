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
          Hi, I'm Chukwuka
        </motion.p>

        <motion.h1 className="hero__headline" variants={itemVariants}>
          Let's get your business
          <span className="hero__headline-accent"> a website!</span>
        </motion.h1>

        <motion.p className="hero__subtitle" variants={itemVariants}>
          I build responsive websites and web applications that ensures that
          your business stands out online.
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
    </section>
  );
}
