import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import useActiveSection from "../hooks/useActiveSection";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClick = () => setIsOpen(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
    >
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo" onClick={handleClick}>
          <span className="navbar__logo-bracket">&lt;</span>
          Guvnoh.build
          <span className="navbar__logo-bracket"> /&gt;</span>
        </Link>

        <div className="navbar__desktop-links">
          {navLinks.map((link) => {
            const section = link.href.replace("/#", "");
            const isActive = activeSection === section;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`navbar__link${isActive ? " navbar__link--active" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <button
          className="navbar__hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="navbar__mobile-menu"
          >
            {navLinks.map((link) => {
              const section = link.href.replace("/#", "");
              const isActive = activeSection === section;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`navbar__mobile-link${isActive ? " navbar__mobile-link--active" : ""}`}
                  onClick={handleClick}
                >
                  {link.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
