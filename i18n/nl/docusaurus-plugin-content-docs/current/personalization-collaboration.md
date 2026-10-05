---
title: "Deel 3: Personalisatie en samenwerking"
id: personalization-collaboration
sidebar_label: Personalisatie & samenwerking
slug: /personalization-collaboration
---
## 3.1 Persoonlijke instellingen: Custom Instructions en Memory

Om UvA AI Chat optimaal te kunnen gebruiken is het belangrijk om het te configureren naar jouw wensen. Om dit te doen, navigeer je naar de instellingen, hiervoor klik je eerst op persoons-icoon <Icon name="account_circle" color="black" size={20} /> helemaal links onderin op het scherm. Hier kun je direct jouw voorkeuren voor het thema (licht/donker) instellen. Daarna klik je op 'Settings', en dan op 'Personalization' voor de belangrijkste gebruiksinstellingen:

* **'Memory Creation' (Geheugencreatie):** Schakel deze optie in om de UvA AI Chat informatie over jouw eerdere prompts en gesprekken te laten opslaan in het geheugen. Dit stelt de AI in staat om context uit eerdere interacties te onthouden. Een voorbeeld van zulke context kan zijn dat je astronomie studeert of dat je bijvoorbeeld koken als hobby hebt.
* **'Memory Context' (Geheugencontext):** Om de chat de opgeslagen 'memories' daadwerkelijk te laten gebruiken in nieuwe gesprekken, dient je ook deze optie in te schakelen.
* **'Memory Management' (Geheugencontext):** Bekijk en beheer hier welke informatie UvA AI Chat heeft opgeslagen over jou in het geheugen. Je kunt hier opgeslagen 'Memories' zelf aanpassen of verwijderen.
* **'Custom Instructions' (Aangepaste Instructies):** Geef hierin aan hoe je wilt dat de AI zich gedraagt, opstelt of in welke stijl de AI standaard moet schrijven. Deze instructies worden op de achtergrond meegenomen in elk gesprek dat je start (behalve als je een Persona gebruikt).


### Praktijkvoorbeeld van 'Custom Instructions'

In het veld voor 'Custom Instructions' kun je bijvoorbeeld de volgende tekst invoeren om de AI-output standaard aan te passen aan jouw behoeften:

> "Antwoord altijd in het Nederlands. Formuleer jouw antwoorden als een academische adviseur: ondersteunend, kritisch en gericht op het verbeteren van mijn werk. Gebruik formele taal en vermijd overmatig gebruik van jargon. Structureer complexe antwoorden met bullet points voor de duidelijkheid."

- - -

## 3.2 Prompts: jouw verzameling instructies

"Prompts" is een functie die je helpt om efficiënter te werken door het hergebruiken van effectieve prompts. Je vindt de "My prompts" sectie via het boek-icoon <Icon name="book_2" color="black" size={20} /> in de linker zijbalk van UvA AI Chat.

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

Wil je een eerder opgeslagen prompts snel hergebruiken? Klik dan onder in het tekstvak van de UvA AI Chat op het boekje-icoon <Icon name="book_2" color="black" size={20} /> om een lijst van recente prompts te zien en de gewenste prompt direct in te voegen.

- - -

## 3.3 Skills

Een skill is een set instructies waarmee je UvA AI Chat leert hoe het een bepaald soort taak moet aanpakken, zoals schrijven in een bepaalde stijl, een vaste werkwijze volgen of specifieke kennis gebruiken. Je schrijft de instructies één keer en kunt ze daarna in elke chat gebruiken. Zo hoef je dezelfde taak niet in elk nieuw gesprek opnieuw uit te leggen.

Skills verschillen van opgeslagen prompts (zie 3.2). Een prompt is tekst die je zelf in de chat invoegt. Een skill blijft op de achtergrond: UvA AI Chat gebruikt de skill alleen wanneer je erom vraagt of wanneer je vraag bij de skill past.

### Wanneer zijn skills handig?

Skills werken het best voor taken die je vaker uitvoert en die je steeds op dezelfde manier gedaan wilt hebben.

| Toepassing | Wat de skill doet |
| --- | --- |
| **Colleges samenvatten** | Zet collegeaantekeningen, slides of transcripten om in een studiesamenvatting met een vaste opbouw: overzicht, kernbegrippen, een uitgewerkt voorbeeld en zelftestvragen. |
| **Cursusmededelingen schrijven** | Schrijft mededelingen voor Canvas in een vaste opbouw en toon: wat er verandert, wat studenten moeten doen en vóór wanneer. |

### Hoe maak je een skill?

1. **Open de Skills-instellingen:** Klik linksonder op het account-icoon <Icon name="account_circle" color="black" size={20} />, kies **Instellingen** en daarna **Skills**.
2. **Begin een nieuwe skill:** Klik op **New skill** om een skill te schrijven op basis van een sjabloon. Heb je al een skillbestand? Klik dan op **Upload .md** om het toe te voegen.
3. **Geef de skill een naam:** Het sjabloon begint met een korte kop tussen twee regels met drie streepjes. Achter `name:` vul je een korte naam in, bijvoorbeeld `college-samenvatting`. Gebruik kleine letters en koppeltekens, net als in het sjabloon.
4. **Schrijf de beschrijving:** Achter `description:` beschrijf je wat de skill doet en wanneer die gebruikt moet worden. Dit is het belangrijkste onderdeel: aan de hand van de beschrijving bepaalt UvA AI Chat of de skill bij je vraag past.
5. **Schrijf de instructies:** Vervang onder de kop de tekst `Instructions...` door wat de AI moet doen. Wees concreet, net als bij een goede prompt (zie 2.1): beschrijf de stappen, de vorm en de toon die je verwacht.
6. **Sla op:** Klik op **Save**. De skill is nu beschikbaar in al je chats.

### Praktijkvoorbeeld: een skill voor collegesamenvattingen

Een student wil elk college op dezelfde manier laten samenvatten. Ze maakt daarvoor deze skill:

```
---
name: college-samenvatting
description: Vat collegeaantekeningen, slides of transcripten samen in een gestructureerde studiesamenvatting. Gebruik deze skill wanneer de gebruiker vraagt om een college samen te vatten of studieaantekeningen te maken.
---

# Collegesamenvatting

1. Begin met een overzicht van 2-3 zinnen over het hoofdonderwerp van het college.
2. Noem de kernbegrippen, elk met een definitie van één regel.
3. Voeg een kort uitgewerkt voorbeeld toe bij alles wat technisch is.
4. Sluit af met 3 zelftestvragen (antwoorden verborgen onderaan).

Houd het korter dan één pagina en gebruik dezelfde taal als het collegemateriaal.
```

De beschrijving bestaat uit twee delen: wat de skill doet en wanneer die gebruikt moet worden. De student uploadt daarna haar slides en typt: "Vat dit college samen." Omdat deze vraag bij de beschrijving past, gebruikt UvA AI Chat de skill en krijgt ze de samenvatting in de vaste opbouw.

### Een skill gebruiken in een chat

Een skill kan op drie manieren worden gebruikt:

| Manier | Wat er gebeurt |
| --- | --- |
| **Zelf kiezen met `/`** | Typ `/` in het tekstvak en kies een skill uit de lijst. Je bepaalt zelf dat de skill wordt gebruikt. |
| **De skill noemen** | Noem de skill in je bericht, bijvoorbeeld: "Gebruik mijn skill voor collegesamenvattingen." |
| **Automatisch** | UvA AI Chat gebruikt een skill uit zichzelf, maar alleen wanneer je vraag bij de beschrijving van de skill past. Bij andere vragen wordt de skill niet gebruikt. |

Zodra een skill wordt gebruikt, blijft UvA AI Chat die volgen voor de rest van het gesprek.

Wordt een skill niet automatisch opgepakt, of juist gebruikt wanneer je dat niet wilt? Scherp dan de beschrijving aan: benoem duidelijk wat de skill doet en in welke situaties die gebruikt moet worden. Bij twijfel kies je de skill zelf met `/`.

### Het skillformaat

Skills gebruiken het open Agent Skills-formaat. Skills die voor andere tools zijn gemaakt, werken daardoor meestal ook in UvA AI Chat. Op [agentskills.io](https://agentskills.io) vind je de volledige uitleg en voorbeelden. Lees een skillbestand van iemand anders eerst door voordat je het uploadt, zodat je weet welke instructies je de AI geeft.

- - -

## 3.4 "Persona's": op maat gemaakte interactie


Met een persona geef je UvA AI Chat een duidelijke rol, werkwijze en toon. Een persona helpt om antwoorden beter te laten aansluiten op een terugkerende taak, een specifieke doelgroep of een vaste manier van werken. Je kunt bijvoorbeeld bepalen welke expertise de AI moet benadrukken, hoe kritisch of ondersteunend de toon moet zijn, hoe gestructureerd de antwoorden moeten zijn en welke grenzen de persona moet respecteren.


### Persona’s maken met de Persona Maker


Je hoeft een persona niet alleen te maken door handmatig velden in te vullen. In de Persona Maker klik je op "Add persona" en kun je de persona ook opbouwen door met de AI in gesprek te gaan. Begin door in je eigen woorden te beschrijven wat je wilt dat de persona doet. De AI helpt je vervolgens om de persona verder te verfijnen: ze kan vervolgvragen stellen, onduidelijke punten concreter maken en de instellingen in het configuratiepaneel aanpassen op basis van jouw beschrijving.


Dit werkt het best wanneer je zo concreet mogelijk bent. Leg uit voor wie de persona bedoeld is, welke taken de persona moet ondersteunen, welke toon de persona moet gebruiken, wat de persona wel en niet moet doen en hoe je wilt dat de antwoorden worden opgebouwd.


Je kunt de maker ook vragen om te helpen de persona te verbeteren. Handige vragen zijn bijvoorbeeld:


* Welke informatie ontbreekt nog om deze persona beter te maken?
* Welke instellingen zou je aanpassen voor dit doel?
* Kun je de persona strenger, duidelijker of creatiever maken?
* Kun je betere conversation starters voorstellen?
* Kun je de instructies herschrijven zodat ze bruikbaarder zijn voor studenten, docenten of collega’s?


Hoe beter je gesprek met de maker, hoe beter de uiteindelijke persona wordt. Het is daarom nuttig om de maker niet alleen te zien als een hulpmiddel om formulieren in te vullen, maar als een AI-assistent die je helpt de persona te ontwerpen.


### De instellingen in 'Configure persona'


Het configuratiepaneel aan de rechterkant bevat alle instellingen voor je persona. Deze kunnen handmatig worden ingevuld, maar de AI kan je ook helpen om ze aan te vullen en te verfijnen.


* **Persona icon:** Gebruik het plus-icoon <Icon name="add" color="black" size={20} /> om je persona een herkenbaar pictogram of avatar te geven. Dit is handig wanneer je meerdere persona’s beheert of wanneer anderen jouw persona in een gedeelde context gebruiken. Je kunt zelf een afbeelding uploaden door op "+" te klikken.
* **Name:** Geef je persona een korte en duidelijke naam die meteen laat zien waarvoor de persona bedoeld is. Een taakgerichte naam is meestal bruikbaarder dan een vage of algemene naam. Een duidelijke naam maakt de persona makkelijker te herkennen in lijsten, previews en groepscontexten.
* **Default language model:** Kies het standaardtaalmodel dat de persona gebruikt. Dit is het model dat geselecteerd is wanneer iemand de persona gaat gebruiken. De keuze voor een model kan invloed hebben op hoe snel, uitgebreid of gespecialiseerd de antwoorden aanvoelen.
* **Users may choose the language model themselves:** Schakel deze optie in als gebruikers van deze persona zelf een ander taalmodel moeten kunnen kiezen dan het standaardmodel. Dit is vooral handig wanneer een persona wordt gedeeld in een bredere context, zoals een cursus, team of groepsomgeving waarin verschillende gebruikers verschillende behoeften kunnen hebben. Een docent kan bijvoorbeeld een aanbevolen standaardmodel instellen, terwijl studenten of collega’s nog steeds zelf een ander model kunnen kiezen.
* **Persona instructions:** Dit is het belangrijkste inhoudelijke veld. Hier beschrijf je de rol, expertise, het doel, de toon, de grenzen en de gewenste manier van antwoorden van de persona. Je kunt deze instructies zelf schrijven, maar de maker kan ze ook voor je opstellen en verfijnen. Het kan helpen om de AI te vragen deze instructies verder aan te scherpen.
* **Make the instructions visible to others:** Gebruik deze optie om te bepalen of andere gebruikers de persona-instructies kunnen zien. Instructies zichtbaar maken kan nuttig zijn wanneer transparantie belangrijk is, bijvoorbeeld in onderwijs, samenwerking of kwaliteitscontrole. Als deze optie is uitgeschakeld, blijven de onderliggende instructies meer op de achtergrond.
* **Send opening message:** Schakel dit in als je wilt dat de persona het gesprek begint met een openingsbericht. Dit kan gebruikers helpen begrijpen waarvoor de persona bedoeld is, wat voor input ze moeten geven en hoe ze de persona effectief kunnen gebruiken. De maker kan ook helpen om een openingsbericht te schrijven dat past bij je doelgroep.
* **Example response:** Voeg één of meer voorbeelden toe van een vraag en een gewenst antwoord. Dit is nuttig wanneer je de stijl, diepgang of structuur van de antwoorden van de persona wilt sturen. Concrete voorbeelden maken je verwachtingen vaak duidelijker dan alleen abstracte instructies.
* **Conversation style:** Kies een vooraf ingestelde stijl, zoals 'Balanced', 'Creative' of 'Professional', of selecteer 'Custom' om de stijl nauwkeuriger aan te passen. Een preset is handig wanneer je snel wilt beginnen. Kies 'Custom' wanneer je de toon en het gedrag van de persona preciezer wilt afstemmen.
* **Temperature and Top P:** Deze instellingen beïnvloeden hoe voorspelbaar of gevarieerd de antwoorden van de persona zijn. Lagere waarden maken antwoorden meestal consistenter en gecontroleerder. Hogere waarden laten meer variatie en vrijheid toe. Als je twijfelt, laat de AI dan eerst geschikte instellingen voorstellen en pas ze alleen aan als de antwoorden te vlak, te breed of te onvoorspelbaar aanvoelen.
* **Sources:** Voeg bronnen of materialen toe die de persona als kennisbasis moet gebruiken. Dit is nuttig wanneer de persona moet steunen op specifieke documenten, richtlijnen, handleidingen of ander referentiemateriaal.
* **Allowed functions within the conversation:** Je kunt bepalen welke functies beschikbaar zijn wanneer gebruikers met de persona werken. Dit kan bijvoorbeeld gaan om zoeken op internet, geüploade documenten doorzoeken, afbeeldingen genereren, artifacts maken, study mode gebruiken of wisselen naar andere persona’s in dezelfde chat. Schakel alleen functies in die passen bij het doel van de persona. Zo blijft de ervaring gericht en voorkom je onnodige afleiding.
* **Brief work instruction for the user:** Dit is een korte, gebruikersgerichte instructie of beschrijving. Deze moet uitleggen wat de persona doet, voor wie de persona bedoeld is en wat de gebruiker moet aanleveren om goed te kunnen starten. Houd deze tekst kort, concreet en taakgericht.
* **Conversation starters:** Conversation starters zijn vooraf ingestelde prompts waarop gebruikers kunnen klikken om te beginnen. Gebruik ze om gebruikers te laten zien welk soort vragen of taken goed werken met de persona. Goede conversation starters helpen gebruikers snel op weg en sturen hen ook richting effectief gebruik.
* **Preview:** Gebruik 'Preview' om te controleren hoe de persona eruitziet voor gebruikers. Controleer of de naam, beschrijving, het openingsbericht en de conversation starters duidelijk genoeg zijn.
* **Save:** Sla de persona op wanneer de instructies, instellingen en gebruikersgerichte tekst klaar zijn. Een laatste controle is nuttig om te zorgen dat de persona niet alleen intern goed is ingesteld, maar ook duidelijk en bruikbaar is voor anderen.


Je kunt de persona testen en aanpassen door rechtsboven op "Preview" of op het oog-icoon <Icon name="Eye" color="black" size={20} /> te klikken.

- - -

## 3.5 Een persona embedden in Canvas

Met deze instructie embed je een UvA AI Chat-persona als chatvenster in een Canvas-pagina.

### Stap 1: Haal de embed-code op

1. Ga naar de **Personas**-lijst in UvA AI Chat.
2. Klik op de **drie puntjes (⋮)** naast de persona die je wilt delen.
3. Kies **Embed Persona**.
4. Zet de schakelaar **Open for the whole organization** op **aan**.
   > Dit is belangrijk: zonder deze instelling kunnen gebruikers buiten jouw directe groep de persona niet zien.
5. Kies de gewenste embed-methode. De meest gebruikte optie is **iframe code**.
6. Kopieer de iframe-code met de kopieerknop.

De code ziet er zo uit:

```html
<iframe src="https://aichat.uva.nl/embed/persona/[ID]"
  width="100%" height="700"
  style="border:0;"
  allow="clipboard-write; microphone"></iframe>
```

### Stap 2: Maak een Canvas-pagina aan

1. Ga in Canvas naar **Pages** en klik op **+ Page** (of open een bestaande pagina).
2. Geef de pagina een titel.

### Stap 3: Schakel over naar de HTML-editor

Er zijn twee manieren om de HTML-editor te openen:

- Klik op **View → HTML Editor** in de werkbalk van de rich-text editor, **of**
- Klik op de knop **Switch to raw HTML Editor** onder het tekstvak.

### Stap 4: Plak de iframe-code

1. Plak de gekopieerde iframe-code in het HTML-tekstvak.
2. Sla de pagina op.


### Resultaat

De persona verschijnt als een volledig interactief chatvenster op de Canvas-pagina. Studenten kunnen er direct vragen in stellen aan de persona die je voor jouw vak of module hebt ingericht. Denk bijvoorbeeld aan een assistent die studenten helpt bij het begrijpen van de leerstof, het oefenen met begrippen, of het vinden van de juiste bronnen binnen het vak. De persona is direct beschikbaar op de plek waar studenten al werken, zonder dat ze hoeven over te schakelen naar een andere omgeving.

- - -

## 3.6 "Projects": jouw georganiseerde werkruimte

Onder "Projects" (het folder-icoon <Icon name="folder_open" color="black" size={20} /> in de linkerbalk) kun je jouw eigen projecten inrichten. Dit fungeert als een digitale container voor al het materiaal dat gerelateerd is aan een specifieke taak of onderzoek. Je kunt dit gebruiken om je chats te ordenen, als je bijvoorbeeld meerdere gesprekken over hetzelfde onderwerp hebt. Om te beginnen, klik je op "+ Add Project" midden op het scherm. Binnen een project kun je chats, prompts, en persona's bij elkaar zetten. Daarmee kun je binnen jouw project gemakkelijk navigeren naar eerder gebruikte prompts en de bijbehorende antwoorden, wat het eenvoudig maakt om verder te werken waar je gebleven was.

<img src="/img/uploads/screenshot-2026-05-02-at-13.50.37.png" alt="UvA AI Chat" style={{width: '100%', marginBottom: '2rem'}} />

Bij het instellen van de projectmap kun je een titel toewijzen, een pictogram en kleur kiezen om deze visueel te onderscheiden, en aangepaste instructies toevoegen. Aangepaste instructies bepalen specifieke richtlijnen of voorkeuren voor hoe de assistent zich binnen dat project gedraagt of reageert, zodat de output beter aansluit op jouw behoeften.

Voor alle Project functionaliteiten, zie hieronder.

<img src="/img/uploads/screenshot-2026-06-02-at-11.05.07.png" alt="UvA AI Chat" style={{width: '100%', marginBottom: '2rem'}} />

**+:** Upload documenten naar deze specifieke chat of naar het hele project. Het project slaat deze bestanden op onder “Project files”. Je kunt hier ook je Prompt Library openen om veelgebruikte prompts te selecteren.

**Chats in this projects:** Bekijk en heropen eerder gebruikte gesprekken binnen het project. Je kunt ook bestaande chats uit de algemene omgeving toevoegen via “Add existing chat”.

**Project knowledge:** Deze functie slaat belangrijke informatie, inzichten en beslissingen op die relevant zijn voor je project, zodat de assistent deze als doorlopende context kan gebruiken in toekomstige chats. Dit helpt om consistentie te behouden, herhaling te voorkomen en antwoorden af te stemmen op de thema’s, methoden en doelen van je project.

Met de functie **Add card** kun je handmatig nieuwe kennisitems toevoegen door belangrijke notities, richtlijnen of conclusies op te slaan. Elke kaart bevat één stuk informatie. Per kaart kun je de inhoud bewerken, vastpinnen om deze belangrijker te maken binnen de context, of verbergen om deze niet mee te nemen in de antwoorden van de assistent.

**Project files:** Bekijk welke bestanden in het project worden gebruikt en voeg nieuwe documenten toe.

**Personas:** Bekijk welke persona’s beschikbaar zijn binnen dit project en voeg nieuwe toe.

**Instructions:** Geef de projectassistent extra context en instructies zodat deze beter aansluit op jouw behoeften.

**Prompts:** Bekijk welke prompts beschikbaar zijn binnen dit project en voeg nieuwe toe.

**Tip!** Gebruik tijdens het chatten “@” om naar specifieke projectdocumenten te verwijzen, zodat de AI je instructies nauwkeuriger kan volgen.

### Project Knowledge: herbruikbare context in projecten

In UvA AI Chat-projecten kan **Project Knowledge** helpen om nuttige informatie over verschillende projectchats heen te bewaren. In plaats van alleen te vertrouwen op verborgen of informele memory, kan belangrijke informatie worden opgeslagen als expliciete **knowledge cards**.

Een knowledge card is een klein, herbruikbaar stukje informatie, zoals:

| Een knowledge card kan bevatten...                  | Voorbeeld                                                                    |
| --------------------------------------------------- | ---------------------------------------------------------------------------- |
| Een eerder gemaakte beslissing in het project       | “De workshop is bedoeld voor eerstejaarsstudenten.”                          |
| Een doelgroep                                       | “De tekst moet begrijpelijk zijn voor docenten zonder technische AI-kennis.” |
| Een gewenste toon of schrijfstijl                   | “Gebruik een duidelijke, toegankelijke en didactische toon.”                 |
| Een terugkerende randvoorwaarde                     | “Houd handleidingsteksten beknopt en praktisch.”                             |
| Een belangrijk feit dat later onthouden moet worden | “De module is bedoeld voor zowel studenten als medewerkers.”                 |

Wanneer relevant kan UvA AI Chat deze cards gebruiken in latere antwoorden. Dit helpt de AI om consistent te blijven in verschillende chats binnen hetzelfde project. Het maakt het gebruik van context ook transparanter: knowledge cards kunnen worden bekeken, aangepast, gearchiveerd of uitgesloten.

Project Knowledge is nuttig omdat opgeslagen context niet automatisch perfect is. Een card kan verouderd, te algemeen of niet langer relevant zijn. De meest recente instructie die je geeft, moet altijd richting geven aan het antwoord. Als de AI lijkt te vertrouwen op oude of onjuiste context, corrigeer dit dan expliciet.

Bijvoorbeeld:

> Negeer de eerdere projectaanname dat deze tekst voor studenten is. Deze versie is bedoeld voor docenten.

Of:

> Gebruik de projectkennis over de doelgroep van de workshop, maar gebruik niet de eerder voorgestelde structuur.

- - -

## 3.7 "Groups": samenwerking en delen met anderen

De functie "Groepen" maakt het eenvoudig om samen te werken aan gedeelde projecten. Het is ideaal voor teamwerk, of je nu onderzoek doet, een gezamenlijke presentatie voorbereidt, of aan een ander project werkt. Binnen een groep kun je eenvoudig bestanden delen, elkaars prompts zien en samenwerken aan dezelfde doelen. Je vindt de functie 'Groepen' via het pictogram met de twee personen <Icon name="group" color="black" size={20} /> in de linkerzijbalk.

Om een groep aan te maken, klik je op de knop "Add group". Vul de volgende tekstvelden in:

* **Groepsnaam:** Voer een naam voor je groep in het veld "Group Name". Dit is een verplicht veld.
* **Groepsbeschrijving:** Geef een beschrijving voor de groep in het tekstvak "Group Description". Dit is over het algemeen het doel van de groep.
* **Members:** Voeg de e-mailadressen toe van de mensen die je lid wilt maken van de groep. Je kunt meerdere e-mailadressen scheiden met een komma.
* **Owners:** Voer de e-mailadressen in van de mensen die de eigenaren van de groep zullen zijn. Deze moeten ook worden gescheiden door komma's. Deze eigenaren kunnen de groep bewerken.
* **Persona's:** Selecteer, indien van toepassing, de persona's voor de groep. **Tip! Wanneer je bewerkingsrechten hebt, kun je ook samen persona’s bewerken.**
* **Prompts:** Selecteer, indien van toepassing, specifieke opgeslagen prompts voor de groep.
* **Start- en einddata:** Kies een startdatum en een einddatum voor de groep met behulp van de datumkiezers.
* **Opslaan:** Klik op de knop "Opslaan" om de aanmaak van de groep te voltooien.

Door een groep aan te maken, kun je specifieke chats, persona's of prompts delen. Je bepaalt of toegevoegde leden alleen de persona's kunnen gebruiken ('Leden') of ze ook kunnen bewerken ('Eigenaren'). Als docent zou je bijvoorbeeld studenten als leden kunnen toevoegen, zodat ze een specifieke persona die jij hebt aangemaakt kunnen gebruiken. Je kunt ook een start- en einddatum voor de groep instellen indien nodig. Goed om te weten: als eigenaar van de groep kun je de zichtbaarheid van leden voor anderen verbergen door in het optiemenu de optie ‘hide members from each other’ in te schakelen.

**Tip!** Je kunt nu berichten delen met de leden van jouw groep via "Post Announcement"

<img src="/img/uploads/screenshot-2026-05-02-at-16.23.50.png" alt="UvA AI Chat" style={{width: '100%', marginBottom: '2rem'}} />

**Tip!** Gebruik de deelknop rechtsboven in je chats om je bevindingen te delen met andere UvA AI Chat-gebruikers. Let op: alleen gebruikers binnen de UvA hebben toegang tot deze chats.
