import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiMonitor,
  FiGrid,
  FiSmartphone,
  FiLink,
  FiCloud,
} from "react-icons/fi";

const services = [
  {
    title: "Business Websites",
    description:
      "Clean, professional sites that communicate your brand, capture leads, and convert visitors into customers.",
    Icon: FiMonitor,
  },
  {
    title: "Admin Dashboards",
    description:
      "Data-rich interfaces with charts, tables, and controls that make managing your business a breeze.",
    Icon: FiGrid,
  },
  {
    title: "Responsive Redesigns",
    description:
      "Breathe new life into outdated sites. Fully responsive, accessible, and built for today's devices.",
    Icon: FiSmartphone,
  },
  {
    title: "API Integration",
    description:
      "Connect your frontend to third-party services, payment gateways, or custom backends with clean, typed APIs.",
    Icon: FiLink,
  },
  {
    title: "Deployment & Hosting",
    description:
      "From Vercel and Netlify to AWS. I get your project live and secured.",
    Icon: FiCloud,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="services" ref={ref}>
      <div className="services__container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            What I <span className="section-title__accent">Do</span>
          </h2>
        </motion.div>

        <motion.div
          className="services__grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map(({ title, description, Icon }) => (
            <motion.article
              key={title}
              className="service-card"
              variants={cardVariants}
            >
              <div className="service-card__icon-wrap">
                <Icon className="service-card__icon" />
              </div>
              <h3 className="service-card__title">{title}</h3>
              <p className="service-card__description">{description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
