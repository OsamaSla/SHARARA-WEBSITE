import { useState, useEffect, useCallback } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import Profile from "./sections/Profile.jsx";
import SheetMetal from "./sections/SheetMetal.jsx";
import HVAC from "./sections/HVAC.jsx";
import Products from "./sections/Products.jsx";
import Gallery from "./sections/Gallery.jsx";
import Contact from "./sections/Contact.jsx";

/**
 * Section configuration — maps section IDs to labels and components.
 * This makes it trivial to add/reorder sections later.
 */
const SECTIONS = [
  { id: "hero", label: "דף הבית", Component: Hero },
  { id: "profile", label: "פרופיל", Component: Profile },
  { id: "sheet-metal", label: "תעשיות פח", Component: SheetMetal },
  { id: "hvac", label: "מיזוג ואוורור", Component: HVAC },
  { id: "products", label: "מוצרים ו-CNC", Component: Products },
  { id: "gallery", label: "גלריה", Component: Gallery },
  { id: "contact", label: "צור קשר", Component: Contact },
];

export default function App() {
  /* Which section is currently in the viewport */
  const [activeSection, setActiveSection] = useState("hero");

  /**
   * IntersectionObserver — tracks which section is most visible
   * and updates `activeSection` accordingly.
   */
  useEffect(() => {
    const observers = [];

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /** Smooth-scroll to a section by id */
  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar
        sections={SECTIONS}
        activeSection={activeSection}
        onNavigate={scrollTo}
      />

      <main>
        {SECTIONS.map(({ id, Component }) => (
          <Component key={id} id={id} />
        ))}
      </main>

      <Footer sections={SECTIONS} onNavigate={scrollTo} />
    </div>
  );
}
