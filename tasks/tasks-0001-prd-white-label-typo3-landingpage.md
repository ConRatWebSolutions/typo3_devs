# Task List: White-Label Typo3 Development Landing Page

Basierend auf: `0001-prd-white-label-typo3-landingpage.md`

## Relevant Files

### Core Configuration
- `package.json` - Projekt-Abhängigkeiten und Scripts
- `next.config.js` - Next.js Konfiguration
- `tsconfig.json` - TypeScript Konfiguration
- `tailwind.config.ts` - Tailwind CSS Konfiguration
- `postcss.config.js` - PostCSS Konfiguration für Tailwind
- `.env.local` - Umgebungsvariablen (lokal)
- `.env.example` - Template für Umgebungsvariablen

### App Router Structure
- `app/layout.tsx` - Root Layout mit Navigation und Footer
- `app/page.tsx` - Startseite
- `app/leistungen/page.tsx` - Leistungen-Seite
- `app/ueber-uns/page.tsx` - Über uns-Seite
- `app/preise/page.tsx` - Preise/Pakete-Seite
- `app/kontakt/page.tsx` - Kontakt-Seite
- `app/impressum/page.tsx` - Impressum-Seite
- `app/datenschutz/page.tsx` - Datenschutz-Seite
- `app/not-found.tsx` - Custom 404-Seite
- `app/error.tsx` - Custom Error-Seite

### API Routes
- `app/api/contact/route.ts` - API Route für Kontaktformular-Submission

### Components - Layout
- `components/layout/header.tsx` - Header-Komponente mit Navigation
- `components/layout/footer.tsx` - Footer-Komponente
- `components/layout/mobile-nav.tsx` - Mobile Navigation (Hamburger Menu)
- `components/layout/cookie-banner.tsx` - DSGVO Cookie-Banner

### Components - Sections
- `components/sections/hero-section.tsx` - Hero Section für Startseite
- `components/sections/usp-block.tsx` - USP-Vorteile Block
- `components/sections/process-section.tsx` - "Wie wir arbeiten" Section
- `components/sections/cta-section.tsx` - Call-to-Action Section
- `components/sections/services-grid.tsx` - Grid für Leistungen
- `components/sections/team-structure.tsx` - Organisationsstruktur-Darstellung
- `components/sections/pricing-cards.tsx` - Preispakete-Cards
- `components/sections/faq-section.tsx` - FAQ-Accordion

### Components - Forms
- `components/forms/contact-form.tsx` - Kontaktformular-Komponente

### Components - UI (shadcn/ui)
- `components/ui/button.tsx` - Button-Komponente
- `components/ui/input.tsx` - Input-Komponente
- `components/ui/textarea.tsx` - Textarea-Komponente
- `components/ui/checkbox.tsx` - Checkbox-Komponente
- `components/ui/card.tsx` - Card-Komponente
- `components/ui/accordion.tsx` - Accordion-Komponente (für FAQ)
- `components/ui/label.tsx` - Label-Komponente

### Content Data
- `content/homepage.ts` - Content für Startseite
- `content/services.ts` - Content für Leistungen
- `content/about.ts` - Content für Über uns
- `content/pricing.ts` - Content für Preise
- `content/faq.ts` - Content für FAQ
- `content/legal.ts` - Content für Impressum & Datenschutz

### Libraries & Utils
- `lib/utils.ts` - Utility-Funktionen (cn, etc.)
- `lib/validations/contact-form.ts` - Zod-Schema für Formular-Validierung
- `lib/email.ts` - E-Mail-Versand-Funktionen (Resend/EmailJS)
- `lib/db.ts` - Prisma Client Setup
- `lib/actions/contact.ts` - Server Actions für Formular

### Database
- `prisma/schema.prisma` - Prisma Datenbankschema
- `prisma/migrations/` - Datenbank-Migrationen

### Styling
- `app/globals.css` - Globale Styles inkl. Tailwind imports

### SEO & Public
- `public/robots.txt` - Robots.txt für SEO
- `app/sitemap.ts` - Dynamische Sitemap
- `app/metadata.ts` - Shared Metadata Configuration

### Notes
- shadcn/ui Komponenten werden via CLI installiert: `npx shadcn-ui@latest add [component]`
- Icons: Lucide React (`lucide-react` Package)
- Animationen: Framer Motion (`framer-motion` Package)
- Formulare: React Hook Form + Zod (`react-hook-form` + `zod` + `@hookform/resolvers`)

## Tasks

- [ ] 1.0 Projekt-Setup und Grundkonfiguration
  - [ ] 1.1 Next.js 14 Projekt initialisieren mit TypeScript und Tailwind CSS (`npx create-next-app@latest . --typescript --tailwind --app --no-src-dir`)
  - [ ] 1.2 Package.json erweitern: React Hook Form, Zod, @hookform/resolvers, Framer Motion, Lucide React installieren
  - [ ] 1.3 Prisma initialisieren und PostgreSQL-Schema erstellen (`npx prisma init`)
  - [ ] 1.4 ContactSubmission-Model in `prisma/schema.prisma` definieren (id, name, agencyName, email, phone, projectDescription, createdAt)
  - [ ] 1.5 Environment Variables Setup: .env.example erstellen mit Platzhaltern für DATABASE_URL, EMAIL_API_KEY, RESEND_API_KEY
  - [ ] 1.6 Tailwind Config erweitern: Custom Colors (#0f172a, #06b6d4, #f8fafc), Font-Familie (Inter/Poppins)
  - [ ] 1.7 Git-Repository initialisieren, .gitignore prüfen (.env.local, node_modules, .next)
  - [ ] 1.8 shadcn/ui initialisieren (`npx shadcn-ui@latest init`)

- [ ] 2.0 Design-System und UI-Komponenten einrichten
  - [ ] 2.1 shadcn/ui Button-Komponente installieren (`npx shadcn-ui@latest add button`)
  - [ ] 2.2 shadcn/ui Input-Komponente installieren (`npx shadcn-ui@latest add input`)
  - [ ] 2.3 shadcn/ui Textarea-Komponente installieren (`npx shadcn-ui@latest add textarea`)
  - [ ] 2.4 shadcn/ui Checkbox-Komponente installieren (`npx shadcn-ui@latest add checkbox`)
  - [ ] 2.5 shadcn/ui Label-Komponente installieren (`npx shadcn-ui@latest add label`)
  - [ ] 2.6 shadcn/ui Card-Komponente installieren (`npx shadcn-ui@latest add card`)
  - [ ] 2.7 shadcn/ui Accordion-Komponente installieren (`npx shadcn-ui@latest add accordion`)
  - [ ] 2.8 Globale Styles in `app/globals.css` konfigurieren (CSS-Variablen, Tailwind-Imports)
  - [ ] 2.9 Font-Setup in `app/layout.tsx` (Google Fonts: Inter oder Poppins)

- [ ] 3.0 Layout-Komponenten (Header, Footer, Navigation) entwickeln
  - [ ] 3.1 Header-Komponente erstellen (`components/layout/header.tsx`): Logo, Desktop-Navigation, CTA-Button
  - [ ] 3.2 Mobile Navigation entwickeln (`components/layout/mobile-nav.tsx`): Hamburger-Menu, Overlay-Navigation
  - [ ] 3.3 Footer-Komponente erstellen (`components/layout/footer.tsx`): Kurzbeschreibung, Links, Copyright
  - [ ] 3.4 Cookie-Banner entwickeln (`components/layout/cookie-banner.tsx`): DSGVO-konform, nur technische Cookies
  - [ ] 3.5 Root Layout (`app/layout.tsx`) aufsetzen: Header, Footer, Cookie-Banner einbinden
  - [ ] 3.6 Navigation-Links und Routing testen (alle Hauptseiten)

- [ ] 4.0 Content-Struktur und Daten definieren
  - [ ] 4.1 Homepage-Content erstellen (`content/homepage.ts`): Hero-Text, USPs, Prozess-Schritte
  - [ ] 4.2 Services-Content erstellen (`content/services.ts`): Array mit mind. 7 Leistungen (Icon-Name, Titel, Beschreibung)
  - [ ] 4.3 About-Content erstellen (`content/about.ts`): Geschäftsmodell-Erklärung, Organisations-Struktur
  - [ ] 4.4 Pricing-Content erstellen (`content/pricing.ts`): 3-4 Paket-Optionen mit Beschreibungen
  - [ ] 4.5 FAQ-Content erstellen (`content/faq.ts`): Mind. 5-7 Fragen zu Abrechnung, NDA, Projektstart
  - [ ] 4.6 Legal-Content Placeholder erstellen (`content/legal.ts`): Impressum- und Datenschutz-Texte (Platzhalter)

- [ ] 5.0 Startseite implementieren
  - [ ] 5.1 Hero-Section-Komponente entwickeln (`components/sections/hero-section.tsx`): Headline, Subheadline, CTA
  - [ ] 5.2 USP-Block-Komponente entwickeln (`components/sections/usp-block.tsx`): 4 Vorteile mit Icons (Lucide)
  - [ ] 5.3 Process-Section-Komponente entwickeln (`components/sections/process-section.tsx`): 3-4 Schritte "Wie wir arbeiten"
  - [ ] 5.4 CTA-Section-Komponente entwickeln (`components/sections/cta-section.tsx`): Prominenter CTA vor Footer
  - [ ] 5.5 Startseite (`app/page.tsx`) zusammensetzen: Hero, USPs, Process, CTA
  - [ ] 5.6 Framer Motion Animationen hinzufügen: Fade-in beim Scrollen für Sektionen
  - [ ] 5.7 Responsive Design testen (Mobile, Tablet, Desktop)

- [ ] 6.0 Leistungen-Seite implementieren
  - [ ] 6.1 Services-Grid-Komponente entwickeln (`components/sections/services-grid.tsx`): Grid-Layout für Leistungen
  - [ ] 6.2 Service-Card mit Icon, Titel, Beschreibung gestalten
  - [ ] 6.3 Leistungen-Seite (`app/leistungen/page.tsx`) erstellen: Intro-Text, Services-Grid, CTA
  - [ ] 6.4 SEO Metadata für Leistungen-Seite konfigurieren
  - [ ] 6.5 Responsive Layout testen

- [ ] 7.0 Über uns-Seite implementieren
  - [ ] 7.1 Team-Structure-Komponente entwickeln (`components/sections/team-structure.tsx`): Organisations-Darstellung (keine Fotos)
  - [ ] 7.2 Trust-Section entwickeln: Betonung von Vertrauen, Diskretion, NDA
  - [ ] 7.3 Über uns-Seite (`app/ueber-uns/page.tsx`) erstellen: Geschäftsmodell-Erklärung, Team-Struktur, Trust
  - [ ] 7.4 SEO Metadata für Über uns-Seite konfigurieren
  - [ ] 7.5 Responsive Design prüfen

- [ ] 8.0 Preise-Seite implementieren
  - [ ] 8.1 Pricing-Cards-Komponente entwickeln (`components/sections/pricing-cards.tsx`): 3-4 Pakete, "Auf Anfrage"
  - [ ] 8.2 FAQ-Section-Komponente entwickeln (`components/sections/faq-section.tsx`): Accordion für FAQ
  - [ ] 8.3 Preise-Seite (`app/preise/page.tsx`) erstellen: Pakete, FAQ zu Abrechnung
  - [ ] 8.4 SEO Metadata für Preise-Seite konfigurieren
  - [ ] 8.5 Accordion-Interaktivität testen

- [ ] 9.0 Kontakt-Seite mit Formular implementieren
  - [ ] 9.1 Zod-Validierungsschema erstellen (`lib/validations/contact-form.ts`): Name, Agenturname, E-Mail, Telefon (optional), Projektbeschreibung
  - [ ] 9.2 Kontaktformular-Komponente entwickeln (`components/forms/contact-form.tsx`): React Hook Form + Zod
  - [ ] 9.3 Client-seitige Validierung implementieren: E-Mail-Format, Pflichtfelder, deutsche Fehlermeldungen
  - [ ] 9.4 API Route erstellen (`app/api/contact/route.ts`): POST-Handler für Formular-Submission
  - [ ] 9.5 Datenbank-Speicherung implementieren: Prisma Client, ContactSubmission speichern
  - [ ] 9.6 E-Mail-Versand-Funktion entwickeln (`lib/email.ts`): Resend/EmailJS-Integration
  - [ ] 9.7 E-Mail-Template erstellen: Benachrichtigung an Team mit Formular-Daten
  - [ ] 9.8 Success/Error-Handling im Formular: Toast/Message bei Erfolg/Fehler
  - [ ] 9.9 Kontakt-Seite (`app/kontakt/page.tsx`) erstellen: Formular, Kontaktinfos, CTA
  - [ ] 9.10 Formular-Flow testen: Validierung, Submission, E-Mail, DB-Speicherung
  - [ ] 9.11 SEO Metadata für Kontakt-Seite konfigurieren

- [ ] 10.0 Rechtliche Seiten (Impressum, Datenschutz) implementieren
  - [ ] 10.1 Impressum-Seite erstellen (`app/impressum/page.tsx`): DSGVO-konforme Angaben (Platzhalter)
  - [ ] 10.2 Datenschutz-Seite erstellen (`app/datenschutz/page.tsx`): Datenverarbeitung, Rechtsgrundlagen, Betroffenenrechte
  - [ ] 10.3 Cookie-Banner-Text DSGVO-konform gestalten
  - [ ] 10.4 Links zu Impressum & Datenschutz im Footer prüfen
  - [ ] 10.5 SEO Metadata für rechtliche Seiten konfigurieren (noindex für Impressum/Datenschutz)

- [ ] 11.0 SEO-Optimierung und Metadata
  - [ ] 11.1 Shared Metadata Config erstellen (`app/metadata.ts`): Default Title, Description, OG-Tags
  - [ ] 11.2 Dynamische Sitemap generieren (`app/sitemap.ts`): Alle Hauptseiten inkl. lastModified
  - [ ] 11.3 robots.txt erstellen (`public/robots.txt`): Allow all, Sitemap-URL
  - [ ] 11.4 Page-spezifische Metadata ergänzen: Individuelle Titles, Descriptions für alle Seiten
  - [ ] 11.5 Open Graph Images vorbereiten (optional): OG-Image für Social Sharing
  - [ ] 11.6 Strukturierte Daten prüfen (Schema.org): Organization, LocalBusiness (falls relevant)
  - [ ] 11.7 Alt-Tags für alle Bilder sicherstellen
  - [ ] 11.8 Semantisches HTML prüfen: h1, h2, section, article, nav, footer

- [ ] 12.0 Performance-Optimierung und Testing
  - [ ] 12.1 Next.js Image-Komponente für alle Bilder verwenden
  - [ ] 12.2 Lazy Loading für Below-the-fold Content implementieren (Framer Motion mit viewport detection)
  - [ ] 12.3 Code Splitting prüfen: Dynamic Imports für große Komponenten
  - [ ] 12.4 Lighthouse-Audit durchführen: Performance, SEO, Accessibility, Best Practices (Ziel: >90)
  - [ ] 12.5 Performance-Probleme identifizieren und beheben
  - [ ] 12.6 Accessibility-Test (WCAG 2.1 AA): Keyboard-Navigation, Screen-Reader, Farbkontraste
  - [ ] 12.7 Browser-Kompatibilität testen (Chrome, Firefox, Safari, Edge)
  - [ ] 12.8 Mobile Performance testen (Throttling, langsames 3G)
  - [ ] 12.9 Custom 404-Seite erstellen (`app/not-found.tsx`)
  - [ ] 12.10 Custom Error-Seite erstellen (`app/error.tsx`)

- [ ] 13.0 Deployment-Vorbereitung
  - [ ] 13.1 .env.example auf Vollständigkeit prüfen (alle benötigten ENV-Vars)
  - [ ] 13.2 Vercel-Projekt erstellen und mit Git-Repository verbinden
  - [ ] 13.3 Environment Variables in Vercel Dashboard konfigurieren (DATABASE_URL, API-Keys)
  - [ ] 13.4 PostgreSQL-Datenbank bereitstellen (Vercel Postgres, Supabase, oder PlanetScale)
  - [ ] 13.5 Prisma Migration auf Production-DB ausführen (`npx prisma migrate deploy`)
  - [ ] 13.6 E-Mail-Service konfigurieren (Resend API-Key, Absender-Adresse verifizieren)
  - [ ] 13.7 Test-Deployment auf Vercel Preview durchführen
  - [ ] 13.8 Production-Build testen (`npm run build` lokal)
  - [ ] 13.9 Custom Domain konfigurieren (falls vorhanden)
  - [ ] 13.10 SSL/HTTPS prüfen
  - [ ] 13.11 Production-Deployment: Main branch deployen
  - [ ] 13.12 Post-Deployment-Test: Alle Seiten, Formular, E-Mail-Versand prüfen
  - [ ] 13.13 Analytics einrichten (minimal, DSGVO-konform, falls gewünscht)

---

**Status:** Sub-Tasks generiert - Bereit zur Implementierung
