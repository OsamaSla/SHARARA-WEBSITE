/**
 * Hero — Split-screen hero with brand identity and industrial imagery.
 *
 * CLEAN LIGHT DESIGN: White background with subtle blueprint grid,
 * gold accents, and charcoal text. No dark blue anywhere.
 *
 * Desktop layout (RTL):
 *  RIGHT → Company logo, headline, subheadline, dual CTAs, trust badges
 *  LEFT  → Industrial visual placeholder
 *
 * Mobile: Stacked vertically.
 */
export default function Hero({ id }) {
  const badges = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      text: "אספקה מהירה לקבלנים",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      text: "ייצור לפי מפרט CNC מדויק",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      text: "ניסיון של מעל 50 שנה",
    },
  ];

  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center bg-white overflow-hidden pt-24 lg:pt-0"
    >
      {/* Blueprint dot grid — light industrial feel */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #334155 0.8px, transparent 0.8px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Subtle gold glow accents */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-gold/[0.04] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/3 w-[350px] h-[350px] bg-brand-gold/[0.03] rounded-full blur-[100px]" />

      {/* Main content grid */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* RIGHT COLUMN (RTL) — Branding & Copy */}
          <div className="order-2 lg:order-1 text-right">
            {/* Logo */}
            <div className="mb-8 animate-fade-in-up">
              <img
                src="/logo.png"
                alt="עלי שרארה בע״מ לוגו"
                className="h-20 sm:h-24 lg:h-28 w-auto object-contain"
              />
            </div>

            {/* Heritage badge */}
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up delay-100">
              <span className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" />
              מאז 1970 — למעלה מ-50 שנות ניסיון
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-brand-charcoal leading-tight mb-5 animate-fade-in-up delay-100">
              עלי שרארה בע״מ
              <br />
              <span className="text-brand-gold">תעשיות פח</span> ומערכות
              <br />
              אוורור ומיזוג אוויר
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg lg:text-xl text-brand-charcoal-light leading-relaxed mb-10 max-w-lg animate-fade-in-up delay-200">
              ייצור מתקדם, דיוק הנדסי ועמידה בתקנים המחמירים ביותר מאז 1970.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up delay-300">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 bg-brand-gold hover:bg-brand-gold-dark text-white px-8 py-4 rounded-xl text-base font-bold shadow-xl shadow-brand-gold/25 transition-all duration-200 hover:shadow-2xl hover:shadow-brand-gold/30 hover:-translate-y-0.5"
              >
                קבלת הצעת מחיר מהירה
                <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="tel:+972535819466"
                className="inline-flex items-center gap-2.5 bg-white hover:bg-gray-50 text-brand-charcoal px-8 py-4 rounded-xl text-base font-semibold border-2 border-brand-charcoal/15 hover:border-brand-gold/50 transition-all duration-200"
              >
                <svg className="w-5 h-5 rotate-[135deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                חיוג ישיר למפעל: 053-5819466
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in-up delay-500">
              {badges.map((b) => (
                <div key={b.text} className="flex items-center gap-2.5 text-brand-charcoal-light text-sm">
                  <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold flex-shrink-0">
                    {b.icon}
                  </div>
                  <span>{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* LEFT COLUMN (RTL) — Industrial Visual */}
          <div className="order-1 lg:order-2 animate-fade-in-up delay-200">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-white border border-gray-200/80 aspect-[4/3] lg:aspect-square xl:aspect-[4/3]">
              {/* Metallic geometric shapes */}
              <div className="absolute inset-0">
                <div className="absolute top-[15%] right-[10%] w-[80%] h-[2px] bg-gradient-to-l from-brand-gold/40 to-transparent rotate-[-15deg]" />
                <div className="absolute top-[35%] right-[5%] w-[70%] h-[1px] bg-gradient-to-l from-brand-gold/25 to-transparent rotate-[-12deg]" />
                <div className="absolute top-[55%] right-[15%] w-[60%] h-[1px] bg-gradient-to-l from-brand-gold/15 to-transparent rotate-[-18deg]" />
              </div>

              {/* Gear / machine circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full border-2 border-brand-charcoal/10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-44 sm:h-44 lg:w-52 lg:h-52 rounded-full border border-brand-charcoal/5" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-brand-gold/10 border border-brand-gold/20" />

              {/* Corner accent dots */}
              <div className="absolute top-8 left-8 w-2 h-2 bg-brand-gold/40 rounded-full animate-pulse" />
              <div className="absolute bottom-12 right-12 w-1.5 h-1.5 bg-brand-gold/30 rounded-full animate-pulse delay-300" />

              {/* Central label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="w-20 h-20 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-brand-charcoal text-sm sm:text-base font-bold">
                  דיוק הנדסי בסטנדרט בינלאומי
                </p>
                <p className="text-brand-charcoal-light text-xs sm:text-sm mt-1">
                  חיתוך לייזר • כיפוף CNC • הרחקה והלחמה
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-charcoal-lighter animate-bounce">
        <span className="text-xs">גללו למטה</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
