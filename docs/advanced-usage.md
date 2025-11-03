---
id: advanced-usage
title: "Part 4: Advanced usage"
sidebar_label: Advanced usage
slug: /advanced-usage
---

## 4.1 Choosing the right engine {#4-1-engine}


UvA AI Chat provides multiple **AI models**. Default **GPT‑4o** is a strong all‑rounder; other models may suit specific needs (and smaller models can save **energy**). Experiment to find the best fit for recurring tasks.


**Table 2: Comparison of available AI models**


| Model | General Use Cases | Knowledge Cutoff | Relative Energy/Cost | Type | Context Window (Input) | Context Window (Output) |
|---|---|---:|---|---|---:|---:|
| gpt‑5 | Explaining complex concepts; advanced coding; interpreting academic papers | 2024‑09‑30 | High | Advanced reasoning model | 272K | 128K |
| gpt‑5‑mini | Moderate concept clarification; brainstorming; study planning; course understanding | 2024‑05‑31 | Medium | Efficient reasoning model | 272K | 128K |
| gpt‑5‑nano | Quick definitions; fact‑checking; basic explanations; vocabulary help | 2024‑05‑31 | Low | Lightweight reasoning model | 272K | 128K |
| GPT‑4o | Analyzing diagrams/charts; visual interpretation; presentation feedback | 2024‑11‑20 | High | Multimodal model | 128K | 16K |
| GPT‑4.1 | General language; high‑input creative tasks; agentic planning | 2025‑04‑14 | High | Advanced language model | 1M | 100K |
| Llama‑3.3‑70B‑Instruct‑AWQ | Open source; local deployment; long context | 2023‑12‑01 | Medium | Open‑source language model | 128K | 8K |


---


## 4.2 Expanding functionality with extensions {#4-2-extensions}


**Extensions** let UvA AI Chat interact with **external systems** via APIs—retrieving data or performing actions (intended for technically savvy users).


**Creation workflow**


- **Add extension** → name, short & detailed descriptions.
- **Headers** (e.g., `Content-Type: application/json`; values can be secured in Azure Key Vault).
- **Functions** (GET/POST/PUT, etc.).
- **Submit** to finalize.


**Example**
A researcher links to the **UvA library catalog API** and prompts:
“Use the library extension to find the five most recent publications by author ‘Adriaan van Dis’. Provide APA citations and catalog links.”