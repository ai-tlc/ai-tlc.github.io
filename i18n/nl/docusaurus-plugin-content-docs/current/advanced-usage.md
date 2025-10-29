---
id: advanced-usage
title: "Deel 4: Geavanceerd gebruik en functies"
sidebar_label: Geavanceerd gebruik
slug: /advanced-usage
---

## 4.1 De juiste motor kiezen {#4-1-motor}


UvA AI Chat biedt meerdere **AI‑modellen**. **GPT‑4o** is een sterke allrounder; andere modellen kunnen beter passen (kleinere modellen besparen **energie**). Experimenteer voor terugkerende taken.


**Tabel 2: Vergelijking van beschikbare AI‑modellen**


| Model | General Use Cases | Knowledge Cutoff | Energy/Cost (relatief) | Type | Context Window (Input) | Context Window (Output) |
|---|---|---:|---|---|---:|---:|
| gpt‑5 | Complexe concepten; geavanceerde code; academische artikelen interpreteren | 2024‑09‑30 | Hoog | Advanced reasoning | 272K | 128K |
| gpt‑5‑mini | Conceptverduidelijking; brainstorm; studieplanning | 2024‑05‑31 | Midden | Efficient reasoning | 272K | 128K |
| gpt‑5‑nano | Snel definities; fact‑checking; basisuitleg | 2024‑05‑31 | Laag | Lightweight reasoning | 272K | 128K |
| GPT‑4o | Diagrammen/charts analyseren; visuele interpretatie | 2024‑11‑20 | Hoog | Multimodaal | 128K | 16K |
| GPT‑4.1 | Taal algemeen; hoge input; agentic planning | 2025‑04‑14 | Hoog | Advanced language | 1M | 100K |
| Llama‑3.3‑70B‑Instruct‑AWQ | Open source; lokaal; lange context | 2023‑12‑01 | Midden | Open‑source model | 128K | 8K |


---


## 4.2 Functionaliteit uitbreiden met Extensies {#4-2-extensies}


**Extensies** laten UvA AI Chat via **API’s** externe systemen bevragen of acties uitvoeren (voor technisch onderlegde gebruikers).


**Aanmaken**: naam, korte & uitgebreide beschrijving, **headers** (bv. `Content-Type: application/json`; veilig in Azure Key Vault), **functions** (GET/POST/PUT), **Submit**.


**Voorbeeld**
Koppel de **UvA‑bibliotheekcatalogus API** en prompt:
“Use the library extension to find the five most recent publications by author ‘Adriaan van Dis’. Provide APA citations and direct catalog links.”