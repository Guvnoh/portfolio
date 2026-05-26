const projects = [
  {
    slug: "noris-stitches",
    title: "Nori's Stitches",
    images: [
      "/images/noris_stitches.png",
      "/images/noris_catalogue.png",
      "/images/noris_footer.png",
    ],
    description: `Responsive fashion catalogue website designed 
    to help customers browse collections easily across mobile and desktop devices`,
    detailedDescription: `A fully responsive e-commerce catalogue built for a fashion brand, enabling customers to browse collections, view product details, and explore the brand's offerings seamlessly across devices. The site focuses on visual storytelling and smooth navigation to create an engaging shopping experience.`,
    tags: ["React", "TypeScript", "Node.js", "Tailwind CSS", "MongoDB"],
    features: [
      "Responsive product catalogue with grid and list views",
      "Mobile-first design adapting to all screen sizes",
      "Product detail pages with high-res imagery",
      "Fast page loads with optimized assets",
      "Contact and inquiry form integration",
    ],
    liveUrl: "https://noris-stitches.vercel.app/",
    githubUrl: "https://github.com/Guvnoh/noris_stitches.git",
  },
  {
    slug: "oakwood-care",
    title: "Oakwood care",
    images: [
      "/images/oakwood.png",
      "/images/oakwood_dashboard.png",
      "/images/oakwood_residents.png",
      "/images/oakwood_login.png",
      "/images/oakwood_rooms.png",
      "/images/oakwood_meds.png",
      "/images/oakwood_incidents.png",
      "/images/oakwood_billing.png",
    ],
    description: `A React + TypeScript care home management platform 
    with a public-facing website (Home, Services, Gallery, Contact, Careers) 
    and a protected admin dashboard for managing residents, staff, rooms, medication,
     incidents and CQC reports.`,
    detailedDescription: `A comprehensive care home management platform built with React and TypeScript. The public-facing website showcases the facility's services, gallery, and career opportunities, while the protected admin dashboard provides full operational control. Administrators can manage resident records, staff schedules, room allocations, medication logs, incident reports, CQC compliance documentation, and billing — all from a single, intuitive interface.`,
    tags: ["React", "TypeScript", "Node.js", "Tailwind CSS", "MongoDB"],
    features: [
      "Public website with Home, Services, Gallery, Contact, and Careers pages",
      "Protected admin dashboard with role-based access",
      "Resident profile management with care records",
      "Staff scheduling and shift management",
      "Room and bed allocation tracking",
      "Medication administration logging",
      "Incident and CQC report generation",
      "Billing and invoice management",
    ],
    liveUrl: "https://oakwood-zeta.vercel.app/",
    githubUrl: "https://github.com/Guvnoh/oakwood.git",
  },
  {
    slug: "naija-kitchen",
    title: "Naija Kitchen",
    images: ["/images/naija_kitchen.png"],
    description: `A React + TypeScript, front end only restaurant website built with Vite, 
    featuring pages for Home, Menu, About, and Contact`,
    detailedDescription: `A modern, visually appealing restaurant website built with React and TypeScript using Vite. The site presents the restaurant's brand identity through a clean design, showcasing the menu, story, and contact information. It's optimized for performance and works flawlessly across all devices.`,
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    features: [
      "Landing page with hero section and brand story",
      "Interactive menu with categories and pricing",
      "About page highlighting the restaurant's history",
      "Contact page with location, hours, and inquiry form",
      "Responsive design for mobile and desktop",
      "Fast build times and optimized assets via Vite",
    ],
    liveUrl: "https://beamish-fairy-1a694f.netlify.app/",
    githubUrl: "https://github.com/Guvnoh/naija_kitchen.git",
  },
];

export default projects;

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null;
}
