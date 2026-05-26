# Portfolio

A personal portfolio website built with **React 19** and **Vite**, featuring animated page transitions, a contact form, and a project showcase.

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router v7](https://reactrouter.com/)
- [Framer Motion](https://www.framer.com/motion/) — animations
- [React Icons](https://react-icons.github.io/react-icons/)
- [EmailJS](https://www.emailjs.com/) — contact form

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode with Vite's fast HMR.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### `npm run build`

Builds the app for production to the `dist` folder.

### `npm run preview`

Previews the production build locally.

## Project Structure

```
src/
├── components/   # Hero, About, Services, Projects, Contact, Navbar
├── pages/        # ProjectDetail
├── data/         # project data
├── hooks/        # useScrollToHash
├── App.jsx
└── main.jsx
```

## Features

- Single-page layout with scrollable sections (Hero, About, Services, Projects, Contact)
- Project detail pages via React Router (`/projects/:slug`)
- Scroll-to-hash navigation
- Framer Motion animations
- Contact form powered by EmailJS
