/**
 * Profile — authoritative company profile section.
 *
 * Layout: soft separated background, two-column on desktop.
 * RIGHT (RTL): Detailed company narrative — legacy, location, expertise.
 * LEFT:        Key capability highlights in a stacked card format.
 *
 * Content covers: founding year (1970), Zippori Industrial Zone location,
 * trusted partner positioning, ductwork expertise, fire safety compliance,
 * and CNC automation.
 */
export default function Profile({ id }) {
  /** Highlighted capabilities shown as stacked cards on the left */
  const capabilities = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "תעלות אוורור בלחץ גבוה",
      desc: "תכנון, ייצור והתקנת תעלות אוורור בקטרים ולחצים שונים — מלחץ נמוך ועד גבוה, בתקנים מחמירים.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "ארונות כיבוי אש על פי התקן",
      desc: "ייצור ארונות כיבוי אש העומדים בתקן הישראלי והבינלאומי — בדיקה ואישור לכל מוצר.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "הנדסת פח אוטומטית ב-CNC",
      desc: "ציוד CNC מהדור החדש — חיתוך לייזר, כיפוף אוטומטי והרחקה מדויקת ברמת מיקרון.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "שותף טכני מהימן",
      desc: "שותפים מובילים לקבלנים, יזמים ומנהלי פרויקטים — ליווי משלב התכנון ועד ההתקנה בשטח.",
    },
  ];

  return (
    <section id={id} className="py-24 sm:py-32 bg-gray-50 relative overflow-hidden industrial-grid-dark">

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* ══════ RIGHT COLUMN (RTL) — Company Narrative ══════ */}
          <div className="order-2 lg:order-1">
            {/* Section label */}
            <span className="inline-block text-brand-gold text-sm font-bold mb-3 uppercase tracking-wider">
              הפרופיל שלנו
            </span>

            {/* Main heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-charcoal mb-6 leading-tight">
              שרארה 1970
              <br />
              <span className="text-brand-gold">ותק וחדשנות</span> בתעשיית הפח
            </h2>

            {/* Company narrative paragraphs */}
            <div className="space-y-5 text-gray-600 leading-relaxed text-base sm:text-lg">
              <p>
                מפעל <strong className="text-brand-charcoal">עלי שרארה בע״מ</strong> הוקם בשנת 1970 באזור
                התעשייה ציפורי בנצרת, ומאז הפך שם נרדף לאמינות, דיוק ומקצועיות
                בלתי מתפשרת בתעשיית עיבוד פח ומתכת בישראל.
              </p>
              <p>
                אנו גאים להיות שותפים טכניים מהימנים לקבלנים, יזמים, חברות בנייה
                ומנהלי פרויקטים מכל רחבי הארץ. הניסיון המצטבר של למעלה מחמישה
                עשורים מאפשר לנו להציע פתרונות מותאמים אישית — משלב התכנון
                וה الهندסת קונספט ועד ההתקנה הסופית באתר.
              </p>
              <p>
                התמחותנו העיקרית כוללת תכנון וייצור מערכות אוורור ומיזוג אוויר
                בלחצים שונים — מלחץ נמוך ועד גבוה — וכן ארונות כיבוי אש על פי
                התקן הישראלי והבינלאומי. בנוסף, פס ה-CNC האוטומטי שלנו מבטיח
                דיוק מרבי בכל חיתוך, כיפוף והרחקה של פח מתכת.
              </p>
            </div>

            {/* Location & contact mini-strip */}
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 border border-gray-100 shadow-sm">
                <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-600">אזור תעשייה ציפורי, נצרת</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 border border-gray-100 shadow-sm">
                <svg className="w-4 h-4 text-brand-gold rotate-[135deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+972535819466" dir="ltr" className="text-gray-600 hover:text-brand-gold transition-colors font-medium">053-5819466</a>
              </div>
            </div>
          </div>

          {/* ══════ LEFT COLUMN (RTL) — Capability Cards ══════ */}
          <div className="order-1 lg:order-2 space-y-5">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:shadow-brand-gold/10 hover:border-brand-gold/20 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold flex-shrink-0 group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                    {c.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-charcoal mb-1.5">
                      {c.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Bottom accent stat */}
            <div className="bg-brand-charcoal rounded-2xl p-6 text-center">
              <div className="text-4xl font-black text-brand-gold mb-1">50+</div>
              <div className="text-gray-400 text-sm">שנות ניסיון בתעשיית הפח הישראלית</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
