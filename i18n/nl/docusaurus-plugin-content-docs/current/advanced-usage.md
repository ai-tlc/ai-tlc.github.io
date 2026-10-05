---
title: "Deel 4: Geavanceerd gebruik en functies"
id: advanced-usage
sidebar_label: Geavanceerd gebruik
slug: /advanced-usage
---
## 4.1 Het juiste model kiezen

UvA AI Chat biedt toegang tot verschillende geavanceerde AI-modellen (Large Language Models). Het standaardmodel, GPT-6.1 Sol, is een uitstekende allrounder en werkt goed voor veel taken, maar voor specifieke taken kan een ander model betere resultaten opleveren. Voor simpelere taken kan het beter zijn om een kleiner en efficiënter model te kiezen dat minder energie verbruikt. Om een ​​ander standaardmodel voor uw taken in te stellen, selecteert u het model dat het beste bij uw behoeften past in het menu Instellingen, zoals hieronder weergegeven.

<img src="/img/uploads/screenshot-2026-01-27-111035.png" alt="UvA AI Chat" style={{width: '100%', marginBottom: '2rem'}} />

De onderstaande tabel dient als een snelle referentie om je te helpen het meest geschikte AI-model voor jouw taak te kiezen. Om uit te vinden welk model het beste werkt voor jouw specifieke taak zul je zelf moeten experimenteren met de verschillende modellen. Dit kan belangrijk zijn als je een bepaalde specifieke taak hebt die je vaker wilt uitvoeren.

### Vergelijking van verschillende beschikbare AI modellen

| Model | General Use Cases | Knowledge Cutoff | Energy / Cost (relative) | Type | Context Window Input | Context Window Output |
| --- | --- | --- | --- | --- | --- | --- |
| gpt-6.1-sol (default) | Complex analysis, coding, agentic workflows, document-heavy academic and professional work | 30-04-2026 | High | Advanced reasoning model | 1M | 128K |
| gpt-5.1 | Coding, complex reasoning, advanced analysis, building intelligent agents, high-quality academic or technical work | 30-09-2024 | High | Advanced reasoning model | 400K | 128K |
| claude-sonnet-4.6 | Complex analysis, coding, agentic workflows, creative work, long-context reasoning, knowledge work | 31-08-2025* | High | Hybrid reasoning model | 1M | 128K |
| gpt-5-mini | Brainstorming, concept clarification, study planning, working with text/images, faster everyday reasoning tasks | 31-05-2024 | Medium | Efficient reasoning model | 400K | 128K |
| gpt-5-nano | Very light tasks, short summaries, quick calculations, classification, routine assistant tasks | 31-05-2024 | Medium | Lightweight reasoning model | 400K | 128K |
| claude-haiku-4.5 | Quick tasks, summaries, document synthesis, routine operations, high-volume workflows, fast coding support | 31-07-2025 | Medium | Fast lightweight reasoning model | 200K | 64K |
| gpt-oss-120b | Open-source reasoning, coding, multi-step tasks, privacy-conscious or open-model workflows | 01-06-2024 | Low | Open-source reasoning model | 131K | 131K |
| mistral-small-3.2 | Quick responses, short explanations, lightweight assistant tasks, multilingual and multimodal use | 01-12-2023 | Low | Open-source / open-weight language model | 128K | 128K |

### Legacy models

| Model | General Use Cases | Knowledge Cutoff | Energy / Cost (relative) | Type | Context Window Input | Context Window Output |
| --- | --- | --- | --- | --- | --- | --- |
| gpt-4.1 | Code, large documents, long-context tasks, tool use, agentic planning, structured language tasks | 01-06-2024 | Medium | Advanced non-reasoning language model | 1M | 32,768 |
| gpt-4o | Visual content interpretation, diagrams/charts, presentation feedback, general multimodal tasks | 01-10-2023 | High | Multimodal model | 128K | 16,384 |
| gpt-5 | Complex projects, strategic analysis, advanced coding, deep reasoning, high-quality creative and academic work | 30-09-2024 | High | Advanced reasoning model | 400K | 128K |

- - -

## 4.2 Je geschatte energiegebruik bekijken in UvA AI Chat

UvA AI Chat bevat een **Usage**-dashboard waarin je een schatting kunt zien van het energiegebruik dat samenhangt met je AI-gebruik. Deze functie maakt de milieu-impact van generatieve AI beter zichtbaar en ondersteunt bewuster gebruik van AI bij studie, onderwijs, onderzoek en werk.

De cijfers in dit dashboard moeten worden gelezen als **schattingen**, niet als exacte metingen. De daadwerkelijke milieu-impact van een AI-interactie hangt af van veel factoren, waaronder het gebruikte model, de hoeveelheid tekst die wordt verwerkt, de infrastructuur van het datacentrum, de efficiëntie van de hardware en de energiemix achter die infrastructuur. Het dashboard geeft daarom een indicatie van het energiegebruik, geen precieze real-time berekening.

**Waarom dit relevant is**

Generatieve AI-systemen hebben rekenkracht nodig, en rekenkracht kost energie. Tegelijkertijd is het niet altijd zichtbaar hoeveel verwerking er achter één AI-interactie plaatsvindt. Een kort antwoord vraagt mogelijk minder berekening dan een lang gesprek met geüploade bestanden, veel context of herhaalde vervolgvragen.

Door geschat energiegebruik en tokengebruik te tonen, helpt UvA AI Chat gebruikers om te reflecteren op hun eigen AI-gebruik. Het doel is niet om AI-gebruik te ontmoedigen, maar om **bewust en efficiënt gebruik** te stimuleren: AI gebruiken wanneer het waarde toevoegt, en onnodige verwerking waar mogelijk vermijden.

Dit past binnen een bredere duurzaamheidsblik: verantwoord AI-gebruik gaat niet alleen over óf je AI gebruikt, maar ook over **hoe** je AI gebruikt.

**Hoe je het Usage-dashboard vindt**

Om je geschatte energiegebruik te bekijken:

1. Open **UvA AI Chat**.
2. Klik linksonder op **Settings** <Icon name="Settings" color="black" size={20} />.
3. Klik in het Settings-menu op **Usage**.
4. Je ziet nu je geschatte energiegebruik, tokengebruik en modelmix.

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

## 4.3 .csv bestanden analyseren en grafieken maken met UvA AI Chat

UvA AI Chat kan ook je .csv‑bestanden lezen en analyseren. Dit maakt het mogelijk om inzicht te krijgen in jaarverslagen, kwartaalcijfers, enquêteresultaten en andere tabelgegevens. In de voorbeeldvideo wordt een .csv‑bestand geüpload, waarna UvA AI Chat: (1) de structuur van de data bekijkt (kolommen, datatypen, missende waarden), (2) een aantal basisanalyses uitvoert (zoals samenvattingen of vergelijkingen), en (3) visualisaties genereert, zoals lijngrafieken of staafdiagrammen op basis van de geselecteerde data.

Je kunt UvA AI Chat vragen om code te schrijven en uit te voeren (bijvoorbeeld in Python) om meer geavanceerde analyses op je data uit te voeren en om aangepaste grafieken te maken. Daarmee kun je eenvoudig trends verkennen, perioden vergelijken of specifieke variabelen uit je dataset uitlichten.

Als je deze analyses en grafieken echter wilt gebruiken in situaties waar nauwkeurigheid cruciaal is (bijvoorbeeld in een onderzoeksproject, scriptie, rapport of andere formele publicatie), moet je zorgvuldig controleren of de gegenereerde code en resultaten kloppen. Je kunt er niet automatisch van uitgaan dat alle analyses methodologisch passend zijn of vrij van fouten. Controleer altijd de code, verifieer de berekeningen en kijk of de gekozen methoden aansluiten bij je onderzoeksvraag en je data voordat je de resultaten in belangrijk werk gebruikt.

**Hieronder is een voorbeeld van hoe dat eruit zou zien:**

<video controls>
  <source
    src="https://ai-tlc.github.io/img/uploads/data-analysis-tool.mp4"
    type="video/mp4"
  />
</video>

- - -

## 4.4 Python code schrijven met UvA AI Chat

AI chat kan Python-code voor je schrijven en uitvoeren om gegevens te analyseren, grafieken te maken of berekeningen uit te voeren in een aparte, veilige omgeving. Zoals altijd blijven je bestanden privé en gescheiden van andere gebruikers. Wanneer AI grafieken of afbeeldingen genereert, kunnen deze direct in je gesprek verschijnen. De code wordt automatisch weergegeven in een apart paneel waar je deze kan bekijken, kopiëren of bewerken. Je kunt de Python-functionaliteit gebruiken zonder dat je weet hoe je Python-code moet schrijven, en je kunt data analyseren, grafieken maken of berekeningen uitvoeren met Python zonder zelf de code te hoeven bewerken of schrijven. Is het belangrijk dat de informatie die uit de code komt feitelijk juist is, bijvoorbeeld voor onderwijs of onderzoek? Verifieër altijd de data handmatig.

**De code gebruiken**
Zodra je vraagt om Python-code te genereren, verschijnt er een apart venster met de code. Van daaruit kun je de code uitvoeren (door op *Run Python* te klikken) of alle regels kopiëren (door op het pictogram met de twee pagina’s <Icon name="Copy" color="black" size={20} /> rechtsboven te klikken).

<img src="/img/uploads/screenshot-2026-04-07-at-17.17.46.png" alt="UvA AI Chat" style={{width: '100%', marginBottom: '2rem'}} />

- - -

## 4.5 Functionaliteit uitbreiden met Extensies

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
