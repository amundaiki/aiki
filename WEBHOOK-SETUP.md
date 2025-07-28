# 🔗 Webhook Setup Guide - AIKI AI-Apper

Denne guiden viser hvordan du setter opp webhooks for å motta data fra hver AIKI AI-app.

## 📝 Webhook-konfigurering

### 1. Erstatt webhook-URLer
I hver app-mappe (`tilbud-generator`, `kontrakt-generator`, etc.), finn denne linjen i `index.html`:

```javascript
// Send to webhook (replace with your webhook URL)
const webhookResponse = await fetch('https://your-webhook-url.com/tilbud', {
```

**Erstatt** `https://your-webhook-url.com/tilbud` med din faktiske webhook-URL.

## 🎯 Webhook-endepunkter per app

### AI Tilbudsgenerator
- **Endpoint**: `/tilbud`
- **Fil**: `tilbud-generator/index.html` (linje ~116)
- **Data type**: `tilbud_request`

### AI Kontraktgenerator  
- **Endpoint**: `/kontrakt`
- **Fil**: `kontrakt-generator/index.html` (linje ~131)
- **Data type**: `kontrakt_request`

### AI Lead Identifikasjon
- **Endpoint**: `/leads`
- **Fil**: `lead-identifikasjon/index.html` (linje ~126)
- **Data type**: `leads_request`

### AI Bedriftsanalyse
- **Endpoint**: `/bedriftsanalyse`
- **Fil**: `bedrifts-analyse/index.html` (linje ~137)
- **Data type**: `bedriftsanalyse_request`

## 📦 Data-struktur

Hver webhook mottar data i følgende format:

```json
{
  "type": "tilbud_request",
  "data": {
    "kunde": "Bedriftsnavn AS",
    "tjenester": "Utvikling av AI-løsning...",
    "budsjett": "100000",
    "krav": "Spesielle krav...",
    "deadline": "2024-12-31",
    "kontakt": "kontakt@bedrift.no"
  },
  "timestamp": "2024-07-28T21:00:00.000Z"
}
```

## 🔧 Anbefalt webhook-plattformer

### Make.com (Integromat)
```
https://hook.eu1.make.com/[webhook-id]
```

### Zapier
```
https://hooks.zapier.com/hooks/catch/[zapier-id]/[hook-id]/
```

### N8N
```
https://[your-n8n-instance].app.n8n.cloud/webhook/[webhook-id]
```

### Custom Server
```
https://yourdomain.com/api/webhooks/aiki-[app-name]
```

## 📧 E-post notifikasjoner

Eksempel på automatisk e-post-sending via webhook:

```javascript
// I din webhook-handler
const emailData = {
  to: "amund@aiki.as",
  subject: `Ny ${data.type.replace('_request', '')} generert`,
  body: `
    Type: ${data.type}
    Kontakt: ${data.data.kontakt}
    Tidspunkt: ${data.timestamp}
    
    Data: ${JSON.stringify(data.data, null, 2)}
  `
};
```

## 🗄 Database-lagring

Eksempel struktur for database:

```sql
CREATE TABLE aiki_requests (
  id INT PRIMARY KEY AUTO_INCREMENT,
  type VARCHAR(50) NOT NULL,
  kontakt_email VARCHAR(255),
  request_data JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🔍 Testing av webhooks

### 1. Lokal testing med ngrok
```bash
# Install ngrok
npm install -g ngrok

# Expose local server
ngrok http 3000

# Use the https URL in your apps
```

### 2. Webhook.site for testing
- Gå til https://webhook.site
- Kopier din unike URL
- Bruk som webhook-URL i appene
- Se requests i real-time

## 📊 Analytics og logging

Eksempel på data du bør logge:

```javascript
{
  app_name: "tilbud-generator",
  user_email: "kunde@bedrift.no", 
  ip_address: "192.168.1.1",
  user_agent: "Mozilla/5.0...",
  form_data: { ... },
  generated_content_length: 1250,
  processing_time_ms: 3400,
  timestamp: "2024-07-28T21:00:00.000Z"
}
```

## ⚠️ Sikkerhet

### 1. Validering
```javascript
// Valider at request kommer fra din app
const validOrigins = ['https://yourdomain.com'];
if (!validOrigins.includes(req.headers.origin)) {
  return res.status(403).json({error: 'Unauthorized'});
}
```

### 2. Rate limiting
```javascript
// Begrens antall requests per IP
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10 // limit each IP to 10 requests per windowMs
});
```

### 3. HTTPS-only
Bruk alltid HTTPS for webhook-URLer i produksjon.

## 🔗 Webhook-responser

Dine webhooks bør returnere:

```javascript
// Success
res.status(200).json({
  success: true,
  message: "Data received successfully",
  id: "req_123456"
});

// Error
res.status(400).json({
  success: false,
  error: "Invalid data format"
});
```

---

**Support**: amund@aiki.as hvis du trenger hjelp med webhook-oppsett! 🚀 