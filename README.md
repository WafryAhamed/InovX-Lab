# InovX-Lab

<div align="center">

**Modern AI-first web experience built with React, Vite, Tailwind CSS, and immersive 3D interactions.**

[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.x-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-FF0050?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![GSAP](https://img.shields.io/badge/GSAP-3.x-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com/)
[![Three.js](https://img.shields.io/badge/Three.js-0.184-000000?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

</div>
<img width="1536" height="1024" alt="COVER" src="https://github.com/user-attachments/assets/3d806ad7-93e6-4e58-8c1a-5fa316a6b505" />



## 🚀 Overview

InovX-Lab is a modern AI solutions platform built to showcase how intelligent systems can transform real-world business operations. Designed as a startup-focused digital experience, the platform presents a range of AI-driven services that help businesses automate workflows, analyze data, and scale efficiently.

The project combines **high-end UI/UX design**, **interactive animations**, and **AI-powered concepts** into a seamless single-page application, delivering a visually immersive and engaging user experience.

### 🎯 Purpose
The purpose of this website is to represent a startup company that provides AI-based solutions for businesses. It demonstrates how organizations can leverage intelligent systems to improve efficiency, enhance decision-making, and drive innovation.





## 🎯 Objective & Learning Outcomes

This project demonstrates proficiency in:

### React Basics
- **Component-Based Architecture** — 16 page-level components + 7 reusable UI primitives, all following React's compositional model
- **Hooks** — Extensive use of `useState`, `useEffect`, `useRef`, `useCallback`, `useMemo` for state, side effects, DOM refs, and performance optimization
- **Props & Data Flow** — Unidirectional data flow with configurable props (e.g., `CinematicAbout` accepts `companyName`, `tagline`, `metricValue`, etc.)
- **Conditional Rendering** — Dynamic UI states in `Chatbot` (open/closed), `FAQ` (accordion toggle), `Navbar` (scroll-aware styling)
- **Lists & Keys** — Array-driven rendering with unique keys across Services cards, Projects case studies, FAQ items, and Testimonials
- **Lazy Loading** — `React.lazy()` + `Suspense` for the Spline 3D runtime to reduce initial bundle size
- **Ref Forwarding** — `forwardRef` pattern in `Card`, `CardHeader`, `CardTitle`, `CardDescription`, and `MagneticButton` components

### UI/UX Design With React
- **Smooth Section Transitions** — GSAP `ScrollTrigger` timelines orchestrate cinematic parallax, 3D perspective reveals, blur-to-focus effects, and staggered content entrances between every section
- **Micro-Interactions** — Cursor-following spotlight glow on service cards, magnetic social buttons in footer, shooting-star border animations, hover scale/shadow effects
- **Glassmorphism** — `backdrop-blur`, semi-transparent backgrounds, and layered gradients throughout the Navbar, Chatbot, Contact form, and Footer
- **Responsive Design** — Mobile-first with Tailwind's `sm:`, `md:`, `lg:` breakpoints; hamburger menu on mobile; adaptive grid layouts
- **Dark Theme System** — CSS custom properties (`--background`, `--foreground`, `--primary`, etc.) in `:root` enabling consistent theming
- **Animated SVG Visuals** — Hand-coded animated SVG nodes, data-flow lines, and expanding grid patterns in the About section
- **3D Interactions** — Interactive Spline robot in the hero, Three.js particle system (`Antigravity`), perspective transforms on project images



## ✨ Key Features

| Feature | Description |
|---|---|
| 🤖 **Interactive 3D Hero** | Real-time robot model powered by Spline with lazy-loaded runtime |
| 🌀 **Antigravity Particles** | Three.js instanced-mesh particle system with magnetic cursor interaction |
| ⚡ **Smooth Scrolling** | Lenis momentum scrolling with `lerp: 0.08` for buttery navigation |
| 🎬 **Cinematic About** | GSAP scroll-pinned timeline with 3D perspective text, card morphing, and iPhone mockup |
| 🎥 **Video Parallax** | Full-screen background videos with scroll-driven blur-to-focus transitions |
| 🃏 **Spotlight Cards** | Cursor-tracking radial gradient glow + spinning conic-gradient border animation |
| 📊 **Case Study Showcase** | Alternating layout with 3D hover perspective, grayscale-to-color reveal |
| ❓ **Animated FAQ** | Framer Motion `AnimatePresence` accordion with height/opacity transitions |
| 💬 **Bento Testimonials** | 3-column masonry grid with staggered blur-reveal and grid-pattern backgrounds |
| 📝 **Contact Form** | GSAP-animated reveal with glassmorphic styling and focus glow effects |
| 🤖 **Neural Chatbot** | Floating AI assistant with real-time mock messaging and typing simulation |
| 🦶 **Cinematic Footer** | Fixed "curtain reveal" footer with marquee, giant text parallax, and magnetic social buttons |
| 🔤 **Gooey Text Morphing** | SVG filter-based text morphing animation cycling through keywords |
| ⏳ **Cinematic Loader** | Branded loading screen with progress bar and "Initializing Intelligence" text |
| ❌ **Themed Error Pages** | Custom `/coming-soon` (404 robot) and `/not-available` (robot pet) immersive states |

<br>



## 🎬 Cinematic Error Handling

We've replaced generic error states with immersive, character-driven experiences:

- **[`/not-available`]** — A minimalist, high-art error state for social link redirects featuring an AI robot pet illustration
- **[`/coming-soon`]** — A deep-immersion "Connection Lost" interface with a full-screen AI robot entity and pulsing "System Error 404" badge

<table align="center">
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/079bdfd5-aca3-4ddb-9a51-95b0eaa71c07" width="400"/>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/0c7c1227-b816-4d8c-accd-15dcdf052699" width="400"/>
    </td>
  </tr>
</table>

> Even the failure states are part of the brand story.

---
### Framer Motion — Declarative UI Transitions
Used for **component-level animations**, **layout transitions**, and **gesture interactions**:

| Effect | Component | Technique |
|---|---|---|
| Navbar Entry | `Navbar` | `initial={{ y: -50, opacity: 0 }}` → slide in |
| Active Link Indicator | `Navbar` | `layoutId="navbar-indicator"` shared layout animation |
| Mobile Menu | `Navbar` | `AnimatePresence` with slide down/up |
| Stagger Container | `Services`, `Features` | `staggerChildren: 0.15` with `whileInView` |
| Card Hover Scale | `Features` | `whileHover={{ scale: 1.03, boxShadow }}` |
| Service Card Fade-Up | `Services` | `initial={{ opacity: 0, y: 40 }}` per-card stagger |
| FAQ Accordion | `FAQ` | `AnimatePresence` + `animate={{ height: 'auto' }}` |
| Chevron Rotation | `FAQ` | `animate={{ rotate: isOpen ? 180 : 0 }}` |
| SVG Node Reveal | `About` | `whileInView={{ scale: 1, opacity: 1 }}` per node |
| Flowing Pulse Dots | `About` | `animate={{ x: [0, 160] }}` infinite linear |
| Center Glow Pulse | `About` | `animate={{ scale: [1, 1.6, 1] }}` breathing |
| Testimonial Blur Reveal | `Testimonials` | Custom variant: `filter: blur(10px)` → `blur(0px)` |
| Chatbot Panel | `Chatbot` | `AnimatePresence` scale+translate entrance |
| Message Bubble | `Chatbot` | `initial={{ opacity: 0, y: 10 }}` per message |
| Floating Bot Button | `Chatbot` | `whileHover={{ scale: 1.1 }}`, `whileTap={{ scale: 0.95 }}` |
| Wave Separator | `Projects` | SVG `path` `d` attribute morphing between 3 states |
| FAQ Image Float | `FAQ` | `animate={{ y: [0, -15, 0] }}` infinite ease |
| Project Image 3D Hover | `Projects` | `whileHover={{ rotateY: 8, rotateX: 5, scale: 1.05 }}` |
| 404 Badge Pulse | `NotFound` | `animate={{ opacity: [1, 0.5, 1] }}` infinite |

### Three.js / React Three Fiber — 3D Particle System
| Effect | Component | Technique |
|---|---|---|
| Antigravity Particles | `Antigravity` | `InstancedMesh` with 600 capsule particles, magnetic cursor attraction, ring formation, depth parallax, and pulse scaling |

### CSS Animations
| Effect | Location | Technique |
|---|---|---|
| Shooting Star Border | `Services` cards | `conic-gradient` with `@property --border-angle` animation |
| Spotlight Fade-In | `Spotlight` UI | `@keyframes spotlight` with scale+opacity |
| Marquee Scroll | `CinematicFooter` | `translateX(0)` → `translateX(-50%)` infinite |
| Heartbeat Pulse | `CinematicFooter` | Scale bounce with `drop-shadow` glow |
| Aurora Breathe | `CinematicFooter` | Scale + opacity cycling on radial gradient |
| Spinner | `SplineScene` fallback | `border-t` animate-spin loading indicator |
| Custom Scrollbar | `index.css` | Themed webkit scrollbar (dark track, gray thumb) |
| Selection Color | `index.css` | Semi-transparent white selection highlight |


<br>
## 🎨 Transition Effects & Animation System

### GSAP (GreenSock) — Complex Scroll Orchestrations
Used for **scroll-triggered timeline sequences** and **physics-based interactions**:

| Effect | Component | Technique |
|---|---|---|
| 3D Perspective Text Entrance | `CinematicAbout` | `z: -500`, `rotationX: 45`, `filter: blur(20px)` → snap to focus |
| Scroll-Pinned Card Morph | `CinematicAbout` | `pin: true`, card scales from center to fullscreen |
| iPhone Mockup 3D Reveal | `CinematicAbout` | `rotationX: 50`, `rotationY: -30`, `z: -500` → origin with `expo.out` |
| Video Blur-to-Focus | `About` (FeatureRow) | `filter: blur(12px) brightness(0.3)` → clear, `scrub: 2.5` |
| Parallax Background | `About`, `WhyChooseSection` | `y: 15%` → `-15%` with `scale` shift on scroll |
| Header Reveal | `About`, `Projects` | `y: 120, opacity: 0` → visible, scrubbed between 80%–40% |
| Staggered Row Reveal | `Projects` | Each case study: `y: 120, scale: 0.95` → visible with scrub |
| Mouse-Tracking 3D Tilt | `CinematicAbout` | `rotationY: xVal * 12`, `rotationX: -yVal * 12` via `mousemove` |
| Contact Form Reveal | `Contact` | Staggered text children + form scale entrance |
| Footer Giant Text Parallax | `CinematicFooter` | `y: 10vh, scale: 0.8` → visible on scroll |
| Magnetic Button Physics | `CinematicFooter` | `elastic.out(1, 0.3)` snap-back on mouse leave |
| Animated Progress Ring | `CinematicAbout` | `strokeDashoffset` animation with counter increment |
| Floating Badge Entrance | `CinematicAbout` | `rotationZ: -10, scale: 0.7` → `back.out(1.5)` bounce |



## 🗂 Complete Project Structure

```
InovX-Lab/
├── index.html                          # Entry HTML (SPA shell, loads /src/index.jsx)
├── package.json                        # Dependencies, scripts, metadata
├── vite.config.js                      # Vite config (React plugin, Three.js dedupe)
├── tailwind.config.js                  # Tailwind theme: CSS variables, spotlight keyframes
├── postcss.config.js                   # PostCSS: Tailwind + Autoprefixer
├── .eslintrc.cjs                       # ESLint: React hooks + refresh rules
├── vercel.json                         # Vercel: SPA rewrites, clean URLs
├── .gitignore                          # Excludes node_modules, dist, editor files
├── LICENSE                             # MIT License (© 2026 Wafry)
│
├── public/
│   ├── favicon.svg                     # Browser tab icon
│   └── assets/
│       ├── logo.png                    # InovX Lab brand logo
│       ├── preview-hero.png            # README preview: hero section
│       ├── preview-services.png        # README preview: services section
│       ├── preview-projects.png        # README preview: projects section
│       ├── images/
│       │   ├── 404_robot.png           # "Coming Soon" page background
│       │   ├── 404_robot_pet.png       # "Not Available" page background
│       │   ├── error.png               # Error state illustration
│       │   └── hi_FAQ.png              # FAQ section floating robot
│       ├── services/
│       │   ├── ai-automation.png       # AI Automation service card
│       │   ├── predictive-analytics.png # Predictive Analytics card
│       │   ├── ai-chat.png             # AI Chat Systems card
│       │   └── data-intelligence.png   # Data Intelligence card
│       ├── project/
│       │   ├── Case Study 01.png       # E-commerce AI Support
│       │   ├── Case Study 02.png       # FinTech Analytics
│       │   ├── Case Study 03.png       # Logistics Automation
│       │   └── Case Study 04.png       # Retail Recommendation Engine
│       └── videos/
│           ├── 01-adaptive-automation.mp4   # About: automation background
│           ├── 02-real-time-intelligence.mp4 # About: intelligence background
│           ├── 03-scalable-architecture.mp4  # About: architecture background
│           └── posters/                      # Video poster frames
│
└── src/
    ├── index.jsx                       # App entry: path-based routing
    ├── index.css                       # Global styles, CSS vars, Lenis, scrollbar
    ├── App.jsx                         # Main SPA layout with Lenis wrapper
    │
    ├── components/
    │   ├── Navbar.jsx                  # Glassmorphic fixed nav, scroll-aware highlight
    │   ├── SplineSceneBasic.jsx        # Hero: 3D robot + text, Spotlight effect
    │   ├── About.jsx                   # Video parallax features + Antigravity particles
    │   ├── Antigravity.jsx             # Three.js instanced particle system
    │   ├── Services.jsx                # Spotlight cards grid with cursor glow
    │   ├── Projects.jsx                # Case studies with 3D hover + wave separator
    │   ├── Features.jsx                # "Why Choose Us" icon grid (not in main layout)
    │   ├── WhyChooseSection.jsx        # GSAP scroll-pinned "Why Choose" (not in main layout)
    │   ├── FAQ.jsx                     # Accordion with floating robot illustration
    │   ├── Testimonials.jsx            # Bento grid with blur-reveal timeline
    │   ├── Contact.jsx                 # GSAP-animated form with glassmorphic styling
    │   ├── Chatbot.jsx                 # Floating AI assistant with mock messages
    │   ├── NotFound.jsx                # /coming-soon, /404: Robot error page
    │   ├── NotAvailable.jsx            # /not-available: Robot pet error page
    │   └── Footer.jsx                  # (Superseded by ui/motion-footer.jsx)
    │
    ├── components/ui/
    │   ├── cinematic-about.jsx         # GSAP scroll-pinned About with iPhone mockup
    │   ├── motion-footer.jsx           # Cinematic curtain-reveal footer
    │   ├── card.jsx                    # Reusable Card/CardHeader/CardTitle primitives
    │   ├── splite.jsx                  # Lazy-loaded Spline 3D wrapper
    │   ├── spotlight.jsx               # SVG spotlight glow effect
    │   ├── gooey-text-morphing.jsx     # SVG filter text morph animation
    │   └── loader.jsx                  # Cinematic loading screen with progress bar
    │
    ├── utils/
    │   └── motion.js                   # Centralized Framer Motion variants
    │
    └── lib/
        └── utils.js                    # cn() utility (clsx + tailwind-merge)
```

---

## 🧩 Component Architecture

### Page Flow (Homepage)
The homepage renders sections in this order inside `App.jsx`, wrapped by `ReactLenis` for smooth scrolling:

```
ReactLenis (smooth scroll wrapper)
└── Navbar (fixed, glassmorphic, scroll-aware)
└── <main> (relative z-10, scrolls over fixed footer)
    ├── Hero Section — SplineSceneBasic (3D robot + Spotlight)
    ├── CinematicAbout — Scroll-pinned GSAP timeline with iPhone mockup
    ├── About — Video parallax features + Antigravity particles + animated SVGs
    ├── Services — Spotlight cursor-glow cards grid
    ├── Projects — Case studies with 3D perspective hover
    ├── FAQ — Accordion with floating robot illustration
    ├── Testimonials — Bento grid with staggered blur-reveal
    └── Contact — GSAP-animated glassmorphic form
└── CinematicFooter (fixed, revealed via CSS clip-path curtain)
└── Chatbot (floating, bottom-right)
```

### Routing System
Manual path-based routing in `src/index.jsx` (no React Router):

| Path | Component | Description |
|---|---|---|
| `/` | `App` | Main homepage with all sections |
| `/coming-soon`, `/404` | `NotFound` | Immersive robot error page |
| `/not-available` | `NotAvailable` | Minimalist robot pet error page |

Vercel's `vercel.json` rewrites all paths to `index.html` for SPA support.

### Centralized Motion Variants (`src/utils/motion.js`)
Reusable Framer Motion presets used across components:

| Variant | Usage |
|---|---|
| `fadeUpVariant` | Fade + slide up (Services headings, Features header) |
| `staggerContainer` | Parent container with `staggerChildren: 0.15` |
| `staggerItem` | Child element with `y: 40` slide up |
| `projectCardContainer` / `projectCardItem` | Project-specific stagger with `delayChildren: 0.2` |
| `alternateSlideIn(direction)` | Slide from left or right (`x: ±60`) |
| `buttonHover` / `buttonTap` | Scale `1.05` / `0.98` interactions |
| `cardHover` | Scale `1.03` + box-shadow glow |
| `projectCardHover` | Scale `1.04` + `y: -4` lift |



## 🛠 Tech Stack

### Core Frameworks
| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | 18.3 | Component-based UI architecture |
| [Vite](https://vitejs.dev/) | 5.2 | Lightning-fast HMR dev server + optimized builds |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4 | Utility-first responsive styling |

### Animation & Interactivity
| Technology | Version | Purpose |
|---|---|---|
| [GSAP](https://gsap.com/) | 3.15 | Scroll-triggered timelines, 3D transforms, scrub animations |
| [Framer Motion](https://motion.dev/) | 12.38 | Declarative transitions, layout animations, gesture handlers |
| [Lenis](https://lenis.darkroom.engineering/) | 1.3 | Momentum-based smooth scrolling |
| [Spline](https://spline.design/) | latest | Interactive 3D robot model in hero |
| [Three.js](https://threejs.org/) | 0.184 | WebGL particle system (Antigravity), 3D rendering engine |
| [React Three Fiber](https://r3f.docs.pmnd.rs/) | 8.18 | React renderer for Three.js scenes |

### Supporting Libraries
| Library | Purpose |
|---|---|
| [Lucide React](https://lucide.dev/) | Lightweight vector icon system |
| [clsx](https://github.com/lukeed/clsx) | Conditional CSS class composition |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | Tailwind class deduplication |
| [@emotion/react](https://emotion.sh/) | CSS-in-JS runtime (Spline dependency) |

### Dev Tooling
| Tool | Purpose |
|---|---|
| ESLint | Code quality with React Hooks + Refresh rules |
| PostCSS + Autoprefixer | CSS processing pipeline |
| Vite React Plugin | JSX/Fast Refresh support |

---

## 🎨 Design System

### Color Palette (CSS Custom Properties)
```css
--background: #000000       /* Pure black base */
--foreground: #ffffff       /* Pure white text */
--primary: #ffffff          /* Primary accent */
--secondary: #888888        /* Muted secondary */
--muted: #222222            /* Muted backgrounds */
--muted-foreground: #888888 /* Muted text */
--border: rgba(255,255,255,0.1) /* Subtle borders */
```

### Design Patterns
- **Glassmorphism** — `bg-white/[0.05] backdrop-blur-2xl border border-white/15`
- **Gradient Text** — `bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400`
- **Depth Shadows** — Multi-layered `box-shadow` with inset highlights
- **Film Grain** — SVG noise filter overlay at 5% opacity
- **Grid Backgrounds** — CSS linear-gradient grid patterns with radial mask fade
- **Premium Scrollbar** — Custom webkit scrollbar: dark track (#000), gray thumb (#333)

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### 1. Clone the repository
```bash
git clone https://github.com/WafryAhamed/InovX-Lab.git
cd InovX-Lab
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
The app will be available at `http://localhost:5173`.

### 4. Build for production
```bash
npm run build
```

### 5. Preview production build
```bash
npm run preview
```

### 6. Lint the codebase
```bash
npm run lint
```

---

## Deployment



**[Live Demo](https://inovx-lab.vercel.app)** *(Coming Soon)*



##  Acknowledgments

- **AI Image & Video Generation**: All futuristic robotic visuals, cinematic backgrounds, and motion sequences were created using advanced AI image and video generation tools to maintain a consistent, high-end aesthetic.

- **Animation & Interaction Design**: Scroll-based animations, transitions, and immersive UI effects were inspired by modern cinematic web experiences and cutting-edge SaaS platforms.

- **Inspiration**: Designed with the vision of pushing the boundaries of modern web interactivity, blending AI concepts with high-performance frontend design.


---

## 👤 Author

**Wafry Ahamed**
- GitHub: [@WafryAhamed](https://github.com/WafryAhamed)

---

## 📄 License

Licensed under the [MIT License](./LICENSE).

Copyright © 2026 Wafry. All rights reserved.