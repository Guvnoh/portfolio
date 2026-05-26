import { useState, useEffect, useRef } from "react";

const SECTIONS = ["about", "services", "projects", "contact"];

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState(() => {
    const hash = window.location.hash.replace("#", "");
    return SECTIONS.includes(hash) ? hash : "";
  });

  const activeRef = useRef(activeSection);

  useEffect(() => {
    const ratios = {};

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios[entry.target.id] = entry.intersectionRatio;
        });

        let maxRatio = 0;
        let maxId = "";

        for (const [id, ratio] of Object.entries(ratios)) {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            maxId = id;
          }
        }

        if (maxId && maxRatio > 0 && maxId !== activeRef.current) {
          activeRef.current = maxId;
          setActiveSection(maxId);
          history.replaceState(null, "", `/#${maxId}`);
        }
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], rootMargin: "-80px 0px 0px 0px" }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
