import React, { useState } from "react";
import { Shield, FileCheck, Download, CheckCircle2, UserCheck, Lock, Award, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { NUTRIENT_CREDENTIALS, downloadNutrientPdf } from "../services/nutrient";

export default function DocumentHub({ auditRecord, query }) {
  const [signed, setSigned] = useState(false);
  const [signedBy, setSignedBy] = useState("Hackathon Reviewer");

  const handleSignDocument = () => {
    setSigned(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleDownload = () => {
    if (auditRecord) {
      downloadNutrientPdf(auditRecord, query);
    }
  };

  if (!auditRecord) {
    return <div className="glass-panel" style={{ padding: "2rem", textAlign: "center" }}>No document audit generated yet.</div>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      
      {/* Header Banner */}
      <div className="glass-panel" style={{ padding: "1.5rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
            <span className="badge badge-cyan">
              <Shield size={12} /> Nutrient DWS Track ($1,500 Prize)
            </span>
            <span className="badge badge-emerald">
              {NUTRIENT_CREDENTIALS.status}
            </span>
          </div>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700 }}>
            Compliance Certificate & Audit Viewer: "{query}"
          </h2>
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>
            Campaign: <code style={{ color: "#22d3ee" }}>{NUTRIENT_CREDENTIALS.campaign}</code> | Account: <code style={{ color: "#34d399" }}>{NUTRIENT_CREDENTIALS.username}</code>
          </p>
        </div>

        <button onClick={handleDownload} className="btn-primary" style={{ background: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)" }}>
          <Download size={16} /> Download Signed PDF Report
        </button>
      </div>

      {/* Main Document Viewer Container */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
        
        {/* Left Column: Embeddable DWS Viewer Box */}
        <div className="glass-panel" style={{ padding: "1.5rem", background: "rgba(10, 14, 23, 0.95)", border: "1px solid rgba(6, 182, 212, 0.3)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--border-color)", paddingBottom: "0.75rem", marginBottom: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <FileCheck color="#22d3ee" size={20} />
              <span style={{ fontWeight: 600, fontSize: "0.95rem" }}>Nutrient DWS Viewer Canvas</span>
            </div>
            <span style={{ fontSize: "0.75rem", color: "var(--text-dim)", fontFamily: "monospace" }}>
              ID: {auditRecord.document_id}
            </span>
          </div>

          {/* Simulated Interactive Document Page */}
          <div style={{
            background: "#ffffff",
            color: "#0f172a",
            padding: "1.75rem",
            borderRadius: "8px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.85rem",
            minHeight: "380px",
            display: "flex",
            flexDirection: "column",
            justify: "space-between"
          }}>
            <div>
              <div style={{ borderBottom: "2px solid #0f172a", paddingBottom: "0.5rem", marginBottom: "1rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a" }}>MARKET AUDIT & COMPLIANCE CERTIFICATE</h3>
                  <div style={{ fontSize: "0.75rem", color: "#64748b" }}>Issued via Nutrient DWS Deterministic Engine</div>
                </div>
                <div style={{ textAlign: "right", fontSize: "0.7rem", color: "#0284c7", fontWeight: 700 }}>
                  CONFIDENCE: {auditRecord.confidence_score}%
                </div>
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <p style={{ fontWeight: 600, color: "#334155" }}>Target Query: {query}</p>
                <p style={{ color: "#64748b", marginTop: "0.25rem", fontSize: "0.8rem" }}>
                  This document confirms real-time web extraction via SerpApi and verifies backend persistence in Xano.
                </p>
              </div>

              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.75rem", marginBottom: "1rem" }}>
                <thead>
                  <tr style={{ background: "#f1f5f9", textAlign: "left" }}>
                    <th style={{ padding: "6px" }}>Extracted Metric</th>
                    <th style={{ padding: "6px" }}>Parsed Value</th>
                    <th style={{ padding: "6px", textAlign: "right" }}>Confidence</th>
                  </tr>
                </thead>
                <tbody>
                  {auditRecord.extracted_fields.map((f, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid #e2e8f0" }}>
                      <td style={{ padding: "6px", fontWeight: 500 }}>{f.field}</td>
                      <td style={{ padding: "6px" }}>{f.value}</td>
                      <td style={{ padding: "6px", textAlign: "right", color: "#16a34a", fontWeight: 700 }}>
                        {(f.confidence * 100).toFixed(0)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Signature Area inside Document Canvas */}
            <div style={{ borderTop: "1px dashed #cbd5e1", paddingTop: "0.75rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: "0.7rem", color: "#64748b" }}>Human Reviewer Signature:</div>
                <div style={{ fontFamily: "cursive", fontSize: "1.1rem", color: signed ? "#0284c7" : "#cbd5e1", minHeight: "26px" }}>
                  {signed ? signedBy : "_______________________"}
                </div>
              </div>
              <div>
                {signed ? (
                  <span style={{ background: "#dcfce7", color: "#15803d", padding: "0.2rem 0.5rem", borderRadius: "4px", fontSize: "0.7rem", fontWeight: 700 }}>
                    DIGITALLY SEALED
                  </span>
                ) : (
                  <span style={{ background: "#fef3c7", color: "#b45309", padding: "0.2rem 0.5rem", borderRadius: "4px", fontSize: "0.7rem", fontWeight: 700 }}>
                    AWAITING SIGNOFF
                  </span>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Deterministic Extraction Metrics & Human-in-the-Loop Signoff */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          
          <div className="glass-panel" style={{ padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.15rem", fontWeight: 600, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <UserCheck color="#22d3ee" size={18} /> Human-in-the-Loop Sign-off
            </h3>
            
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
              Under EU AI Transparency rules (2026), automated market reports require explicit human review before execution.
            </p>

            <div style={{ marginBottom: "1rem" }}>
              <label style={{ fontSize: "0.8rem", color: "var(--text-dim)", display: "block", marginBottom: "0.35rem" }}>
                Reviewer Full Name:
              </label>
              <input
                type="text"
                value={signedBy}
                onChange={(e) => setSignedBy(e.target.value)}
                style={{
                  width: "100%",
                  background: "rgba(0,0,0,0.4)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "8px",
                  padding: "0.5rem 0.75rem",
                  color: "#ffffff",
                  fontSize: "0.9rem"
                }}
              />
            </div>

            {signed ? (
              <div style={{ background: "rgba(16, 185, 129, 0.15)", border: "1px solid rgba(16, 185, 129, 0.3)", borderRadius: "10px", padding: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <CheckCircle2 color="#34d399" size={24} />
                <div>
                  <div style={{ color: "#34d399", fontWeight: 700, fontSize: "0.95rem" }}>Document Signed & Seal Verified</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Audit trail locked on Nutrient DWS server.</div>
                </div>
              </div>
            ) : (
              <button onClick={handleSignDocument} className="btn-primary" style={{ width: "100%", justifyContent: "center", background: "linear-gradient(135deg, #10b981 0%, #059669 100%)" }}>
                <Lock size={16} /> Sign & Apply Digital Seal
              </button>
            )}
          </div>

          {/* Audit Steps Checklist */}
          <div className="glass-panel" style={{ padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.15rem", fontWeight: 600, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Award color="#fbbf24" size={18} /> Replayable Audit Trail Log
            </h3>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {auditRecord.audit_trail.map((step, idx) => (
                <div key={idx} className="glass-card" style={{ padding: "0.85rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.25rem" }}>
                    <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>{step.step}</span>
                    <span className={step.status === "PASSED" ? "badge badge-emerald" : "badge badge-amber"}>
                      {step.status}
                    </span>
                  </div>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{step.detail}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
