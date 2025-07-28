# 🦖 AIKI Filstruktur Oversikt 🔫

## 📁 Ny Organisert Struktur

### 🎨 Shared Resources
```
assets/
├── css/
│   └── aiki-theme.css          # 🎨 Felles AIKI-tema CSS
└── js/
    └── aiki-common.js          # 🔧 Felles JavaScript utilities
```

### ⚙️ Configuration
```
config.js                      # ⚙️ Global konfigurasjon
```

### 🚀 Hovedapplikasjoner
```
index.html                     # 🏠 Hovedside med AI-moduler
intern-kalkulator.html         # 💰 Intern prissettingskalkulator
ai-modules.js                  # 🤖 AI-funksjoner
kalkulator                     # 📊 Original kalkulator (bevart)
```

### 📖 Dokumentasjon
```
README.md                      # 📋 Hoveddokumentasjon
INTERN-KALKULATOR-README.md    # 💼 Intern kalkulator guide
FILSTRUKTUR-OVERSIKT.md        # 📁 Denne filen
```

---

## 🎨 assets/css/aiki-theme.css

**Inneholder:**
- ✅ CSS-variabler for alle AIKI-farger
- ✅ Toplogic-rød tema [[memory:4574045]]
- ✅ Responsive design klasser
- ✅ Felles komponenter (buttons, cards, forms, modals)
- ✅ Animasjoner og effekter
- ✅ Utility-klasser
- ✅ Print-styles

**CSS-klasser tilgjengelig:**
```css
/* Typography */
.aiki-title, .aiki-subtitle, .aiki-section-title

/* Buttons */  
.aiki-btn, .aiki-btn-primary, .aiki-btn-success, .aiki-btn-large

/* Cards */
.aiki-card, .aiki-card-success

/* Forms */
.aiki-form-group, .aiki-form-label, .aiki-form-input, .aiki-form-textarea

/* Modals */
.aiki-modal, .aiki-modal-content, .aiki-modal-header, .aiki-modal-title

/* Results */
.aiki-result-card, .aiki-result-title, .aiki-result-value

/* Info boxes */
.aiki-info-box, .aiki-warning-box, .aiki-success-box

/* Grids */
.aiki-grid-2, .aiki-grid-3, .aiki-grid-auto

/* Utilities */
.aiki-text-center, .aiki-mb-2, .aiki-hidden, .aiki-flex, etc.
```

---

## 🔧 assets/js/aiki-common.js

**AIKI Namespace:**
```javascript
window.AIKI = {
    config: {}, 
    utils: {},
    dom: {},
    animations: {},
    modal: {},
    forms: {},
    storage: {},
    logger: {},
    theme: {}
}
```

**Utility-funksjoner:**
```javascript
// Formatering
AIKI.utils.formatNOK(number)
AIKI.utils.formatNumber(number) 
AIKI.utils.formatPercent(number, decimals)

// Verktøy
AIKI.utils.delay(ms)
AIKI.utils.debounce(func, wait)
AIKI.utils.generateId(length)
AIKI.utils.validateOrgnr(orgnr)

// DOM
AIKI.dom.$(selector)
AIKI.dom.$$(selector)
AIKI.dom.on(element, event, handler)
AIKI.dom.create(tag, attributes, content)

// Animasjoner
AIKI.animations.animateValue(element, start, end, duration)
AIKI.animations.shake(element)
AIKI.animations.pulse(element)
AIKI.animations.glow(element)

// Modaler
AIKI.modal.show(modal)
AIKI.modal.hide(modal)

// Former
AIKI.forms.getData(form)
AIKI.forms.setData(form, data)
AIKI.forms.validate(form)

// Lagring
AIKI.storage.set(key, value)
AIKI.storage.get(key, defaultValue)

// Logging
AIKI.logger.debug(), .info(), .warn(), .error(), .success()

// Tema
AIKI.theme.set(theme), .get(), .toggle()
```

---

## ⚙️ config.js

**Konfigurasjon av:**
- 🎯 System informasjon og miljø
- 🎨 UI/UX innstillinger og tema
- 🤖 AI-moduler konfigurasjon
- 💰 Prissettingslogikk og mock-data
- 🔒 Sikkerhet og feature flags
- 🌍 Lokalisering og språk
- 📊 Analytics og performance
- 🛠 Development tools

**Tilgang:**
```javascript
AIKI.getConfig('path.to.setting', defaultValue)
AIKI.setConfig('path.to.setting', value)
```

**Mock bedriftsdata:**
```javascript
AIKI.getConfig('pricing.mockCompanies')
// Equinor, Telenor, Orkla, Yara, DNB, Norsk Hydro
```

---

## 🔄 Migrering og Forbedringer

### ✅ Før → Etter

**CSS:**
- ❌ Duplikert CSS i hver fil
- ✅ Felles `aiki-theme.css` 
- ✅ Konsistent design på tvers av sider

**JavaScript:**
- ❌ Duplikert utility-funksjoner
- ✅ Felles `aiki-common.js`
- ✅ Standardiserte logging og formatering

**Konfigurasjon:**
- ❌ Hardkodede verdier i kode
- ✅ Sentralisert `config.js`
- ✅ Miljø-spesifikke innstillinger

**Logging:**
- ❌ `console.log()` overalt
- ✅ `AIKI.logger.success()`, `.error()`, etc.
- ✅ Debug-nivå kontroll

**Formatering:**
- ❌ Duplikert `formatNOK()` funksjoner
- ✅ `AIKI.utils.formatNOK()`, `.formatPercent()`
- ✅ Konsistent norsk formatering

---

## 🚀 Bruk av Shared Files

### 📄 HTML Template
```html
<!DOCTYPE html>
<html lang="no">
<head>
    <!-- External CDN -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
    
    <!-- AIKI Shared Styles -->
    <link rel="stylesheet" href="assets/css/aiki-theme.css">
    
    <!-- Page-specific styles -->
    <style>
        /* Kun side-spesifikke styles her */
    </style>
</head>
<body>
    <!-- Content -->
    
    <!-- AIKI Configuration -->
    <script src="config.js"></script>
    
    <!-- AIKI Common Utilities -->
    <script src="assets/js/aiki-common.js"></script>
    
    <!-- Page-specific JavaScript -->
    <script>
        // Bruk AIKI utilities:
        AIKI.logger.info('Siden er lastet!');
        const formatted = AIKI.utils.formatNOK(12345);
    </script>
</body>
</html>
```

---

## 📈 Fordeler med Ny Struktur

### 🎯 Development
- **Mindre duplikasjon** - DRY prinsipp
- **Konsistent design** - samme utseende overalt
- **Enklere vedlikehold** - endre på ett sted
- **Bedre organisering** - tydelig filstruktur

### 🚀 Performance  
- **Cached resources** - CSS/JS caches bedre
- **Mindre filstørrelser** - mindre duplikasjon
- **Faster loading** - shared resources lastes en gang

### 🔧 Utvikling
- **Standardiserte funksjoner** - samme API overalt
- **Debug-kontroll** - sentralisert logging
- **Konfigurerbart** - miljø-spesifikke innstillinger
- **Skalerbart** - lett å legge til nye sider

---

## 🦖 Neste Steg

1. **Testing** - Test alle eksisterende funksjoner
2. **Optimalisering** - Ytterligere CSS cleanup
3. **Dokumentasjon** - Utvidet developer docs
4. **Nye features** - Bruk shared struktur for nye moduler

*🔫 AIKI: Where organization meets dinosaur power! 💥* 