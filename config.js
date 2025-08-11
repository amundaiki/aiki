// AIKI Configuration - Global settings for all AIKI applications

/**
 * AIKI Global Configuration
 * Centralized configuration for all AIKI applications and modules
 */

window.AIKI = window.AIKI || {};

// Override default config
AIKI.config = {
    
    // System Information
    version: '1.0.0',
    appName: 'AIKI - AI Business Platform',
    environment: 'development', // development, staging, production
    
    // Debug Settings
    debug: true,
    verbose: false,
    logLevel: 'info', // debug, info, warn, error
    
    // UI/UX Settings
    animations: true,
    sounds: false,
    theme: 'dark',
    language: 'no',
    
    // API Configuration
    api: {
        baseUrl: '',
        timeout: 30000,
        retries: 3,
        endpoints: {
            // AI Services
            tilbud: '/api/ai/tilbud',
            kontrakter: '/api/ai/kontrakter', 
            leads: '/api/ai/leads',
            bedriftinfo: '/api/ai/bedriftinfo',
            
            // External APIs
            proffApi: 'https://api.proff.no/api/companies/',
            aiApi: 'https://api.openai.com/v1/',
            makeWebhook: 'https://hook.eu2.make.com/brvh5nl39vspnst5nb7vf4enqdt830s1'
        }
    },
    
    // AI Module Settings
    ai: {
        // Tilbudsgenerator
        tilbud: {
            enabled: true,
            defaultBudgetRange: [50000, 500000],
            defaultTimeline: '4-8 uker',
            templates: ['standard', 'premium', 'enterprise']
        },
        
        // Kontraktgenerator
        kontrakter: {
            enabled: true,
            defaultTypes: ['tjeneste', 'salg', 'konsulent', 'lisens', 'partnerskap'],
            juridiskSjekk: true,
            autoBackup: true
        },
        
        // Lead Hunter
        leads: {
            enabled: true,
            maxResults: 10,
            scoringThreshold: 75,
            defaultBransjer: ['teknologi', 'finans', 'helse', 'industri'],
            geografiskeFokus: ['Norge', 'Skandinavia', 'Norden']
        },
        
        // Bedriftsanalyse
        bedriftinfo: {
            enabled: true,
            dataSources: ['proff', 'brreg', 'linkedin'],
            analyseTyper: ['grunnleggende', 'økonomisk', 'teknologi', 'konkurranse', 'komplett'],
            cacheDuration: 3600000 // 1 hour in milliseconds
        }
    },
    
    // Prissettingskalkulator
    pricing: {
        // Success fee modell (% av kundens årlige resultat)
        defaultPercent: 1.5,
        minPercent: 0.5,
        maxPercent: 3.0,
        
        // Standard verdier
        defaults: {
            timerSpartPerDag: 2,
            arbeidsdagerPerÅr: 250,
            arbeidstimer: 37.5,
            månedslønn: 65000,
            vedlikeholdProsent: 0.1 // 10% av investering
        },
        
        // Mock bedriftsdata for testing
        mockCompanies: {
            'equinor': {
                navn: 'Equinor ASA',
                orgnr: '923609016',
                ansatte: 21000,
                omsetning: 1051000000000,
                resultat: 74900000000,
                bransje: 'Energi'
            },
            'telenor': {
                navn: 'Telenor ASA', 
                orgnr: '935926275',
                ansatte: 21000,
                omsetning: 105000000000,
                resultat: 8500000000,
                bransje: 'Telekommunikasjon'
            },
            'orkla': {
                navn: 'Orkla ASA',
                orgnr: '910747711', 
                ansatte: 18500,
                omsetning: 50400000000,
                resultat: 4200000000,
                bransje: 'FMCG'
            },
            'yara': {
                navn: 'Yara International ASA',
                orgnr: '986228608',
                ansatte: 17000, 
                omsetning: 187000000000,
                resultat: 15600000000,
                bransje: 'Kjemikalier'
            },
            'dnb': {
                navn: 'DNB ASA',
                orgnr: '984851006',
                ansatte: 9500,
                omsetning: 56000000000,
                resultat: 25400000000,
                bransje: 'Bank/Finans'
            },
            'norsk hydro': {
                navn: 'Norsk Hydro ASA',
                orgnr: '916142840',
                ansatte: 35000,
                omsetning: 156000000000,
                resultat: 12300000000,
                bransje: 'Industri'
            }
        }
    },
    
    // Branding og Toplogic integrasjon
    branding: {
        useToplogicTheme: true,
        showToplogicLogo: true,
        showAikiLogo: true,
        primaryColor: '#dc2626', // Toplogic red
        secondaryColor: '#ea580c', // Orange accent
        
        // Logo paths
        logos: {
            toplogic: '/assets/images/toplogic-logo.png',
            aiki: '/assets/images/aiki-logo.png'
        },
        
        // Theme colors matching Toplogic
        colors: {
            toplogicRed: '#dc2626',
            toplogicDark: '#7f1d1d',
            white: '#ffffff',
            black: '#000000',
            grayLight: '#f8f9fa',
            grayDark: '#343a40'
        }
    },
    
    // Animasjoner og effekter
    animations: {
        enabled: true,
        duration: {
            fast: 200,
            normal: 300,
            slow: 500
        },
        easing: 'ease-out',
        dinoEffects: true,
        konamiCode: true
    },
    
    // Performance og caching
    performance: {
        enableCaching: true,
        cacheExpiry: 1800000, // 30 minutes
        lazyLoad: true,
        preloadImages: false,
        enableServiceWorker: false
    },
    
    // Analytics og tracking
    analytics: {
        enabled: false, // Set to true in production
        provider: 'google', // google, adobe, custom
        trackingId: '',
        trackEvents: ['page_view', 'button_click', 'form_submit', 'ai_generation']
    },
    
    // Security settings
    security: {
        enableCSP: true,
        allowedOrigins: ['localhost', '127.0.0.1'],
        apiKeyRequired: false,
        rateLimiting: {
            enabled: false,
            maxRequests: 100,
            windowMs: 900000 // 15 minutes
        }
    },
    
    // Feature flags
    features: {
        tilbudsgenerator: true,
        kontraktgenerator: true,
        leadhunter: true,
        bedriftsanalyse: true,
        internkalkulator: true,
        proffIntegration: true,
        emailIntegration: false,
        pdfGeneration: false,
        crmIntegration: false,
        realTimeUpdates: false
    },
    
    // Localization
    i18n: {
        defaultLanguage: 'no',
        supportedLanguages: ['no', 'en', 'se', 'dk'],
        dateFormat: 'dd.mm.yyyy',
        numberFormat: 'nb-NO',
        currency: 'NOK'
    },
    
    // Error handling
    errorHandling: {
        showDetailedErrors: true, // Only in development
        logErrors: true,
        sendErrorReports: false,
        fallbackMessages: {
            network: 'Nettverksfeil - sjekk internettforbindelsen',
            server: 'Serverfeil - vi jobber med problemet!',
            generic: 'Noe gikk galt - prøv igjen eller kontakt support'
        }
    },
    
    // Development tools
    dev: {
        enableDevTools: true,
        showPerformanceMetrics: false,
        mockData: true,
        bypassAuth: true,
        verboseLogging: true
    }
};

// Environment-specific overrides
if (AIKI.config.environment === 'production') {
    // Production settings
    AIKI.config.debug = false;
    AIKI.config.verbose = false;
    AIKI.config.analytics.enabled = true;
    AIKI.config.dev.enableDevTools = false;
    AIKI.config.dev.mockData = false;
    AIKI.config.errorHandling.showDetailedErrors = false;
    AIKI.config.security.apiKeyRequired = true;
    AIKI.config.security.rateLimiting.enabled = true;
    
} else if (AIKI.config.environment === 'staging') {
    // Staging settings
    AIKI.config.debug = false;
    AIKI.config.analytics.enabled = true;
    AIKI.config.dev.mockData = false;
    
} else {
    // Development settings (default)
    AIKI.config.debug = true;
    AIKI.config.verbose = true;
    AIKI.config.dev.enableDevTools = true;
    AIKI.config.dev.mockData = true;
}

// Utility functions for config access
AIKI.getConfig = function(path, defaultValue = null) {
    const keys = path.split('.');
    let current = AIKI.config;
    
    for (const key of keys) {
        if (current && current.hasOwnProperty(key)) {
            current = current[key];
        } else {
            return defaultValue;
        }
    }
    
    return current;
};

AIKI.setConfig = function(path, value) {
    const keys = path.split('.');
    let current = AIKI.config;
    
    for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (!current[key] || typeof current[key] !== 'object') {
            current[key] = {};
        }
        current = current[key];
    }
    
    current[keys[keys.length - 1]] = value;
};

// Initialize config logging
if (AIKI.config.debug) {
    console.log('AIKI Config loaded:', AIKI.config);
    console.log('Environment:', AIKI.config.environment);
    console.log('Debug mode:', AIKI.config.debug ? 'ON' : 'OFF');
}

// Freeze config in production to prevent tampering
if (AIKI.config.environment === 'production') {
    Object.freeze(AIKI.config);
} 