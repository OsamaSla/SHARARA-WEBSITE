/**
 * SheetMetal — industrial sheet metal fabrication capabilities.
 *
 * Three core product/service cards with technical specifications,
 * material badges, image placeholders, and per-card CTA buttons.
 * RTL-first layout targeting contractors and construction managers.
 */
export default function SheetMetal({ id }) {
  const services = [
    {
      title: "יצירת ארונות כיבוי אש",
      subtitle: "על פי התקן הישראלי והבינלאומי",
      imageAlt: "ארון כיבוי אש פח מגולוון",
      badges: ["פח מגולוון Z180", "פח מגולוון Z275", "תקן ישראלי"],
      specs: [
        "ייצור ארונות כיבוי אש בגדלים סטנדרטיים ובמידות מותאמות",
        "פח מגולוון בעובי 1.2mm — 2.0mm לעמידות מקסימלית",
        " DISCLAIMEdocking מדויק בלייזר או גיליוטינה",
        "צביעה באבקה polyester עמידה בחום ואש",
        "測試 בקרת איכות לכל ארון לפני מסירה",
        "התאמה לדרישות מכון התקנים הישראלי",
      ],
    },
    {
      title: "יצירת צינורות ספירל",
      subtitle: "עמידות, יעילות זרימת אוויר וקטרים מותאמים",
      imageAlt: "צינור ספירל פח מגולוון",
      badges: ["פח מגולוון Z180", "נירוסטה 304/316", "קטרים מ-100mm"],
      specs: [
        "ייצור צינורות ספירל בקטרים של 100mm — 1250mm",
        "עובי פח: 0.5mm — 1.5mm לפי דרישת הפרויקט",
        "חיבורי ספירל אטומים למניעת דליפת אוויר",
        "יעילות זרימת אוויר גבוהה עם התנגדות מינימלית",
        "זמינים ב镀锌 או נירוסטה לתנאי סביבה קשים",
        "מתאימים לתעלות אוורור, מיזוג ופינוי עשן",
      ],
    },
    {
      title: "מערכות מניעת רעשים ומדפי אש",
      subtitle: "משתיקי קול, מדפי אש ומונעים אוטומטיים",
      imageAlt: "משתיק קול ומדף אש לתעלות אוורור",
      badges: ["פח מגולוון", "אלומיניום", "תקן אש"],
      specs: [
        "משתיקי קול (Silencers) במגוון גדלים và רמות הפחתה",
        "מדפי אש (Fire Dampers) בתקן EN 15650 ואישור מכון התקנים",
        "מונעים אוטומטיים (Actuators) לחיבור לבקרת מבנה",
        "הפחתת רעש של 25dB — 40dB לפי דגם",
        "בדיקה תקופתית ואישור תקינות לכל מערכת",
        "התקנה ואחזקה שוטפת על ידי צוות מקצועי",
      ],
    },
  ];

  return (
    <section id={id} className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(45deg, #C69214 1px, transparent 1px),
                          linear-gradient(-45deg, #C69214 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ══════ Section Header ══════ */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-brand-gold text-sm font-bold mb-3 uppercase tracking-wider">
            תעשיות פח
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-charcoal mb-5 leading-tight">
            תעשיות פח
            <br />
            <span className="text-brand-gold">פתרונות ייצור מתקדמים</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            פתרונות ייצור מתקדמים בהתאמה הנדסית מלאה ולפי תקן.
            במפעלנו המצויד במכונות מהדור החדש — דיוק מרבי בכל פריט.
          </p>
        </div>

        {/* ══════ Service Cards Grid ══════ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-brand-gold/10 hover:border-brand-gold/20 hover:-translate-y-1 transition-all duration-300 group overflow-hidden flex flex-col"
            >
              {/* ── Image Placeholder ── */}
              <div className="relative h-52 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center border-b border-gray-100">
                <div className="flex flex-col items-center gap-3 text-gray-300 group-hover:text-brand-gold/40 transition-colors duration-300">
                  <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs">{s.imageAlt}</span>
                </div>
                {/* Corner accent */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-brand-gold/20 rounded-tl-lg" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-brand-gold/20 rounded-br-lg" />
              </div>

              {/* ── Card Body ── */}
              <div className="p-6 flex flex-col flex-1">

                {/* Title + subtitle */}
                <h3 className="text-xl font-black text-brand-charcoal mb-1 group-hover:text-brand-gold transition-colors">
                  {s.title}
                </h3>
                <p className="text-brand-gold text-sm font-medium mb-4">{s.subtitle}</p>

                {/* Material badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {s.badges.map((b) => (
                    <span
                      key={b}
                      className="inline-flex items-center px-2.5 py-1 rounded-md bg-brand-charcoal/5 text-brand-charcoal text-xs font-semibold border border-brand-charcoal/10"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                {/* Technical specs — bulleted list */}
                <ul className="space-y-2.5 mb-6 flex-1">
                  {s.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>

                {/* Per-card CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 w-full bg-gray-50 hover:bg-brand-gold hover:text-white text-brand-charcoal border border-gray-200 hover:border-brand-gold px-5 py-3 rounded-xl text-sm font-bold transition-all duration-200 group/btn mt-auto"
                >
                  בקש הצעת מחיר לפריט זה
                  <svg className="w-4 h-4 rotate-180 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ══════ Bottom CTA Strip ══════ */}
        <div className="mt-16 bg-brand-charcoal rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-right">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              צריכים ייעוץ טכני לתעשיית הפח?
            </h3>
            <p className="text-gray-400">
              הצוות ההנדסי שלנו ישמח לתכנן פתרון מותאם לפרויקט שלכם.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-white px-8 py-4 rounded-xl text-base font-bold shadow-lg shadow-brand-gold/25 transition-all duration-200 hover:shadow-xl"
          >
            צרו קשר עכשיו
            <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
