import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      className="jc-logo text-decoration-none"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "11px",
        textDecoration: "none",
        lineHeight: 1,
      }}
    >
      {/* Logo Icon */}
      <span
        className="jc-logo-mark"
        style={{
          width: "38px",
          height: "38px",
          minWidth: "38px",
          borderRadius: "11px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, var(--jc-cyan), #06b6d4)",
          color: "#ffffff",
          boxShadow:
            "0 6px 16px rgba(8, 145, 178, 0.18)",
        }}
      >
        <i
          className="bi bi-heart-pulse-fill"
          style={{
            fontSize: "18px",
          }}
        />
      </span>

      {/* Brand Text */}
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "4px",
          minWidth: 0,
        }}
      >
        <span
          style={{
            display: "block",
            whiteSpace: "nowrap",
            fontSize: "19px",
            lineHeight: 1.05,
            fontWeight: 800,
            letterSpacing: "-0.5px",
            color: "var(--jc-text)",
          }}
        >
          <strong
            style={{
              color: "var(--jc-cyan)",
              fontWeight: 800,
            }}
          >
            Jeevan
          </strong>{" "}
          CaseCare
        </span>

        <span
          style={{
            display: "block",
            whiteSpace: "nowrap",
            fontSize: "8px",
            lineHeight: 1.2,
            fontWeight: 600,
            letterSpacing: "0.25px",
            color: "var(--jc-muted)",
          }}
        >
          AI-powered patient case-taking & EHR
        </span>
      </span>
    </Link>
  );
}