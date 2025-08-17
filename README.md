<div align="center">

# AI-Driven Development Portfolio Template

*Fast, accessible, and production-ready Next.js portfolio for developers and designers.*

<!-- [![GitHub stars](https://img.shields.io/github/stars/GeloCreativeStudio/portfolio-082025?style=social)](https://github.com/GeloCreativeStudio/portfolio-082025/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/GeloCreativeStudio/portfolio-082025?style=social)](https://github.com/GeloCreativeStudio/portfolio-082025/network) -->
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

<!-- [**Live Demo**](https://www.angelomanalo.me) -->

</div>

---

## 🔎 Overview

This is a personal portfolio template built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**. It showcases projects, designs, and skills with smooth animations.

Ideal for developers, designers, or AI enthusiasts seeking a modern, SEO-optimized personal website.

Key inclusions:
- Hero, About, Projects, Designs, Skills, Contact sections
- Theme switching and scroll-spy navigation
- Email integration via Resend and React Email

---

## ✨ Features

- **Smooth Navigation**: Lenis scrolling with GSAP ScrollTrigger and scroll-spy dots
- **Theming**: Dark/light mode toggle (next-themes)
- **Accessible UI**: Built on shadcn/ui and Radix primitives
- **Contact Form**: Zod-validated, server-action based with Resend email delivery
- **SEO Optimized**: Metadata, Open Graph/Twitter cards, robots.txt, sitemap
- **Animations**: GSAP-integrated for engaging user experience

---

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router), React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4, shadcn/ui, Radix UI
- **Animations**: GSAP, ScrollTrigger, Lenis
- **Validation & Email**: Zod, Resend, React Email
- **Theming/Icons**: next-themes, lucide-react

---

## ⚡ Quick Start

### Prerequisites
- Node.js 18+ (20+ recommended)
- npm, pnpm, yarn, or bun

### Installation
```bash
git clone https://github.com/GeloCreativeStudio/portfolio-082025.git
cd portfolio-082025
npm install  # or pnpm install
npm run dev  # Starts at http://localhost:3000
```

### Scripts
```bash
npm run dev     # Development server
npm run build   # Production build
npm run start   # Production server
npm run lint    # ESLint check
npm run format  # Prettier format
```

---

## 🔑 Environment Variables

Create `.env.local`:
```bash
NEXT_PUBLIC_SITE_URL=https://your-site.com
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-token  # Optional
RESEND_API_KEY=re_xxx  # Required for contact form
```

Update recipient in `src/lib/data/contact.ts` and "from" domain for Resend.

---

## 🎨 Customization

Personalize by editing:
- **Info**: `src/lib/data/contact.ts`
- **Navigation**: `src/lib/data/navigation.ts`
- **Projects**: `src/lib/data/featured-projects.ts`
- **Designs**: `src/lib/data/featured-designs.ts` (assets in `public/assets/designs`)
- **Skills**: `src/lib/data/technical-skills.ts` (assets in `public/assets/technical-skills`)
- **SEO**: `src/app/layout.tsx`
- **Email Template**: `src/app/emails/contact-form-email.tsx`

Replace assets in `public/` keeping paths.

### Theme Tweaks
Use [TweakCN](https://tweakcn.com/) for no-code shadcn/ui theme editing:
1. Visit site, select base theme.
2. Adjust colors, typography; preview light/dark modes.
3. Copy CSS variables.
4. Paste into `src/app/globals.css` under `:root` and `.dark`.
5. Save and restart dev server.

This keeps your portfolio visually unique without code changes.

---

## 📂 Project Structure

<details>
<summary>Click to expand</summary>

```
src/
├─ app/
│  ├─ api/
│  │  └─ actions/
│  │     └─ send-email.ts
│  ├─ emails/
│  │  └─ contact-form-email.tsx
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ robots.ts
│  └─ sitemap.ts
│
├─ components/
│  ├─ common/
│  │  ├─ design-card.tsx
│  │  ├─ logo.tsx
│  │  ├─ navigation-dot.tsx
│  │  ├─ navigation-link.tsx
│  │  ├─ project-card.tsx
│  │  ├─ scramble-h1.tsx
│  │  ├─ scroll-spy-navigation.tsx
│  │  ├─ smooth-scroll.tsx
│  │  ├─ theme-provider.tsx
│  │  └─ theme-toggle.tsx
│  ├─ layout/
│  │  ├─ footer.tsx
│  │  └─ header.tsx
│  ├─ sections/
│  │  ├─ about-me.tsx
│  │  ├─ contact.tsx
│  │  ├─ featured-designs.tsx
│  │  ├─ featured-projects.tsx
│  │  ├─ hero-section.tsx
│  │  └─ technical-skills.tsx
│  └─ ui/
│     ├─ badge.tsx
│     ├─ button.tsx
│     ├─ card.tsx
│     ├─ dialog.tsx
│     ├─ dropdown-menu.tsx
│     ├─ infinite-slider.tsx
│     ├─ input.tsx
│     ├─ label.tsx
│     ├─ progressive-blur.tsx
│     ├─ select.tsx
│     ├─ separator.tsx
│     ├─ textarea.tsx
│     └─ toggle.tsx
│
├─ hooks/
│  └─ use-scroll-spy.ts
│
└─ lib/
   ├─ contact-form-validation.ts
   ├─ data/
   │  ├─ contact.ts
   │  ├─ featured-designs.ts
   │  ├─ featured-projects.ts
   │  ├─ navigation.ts
   │  └─ technical-skills.ts
   └─ utils.ts
```

</details>

---

## 📬 Contact Form Setup

- Submits via server action (`src/app/api/actions/send-email.ts`).
- Validates with Zod (`src/lib/contact-form-validation.ts`); includes honeypot spam filter.
- Sends via Resend using template (`src/app/emails/contact-form-email.tsx`).

Define recipient in `src/lib/data/contact.ts`.

---

## ⚙️ AI-Enhanced DX

Optimized for AI tools like Cursor AI and GitHub Copilot:
- **Cursor Rules**: In `.cursor/rules/nextjs.mdc` – Enforces Next.js best practices (e.g., App Router, server components).
- **Copilot Instructions**: In `.github/copilot-instructions.md` – Guides suggestions on TypeScript, Tailwind, and Zod usage.

These provide context for consistent, productive coding. See docs: [Cursor](https://docs.cursor.com/context/rules-for-ai), [Copilot](https://docs.github.com/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot).

---

## 🚀 Deployment

On Vercel:
1. Push to GitHub.
2. Import repo in Vercel.
3. Add env vars (SITE_URL, RESEND_API_KEY).
4. Deploy.

---

## 🙌 Acknowledgments

- Built with Next.js, Tailwind, shadcn/ui, GSAP.
- Inspired by [trae.ai](https://trae.ai).

License: [MIT](LICENSE)

Found this helpful? Star the repo or open an issue!

> ***Happy coding!***