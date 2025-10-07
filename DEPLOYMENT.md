# Deployment-Anleitung: White-Label Typo3 Landing Page

Diese Anleitung beschreibt alle Schritte für das Deployment der Anwendung auf Vercel mit eigenem SMTP-Server (DSGVO-konform).

## Voraussetzungen

- GitHub-Repository mit dem Projekt
- Vercel-Account (https://vercel.com)
- SMTP-Zugang von deinem Hosting-Provider (Strato, IONOS, All-Inkl, etc.)

## 1. SMTP-Zugangsdaten bereitstellen

### Option A: Strato

1. Melde dich im Strato-Kundenbereich an
2. Gehe zu "E-Mail" → "E-Mail-Verwaltung"
3. SMTP-Einstellungen:
   - **Host:** `smtp.strato.de`
   - **Port:** `587` (TLS) oder `465` (SSL)
   - **Benutzername:** Deine vollständige E-Mail-Adresse
   - **Passwort:** Dein E-Mail-Passwort

### Option B: IONOS

1. Melde dich im IONOS-Kundenbereich an
2. Gehe zu "E-Mail" → "E-Mail-Einstellungen"
3. SMTP-Einstellungen:
   - **Host:** `smtp.ionos.de`
   - **Port:** `587` (TLS) oder `465` (SSL)
   - **Benutzername:** Deine vollständige E-Mail-Adresse
   - **Passwort:** Dein E-Mail-Passwort

### Option C: All-Inkl

1. Melde dich im KAS (Kunden-Administrations-System) an
2. Gehe zu "E-Mail" → "E-Mail-Verwaltung"
3. SMTP-Einstellungen:
   - **Host:** `<dein-server>.kasserver.com`
   - **Port:** `587` (TLS) oder `465` (SSL)
   - **Benutzername:** Deine vollständige E-Mail-Adresse
   - **Passwort:** Dein E-Mail-Passwort

### Option D: Gmail (mit App-Passwort)

1. Aktiviere 2-Faktor-Authentifizierung in deinem Google-Konto
2. Gehe zu: https://myaccount.google.com/apppasswords
3. Erstelle ein App-Passwort für "Mail"
4. SMTP-Einstellungen:
   - **Host:** `smtp.gmail.com`
   - **Port:** `587` (TLS) oder `465` (SSL)
   - **Benutzername:** Deine Gmail-Adresse
   - **Passwort:** Das generierte App-Passwort (16 Zeichen)

**Hinweis:** Gmail hat Versandlimits (500 E-Mails/Tag für kostenlose Konten).

## 2. Vercel-Projekt erstellen

### 2.1 Repository mit Vercel verbinden

1. Gehe zu https://vercel.com/new
2. Wähle "Import Git Repository"
3. Wähle dein GitHub-Repository
4. Framework Preset: **Next.js** (wird automatisch erkannt)
5. **NICHT** auf "Deploy" klicken - erst Environment Variables setzen!

### 2.2 Environment Variables konfigurieren

Füge folgende Variablen hinzu (unter "Environment Variables"):

```bash
# SMTP Configuration
SMTP_HOST="smtp.strato.de"  # Dein SMTP-Server
SMTP_PORT="587"  # 587 für TLS, 465 für SSL
SMTP_SECURE="false"  # false für Port 587, true für Port 465
SMTP_USER="noreply@somesolutions.de"  # Deine E-Mail-Adresse
SMTP_PASSWORD="dein-smtp-passwort"  # Dein E-Mail-Passwort

# Email Addresses
EMAIL_FROM="noreply@somesolutions.de"  # Absender
EMAIL_TO="info@somesolutions.de"  # Empfänger für Kontaktanfragen

# Next.js
NEXT_PUBLIC_SITE_URL="https://typo3.somesolutions.de"  # Nach Deployment anpassen
```

**Wichtig:**
- Setze alle Variablen für alle Environments (Production, Preview, Development)
- `SMTP_SECURE="true"` nur für Port 465 verwenden
- `SMTP_USER` ist meist deine vollständige E-Mail-Adresse

### 2.3 Build Settings (sollte automatisch korrekt sein)

```
Build Command: npm run build
Output Directory: .next
Install Command: npm install
Development Command: npm run dev
```

### 2.4 Deployment starten

1. Klicke auf "Deploy"
2. Warte bis der Build abgeschlossen ist (~2-3 Minuten)
3. Notiere die Deployment-URL (z.B. `your-project.vercel.app`)

## 3. Testing nach Deployment

### 3.1 Funktionstest durchführen

Teste folgende Funktionen:

- [ ] Alle Seiten laden korrekt (/, /leistungen, /ueber-uns, /preise, /kontakt)
- [ ] Navigation funktioniert (Desktop & Mobile)
- [ ] Cookie-Banner erscheint und speichert Auswahl
- [ ] Kontaktformular:
  - [ ] Validierung funktioniert (fehlerhafte Eingaben werden abgefangen)
  - [ ] Erfolgreiche Submission
  - [ ] E-Mail wird versendet und empfangen
- [ ] Impressum & Datenschutz laden korrekt
- [ ] 404-Seite funktioniert bei ungültigen URLs

### 3.2 E-Mail-Empfang testen

1. Fülle das Kontaktformular aus
2. Prüfe ob E-Mail bei `EMAIL_TO` ankommt
3. Prüfe Spam-Ordner falls E-Mail nicht ankommt
4. Prüfe Vercel Function Logs für Fehler: Deployment → Functions → Logs

### 3.3 Performance-Check

```bash
# Lighthouse-Test durchführen
npx lighthouse https://your-domain.vercel.app --view
```

Zielwerte:
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 95

## 4. Custom Domain konfigurieren (Optional)

### 4.1 Domain zu Vercel hinzufügen

1. Gehe zu Project Settings → Domains
2. Füge deine Domain hinzu: `typo3.somesolutions.de`
3. Folge den DNS-Konfigurationsanweisungen

### 4.2 DNS-Records setzen

Füge bei deinem Domain-Provider (somesolutions.de) hinzu:

```
CNAME:  typo3  →  cname.vercel-dns.com
```

### 4.3 SSL-Zertifikat

- SSL wird automatisch von Vercel bereitgestellt
- Dauert ca. 10-60 Minuten nach DNS-Propagierung

### 4.4 Environment Variable aktualisieren

```bash
NEXT_PUBLIC_SITE_URL="https://typo3.somesolutions.de"
```

## 5. Monitoring & Maintenance

### 5.1 Vercel Analytics aktivieren

1. Gehe zu Project Settings → Analytics
2. Aktiviere "Web Analytics"
3. Kostenlos für bis zu 2.500 Events/Monat

### 5.2 Error Tracking

Vercel zeigt automatisch Runtime-Errors im Dashboard:
- Gehe zu Deployment → Functions → View Logs

### 5.3 E-Mail-Versand überwachen

Bei deinem E-Mail-Provider:
- Strato: Webmail → Versendete E-Mails
- IONOS: Webmail → Gesendete Elemente
- Gmail: Gesendete E-Mails

## 6. Troubleshooting

### Problem: Build schlägt fehl

```bash
# Lokal bauen und Fehler prüfen
npm run build

# Häufige Fehler:
# - TypeScript-Fehler → npm run lint
# - Fehlende Dependencies → npm install
# - Environment Variables fehlen → .env.local prüfen
```

### Problem: E-Mails werden nicht versendet

**1. Prüfe SMTP-Zugangsdaten in Vercel:**
- Settings → Environment Variables
- Alle SMTP_* Variablen korrekt gesetzt?

**2. Prüfe Vercel Function Logs:**
- Deployment → Functions → View Logs
- Suche nach "Error sending email"

**Häufige SMTP-Fehler:**

```
Error: Invalid login
→ SMTP_USER oder SMTP_PASSWORD falsch

Error: Connection timeout
→ SMTP_HOST oder SMTP_PORT falsch

Error: Self signed certificate
→ SMTP_SECURE falsch gesetzt (false für 587, true für 465)
```

**3. Teste SMTP-Verbindung lokal:**

Erstelle `.env.local` mit deinen SMTP-Daten und teste:

```bash
npm run dev
# Dann Kontaktformular auf localhost:3000/kontakt ausfüllen
```

**4. Port-Probleme:**
- Port 587: `SMTP_SECURE="false"` (TLS/STARTTLS)
- Port 465: `SMTP_SECURE="true"` (SSL)
- Port 25: Meist geblockt, nicht empfohlen

### Problem: E-Mails landen im Spam

**SPF-Record setzen:**

Bei deinem Domain-Provider (DNS-Einstellungen):

```
TXT Record:  @  →  v=spf1 include:_spf.strato.com ~all
```

Oder für IONOS:
```
TXT Record:  @  →  v=spf1 include:_spf.perfora.net include:_spf.mlsend.com ~all
```

**DKIM aktivieren:**
- Bei deinem E-Mail-Provider DKIM aktivieren
- DNS-Records gemäß Provider-Anleitung setzen

### Problem: "Module not found" Errors

```bash
# Cache löschen und neu deployen
# In Vercel Dashboard:
# Settings → General → Clear Cache
# Dann: Deployments → Redeploy
```

## 7. Checkliste vor Go-Live

- [ ] Alle Environment Variables sind gesetzt
- [ ] SMTP-Verbindung funktioniert
- [ ] E-Mail-Versand getestet
- [ ] E-Mails landen nicht im Spam (SPF/DKIM konfiguriert)
- [ ] Custom Domain ist konfiguriert und SSL aktiv
- [ ] Alle Seiten wurden manuell getestet
- [ ] Kontaktformular wurde getestet
- [ ] Cookie-Banner funktioniert
- [ ] Impressum & Datenschutz sind vollständig ausgefüllt
- [ ] Google Search Console eingerichtet (optional)
- [ ] Analytics aktiviert (optional)
- [ ] Lighthouse-Score > 90 für alle Kategorien

## 8. Post-Launch

### Google Search Console einrichten

1. Gehe zu https://search.google.com/search-console
2. Füge Property hinzu: `https://typo3.somesolutions.de`
3. Verifiziere via DNS oder HTML-Tag
4. Sitemap einreichen: `https://typo3.somesolutions.de/sitemap.xml`

### Content aktualisieren

Nach Go-Live noch zu bearbeiten:
- [ ] Impressum mit echten Firmendaten füllen
- [ ] Datenschutzerklärung anpassen
- [ ] Preise festlegen (aktuell "Auf Anfrage")
- [ ] Team-Fotos hinzufügen (optional)

---

## SMTP-Anbieter Übersicht

| Anbieter | SMTP Host | Port | DSGVO | Limit |
|----------|-----------|------|-------|-------|
| **Strato** | smtp.strato.de | 587/465 | ✅ DE | Unlimitiert (fair use) |
| **IONOS** | smtp.ionos.de | 587/465 | ✅ DE | Unlimitiert (fair use) |
| **All-Inkl** | <server>.kasserver.com | 587/465 | ✅ DE | Unlimitiert (fair use) |
| **Gmail** | smtp.gmail.com | 587/465 | ⚠️ USA | 500/Tag (kostenlos) |

**Empfehlung:** Deutsche Hosting-Provider (Strato, IONOS, All-Inkl) für maximale DSGVO-Konformität.

---

## Support & Kontakt

Bei Fragen oder Problemen:
- Vercel Docs: https://vercel.com/docs
- Nodemailer Docs: https://nodemailer.com/about/
- Next.js Docs: https://nextjs.org/docs
