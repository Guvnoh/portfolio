import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  // SiPostgresql,
  // SiGraphql,
  // SiFigma,
  // SiDocker,
  SiMongodb,
} from "react-icons/si";

const skills = [
  { name: "React", Icon: SiReact },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  // { name: 'PostgreSQL', Icon: SiPostgresql },
  // { name: 'GraphQL', Icon: SiGraphql },
  // { name: 'Figma', Icon: SiFigma },
  // { name: 'Docker', Icon: SiDocker },
  { name: "MongoDB", Icon: SiMongodb },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about__container">
        <motion.div
          className="about__text"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="section-title">
            About <span className="section-title__accent">Me</span>
          </h2>

          <div className="about__bio">
            <p>
              {/* TODO: Replace with your real bio */}
              I’m a frontend-focused web developer building modern websites and
              web apps with React, TypeScript, and Node.js. I enjoy turning
              ideas into clean, responsive products that are fast, functional
              and intuitive.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="about__skills"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="about__skills-title">Technologies I work with</h3>
          <div className="about__skills-grid">
            {skills.map(({ name, Icon }) => (
              <motion.div
                key={name}
                className="skill-tag"
                variants={itemVariants}
              >
                <Icon className="skill-tag__icon" />
                <span>{name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
