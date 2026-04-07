---
title: "Part 4: Advanced usage"
id: advanced-usage
sidebar_label: Advanced usage
slug: /advanced-usage
---
## 4.1 Choosing the right Language Model

UvA AI Chat gives you access to a range of advanced AI models (Large Language Models). The default, GPT-4o, is a strong all-rounder and works well for most tasks, but for specific needs, a different model may deliver better results. For simple tasks, you might prefer a smaller, more efficient model that uses less energy. To set up a different default model for your tasks, select the one best suited to your needs in the Settings menu like shown below.

<img src="/img/uploads/screenshot-2026-01-27-111035.png" alt="UvA AI Chat" style={{width: '100%', marginBottom: '2rem'}} />

The table below is a quick reference to help you choose the most suitable AI model for your task. To find out which model works best for your needs, you'll need to experiment - especially if you're running recurring, specific tasks.

### Table 2: Comparison of available AI models

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

- - -

## 4.3 Use the Web Scraper tool

**Web Scraper function**

UvA AI Chat has access to a **`web_scrape`** tool that lets it fetch and read the content of a webpage when you provide a URL. Here's how it works.

**What it does**

| Feature | Description                              |
| ------- | ---------------------------------------- |
| Input   | A full URL (e.g., `https://example.com`) |
| Output  | Page content in **markdown format** (markdown is a lightweight way to format text using simple symbols so it can be easily read and converted into nicely styled documents like web pages.)     |

**What UvA AI Chat can do with the Web Crawler**

* **Summarize** the content of a webpage
* **Extract specific information** (e.g., dates, names, prices, policies)
* **Answer questions** based on the live content of a page

**Limitations**

* Only reads **publicly accessible** pages, no login-protected content
* Reads **static content**, dynamically loaded content (e.g., JavaScript-rendered pages) may not always be fully captured
* Does **not** browse the web autonomously, you need to provide the URL
* UvA AI Chat can only scrape **one page per message**

**How to scrape a webpage:**

To use this functionality, ask the UvA AI Chat to scrape a page for you and insert your page.

"Can you scrape this page and summarize it for me: https://example.com/article"

> Simply paste a URL and tell UvA AI Chat what you'd like to know from it!

- - -

## 4.4 Writing Python code with UvA AI Chat

UvA AI chat can write and run Python code for you to analyse data, create charts, or perform calculations within a separate, safe environment. As per usual, your files stay private and separate from other users. When the AI generates graphs or images, they can appear directly in your conversation. Code is automatically shown in a separate panel where you can view, copy, or edit it. You can use the python functionality without knowing how to write python code, and you can analyse data, create charts, or perform calculations using python without knowing how to edit or write the code yourself. Is it important that the information extracted from the code is actually correct, for example, for education or research? Always check the data manually.

**Using the code**
Once you ask for python code to be generated, a separate window is generated with the code. From here, you can run the code (by clicking *Run Python*) or copy all code lines (by clicking the two pages in the top right corner). 

<img src="/img/uploads/screenshot-2026-04-07-at-17.09.50.png" alt="UvA AI Chat" style={{width: '100%', marginBottom: '2rem'}} />

- - -
