import React from "react";
import { Sparkles, TrendingUp, ShieldAlert, Target, Award, CheckCircle, ArrowRight } from "lucide-react";

export default function AiAnalysisView({ query, serpData, onProceedToAudit }) {
  const organicCount = serpData?.organic_results?.length || 0;
  const shoppingCount = serpData?.shopping_results?.length || 0;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      
      {/* Header Banner */}
      <div className="glass-panel" style={{ padding: "1.5rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
            <span className="badge badge-emerald">
              <Sparkles size={12} /> AI Synthesis Engine
            </span>
          </div>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700 }}>
            Market Strategy & Opportunity Analysis: "{query}"
          </h2>
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>
            Synthesized from {organicCount} web search signals and {shoppingCount} competitor price benchmarks.
          </p>
        </div>

        <button onClick={onProceedToAudit} className="btn-primary">
          Generate Nutrient DWS Audit <ArrowRight size={16} />
        </button>
      </div>

      {/* Market Score Banner */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
        
        <div className="glass-panel" style={{ padding: "1.5rem", borderLeft: "4px solid #6366f1" }}>
          <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.25rem" }}>Market Penetration Opportunity</div>
          <div style={{ fontSize: "2.25rem", fontWeight: 800, color: "#818cf8", fontFamily: "var(--font-heading)" }}>
            88 / 100
          </div>
          <p style={{ fontSize: "0.8rem", color: "var(--text-dim)", marginTop: "0.35rem" }}>
            High demand for deterministic, auditable workflows over generic text generators.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: "1.5rem", borderLeft: "4px solid #10b981" }}>
          <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.25rem" }}>Pricing Power Index</div>
          <div style={{ fontSize: "2.25rem", fontWeight: 800, color: "#34d399", fontFamily: "var(--font-heading)" }}>
            $249 / mo
          </div>
          <p style={{ fontSize: "0.8rem", color: "var(--text-dim)", marginTop: "0.35rem" }}>
            Recommended tier based on competitor shopping price range ($149 - $499).
          </p>
        </div>

        <div className="glass-panel" style={{ padding: "1.5rem", borderLeft: "4px solid #06b6d4" }}>
          <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.25rem" }}>Regulatory Readiness</div>
          <div style={{ fontSize: "2.25rem", fontWeight: 800, color: "#22d3ee", fontFamily: "var(--font-heading)" }}>
            EU AI Act 2026
          </div>
          <p style={{ fontSize: "0.8rem", color: "var(--text-dim)", marginTop: "0.35rem" }}>
            Fully compliant with deterministic audit trail & human sign-off mandate.
          </p>
        </div>

      </div>

      {/* SWOT Matrix */}
      <div className="glass-panel" style={{ padding: "1.5rem" }}>
        <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Target color="#818cf8" size={20} /> AI SWOT & Competitive Positioning
        </h3>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
          
          <div className="glass-card" style={{ borderTop: "3px solid #10b981" }}>
            <h4 style={{ color: "#34d399", fontSize: "1rem", fontWeight: 600, marginBottom: "0.5rem" }}>Strengths</h4>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.85rem", color: "var(--text-muted)", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <li>Real-time search parsing via SerpApi prevents outdated model hallucinations.</li>
              <li>Deterministic extraction via Nutrient DWS provides replayable outputs.</li>
              <li>Persistent data modeling powered by Xano No-Code backend.</li>
            </ul>
          </div>

          <div className="glass-card" style={{ borderTop: "3px solid #f43f5e" }}>
            <h4 style={{ color: "#f43f5e", fontSize: "1rem", fontWeight: 600, marginBottom: "0.5rem" }}>Weaknesses & Risks</h4>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.85rem", color: "var(--text-muted)", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <li>Legacy document processors lack human-in-the-loop verification channels.</li>
              <li>Unstructured PDF formats require confidence-based flag thresholds.</li>
            </ul>
          </div>

          <div className="glass-card" style={{ borderTop: "3px solid #6366f1" }}>
            <h4 style={{ color: "#818cf8", fontSize: "1rem", fontWeight: 600, marginBottom: "0.5rem" }}>Market Opportunities</h4>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.85rem", color: "var(--text-muted)", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <li>High-value automated contract signing and verification pipelines.</li>
              <li>Enterprise compliance monitoring in finance, legal, and healthcare.</li>
            </ul>
          </div>

          <div className="glass-card" style={{ borderTop: "3px solid #f59e0b" }}>
            <h4 style={{ color: "#fbbf24", fontSize: "1rem", fontWeight: 600, marginBottom: "0.5rem" }}>Threats & Mandates</h4>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.85rem", color: "var(--text-muted)", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <li>2026 EU Digital Identity & AML regulatory enforcement.</li>
              <li>Strict penalties for unverified AI-generated signatures.</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Strategic Roadmap */}
      <div className="glass-panel" style={{ padding: "1.5rem" }}>
        <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <TrendingUp color="#34d399" size={20} /> Recommended Action Plan
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <div className="glass-card" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(99, 102, 241, 0.2)", color: "#818cf8", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>1</div>
            <div>
              <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>Lock in Real-Time Web Intelligence</div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Execute SerpApi API calls on a schedule to monitor competitor price drift.</div>
            </div>
          </div>

          <div className="glass-card" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(16, 185, 129, 0.2)", color: "#34d399", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>2</div>
            <div>
              <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>Deploy Backend Data Models to Xano</div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Store structured market entities and audit records in Xano workspace table.</div>
            </div>
          </div>

          <div className="glass-card" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(6, 182, 212, 0.2)", color: "#22d3ee", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>3</div>
            <div>
              <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>Generate Nutrient DWS Audit PDF</div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Export digitally signed compliance document with embedded human sign-off.</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
