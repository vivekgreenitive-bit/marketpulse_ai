import React from "react";
import { Sparkles, Database, ShieldCheck, Search, FileText, Cpu, CheckCircle2 } from "lucide-react";

export default function Navbar({ activeTab, setActiveTab, liveStatus }) {
  return (
    <header className="glass-panel" style={{ borderRadius: 0, borderTop: "none", borderLeft: "none", borderRight: "none", position: "sticky", top: 0, zIndex: 50 }}>
      <div className="container-xl" style={{ height: "76px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        
        {/* Brand Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{
            width: "42px",
            height: "42px",
            borderRadius: "12px",
            background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)"
          }}>
            <Sparkles size={22} color="#ffffff" />
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.35rem", color: "#ffffff" }}>
                MarketPulse<span style={{ color: "#818cf8" }}>.AI</span>
              </span>
              <span className="badge badge-indigo">Hackathon 2026</span>
            </div>
            <p style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
              DevNetwork API World Edition
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "rgba(10, 14, 23, 0.8)", padding: "0.35rem", borderRadius: "12px", border: "1px solid var(--border-color)" }}>
          <button
            onClick={() => setActiveTab("dashboard")}
            className={activeTab === "dashboard" ? "btn-primary" : "btn-secondary"}
            style={{ padding: "0.45rem 0.9rem", fontSize: "0.85rem" }}
          >
            <Search size={16} /> Overview & Search
          </button>
          <button
            onClick={() => setActiveTab("serpapi")}
            className={activeTab === "serpapi" ? "btn-primary" : "btn-secondary"}
            style={{ padding: "0.45rem 0.9rem", fontSize: "0.85rem" }}
          >
            <Cpu size={16} /> SerpApi Live Web
          </button>
          <button
            onClick={() => setActiveTab("analysis")}
            className={activeTab === "analysis" ? "btn-primary" : "btn-secondary"}
            style={{ padding: "0.45rem 0.9rem", fontSize: "0.85rem" }}
          >
            <Sparkles size={16} /> AI Strategy
          </button>
          <button
            onClick={() => setActiveTab("documents")}
            className={activeTab === "documents" ? "btn-primary" : "btn-secondary"}
            style={{ padding: "0.45rem 0.9rem", fontSize: "0.85rem" }}
          >
            <FileText size={16} /> Nutrient DWS Audit
          </button>
          <button
            onClick={() => setActiveTab("xano")}
            className={activeTab === "xano" ? "btn-primary" : "btn-secondary"}
            style={{ padding: "0.45rem 0.9rem", fontSize: "0.85rem" }}
          >
            <Database size={16} /> Xano Backend
          </button>
        </nav>

        {/* Sponsor API Health Indicators */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
              <span className="badge badge-emerald" style={{ padding: "0.15rem 0.45rem", fontSize: "0.65rem" }}>
                <CheckCircle2 size={10} /> SerpApi Ready
              </span>
              <span className="badge badge-indigo" style={{ padding: "0.15rem 0.45rem", fontSize: "0.65rem" }}>
                <CheckCircle2 size={10} /> Xano CLI Sync
              </span>
              <span className="badge badge-cyan" style={{ padding: "0.15rem 0.45rem", fontSize: "0.65rem" }}>
                <CheckCircle2 size={10} /> Nutrient DWS
              </span>
            </div>
            <span style={{ fontSize: "0.7rem", color: "var(--text-dim)", marginTop: "2px" }}>
              Stack Status: Operational
            </span>
          </div>
        </div>

      </div>
    </header>
  );
}
