import React, { useState } from "react";
import { Search, Sparkles, Cpu, Database, FileText, ArrowRight, TrendingUp, CheckCircle, Zap, Shield } from "lucide-react";

export default function Dashboard({ onSearch, isLoading, currentQuery, stats }) {
  const [inputQuery, setInputQuery] = useState(currentQuery || "AI Document Processing & Signatures");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputQuery.trim()) {
      onSearch(inputQuery);
    }
  };

  const presetQueries = [
    "AI Document Processing & Signatures",
    "SaaS CRM Tools 2026",
    "Real-time E-Commerce Pricing",
    "DevNetwork Hackathon APIs"
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      
      {/* Hero Banner with Search */}
      <div className="glass-panel" style={{ padding: "3rem 2rem", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute",
          top: "-50px",
          right: "-50px",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none"
        }} />

        <div style={{ maxWidth: "850px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
            <span className="badge badge-indigo">
              <Zap size={12} /> Real-Time Web Intelligence + Deterministic Audit
            </span>
          </div>
          
          <h1 style={{ fontSize: "2.75rem", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
            Autonomous Market Analysis & <span style={{ background: "linear-gradient(135deg, #6366f1 0%, #34d399 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Compliant Contract Generation</span>
          </h1>
          
          <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
            Extract live search data with <strong style={{ color: "#818cf8" }}>SerpApi</strong>, store structured models in <strong style={{ color: "#34d399" }}>Xano</strong>, and generate auditable PDF reports with <strong style={{ color: "#22d3ee" }}>Nutrient DWS</strong>.
          </p>

          {/* Search Form */}
          <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0.75rem", background: "rgba(10, 14, 23, 0.9)", padding: "0.5rem", borderRadius: "14px", border: "1px solid rgba(99, 102, 241, 0.4)", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
            <div style={{ display: "flex", alignItems: "center", paddingLeft: "1rem", color: "var(--text-muted)", flex: 1 }}>
              <Search size={20} style={{ marginRight: "0.75rem" }} />
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder="Enter company name, product category, or market topic..."
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "#ffffff",
                  fontSize: "1.05rem",
                  fontFamily: "var(--font-body)"
                }}
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary"
              style={{ padding: "0.85rem 1.75rem", fontSize: "1rem" }}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin" style={{ width: "18px", height: "18px", border: "2px solid #ffffff", borderTopColor: "transparent", borderRadius: "50%" }} />
                  Analyzing Web...
                </>
              ) : (
                <>
                  <Sparkles size={18} /> Analyze & Generate
                </>
              )}
            </button>
          </form>

          {/* Presets */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginTop: "1.25rem", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--text-dim)" }}>Quick Benchmarks:</span>
            {presetQueries.map((q, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setInputQuery(q);
                  onSearch(q);
                }}
                className="btn-secondary"
                style={{ padding: "0.25rem 0.65rem", fontSize: "0.75rem", borderRadius: "20px" }}
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Key Metrics Widgets */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
        
        <div className="glass-card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>SerpApi Signals</span>
            <div style={{ background: "rgba(99, 102, 241, 0.2)", padding: "0.4rem", borderRadius: "8px", color: "#818cf8" }}>
              <Cpu size={18} />
            </div>
          </div>
          <div style={{ fontSize: "1.85rem", fontWeight: 700, fontFamily: "var(--font-heading)" }}>
            {stats.organicCount} Organic
          </div>
          <p style={{ fontSize: "0.8rem", color: "var(--text-dim)", marginTop: "0.25rem" }}>
            Parsed from live Google Search SERP
          </p>
        </div>

        <div className="glass-card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Xano Database Sync</span>
            <div style={{ background: "rgba(16, 185, 129, 0.2)", padding: "0.4rem", borderRadius: "8px", color: "#34d399" }}>
              <Database size={18} />
            </div>
          </div>
          <div style={{ fontSize: "1.85rem", fontWeight: 700, fontFamily: "var(--font-heading)" }}>
            Active (CLI)
          </div>
          <p style={{ fontSize: "0.8rem", color: "var(--text-dim)", marginTop: "0.25rem" }}>
            MarketPulse_DevNetwork_2026 Table
          </p>
        </div>

        <div className="glass-card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Nutrient DWS Audit</span>
            <div style={{ background: "rgba(6, 182, 212, 0.2)", padding: "0.4rem", borderRadius: "8px", color: "#22d3ee" }}>
              <Shield size={18} />
            </div>
          </div>
          <div style={{ fontSize: "1.85rem", fontWeight: 700, fontFamily: "var(--font-heading)" }}>
            98.4% Confidence
          </div>
          <p style={{ fontSize: "0.8rem", color: "var(--text-dim)", marginTop: "0.25rem" }}>
            Deterministic extraction & human sign-off
          </p>
        </div>

        <div className="glass-card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Hackathon Status</span>
            <div style={{ background: "rgba(245, 158, 11, 0.2)", padding: "0.4rem", borderRadius: "8px", color: "#fbbf24" }}>
              <TrendingUp size={18} />
            </div>
          </div>
          <div style={{ fontSize: "1.85rem", fontWeight: 700, fontFamily: "var(--font-heading)" }}>
            3-Track Stack
          </div>
          <p style={{ fontSize: "0.8rem", color: "var(--text-dim)", marginTop: "0.25rem" }}>
            SerpApi + Xano + Nutrient + Grand Prize
          </p>
        </div>

      </div>

      {/* Feature Navigation Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
        
        <div className="glass-panel" style={{ padding: "1.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <Cpu color="#818cf8" size={20} />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 600 }}>1. SerpApi Live Search Engine</h3>
            </div>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
              Inspect raw Google Search, Shopping pricing structures, and News items fetched live via SerpApi JSON API.
            </p>
          </div>
          <button onClick={() => onSearch(inputQuery)} className="btn-secondary" style={{ width: "100%", justifyContent: "center" }}>
            View SerpApi JSON Data <ArrowRight size={14} />
          </button>
        </div>

        <div className="glass-panel" style={{ padding: "1.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <FileText color="#22d3ee" size={20} />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 600 }}>2. Nutrient DWS Audit Hub</h3>
            </div>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
              Embeds the interactive Nutrient DWS document viewer, deterministic extraction confidence scores, and digital signature signoff.
            </p>
          </div>
          <button onClick={() => onSearch(inputQuery)} className="btn-secondary" style={{ width: "100%", justifyContent: "center" }}>
            View Audit & Export PDF <ArrowRight size={14} />
          </button>
        </div>

        <div className="glass-panel" style={{ padding: "1.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <Database color="#34d399" size={20} />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 600 }}>3. Xano Backend Console</h3>
            </div>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
              Verify Xano REST API payloads, database schema records, static hosting bundle status, and CLI configuration.
            </p>
          </div>
          <button onClick={() => onSearch(inputQuery)} className="btn-secondary" style={{ width: "100%", justifyContent: "center" }}>
            Inspect Xano Payload <ArrowRight size={14} />
          </button>
        </div>

      </div>

    </div>
  );
}
