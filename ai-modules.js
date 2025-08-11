// AIKI AI MODULES - Professional AI functionality

class AIKIProcessor {
    constructor() {
        this.apiKey = 'demo-mode'; // I produksjon: integrer med ekte AI API
        this.templates = {
            tilbud: this.getTilbudTemplates(),
            kontrakter: this.getKontraktTemplates(),
            leads: this.getLeadTemplates(),
            bedrift: this.getBedriftTemplates()
        };
    }

    // 🎯 AI Tilbudsgenerator
    async generateTilbud(data) {
        const { kunde, tjenester, krav } = data;
        const budsjett = data.pris_eks_mva || data.budsjett;
        const pakke = data.pakke || '';
        const automasjonBeskrivelse = data.automasjon_beskrivelse || '';
        const annenKommentar = data.annen_kommentar || '';
        
        // Simuler AI-prosessering
        await this.delay(2000);
        
        const template = this.getRandomTemplate('tilbud');
        const estimat = this.calculateBudgetEstimate(budsjett);
        const timeline = this.generateTimeline(tjenester);
        
        const pakkeTekst = (
            pakke === 'ai_kickstart' ? 'AI Kickstart' :
            pakke === 'ai_revisjon' ? 'AI Revisjon' :
            pakke === 'skreddersydd_automasjon' ? 'Skreddersydd automasjon' :
            pakke === 'annen' ? 'Annen' : 'Ikke spesifisert'
        );

        const tilpasninger = [
            krav && `- Spesielle krav: ${krav}`,
            automasjonBeskrivelse && `- Automasjonsbeskrivelse: ${automasjonBeskrivelse}`,
            annenKommentar && `- Kommentar: ${annenKommentar}`
        ].filter(Boolean).join('\n');

        return `PROFESJONELT TILBUD FRA AIKI

TILBUD NR: ${this.generateTilbudNr()}
DATO: ${new Date().toLocaleDateString('no')}
GYLDIG TIL: ${this.getExpiryDate()}

TIL: ${kunde}

SAMMENDRAG:
Vi tilbyr avanserte AI-løsninger som vil transformere og effektivisere din virksomhet.

TJENESTER OG LEVERANSER:
${this.formatTjenester(tjenester)}

VALGT ALTERNATIV:
${pakkeTekst}

ESTIMERT PRIS (eks. mva):
${estimat.breakdown}
TOTALT: ${estimat.total} NOK (eks. mva)

TIDSLINJE:
${timeline}

TILPASNINGER OG NOTATER:
${tilpasninger || 'Standard leveranse med AIKI-kvalitet'}

HVORFOR VELGE AIKI:
✓ AI-drevet teknologi i forreste rekke
✓ Ekspertteam med dyp kompetanse
✓ Dokumentert ROI på 300%+
✓ 24/7 support og vedlikehold

NESTE STEG:
1. Bekreft interesse innen ${this.getResponseDeadline()}
2. Detaljert behovsanalyse og tilpasning
3. Kontraktinngåelse og kickoff
4. Implementering med høy presisjon

Vi ser frem til å realisere AI-potensialet sammen med dere!

Med vennlig hilsen,
AIKI Development Team

Kontakt: ai@aiki.no | +47 xxx xx xxx
${template.footer}`;
    }

    // 📋 AI Kontraktgenerator  
    async generateKontrakt(data) {
        const { type, parter, leveranser, betingelser } = data;
        
        await this.delay(2500);
        
        const kontraktNr = this.generateKontraktNr();
        const juridiskTemplate = this.getJuridiskTemplate(type);
        
        return `📋 ${type.toUpperCase()}KONTRAKT

KONTRAKT NR: ${kontraktNr}
OPPRETTET: ${new Date().toLocaleDateString('no')}

PARTER I AVTALEN:
${this.formatParter(parter)}

§1 AVTALENS FORMÅL OG OMFANG
Denne avtalen regulerer ${this.getKontraktFormål(type)} med dinosaur-kraftig presisjon og profesjonalitet.

§2 LEVERANSER OG FORPLIKTELSER
${this.formatLeveranser(leveranser)}

§3 TIDSRAMME OG MILEPÆLER
${this.generateMilepæler(leveranser)}

§4 VEDERLAG OG BETALINGSBETINGELSER
${this.generateBetalingsbetingelser(betingelser)}

§5 IMMATERIELLE RETTIGHETER
All kode, dokumentasjon og AI-modeller utviklet under denne avtalen tilhører AIKI, med lisens til kunde for avtalt bruk.

§6 KONFIDENSIALITET
Begge parter forplikter seg til å behandle all informasjon som konfidensiell med samma sikkerhet som en T-Rex beskytter sine unger.

§7 ANSVAR OG GARANTI
AIKI garanterer leveranser med ak47-presisjon, men ansvar begrenses til kontraktsum.

§8 OPPSIGELSE
${this.getOppsigelsesbestemmelser(type)}

§9 TVISTLØSNING
Eventuelle tvister løses ved ordinær domstol i Oslo, Norge.

§10 IKRAFTTREDELSE
Avtalen trer i kraft ved signering og gjelder frem til alle forpliktelser er oppfylt.

${juridiskTemplate}

SIGNATURER:
_________________________    _________________________
For AIKI                     For ${this.extractKundeNavn(parter)}
Dato: ___________            Dato: ___________

Dokumentet er generert med AIKI AI og juridisk kvalitetssjekket. 🦖💼`;
    }

    // 🔍 AI Lead Hunter
    async generateLeads(data) {
        const { bransje, område, størrelse, kriterier } = data;
        
        await this.delay(3000);
        
        const leads = this.generateLeadDatabase(bransje, område, størrelse);
        const scoredLeads = this.scoreLeads(leads, kriterier);
        const topLeads = scoredLeads.slice(0, 5);
        
        return `🔍 LEAD HUNTING RESULTATER 🦖

SØKEPARAMETERE:
- Bransje: ${bransje}
- Område: ${område}  
- Størrelse: ${størrelse}
- Spesialkriterier: ${kriterier}

ANALYSERTE BEDRIFTER: ${leads.length}
KVALIFISERTE LEADS: ${topLeads.length}

${topLeads.map((lead, index) => `
🎯 TOP LEAD #${index + 1}: ${lead.navn}
   Matchscore: ${lead.score}/100 🔥
   
   📊 GRUNNDATA:
   - Ansatte: ${lead.ansatte}
   - Omsetning: ${lead.omsetning}M NOK
   - Vekst: ${lead.vekst}% årlig
   - Bransje: ${lead.detaljBransje}
   
   💡 MULIGHETER:
   ${lead.muligheter.map(m => `   • ${m}`).join('\n')}
   
   📞 KONTAKTINFO:
   - Nøkkelperson: ${lead.kontakt.navn} (${lead.kontakt.rolle})
   - E-post: ${lead.kontakt.email}
   - LinkedIn: ${lead.kontakt.linkedin}
   - Telefon: ${lead.kontakt.telefon}
   
   ⚡ ANBEFALT TILNÆRMING:
   ${lead.tilnærming}
   
   🎯 ANGREPSPLAN:
   ${lead.angrepsplan}
`).join('\n---\n')}

📈 MARKEDSANALYSE:
- Totalt potensial: ${this.calculateTotalPotential(topLeads)}M NOK
- Gjennomsnittlig dealsize: ${this.getAverageDealSize(topLeads)}K NOK
- Konverteringsrate: ${this.getConversionRate(bransje)}%

🚀 NESTE STEG:
1. Kontakt Top Lead #1 innen 24 timer
2. Forbered skreddersydd pitch basert på deres spesifikke behov
3. Book demo/møte med beslutningstaker
4. Følg opp med dinosaur-kraft! 💥

Happy hunting! 🦖🔫`;
    }

    // 🏢 AI Bedriftsanalyse
    async generateBedriftInfo(data) {
        const { bedriftNavn, orgnr, land, analyseType } = data;
        
        await this.delay(2500);
        
        const bedriftData = await this.fetchBedriftData(bedriftNavn, orgnr, land);
        const analyse = this.performAnalyse(bedriftData, analyseType);
        
        return `🏢 BEDRIFTSANALYSE: ${bedriftNavn.toUpperCase()} 🦖

ANALYSETYPE: ${analyseType.toUpperCase()}
RAPPORT GENERERT: ${new Date().toLocaleString('no')}
${orgnr ? `ORG.NR: ${orgnr}` : ''}

${analyse.sections.map(section => `
📊 ${section.title}
${section.content}
`).join('\n')}

💼 EXECUTIVE SUMMARY:
${analyse.summary}

🎯 SALGSMULIGHETER:
${analyse.opportunities.map(opp => `• ${opp}`).join('\n')}

⚠️ RISIKOFAKTORER:
${analyse.risks.map(risk => `• ${risk}`).join('\n')}

🚀 ANBEFALINGER:
${analyse.recommendations.map(rec => `• ${rec}`).join('\n')}

📈 SCORING:
- Kredittverdighet: ${analyse.scores.credit}/10
- Vekstpotensial: ${analyse.scores.growth}/10
- Teknologimodenhet: ${analyse.scores.tech}/10
- Salgspotensial: ${analyse.scores.sales}/10

TOTAL AIKI-SCORE: ${analyse.totalScore}/10 🦖

---
Rapporten er generert med AIKI AI og basert på offentlige kilder + markedsintelligens.
For dypere analyse, kontakt vårt ekspertteam! 💥`;
    }

    // Helper methods
    delay(ms) {
        return AIKI.utils.delay(ms);
    }

    generateTilbudNr() {
        return `AIKI-${new Date().getFullYear()}-${AIKI.utils.generateId(6)}`;
    }

    generateKontraktNr() {
        return `KONTRAKT-${new Date().getFullYear()}-${AIKI.utils.generateId(8)}`;
    }

    getExpiryDate() {
        const date = new Date();
        date.setDate(date.getDate() + 30);
        return date.toLocaleDateString('no');
    }

    getResponseDeadline() {
        const date = new Date();
        date.setDate(date.getDate() + 7);
        return date.toLocaleDateString('no');
    }

    calculateBudgetEstimate(budsjettString) {
        const numbers = budsjettString.match(/\d+/g);
        if (!numbers) return { breakdown: 'Tilpasset prismodell', total: 'På forespørsel' };
        
        const min = parseInt(numbers[0]);
        const max = numbers[1] ? parseInt(numbers[1]) : min * 1.5;
        const avg = (min + max) / 2;
        
        return {
            breakdown: `Utviklingsarbeid: ${Math.round(avg * 0.7).toLocaleString('no')} NOK
Implementering: ${Math.round(avg * 0.2).toLocaleString('no')} NOK  
Testing og lansering: ${Math.round(avg * 0.1).toLocaleString('no')} NOK`,
            total: avg.toLocaleString('no')
        };
    }

    generateTimeline(tjenester) {
        const complexity = tjenester.length > 200 ? 'høy' : tjenester.length > 100 ? 'medium' : 'lav';
        const weeks = complexity === 'høy' ? '8-12 uker' : complexity === 'medium' ? '4-8 uker' : '2-6 uker';
        
        return `Estimert leveringstid: ${weeks}
Fase 1: Analyse og design (1-2 uker)
Fase 2: Utvikling og AI-trening (${complexity === 'høy' ? '4-6' : '2-4'} uker)  
Fase 3: Testing og optimalisering (1-2 uker)
Fase 4: Lansering og opplæring (1 uke)`;
    }

    formatTjenester(tjenester) {
        return tjenester.split('\n').map(t => `• ${t.trim()}`).filter(t => t.length > 2).join('\n');
    }

    formatParter(parter) {
        return parter.split('\n').map(p => p.trim()).filter(p => p.length > 0).join('\n');
    }

    formatLeveranser(leveranser) {
        return leveranser.split('\n').map(l => `• ${l.trim()}`).filter(l => l.length > 2).join('\n');
    }

    generateLeadDatabase(bransje, område, størrelse) {
        // Mock lead database - i produksjon ville dette integrere med ekte databaser
        const mockLeads = [
            {
                navn: 'TechNinja AS',
                ansatte: 45,
                omsetning: 25,
                vekst: 15,
                detaljBransje: `${bransje} - Teknologiutvikling`,
                score: 92,
                muligheter: [
                    'Trenger AI-automatisering av kundeservice',
                    'Planlegger ekspansjon til 3 nye markeder',
                    'Har budsjett på 2M NOK for digitalisering'
                ],
                kontakt: {
                    navn: 'Sarah Hansen',
                    rolle: 'CEO',
                    email: 's.hansen@techninja.no',
                    linkedin: 'linkedin.com/in/sarahhansen',
                    telefon: '+47 xxx xx xxx'
                },
                tilnærming: 'Fokuser på ROI fra AI-automatisering og skalerbarhet',
                angrepsplan: 'Demo av chatbot-løsning → møte med tech-team → pilot-prosjekt'
            },
            {
                navn: 'DinoData Solutions',
                ansatte: 120,
                omsetning: 80,
                vekst: 8,
                detaljBransje: `${bransje} - Dataanalyse`,
                score: 88,
                muligheter: [
                    'Utdaterte rapporteringsverktøy',
                    'Manuell databehandling som kan automatiseres',
                    'Vurderer AI-implementering i 2024'
                ],
                kontakt: {
                    navn: 'Lars Eriksen',
                    rolle: 'CTO',
                    email: 'lars.e@dinodata.com',
                    linkedin: 'linkedin.com/in/larseriksen',
                    telefon: '+47 yyy yy yyy'
                },
                tilnærming: 'Teknisk tilnærming med fokus på modernisering',
                angrepsplan: 'Teknisk whitepaper → workshop → POC-utvikling'
            }
        ];
        
        return mockLeads;
    }

    scoreLeads(leads, kriterier) {
        return leads.map(lead => ({
            ...lead,
            score: this.calculateLeadScore(lead, kriterier)
        })).sort((a, b) => b.score - a.score);
    }

    calculateLeadScore(lead, kriterier) {
        let score = Math.floor(Math.random() * 20) + 80; // Base score 80-100
        
        // Juster basert på kriterier
        if (kriterier && kriterier.toLowerCase().includes('ai')) {
            score += 5;
        }
        if (lead.vekst > 10) {
            score += 3;
        }
        if (lead.ansatte > 50) {
            score += 2;
        }
        
        return Math.min(100, score);
    }

    async fetchBedriftData(navn, orgnr, land) {
        // Mock bedriftsdata - i produksjon ville dette hente fra ekte kilder
        return {
            grunndata: {
                navn,
                orgnr: orgnr || `${Math.floor(Math.random() * 900000000) + 100000000}`,
                etablert: 2015 + Math.floor(Math.random() * 8),
                ansatte: Math.floor(Math.random() * 200) + 10,
                omsetning: Math.floor(Math.random() * 100) + 5
            },
            økonomi: {
                resultat: Math.floor(Math.random() * 10) - 2,
                egenkapital: Math.floor(Math.random() * 20) + 5,
                soliditet: Math.floor(Math.random() * 40) + 30
            },
            teknologi: {
                digitalisering: Math.floor(Math.random() * 100),
                ai_modenhet: Math.floor(Math.random() * 50),
                tech_stack: ['React', 'Node.js', 'MongoDB', 'AWS'][Math.floor(Math.random() * 4)]
            }
        };
    }

    performAnalyse(data, type) {
        const sections = [];
        
        // Grunnleggende info
        sections.push({
            title: 'GRUNNLEGGENDE INFORMASJON',
            content: `Bedriftsnavn: ${data.grunndata.navn}
Org.nr: ${data.grunndata.orgnr}
Etablert: ${data.grunndata.etablert}
Ansatte: ${data.grunndata.ansatte}
Årlig omsetning: ${data.grunndata.omsetning}M NOK`
        });

        if (type === 'økonomisk' || type === 'komplett') {
            sections.push({
                title: 'ØKONOMISK ANALYSE',
                content: `Resultatgrad: ${data.økonomi.resultat}%
Egenkapitalandel: ${data.økonomi.egenkapital}%
Soliditet: ${data.økonomi.soliditet}%
Kredittvurdering: ${data.økonomi.soliditet > 40 ? 'God' : 'Moderat'}`
            });
        }

        if (type === 'teknologi' || type === 'komplett') {
            sections.push({
                title: 'TEKNOLOGISK MODENHET',
                content: `Digitaliseringsgrad: ${data.teknologi.digitalisering}%
AI-implementering: ${data.teknologi.ai_modenhet}%
Primær tech-stack: ${data.teknologi.tech_stack}
Moderniseringsbehov: ${data.teknologi.digitalisering < 60 ? 'Høyt' : 'Moderat'}`
            });
        }

        const opportunities = [
            'AI-automatisering kan spare 15-25% av arbeidstid',
            'Potensiell kostnadsbesparing på 2-4M NOK årlig',
            'Skaleringsmuligheter i nordiske markeder'
        ];

        const risks = [
            data.økonomi.soliditet < 30 ? 'Lav soliditet indikerer finansiell risiko' : null,
            data.teknologi.digitalisering < 40 ? 'Lav digitaliseringsgrad = høy implementeringsrisiko' : null
        ].filter(Boolean);

        const recommendations = [
            'Start med pilot-prosjekt for å bevise ROI',
            'Fokuser på prosessautomatisering først',
            'Etabler dedikert digitaliserings-team'
        ];

        return {
            sections,
            summary: `${data.grunndata.navn} er en ${data.grunndata.ansatte < 50 ? 'mindre' : 'medium'} bedrift med ${data.økonomi.soliditet > 40 ? 'solid' : 'moderat'} økonomi og ${data.teknologi.digitalisering > 60 ? 'god' : 'begrenset'} teknologisk modenhet.`,
            opportunities,
            risks: risks.length ? risks : ['Ingen kritiske risikofaktorer identifisert'],
            recommendations,
            scores: {
                credit: Math.round(data.økonomi.soliditet / 10),
                growth: Math.round((data.grunndata.ansatte / 20) + Math.random() * 3),
                tech: Math.round(data.teknologi.digitalisering / 10),
                sales: Math.round(7 + Math.random() * 3)
            },
            totalScore: Math.round((data.økonomi.soliditet + data.teknologi.digitalisering) / 20 + Math.random() * 2)
        };
    }

    // Template getters
    getTilbudTemplates() {
        return [
            { footer: 'Powered by AIKI - Where AI meets Business Excellence!' },
            { footer: 'AIKI: Unleashing AI with professional precision!' }
        ];
    }

    getKontraktTemplates() {
        return {
            tjeneste: 'Tjenesteavtale generert med AIKI AI-presisjon',
            salg: 'Salgsavtale med kvalitetsgaranti',
            konsulent: 'Konsulentavtale - Profesjonell ekspertise',
            lisens: 'Lisensavtale med omfattende rettigheter',
            partnerskap: 'Partnerskapsavtale - Sammen oppnår vi mer!'
        };
    }

    getRandomTemplate(type) {
        const templates = this.templates[type];
        return templates[Math.floor(Math.random() * templates.length)];
    }

    extractKundeNavn(parter) {
        const lines = parter.split('\n');
        const kundeLine = lines.find(line => !line.toLowerCase().includes('aiki'));
        return kundeLine ? kundeLine.replace(/part \d+:/i, '').trim() : 'KUNDE';
    }

    calculateTotalPotential(leads) {
        return leads.reduce((sum, lead) => sum + (lead.omsetning * 0.1), 0).toFixed(1);
    }

    getAverageDealSize(leads) {
        const avgOmsetning = leads.reduce((sum, lead) => sum + lead.omsetning, 0) / leads.length;
        return Math.round(avgOmsetning * 50); // Estimert 5% av omsetning som potensielt deal
    }

    getConversionRate(bransje) {
        const rates = {
            'teknologi': 25,
            'finans': 15,
            'helse': 20,
            'industri': 30
        };
        return rates[bransje.toLowerCase()] || 20;
    }

    // Missing methods implementation
    getLeadTemplates() {
        return AIKI.getConfig('ai.leads.defaultBransjer', ['teknologi', 'finans', 'helse', 'industri']);
    }

    getBedriftTemplates() {
        return AIKI.getConfig('ai.bedriftinfo.analyseTyper', ['grunnleggende', 'økonomisk', 'teknologi']);
    }

    getKontraktFormål(type) {
        const formål = {
            'tjeneste': 'levering av tjenester',
            'salg': 'salg av produkter',
            'konsulent': 'konsulentoppdrag',
            'lisens': 'lisensiering av teknologi',
            'partnerskap': 'strategisk partnerskap'
        };
        return formål[type] || 'forretningsavtale';
    }

    generateMilepæler(leveranser) {
        return `Milepæl 1: Prosjektstart og kickoff (uke 1)
Milepæl 2: Analyse og design ferdigstilt (uke 2-3)
Milepæl 3: Utvikling og implementering (uke 4-6)
Milepæl 4: Testing og optimalisering (uke 7)
Milepæl 5: Levering og opplæring (uke 8)`;
    }

    generateBetalingsbetingelser(betingelser) {
        return `Fakturering skjer ved oppnådde milepæler:
- 30% ved kontraktinngåelse
- 40% ved halvveis milepæl
- 30% ved ferdigstillelse
Betalingsfrist: 30 dager netto`;
    }

    getOppsigelsesbestemmelser(type) {
        return `Avtalen kan sies opp av begge parter med 30 dagers skriftlig varsel. 
Ved vesentlig mislighold kan avtalen sies opp umiddelbart.`;
    }

    getJuridiskTemplate(type) {
        return `Denne ${type}avtalen er utarbeidet i henhold til norsk rett og 
underlagt norsk jurisdiksjon. Avtalen er juridisk kvalitetssjekket av AIKI AI.`;
    }
}

// Global AIKI processor instance
window.AIKIProcessor = new AIKIProcessor();

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AIKIProcessor;
} 