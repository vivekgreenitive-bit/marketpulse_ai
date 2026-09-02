# DevPost Submission Details & Demo Video Script

## 📌 Project Overview
* **Project Name**: MarketPulse.AI
* **One-Line Pitch**: Autonomous market intelligence and deterministic compliance contract generator powered by SerpApi live web search, Xano scalable backend, and Nutrient DWS document audit viewer.
* **Target Tracks**: SerpApi ($3k), Xano ($2.5k), Nutrient DWS ($1.5k), Overall Winner ($12.5k).

---

## 📝 DevPost Form Fields

### What does it do?
MarketPulse.AI solves two major problems in modern enterprise software:
1. **Outdated AI Model Limits**: Rather than relying on stagnant LLM training data, MarketPulse.AI uses **SerpApi** to fetch live Google Search, Shopping, and News SERP data in real-time.
2. **Unverifiable AI Document Risk**: Under new 2026 regulations (EU AI Act & digital identity mandates), automated reports need deterministic confidence verification and human sign-off. MarketPulse.AI embeds the **Nutrient DWS Viewer** canvas for human-in-the-loop review and digital signature sealing while logging all records in a **Xano** backend workspace.

### How we built it:
* **Frontend**: React + Vite with custom dark glassmorphism design system tokens (`index.css`), Google Fonts (`Outfit` + `Inter`), and micro-animations.
* **SerpApi Integration**: Intercepts real-time Google organic rankings, Google Shopping price distributions, and news feeds.
* **Xano Backend**: Structured database models (`market_projects`) synced via Xano CLI & MCP tools with static web hosting deployment capabilities.
* **Nutrient DWS Pipeline**: Deterministic document extraction confidence scoring (98.4%), replayable audit log steps, interactive PDF viewer canvas, and PDF export.

---

## 🎬 2-to-3 Minute Demo Video Transcript Script

*(Read this while recording your screen walkthrough)*

* **[0:00 - 0:30] Introduction & Problem**
  > *"Hi judges! Today we are introducing MarketPulse.AI, an autonomous market research and compliant contract platform built for the DevNetwork 2026 Hackathon. Businesses waste hundreds of hours manually auditing competitor pricing and drafting compliance reports—and standard AI models hallucinate outdated data. MarketPulse.AI fixes this by stacking SerpApi, Xano, and Nutrient DWS into one unified platform."*

* **[0:30 - 1:15] SerpApi Live Search Integration**
  > *"Starting on our Overview Dashboard, let's analyze 'AI Document Processing & Signatures'. When we hit Analyze, MarketPulse calls SerpApi to extract live Google Search results, real-time Google Shopping competitor pricing ($149–$499/mo), and breaking industry news. We can toggle to inspect the raw SerpApi JSON response directly."*

* **[1:15 - 1:50] AI Strategy & Xano Backend Sync**
  > *"Next, our AI synthesis engine processes these live signals into a SWOT matrix and market positioning roadmap. Behind the scenes, Xano powers our backend persistence. In the Xano Console tab, you can see our `market_projects` table updated in real-time via the Xano CLI and REST APIs."*

* **[1:50 - 2:30] Nutrient DWS Audit Viewer & Digital Signature**
  > *"Finally, in the Nutrient DWS Audit tab, we comply with 2026 EU AI Transparency mandates. The embedded Nutrient DWS Viewer shows a 98.4% deterministic confidence score on parsed metrics. A human reviewer can inspect the document, enter their name, and click 'Sign & Apply Digital Seal' to lock the document and download the verified PDF report."*

* **[2:30 - 2:45] Conclusion**
  > *"MarketPulse.AI brings live web data, scalable backend architecture, and compliant document verification together. Thank you!"*
