# 🚀 AIKI AI-Apper

En profesjonell samling av AI-drevne forretningsløsninger for automatisering og optimalisering av arbeidsprosesser.

## 📁 Prosjektstruktur

```
aiki/
├── index.html                    # Hovedside med oversikt over alle apper
├── intern-kalkulator.html        # Intern prissettingskalkulator
├── assets/
│   ├── css/
│   │   └── aiki-theme.css        # Delt CSS-styling for alle apper
│   └── js/
│       └── aiki-common.js        # Delte JavaScript-utilities
├── config.js                     # Global konfigurasjon
├── ai-modules.js                 # AI-generering logikk
└── [APP-NAVN]/
    └── index.html                # Selvstendig app med egen webhook
```

## 🎯 Tilgjengelige AI-Apper

### 1. **AI Tilbudsgenerator** (`/tilbud-generator/`)
- **Formål**: Lag profesjonelle tilbud til kunder med AI-assistanse
- **Funksjoner**: 
  - Kundenavn og kontaktinfo
  - Detaljert tjenestebeskrivelse
  - Budsjettanslag og spesielle krav
  - Leveringsdato og timeline
  - PDF-nedlasting og e-post deling
- **Webhook**: `https://your-webhook-url.com/tilbud`

### 2. **AI Kontraktgenerator** (`/kontrakt-generator/`)
- **Formål**: Opprett juridisk korrekte kontrakter med AI-assistanse
- **Funksjoner**:
  - Kontrakttyper (tjeneste, salg, konsulent, lisens, partnerskap)
  - Parter, verdi og varighet
  - Leveranser og betalingsbetingelser
  - Juridisk ansvarsfraskrivelse
  - PDF-nedlasting og e-post deling
- **Webhook**: `https://your-webhook-url.com/kontrakt`

### 3. **AI Lead Identifikasjon** (`/lead-identifikasjon/`)
- **Formål**: Identifiser potensielle kunder med intelligente algoritmer
- **Funksjoner**:
  - Målbransje og bedriftsstørrelse
  - Geografisk område (Norge, Skandinavia, Europa)
  - Omsetningsområde og prioritering
  - Excel-nedlasting og e-post deling
  - Oppfølgingstips
- **Webhook**: `https://your-webhook-url.com/leads`

### 4. **AI Bedriftsanalyse** (`/bedrifts-analyse/`)
- **Formål**: Analyser detaljert informasjon om bedrifter og leads
- **Funksjoner**:
  - Organisasjonsnummer-oppslag
  - Analysefokus (økonomi, teknologi, marked, vekst, risiko)
  - Analysedybde og tidsperiode
  - Datakilder: Proff.no, offentlige registre
  - PDF-nedlasting og e-post deling
- **Webhook**: `https://your-webhook-url.com/bedriftsanalyse`

## 🛠️ Teknisk Arkitektur

### Delte Ressurser
- **CSS**: `assets/css/aiki-theme.css` - Moderne, responsivt design med blå fargepalett
- **JavaScript**: `assets/js/aiki-common.js` - Utilities, logging, form-håndtering
- **Konfigurasjon**: `config.js` - Sentraliserte innstillinger og mock-data
- **AI-logikk**: `ai-modules.js` - AIKIProcessor klasse for alle generering

### Webhook-integrering
Hver app sender data til sin egen webhook-URL for:
- Logging og analytics
- Notifikasjoner
- Database-lagring
- Integrasjon med CRM/ERP-systemer

### Responsivt Design
- **Desktop**: Optimalisert for store skjermer
- **Tablet**: Tilpasset touch-grensesnitt  
- **Mobil**: Kompakt layout med swipe-støtte

## 🎨 Design og UX

### Fargepalett
- **Primær**: #006DFF (AIKI Blå)
- **Sekundær**: #E8E6FF (Lys Blå)
- **Tekst**: #1a202c (Mørk Grå)
- **Bakgrunn**: Kunstnerisk gradient med faded bakgrunnsbilde

### Typografi
- **Headers**: Poppins (500, 700)
- **Body**: Roboto (300, 400, 500, 700)
- **Kode**: Roboto Mono

### Animasjoner
- Smooth hover-effekter
- Loading-spinners under AI-generering
- Smooth scroll til resultater

## 🚀 Kom i Gang

1. **Åpne hovedsiden**: `index.html`
2. **Velg ønsket app** fra oversikten
3. **Fyll ut skjemaet** med relevante data
4. **Generer resultat** med AI
5. **Last ned eller send** resultatet

## 📞 Support og Kontakt

- **E-post**: amund@aiki.as
- **Web**: www.aiki.as
- **Teknisk support**: Tilgjengelig 9-17 på hverdager

## 🔒 Sikkerhet og Personvern

- Alle data krypteres i transit
- Ingen lagring av sensitiv informasjon
- GDPR-compliant databehandling
- Webhook-data sendes over HTTPS

## 📈 Utvikling og Roadmap

### Kommende Funksjoner
- PDF-generering med AIKI-branding
- CRM-integrasjon (HubSpot, Pipedrive)
- Multi-språk støtte
- Avanserte analyser og rapporter
- API-tilgang for utviklere

### Versjon Historie
- **v1.0** - Grunnleggende AI-apper med modal-grensesnitt
- **v2.0** - Separate apper med webhook-integrering og moderne design
- **v2.1** - Kunstnerisk bakgrunn og kompakt layout

---

*Utviklet med ❤️ av AIKI Team* 