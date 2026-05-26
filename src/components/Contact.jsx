import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiSend,
  FiMail,
  FiMapPin,
  FiPhoneCall,
  FiCheck,
  FiAlertCircle,
} from "react-icons/fi";

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus("sent");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 5000);
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
            ref={formRef}
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
                  name="name"
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
                  name="email"
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
                name="message"
                className="contact__textarea"
                placeholder="Tell me about your project..."
                rows={5}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn--primary contact__submit"
              disabled={status === "sending"}
            >
              {status === "sending" && "Sending..."}
              {status === "sent" && "Message Sent!"}
              {status === "error" && "Failed — Try Again"}
              {status === "idle" && "Send Message"}
              {status === "sent" ? (
                <FiCheck className="btn__icon" />
              ) : status === "error" ? (
                <FiAlertCircle className="btn__icon" />
              ) : (
                <FiSend className="btn__icon" />
              )}
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
                <span className="contact__info-value">Onitsha, Nigeria</span>
              </div>
            </div>

            <div className="contact__info-item">
              <FiPhoneCall className="contact__info-icon" />
              <div>
                <span className="contact__info-label">Phone</span>
                <span className="contact__info-value">+2347039328304</span>
              </div>
            </div>

            <div className="contact__socials">
              <span className="contact__socials-label">Find me on</span>
              <div className="contact__socials-row">
                <a
                  href="https://github.com/Guvnoh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                  aria-label="GitHub"
                >
                  <FiGithub />
                </a>
                {/* <a
                  href="https://linkedin.com/in/chukwuka-asogwa"
                  className="contact__social-link"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin />
                </a> */}
                <a
                  href="https://wa.me/2347039328304"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://twitter.com/chookarh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                  aria-label="Twitter"
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
