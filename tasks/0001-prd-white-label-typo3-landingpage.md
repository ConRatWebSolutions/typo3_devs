# PRD: White-Label Typo3 Development Landing Page

## 1. Einführung/Übersicht

Diese Landing Page ist die zentrale Marketing-Website für ein White-Label Typo3-Entwicklungsunternehmen, das sich an mittlere Agenturen (10-50 Mitarbeiter) richtet, die zusätzliche Entwicklungskapazitäten benötigen. Die Website soll Vertrauen aufbauen, die Leistungen klar kommunizieren und qualifizierte Kontaktanfragen generieren.

**Problem:** Agenturen benötigen zuverlässige, diskrete Typo3-Entwicklungspartner mit deutscher Projektsteuerung und kosteneffizienter Offshore-Umsetzung, haben aber Schwierigkeiten, vertrauenswürdige Partner zu finden.

**Lösung:** Eine professionelle, minimalistisch gestaltete B2B-Website, die Kompetenz, Diskretion und Zuverlässigkeit ausstrahlt und den Weg zur Kontaktaufnahme klar aufzeigt.

## 2. Ziele

1. **Lead-Generierung:** Mindestens 10 qualifizierte Kontaktformular-Einreichungen pro Monat innerhalb von 3 Monaten nach Launch
2. **Vertrauensbildung:** Klare Kommunikation des White-Label-Modells und der Vorteile (deutsche PM + Offshore-Team)
3. **Conversion-Optimierung:** Mindestens 3% Conversion-Rate von Besuchern zu Kontaktanfragen
4. **Professioneller Markenauftritt:** Moderne, minimalistisch-professionelle Designsprache etablieren
5. **SEO-Grundlage:** Technische SEO-Optimierung für organisches Wachstum

## 3. User Stories

### Hauptpersona: Agentur-Geschäftsführer/in oder Projektleiter/in

**US-01:** Als Agentur-Geschäftsführer möchte ich auf den ersten Blick verstehen, was der Service bietet, damit ich schnell entscheiden kann, ob es für meine Agentur relevant ist.

**US-02:** Als Projektleiterin möchte ich die angebotenen Leistungen im Detail sehen, damit ich einschätzen kann, ob der Partner meine technischen Anforderungen erfüllen kann.

**US-03:** Als Geschäftsführer möchte ich verstehen, wie das Geschäftsmodell (deutsche PM + Offshore) funktioniert, damit ich Vertrauen in die Zusammenarbeit entwickeln kann.

**US-04:** Als Agentur-Inhaberin möchte ich eine Preisindikation erhalten können, ohne sofort Kontakt aufnehmen zu müssen, damit ich vorqualifizieren kann, ob das Budget passt.

**US-05:** Als Projektleiter möchte ich einfach und unkompliziert Kontakt aufnehmen können, damit ich ein Erstgespräch vereinbaren kann.

**US-06:** Als Agentur-Geschäftsführerin möchte ich die Organisationsstruktur des Partners verstehen, damit ich Vertrauen in die Zusammenarbeit aufbauen kann.

## 4. Funktionale Anforderungen

### 4.1 Allgemeine Anforderungen

**FR-01:** Die Website muss vollständig auf Deutsch sein (alle Texte, Meta-Tags, Fehlermeldungen).

**FR-02:** Die Website muss responsive sein und auf Desktop (1920px), Tablet (768px) und Mobile (375px) optimiert dargestellt werden.

**FR-03:** Die Website muss mit Next.js 14 (App Router), TypeScript und Tailwind CSS entwickelt werden.

**FR-04:** Die Website muss shadcn/ui Komponenten verwenden für konsistentes UI-Design.

**FR-05:** Die Website muss Performance-optimiert sein (Lighthouse Score >90 für alle Kategorien).

**FR-06:** Die Website muss DSGVO-konform sein (Cookie-Banner, Datenschutzerklärung, Impressum).

### 4.2 Startseite

**FR-07:** Die Startseite muss eine Hero-Section mit folgendem Inhalt enthalten:
- Hauptüberschrift: "White-Label Typo3-Entwicklung für Agenturen – zuverlässig, diskret, skalierbar"
- Subheadline mit Kurzbeschreibung
- Primärer CTA-Button: "Jetzt Partner werden" (führt zu Kontaktformular)
- Visuelles Element (Hero-Bild oder dezente Animation)

**FR-08:** Die Startseite muss einen USP-Block mit mindestens 4 Vorteilen zeigen:
- Saubere Typo3-Codebasis
- Diskrete White-Label-Zusammenarbeit
- Offshore-Vorteil mit deutscher Qualitätssicherung
- Skalierbare Entwicklungskapazität
- Jeder Vorteil mit Icon (Lucide Icons oder Heroicons)

**FR-09:** Die Startseite muss eine Sektion "Wie wir arbeiten" mit 3-4 Schritten des Prozesses enthalten.

**FR-10:** Die Startseite muss eine prominente CTA-Sektion vor dem Footer haben mit "Projekt anfragen" oder "Kostenloses Erstgespräch buchen".

### 4.3 Leistungen-Seite

**FR-11:** Die Leistungen-Seite muss folgende Servicebereiche beschreiben:
- Typo3-Setup & Installation
- Extension-Entwicklung
- Typo3-Migration (von älteren Versionen oder anderen CMS)
- Template-Entwicklung
- Performance-Optimierung
- Wartung & Support
- Mindestens ein weiterer relevanter Service

**FR-12:** Jede Leistung muss ein Icon, einen Titel und eine 2-3 Sätze Beschreibung haben.

**FR-13:** Die Leistungen-Seite muss einen CTA "Angebot anfordern" haben, der zum Kontaktformular führt.

### 4.4 Über uns-Seite

**FR-14:** Die Über uns-Seite muss das Geschäftsmodell klar erklären:
- Deutsches Projektmanagement
- Offshore-Entwicklungsteam in Indien
- Wie die Zusammenarbeit funktioniert
- Qualitätssicherungsprozesse

**FR-15:** Die Über uns-Seite muss eine Team-Sektion "Unsere Organisationsstruktur" enthalten:
- Keine Fotos von Personen
- Darstellung der Struktur: Projektmanagement Deutschland / Entwicklungsteam Indien
- Optional: Rollen und Verantwortlichkeiten

**FR-16:** Die Über uns-Seite muss Vertrauen und Diskretion betonen:
- NDA-Standard
- White-Label-Garantie
- Referenzen bleiben vertraulich

### 4.5 Preise/Pakete-Seite

**FR-17:** Die Preise-Seite muss KEINE konkreten Preise anzeigen.

**FR-18:** Die Preise-Seite muss 3-4 Paketoptionen als Orientierung zeigen:
- Name des Pakets
- Beschreibung der enthaltenen Leistungen
- "Auf Anfrage" statt Preis
- CTA-Button "Angebot anfordern"

**FR-19:** Die Preise-Seite muss eine FAQ-Sektion zu Abrechnung enthalten:
- Abrechnungsmodelle (Festpreis, Time & Material, Retainer)
- NDA-Handling
- Projektstart-Prozess
- Mindestens 5-7 häufige Fragen

### 4.6 Kontakt/Partner werden-Seite

**FR-20:** Die Kontakt-Seite muss ein Kontaktformular mit folgenden Feldern enthalten:
- Name (Pflichtfeld)
- Agenturname (Pflichtfeld)
- E-Mail (Pflichtfeld, mit Validierung)
- Telefon (optional)
- Projektbeschreibung (Textarea, Pflichtfeld)
- Datenschutz-Checkbox (Pflichtfeld)

**FR-21:** Das Kontaktformular muss mit React Hook Form implementiert werden.

**FR-22:** Das Kontaktformular muss Client-seitige Validierung haben:
- E-Mail-Format
- Pflichtfelder
- Min/Max-Längen
- Fehlermeldungen auf Deutsch

**FR-23:** Das Kontaktformular muss bei Absenden:
- E-Mail-Benachrichtigung an definierte E-Mail-Adresse senden (via EmailJS oder Resend)
- Daten in einer Datenbank speichern (PostgreSQL via Prisma oder ähnlich)
- Success-Message anzeigen: "Vielen Dank! Wir melden uns innerhalb von 24 Stunden."
- Error-Handling bei Fehlern

**FR-24:** Die Kontakt-Seite muss zusätzliche Kontaktinformationen anzeigen:
- E-Mail-Adresse
- Telefonnummer (optional)
- Geschäftszeiten

**FR-25:** Die Kontakt-Seite muss einen primären CTA haben: "Kostenloses Erstgespräch vereinbaren".

### 4.7 Impressum & Datenschutz

**FR-26:** Die Website muss eine Impressum-Seite haben mit allen rechtlich erforderlichen Angaben (DSGVO-konform).

**FR-27:** Die Website muss eine Datenschutz-Seite haben mit:
- Datenverarbeitung (Formular, Cookies, Hosting)
- Rechtsgrundlagen
- Betroffenenrechte
- Kontaktdaten Datenschutzbeauftragter (falls zutreffend)

**FR-28:** Die Website muss einen Cookie-Banner haben:
- Nur technisch notwendige Cookies (keine Tracking-Cookies)
- Banner-Text DSGVO-konform
- "Akzeptieren"-Button
- Link zur Datenschutzerklärung

### 4.8 Navigation & Footer

**FR-29:** Die Website muss eine Desktop-Navigation haben mit:
- Logo (linksbündig)
- Menüpunkte: Startseite, Leistungen, Über uns, Preise, Kontakt
- CTA-Button: "Partner werden" (rechtsbündig, hervorgehoben)

**FR-30:** Die Website muss eine Mobile-Navigation haben:
- Hamburger-Menü
- Overlay-Menü mit allen Navigationspunkten
- CTA prominent im Menü

**FR-31:** Die Website muss einen Footer haben mit:
- Kurzbeschreibung des Unternehmens
- Links zu allen Hauptseiten
- Links zu Impressum & Datenschutz
- Optional: Social Media Links (LinkedIn)
- Copyright-Hinweis

### 4.9 Design & Styling

**FR-32:** Die Website muss folgende Farbpalette verwenden:
- Hauptfarbe: Dunkelblau oder Anthrazit (#0f172a)
- Akzentfarbe: Türkis/Cyan (#06b6d4)
- Hintergrund: Hellgrau/Weiß (#f8fafc)
- Text: Dunkelgrau (#1e293b)
- Weitere Farben aus Tailwind CSS-Palette

**FR-33:** Die Website muss folgende Typografie verwenden:
- Font-Familie: Inter oder Poppins (via Google Fonts)
- Headings: Font-Weight 600-700
- Body: Font-Weight 400-500
- Font-Größen gemäß Tailwind CSS Scale

**FR-34:** Die Website muss Lucide Icons oder Heroicons für alle Icons verwenden.

**FR-35:** Die Website muss leichte Animationen für bessere UX haben:
- Fade-in beim Scrollen (via Framer Motion oder AOS)
- Hover-Effekte auf Buttons und Cards
- Smooth Scrolling

**FR-36:** Die Website muss shadcn/ui Komponenten verwenden für:
- Buttons
- Forms (Input, Textarea, Checkbox)
- Cards
- Weitere UI-Elemente nach Bedarf

### 4.10 SEO & Performance

**FR-37:** Die Website muss SEO-optimiert sein:
- Meta-Tags (Title, Description) für jede Seite
- Open Graph Tags für Social Sharing
- Semantisches HTML (h1, h2, section, article, etc.)
- Alt-Tags für alle Bilder
- Sitemap.xml
- Robots.txt

**FR-38:** Die Website muss next-seo oder Next.js Metadata API für SEO-Management verwenden.

**FR-39:** Die Website muss Performance-optimiert sein:
- Next.js Image-Komponente für alle Bilder
- Lazy Loading für Below-the-fold Content
- Code Splitting
- Minifizierung von CSS/JS

**FR-40:** Die Website muss auf Vercel deploybar sein mit automatischem Deployment via Git.

### 4.11 Content Management

**FR-41:** Inhalte sollten einfach editierbar sein:
- Hardcoded Content in React-Komponenten ist akzeptabel
- Content sollte in separate Konstanten/Objekte ausgelagert werden (z.B. `content/homepage.ts`)
- Ermöglicht spätere Migration zu Headless CMS

**FR-42:** Texte und Copy sollten folgende Richtlinien befolgen:
- Professioneller B2B-Ton
- Klar und präzise
- Betonung von Vertrauen, Diskretion, Qualität
- Verwendung der vorgegebenen Textbausteine als Grundlage

### 4.12 Technische Architektur

**FR-43:** Die Website muss folgende Technologie-Stack verwenden:
- Next.js 14 (App Router)
- TypeScript (strict mode)
- Tailwind CSS
- shadcn/ui
- React Hook Form
- Framer Motion oder AOS (für Animationen)
- Lucide Icons oder Heroicons
- EmailJS oder Resend (für E-Mail-Versand)
- Prisma + PostgreSQL oder ähnliche DB-Lösung (für Formular-Speicherung)

**FR-44:** Die Website muss eine klare Ordnerstruktur haben:
```
/app
  /(routes)
    /leistungen
    /ueber-uns
    /preise
    /kontakt
    /impressum
    /datenschutz
  /api
    /contact
/components
  /ui (shadcn components)
  /sections (page sections)
  /layout (header, footer, navigation)
/lib
  /utils
  /validations
/content (content data)
/public (images, icons)
```

**FR-45:** Die Website muss Environment Variables für konfigurierbare Werte verwenden:
- E-Mail-Konfiguration
- Datenbank-Verbindung
- API-Keys

## 5. Non-Goals (Out of Scope)

**NG-01:** Mehrsprachigkeit (nur Deutsch)

**NG-02:** Portfolio-/Case-Studies-Sektion (White-Label = keine öffentlichen Referenzen)

**NG-03:** Blog oder Content-Marketing-Sektion

**NG-04:** Kundenbereich/Dashboard

**NG-05:** Online-Buchungssystem für Termine (Formularkontakt ist ausreichend)

**NG-06:** Live-Chat-Integration

**NG-07:** Umfangreiches Analytics/Marketing-Tracking (nur minimales DSGVO-konformes Tracking)

**NG-08:** A/B-Testing-Infrastructure

**NG-09:** Headless CMS in erster Version (hardcoded content ist akzeptabel)

**NG-10:** Echte Kundenbewertungen/Testimonials (wegen White-Label-Natur)

## 6. Design-Überlegungen

### 6.1 Design-Prinzipien
- **Minimalistisch:** Klares, aufgeräumtes Design ohne Überladung
- **Professionell:** B2B-fokussiert, seriös, vertrauenswürdig
- **Modern:** Aktuelle Design-Trends (Glasmorphism subtil, moderne Typografie)
- **Fokussiert:** Klare visuelle Hierarchie, Fokus auf CTAs

### 6.2 Komponenten-Bibliothek
- Verwendung von shadcn/ui für konsistente UI-Komponenten
- Eigene Custom-Komponenten für spezifische Sektionen (Hero, USP-Block, etc.)
- Wiederverwendbare Section-Wrapper für konsistente Abstände/Layouts

### 6.3 Responsive Breakpoints
- Mobile: 640px und kleiner
- Tablet: 641px - 1023px
- Desktop: 1024px und größer
- Large Desktop: 1280px und größer

### 6.4 Accessibility
- WCAG 2.1 AA Standard
- Keyboard-Navigation
- Screen-Reader-freundlich
- Farbkontraste mindestens 4.5:1

## 7. Technische Überlegungen

### 7.1 Performance-Ziele
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.5s
- Lighthouse Performance Score: > 90

### 7.2 Browser-Support
- Chrome (aktuelle + 2 vorherige Versionen)
- Firefox (aktuelle + 2 vorherige Versionen)
- Safari (aktuelle + 2 vorherige Versionen)
- Edge (aktuelle + 2 vorherige Versionen)

### 7.3 Hosting & Deployment
- Vercel als Hosting-Plattform
- Automatisches Deployment via Git (main branch = production)
- Preview-Deployments für Feature-Branches
- Environment Variables über Vercel Dashboard

### 7.4 Datenbank
- PostgreSQL für Formular-Submissions
- Prisma als ORM
- Schema:
  ```prisma
  model ContactSubmission {
    id                String   @id @default(cuid())
    name              String
    agencyName        String
    email             String
    phone             String?
    projectDescription String   @db.Text
    createdAt         DateTime @default(now())
  }
  ```

### 7.5 E-Mail-Versand
- EmailJS oder Resend für transaktionale E-Mails
- Template für Benachrichtigungs-E-Mail an Team
- Optional: Auto-Reply an Absender

### 7.6 Fehlerbehandlung
- Globale Error-Boundary für React-Fehler
- 404-Seite (custom)
- 500-Seite (custom)
- Formular-Validierung mit klaren Fehlermeldungen

## 8. Erfolgsmetriken

**SM-01:** Conversion-Rate: Mindestens 3% der Besucher füllen das Kontaktformular aus

**SM-02:** Lead-Qualität: Mindestens 50% der eingereichten Formulare sind qualifizierte Leads (mittlere Agenturen, echte Projektanfragen)

**SM-03:** Page Speed: Lighthouse Performance Score > 90 auf allen Seiten

**SM-04:** Bounce Rate: < 60% auf der Startseite

**SM-05:** Time on Site: Durchschnittlich > 2 Minuten

**SM-06:** Mobile Traffic: Mindestens 30% des Traffics kommt von mobilen Geräten (muss gut funktionieren)

**SM-07:** Formular-Completion-Rate: > 80% derjenigen, die das Formular starten, schließen es auch ab

## 9. Offene Fragen

**OQ-01:** Welche E-Mail-Adresse soll für Formular-Benachrichtigungen verwendet werden?

**OQ-02:** Gibt es bereits ein Logo und Branding-Assets, oder muss dies entwickelt werden?

**OQ-03:** Welche konkreten Texte/Copy sollen für die einzelnen Sektionen verwendet werden? (Basierend auf den Textbausteinen, aber finalisiert)

**OQ-04:** Soll eine Custom-Domain verwendet werden? Falls ja, welche?

**OQ-05:** Gibt es bereits Hosting-Accounts (Vercel, Datenbank-Provider)?

**OQ-06:** Wer ist für Content-Updates verantwortlich? (Wird bestimmen, wie flexibel das Content-Management sein muss)

**OQ-07:** Gibt es rechtliche Texte (Impressum, Datenschutz), oder müssen diese noch erstellt werden?

**OQ-08:** Sollen bestimmte Keywords für SEO-Optimierung priorisiert werden?

**OQ-09:** Gibt es ein gewünschtes Launch-Datum?

**OQ-10:** Welche Datenbank-Lösung wird bevorzugt? (z.B. Vercel Postgres, Supabase, PlanetScale, etc.)

---

## Anhang: Textbausteine-Referenz

### Hero Section
> Wir sind Ihr technischer Partner im Hintergrund.
> White-Label-Typo3-Entwicklung mit deutscher Projektsteuerung – zuverlässig, diskret und kosteneffizient.

### USP-Block
- ⚙️ Saubere Typo3-Codebasis
- 🤝 Diskrete White-Label-Zusammenarbeit
- 🌍 Offshore-Vorteil mit deutscher Qualitätssicherung
- 📈 Skalierbare Entwicklungskapazität

### CTA-Buttons
- "Jetzt Partner werden"
- "Projekt anfragen"
- "Kostenloses Erstgespräch buchen"
- "Angebot anfordern"

---

**Dokumentversion:** 1.0
**Erstellt am:** 2025-10-06
**Status:** Entwurf - Warte auf Klärung offener Fragen
