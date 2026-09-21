import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DoctorDashboard() {
  const navigate = useNavigate();

  // ---------------------------------------------------------
  // DOCTOR
  // ---------------------------------------------------------

  const [doctor] = useState(() => {
    try {
      const storedUser =
        localStorage.getItem(
          "jeevanUser"
        );

      if (!storedUser) {
        return null;
      }

      const parsedUser =
        JSON.parse(storedUser);

      if (
        parsedUser?.role !==
        "doctor"
      ) {
        return null;
      }

      return parsedUser;
    } catch (error) {
      console.error(
        "Unable to read doctor identity:",
        error
      );

      return null;
    }
  });

  const doctorName =
    doctor?.name ||
    doctor?.fullName ||
    "Doctor";

  const cleanDoctorName =
    doctorName
      .replace(/^Dr\.\s*/i, "")
      .trim();

  const displayDoctorName =
    cleanDoctorName
      ? `Dr. ${cleanDoctorName}`
      : "Doctor";

  // ---------------------------------------------------------
  // CASE DATA
  // ---------------------------------------------------------

  const [caseData] = useState(() => {
    try {
      const storedSession =
        sessionStorage.getItem(
          "jeevanCaseData"
        );

      const storedLocal =
        localStorage.getItem(
          "jeevanCaseData"
        );

      const stored =
        storedSession || storedLocal;

      if (!stored) {
        return null;
      }

      return JSON.parse(stored);
    } catch (error) {
      console.error(
        "Unable to read case data:",
        error
      );

      return null;
    }
  });

  // ---------------------------------------------------------
  // CASE VERIFICATION
  // ---------------------------------------------------------

  const [caseVerified] =
    useState(() => {
      try {
        const storedSession =
          sessionStorage.getItem(
            "jeevanCaseData"
          );

        const storedLocal =
          localStorage.getItem(
            "jeevanCaseData"
          );

        const stored =
          storedSession || storedLocal;

        if (!stored) {
          return false;
        }

        const storedCase =
          JSON.parse(stored);

        return (
          storedCase?.verificationStatus ===
          "Verified"
        );
      } catch (error) {
        console.error(
          "Unable to read case verification status:",
          error
        );

        return false;
      }
    });

  // ---------------------------------------------------------
  // COLOR SYSTEM
  // SAME AS CASE SUMMARY
  // ---------------------------------------------------------

  const isAyurveda =
    caseData?.system ===
    "ayurveda";

  const accent = isAyurveda
    ? "#059669"
    : "#0891b2";

  const accentBackground =
    isAyurveda
      ? "rgba(5,150,105,0.10)"
      : "rgba(8,145,178,0.10)";

  const systemLabel =
    isAyurveda
      ? "Ayurveda"
      : "General Medicine";

  // ---------------------------------------------------------
  // CASE DETAILS
  // ---------------------------------------------------------

  const patientName =
    caseData?.patientName ||
    caseData?.patient?.name ||
    "Patient Name";

  const caseId =
    caseData?.caseId ||
    "JC-DEMO-001";

  const caseType =
    caseData?.systemLabel ||
    systemLabel;

  const verificationStatus =
    caseData?.verificationStatus ||
    "Awaiting Review";

  const patientMessages =
    caseData?.messages?.filter(
      (message) =>
        message?.type === "patient"
    ) || [];

  // ---------------------------------------------------------
  // RENDER
  // ---------------------------------------------------------

  return (
    <div
      className="container-fluid px-0 pb-5"
      style={{
        color: "var(--jc-text)",
      }}
    >
      {/* PAGE HEADER */}

      <div className="d-flex justify-content-between align-items-start mb-4">
        <div>
          <div
            className="text-uppercase fw-semibold mb-2"
            style={{
              color: accent,
              fontSize: "11px",
              letterSpacing: "2px",
            }}
          >
            Clinical Workspace
          </div>

          <div className="d-flex align-items-center gap-3 flex-wrap">
            <h1
              className="fw-bold mb-0"
              style={{
                fontSize: "30px",
                color:
                  "var(--jc-text)",
              }}
            >
              Good morning,{" "}
              {displayDoctorName}
            </h1>

            <span
              className="badge rounded-pill"
              style={{
                color: accent,
                background:
                  accentBackground,
                border:
                  "1px solid " +
                  accent,
              }}
            >
              {systemLabel}
            </span>
          </div>

          <p
            className="mb-0 mt-2"
            style={{
              color:
                "var(--jc-muted)",
              fontSize: "14px",
            }}
          >
            Your clinical workspace for
            reviewing and managing patient
            cases.
          </p>
        </div>
      </div>

      {/* TODAY'S CASE */}

      <div className="jc-dashboard-card mb-4">
        <div className="d-flex justify-content-between align-items-start mb-4">
          <div className="d-flex align-items-center gap-3">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background:
                  accentBackground,
                color: accent,
              }}
            >
              <i
                className="bi bi-person-vcard"
                style={{
                  fontSize: "19px",
                }}
              ></i>
            </div>

            <div>
              <div
                className="fw-semibold"
                style={{
                  color:
                    "var(--jc-text)",
                  fontSize: "15px",
                }}
              >
                Today's Case
              </div>

              <div
                style={{
                  color:
                    "var(--jc-muted)",
                  fontSize: "11px",
                  marginTop: "3px",
                }}
              >
                Current patient case requiring
                your review
              </div>
            </div>
          </div>

          <span
            className="badge rounded-pill"
            style={{
              color:
                caseVerified
                  ? "#16a34a"
                  : accent,
              background:
                caseVerified
                  ? "rgba(34,197,94,0.08)"
                  : accentBackground,
              border:
                caseVerified
                  ? "1px solid rgba(34,197,94,0.16)"
                  : "1px solid " +
                    accent,
            }}
          >
            <i className="bi bi-circle-fill me-1"></i>
            {caseVerified
              ? "Verified"
              : "Awaiting Review"}
          </span>
        </div>

        <div className="row g-3">
          <DashboardInfo
            icon="bi-person"
            label="Patient"
            value={patientName}
            accent={accent}
            background={
              accentBackground
            }
          />

          <DashboardInfo
            icon="bi-fingerprint"
            label="Case ID"
            value={caseId}
            accent={accent}
            background={
              accentBackground
            }
          />

          <DashboardInfo
            icon="bi-hospital"
            label="Case Type"
            value={caseType}
            accent={accent}
            background={
              accentBackground
            }
          />
        </div>

        <div
          className="d-flex justify-content-between align-items-center mt-4 pt-3"
          style={{
            borderTop:
              "1px solid var(--jc-border)",
          }}
        >
          <div>
            <div
              style={{
                color:
                  "var(--jc-subtle)",
                fontSize: "10px",
                fontWeight: "600",
                textTransform:
                  "uppercase",
                letterSpacing:
                  "0.5px",
              }}
            >
              Case Workflow
            </div>

            <div
              className="mt-1"
              style={{
                color:
                  "var(--jc-text)",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              {caseVerified
                ? "Doctor verification completed"
                : patientMessages.length > 0
                ? "AI case-taking completed"
                : "Case awaiting information"}
            </div>
          </div>

          <button
            type="button"
            className="btn"
            onClick={() =>
              navigate(
                "/doctor/verification"
              )
            }
            style={{
              color: "#ffffff",
              background: accent,
              border:
                "1px solid " + accent,
            }}
          >
            <i
              className={
                caseVerified
                  ? "bi bi-eye me-2"
                  : "bi bi-clipboard-check me-2"
              }
            ></i>

            {caseVerified
              ? "View Case"
              : "Review Case"}
          </button>
        </div>
      </div>

      {/* PATIENT QUEUE */}

      <div className="jc-dashboard-card mb-4">
        <SectionHeader
          icon="bi-people"
          title="Patient Queue"
          subtitle="Cases currently available in your clinical workspace"
          accent={accent}
          background={
            accentBackground
          }
        />

        <div className="row g-3">
          <QueueItem
            name="Rahul Patil"
            caseId="JC-1024"
            priority="High"
            status="Awaiting Review"
            accent={accent}
            background={
              accentBackground
            }
          />

          <QueueItem
            name="Radhika Deshmukh"
            caseId="JC-1025"
            priority="Medium"
            status="In Review"
            accent={accent}
            background={
              accentBackground
            }
          />

          <QueueItem
            name={patientName}
            caseId={caseId}
            priority="Medium"
            status={
              caseVerified
                ? "Verified"
                : "Current Case"
            }
            accent={accent}
            background={
              accentBackground
            }
            current
          />
        </div>
      </div>

      {/* QUICK ACTIONS */}

      <div className="jc-dashboard-card">
        <SectionHeader
          icon="bi-lightning-charge"
          title="Quick Actions"
          subtitle="Common clinical workspace actions"
          accent={accent}
          background={
            accentBackground
          }
        />

        <div className="row g-3">
          <QuickAction
            icon="bi-search"
            title="Search Patient"
            description="Find an existing patient or case."
            accent={accent}
            background={
              accentBackground
            }
            onClick={() => {}}
          />

          <QuickAction
            icon="bi-plus-circle"
            title="Start New Case"
            description="Begin a new patient case-taking session."
            accent={accent}
            background={
              accentBackground
            }
            onClick={() => {}}
          />

          <QuickAction
            icon="bi-shield-check"
            title="Access Requests"
            description="Review pending access and case requests."
            accent={accent}
            background={
              accentBackground
            }
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
}

// =========================================================
// SECTION HEADER
// =========================================================

function SectionHeader({
  icon,
  title,
  subtitle,
  accent,
  background,
}) {
  return (
    <div className="d-flex align-items-center gap-3 mb-4">
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          width: "42px",
          height: "42px",
          borderRadius: "11px",
          background,
          color: accent,
        }}
      >
        <i
          className={`bi ${icon}`}
        ></i>
      </div>

      <div>
        <div
          className="fw-semibold"
          style={{
            color:
              "var(--jc-text)",
            fontSize: "15px",
          }}
        >
          {title}
        </div>

        <div
          style={{
            color:
              "var(--jc-muted)",
            fontSize: "11px",
            marginTop: "3px",
          }}
        >
          {subtitle}
        </div>
      </div>
    </div>
  );
}

// =========================================================
// DASHBOARD INFO
// =========================================================

function DashboardInfo({
  icon,
  label,
  value,
  accent,
  background,
}) {
  return (
    <div className="col-md-4">
      <div
        style={{
          padding: "15px",
          border:
            "1px solid var(--jc-border)",
          borderRadius: "9px",
          background:
            "var(--jc-panel-elevated)",
        }}
      >
        <div className="d-flex align-items-center gap-2 mb-2">
          <i
            className={`bi ${icon}`}
            style={{
              color: accent,
              fontSize: "13px",
            }}
          ></i>

          <div
            style={{
              color:
                "var(--jc-subtle)",
              fontSize: "10px",
              fontWeight: "600",
              textTransform:
                "uppercase",
              letterSpacing:
                "0.5px",
            }}
          >
            {label}
          </div>
        </div>

        <div
          style={{
            color:
              "var(--jc-text)",
            fontSize: "13px",
            fontWeight: "600",
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );
}

// =========================================================
// QUEUE ITEM
// =========================================================

function QueueItem({
  name,
  caseId,
  priority,
  status,
  accent,
  background,
  current,
}) {
  const priorityColor =
    priority === "High"
      ? "#e11d48"
      : priority === "Medium"
      ? "#d97706"
      : accent;

  const priorityBackground =
    priority === "High"
      ? "rgba(225,29,72,0.07)"
      : priority === "Medium"
      ? "rgba(217,119,6,0.08)"
      : background;

  return (
    <div className="col-lg-4">
      <div
        style={{
          padding: "16px",
          border:
            current
              ? "1px solid " + accent
              : "1px solid var(--jc-border)",
          borderRadius: "9px",
          background:
            "var(--jc-panel-elevated)",
          height: "100%",
        }}
      >
        <div className="d-flex justify-content-between align-items-start gap-2 mb-3">
          <div>
            <div
              style={{
                color:
                  "var(--jc-text)",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              {name}
            </div>

            <div
              style={{
                color:
                  "var(--jc-muted)",
                fontSize: "11px",
                marginTop: "3px",
              }}
            >
              {caseId}
            </div>
          </div>

          {current && (
            <span
              className="badge rounded-pill"
              style={{
                color: accent,
                background:
                  background,
                border:
                  "1px solid " +
                  accent,
                fontSize: "9px",
              }}
            >
              Current
            </span>
          )}
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <span
            className="badge rounded-pill"
            style={{
              color:
                priorityColor,
              background:
                priorityBackground,
              border:
                "1px solid " +
                priorityColor,
                fontSize: "9px",
            }}
          >
            {priority}
          </span>

          <span
            style={{
              color:
                status === "Verified"
                  ? "#16a34a"
                  : "var(--jc-muted)",
              fontSize: "10px",
              fontWeight: "600",
            }}
          >
            {status}
          </span>
        </div>
      </div>
    </div>
  );
}

// =========================================================
// QUICK ACTION
// =========================================================

function QuickAction({
  icon,
  title,
  description,
  accent,
  background,
  onClick,
}) {
  return (
    <div className="col-lg-4">
      <button
        type="button"
        onClick={onClick}
        className="w-100 text-start"
        style={{
          padding: "16px",
          border:
            "1px solid var(--jc-border)",
          borderRadius: "9px",
          background:
            "var(--jc-panel-elevated)",
          color:
            "var(--jc-text)",
          cursor: "pointer",
        }}
      >
        <div className="d-flex align-items-center gap-3">
          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "11px",
              background,
              color: accent,
              flexShrink: 0,
            }}
          >
            <i
              className={`bi ${icon}`}
            ></i>
          </div>

          <div>
            <div
              style={{
                color:
                  "var(--jc-text)",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              {title}
            </div>

            <div
              style={{
                color:
                  "var(--jc-muted)",
                fontSize: "11px",
                lineHeight: "1.5",
                marginTop: "3px",
              }}
            >
              {description}
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}