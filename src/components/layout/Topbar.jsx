import React, { useEffect, useState } from "react";

export default function Topbar({ role = "patient" }) {
  const [user, setUser] = useState(null);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("jeevanTheme") || "dark";
  });

  // =========================================================
  // LOAD LOGGED-IN USER
  // =========================================================

  useEffect(() => {
    const loadUser = () => {
      try {
        const storedUser =
          localStorage.getItem("jeevanUser");

        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);

          /*
           * Only use the stored user when the role matches
           * this Topbar's role.
           */
          if (parsedUser?.role === role) {
            setUser(parsedUser);
          } else {
            setUser(null);
          }
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error(
          "Unable to load Jeevan user:",
          error
        );

        setUser(null);
      }
    };

    loadUser();

    window.addEventListener(
      "jeevanUserUpdated",
      loadUser
    );

    return () => {
      window.removeEventListener(
        "jeevanUserUpdated",
        loadUser
      );
    };
  }, [role]);

  // =========================================================
  // APPLY THEME
  // =========================================================

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme
    );

    localStorage.setItem(
      "jeevanTheme",
      theme
    );
  }, [theme]);

  // =========================================================
  // TOGGLE THEME
  // =========================================================

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark"
        ? "light"
        : "dark"
    );
  };

  // =========================================================
  // ROLE-BASED USER DETAILS
  // =========================================================

  let fallbackName = "Jeevan Patient";
  let fallbackSubtitle = "Jeevan Patient";

  if (role === "doctor") {
    fallbackName = "Doctor";
    fallbackSubtitle = "Medical Practitioner";
  }

  if (role === "emergency") {
    fallbackName = "Emergency Provider";
    fallbackSubtitle = "Emergency Provider";
  }

  if (role === "admin") {
    fallbackName = "Admin";
    fallbackSubtitle = "Jeevan Administrator";
  }

  // =========================================================
  // NAME
  // =========================================================

  const fullName =
    user?.name ||
    user?.fullName ||
    user?.emergencyProviderName ||
    user?.doctorName ||
    fallbackName;

  const cleanName = fullName
    .replace(/^Dr\.\s*/i, "")
    .trim();

  const firstName =
    cleanName.split(/\s+/)[0] ||
    fallbackName;

  // Prevent unused-variable warning if project linting checks it.
  void firstName;

  // =========================================================
  // INITIALS
  // =========================================================

  const initials = (() => {
    const parts = cleanName
      .split(/\s+/)
      .filter(Boolean);

    if (parts.length >= 2) {
      return (
        parts[0][0] +
        parts[parts.length - 1][0]
      ).toUpperCase();
    }

    return cleanName
      .slice(0, 2)
      .toUpperCase();
  })();

  // =========================================================
  // DISPLAY NAME
  // =========================================================

  let displayName = cleanName;

  if (role === "doctor") {
    displayName = `Dr. ${cleanName}`;
  }

  // =========================================================
  // SUBTITLE
  // =========================================================

  let subtitle = fallbackSubtitle;

  if (role === "doctor") {
    subtitle =
      user?.specialization ||
      user?.speciality ||
      "Medical Practitioner";
  }

  if (role === "emergency") {
    subtitle = "Emergency Provider";
  }

  if (role === "admin") {
    subtitle = "Jeevan Administrator";
  }

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <header className="jc-topbar">

      {/* SEARCH */}

      <div className="jc-search">
        <i className="bi bi-search" />

        <input
          placeholder={
            role === "doctor"
              ? "Search patients, IDs or cases..."
              : role === "emergency"
              ? "Search emergency records..."
              : role === "admin"
              ? "Search users or verification requests..."
              : "Search your health records..."
          }
        />
      </div>

      {/* RIGHT SIDE */}

      <div className="d-flex align-items-center gap-2">

        {/* THEME BUTTON */}

        <button
          type="button"
          className="jc-theme-toggle"
          onClick={toggleTheme}
          title={
            theme === "dark"
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
          aria-label={
            theme === "dark"
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
        >
          <i
            className={
              theme === "dark"
                ? "bi bi-sun-fill"
                : "bi bi-moon-stars-fill"
            }
          />
        </button>

        {/* NOTIFICATIONS */}

        <button
          type="button"
          className="jc-icon-btn"
          title="Notifications"
          aria-label="Notifications"
        >
          <i className="bi bi-bell" />
          <span />
        </button>

        {/* USER */}

        <div className="jc-user-chip">

          <div className="jc-avatar">
            {initials}
          </div>

          <div>
            <strong>
              {displayName}
            </strong>

            <small>
              {subtitle}
            </small>
          </div>

          <i className="bi bi-chevron-down small" />

        </div>

      </div>

    </header>
  );
}