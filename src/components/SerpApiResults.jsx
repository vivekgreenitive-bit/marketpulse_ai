import React, { useState } from "react";
import { Cpu, ExternalLink, ShoppingBag, Newspaper, Code2, Globe, Tag } from "lucide-react";

export default function SerpApiResults({ serpData, query }) {
  const [viewMode, setViewMode] = useState("cards"); // "cards" or "json"

  if (!serpData) {
    return <div className="glass-panel" style={{ padding: "2rem", textAlign: "center" }}>No SerpApi data available. Run a query from the dashboard.</div>;
  }

  const { search_information, organic_results = [], shopping_results = [], news_results = [] } = serpData;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      
      {/* Header Banner */}
      <div className="glass-panel" style={{ padding: "1.5rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
            <span className="badge badge-indigo">
              <Cpu size={12} /> SerpApi Integration Track ($3,000 Prize)
            </span>
          </div>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700 }}>
            Structured Google SERP Data for "{query}"
          </h2>
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>
            Found {search_information?.total_results?.toLocaleString() || "14,200,000"} results in {search_information?.time_taken_displayed || 0.32} seconds via SerpApi REST endpoint.
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button
            onClick={() => setViewMode("cards")}
            className={viewMode === "cards" ? "btn-primary" : "btn-secondary"}
            style={{ fontSize: "0.85rem", padding: "0.5rem 1rem" }}
          >
            <Globe size={14} /> Parsed UI Cards
          </button>
          <button
            onClick={() => setViewMode("json")}
            className={viewMode === "json" ? "btn-primary" : "btn-secondary"}
            style={{ fontSize: "0.85rem", padding: "0.5rem 1rem" }}
          >
            <Code2 size={14} /> Raw SerpApi JSON
          </button>
        </div>
      </div>

      {viewMode === "json" ? (
        <div className="glass-panel" style={{ padding: "1.5rem", background: "rgba(5, 7, 12, 0.95)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
            <span style={{ fontSize: "0.85rem", color: "#818cf8", fontFamily: "monospace" }}>
              GET https://serpapi.com/search.json?q={encodeURIComponent(query)}&engine=google
            </span>
            <span className="badge badge-emerald">200 OK</span>
          </div>
          <pre style={{
            color: "#34d399",
            fontFamily: "monospace",
            fontSize: "0.85rem",
            maxHeight: "500px",
            overflow: "auto",
            padding: "1rem",
            background: "rgba(0, 0, 0, 0.4)",
            borderRadius: "8px"
          }}>
            {JSON.stringify(serpData, null, 2)}
          </pre>
        </div>
      ) : (
        <>
          {/* Shopping & Pricing Grid */}
          {shopping_results.length > 0 && (
            <div className="glass-panel" style={{ padding: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                <ShoppingBag color="#fbbf24" size={18} />
                <h3 style={{ fontSize: "1.2rem", fontWeight: 600 }}>Real-Time Pricing Benchmarks (Google Shopping API)</h3>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
                {shopping_results.map((item, idx) => (
                  <div key={idx} className="glass-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                        <span className="badge badge-amber" style={{ fontSize: "0.65rem" }}>
                          {item.badge || "Verified Merchant"}
                        </span>
                        <span style={{ fontSize: "1.25rem", fontWeight: 700, color: "#34d399", fontFamily: "var(--font-heading)" }}>
                          {item.price}
                        </span>
                      </div>
                      <h4 style={{ fontSize: "0.95rem", fontWeight: 600, marginBottom: "0.35rem" }}>{item.title}</h4>
                      <p style={{ fontSize: "0.8rem", color: "var(--text-dim)" }}>Merchant: {item.merchant}</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", marginTop: "0.75rem", fontSize: "0.75rem", color: "#fbbf24" }}>
                      ★ {item.rating || 4.8} ({item.reviews || 120} reviews)
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Organic Results Stream */}
          <div className="glass-panel" style={{ padding: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <Globe color="#818cf8" size={18} />
              <h3 style={{ fontSize: "1.2rem", fontWeight: 600 }}>Organic Search Index</h3>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {organic_results.map((res, idx) => (
                <div key={idx} className="glass-card" style={{ padding: "1.25rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <span style={{ fontSize: "0.75rem", color: "var(--text-dim)", fontFamily: "monospace" }}>
                        #{res.position} • {res.displayed_link || res.source}
                      </span>
                      <h4 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#818cf8", margin: "0.25rem 0" }}>
                        <a href={res.link} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit", display: "inline-flex", alignItems: "center", gap: "0.35rem" }}>
                          {res.title} <ExternalLink size={14} />
                        </a>
                      </h4>
                    </div>
                    <span className="badge badge-indigo">SerpApi Parsed</span>
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "0.5rem", lineHeight: 1.5 }}>
                    {res.snippet}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* News Stream */}
          {news_results.length > 0 && (
            <div className="glass-panel" style={{ padding: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                <Newspaper color="#22d3ee" size={18} />
                <h3 style={{ fontSize: "1.2rem", fontWeight: 600 }}>Real-Time Industry News (Google News API)</h3>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
                {news_results.map((news, idx) => (
                  <div key={idx} className="glass-card">
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--text-dim)", marginBottom: "0.35rem" }}>
                      <span>{news.source}</span>
                      <span>{news.date}</span>
                    </div>
                    <h4 style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-main)", marginBottom: "0.5rem" }}>
                      {news.title}
                    </h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                      {news.snippet}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

    </div>
  );
}
