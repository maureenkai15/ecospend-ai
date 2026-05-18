# EcoSpend AI 🌱

> **AI-powered personal finance + sustainability tracker** — built as a production-quality portfolio project.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![FastAPI](https://img.shields.io/badge/FastAPI-0.115-009688?style=flat-square&logo=fastapi)
![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?style=flat-square&logo=supabase)
![LangChain](https://img.shields.io/badge/LangChain-Agents-FF6B35?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript)

---

## What is EcoSpend AI?

EcoSpend AI is a full-stack web application that combines **personal finance tracking** with **sustainability analytics** and **AI-powered coaching**. Users can track expenses, monitor their carbon footprint, get AI-generated insights, predict future spending with ML models, and earn eco points for sustainable choices.

Built to demonstrate real-world engineering skills across the full stack — from database design to agentic AI workflows.

---

## Live Demo

🔗 **[ecospend-ai.vercel.app](https://ecospend-ai.vercel.app)** *(frontend)*

---

## Features

### 💳 Finance Tracking
- Manual expense entry with category classification
- Receipt OCR scanning (Tesseract)
- Budget limits per category with alert thresholds
- Anomaly detection on unusual transactions

### 🌱 Sustainability
- Carbon footprint tracking per expense category
- Integration with Climatiq API for CO₂ calculations
- Monthly eco score and trend analysis
- Green alternatives suggested by AI

### 🤖 AI Agents (LangGraph + Ollama)
| Agent | Role |
|-------|------|
| **Spending Analyzer** | Identifies patterns and anomalies in spending |
| **Budget Planner** | Forecasts next month's spend using ML |
| **Eco Coach** | Recommends sustainable swaps |
| **Habit Coach** | Tracks streaks and awards badges |

### 📊 ML Pipeline (Scikit-learn)
- **Budget Predictor** — Ridge Regression on historical spend
- **Anomaly Detector** — Isolation Forest per user
- **Category Classifier** — TF-IDF + Logistic Regression on merchant names

### 🏆 Gamification
- XP points for eco-friendly choices
- Badges: Mindful Spender, Green Saver, Streak Master
- Rank system: Seedling → Green Saver → Eco Champion

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Next.js 14, TypeScript, TailwindCSS |
| **Backend** | FastAPI, Python 3.11 |
| **Database** | Supabase (PostgreSQL + Auth + Storage) |
| **AI Orchestration** | LangGraph, LangChain |
| **LLM** | Ollama (llama3.2) — runs locally, free |
| **Embeddings** | sentence-transformers (all-MiniLM-L6-v2) |
| **Vector DB** | ChromaDB |
| **ML** | Scikit-learn, Pandas, NumPy |
| **OCR** | Tesseract via pytesseract |
| **Deployment** | Vercel (frontend) + Render (backend) |

---

## Architecture

```
┌─────────────────────────────────────────────┐
│           Next.js Frontend (Vercel)          │
│   Dashboard · Expenses · AI Chat · Reports  │
└──────────────────┬──────────────────────────┘
                   │ REST API
┌──────────────────▼──────────────────────────┐
│           FastAPI Backend (Render)           │
│   /expenses · /budgets · /agents · /ml      │
└──────┬──────────────┬───────────────────────┘
       │              │
┌──────▼──────┐ ┌─────▼────────────────────────┐
│  Supabase   │ │     AI / ML Layer             │
│  PostgreSQL │ │  LangGraph Agents             │
│  Auth       │ │  ChromaDB (RAG)               │
│  Storage    │ │  Scikit-learn Models          │
└─────────────┘ │  Ollama LLM                   │
                └──────────────────────────────┘
```

---

## Database Schema

9 tables in Supabase PostgreSQL with Row Level Security enabled on all tables:

- `profiles` — extends Supabase auth, stores currency + eco points
- `expenses` — core transactions with carbon_kg and anomaly flag
- `budgets` — category limits with alert thresholds
- `carbon_logs` — detailed CO₂ ledger per expense
- `ai_insights` — persisted agent outputs
- `achievements` — badges and XP awards
- `ml_predictions` — model outputs with confidence scores
- `receipts` — OCR scan results and parsed data
- `agent_memory` — persistent LangGraph state across sessions

---

## Local Setup

### Prerequisites
- Node.js 18+
- Python 3.11+
- [Ollama](https://ollama.ai) installed

### 1. Clone
```bash
git clone https://github.com/maureenkai15/ecospend-ai.git
cd ecospend-ai
```

### 2. Backend
```bash
cd ecospend-backend
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env            # fill in your Supabase keys
uvicorn app.main:app --reload   # → http://localhost:8000/docs
```

### 3. Frontend
```bash
cd ecospend-frontend
npm install
cp .env.local.example .env.local  # fill in your keys
npm run dev                         # → http://localhost:3000
```

### 4. LLM (local, free)
```bash
ollama serve
ollama pull llama3.2
```

### 5. Database
- Create a free project at [supabase.com](https://supabase.com)
- Run `ecospend-backend/db/schema.sql` in the SQL Editor
- Copy your Project URL + anon key + service key into `.env` files

---

## Environment Variables

### Frontend (`ecospend-frontend/.env.local`)
```
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Backend (`ecospend-backend/.env`)
```
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_KEY=eyJ...
JWT_SECRET=your-secret-key
OLLAMA_BASE_URL=http://localhost:11434
CHROMA_PERSIST_DIR=./chroma_db
CLIMATIQ_API_KEY=your-free-key
```

---

## Deployment

| Service | Platform | Cost |
|---------|----------|------|
| Frontend | Vercel | Free |
| Backend | Render | Free |
| Database | Supabase | Free |
| LLM | Ollama (local) or HuggingFace | Free |

---

## Project Structure

```
ecospend-ai/
├── ecospend-frontend/          # Next.js app
│   ├── app/
│   │   └── dashboard/          # Main pages
│   │       ├── page.tsx        # Overview
│   │       ├── expenses/       # Expense tracker
│   │       ├── budgets/        # Budget manager
│   │       ├── sustainability/ # Eco tracker
│   │       ├── ai-chat/        # AI agents interface
│   │       └── reports/        # Downloads
│   ├── components/             # Reusable UI
│   ├── lib/api/                # Typed API clients
│   └── types/                  # TypeScript types
│
└── ecospend-backend/           # FastAPI app
    ├── app/
    │   ├── api/routes/         # REST endpoints
    │   ├── ai/agents/          # LangGraph agents
    │   ├── ml/                 # Scikit-learn models
    │   ├── services/           # Business logic
    │   └── db/                 # Supabase client + schemas
    └── db/schema.sql           # Full database schema
```

---

## Roadmap

- [x] Dashboard UI with spending analytics
- [x] Expense CRUD with category breakdown
- [x] Budget tracking with health indicators
- [x] AI agent chat interface (4 agents)
- [x] Carbon footprint tracker
- [x] Reports page
- [ ] Receipt OCR upload flow
- [ ] Live ML predictions (budget + anomaly)
- [ ] Real LangGraph agent integration
- [ ] Supabase Auth login/signup flow
- [ ] PDF report generation
- [ ] Mobile responsive polish

---

## About

Built by **Maureen** — Accountancy & Data Science student, building at the intersection of AI, sustainability, and fintech.

This project demonstrates: full-stack development, AI/ML engineering, database design, agentic workflows, and deployment — all with free tools.

---

*Made with 🌱 and a lot of `npm run dev` restarts*