---
title: "Deel 2: De kernfunctionaliteiten in de praktijk"
id: core-features
sidebar_label: Kernfunctionaliteiten
slug: /core-features
---

## 2.1 Effectief communiceren: de kunst van prompting

De belangrijkste vaardigheid om UvA AI Chat goed te gebruiken, is leren hoe je duidelijk met de AI communiceert. Dit wordt vaak **prompting** genoemd: het schrijven van de instructie, vraag of taak die je aan de AI geeft.

Een goede prompt helpt de AI te begrijpen wat je wilt, waarom je dat wilt en wat voor antwoord nuttig zou zijn. De kwaliteit van de output wordt sterk beïnvloed door de kwaliteit van je instructies. Een duidelijke prompt leidt vaak tot een relevanter en bruikbaarder antwoord, terwijl een vage prompt meestal leidt tot een algemener antwoord.

Tegelijkertijd gaat prompting niet om het schrijven van één perfecte instructie. UvA AI Chat is conversationeel. Je kunt altijd vervolgvragen stellen, het antwoord corrigeren, ontbrekende context toevoegen of de AI vragen om het antwoord te herschrijven, in te korten, uit te breiden of te verbeteren.

### Wat is een prompt?

Een **prompt** is de instructie of vraag die je aan de AI geeft.

| Eenvoudige prompt | Specifiekere prompt |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Leg dit concept uit in eenvoudige taal. | Leg het concept academisch burgerschap uit aan een eerstejaarsstudent. Gebruik eenvoudige taal, geef één voorbeeld uit het onderwijs en sluit af met twee reflectievragen. |

De tweede prompt is nuttiger omdat deze de AI meer richting geeft. De prompt legt het onderwerp, de beoogde doelgroep, de gewenste stijl en de vorm van het antwoord uit.

### Hoe een antwoord tot stand komt

Wanneer UvA AI Chat een antwoord genereert, kijkt het systeem niet alleen naar de zin die je net hebt getypt. Het antwoord kan ook worden gevormd door de bredere context van het gesprek.

Afhankelijk van hoe je UvA AI Chat gebruikt, kan deze context onder meer bestaan uit:

| Type context | Wat het betekent |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Je huidige prompt** | De vraag of instructie die je typt. |
| **Het gesprek tot nu toe** | Eerdere berichten in dezelfde chat kunnen latere antwoorden beïnvloeden. |
| **Persona- of projectinstructies** | Als je een persona of project gebruikt, kan de AI extra instructies volgen over rol, toon, taak of werkwijze. |
| **Project Knowledge** | In projecten kan UvA AI Chat herbruikbare knowledge cards gebruiken: korte stukken duurzame informatie uit eerdere projectchats, zoals beslissingen, voorkeuren, feiten of taakdetails. |
| **Geüploade documenten of tools** | Als er documenten of tools beschikbaar zijn in de chat, kan de AI deze gebruiken om specifieker te antwoorden. |

Dit betekent dat prompting niet alleen gaat over de tekst die je in één bericht typt. Het gaat er ook om dat je ervoor zorgt dat de AI de juiste context heeft om mee te werken.

### Waarom context belangrijk is

AI-antwoorden zijn sterk afhankelijk van de informatie die beschikbaar is voor het model. Als belangrijke informatie ontbreekt, kan het antwoord te breed, onvolledig of gebaseerd op aannames zijn. Als de juiste context wordt gegeven, kan het antwoord relevanter worden en beter aansluiten op je doel.

| Minder nuttig | Nuttiger |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Schrijf een samenvatting. | Vat deze tekst samen voor een docent die snel de hoofdgedachte wil begrijpen. Gebruik ongeveer 150 woorden en focus op de implicaties voor het onderwijs. |

De verbeterde prompt geeft de AI een taak, doelgroep, lengte en focus.

### Project Knowledge: herbruikbare context in projecten

In UvA AI Chat-projecten kan **Project Knowledge** helpen om nuttige informatie over verschillende projectchats heen te bewaren. In plaats van alleen te vertrouwen op verborgen of informele memory, kan belangrijke informatie worden opgeslagen als expliciete **knowledge cards**.

Een knowledge card is een klein, herbruikbaar stukje informatie, zoals:

| Een knowledge card kan bevatten... | Voorbeeld |
| ------------------------------------------------- | --------------------------------------------------------------------------------- |
| Een eerder gemaakte beslissing in het project | “De workshop is bedoeld voor eerstejaarsstudenten.” |
| Een doelgroep | “De tekst moet begrijpelijk zijn voor docenten zonder technische AI-kennis.” |
| Een gewenste toon of schrijfstijl | “Gebruik een duidelijke, toegankelijke en didactische toon.” |
| Een terugkerende randvoorwaarde | “Houd handleidingsteksten beknopt en praktisch.” |
| Een belangrijk feit dat later onthouden moet worden | “De module is bedoeld voor zowel studenten als medewerkers.” |

Wanneer relevant kan UvA AI Chat deze cards gebruiken in latere antwoorden. Dit helpt de AI om consistent te blijven in verschillende chats binnen hetzelfde project. Het maakt het gebruik van context ook transparanter: knowledge cards kunnen worden bekeken, aangepast, gearchiveerd of uitgesloten.

Project Knowledge is nuttig omdat opgeslagen context niet automatisch perfect is. Een card kan verouderd, te algemeen of niet langer relevant zijn. De meest recente instructie die je geeft, moet altijd richting geven aan het antwoord. Als de AI lijkt te vertrouwen op oude of onjuiste context, corrigeer dit dan expliciet.

Bijvoorbeeld:

> Negeer de eerdere projectaanname dat deze tekst voor studenten is. Deze versie is bedoeld voor docenten.

Of:

> Gebruik de projectkennis over de doelgroep van de workshop, maar gebruik niet de eerder voorgestelde structuur.

### Structuur van een effectieve prompt

Een goed gestructureerde prompt bevat meestal drie hoofdelementen:

| Element | Wat je moet opnemen | Voorbeeld |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Context** | Leg de situatie kort uit. Waar gaat de taak over? Wie is de doelgroep? Welke achtergrond moet de AI kennen? | “Ik schrijf een korte introductie voor een Canvas-module over AI en duurzaamheid.” |
| **Vraag of instructie** | Geef duidelijk aan wat je wilt dat de AI doet. | “Schrijf een duidelijke alinea voor studenten en docenten.” |
| **Specifieke details of criteria** | Voeg vereisten toe, zoals toon, lengte, format, moeilijkheidsniveau, te gebruiken bronnen of aandachtspunten. | “Houd het toegankelijk, vermijd technische details en benoem dat exacte cijfers over energiegebruik van AI vaak onzeker zijn.” |

Samen wordt dit:

> Ik schrijf een korte introductie voor een Canvas-module over AI en duurzaamheid. Schrijf een duidelijke alinea voor studenten en docenten. Houd het toegankelijk, vermijd technische details en benoem dat exacte cijfers over energiegebruik van AI vaak onzeker zijn.

### Formuleer instructies positief

Een nuttige gewoonte bij prompting is om te beschrijven wat je **wel** wilt, in plaats van alleen te zeggen wat je **niet** wilt.

| Minder nuttig | Nuttiger |
| ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Schrijf een introductie voor mijn essay, maar gebruik geen jargon en maak het niet langer dan 200 woorden. | Schrijf een toegankelijke introductie van ongeveer 200 woorden voor mijn essay over Italo Calvino. Gebruik duidelijke, eenvoudige taal en definieer kort de belangrijkste concepten. |

De tweede versie geeft de AI een duidelijker doel.

### Belangrijkste inzicht

Prompting is het geven van duidelijke instructies en nuttige context aan de AI. Een goede prompt vertelt de AI wat het moet doen, waarom dat belangrijk is, voor wie het antwoord bedoeld is en wat voor soort output je nodig hebt.

In UvA AI Chat kunnen antwoorden ook worden gevormd door bredere context, zoals persona’s, projectinstructies, geüploade documenten, tools, memory of Project Knowledge. Dit kan antwoorden nuttiger en consistenter maken, maar het betekent ook dat je je bewust moet blijven van welke context de AI mogelijk gebruikt.

Goed prompten betekent daarom niet alleen duidelijke vragen stellen, maar ook de context achter het antwoord sturen, controleren en corrigeren.
- - -

## 2.2 Prompts: jouw verzameling instructies

"Prompts" is een functie die je helpt om efficiënter te werken door het hergebruiken van effectieve prompts. Je vindt de "My prompts" sectie via het boek-icoon in de linker zijbalk van UvA AI Chat.

### Gebruik van standaard prompts

"Prompts" bevat een verzameling vooraf gedefinieerde prompts voor veelvoorkomende taken. Voorbeelden hiervan zijn "feedback on your writing" en de "multiple choice question generation". Deze standaardprompts zijn ontworpen door experts en bevatten al een goede structuur. Je kunt een standaardprompt selecteren en deze gemakkelijk aanpassen aan jouw specifieke behoeften om snel en effectief het gewenste resultaat te bereiken.

### Eigen prompts opslaan en hergebruiken

Als je merkt dat je bepaalde taken of instructies regelmatig herhaalt, kun je jouw eigen prompts opslaan in de bibliotheek. Dit is bijzonder nuttig voor complexe, terugkerende opdrachten.

### Praktijkvoorbeeld van een eigen prompt opslaan

Stel dat je vaak Engelse academische teksten schrijft en deze wilt laten controleren op een formele schrijfstijl. Je kunt een zeer effectieve prompt hiervoor opstellen en opslaan voor hergebruik.

1. Stel een effectieve prompt op.
2. Ga naar "Prompts" en kies de optie "Add prompt".
3. Geef de prompt een herkenbare naam, bijvoorbeeld 'Academic English Check'.
4. Plak jouw prompt in het tekstveld: "Analyseer de bijgevoegde Engelse tekst. Je fungeert als een ervaren redacteur voor een wetenschappelijk tijdschrift. Identificeer en corrigeer zinnen die te informeel zijn voor een wetenschappelijke publicatie. Vervang spreektaal door formele alternatieven, controleer op consistentie in terminologie en geef suggesties om de zinsstructuur te variëren voor betere leesbaarheid."
5. Bewaar de prompt. Deze is nu beschikbaar voor eenvoudig hergebruik bij toekomstige gesprekken.

Wil je een eerder opgeslagen prompts snel hergebruiken? Klik dan onder in het tekstvak van de UvA AI Chat op het boekje-icoon om een lijst van recente prompts te zien en de gewenste prompt direct in te voegen.

### De AI toegang geven tot het internet

UvA AI Chat heeft een 'knowledge cutoff'; de kennis is niet actueel. Om de AI met recente, online informatie te laten werken, kun je de internetzoekfunctie inschakelen. Klik hiervoor in een chatvenster rechtsboven op het 'zakmes'-icoon en vink 'Internet Search' aan. Nadat je de functie hebt geactiveerd, is het belangrijk dat je in je opdracht vermeldt dat de AI het internet moet gebruiken. Begin je vraag bijvoorbeeld met: "Zoek op het internet naar...". Houd er rekening mee dat deze functionaliteit nog in ontwikkeling is en niet altijd feilloos werkt.

- - -

## 2.3 Documenten als kennisbron: uploaden en analyseren

Een van de krachtigste functies van UvA AI Chat is dat je je eigen documenten kunt uploaden en die als context kunt gebruiken voor je vragen. Zo kan de AI werken met de specifieke informatie die jij aanlevert, in plaats van alleen met de algemene kennisbasis. Daardoor kan de chatbot betrouwbaardere en beter onderbouwde antwoorden geven, gebaseerd op de bronnen die jij kiest.

### Uploaden van documenten

Met de UvA AI Chat kun je eenvoudig documenten uploaden. Ga naar het vak voor tekstinvoer onderaan het scherm en klik op het paperclip-icoon. Kies vervolgens de bestanden die je wilt toevoegen vanaf jouw computer. Na het uploaden zijn de documenten direct beschikbaar voor verdere verwerking binnen het huidige gesprek.

### Ondersteunde bestandsformaten

UvA AI Chat ondersteunt een breed scala aan veelgebruikte bestandsformaten, waaronder .PDF, .DOCX (Word), .XLS (Excel), .PPT (PowerPoint), .CSV, .TXT, .PY (Python) en .MD (Markdown), naast meer dan 30 aanvullende bestandstypen. Dit maakt het mogelijk om verschillende soorten documenten te uploaden en ermee te werken, variërend van wetenschappelijke artikelen en datasets tot platte tekst en codebestanden, direct binnen je interacties met de AI.

Let op: Het kan soms gebeuren dat grote, ongebruikelijke of beveiligde bestanden niet goed worden verwerkt. Als een document veel informatie bevat (bijv. 100+ pagina's), moet de AI zoeken naar een speld in een hooiberg.

### Verwerkingsmogelijkheden en het werkproces

Eenmaal geüpload, doet de AI niets met het document totdat je een instructie geeft. Het document fungeert als een kennisbron voor de AI. De verwerkingsmogelijkheden zijn verschillend: je kunt teksten laten analyseren, samenvatten, vertalen, of specifieke informatie laten opvragen uit het document. Belangrijk hierbij is de combinatie van het uploaden van een document en het formuleren van een precieze prompt.

### Praktijkvoorbeeld van integratie in het werkproces

Een onderzoeker werkt aan een literatuurstudie en heeft een 50 pagina's tellend rapport in PDF-formaat dat relevant is voor haar onderzoek.

1. **Uploaden:** Ze klikt op de paperclip en uploadt het PDF-rapport naar de chat.
2. **Prompten:** Vervolgens stelt ze een specifieke vraag over de inhoud van het document. Een effectieve prompt zou kunnen zijn: "Analyseer het zojuist geüploade rapport en identificeer alle secties die betrekking hebben op duurzaam beleid ('sustainable policy'). Geef een samenvatting in bullet points van de belangrijkste aanbevelingen die in die secties worden gedaan. Citeer per aanbeveling het paginanummer waar deze te vinden is."

Met deze aanpak bespaart de onderzoeker tijd en ontvangt ze een specifieke, gerichte analyse van de geüploade tekst, direct toepasbaar voor haar eigen werk.

### Retrieval-Augmented Generation (RAG)

De technologie waarmee het uploaden en analyseren van documenten werkt, wordt Retrieval-Augmented Generation (RAG) genoemd. Dit werkt door de output van het taalmodel te verrijken met informatie die is opgehaald uit de documenten die je hebt geüpload. Wanneer je een prompt indient, vergelijkt het systeem eerst je vraag met je documenten en haalt vervolgens de stukjes informatie uit je documenten die relevant lijken voor je prompt. Het kan maximaal 10 stukjes informatie meenemen. Deze fragmenten worden vervolgens aan je prompt toegevoegd als context en verwerkt door het taalmodel (LLM) om een nauwkeuriger en beter onderbouwd antwoord te genereren. Dit is enorm krachtig, omdat het de AI in staat stelt haar antwoord te baseren op specifieke, contextuele informatie die jij hebt gekozen. Het heeft echter ook beperkingen; het is bijvoorbeeld niet ontworpen om zeer grote teksten samen te vatten (het kan slechts 10 fragmenten verwerken).

- - -

## 2.4 Afbeeldingen genereren en analyseren

Naast tekstuele taken kan de UvA AI Chat ook afbeeldingen genereren op basis van jouw beschrijvingen. Dit kan nuttig zijn voor het maken van illustraties voor presentaties, het visualiseren van concepten of voor creatieve projecten.

Om een afbeelding te genereren, vraag je simpelweg in het tekstvak van de UvA AI Chat om een afbeelding te maken. Net als bij tekstuele prompts, geldt ook hier: hoe gedetailleerder en specifieker jouw beschrijving, hoe beter het resultaat zal aansluiten bij jouw verwachtingen. Zoals altijd kun je AI vragen om jou te helpen je prompt op te stellen. De beeldgenerator in UvA AI Chat is nog niet goed in het creëren van afbeeldingen waar ook tekst in staat.

### Praktijkvoorbeeld van een gedetailleerde afbeeldingsprompt

In plaats van een vraag zoals "maak een afbeelding van een bloem", kun je een veel beter resultaat krijgen met een gedetailleerde prompt.

* **Te algemene prompt:** "Genereer een tulp."
* **Gedetailleerde prompt:** "Genereer een afbeelding in de stijl van een botanische illustratie uit de 19e eeuw. De afbeelding moet een tulp tonen met duidelijke, fijne lijntjes die de details van de bloemblaadjes, de steel en de bladeren accentueren. De achtergrond moet lijken op perkament met een lichte textuur."

### Afbeeldingen analyseren

Gebruik het foto-icoon rechtsonder in het tekstvak om afbeeldingen toe te voegen. Na uploaden kan de AI een afbeelding beschrijven en de inhoud interpreteren. Zorg er wel voor dat je er een prompt bij voegt met een goede beschrijving van wat je wilt dat de AI analyseert. Let op: De AI kan tekst, grafieken of tabellen in een afbeelding niet altijd goed interpreteren. Naast het uploaden van afbeeldingen via het paperclip-icoon kun je nu ook afbeeldingen rechtstreeks in de chat plakken. Kopieer eenvoudig een afbeelding van je computer of van een webpagina en plak deze in het tekstveld van UvA AI Chat. De afbeelding wordt automatisch geüpload en is direct klaar voor analyse.

- - -

## 2.5 Artefacten

De functie 'Artefacten' in UvA AI Chat is een krachtige tool die is ontworpen om samenwerking met de AI te ondersteunen. Een artefact is een afzonderlijk venster (met tekst, code of visualisaties) dat zowel jij als de AI kunnen bewerken. Dit maakt samenwerken eenvoudig, aangezien je de AI het artefact kunt laten bewerken en je specifieke stukken tekst in het artefact kunt selecteren om de AI deze aan te laten passen. Daarnaast kun je de tekst handmatig bewerken. Dit verandert de AI meer in een creatieve partner dan in slechts een tekstgenerator.

### Hoe gebruik je artefacten

1. **Activeer de functie:** Om te beginnen moet u de functie 'Artifact Creation' selecteren binnen de UvA AI Chat-interface (klik op de drie puntjes). Hiermee geeft u aan de AI aan dat u een output zoekt in een apart venster voor verdere bewerking.
2. **Geef een duidelijke opdracht:** Typ in het chatvenster een opdracht die het onderwerp en het type artefact dat je nodig hebt duidelijk definieert. Je zou de AI bijvoorbeeld kunnen vragen: "Maak een artefact waarin de Keynesiaanse en Neoklassieke economische theorieën worden vergeleken."
3. **Bekijk de gegenereerde output:** De AI produceert vervolgens een artefact op basis van je verzoek. In het voorbeeld van de economische theorieën zou de output een overzicht kunnen zijn van de belangrijkste principes, aannames en politieke implicaties.
4. **Werk samen aan revisies:** Het platform stelt je in staat om het artefact gezamenlijk te verfijnen. Je kunt direct bewerkingen uitvoeren in het speciale tekst- of codevenster, of je kunt de AI verdere instructies geven in de chat om een specifiek gedeelte van het artefact te wijzigen of uit te breiden. Je kunt ook stukken tekst of code selecteren en de AI vragen die aan te passen.
5. **Sla je werk op:** Zorg ervoor dat als je het artefact handmatig bewerkt, je het eerst opslaat voordat je de AI vraagt om verder te bewerken. Dit doe je door op het 'opslaan'-icoon rechtsboven in het artefact te klikken. Wanneer je de AI vraagt om het artefact te bewerken, wordt er automatisch een nieuwe versie opgeslagen. Eerdere versies worden ook bewaard, zodat je wijzigingen kunt volgen en eerdere versies opnieuw kunt bekijken indien nodig door op de pijlen linksboven in het artefact te klikken. Het voltooide artefact kan vervolgens worden gedownload voor gebruik in je onderzoekspaper, presentatie of andere academische projecten. Doe dit door rechtsbovenin te klikken op het pijltje naar beneden en "Download as" te selecteren.

- - -

## 2.6 Study Mode

"Study Mode" in UvA AI Chat verandert de assistent in een begeleidende tutor. In plaats van meteen antwoorden te geven, stelt de AI eerst vragen, biedt hints en wacht op jouw reactie voordat het verdergaat. Het helpt voorkomen dat je denkwerk te veel uitbesteedt aan AI. Door actief te oefenen met redeneren en zelf antwoorden te formuleren, blijf je je eigen kritisch denkvermogen trainen en ontwikkelen. Het doel is dat je zelf redeneert en zo tot beter begrip komt.

### Hoe gebruik je Study Mode

1. **Activeren en leerdoel bepalen:** Klik op de pet in het tekstvak van UvA AI Chat en zet Study Mode aan. Uitzetten doe je door op het kruisje naast Study te klikken. Geef daarna een leerdoel door te specificeren waar je over wilt leren en benoem wat je al weet. Voorbeelden:

   * "Ik bereid een seminar voor over de Franse Revolutie en specifiek de bestorming van de Bastille. Help me de oorzaken en interpretaties van de oorzaak te begrijpen."
   * "Ik bereid me voor op een tentamen onderzoeksvaardigheden en wil begrijpen hoe ik twee groepen kan vergelijken met statistiek. Leg uit welke methoden geschikt zijn, zoals de t-toets, en wanneer je beter een andere toets gebruikt."
2. **Werken in dialoog:** De AI stelt open vragen en wacht op jouw antwoord. Je kunt aangeven hoe je begeleid wilt worden: om kleinere stappen vragen, om hints in plaats van antwoorden, of om feedback op je redenering. Ook kun je vragen om specifieke vormen, zoals een multiplechoicevraag, een concreet voorbeeld of metaforen.
3. **Tempo en niveau aanpassen:** Stuur bij waar nodig: "gebruik eenvoudiger taal", "maak het moeilijker", of "ga sneller/langzamer". De AI past zijn vragen en voorbeelden hierop aan.
4. **Afronden en vastleggen:** Om wat je hebt geleerd te versterken, sluit af met een recap of oefenmateriaal. Voorbeelden: "Vat samen in vijf bulletpoints de belangrijkste punten van dit gesprek" of "Geef drie oefenvragen met korte oplossingen." Wil je het resultaat bewaren of verder uitwerken, combineer Study Mode dan met Artefacten. Zo kun je notities, tabellen of conceptteksten in een apart venster bewerken en later terughalen.

- - -

## 2.7 Gebruik de Spraak-naar-tekst Functie

UvA AI Chat ondersteunt spraakinvoer en tekst-naar-spraak uitvoer. Hieronder vind je een overzicht van hoe je het kunt gebruiken en hoe je de instellingen kunt configureren.

**Aan de slag**

Om spraakinvoer te gebruiken, klik je op het **microfoonpictogram** in de chatinvoerbalk. UvA AI Chat begint dan je stem op te nemen en zet deze automatisch om naar tekst.

**Spraak-instellingen**

Je kunt het spraakgedrag configureren door op het menu **Settings** linksonder (onder het radiale icoon) te klikken en vervolgens **Speech** te selecteren. De volgende opties zijn beschikbaar:

| Instelling                              | Beschrijving                                                                                            |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| **Auto-antwoord**                       | Leest antwoorden van de assistent automatisch voor nadat je een bericht hebt verzonden via spraakinvoer |
| **Spraak onderbreken bij spraakinvoer** | Stopt de tekst-naar-spraak weergave zodra je opnieuw begint te spreken                                  |
| **Automatisch verzenden**               | Verzendt je bericht automatisch na een periode van stilte                                               |
| **Configureer transcriptietalen**       | Kies welke spraakherkenningstalen beschikbaar zijn.                                                     |

**Vertragingsopties voor automatisch verzenden:**

* Uit
* 1 seconde
* 2 seconden
* 5 seconden

**Een stem kiezen**

Via Instellingen → Spraak → Stem kun je een stem kiezen voor tekst-naar-spraak. Klik op de **afspeelknop** (▷) naast een stem om een voorbeeld te beluisteren voordat je deze selecteert.

- - -

## 2.8 Diagrammen maken met *Mermaid*

UvA AI Chat kan je helpen om diagrammen te maken met behulp van **Mermaid**. Mermaid is een eenvoudige, tekstgebaseerde manier om diagrammen te beschrijven. Dit is handig voor het visualiseren van complexe processen, het organiseren van ideeën, of het maken van schema’s voor presentaties en verslagen.

### Hoe maak je een Mermaid-diagram?

Om een diagram te krijgen dat je direct kunt gebruiken, moet je expliciet vragen om een Mermaid-diagram, zoals in het voorbeeld hieronder:

<img src="/img/uploads/screenshot-2026-03-03-at-15.42.51.png" alt="UvA AI Chat" style={{width: '100%', marginBottom: '2rem'}} />

### Andere soorten diagrammen

Je kunt UvA AI Chat op dezelfde manier vragen voor allerlei soorten Mermaid-diagrammen, bijvoorbeeld:

* Volgorde diagrammen
* Gantt diagrammen
* Cirkel charts

Formuleer je prompt bijvoorbeeld zo:

“Create a pie chart in Mermaid to show division of types of pie: Apple (30) Cherry (20) Pumpkin (25) Blueberry (15) Pecan (10)”

<img src="/img/uploads/screenshot-2026-03-05-at-10.10.24.png" alt="UvA AI Chat" style={{width: '100%', marginBottom: '2rem'}} />

- - -

## 2.9 .csv bestanden analyseren en grafieken maken met UvA AI Chat

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

## Generative UI: interactieve quizzen en vervolgvragen

UvA AI Chat kan nu gebruikmaken van **Generative UI**: de chat kan interactieve elementen direct in het gesprek aanmaken, in plaats van alleen te reageren met platte tekst. Een nuttig voorbeeld hiervan is de **Quiz Maker**. Wanneer je iets vraagt als **"Overhoor me over dit artikel"**, **"Quiz me over week 3"** of **"Maak een quiz over de late periode van Renoir"**, kan UvA AI Chat een gestructureerde quiz genereren met meerkeuzevragen of open vragen.

Dit kan je helpen om actiever te studeren. In plaats van je aantekeningen alleen opnieuw te lezen, kun je testen wat je nog weet, controleren of je kernbegrippen begrijpt en snel zien welke onderdelen van de stof meer aandacht nodig hebben. Wanneer je in een project werkt of bestanden hebt geüpload, kan de quiz ook op dat materiaal worden gebaseerd. Je kunt bijvoorbeeld vragen: **"Overhoor me over de geüploade collegeslides"** of **"Maak vijf vragen over de hoofdargumenten in deze tekst."**

Je kunt de quiz ook specifieker maken. Bijvoorbeeld:

* **"Overhoor me over de kernbegrippen, maar geef de antwoorden niet meteen."**
* **"Stel één vraag tegelijk."**
* **"Maak de vragen moeilijker."**
* **"Richt je op definities en voorbeelden."**
* **"Geef feedback na elk antwoord."**

Generative UI maakt UvA AI Chat ook meer conversationeel. De chat kan **vervolgvragen** stellen wanneer je daarom vraagt, of wanneer er meer informatie nodig is om je goed te helpen. Als je vraag bijvoorbeeld te breed is, kan de chat vragen op welk onderwerp, niveau, bestand of leerdoel de focus moet liggen. Je kunt dit ook actief uitnodigen door te vragen: **"Stel me vervolgvragen voordat je antwoord geeft"** of **"Help me uitzoeken wat ik eerst moet studeren."**

Op deze manier kan Generative UI een meer begeleid leerproces ondersteunen. Je kunt het gebruiken om stap voor stap door cursusmateriaal heen te gaan, retrieval practice te oefenen, verwarrende concepten te verduidelijken en je eigen documenten om te zetten in actieve studieoefeningen.

Houd er rekening mee dat een door AI gegenereerde quiz en de beoordeling daarvan fouten of hallucinaties kunnen bevatten, en geen officiële of representatieve toetsing vormen van een cursus of module. Gebruik de quiz als studiehulpmiddel, niet als definitieve indicatie van wat er getoetst zal worden of hoe je werk beoordeeld zou worden.
