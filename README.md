# 🌿 Sandra Araujo – Bilingual Systemic Consultant Website

This is a modern, bilingual (English/Spanish) portfolio website built with React, TypeScript, Vite, and Tailwind CSS. It presents the work and services of Sandra Araujo Mendoza, a systemic consultant offering emotional and relational guidance for individuals, families, couples, and businesses.

## ✨ Features

- ⚛️ Built with React + Vite + TypeScript
- 🌍 Bilingual support (EN / ES) using react-i18next
- 🎨 Responsive, minimalist design with Tailwind CSS
- 💬 Contact form via FormSubmit
- 🌐 SEO-ready with dynamic metadata
- 📱 Fully responsive (mobile-first)
- 🔗 Easy-to-deploy on Vercel or Netlify

## 📁 Project Structure

src/
├── components/     → Reusable UI (Layout, Footer, etc.)
├── hooks/          → Custom hooks (like usePageTitle)
├── i18n/           → Translations & i18n config
├── pages/          → Route pages (Home, About, Services, Contact)
├── assets/         → Optional static assets
main.tsx            → Entry point
vite.config.ts      → Vite config

## 🛠️ Getting Started

1. Clone the repo:
   git clone https://github.com/yourusername/sandra-website.git
   cd sandra-website

2. Install dependencies:
   npm install

3. Run the dev server:
   npm run dev

Then open http://localhost:5173

## 🌐 Deployment

You can deploy this site easily using Vercel or Netlify. Just connect your GitHub repo and it auto-builds using:

   npm run build

## 🌍 i18n Translations

All translations are in:

src/i18n/en.json  
src/i18n/es.json

Update them to customize all site content in both languages.

## 📷 Preview Image

To customize the social preview (used in links shared on WhatsApp, Facebook, etc), replace:

public/images/preview.jpg

And update metadata in index.html.

## 🧑‍💻 Author

Fabian Mendoza 
Website by [@fabianshady](https://github.com/fabianshady)

## 📄 License

This project is licensed for personal or portfolio use. Contact the author for commercial usage rights.
