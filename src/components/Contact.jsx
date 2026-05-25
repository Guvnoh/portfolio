import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiSend,
  FiMail,
  FiMapPin,
  FiPhoneCall,
  FiMessageCircle,
} from "react-icons/fi";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace with actual form submission (e.g. EmailJS, Formspree, etc.)
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact__container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="contact__header"
        >
          <h2 className="section-title">
            Let's <span className="section-title__accent">Connect</span>
          </h2>
          <p className="contact__tagline">
            {/* TODO: Replace with your own tagline */}
            Have a project in mind? Let's build something great together.
          </p>
        </motion.div>

        <div className="contact__grid">
          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="name" className="contact__label">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="contact__input"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="contact__field">
                <label htmlFor="email" className="contact__label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="contact__input"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>
            <div className="contact__field">
              <label htmlFor="message" className="contact__label">
                Message
              </label>
              <textarea
                id="message"
                className="contact__textarea"
                placeholder="Tell me about your project..."
                rows={5}
                required
              />
            </div>
            <button type="submit" className="btn btn--primary contact__submit">
              {submitted ? "Message Sent!" : "Send Message"}
              <FiSend className="btn__icon" />
            </button>
          </motion.form>

          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="contact__info-item">
              <FiMail className="contact__info-icon" />
              <div>
                <span className="contact__info-label">Email</span>
                {/* TODO: Replace with your real email */}
                <a
                  href="mailto:asogwachukwuka@gmail.com"
                  className="contact__info-value"
                >
                  asogwachukwuka@gmail.com
                </a>
              </div>
            </div>
            <div className="contact__info-item">
              <FiMapPin className="contact__info-icon" />
              <div>
                <span className="contact__info-label">Based in</span>
                {/* TODO: Replace with your location */}
                <span className="contact__info-value">Onitsha, Nigeria</span>
              </div>
            </div>

            <div className="contact__info-item">
              <FiPhoneCall className="contact__info-icon" />
              <div>
                <span className="contact__info-label">Phone</span>
                {/* TODO: Replace with your location */}
                <span className="contact__info-value">+2347039328304</span>
              </div>
            </div>

            <div className="contact__socials">
              <span className="contact__socials-label">Find me on</span>
              <div className="contact__socials-row">
                {/* TODO: Replace # with actual profile URLs */}
                <a
                  href="https://github.com/Guvnoh"
                  className="contact__social-link"
                  aria-label="GitHub"
                  // onClick={(e) => e.preventDefault()}
                >
                  <FiGithub />
                </a>
                <a
                  href="https://linkedin.com/in/chukwuka-asogwa"
                  className="contact__social-link"
                  aria-label="LinkedIn"
                  onClick={(e) => e.preventDefault()}
                >
                  <FiLinkedin />
                </a>
                <a
                  href="tel:+2347039328304"
                  className="contact__social-link"
                  aria-label="Phone"
                  onClick={(e) => e.preventDefault()}
                >
                  <FiMessageCircle />
                </a>
                <a
                  href="https://twitter.com/chookarh"
                  className="contact__social-link"
                  aria-label="Twitter"
                  // onClick={(e) => e.preventDefault()}
                >
                  <FiTwitter />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
