# Ali Sharara Ltd — Industrial Sheet Metal & HVAC Website
# עלי שרארה בע"מ — אתר תעשיות פח ומערכות אוורור

---

## English

### Overview
**Ali Sharara Ltd** (עלי שרארה בע"מ) is a leading Israeli manufacturer specializing in **industrial sheet metal fabrication** and **HVAC ventilation systems**, established in 1970. Located in the Zippori Industrial Zone, Nazareth, the factory serves contractors, developers, and project managers with precision CNC engineering and custom metal solutions.

This repository contains the official company website — a modern, high-conversion, RTL-first single-page application built with contemporary web technologies.

### Tech Stack
- **React 19** — Component-based UI library
- **Vite 8** — Lightning-fast build tool & dev server (port `5180`)
- **Tailwind CSS v4** — Utility-first CSS with custom brand theme via `@theme`

### Features
- Full RTL (Right-to-Left) support for Hebrew
- Responsive mobile-first design with hamburger navigation
- Smooth scroll section tracking with IntersectionObserver
- Custom brand color system (Gold `#C69214`, Charcoal `#334155`)
- Blueprint engineering grid pattern backgrounds
- Interactive hover states with golden accent shadows
- GitHub Actions CI/CD → GitHub Pages deployment

### Getting Started

```bash
# Clone the repository
git clone https://github.com/OsamaSla/SHARARA-WEBSITE.git
cd SHARARA-WEBSITE

# Install dependencies
npm install

# Start development server (runs on port 5180)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Project Structure
```
src/
├── main.jsx              # Application entry point
├── index.css             # Tailwind v4 theme + animations
├── App.jsx               # Root component with section routing
├── components/
│   ├── Navbar.jsx        # Sticky RTL navbar with mobile drawer
│   └── Footer.jsx        # 3-column footer with contact info
└── sections/
    ├── Hero.jsx          # Split-screen landing with CTAs
    ├── Profile.jsx       # Company legacy & capabilities
    ├── SheetMetal.jsx    # Sheet metal fabrication services
    ├── HVAC.jsx          # Ventilation & air conditioning
    ├── Products.jsx      # CNC products & custom solutions
    ├── Gallery.jsx       # Project showcase with hover-zoom
    └── Contact.jsx       # RQF form, map, and Waze navigation
```

### Deployment
The site deploys automatically to **GitHub Pages** on every push to `main` via GitHub Actions. The workflow builds the Vite project and uploads the `dist/` folder.

---

## עברית

### סקירה כללית
**עלי שרארה בע"מ** היא חברה מובילה בישראל לעיבוד פח מתכת и מערכות אוורור ומיזוג אוויר, שנוסדה בשנת 1970. הממוקמת באזור תעשייה ציפורי בנצרת, המפעל משרת קבלנים, יזמים ומנהלי פרויקטים עם פתרונות CNC מדויקים ועיבוד מתכות מותאם אישית.

מאגר זה מכיל את אתר האינטרנט הרשמי של החברה — יישום דף יחיד מודרני, מותאם המרה ותמיכה ב-RTL, הבנוי בטכנולוגיות 웹 עכשוויות.

### טכנולוגיות
- **React 19** — ספריית ממשק קומפוננטות
- **Vite 8** — כלי בנייה מהיר ושרת פיתוח (פורט `5180`)
- **Tailwind CSS v4** — CSSUtility-first עם ערכת נושא מותאמת אישית

### הוראות הפעלה

```bash
# שכפול המאגר
git clone https://github.com/OsamaSla/SHARARA-WEBSITE.git
cd SHARARA WEBSITE

# התקנת תלויות
npm install

# הפעלת שרת פיתוח (רץ על פорт 5180)
npm run dev

# בנייה לפרודקשן
npm run build

# תצוגה מקדימה של בנייה לפרודקשן
npm run preview
```

### מבנה הפרויקט
```
src/
├── main.jsx              # נקודת כניסה
├── index.css             # ערכת נושא Tailwind + אנימציות
├── App.jsx               # רכיב שורש עם ניתוב קטעים
├── components/
│   ├── Navbar.jsx        # ניווט RTL עם תפריט נפתח לנייד
│   └── Footer.jsx        # כותרת תחתונה ב-3 עמודות
└── sections/
    ├── Hero.jsx          # דף נחיתה מפוצל עם כפתורי פעולה
    ├── Profile.jsx       # מורשת החברה ויכולות
    ├── SheetMetal.jsx    # שירותי עיבוד פח מתכת
    ├── HVAC.jsx          # אוורור ומיזוג אוויר
    ├── Products.jsx      # מוצרי CNC ופתרונות מותאמים אישית
    ├── Gallery.jsx       # תצוגת פרויקטים עם אפקט הגדלה
    └── Contact.jsx       # טופס בקשה, מפה וניווט Waze
```

### פריסה
האתר נפרס אוטומטית ל-**GitHub Pages** בכל דחיפה ל-`main` באמצעות GitHub Actions.
