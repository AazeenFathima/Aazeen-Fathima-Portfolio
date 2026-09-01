# Aazeen Fathima M — Personal Portfolio Website



---

## 🌟 Highlights & Tech Stack

- **Framework**: React (Functional Components & Hooks) + Vite
- **Routing**: React Router 6 (`/`, `/about`, `/experience`, `/projects`, `/skills`, `/contact`)
- **Typography & Aesthetic**: Editorial luxury serif (`Playfair Display`, `Cormorant Garamond`) + crisp modern sans (`Plus Jakarta Sans`), warm cream ivory palette (`#FBF9F5`), charcoal ink (`#1E2229`), and warm terracotta accent (`#C26D53`).
- **Icons**: Lucide React
- **Performance**: Zero bulky animation libraries; ultra-fast load with lightweight CSS transitions.
- **Responsiveness**: Mobile-first design for mobile phones, tablets, and wide desktop screens.

---

## 📁 Site Structure

1. **Home (`/`)**: High-impact editorial hero with portrait, career objective statement, highlighted internships, featured projects, and quick skill clusters.
2. **About (`/about`)**: Personal narrative bio, development philosophy pillars, 3-stage academic timeline (B.Sc CS at PSGR Krishnammal, 12th & 10th at CMS Matriculation), and certifications/achievements (Wadhwani Ignite, DSA Interview Prep).
3. **Experience (`/experience`)**: Chronological timeline of all 3 industry internships (ZINLU Full Stack, FCPA International Services Zoho Creator, ELGI Equipments Limited) with deep-dive technical achievements and competency tags.
4. **Projects (`/projects`)**: Detailed architectural breakdown of:
   - *Patient Details Management Application* (Zoho Creator Low-Code Cloud System)
   - *NEURA — AI Chatbot for Department of Justice* (Wadhwani Ignite AI Prototyping)
5. **Skills (`/skills`)**: Grouped technical taxonomy covering Programming & DSA, Web & Low-Code, Core CS, and Cloud Tools & Platforms.
6. **Contact (`/contact`)**: Direct channels (Phone: `+91 9790126515`, Email: `aazeenfathima4@gmail.com`, LinkedIn, GitHub) + interactive contact form with direct `mailto:` execution.

---

## 🚀 Running the Project Locally

### 1. Prerequisites
Ensure [Node.js](https://nodejs.org/) (version 18 or higher) is installed on your computer.

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to the local URL shown in your terminal (usually `http://localhost:5173`).

### 4. Build for Production
```bash
npm run build
```
The output static bundle will be generated inside the `dist/` directory, ready to deploy to Vercel, Netlify, or GitHub Pages.

---

## 🖼️ Assets & Customization Guide

All personal assets and static files are centralized under the `public/assets/` directory:

| Asset | Path | Description |
|---|---|---|
| **Profile Photo** | `public/assets/profile.jpg` | Your current portrait is loaded automatically. To replace, overwrite this file with a new `.jpg` or `.png`. |
| **Resume PDF** | `public/assets/Aazeen_Fathima_Resume.pdf` | Downloadable resume file. Drop your latest resume PDF here with the same filename. |
| **Project Visual 1** | `public/assets/projects/zoho-patient.svg` | SVG mockups / screenshots for the Zoho Creator Patient system. |
| **Project Visual 2** | `public/assets/projects/neura-chatbot.svg` | SVG mockups / screenshots for the NEURA AI assistant. |
| **Favicon** | `public/assets/favicon.svg` | Monogram browser tab icon. |

### Updating Text & Data
All content (bio, phone, email, project descriptions, skills, internships) is cleanly organized in a single configuration file:
👉 **`src/data/portfolioData.js`**

Simply update the text or add new entries to `src/data/portfolioData.js` and the entire portfolio updates dynamically!
