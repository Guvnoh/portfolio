import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { image } from "framer-motion/client";

const projects = [
  {
    title: `Nori's Stitches`,
    image: "/images/noris_stitches.png",
    description: `Responsive fashion catalogue website designed 
    to help customers browse collections easily across mobile and desktop devices`,
    tags: ["React", "Typescript", "Node.js", "Tailwind css", "Mongo DB"],
    link: "https://noris-stitches.vercel.app/",
  },
  {
    title: "oakwood",
    image: "/images/oakwood.png",
    description: `A React + TypeScript care home management platform 
    with a public-facing website (Home, Services, Gallery, Contact, Careers) 
    and a protected admin dashboard for managing residents, staff, rooms, medication,
     incidents, CQC reports, and billing.`,
    tags: ["Next.js", "TypeScript", "GraphQL", "AWS Lambda"],
    link: "https://oakwood-zeta.vercel.app/",
  },
  {
    // TODO: Replace with your real project
    title: "Small chops",
    image: "/images/small_chops.png",
    description: `A React + TypeScript, front end only restaurant website built with Vite, 
    featuring pages for Home, Menu, About, and Contact`,
    tags: ["React", "Node.js", "Stripe", "Tailwind CSS"],
    link: "https://small-chops.vercel.app/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="projects__container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            Latest <span className="section-title__accent">Projects</span>
          </h2>
        </motion.div>

        <motion.div
          className="projects__grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className="project-card"
              variants={cardVariants}
            >
              {/* TODO: Replace placeholder gradient with real project image/screenshot */}
              <div className="project-card__image">
                <img src={project.image} alt={project.title} />
                <div className="project-card__overlay">
                  <a href={project.link} className="project-card__view-btn">
                    View Project
                    <FiExternalLink />
                  </a>
                </div>
              </div>

              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">
                  {project.description}
                </p>
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
