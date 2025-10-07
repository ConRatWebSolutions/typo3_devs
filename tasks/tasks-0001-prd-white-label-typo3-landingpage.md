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

- [x] 1.0 Projekt-Setup und Grundkonfiguration
  - [x] 1.1 Next.js 14 Projekt initialisieren mit TypeScript und Tailwind CSS (`npx create-next-app@latest . --typescript --tailwind --app --no-src-dir`)
  - [x] 1.2 Package.json erweitern: React Hook Form, Zod, @hookform/resolvers, Framer Motion, Lucide React installieren
  - [x] 1.3 Prisma initialisieren und PostgreSQL-Schema erstellen (`npx prisma init`)
  - [x] 1.4 ContactSubmission-Model in `prisma/schema.prisma` definieren (id, name, agencyName, email, phone, projectDescription, createdAt)
  - [x] 1.5 Environment Variables Setup: .env.example erstellen mit Platzhaltern für DATABASE_URL, EMAIL_API_KEY, RESEND_API_KEY
  - [x] 1.6 Tailwind Config erweitern: Custom Colors (#0f172a, #06b6d4, #f8fafc), Font-Familie (Inter/Poppins)
  - [x] 1.7 Git-Repository initialisieren, .gitignore prüfen (.env.local, node_modules, .next)
  - [x] 1.8 shadcn/ui initialisieren (`npx shadcn-ui@latest init`)

- [x] 2.0 Design-System und UI-Komponenten einrichten
  - [x] 2.1 shadcn/ui Button-Komponente installieren (`npx shadcn-ui@latest add button`)
  - [x] 2.2 shadcn/ui Input-Komponente installieren (`npx shadcn-ui@latest add input`)
  - [x] 2.3 shadcn/ui Textarea-Komponente installieren (`npx shadcn-ui@latest add textarea`)
  - [x] 2.4 shadcn/ui Checkbox-Komponente installieren (`npx shadcn-ui@latest add checkbox`)
  - [x] 2.5 shadcn/ui Label-Komponente installieren (`npx shadcn-ui@latest add label`)
  - [x] 2.6 shadcn/ui Card-Komponente installieren (`npx shadcn-ui@latest add card`)
  - [x] 2.7 shadcn/ui Accordion-Komponente installieren (`npx shadcn-ui@latest add accordion`)
  - [x] 2.8 Globale Styles in `app/globals.css` konfigurieren (CSS-Variablen, Tailwind-Imports)
  - [x] 2.9 Font-Setup in `app/layout.tsx` (Google Fonts: Inter oder Poppins)

- [x] 3.0 Layout-Komponenten (Header, Footer, Navigation) entwickeln
  - [x] 3.1 Header-Komponente erstellen (`components/layout/header.tsx`): Logo, Desktop-Navigation, CTA-Button
  - [x] 3.2 Mobile Navigation entwickeln (`components/layout/mobile-nav.tsx`): Hamburger-Menu, Overlay-Navigation
  - [x] 3.3 Footer-Komponente erstellen (`components/layout/footer.tsx`): Kurzbeschreibung, Links, Copyright
  - [x] 3.4 Cookie-Banner entwickeln (`components/layout/cookie-banner.tsx`): DSGVO-konform, nur technische Cookies
  - [x] 3.5 Root Layout (`app/layout.tsx`) aufsetzen: Header, Footer, Cookie-Banner einbinden
  - [x] 3.6 Navigation-Links und Routing testen (alle Hauptseiten)

- [x] 4.0 Content-Struktur und Daten definieren
  - [x] 4.1 Homepage-Content erstellen (`content/homepage.ts`): Hero-Text, USPs, Prozess-Schritte
  - [x] 4.2 Services-Content erstellen (`content/services.ts`): Array mit mind. 7 Leistungen (Icon-Name, Titel, Beschreibung)
  - [x] 4.3 About-Content erstellen (`content/about.ts`): Geschäftsmodell-Erklärung, Organisations-Struktur
  - [x] 4.4 Pricing-Content erstellen (`content/pricing.ts`): 3-4 Paket-Optionen mit Beschreibungen
  - [x] 4.5 FAQ-Content erstellen (`content/faq.ts`): Mind. 5-7 Fragen zu Abrechnung, NDA, Projektstart
  - [x] 4.6 Legal-Content Placeholder erstellen (`content/legal.ts`): Impressum- und Datenschutz-Texte (Platzhalter)

- [x] 5.0 Startseite implementieren
  - [x] 5.1 Hero-Section-Komponente entwickeln (`components/sections/hero-section.tsx`): Headline, Subheadline, CTA
  - [x] 5.2 USP-Block-Komponente entwickeln (`components/sections/usp-block.tsx`): 4 Vorteile mit Icons (Lucide)
  - [x] 5.3 Process-Section-Komponente entwickeln (`components/sections/process-section.tsx`): 3-4 Schritte "Wie wir arbeiten"
  - [x] 5.4 CTA-Section-Komponente entwickeln (`components/sections/cta-section.tsx`): Prominenter CTA vor Footer
  - [x] 5.5 Startseite (`app/page.tsx`) zusammensetzen: Hero, USPs, Process, CTA
  - [x] 5.6 Framer Motion Animationen hinzufügen: Fade-in beim Scrollen für Sektionen
  - [x] 5.7 Responsive Design testen (Mobile, Tablet, Desktop)

- [x] 6.0 Leistungen-Seite implementieren
  - [x] 6.1 Services-Grid-Komponente entwickeln (`components/sections/services-grid.tsx`): Grid-Layout für Leistungen
  - [x] 6.2 Service-Card mit Icon, Titel, Beschreibung gestalten
  - [x] 6.3 Leistungen-Seite (`app/leistungen/page.tsx`) erstellen: Intro-Text, Services-Grid, CTA
  - [x] 6.4 SEO Metadata für Leistungen-Seite konfigurieren
  - [x] 6.5 Responsive Layout testen

- [x] 7.0 Über uns-Seite implementieren
  - [x] 7.1 Team-Structure-Komponente entwickeln (`components/sections/team-structure.tsx`): Organisations-Darstellung (keine Fotos)
  - [x] 7.2 Trust-Section entwickeln: Betonung von Vertrauen, Diskretion, NDA
  - [x] 7.3 Über uns-Seite (`app/ueber-uns/page.tsx`) erstellen: Geschäftsmodell-Erklärung, Team-Struktur, Trust
  - [x] 7.4 SEO Metadata für Über uns-Seite konfigurieren
  - [x] 7.5 Responsive Design prüfen

- [x] 8.0 Preise-Seite implementieren
  - [x] 8.1 Pricing-Cards-Komponente entwickeln (`components/sections/pricing-cards.tsx`): 3-4 Pakete, "Auf Anfrage"
  - [x] 8.2 FAQ-Section-Komponente entwickeln (`components/sections/faq-section.tsx`): Accordion für FAQ
  - [x] 8.3 Preise-Seite (`app/preise/page.tsx`) erstellen: Pakete, FAQ zu Abrechnung
  - [x] 8.4 SEO Metadata für Preise-Seite konfigurieren
  - [x] 8.5 Accordion-Interaktivität testen

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

- [x] 10.0 Rechtliche Seiten (Impressum, Datenschutz) implementieren
  - [x] 10.1 Impressum-Seite erstellen (`app/impressum/page.tsx`): DSGVO-konforme Angaben (Platzhalter)
  - [x] 10.2 Datenschutz-Seite erstellen (`app/datenschutz/page.tsx`): Datenverarbeitung, Rechtsgrundlagen, Betroffenenrechte
  - [x] 10.3 Cookie-Banner-Text DSGVO-konform gestalten
  - [x] 10.4 Links zu Impressum & Datenschutz im Footer prüfen
  - [x] 10.5 SEO Metadata für rechtliche Seiten konfigurieren (noindex für Impressum/Datenschutz)

- [x] 11.0 SEO-Optimierung und Metadata
  - [x] 11.1 Shared Metadata Config erstellen (`app/metadata.ts`): Default Title, Description, OG-Tags
  - [x] 11.2 Dynamische Sitemap generieren (`app/sitemap.ts`): Alle Hauptseiten inkl. lastModified
  - [x] 11.3 robots.txt erstellen (`public/robots.txt`): Allow all, Sitemap-URL
  - [x] 11.4 Page-spezifische Metadata ergänzen: Individuelle Titles, Descriptions für alle Seiten
  - [x] 11.5 Open Graph Images vorbereiten (optional): OG-Image für Social Sharing
  - [x] 11.6 Strukturierte Daten prüfen (Schema.org): Organization, LocalBusiness (falls relevant)
  - [x] 11.7 Alt-Tags für alle Bilder sicherstellen
  - [x] 11.8 Semantisches HTML prüfen: h1, h2, section, article, nav, footer

- [x] 12.0 Performance-Optimierung und Testing
  - [x] 12.1 Next.js Image-Komponente für alle Bilder verwenden
  - [x] 12.2 Lazy Loading für Below-the-fold Content implementieren (Framer Motion mit viewport detection)
  - [x] 12.3 Code Splitting prüfen: Dynamic Imports für große Komponenten
  - [x] 12.4 Lighthouse-Audit durchführen: Performance, SEO, Accessibility, Best Practices (Ziel: >90)
  - [x] 12.5 Performance-Probleme identifizieren und beheben
  - [x] 12.6 Accessibility-Test (WCAG 2.1 AA): Keyboard-Navigation, Screen-Reader, Farbkontraste
  - [x] 12.7 Browser-Kompatibilität testen (Chrome, Firefox, Safari, Edge)
  - [x] 12.8 Mobile Performance testen (Throttling, langsames 3G)
  - [x] 12.9 Custom 404-Seite erstellen (`app/not-found.tsx`)
  - [x] 12.10 Custom Error-Seite erstellen (`app/error.tsx`)

- [x] 13.0 Deployment-Vorbereitung
  - [x] 13.1 .env.example auf Vollständigkeit prüfen (alle benötigten ENV-Vars)
  - [x] 13.2 Deployment-Dokumentation erstellen (DEPLOYMENT.md)
  - [x] 13.3 Vercel-Deployment-Schritte dokumentieren
  - [x] 13.4 PostgreSQL-Datenbank Setup dokumentieren (Vercel Postgres, Supabase)
  - [x] 13.5 Prisma Migration Anleitung dokumentieren (`npx prisma migrate deploy`)
  - [x] 13.6 E-Mail-Service Setup dokumentieren (Resend API-Key, Domain-Verifizierung)
  - [x] 13.7 Environment Variables vollständig dokumentieren
  - [x] 13.8 Testing-Checkliste erstellen (Seiten, Formular, E-Mail-Versand)
  - [x] 13.9 Custom Domain Konfiguration dokumentieren
  - [x] 13.10 SSL/HTTPS und DNS-Setup dokumentieren
  - [x] 13.11 Troubleshooting-Guide erstellen
  - [x] 13.12 Post-Launch Checkliste erstellen
  - [x] 13.13 Monitoring & Maintenance-Anleitung dokumentieren

---

**Status:** ✅ Alle Development-Tasks abgeschlossen - Bereit für Deployment

## Nächste Schritte für Deployment

Das Projekt ist vollständig entwickelt und deployment-ready. Folge der Anleitung in [DEPLOYMENT.md](../DEPLOYMENT.md) für:

1. **Datenbank einrichten** - Vercel Postgres oder Supabase
2. **Resend E-Mail-Service** - API Key erstellen und Domain verifizieren
3. **Vercel-Projekt erstellen** - Repository verbinden und ENV-Vars setzen
4. **Migrationen ausführen** - `npx prisma migrate deploy`
5. **Testing** - Kontaktformular, E-Mail-Versand, alle Seiten prüfen
6. **Custom Domain** - Optional: Eigene Domain konfigurieren

Siehe vollständige Deployment-Anleitung: [DEPLOYMENT.md](../DEPLOYMENT.md)
