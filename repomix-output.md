This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.gitignore
package.json
public/images/noris_stitches.png
public/images/oakwood.png
public/images/small_chops.png
public/index.html
README.md
src/App.css
src/App.js
src/components/About.jsx
src/components/Contact.jsx
src/components/Hero.jsx
src/components/Navbar.jsx
src/components/Projects.jsx
src/index.css
src/index.js
```

# Files

## File: .gitignore
```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

## File: package.json
```json
{
  "name": "portfolio",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/dom": "^10.4.1",
    "@testing-library/jest-dom": "^6.9.1",
    "@testing-library/react": "^16.3.2",
    "@testing-library/user-event": "^13.5.0",
    "framer-motion": "^12.40.0",
    "react": "^19.2.6",
    "react-dom": "^19.2.6",
    "react-icons": "^5.6.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

## File: public/index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#0a0a0f" />
    <meta
      name="description"
      content="Freelance full-stack web developer — React, Node.js, TypeScript. I build digital products that perform."
    />
    <title>CodeCraft — Freelance Full-Stack Developer</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

## File: README.md
```markdown
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
```

## File: src/App.css
```css
/* ============================================
   APP.CSS — All component styles
   ============================================ */

/* ---------- Shared / Utilities ---------- */

.section-title {
  font-size: clamp(1.75rem, 4.5vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

.section-title__accent {
  color: var(--accent);
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 2rem;
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 100px;
  transition: all 0.25s ease;
  position: relative;
  overflow: hidden;
}

.btn__icon {
  font-size: 1.1rem;
  transition: transform 0.25s ease;
}

.btn--primary {
  background: var(--accent);
  color: var(--bg-primary);
}

.btn--primary:hover {
  box-shadow: 0 0 30px var(--accent-glow);
  transform: translateY(-2px);
}

.btn--primary:hover .btn__icon {
  transform: translate(3px, 3px);
}

.btn--outline {
  background: transparent;
  color: var(--text-primary);
  border: 1.5px solid var(--border);
}

.btn--outline:hover {
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(-2px);
}

.btn--outline:hover .btn__icon {
  transform: translate(3px, -3px);
}

/* ---------- Navbar ---------- */

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--nav-height);
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

.navbar--scrolled {
  background: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 1px 0 var(--border);
}

.navbar__inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar__logo {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  transition: color 0.2s;
}

.navbar__logo:hover {
  color: var(--accent);
}

.navbar__logo-bracket {
  color: var(--accent);
  font-weight: 300;
}

.navbar__desktop-links {
  display: flex;
  gap: 2rem;
}

.navbar__link {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
  position: relative;
  padding: 0.25rem 0;
  transition: color 0.2s;
}

.navbar__link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent);
  transition: width 0.3s ease;
}

.navbar__link:hover {
  color: var(--text-primary);
}

.navbar__link:hover::after {
  width: 100%;
}

.navbar__hamburger {
  display: none;
  background: none;
  color: var(--text-primary);
  padding: 0.25rem;
}

.navbar__mobile-menu {
  position: absolute;
  top: var(--nav-height);
  left: 0;
  right: 0;
  background: rgba(10, 10, 15, 0.98);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  padding: 1rem 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-bottom: 1px solid var(--border);
}

.navbar__mobile-link {
  display: block;
  padding: 0.75rem 0;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border);
  transition: color 0.2s;
}

.navbar__mobile-link:hover {
  color: var(--accent);
}

@media (max-width: 768px) {
  .navbar__desktop-links {
    display: none;
  }

  .navbar__hamburger {
    display: block;
  }
}

/* ---------- Hero ---------- */

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: var(--nav-height) 1.5rem 4rem;
  overflow: hidden;
}

.hero__bg-gradient {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 50% at 20% 50%, rgba(0, 212, 255, 0.06) 0%, transparent 70%),
    radial-gradient(ellipse 40% 40% at 80% 30%, rgba(0, 212, 255, 0.04) 0%, transparent 70%);
  pointer-events: none;
}

.hero__content {
  max-width: 820px;
  text-align: center;
  position: relative;
  z-index: 1;
}

.hero__greeting {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--accent);
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.hero__greeting-line {
  display: block;
  width: 40px;
  height: 1.5px;
  background: var(--accent);
}

.hero__headline {
  font-size: clamp(2.25rem, 7vw, 4.5rem);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin-bottom: 1.25rem;
}

.hero__headline-accent {
  color: var(--accent);
}

.hero__subtitle {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: var(--text-secondary);
  max-width: 640px;
  margin: 0 auto 2.5rem;
  line-height: 1.7;
}

.hero__ctas {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.hero__scroll-indicator {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
}

.hero__scroll-mouse {
  width: 22px;
  height: 36px;
  border: 2px solid var(--text-muted);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  padding-top: 6px;
}

.hero__scroll-dot {
  width: 3px;
  height: 8px;
  background: var(--accent);
  border-radius: 2px;
  animation: scrollDot 2s ease-in-out infinite;
}

@keyframes scrollDot {
  0%, 100% { opacity: 1; transform: translateY(0); }
  50% { opacity: 0.3; transform: translateY(8px); }
}

/* ---------- About ---------- */

.about {
  padding: 6rem 1.5rem;
}

.about__container {
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.about__bio {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.about__bio p {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

.about__skills-title {
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
}

.about__skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: all 0.25s ease;
}

.skill-tag:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-dim);
  transform: translateY(-2px);
}

.skill-tag__icon {
  font-size: 1.15rem;
}

@media (max-width: 768px) {
  .about__container {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

/* ---------- Projects ---------- */

.projects {
  padding: 6rem 1.5rem;
  background: var(--bg-secondary);
}

.projects__container {
  max-width: var(--max-width);
  margin: 0 auto;
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
}

.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all 0.35s ease;
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: var(--accent-dim);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 212, 255, 0.05);
}

.project-card__image {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
}

.project-card__placeholder {
  width: 100%;
  height: 100%;
  /* TODO: Replace with real project screenshot */
  background: linear-gradient(135deg, var(--bg-card-hover) 0%, var(--bg-secondary) 50%, var(--bg-card-hover) 100%);
}

.project-card__overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 10, 15, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-card__overlay {
  opacity: 1;
}

.project-card__view-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--bg-primary);
  background: var(--accent);
  border-radius: 100px;
  transform: translateY(10px);
  transition: all 0.3s ease;
}

.project-card:hover .project-card__view-btn {
  transform: translateY(0);
}

.project-card__view-btn:hover {
  box-shadow: 0 0 25px var(--accent-glow);
}

.project-card__body {
  padding: 1.5rem;
}

.project-card__title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.project-card__description {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.project-card__tag {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.65rem;
  background: var(--accent-dim);
  color: var(--accent);
  border-radius: 100px;
}

@media (max-width: 768px) {
  .projects__grid {
    grid-template-columns: 1fr;
  }
}

/* ---------- Contact ---------- */

.contact {
  padding: 6rem 1.5rem;
}

.contact__container {
  max-width: var(--max-width);
  margin: 0 auto;
}

.contact__header {
  text-align: center;
  margin-bottom: 3rem;
}

.contact__tagline {
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 480px;
  margin: 0 auto;
}

.contact__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.contact__form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.contact__form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.contact__field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.contact__label {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
}

.contact__input,
.contact__textarea {
  padding: 0.85rem 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--text-primary);
  font-size: 0.95rem;
  transition: border-color 0.25s ease;
}

.contact__input:focus,
.contact__textarea:focus {
  border-color: var(--accent);
}

.contact__input::placeholder,
.contact__textarea::placeholder {
  color: var(--text-muted);
}

.contact__textarea {
  resize: vertical;
  min-height: 100px;
}

.contact__submit {
  align-self: flex-start;
}

.contact__info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 0.5rem;
}

.contact__info-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.contact__info-icon {
  font-size: 1.25rem;
  color: var(--accent);
  flex-shrink: 0;
  margin-top: 2px;
}

.contact__info-label {
  display: block;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  margin-bottom: 0.2rem;
}

.contact__info-value {
  font-size: 0.95rem;
  color: var(--text-secondary);
  transition: color 0.2s;
}

a.contact__info-value:hover {
  color: var(--accent);
}

.contact__socials {
  margin-top: 1rem;
}

.contact__socials-label {
  display: block;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
}

.contact__socials-row {
  display: flex;
  gap: 0.75rem;
}

.contact__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  font-size: 1.25rem;
  color: var(--text-secondary);
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: all 0.25s ease;
}

.contact__social-link:hover {
  color: var(--accent);
  border-color: var(--accent);
  background: var(--accent-dim);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .contact__grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .contact__form-row {
    grid-template-columns: 1fr;
  }
}

/* ---------- Footer ---------- */

.footer {
  text-align: center;
  padding: 2.5rem 1.5rem;
  font-size: 0.85rem;
  color: var(--text-muted);
  border-top: 1px solid var(--border);
}
```

## File: src/App.js
```javascript
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Guvnoh. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
```

## File: src/components/About.jsx
```javascript
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
              I'm a freelance full-stack developer with over six years of
              experience helping startups, agencies, and established businesses
              ship products that users love. I don't just write code — I solve
              problems, reduce complexity, and deliver results on time.
            </p>
            <p>
              Whether you need a polished frontend, a battle-tested API, or an
              entire platform from scratch, I work directly with you to turn
              your vision into a reliable, performant product. No bureaucracy,
              just craft and accountability.
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
```

## File: src/components/Contact.jsx
```javascript
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
```

## File: src/components/Hero.jsx
```javascript
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
          Frontend · Backend · Full-Stack etc.
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
```

## File: src/components/Navbar.jsx
```javascript
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        <a href="#hero" className="navbar__logo">
          <span className="navbar__logo-bracket">&lt;</span>
          Guvnoh.build
          <span className="navbar__logo-bracket"> /&gt;</span>
        </a>

        <div className="navbar__desktop-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
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
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="navbar__mobile-link"
                onClick={handleClick}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
```

## File: src/components/Projects.jsx
```javascript
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { image } from "framer-motion/client";

const projects = [
  {
    title: `Nori's Stitches`,
    image: "/images/noris_stitches.png",
    description: "A catalogue website for a Nigerian Women fashion brand ",
    tags: ["React", "Typescript", "Node.js", "Tailwind css", "Mongo DB"],
  },
  {
    title: "oakwood",
    image: "/images/oakwood.png",
    description: `A React + TypeScript care home management platform 
    with a public-facing website (Home, Services, Gallery, Contact, Careers) 
    and a protected admin dashboard for managing residents, staff, rooms, medication,
     incidents, CQC reports, and billing.`,
    tags: ["Next.js", "TypeScript", "GraphQL", "AWS Lambda"],
  },
  {
    // TODO: Replace with your real project
    title: "Small chops",
    image: "/images/small_chops.png",
    description: `A React + TypeScript, front end only restaurant website built with Vite, 
    featuring pages for Home, Menu, About, and Contact`,
    tags: ["React", "Node.js", "Stripe", "Tailwind CSS"],
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
                  <a
                    href="/"
                    className="project-card__view-btn"
                    onClick={(e) => e.preventDefault()}
                  >
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
```

## File: src/index.css
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap');

:root {
  --bg-primary: #0a0a0f;
  --bg-secondary: #111118;
  --bg-card: #16161f;
  --bg-card-hover: #1a1a2e;
  --text-primary: #f0f0f5;
  --text-secondary: #8888a0;
  --text-muted: #55556b;
  --accent: #00d4ff;
  --accent-dim: rgba(0, 212, 255, 0.1);
  --accent-glow: rgba(0, 212, 255, 0.25);
  --border: #1e1e2e;
  --success: #10b981;
  --radius: 12px;
  --radius-lg: 20px;
  --shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 8px 40px rgba(0, 0, 0, 0.4);
  --max-width: 1200px;
  --nav-height: 72px;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: var(--nav-height);
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: default;
}

a {
  text-decoration: none;
  color: inherit;
}

ul, ol {
  list-style: none;
}

img {
  max-width: 100%;
  display: block;
}

button {
  border: none;
  outline: none;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
}

input, textarea {
  font-family: inherit;
  font-size: inherit;
  outline: none;
  border: none;
}

section {
  position: relative;
}

::selection {
  background-color: var(--accent);
  color: var(--bg-primary);
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--bg-primary);
}

::-webkit-scrollbar-thumb {
  background: var(--border);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--text-muted);
}
```

## File: src/index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
