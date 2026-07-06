The layout structure is excellent. We are now initializing a new GitHub repository and executing the final production-ready polish, incorporating an advanced industrial engineering theme to completely eliminate background flatness and visual boredom.

Please update the repository and deploy the live site according to these strict parameters:

1. TARGET REPOSITORY:
https://github.com/OsamaSla/SHARARA-WEBSITE.git
Please commit and push all updated source files directly to this repository.

2. INDUSTRIAL HVAC & DUCT FITTINGS THEME BACKGROUNDS:
- To eliminate any boredom from a flat or blank canvas, embed a highly professional technical aesthetic into the section backgrounds.
- Instead of solid plain gray or cold blue/slate tints, use absolute pure white (#FFFFFF) for Hero and Contact, and a very light neutral industrial gray (#F8FAFC) for the Products section.
- Layer a subtle engineering CAD/Blueprint grid pattern and overlapping vector paths that mimic sheet metal seams or segmented duct-fitting geometries (like curves/reducers) faintly in the background. 
- Ensure these background patterns use low opacity (e.g., `opacity-[0.04]` or `opacity-[0.05]`) so they remain elegant, highly contextual, and do not compromise text readability.

3. GOLDEN ACCENTS & CONTRAST "BREAKS":
- Use 'brand-gold' effectively on small interactive components: borders, bullets, and icon containers.
- Add micro-interactions on the catalog cards: a subtle lift (`hover:-translate-y-1`) and a soft golden ambient shadow glow (`hover:shadow-brand-gold/10`) so the interface feels dynamic.
- Keep specific structural blocks heavy and dark (like the "התקשרו ישירות" container in Contact using 'brand-charcoal') to break the light sections with striking architectural contrast.

4. TEXT CLEANUP & TYPO FIXES (Products.jsx):
- Completely remove any foreign or corrupted characters from the products list to ensure perfect Hebrew:
  - Change "חיתוך לייזר光纤 בפח" to "חיתוך לייזר פייבר (Fiber) בפח".
  - Change "finish מותאם" to "גימור מותאם".
  - Fix "קופסאות ואביזרים לתשתיות" (remove the corrupted character before אביזרים).
- Ensure Navbar top padding (`pt-24` or similar) prevents content or logos from being clipped beneath the sticky header.

5. GITHUB PAGES DEPLOYMENT:
- Configure and deploy the build automatically to GitHub Pages (via GitHub Actions or the `gh-pages` package) so that the application runs live online.

6. REPOSITORY DOCUMENTATION (README.md):
- Replace the existing README.md entirely with the following high-quality, professionally formatted structural documentation in both English and Hebrew:

---

# 🏗️ Ali Sharara Ltd — Industrial Sheet Metal & HVAC Systems
# עלי שרארה בע"מ — מפעל לפתרונות פח מתכת ומערכות אוורור תעשייתיות

---

## 🌐 English

### ⚙️ Overview
**Ali Sharara Ltd** (עלי שרארה בע"מ) is a premier Israeli manufacturer specializing in **heavy-duty sheet metal fabrication**, **precision CNC laser cutting**, and **advanced HVAC ventilation infrastructure**, established in 1970. Operating from the Zippori Industrial Zone in Nazareth, the factory engineers high-spec components, custom duct fittings (segmented bends, reducers), and ventilation assemblies for large-scale commercial, institutional, and industrial projects.

This repository hosts the official corporate web application — a premium, high-conversion, RTL-first digital storefront designed to bridge physical production excellence with a modern, technical web experience.

### 🧬 Design & Industrial Theme
The UI/UX directly mirrors the precision of the manufacturing floor:
- **Blueprint Grid System:** Interactive, low-opacity CAD grid vector paths subtly layered behind content sections, creating an authentic engineering workspace aesthetic.
- **Duct-Fitting Geometry:** Dynamic architectural lines and structural element spacing that reflect the forms of specialized HVAC layouts.
- **Premium Industrial Contrast:** Clean, ultra-bright white and neutral industrial gray canvas balanced with high-contrast 'Brand-Charcoal' blocks and vibrant 'Brand-Gold' interactive accents to eliminate flat web boredom.

### 💻 Tech Stack
- **React 19** — Component-driven, highly optimized user interface.
- **Vite 8** — Next-generation frontend build tooling running on development port `5180`.
- **Tailwind CSS v4** — Utility-first styling utilizing an advanced unified `@theme` configuration for precise brand token management.

### 🚀 Features
- 📜 **Full RTL Support:** Native, semantic implementation for professional Hebrew.
- 📱 **Mobile-First Responsiveness:** Flawless drawer navigation built for on-site contractors utilizing mobile devices.
- ⚡ **Performance Optimized:** Section tracking using native `IntersectionObserver` API for lag-free scroll synchronization.
- 🛠️ **Interactive UI Elements:** Premium micro-interactions including card-lifts (`hover:-translate-y-1`) and golden ambient shadows (`hover:shadow-brand-gold/10`).
- 🤖 **CI/CD Pipeline:** Fully automated deployment to **GitHub Pages** triggered on every branch push.

---

### 📦 Project Structure
src/
├── main.jsx              # Application entry point & configuration
├── index.css             # Tailwind v4 custom theme tokens & structural layers
├── App.jsx               # Root core rendering layout and section router
├── components/
│   ├── Navbar.jsx        # Sticky, high-contrast navigation bar with mobile drawer
│   └── Footer.jsx        # Structural 3-column industrial map, legal info, & links
└── sections/
├── Hero.jsx          # Dual-aspect showcase grid with bold corporate CTAs
├── Profile.jsx       # 50+ year company heritage, engineering standards, & legacy
├── SheetMetal.jsx    # CNC punching, stamping, and automated shearing services
├── HVAC.jsx          # Industrial ventilation networks, supply/exhaust systems
├── Products.jsx      # High-fidelity catalog displaying custom laser components & specs
├── Gallery.jsx       # Production floor and completed project gallery with zoom filters
└── Contact.jsx       # RFQ form, interactive maps, and localized Waze/Maps API links
---

### 🛠️ Getting Started

```bash
# Clone the repository
git clone [https://github.com/OsamaSla/SHARARA-WEBSITE.git](https://github.com/OsamaSla/SHARARA-WEBSITE.git)
cd SHARARA-WEBSITE

# Install industrial-grade dependencies
npm install

# Spin up local development server on port 5180
npm run dev

# Compile optimized static assets for production distribution
npm run build

# Preview the local production build engine
npm run preview

🇮🇱 עברית
⚙️ סקירה כללית
עלי שרארה בע"מ היא חברה מובילה וותיקה בישראל לייצור ועיבוד פח, חיתוך בלייזר CNC בדיוק גבוה, וייצור תשתיות אוורור ומיזוג אוויר תעשייתיות (HVAC), אשר נוסדה בשנת 1970. מהמפעל הממוקם באזור התעשייה ציפורי בנצרת, החברה מספקת פתרונות הנדסיים מתקדמים, תעלות ואביזרי קצה מורכבים (מצמצמים, קשתות סגמנט) ורכיבי פח בהתאמה אישית לפרויקטים מסחריים וציבוריים רחבי היקף.

מאגר זה מכיל את קוד המקור של אתר האינטרנט הרשמי של החברה — אפליקציית SPA מודרנית, מהירה, מותאמת לקידום והמרות, עם תמיכה מלאה ושפתית ב-RTL.

🧬 קו עיצובי ותמה תעשייתית
חוויית המשתמש והעיצוב (UI/UX) נבנו בהשראת הדיוק הנדרש ברצפת הייצור:

רשת שרטוט (Blueprint Grid): רקע המשלב קווי רשת גאומטריים עדינים ברוויה נמוכה המדמים קבצי CAD הנדסיים.

אלמנטים מעולם ה-HVAC: חלוקה מבנית וקווים ארכיטקטוניים השואבים השראה מצורות גאומטריות של תעלות ואביזרי פח.

קונטרסט מבני מנצח: שבירת "השעמום הלבן" על ידי שילוב רקעים ניטרליים מוארים (לבן מוחלט ואפור תעשייתי בהיר) לצד בלוקים כבדים בצבע פחם (Charcoal) ונגיעות זהב יוקרתיות (Brand-Gold) ברמת הרכיבים האינטראקטיביים.

💻 טכנולוגיות
React 19 — ארכיטקטורת רכיבים מתקדמת ומבוססת ביצועים.

Vite 8 — כלי בנייה חיוני ושרת פיתוח מהיר הרץ על פורט 5180.

Tailwind CSS v4 — עיצוב Utility-first תוך שימוש במנוע ה-@theme החדש לשליטה מלאה במיתוג האתר.

🚀 תכונות מרכזיות
📜 תמיכת RTL מלאה: מותאם באופן טבעי ומקצועי לשפה העברית.

📱 רספונסיביות מלאה (Mobile-First): תפריטי ניווט נשלפים המותאמים לעבודה נוחה של קבלנים ומנהלי פרויקטים בשטח מתוך מכשירים ניידים.

⚡ אופטימיזציית גלילה: מעקב חכם אחרי חלקי האתר השונים באמצעות IntersectionObserver לביצועים חלקים.

🛠️ רכיבים אינטראקטיביים: אפקטי ריחופים מתקדמים הכוללים הרמת כרטיסים (hover:-translate-y-1) והצללה היקפית בגוון זהב מט (hover:shadow-brand-gold/10).

🤖 אוטומציית CI/CD: פריסה והרצה אוטומטית של האתר ב-GitHub Pages בכל דחיפת קוד לענף ה-main.

📦 מבנה הפרויקט
src/
├── main.jsx              # נקודת הכניסה המרכזית של האפליקציה
├── index.css             # הגדרות עיצוב, קוביות CSS ואנימציות Tailwind v4
├── App.jsx               # רכיב האב וניהול הניתובי של חלקי האתר
├── components/
│   ├── Navbar.jsx        # סרגל ניווט דביק (Sticky) בעל ניגודיות גבוהה ותפריט נייד
│   └── Footer.jsx        # כותרת תחתונה מבנית בעלת 3 עמודות, מידע ליצירת קשר וניווט
└── sections/
    ├── Hero.jsx          # מסך פתיחה מפוצל ומרשים עם הנעות ברורות לפעולה
    ├── Profile.jsx       # הצגת מורשת החברה, תקני איכות והיסטוריה של מעל 50 שנה
    ├── SheetMetal.jsx    # פירוט יכולות עיבוד פח, כירסום, ניקוב וגזירה ממוחשבת
    ├── HVAC.jsx          # פתרונות אוורור תעשייתי, ייצור תעלות ומערכות יניקה
    ├── Products.jsx      # קטלוג מוצרים הנדסי מפורט כולל מפרטים טכניים מדויקים
    ├── Gallery.jsx       # גלריית פרויקטים ורצפת ייצור עם אפקטי הגדלה וסינון
    └── Contact.jsx       # טופס בקשת הצעת מחיר (RFQ), מפה אינטראקטיבית וקישורי Waze

# שכפול מאגר הקוד
git clone [https://github.com/OsamaSla/SHARARA-WEBSITE.git](https://github.com/OsamaSla/SHARARA-WEBSITE.git)
cd SHARARA-WEBSITE

# התקנת תלויות ורכיבי המערכת
npm install

# הרצת שרת הפיתוח המקומי (על פורט 5180)
npm run dev

# בניית גרסת פרודקשן מותאמת ומכווצת
npm run build

# הרצת תצוגה מקדימה לגרסת הפרודקשן המקומית
npm run preview
