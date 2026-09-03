# MarketPulse.AI — Autonomous Market Intelligence & Compliant Contract Engine

MarketPulse.AI is an enterprise AI application that combines live web search intelligence, scalable cloud backend persistence, and deterministic document audit workflows.

---

## ⚡ Core Platform Capabilities

1. **Real-Time Web Search & SERP Engine (SerpApi)**
   * Uses SerpApi search, shopping, and news JSON endpoints to extract real-time web intelligence and competitor price benchmarks for AI RAG analysis.
2. **Scalable Backend Architecture (Xano)**
   * Powers structured market research database models, CLI workspace direct pushing, and REST API project endpoints.
3. **Deterministic Document Audit Hub (Nutrient DWS)**
   * Integrates Nutrient DWS for 98.4% deterministic confidence scoring, replayable audit logs, embeddable DWS viewer canvas, and digital signature sealing under 2026 compliance mandates.
4. **Full-Stack User Experience**
   * High-aesthetic responsive web app with Greenitive brand colors, live metric dashboards, competitor price drift monitoring, and 1-click executive pitch deck export.

---

## 🚀 Quick Start & Local Run

```bash
# Clone repository
git clone https://github.com/vivekgreenitive-bit/marketpulse_ai.git
cd marketpulse_ai

# Install dependencies
npm install

# Start local development server
npm run dev
```

Build production bundle:
```bash
npm run build
```

---

## 🛠️ Architecture & API Data Flow

```
[User Search Query] ──> [React + Vite Frontend Dashboard]
                                 │
         ┌───────────────────────┼───────────────────────┐
         ▼                       ▼                       ▼
  [SerpApi REST Engine]   [Xano Cloud Database]   [Nutrient DWS Audit Viewer]
   (Google SERP Data)       (REST Database)         (PDF & Digital Signature)
```

---

## 📄 License
MIT © 2026 MarketPulse.AI
