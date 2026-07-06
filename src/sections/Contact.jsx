/**
 * Contact — request-for-quote form + contact details + map.
 *
 * CLEAN LIGHT DESIGN: White/slate background, no dark blue.
 * Right (RTL): RQF form with file upload.
 * Left (RTL): Phone, email, address, embedded map, Waze CTA.
 * Single email: info@sharara.co.il only.
 */
export default function Contact({ id }) {
  return (
    <section id={id} className="py-24 sm:py-32 bg-white relative overflow-hidden industrial-grid">

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-brand-gold text-sm font-bold mb-3 uppercase tracking-wider">
            צור קשר
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-charcoal mb-5 leading-tight">
            בקשה{" "}
            <span className="text-brand-gold">להצעת מחיר</span>
          </h2>
          <p className="text-brand-charcoal-light text-lg leading-relaxed">
            מלאו את הטופס או צרו קשר ישירות — הצוות שלנו ישמח לענות
            על כל שאלה ולתת הצעת מחיר מותאמת אישית.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* ══════ RIGHT (RTL) — RQF Form ══════ */}
          <div className="lg:col-span-3">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200/80"
            >
              {/* Name + Phone row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-brand-charcoal mb-2">
                    שם מלא *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="הכניסו שם מלא"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-brand-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-brand-charcoal mb-2">
                    טלפון *
                  </label>
                  <input
                    type="tel"
                    dir="ltr"
                    required
                    placeholder="050-0000000"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-brand-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-all text-left"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-brand-charcoal mb-2">
                  הודעה *
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="ספרו לנו על הפרויקט שלכם — סוג מוצר, כמויות, לוחות זמנים..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-brand-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-all resize-none"
                />
              </div>

              {/* File upload — blueprint / CAD */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-brand-charcoal mb-2">
                  העלאה של קובץ תכן / שרטוט (אופציונלי)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept=".pdf,.dwg,.dxf,.jpg,.jpeg,.png"
                    className="peer sr-only"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="flex items-center justify-center gap-3 w-full px-4 py-6 rounded-xl border-2 border-dashed border-gray-200 hover:border-brand-gold/50 bg-gray-50 hover:bg-brand-gold/5 text-brand-charcoal-light hover:text-brand-gold cursor-pointer transition-all duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <div className="text-center">
                      <span className="text-sm font-bold block">לחצו לבחירת קובץ</span>
                      <span className="text-xs text-gray-400">PDF, DWG, DXF, JPG, PNG — עד 10MB</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-white px-8 py-4 rounded-xl text-base font-bold shadow-lg shadow-brand-gold/25 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
              >
                שלחו בקשה להצעת מחיר
                <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>

          {/* ══════ LEFT (RTL) — Details & Map ══════ */}
          <div className="lg:col-span-2 space-y-6">

            {/* Phone card */}
            <div className="bg-brand-charcoal rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">התקשרו ישירות</h3>
              <div className="space-y-4">
                <a
                  href="tel:+97246082264"
                  className="flex items-center gap-3 text-gray-300 hover:text-brand-gold transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                    <svg className="w-5 h-5 rotate-[135deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">טלפון</p>
                    <p dir="ltr" className="font-bold">04-6082264</p>
                  </div>
                </a>
                <a
                  href="tel:+972535819466"
                  className="flex items-center gap-3 text-gray-300 hover:text-brand-gold transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                    <svg className="w-5 h-5 rotate-[135deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">נייד</p>
                    <p dir="ltr" className="font-bold">053-5819466</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Email + Address card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200/80">
              <div className="space-y-5">
                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">דוא״ל</p>
                    <a href="mailto:info@sharara.co.il" dir="ltr" className="text-brand-charcoal font-bold hover:text-brand-gold transition-colors">
                      info@sharara.co.il
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">כתובת</p>
                    <p className="text-brand-charcoal font-bold">אזור תעשייה ציפורי, נצרת</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder — fully responsive */}
            <div className="rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm">
              <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50">
                {/* Google Maps iframe placeholder — replace src with actual embed URL */}
                <iframe
                  title="מפת אזור תעשייה ציפורי, נצרת"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3389.1234567890123!2d35.28!3d32.70!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDQyJzAwLjAiTiAzNcKwMTYnNDguMCJF!5e0!3m2!1sil!2sil!4v1700000000000"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Waze CTA */}
            <a
              href="https://waze.com/ul?q=%D7%90%D7%96%D7%95%D7%A8+%D7%AA%D7%A2%D7%A9%D7%99%D7%94+%D7%A6%D7%99%D7%A4%D7%95%D7%A8%D7%99+%D7%A0%D7%A6%D7%A8%D7%AA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-brand-charcoal hover:bg-brand-charcoal/90 text-white px-6 py-4 rounded-xl text-base font-bold transition-all duration-200 group"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C7.03 0 2.5 3.11.71 7.65c-.13.33-.25.66-.36 1C.03 10.24-.2 12.83.06 15.34c.01.1.03.2.05.3.14.91.44 1.8.89 2.63.06.11.13.22.2.32.38.53.84 1.01 1.36 1.42.11.09.23.17.35.25.44.28.92.5 1.43.65.12.04.25.07.37.1.35.07.71.1 1.07.1h.13c.46 0 .91-.06 1.35-.18.17-.05.34-.11.5-.18.56-.25 1.07-.6 1.51-1.03.13-.12.25-.25.36-.39.16-.2.3-.41.42-.64.12-.23.22-.47.29-.72.04-.14.07-.28.09-.42.01-.09.02-.18.02-.27 0-.05 0-.11-.01-.16v-.13c-.01-.17-.04-.34-.08-.5-.06-.24-.15-.47-.27-.69-.11-.2-.24-.39-.39-.57l-.06-.07c-.24-.27-.52-.5-.82-.71-.12-.08-.24-.16-.37-.23-.51-.27-1.07-.44-1.66-.48-.14-.01-.27-.01-.41 0-.16.02-.32.06-.47.12-.28.11-.54.28-.76.49-.08.08-.16.17-.23.26-.12.16-.22.34-.3.53-.06.14-.11.28-.15.43-.03.1-.05.21-.07.31-.01.06-.02.13-.02.19v.07c.01.12.04.24.09.35.08.19.19.36.33.51.1.1.21.19.33.27.13.09.27.16.42.22.22.08.45.13.69.13.08 0 .16-.01.24-.02.13-.03.25-.08.36-.15.16-.1.3-.23.42-.38.07-.09.13-.19.18-.3.08-.16.14-.34.18-.52.03-.14.05-.28.05-.42 0-.17-.02-.34-.07-.5-.05-.17-.13-.33-.23-.48-.1-.15-.23-.28-.38-.39-.16-.12-.35-.21-.55-.27-.2-.06-.41-.09-.62-.08-.23.01-.45.06-.66.15-.24.1-.46.24-.65.42-.1.1-.19.21-.27.33-.1.16-.18.33-.24.51-.04.13-.07.26-.08.4-.01.09-.01.18 0 .27v.2c.01.14.04.28.1.41.08.18.19.34.33.48.09.09.19.17.3.24.14.08.28.14.44.18.21.06.43.08.65.07.14-.01.28-.04.41-.09.23-.1.44-.25.6-.45.08-.1.15-.21.21-.33.09-.17.15-.36.19-.55.03-.15.04-.3.04-.46 0-.18-.02-.36-.07-.53-.06-.2-.15-.39-.27-.56-.12-.17-.27-.32-.44-.44-.19-.13-.4-.23-.62-.29-.25-.07-.51-.1-.77-.08-.27.02-.53.09-.77.2-.27.13-.52.31-.72.53-.1.11-.2.23-.28.36-.11.18-.2.37-.26.58-.05.18-.08.36-.08.55 0 .17.02.34.06.5.06.24.16.46.29.66.12.18.27.34.45.47.2.14.42.25.66.32.27.08.55.12.84.12.23 0 .45-.03.67-.08.28-.07.54-.18.78-.33.13-.08.25-.18.36-.29.14-.15.26-.31.35-.49.1-.2.17-.42.21-.65.03-.17.05-.34.05-.52v-.13c0-.16-.01-.32-.04-.48-.04-.22-.11-.43-.21-.63-.1-.2-.23-.38-.38-.54-.17-.18-.37-.33-.59-.45-.24-.13-.5-.22-.78-.27-.29-.05-.59-.06-.88-.02-.31.04-.61.13-.89.26-.29.13-.56.31-.79.52-.12.11-.23.24-.33.38-.13.18-.23.38-.31.59-.06.16-.11.33-.14.5-.02.13-.03.26-.03.4 0 .15.02.3.06.44.06.21.15.41.27.59.12.18.27.34.45.47.19.14.41.25.65.32.26.08.53.12.81.12.24 0 .47-.03.7-.09.29-.08.56-.2.8-.36.13-.09.25-.19.36-.31.15-.16.27-.34.36-.54.1-.22.16-.46.19-.7.02-.18.03-.36.02-.54-.01-.21-.05-.42-.12-.62-.08-.22-.19-.42-.33-.6-.16-.2-.35-.37-.57-.5-.24-.14-.51-.24-.79-.3-.3-.07-.61-.09-.91-.06-.32.04-.64.13-.93.27-.31.15-.59.35-.82.6-.12.13-.23.28-.33.44-.12.2-.22.42-.29.65-.05.18-.08.36-.09.55-.01.15-.01.31 0 .46.01.2.05.4.12.59.09.23.22.44.38.62.17.19.38.35.61.47.25.13.52.22.8.26.3.05.61.05.91.01.33-.04.65-.14.94-.29.31-.16.59-.37.82-.63.12-.14.23-.29.32-.46.12-.22.21-.46.27-.71.04-.18.07-.37.07-.56 0-.19-.02-.38-.07-.56-.07-.25-.17-.49-.31-.7-.15-.22-.33-.41-.54-.57-.23-.17-.49-.31-.77-.41-.3-.11-.62-.18-.94-.2-.34-.02-.68.02-1.01.11-.35.1-.68.26-.97.47-.15.11-.29.24-.42.39-.15.18-.28.38-.38.6-.08.18-.14.37-.18.57-.03.16-.04.32-.04.49v.18c.01.21.05.42.13.62.09.22.22.42.38.59.17.18.38.33.61.44.25.12.52.2.81.23.31.04.63.03.94-.03.33-.07.65-.19.93-.36.15-.09.29-.2.42-.33.16-.16.3-.34.41-.54.12-.22.21-.46.26-.71.04-.2.06-.4.05-.6-.01-.24-.06-.47-.15-.69-.1-.24-.24-.46-.41-.65-.19-.21-.42-.38-.67-.52-.27-.15-.57-.26-.88-.33-.34-.07-.69-.1-1.04-.07-.37.04-.74.14-1.08.3-.36.17-.69.4-97.67-.97.69-.97.69-.97.69-.97z" />
              </svg>
              <span>ניווט באמצעות Waze</span>
              <svg className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
