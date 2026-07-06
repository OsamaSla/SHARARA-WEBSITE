import { useState, useEffect } from "react";

/**
 * Navbar — sticky, RTL-first, mobile-responsive navigation.
 *
 * Layout (RTL):
 *  RIGHT  → Logo + company tagline
 *  CENTER → Desktop nav links
 *  LEFT   → Gold CTA phone button
 *
 * Mobile: hamburger toggle → slide-in drawer overlay.
 */
export default function Navbar({ sections, activeSection, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Detect scroll to add backdrop-blur + shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /** Navigate to a section and close mobile menu */
  const handleNav = (id) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <>
      {/* ===== TOP NAV BAR ===== */}
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between gap-4">

            {/* ---- RIGHT: Logo + company tagline ---- */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <img
                src="/logo.png"
                alt="לוגו עלי שרארה בע״מ"
                className="h-10 sm:h-12 w-auto object-contain"
              />
              <div className="text-right hidden sm:block">
                <h1 className="text-base sm:text-lg font-bold text-brand-charcoal leading-tight">
                  עלי שרארה בע״מ
                </h1>
                <p className="text-[10px] text-gray-500 leading-tight">
                  תעשיות פח ומערכות אוורור ומיזוג אוויר
                </p>
              </div>
            </div>

            {/* ---- CENTER: Desktop nav links ---- */}
            <div className="hidden lg:flex items-center gap-1">
              {sections.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => handleNav(id)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeSection === id
                      ? "text-brand-gold bg-brand-gold/10"
                      : "text-gray-600 hover:text-brand-charcoal hover:bg-gray-100"
                  }`}
                >
                  {label}
                  {activeSection === id && (
                    <span className="absolute bottom-0 right-1/2 translate-x-1/2 w-6 h-0.5 bg-brand-gold rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* ---- LEFT: CTA Phone Button ---- */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+972535819466"
                className="hidden sm:inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-brand-gold/25 transition-all duration-200 hover:shadow-xl hover:shadow-brand-gold/30 hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4 rotate-[135deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                חייגו עכשיו: 053-5819466
              </a>

              {/* Mobile CTA — icon only */}
              <a
                href="tel:+972535819466"
                className="lg:hidden flex items-center justify-center w-10 h-10 bg-brand-gold text-white rounded-lg shadow-lg shadow-brand-gold/25"
                aria-label="התקשרו עכשיו"
              >
                <svg className="w-5 h-5 rotate-[135deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>

              {/* Hamburger button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="תפריט"
              >
                <span className={`block w-5 h-0.5 bg-brand-charcoal rounded transition-all duration-300 ${mobileOpen ? "translate-y-1.5 rotate-45" : ""}`} />
                <span className={`block w-5 h-0.5 bg-brand-charcoal rounded transition-all duration-300 mt-1 ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`block w-5 h-0.5 bg-brand-charcoal rounded transition-all duration-300 mt-1 ${mobileOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* ===== MOBILE DRAWER OVERLAY ===== */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer header with logo */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="לוגו עלי שרארה בע״מ"
                className="h-10 w-auto object-contain"
              />
              <div>
                <h2 className="text-base font-bold text-brand-charcoal">
                  עלי שרארה בע״מ
                </h2>
                <p className="text-[10px] text-gray-500">
                  תעשיות פח ומערכות אוורור ומיזוג אוויר
                </p>
              </div>
            </div>
          </div>

          {/* Drawer nav links */}
          <div className="p-4">
            {sections.map(({ id, label }, idx) => (
              <button
                key={id}
                onClick={() => handleNav(id)}
                className={`block w-full text-right px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 animate-slide-in-right ${
                  activeSection === id
                    ? "text-brand-gold bg-brand-gold/10"
                    : "text-gray-700 hover:bg-gray-50 hover:text-brand-charcoal"
                }`}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Drawer CTA */}
          <div className="absolute bottom-0 right-0 left-0 p-6 border-t border-gray-100 bg-gray-50">
            <a
              href="tel:+972535819466"
              className="flex items-center justify-center gap-2 w-full bg-brand-gold hover:bg-brand-gold-dark text-white py-3 rounded-lg text-base font-bold shadow-lg shadow-brand-gold/25 transition-all"
            >
              <svg className="w-5 h-5 rotate-[135deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              חייגו עכשיו: 053-5819466
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
