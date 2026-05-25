import { useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiExternalLink,
  FiCheck,
} from "react-icons/fi";
import { getProjectBySlug } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const [activeImage, setActiveImage] = useState(0);
  const ref = useRef(null);

  if (!project) {
    return (
      <div className="project-detail__not-found">
        <h1>Project not found</h1>
        <Link to="/" className="btn btn--primary">
          <FiArrowLeft /> Back Home
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      className="project-detail"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="project-detail__container">
        <Link to="/#projects" className="project-detail__back">
          <FiArrowLeft /> Back to Projects
        </Link>

        <div className="project-detail__gallery">
          <div className="project-detail__main-image">
            <img
              src={project.images[activeImage]}
              alt={project.title}
            />
          </div>
          {project.images.length > 1 && (
            <div className="project-detail__thumbnails">
              {project.images.map((img, i) => (
                <button
                  key={i}
                  className={`project-detail__thumb ${
                    i === activeImage ? "project-detail__thumb--active" : ""
                  }`}
                  onClick={() => setActiveImage(i)}
                >
                  <img src={img} alt={`${project.title} ${i + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="project-detail__content">
          <h1 className="project-detail__title">{project.title}</h1>

          <div className="project-card__tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-card__tag">
                {tag}
              </span>
            ))}
          </div>

          <p className="project-detail__description">
            {project.detailedDescription}
          </p>

          {project.features && (
            <div className="project-detail__features">
              <h3 className="project-detail__features-title">Key Features</h3>
              <ul className="project-detail__features-list">
                {project.features.map((feature, i) => (
                  <li key={i} className="project-detail__feature-item">
                    <FiCheck className="project-detail__feature-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.liveUrl && (
            <div className="project-detail__actions">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                Live Demo <FiExternalLink className="btn__icon" />
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
