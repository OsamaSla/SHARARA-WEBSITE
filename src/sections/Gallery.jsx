/**
 * Gallery — media showcase grid with hover-zoom effects.
 *
 * CLEAN LIGHT DESIGN: White background, light placeholder frames.
 * 6 gallery items representing factory floor executions.
 * Smooth hover-zoom on image area with overlay reveal.
 */
export default function Gallery({ id }) {
  const items = [
    { id: 1, title: "תעלות ספירל בקטרים גדולים", category: "אוורור" },
    { id: 2, title: "ארונות כיבוי אש מאושרים", category: "כיבוי אש" },
    { id: 3, title: "רשת תעלות תעשייתית", category: "מיזוג" },
    { id: 4, title: "חיתוך CNC פח מגולוון", category: "CNC" },
    { id: 5, title: "מדפי אש ומשתיקי קול", category: "בטיחות" },
    { id: 6, title: "התקנה באתר לקוח", category: "פרויקטים" },
  ];

  return (
    <section id={id} className="py-24 sm:py-32 bg-neutral-50 relative overflow-hidden pattern-hatching">

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-brand-gold text-sm font-bold mb-3 uppercase tracking-wider">
            גלריה
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-charcoal mb-5 leading-tight">
            פרוייקטים{" "}
            <span className="text-brand-gold">שונים</span>
          </h2>
          <p className="text-brand-charcoal-light text-lg leading-relaxed">
            מבחר מהפרויקטים שביצענו — כל פרויקט הוא עדות למקצועיות
            ולמחויבות שלנו לאיכות.
          </p>
        </div>

        {/* Gallery grid — 3 col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200/60 cursor-pointer hover:shadow-lg hover:shadow-brand-gold/10 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Placeholder content with zoom effect */}
              <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <div className="flex flex-col items-center gap-2 text-gray-300 group-hover:text-brand-gold/30 transition-colors duration-300">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs">{item.title}</span>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <span className="text-brand-gold text-xs font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-white text-lg font-bold">{item.title}</h3>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-brand-gold/0 group-hover:border-brand-gold/40 rounded-tl-lg transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
