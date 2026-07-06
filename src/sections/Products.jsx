/**
 * Products — premium CNC and custom metal solutions grid.
 *
 * CLEAN LIGHT DESIGN: White background with blueprint grid pattern.
 * Three product cards with image placeholders, specs, and CTAs.
 * RTL-first layout for Hebrew content.
 */
export default function Products({ id }) {
  const products = [
    {
      title: "צורות לחיתוך CNC וסורגים בעיצוב אישי",
      subtitle: "דיוק אבסולוטי בכל חיתוך ועיצוב",
      imageAlt: "חיתוך CNC פח ומתכת",
      badges: ["חיתוך לייזר", "CNC פלזמה", "עיצוב אישי"],
      specs: [
        "חיתוך לייזר פייבר (Fiber) בפח עד עובי 25mm",
        "חיתוך פלזמה במתכות שחורות ועד 50mm",
        "סורגים מעוצבים במגוון דוגמאות ומידות",
        "גיליוטינה אוטומטית לחיתוך מדויק בזוויות",
        "הכנת חורים, חריצים ועיטורים לפי מפרט",
        "גימור מותאם: השחמה, גלוון או ציפוי אבקה",
      ],
    },
    {
      title: "עיצוב פחים מתקדם",
      subtitle: "כיפוף, קיפול והרכבה ברמת דיוק גבוהה",
      imageAlt: "עיצוב פחים בכיפוף CNC",
      badges: ["כיפוף CNC", "קיפול אוטומטי", "הרכבה"],
      specs: [
        "כיפוף פח במכונות CNC עד 3 מטר אורך",
        "זוויות כיפוף מדויקות ±0.5°",
        "קיפול אינטגראלי להגברת קשיחות",
        "הרכבה והלחמת חלקי פח מורכבים",
        "מידוף פח מותאם לתעשיות השונות",
        "ארונות חשמל וארונות תקשורת במידות מיוחדות",
      ],
    },
    {
      title: "זוויות ייעודיות ותנורי חימום",
      subtitle: "מוצרים מיוחדים לתעשיית הבנייה והמתכת",
      imageAlt: "זוויות פח ומתכת לתעשייה",
      badges: ["זוויות מותאמות", "תנורי חימום", "פרויקטים מיוחדים"],
      specs: [
        "זוויות פח מותאמות בגדלים שונים",
        "חיזוקים מבניים לתעשיית הבנייה",
        "תנורי חימום תעשייתיים לפח ומתכת",
        "מוצרי פח מיוחדים על פי דרישת הלקוח",
        "קופסאות ואביזרים לתשתיות חשמל",
        "פתרונות אינטגרציה לפרויקטים מורכבים",
      ],
    },
  ];

  return (
    <section id={id} className="py-24 sm:py-32 bg-neutral-50 relative overflow-hidden">
      {/* Blueprint grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(circle, #334155 0.6px, transparent 0.6px)`,
        backgroundSize: '20px 20px',
      }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-brand-gold text-sm font-bold mb-3 uppercase tracking-wider">
            מוצרים ו-CNC
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-charcoal mb-5 leading-tight">
            מוצרים ופתרונות{" "}
            <span className="text-brand-gold">CNC</span>
          </h2>
          <p className="text-brand-charcoal-light text-lg leading-relaxed">
            חיתוך, עיצוב וכיפוף מתכות בדיוק אבסולוטי.
            פס ייצור מתקדם עם מכונות CNC מהדור החדש.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-lg hover:shadow-brand-gold/10 hover:border-brand-gold/25 hover:-translate-y-1 transition-all duration-300 group overflow-hidden flex flex-col"
            >
              {/* Image placeholder */}
              <div className="relative h-52 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center border-b border-gray-100">
                <div className="flex flex-col items-center gap-3 text-gray-300 group-hover:text-brand-gold/40 transition-colors duration-300">
                  <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs">{p.imageAlt}</span>
                </div>
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-brand-gold/15 rounded-tl-lg" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-brand-gold/15 rounded-br-lg" />
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-black text-brand-charcoal mb-1 group-hover:text-brand-gold transition-colors">
                  {p.title}
                </h3>
                <p className="text-brand-gold text-sm font-medium mb-4">{p.subtitle}</p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.badges.map((b) => (
                    <span
                      key={b}
                      className="inline-flex items-center px-2.5 py-1 rounded-md bg-brand-charcoal/5 text-brand-charcoal text-xs font-semibold border border-brand-charcoal/10"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                {/* Specs */}
                <ul className="space-y-2.5 mb-6 flex-1">
                  {p.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-2.5 text-sm text-brand-charcoal-light leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
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
      </div>
    </section>
  );
}
