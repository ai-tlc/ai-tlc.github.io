---
title: "Deel 4: Geavanceerd gebruik en functies"
id: advanced-usage
sidebar_label: Geavanceerd gebruik
slug: /advanced-usage
---
## 4.1 Het juiste model kiezen

UvA AI Chat biedt toegang tot verschillende geavanceerde AI-modellen (Large Language Models). Het standaardmodel, GPT-4o, is een uitstekende allrounder en werkt goed voor veel taken, maar voor specifieke taken kan een ander model betere resultaten opleveren. Voor simpelere taken kan het beter zijn om een kleiner en efficiënter model te kiezen dat minder energie verbruikt. Om een ​​ander standaardmodel voor uw taken in te stellen, selecteert u het model dat het beste bij uw behoeften past in het menu Instellingen, zoals hieronder weergegeven.

<img src="/img/uploads/screenshot-2026-01-27-111035.png" alt="UvA AI Chat" style={{width: '100%', marginBottom: '2rem'}} />

De onderstaande tabel dient als een snelle referentie om je te helpen het meest geschikte AI-model voor jouw taak te kiezen. Om uit te vinden welk model het beste werkt voor jouw specifieke taak zul je zelf moeten experimenteren met de verschillende modellen. Dit kan belangrijk zijn als je een bepaalde specifieke taak hebt die je vaker wilt uitvoeren.

### Tabel 2: Vergelijking van beschikbare AI-modellen

| Model             | General Use Cases                                                                                                                                                                                         | Knowledge Cutoff | Energy / Cost (relative) | Type                             | Context Window Input | Context Window Output |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ------------------------ | -------------------------------- | -------------------- | --------------------- |
| gpt-5             | Explaining complex concepts, advanced coding projects, interpreting academic papers                                                                                                                       | 30-09-2024       | High                     | Advanced reasoning model         | 272 K                | 128 K                 |
| gpt-5-mini        | moderate concept clarification, brainstorming ideas, study planning, understanding course material                                                                                                        | 31-05-2024       | Medium                   | Efficient reasoning model        | 272 K                | 128 K                 |
| gpt-5-nano        | Quick definitions, fact-checking, basic explanations, vocabulary help, concept reviews                                                                                                                    | 31-05-2024       | Low                      | Lightweight reasoning model      | 272 K                | 128 K                 |
| GPT-4o            | Analyzing diagrams/charts visual content interpretation, presentation feedback                                                                                                                            | 20-11-2024       | High                     | Multimodal model                 | 128 K                | 16 K                  |
| GPT-4.1           | General, language, high input, creative tasks, agentic planning                                                                                                                                           | 14-04-2025       | High                     | Advanced language model          | 1 M                  | 100 K                 |
| GPT-oss-120b      | Powerful open-source model. Excellent for complex reasoning, coding, and multi-step tasks                                                                                                                 | 01-06-2024       | Low                      | Open source language model       | 128 K                | 32 K                  |
| Mistral-small-3.2 | Small, fast Mistral model for quick responses, short explanations, and lightweight assistant-style tasks                                                                                                  | 01-12-2023       | Medium                   | Open source language model       | 128 K                | 128 K                 |
| Claude-Sonnet 4.6 | Latest and most capable Claude Sonnet model, good for complex tasks requiring deep analysis, coding, and creative work. Efficient for everyday use with excellent reasoning capabilities.                 | 31-01-2026       | High                     | Hybrid reasoning model           | 1M                   | 128 K                 |
| Claude-Haiku 4.5  | Fast, cost-efficient assistant for quick questions, summaries, document synthesis, routine operations, and high-volume or real-time workflows; strong coding helper at roughly Sonnet-4-level performance | 28-08-2025       | Low                      | Fast lightweight reasoning model | 200 K                | 64 K                  |
| GPT-5.1           | One of the latest frontier models. Excellent for coding, complex reasoning tasks, and building intelligent agents. Provides high-quality output and analysis.                                             | 31-08-2025       | High                     | Advanced reasoning model         | 400K                 | 128K                  |

- - -

## 4.2 Functionaliteit uitbreiden met Extensies

Extensies zijn bedoeld voor technisch onderlegde gebruikers die bekend zijn met API's. Ze functioneren als extra hulpmiddelen die de AI kan gebruiken om taken buiten de chatomgeving uit te voeren, zoals het ophalen van informatie uit externe databases of het uitvoeren van acties in andere software.

### Hoe het werkt

Extensies zijn krachtige hulpmiddelen die UvA AI Chat meer mogelijkheden geven door de AI in staat te stellen API-aanroepen te doen naar interne of externe systemen. Ze fungeren als extra tools die de AI in staat stellen om taken buiten de chatomgeving uit te voeren, zoals het ophalen van informatie uit een database, het uitvoeren van acties in andere software (zoals het toevoegen van een item aan een to-do-lijst), of het verzenden en ontvangen van gegevens. Deze hulpmiddelen zijn bedoeld voor technisch onderlegde gebruikers die bekend zijn met API's, aangezien onjuist gebruik onbedoelde acties in externe systemen kan veroorzaken.

Het proces omvat het definiëren van de details en functies van de extensie, en maakt gebruik van de API-structuur die wordt beschreven in de officiële OpenAI-documentatie (via openai.com). De aanmaakinterface wordt getoond in de bijgeleverde afbeelding.

Om je eigen extensie toe te voegen, klik je op "Add extension" (Extensie toevoegen):

* **Name (Naam):** Geef je extensie een naam in het veld "Name of your Extension".
* **Short description (Korte beschrijving):** Schrijf een korte beschrijving van de extensie.
* **Detail description (Uitgebreide beschrijving):** Geef een meer gedetailleerde uitleg over de specialiteiten en de stappen die nodig zijn om de extensie uit te voeren.
* **Headers:** Definieer de benodigde headers voor de API-aanroepen. Een standaard "Content-Type" header met de waarde "application/json" wordt weergegeven. Je kunt meer headers toevoegen door op "Add Header" (Header toevoegen) te klikken. Het platform ondersteunt ook het beveiligen van headerwaarden die zijn opgeslagen in Azure Key Vault.
* **Functions (Functies):** Voeg de specifieke functies toe die de extensie zal uitvoeren door op "Add Function" (Functie toevoegen) te klikken. Deze functies kunnen verschillende API-verzoeken ondersteunen, waaronder GET, POST en PUT, waardoor de extensie zowel gegevens kan ophalen als acties kan activeren.
* **Submit (Verzenden):** Zodra alle details zijn ingevuld, klik je op de knop "Submit" om de aanmaak van je extensie te voltooien.

### Praktisch voorbeeld van het gebruik van een extensie

Een onderzoeker configureert een extensie die communiceert met de UvA-bibliotheekcatalogus API. Nu kunnen ze een prompt gebruiken zoals:

> "Use the library extension to find the five most recent publications by author 'Adriaan van Dis'. Provide the full APA citations for each publication and a direct link to each in the catalog."

- - -

## 4.3 Gebruik de Web Scraper-tool

**Web Scraper Functie**

UvA AI Chat heeft toegang tot een **`web_scrape`**-tool waarmee het de inhoud van een webpagina kan ophalen en lezen wanneer je een URL opgeeft. Zo werkt het.

**Wat het doet**

| Functie | Beschrijving                                                                                                                                                                                                                |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Invoer  | Een volledige URL (bijv. `https://example.com`)                                                                                                                                                                             |
| Uitvoer | Pagina-inhoud in **markdown-formaat** (markdown is een eenvoudige manier om tekst op te maken met simpele symbolen, zodat het makkelijk leesbaar is en kan worden omgezet in mooi opgemaakte documenten zoals webpagina’s.) |

**Wat UvA AI Chat met de Web Scraper kan doen**

* **Samenvatten** van de inhoud van een webpagina
* **Specifieke informatie extraheren** (bijv. datums, namen, prijzen, beleid)
* **Vragen beantwoorden** op basis van de live inhoud van een pagina

**Beperkingen**

* Leest alleen **openbaar toegankelijke** pagina's, geen met inloggegevens beveiligde inhoud
* Leest **statische inhoud**, dynamisch geladen inhoud (bijv. JavaScript-gegenereerde pagina's) wordt mogelijk niet altijd volledig weergegeven
* Bladert **niet** zelfstandig door het web, je moet zelf een URL opgeven
* UvA AI Chat kan slechts **één pagina per bericht** scrapen

**Voorbeeldgebruik**

Om deze functionaliteit te gebruiken, vraag de UvA AI Chat om een pagina voor je te scrapen en voeg jouw pagina in.

"Kun je deze pagina scrapen en samenvatten: https://example.com/article"

> Plak simpelweg een URL en vertel UvA AI Chat wat je erover wilt weten!

- - -

## 4.4 Python code schrijven met UvA AI Chat

AI chat kan Python-code voor je schrijven en uitvoeren om gegevens te analyseren, grafieken te maken of berekeningen uit te voeren in een aparte, veilige omgeving. Zoals altijd blijven je bestanden privé en gescheiden van andere gebruikers. Wanneer AI grafieken of afbeeldingen genereert, kunnen deze direct in je gesprek verschijnen. De code wordt automatisch weergegeven in een apart paneel waar je deze kan bekijken, kopiëren of bewerken. Je kunt de Python-functionaliteit gebruiken zonder dat je weet hoe je Python-code moet schrijven, en je kunt data analyseren, grafieken maken of berekeningen uitvoeren met Python zonder zelf de code te hoeven bewerken of schrijven. Is het belangrijk dat de informatie die uit de code komt feitelijk juist is, bijvoorbeeld voor onderwijs of onderzoek? Verifieër altijd de data handmatig.

**De code gebruiken**
Zodra je vraagt om Python-code te genereren, verschijnt er een apart venster met de code. Van daaruit kun je de code uitvoeren (door op *Run Python* te klikken) of alle regels kopiëren (door op het pictogram met de twee pagina’s rechtsboven te klikken).

<img src="/img/uploads/screenshot-2026-04-07-at-17.17.46.png" alt="UvA AI Chat" style={{width: '100%', marginBottom: '2rem'}} />

- - -

## 4.5 Je geschatte energiegebruik bekijken in UvA AI Chat

UvA AI Chat bevat een **Usage**-dashboard waarin je een schatting kunt zien van het energiegebruik dat samenhangt met je AI-gebruik. Deze functie maakt de milieu-impact van generatieve AI beter zichtbaar en ondersteunt bewuster gebruik van AI bij studie, onderwijs, onderzoek en werk.

De cijfers in dit dashboard moeten worden gelezen als **schattingen**, niet als exacte metingen. De daadwerkelijke milieu-impact van een AI-interactie hangt af van veel factoren, waaronder het gebruikte model, de hoeveelheid tekst die wordt verwerkt, de infrastructuur van het datacentrum, de efficiëntie van de hardware en de energiemix achter die infrastructuur. Het dashboard geeft daarom een indicatie van het energiegebruik, geen precieze real-time berekening.

**Waarom dit relevant is**

Generatieve AI-systemen hebben rekenkracht nodig, en rekenkracht kost energie. Tegelijkertijd is het niet altijd zichtbaar hoeveel verwerking er achter één AI-interactie plaatsvindt. Een kort antwoord vraagt mogelijk minder berekening dan een lang gesprek met geüploade bestanden, veel context of herhaalde vervolgvragen.

Door geschat energiegebruik en tokengebruik te tonen, helpt UvA AI Chat gebruikers om te reflecteren op hun eigen AI-gebruik. Het doel is niet om AI-gebruik te ontmoedigen, maar om **bewust en efficiënt gebruik** te stimuleren: AI gebruiken wanneer het waarde toevoegt, en onnodige verwerking waar mogelijk vermijden.

Dit past binnen een bredere duurzaamheidsblik: verantwoord AI-gebruik gaat niet alleen over óf je AI gebruikt, maar ook over **hoe** je AI gebruikt.

**Hoe je het Usage-dashboard vindt**

Om je geschatte energiegebruik te bekijken:

1. Open **UvA AI Chat**.
2. Klik linksonder op je **profiel-/accounticoon**.
3. Selecteer **Settings**.
4. Klik in het Settings-menu op **Usage**.
5. Je ziet nu je geschatte energiegebruik, tokengebruik en modelmix.

Met het dropdownmenu bovenaan de Usage-pagina kun je een periode selecteren, zoals **Last Hour** of **Last week**.

**Wat het Usage-dashboard laat zien**

Het dashboard bevat drie hoofdtypen informatie: geschat energiegebruik, gebruikte tokens en modelmix.

* **Geschat energiegebruik**\
  Het dashboard toont een geschatte hoeveelheid energie voor de geselecteerde periode, uitgedrukt in **Wh**: wattuur. Dit kan ook worden vertaald naar een herkenbaardere vergelijking, zoals een percentage van een telefoonlading.

  Deze vergelijking is bedoeld om het getal makkelijker te interpreteren. Lees dit niet als een exacte ecologische voetafdruk, maar als een praktische manier om gevoel te krijgen voor de schaal.
* **Gebruikte tokens**\
  Het dashboard laat ook zien hoeveel **tokens** je hebt gebruikt. Een token is een kleine eenheid tekst. Als grove indicatie:

  > 1 token ≈ 3/4 woord

  Tokengebruik omvat de tekst die je invoert en de tekst die de AI genereert. In sommige situaties kan het ook extra context omvatten die het model moet verwerken, zoals eerdere berichten, geüploade bestanden, projectinformatie of instructies.

  In het algemeen betekent meer tokens meer berekening. Langere gesprekken, grote documenten, herhaald prompten en zeer uitgebreide antwoorden kunnen daarom leiden tot een hoger geschat energiegebruik.
* **Modelmix**\
  De sectie **Model mix** laat zien welke modellen je in de geselecteerde periode hebt gebruikt en welk percentage van je gebruik bij elk model hoort.

  Dit is relevant omdat verschillende modellen verschillende hoeveelheden rekenkracht kunnen vragen. Geavanceerdere modellen kunnen nuttig zijn voor complexe taken, maar zijn niet altijd nodig voor eenvoudige vragen. Een passend model kiezen voor de taak kan helpen om AI efficiënter te gebruiken.

**Hoe de schatting werkt**

Het Usage-dashboard schat energiegebruik op basis van tokengebruik en aannames over de energiekosten van het verwerken van die tokens. Daarbij wordt ook gewerkt met een aangenomen verhouding tussen input en output, en wordt verwezen naar gepubliceerd onderzoek waarop deze berekeningen zijn gebaseerd.

Omdat AI-systemen complex zijn en het exacte energiegebruik van één interactie moeilijk te bepalen is, moet het dashboard worden gezien als een **grove maar nuttige indicator**. Het is vooral geschikt voor bewustwording, vergelijking en reflectie over tijd.

**AI efficiënter gebruiken**

Het Usage-dashboard kan je helpen om kleine, praktische keuzes te maken in hoe je AI gebruikt. Bijvoorbeeld:

* Schrijf duidelijke prompts, zodat je minder herhaalde correcties nodig hebt.
* Vermijd onnodig lange context of grote bestanden.
* Vat lange gesprekken samen voordat je verdergaat, in plaats van steeds alle eerdere context mee te nemen.
* Gebruik geavanceerde modellen wanneer de taak daarom vraagt, maar kies lichtere of passendere opties voor eenvoudigere taken wanneer dat kan.
* Vraag om gerichte antwoorden in plaats van onnodig lange outputs.

Het belangrijkste uitgangspunt is: **gebruik AI wanneer het je doel betekenisvol ondersteunt, en doe dat zo efficiënt mogelijk.** Het Usage-dashboard helpt om dat proces zichtbaarder te maken.

- - -

## 4.6 Documenten en bestanden die UvA AI Chat kan genereren

UvA AI Chat kan je helpen om verschillende soorten downloadbare documenten en bestanden te maken. Dit is handig wanneer je een gesprek wilt omzetten naar een herbruikbare tekst, een eenvoudige webpagina, een codebestand, een databestand of een diagram.

**Hoe je om een bestand vraagt**

Je hoeft niet alle bestandsextensies uit je hoofd te kennen. Je kunt in gewone taal beschrijven welk type output je nodig hebt. Bijvoorbeeld:

> “Maak hiervan een downloadbaar markdown-bestand.”\
> “Maak een CSV-tabel van deze informatie.”\
> “Genereer een eenvoudige HTML-pagina met deze inhoud.”\
> “Schrijf een Python-script dat deze data analyseert.”\
> “Maak een Mermaid-flowchart van deze stappen.”

Voor het beste resultaat kun je aangeven:

* wat er in het bestand moet staan;
* welk format je wilt;
* of het eenvoudig of opgemaakt moet zijn;
* en of het bedoeld is om te lezen, bewerken, publiceren, analyseren of hergebruiken.

## Op dit moment kan UvA AI Chat bestaande bestanden niet bewerken; het kan alleen nieuwe bestanden genereren.

**Goed om te weten**

Sommige gegenereerde bestanden zijn vooral bedoeld om te lezen, zoals `.txt`, `.md`, `.html` of `.pdf`. Andere bestanden zijn bedoeld om te openen of bewerken in specifieke tools, zoals `.csv` in een spreadsheetprogramma, `.py` in een code-editor of `.mmd` in een Mermaid-compatibele viewer.

Voor codebestanden kan UvA AI Chat veel verschillende programmeertalen genereren. Of de code ook direct kan worden uitgevoerd, hangt af van de beschikbare runtime-omgeving en de bibliotheken of tools die daar worden ondersteund. Controleer gegenereerde code altijd voordat je die gebruikt, vooral in onderwijs, onderzoek, data-analyse of productieomgevingen.

## Om afbeeldingen te bewerken, upload je eigen afbeelding vanaf een lokale bron. Tijdens het maken van je bestand kan UvA AI Chat geen afbeeldingen van het internet ophalen.

<small>

**Elk ondersteund bestandstype**

| Categorie                   | Bestandstype            | Extensie(s)                       |
| --------------------------- | ----------------------- | --------------------------------- |
| Documenten en tekst         | Platte tekst            | `.txt`                            |
| Documenten en tekst         | Markdown                | `.md`                             |
| Documenten en tekst         | HTML                    | `.html`                           |
| Gegenereerde code-artifacts | JavaScript / TypeScript | `.js`, `.ts`, `.tsx`              |
| Gegenereerde code-artifacts | Python                  | `.py`                             |
| Gegenereerde code-artifacts | Java                    | `.java`                           |
| Gegenereerde code-artifacts | C / C++ / C#            | `.c`, `.cpp`, `.cs`               |
| Gegenereerde code-artifacts | PHP                     | `.php`                            |
| Gegenereerde code-artifacts | Ruby                    | `.rb`                             |
| Gegenereerde code-artifacts | Go                      | `.go`                             |
| Gegenereerde code-artifacts | Rust                    | `.rs`                             |
| Gegenereerde code-artifacts | Swift                   | `.swift`                          |
| Gegenereerde code-artifacts | Kotlin                  | `.kt`                             |
| Gegenereerde code-artifacts | Scala                   | `.scala`                          |
| Gegenereerde code-artifacts | R                       | `.r`                              |
| Gegenereerde code-artifacts | MATLAB                  | `.m`                              |
| Gegenereerde code-artifacts | Lua                     | `.lua`                            |
| Gegenereerde code-artifacts | Perl / Prolog           | `.pl`                             |
| Gegenereerde code-artifacts | Haskell                 | `.hs`                             |
| Gegenereerde code-artifacts | Clojure                 | `.clj`                            |
| Gegenereerde code-artifacts | Dart                    | `.dart`                           |
| Gegenereerde code-artifacts | Elixir                  | `.ex`                             |
| Gegenereerde code-artifacts | Erlang                  | `.erl`                            |
| Gegenereerde code-artifacts | F#                      | `.fs`                             |
| Gegenereerde code-artifacts | Groovy                  | `.groovy`                         |
| Gegenereerde code-artifacts | Julia                   | `.jl`                             |
| Gegenereerde code-artifacts | Nim                     | `.nim`                            |
| Gegenereerde code-artifacts | OCaml                   | `.ml`                             |
| Gegenereerde code-artifacts | Pascal                  | `.pas`                            |
| Gegenereerde code-artifacts | Racket                  | `.rkt`                            |
| Gegenereerde code-artifacts | Scheme                  | `.scm`                            |
| Gegenereerde code-artifacts | Visual Basic            | `.vb`                             |
| Gegenereerde code-artifacts | Assembly                | `.asm`                            |
| Gegenereerde code-artifacts | Fortran                 | `.f90`                            |
| Gegenereerde code-artifacts | COBOL                   | `.cob`                            |
| Gegenereerde code-artifacts | Ada                     | `.ada`                            |
| Web- en databestanden       | HTML                    | `.html`                           |
| Web- en databestanden       | CSS / Sass / Less       | `.css`, `.scss`, `.sass`, `.less` |
| Web- en databestanden       | JSON                    | `.json`                           |
| Web- en databestanden       | XML                     | `.xml`                            |
| Web- en databestanden       | YAML                    | `.yml`                            |
| Web- en databestanden       | SQL                     | `.sql`                            |
| Diagrammen                  | Mermaid                 | `.mmd`                            |
| Chat-exportdownloads        | Platte tekst            | `.txt`                            |
| Chat-exportdownloads        | CSV                     | `.csv`                            |
| Chat-exportdownloads        | PDF                     | `.pdf`                            |

</small>

- - -
