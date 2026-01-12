---
title: "Deel 4: Geavanceerd gebruik en functies"
id: advanced-usage
sidebar_label: Geavanceerd gebruik
slug: /advanced-usage
---

## 4.1 De juiste motor kiezen

UvA AI Chat biedt toegang tot verschillende geavanceerde AI-modellen (Large Language Models). Het standaardmodel, GPT-4o, is een uitstekende allrounder en werkt goed voor veel taken, maar voor specifieke taken kan een ander model betere resultaten opleveren. Voor simpelere taken kan het beter zijn om een kleiner en efficiënter model te kiezen dat minder energie verbruikt.

De onderstaande tabel dient als een snelle referentie om je te helpen het meest geschikte AI-model voor jouw taak te kiezen. Om uit te vinden welk model het beste werkt voor jouw specifieke taak zul je zelf moeten experimenteren met de verschillende modellen. Dit kan belangrijk zijn als je een bepaalde specifieke taak hebt die je vaker wilt uitvoeren.

### Tabel 2: Vergelijking van beschikbare AI-modellen

| Model | General Use Cases | Knowledge Cutoff | Energy / Cost (relative) | Type | Context Window Input | Context Window Output |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| gpt-5 | Explaining complex concepts, advanced coding projects, interpreting academic papers | 30-09-2024 | High | Advanced reasoning model | 272 K | 128 K |
| gpt-5-mini | moderate concept clarification, brainstorming ideas, study planning, understanding course material | 31-05-2024 | Medium | Efficient reasoning model | 272 K | 128 K |
| gpt-5-nano | Quick definitions, fact-checking, basic explanations, vocabulary help, concept reviews | 31-05-2024 | Low | Lightweight reasoning model | 272 K | 128 K |
| GPT-4o | Analyzing diagrams/charts visual content interpretation, presentation feedback | 20-11-2024 | High | Multimodal model | 128 K | 16 K |
| GPT-4.1 | General, language, high input, creative tasks, agentic planning | 14-04-2025 | High | Advanced language model | 1 M | 100 K |
| Llama-3.3-70B-Instruct-AWQ | Open source, local deployment, long context | 01-12-2023 | Medium | Open source language model | 128 K | 8 K |
| Claude-Sonnet 4.5          | Complex multi-step reasoning, advanced coding and debugging, building agentic workflows, long-form analysis and creative work                                                                       | 31-01-2025       | High                     | Hybrid reasoning model         | 200 K               | 64 K                  |
| Claude-Haiku 4.5           |Fast, cost-efficient assistant for quick questions, summaries, document synthesis, routine operations, and high-volume or real-time workflows; strong coding helper at roughly Sonnet-4-level performance |28-08-2025       | Low                      | Fast lightweight reasoning model | 200 K                |64 K  
---

## 4.2 Functionaliteit uitbreiden met Extensies

Extensies zijn bedoeld voor technisch onderlegde gebruikers die bekend zijn met API's. Ze functioneren als extra hulpmiddelen die de AI kan gebruiken om taken buiten de chatomgeving uit te voeren, zoals het ophalen van informatie uit externe databases of het uitvoeren van acties in andere software.

### Hoe het werkt

Extensies zijn krachtige hulpmiddelen die UvA AI Chat meer mogelijkheden geven door de AI in staat te stellen API-aanroepen te doen naar interne of externe systemen. Ze fungeren als extra tools die de AI in staat stellen om taken buiten de chatomgeving uit te voeren, zoals het ophalen van informatie uit een database, het uitvoeren van acties in andere software (zoals het toevoegen van een item aan een to-do-lijst), of het verzenden en ontvangen van gegevens. Deze hulpmiddelen zijn bedoeld voor technisch onderlegde gebruikers die bekend zijn met API's, aangezien onjuist gebruik onbedoelde acties in externe systemen kan veroorzaken.

Het proces omvat het definiëren van de details en functies van de extensie, en maakt gebruik van de API-structuur die wordt beschreven in de officiële OpenAI-documentatie (via openai.com). De aanmaakinterface wordt getoond in de bijgeleverde afbeelding.

Om je eigen extensie toe te voegen, klik je op "Add extension" (Extensie toevoegen):

- **Name (Naam):** Geef je extensie een naam in het veld "Name of your Extension".
- **Short description (Korte beschrijving):** Schrijf een korte beschrijving van de extensie.
- **Detail description (Uitgebreide beschrijving):** Geef een meer gedetailleerde uitleg over de specialiteiten en de stappen die nodig zijn om de extensie uit te voeren.
- **Headers:** Definieer de benodigde headers voor de API-aanroepen. Een standaard "Content-Type" header met de waarde "application/json" wordt weergegeven. Je kunt meer headers toevoegen door op "Add Header" (Header toevoegen) te klikken. Het platform ondersteunt ook het beveiligen van headerwaarden die zijn opgeslagen in Azure Key Vault.
- **Functions (Functies):** Voeg de specifieke functies toe die de extensie zal uitvoeren door op "Add Function" (Functie toevoegen) te klikken. Deze functies kunnen verschillende API-verzoeken ondersteunen, waaronder GET, POST en PUT, waardoor de extensie zowel gegevens kan ophalen als acties kan activeren.
- **Submit (Verzenden):** Zodra alle details zijn ingevuld, klik je op de knop "Submit" om de aanmaak van je extensie te voltooien.

### Praktisch voorbeeld van het gebruik van een extensie

Een onderzoeker configureert een extensie die communiceert met de UvA-bibliotheekcatalogus API. Nu kunnen ze een prompt gebruiken zoals:

> "Use the library extension to find the five most recent publications by author 'Adriaan van Dis'. Provide the full APA citations for each publication and a direct link to each in the catalog."
