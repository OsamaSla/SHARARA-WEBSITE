/**
 * HVAC — ventilation and air conditioning systems.
 *
 * CLEAN LIGHT DESIGN: White/light-gray background, charcoal cards
 * only where needed for contrast. Blueprint grid pattern.
 * RTL-first layout for Hebrew content.
 */
export default function HVAC({ id }) {
  const capabilities = [
    {
      title: "תעלות פח ללחץ נמוך, בינוני וגבוה",
      subtitle: "ייצור מותאם לתשתיות אוורור מורכבות",
      imageAlt: "תעלות פח בקטרים שונים",
      badges: ["פח מגולוון Z180/Z275", "נירוסטה 304", "עובי 0.7mm—2.0mm"],
      specs: [
        "ייצור תעלות פח מוארכות ומעוגלות בקטרים של 100mm — 2000mm",
        "לחץ נמוך (LDB): עד 500 Pa — לתשתיות משרדים ומסחר",
        "לחץ בינוני (MDB): עד 1000Pa — לתעשיית המזון והפרמצבטיקה",
        "לחץ גבוה (HDB): עד 2000Pa — לתעשיות כבדות ומפעלים",
        "חיבורי flange אטומים עם אטמי גומי או סיליקון",
        "בידוד תרמי ואקוסטי לפי דרישות הפרויקט",
      ],
    },
    {
      title: "יחידות טיפול באוויר (יט\"א)",
      subtitle: "תיאום טכני ושילוב מערכות xử lý אוויר",
      imageAlt: "יחידה טיפול באוויר",
      badges: ["אלומיניום", "נירוסטה", "פילטרציה מתקדמת"],
      specs: [
        "תיאום טכני מלא עם יועצי מיזוג האוויר",
        "ייצור מארזים (Housing) מפח מגולוון או אלומיניום",
        "ממשקי חיבור גמישים לתעלות כניסה ויציאה",
        "התקנת פילטרים: G4, F7, F9 ו-HEPA לפי דרישה",
        "פתחי גישה לאחזקה וניקוי פילטרים שוטף",
        "התאמה לבקרת BMS וניהול אנרגיה חכם",
      ],
    },
    {
      title: "גרילים ומפזרים מאלומיניום ואביזרי קצה",
      subtitle: "מגוון רחב של אביזרי קצה לכל מערכת אוורור",
      imageAlt: "גריל אלומיניום להוצאה והכנסה",
      badges: ["אלומיניום אנודייז", "פח מגולוון", "צבע מותאם"],
      specs: [
        "גרילי הכנסה (Supply Grilles) בגדלים ועיצובים שונים",
        "גרילי הוצאה (Return Grilles) עם רשת הגנה",
        "מפזרי אוויר (Diffusers): ריבועי, מעוגלים, خطיים",
        "דמפר ידני ואוטומטי לוויסות זרימת אוויר",
        "מדפי עשן (Smoke Dampers) בתקן אש",
        "מחברים ואביזרי חיבור להשלמת המערכת",
      ],
    },
  ];

  return (
    <section id={id} className="py-24 sm:py-32 bg-neutral-50 overflow-hidden relative industrial-grid-dark">

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-brand-gold text-sm font-bold mb-3 uppercase tracking-wider">
            מיזוג ואוורור
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-charcoal mb-5 leading-tight">
            עבודות מיזוג אוויר
            <br />
            <span className="text-brand-gold">ואוורור</span>
          </h2>
          <p className="text-brand-charcoal-light text-lg leading-relaxed">
            אספקת מערכות ותעלות פח לפרויקטים מסחריים ותעשייתיים.
            מהdesign ועד ההתקנה — פתרון כולל תחת קורת גג אחת.
          </p>
        </div>

        {/* Capability Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-lg hover:shadow-brand-gold/10 hover:border-brand-gold/25 hover:-translate-y-1 transition-all duration-300 group overflow-hidden flex flex-col"
            >
              {/* Image Placeholder */}
              <div className="relative h-52 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center border-b border-gray-100">
                <div className="flex flex-col items-center gap-3 text-gray-300 group-hover:text-brand-gold/40 transition-colors duration-300">
                  <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs">{c.imageAlt}</span>
                </div>
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-brand-gold/15 rounded-tl-lg" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-brand-gold/15 rounded-br-lg" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-black text-brand-charcoal mb-1 group-hover:text-brand-gold transition-colors">
                  {c.title}
                </h3>
                <p className="text-brand-gold text-sm font-medium mb-4">{c.subtitle}</p>

                {/* Material badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {c.badges.map((b) => (
                    <span
                      key={b}
                      className="inline-flex items-center px-2.5 py-1 rounded-md bg-brand-charcoal/5 text-brand-charcoal text-xs font-semibold border border-brand-charcoal/10"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                {/* Technical specs */}
                <ul className="space-y-2.5 mb-6 flex-1">
                  {c.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-2.5 text-sm text-brand-charcoal-light leading-relaxed">
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

        {/* Bottom CTA Strip — charcoal for contrast */}
        <div className="mt-16 bg-brand-charcoal rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-right">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              צריכים ייעוץ למערכת אוורור?
            </h3>
            <p className="text-gray-300">
              הצוות המקצועי שלנו ישמח לתכנן לכם מערכת מותאמת אישית לפרויקט.
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
