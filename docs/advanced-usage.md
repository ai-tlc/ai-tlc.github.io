---
title: "Part 4: Advanced usage"
id: advanced-usage
sidebar_label: Advanced usage
slug: /advanced-usage
---
## 4.1 Choosing the right engine

UvA AI Chat gives you access to a range of advanced AI models (Large Language Models). The default, GPT-4o, is a strong all-rounder and works well for most tasks, but for specific needs, a different model may deliver better results. For simple tasks, you might prefer a smaller, more efficient model that uses less energy. The table below is a quick reference to help you choose the most suitable AI model for your task. To find out which model works best for your needs, you'll need to experiment - especially if you're running recurring, specific tasks.

### Table 2: Comparison of available AI models

| Model                      | General Use Cases                                                                                  | Knowledge Cutoff | Energy / Cost (relative) | Type                        | Context Window Input | Context Window Output |
| -------------------------- | -------------------------------------------------------------------------------------------------- | ---------------- | ------------------------ | --------------------------- | -------------------- | --------------------- |
| gpt-5                      | Explaining complex concepts, advanced coding projects, interpreting academic papers                | 30-09-2024       | High                     | Advanced reasoning model    | 272 K                | 128 K                 |
| gpt-5-mini                 | moderate concept clarification, brainstorming ideas, study planning, understanding course material | 31-05-2024       | Medium                   | Efficient reasoning model   | 272 K                | 128 K                 |
| gpt-5-nano                 | Quick definitions, fact-checking, basic explanations, vocabulary help, concept reviews             | 31-05-2024       | Low                      | Lightweight reasoning model | 272 K                | 128 K                 |
| GPT-4o                     | Analyzing diagrams/charts visual content interpretation, presentation feedback                     | 20-11-2024       | High                     | Multimodal model            | 128 K                | 16 K                  |
| GPT-4.1                    | General, language, high input, creative tasks, agentic planning                                    | 14-04-2025       | High                     | Advanced language model     | 1 M                  | 100 K                 |
| Llama-3.3-70B-Instruct-AWQ | Open source, local deployment, long context                                                        | 01-12-2023       | Medium                   | Open source language model  | 128 K                | 8 K                   |
| Claude-Sonnet 4.5          | Complex multi-step reasoning, advanced coding and debugging, building agentic workflows, long-form analysis and creative work                                                                       | 31-01-2025       | High                     | Hybrid reasoning model         | 200 K               | 64 K                  |
| Claude-Haiku 4.5           |Fast, cost-efficient assistant for quick questions, summaries, document synthesis, routine operations, and high-volume or real-time workflows; strong coding helper at roughly Sonnet-4-level performance |28-08-2025       | Low                      | Fast lightweight reasoning model | 200 K                |64 K  


## 4.2 Expanding functionality with extensions

Extensions are intended for technically savvy users who are familiar with APIs. They work as extra tools that the AI can use to handle tasks outside of the chat environment, such as retrieving information from external databases or carrying out actions in other software.

### How it works

Extensions are powerful tools that give UvA AI Chat greater capabilities by allowing the AI to make API calls to internal or external systems. They act as extra tools that enable the AI to perform tasks outside of the chat environment, such as retrieving information from a database, carrying out actions in other software (like adding an item to a to-do list), or sending and receiving data. These tools are intended for technically savvy users who are familiar with APIs, as incorrect use can trigger unintended actions in external systems.

The process involves defining the extension's details and functions, and it utilizes the API structure described in the official OpenAI documentation (via openai.com). The creation interface is shown in the provided image.

To add your own extension, click "Add extension":

* **Name:** Give your extension a name in the "Name of your Extension" field.
* **Short description:** Write a brief description of the extension.
* **Detail description:** Provide a more detailed explanation of its specialties and the steps required to execute it.
* **Headers:** Define the necessary headers for the API calls. A default "Content-Type" header with the value "application/json" is shown. You can add more headers by clicking "Add Header." The platform also supports securing header values stored in Azure Key Vault.
* **Functions:** Add the specific functions that the extension will perform by clicking "Add Function." These functions can support various API requests, including GET, POST, and PUT, allowing the extension to both retrieve data and trigger actions.
* **Submit:** Once all the details are filled out, click the "Submit" button to finalize the creation of your extension.

### Practical example of using an extension

A researcher configures an extension that communicates with the UvA library catalog API. Now they can use a prompt like:

> "Use the library extension to find the five most recent publications by author 'Adriaan van Dis'. Provide the full APA citations for each publication and a direct link to each in the catalog."
