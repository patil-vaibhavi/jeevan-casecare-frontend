import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../common/Logo";
import {
  useLanguage,
} from "../../context/LanguageContext";

export default function PublicNavbar() {
  const {
    language,
    setLanguage,
    languages,
    t,
  } = useLanguage();

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("jeevanTheme") === "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );

    localStorage.setItem(
      "jeevanTheme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <nav className="navbar navbar-expand-lg jc-public-nav">
      <div className="container py-2">
        <Logo />

        <div className="d-flex gap-2 align-items-center">

          {/* Language Selector */}
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            <i
              className="bi bi-translate"
              style={{
                position: "absolute",
                left: "11px",
                zIndex: 2,
                color: "var(--jc-cyan)",
                fontSize: "15px",
                pointerEvents: "none",
              }}
            />

            <select
              value={language}
              onChange={(event) =>
                setLanguage(event.target.value)
              }
              aria-label="Select language"
              title="Select language"
              style={{
                height: "42px",
                minWidth: "112px",
                padding:
                  "0 28px 0 32px",
                borderRadius: "12px",
                border:
                  "1px solid var(--jc-border)",
                background:
                  "var(--jc-panel)",
                color:
                  "var(--jc-text)",
                fontSize: "11px",
                fontWeight: 700,
                outline: "none",
                cursor: "pointer",
                appearance: "auto",
              }}
            >
              {languages.map((item) => (
                <option
                  key={item.code}
                  value={item.code}
                >
                  {item.nativeName}
                </option>
              ))}
            </select>
          </div>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={() =>
              setDarkMode((current) => !current)
            }
            title={
              darkMode
                ? t.switchToLight
                : t.switchToDark
            }
            aria-label={
              darkMode
                ? t.switchToLight
                : t.switchToDark
            }
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "12px",
              border:
                "1px solid var(--jc-border)",
              background:
                "var(--jc-panel)",
              color:
                "var(--jc-text)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition:
                "all 0.2s ease",
            }}
          >
            <i
              className={
                darkMode
                  ? "bi bi-sun-fill"
                  : "bi bi-moon-stars-fill"
              }
              style={{
                fontSize: "16px",
              }}
            />
          </button>

          <Link
            to="/login"
            className="btn btn-link jc-nav-link"
          >
            {t.login}
          </Link>

          <Link
            to="/choose-role"
            className="btn jc-btn-primary"
          >
            {t.getStarted}
          </Link>
        </div>
      </div>
    </nav>
  );
}