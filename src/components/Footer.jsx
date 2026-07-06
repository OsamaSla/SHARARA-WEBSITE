/**
 * Footer — professional 3-column layout with contact info,
 * quick links, company heritage note, and copyright row.
 *
 * CLEAN DESIGN: Charcoal (#334155) background — no blue.
 * Single email only: info@sharara.co.il
 */
export default function Footer({ sections, onNavigate }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-gray-300">
      {/* Main grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Column 1: Company Brief */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo.png"
                alt="לוגו עלי שרארה בע״מ"
                className="h-10 w-auto object-contain"
              />
              <h3 className="text-white text-xl font-bold">עלי שרארה בע״מ</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              חברה מובילה בתעשיית עיבוד פח ומתכת מאז 1970.
              אנו מתמחים בפתרונות מותאמים אישית לתעשיות השונות,
              עם דגש על איכות, דיוק ושירות מקצועי ברמה הגבוהה ביותר.
            </p>
            <div className="flex items-center gap-2 text-brand-gold text-sm font-semibold">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Sharara 1970 — למעלה מ-50 שנות ניסיון</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">ניווט מהיר</h4>
            <ul className="space-y-3">
              {sections.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => onNavigate(id)}
                    className="flex items-center gap-2 text-gray-400 hover:text-brand-gold text-sm transition-colors duration-200 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/40 group-hover:bg-brand-gold transition-colors" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">צור קשר</h4>
            <div className="space-y-4 text-sm">

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-gold/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-brand-gold rotate-[135deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">טלפון / נייד</p>
                  <p dir="ltr" className="text-gray-400">04-6082264</p>
                  <p dir="ltr" className="text-gray-400">053-5819466</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-gold/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">כתובת</p>
                  <p className="text-gray-400">אזור תעשייה ציפורי, נצרת</p>
                </div>
              </div>

              {/* Email — single: info@sharara.co.il */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-gold/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">דוא״ל</p>
                  <a href="mailto:info@sharara.co.il" className="text-gray-400 hover:text-brand-gold transition-colors block">info@sharara.co.il</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center sm:text-right">
            © {currentYear} עלי שרארה בע״מ. כל הזכויות שמורות.
            אין להעתיק או לשכפל תוכן מהאתר ללא אישור מראש.
          </p>
          <button
            onClick={() => onNavigate("hero")}
            className="flex items-center gap-2 text-gray-500 hover:text-brand-gold text-xs transition-colors group"
            aria-label="חזרה למעלה"
          >
            <span>חזרה למעלה</span>
            <svg className="w-4 h-4 rotate-180 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
