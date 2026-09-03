import React from "react";
import { Sparkles, Database, ShieldCheck, Search, FileText, Cpu } from "lucide-react";

export default function Navbar({ activeTab, setActiveTab }) {
  return (
    <header className="glass-panel" style={{ borderRadius: 0, borderTop: "none", borderLeft: "none", borderRight: "none", position: "sticky", top: 0, zIndex: 50 }}>
      <div className="container-xl" style={{ height: "76px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        
        {/* Brand Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{
            width: "42px",
            height: "42px",
            borderRadius: "12px",
            background: "linear-gradient(135deg, #1a7a3c 0%, #22a857 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 20px rgba(26, 122, 60, 0.3)"
          }}>
            <Sparkles size={22} color="#ffffff" />
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.35rem", color: "var(--text-main)" }}>
                MarketPulse<span style={{ color: "var(--g700)" }}>.AI</span>
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "#ffffff", padding: "0.35rem", borderRadius: "12px", border: "1px solid var(--border-color)" }}>
          <button
            onClick={() => setActiveTab("dashboard")}
            className={activeTab === "dashboard" ? "btn-primary" : "btn-secondary"}
            style={{ padding: "0.45rem 0.9rem", fontSize: "0.85rem" }}
          >
            <Search size={16} /> Dashboard
          </button>
          <button
            onClick={() => setActiveTab("serpapi")}
            className={activeTab === "serpapi" ? "btn-primary" : "btn-secondary"}
            style={{ padding: "0.45rem 0.9rem", fontSize: "0.85rem" }}
          >
            <Cpu size={16} /> Web Intelligence
          </button>
          <button
            onClick={() => setActiveTab("analysis")}
            className={activeTab === "analysis" ? "btn-primary" : "btn-secondary"}
            style={{ padding: "0.45rem 0.9rem", fontSize: "0.85rem" }}
          >
            <Sparkles size={16} /> AI Insights
          </button>
          <button
            onClick={() => setActiveTab("documents")}
            className={activeTab === "documents" ? "btn-primary" : "btn-secondary"}
            style={{ padding: "0.45rem 0.9rem", fontSize: "0.85rem" }}
          >
            <FileText size={16} /> Compliance & Audit
          </button>
          <button
            onClick={() => setActiveTab("xano")}
            className={activeTab === "xano" ? "btn-primary" : "btn-secondary"}
            style={{ padding: "0.45rem 0.9rem", fontSize: "0.85rem" }}
          >
            <Database size={16} /> Data Workspace
          </button>
        </nav>

      </div>
    </header>
  );
}
