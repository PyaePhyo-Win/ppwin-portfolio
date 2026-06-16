# Personal Portfolio Website 🚀

A modern, fast, and fully-responsive developer portfolio website built using a premium, highly-optimized technology stack. Designed to stand out with elegant fluid layout animations, a customizable dark/light theme, and scroll-to-reveal transitions.

---

## 🛠️ Tech Stack

This project is built from scratch utilizing modern web development standards and best practices:

- **Frontend Framework:** **Vue 3** (Composition API with `<script setup>` for clean and modular layout logic)
- **Bundler & Tooling:** **Vite** (provides lightning-fast development Hot Module Replacement and highly optimized production assets)
- **Styling Utility:** **Tailwind CSS v4** (next-generation engine utilizing utility classes and modern native CSS variables)
- **Language:** **TypeScript** (brings robust static type checking, auto-completion, and contract safety across data boundaries)
- **Routing:** **Vue Router** (manages smooth anchor link transitions with native scroll-aware behaviors)

---

## ✨ Features

- **Fluid Scroll-to-Reveal Animation Engine:** Powered by a lightweight Vue custom directive (`v-reveal`) backed by the native high-performance browser `IntersectionObserver` API. This allows content to fade, scale, or slide smoothly into view.
- **Dynamic Dark & Light Mode Theme:** Mapped with custom native CSS properties, respecting the user's operating system preferences, and seamlessly saving choices in local storage.
- **Fully Componentized Architecture:** Highly decoupled structural components that represent each profile section, allowing for simple reorganizations or quick additions.
- **Fully Responsive Adaptive Layouts:** Designed meticulously using modern Flexbox and CSS Grid frameworks, ensuring visual perfection across smartphones, tablets, laptops, and ultra-wide screens.
- **Unified Decoupled Configuration:** Design layouts and dynamic content are completely separated. All details of your professional journey reside in a central configuration database.

---

## 📂 Project Structure

```text
my-portfolio/
├── public/                 # Static public assets (icons, SVGs, resumes)
└── src/
    ├── assets/             # Global visual media, styling, and graphics
    ├── components/         # Reusable structural sections
    │   ├── Navbar.vue      # Floating Header supporting menu transitions and dark mode toggle
    │   ├── Hero.vue        # Entry splash layout utilizing immersive typography and action CTAs
    │   ├── AboutSection.vue# Narrative bio section displaying professional stat counters
    │   ├── ExperienceSection.vue # Career timeline detailing roles, companies, and achievements
    │   ├── EducationSection.vue  # Academics list and certifications timeline
    │   ├── ProjectsSection.vue   # Card-based gallery layout for software creations
    │   ├── ProjectCard.vue # Visual wrapper displaying tags, links, and details for projects
    │   ├── SkillsSection.vue     # Dynamic section categorizing specific competencies
   │   ├── ContactSection.vue    # Direct contact links for email, GitHub, and LinkedIn
    │   ├── BackgroundAnimation.vue # Dynamic layered fluid ambient color backdrop
    │   └── Footer.vue      # Grounding sign-off and copyright block
    ├── constants/
    │   └── data.ts         # High-level configuration containing all content data
    ├── directives/
    │   └── reveal.ts       # IntersectionObserver custom viewport reveal directive
    ├── router/
    │   └── index.ts        # Smooth scroll anchor-aware router configuration
    ├── types/
    │   └── index.ts        # Shared TypeScript data interface declarations
    ├── views/
    │   └── Home.vue        # Layout container orchestrating the section-by-section render
    ├── App.vue             # Core App Root wrapper providing the master shell container
    ├── main.ts             # Vue bundle bootstrapper registering core plugins and directives
    └── style.css           # Styling styles declaration (contains theme variables and layer styling properties)
```

---

## 🚀 Getting Started

Follow these steps to run a local copy of this portfolio website or prepare it for deployment.

### Prerequisites

Make sure you have **Node.js** (v18.0.0 or higher recommended) and **npm** (or your preferred package manager like yarn/pnpm) installed.

### Installation & Run Commands

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Launch Local Development Server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to the address displayed (usually `http://localhost:5173`).

3. **Compile and Minify for Production:**
   ```bash
   npm run build
   ```

4. **Preview the Built Production Assets Locally:**
   ```bash
   npm run preview
   ```

---

## ⚙️ Customization Guide

This template is designed to let you make it your own in less than five minutes.

### 1. Update Profile Content
All text content, experience records, projects, social links, and statistics are centralized in **`src/constants/data.ts`**. Simply open this file and rewrite the exported collections (e.g., `ABOUT_ME`, `WORK_EXPERIENCE`, `EDUCATION`, `PROJECTS`) to immediately update the portfolio.

### 2. Customize Style Variables & Color Schemes
All theme colors are managed through CSS variables at the top of **`src/style.css`** inside `:root` and `.dark` blocks. To change the brand style, adjust the colors of key variables like:
* `--accent` (primary branding color)
* `--highlight` (contrast accent details)
* `--bg` (site background colors)

### 3. Fine-tune Scroll Reveal Transitions
You can apply scroll reveal animation to any HTML element in some section component using the `v-reveal` directive. It supports custom inline properties to refine movement and timing:

```html
<div v-reveal="{ origin: 'left', delay: 200, distance: 40, duration: 800 }">
  Your animated content goes here...
</div>
```

**Supported Options:**
* `origin`: `'bottom' | 'left' | 'right' | 'center'` (animation entrance slide direction, default: `'bottom'`)
* `delay`: duration in milliseconds before animation commences (default: `0`)
* `duration`: transition duration in milliseconds (default: `720`)
* `distance`: distance in pixels the element travels (default: `28`)
* `once`: if true, animation triggers only once per viewport scroll cycle (default: `true`)

