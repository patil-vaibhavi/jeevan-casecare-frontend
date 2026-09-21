
import React from "react";
import { Link } from "react-router-dom";
import PublicNavbar from "../../components/layout/PublicNavbar";
import { useLanguage } from "../../context/LanguageContext";

export default function LandingPage() {
  const { t } = useLanguage();

  const featureChips = [
    {
      icon: "bi-shield-check",
      color: "var(--jc-green)",
      text: t.consent,
    },
    {
      icon: "bi-translate",
      color: "var(--jc-cyan)",
      text: t.multilingual,
    },
    {
      icon: "bi-person-check",
      color: "#0ea5a4",
      text: t.doctorReviewed,
    },
  ];

  const languages = [
    "English",
    "मराठी",
    "हिंदी",
    "ગુજરાતી",
    "ಕನ್ನಡ",
    "தமிழ்",
  ];

  const featureCards = [
    {
      icon: "bi-mic",
      title: t.smarterCaseTaking,
      text: t.smarterCaseTakingText,
      color: "var(--jc-cyan)",
      background: "rgba(8,145,178,0.10)",
    },
    {
      icon: "bi-heart-pulse",
      title: t.traditionalModern,
      text: t.traditionalModernText,
      color: "var(--jc-green)",
      background: "rgba(5,150,105,0.10)",
    },
    {
      icon: "bi-shield-lock",
      title: t.secureCompliant,
      text: t.secureCompliantText,
      color: "#0f766e",
      background: "rgba(8,145,178,0.08)",
    },
    {
      icon: "bi-flower1",
      title: t.betterOutcomes,
      text: t.betterOutcomesText,
      color: "#0284c7",
      background: "rgba(8,145,178,0.08)",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, var(--jc-bg) 0%, var(--jc-panel) 48%, var(--jc-panel-elevated) 100%)",
        color: "var(--jc-text)",
        overflow: "hidden",
        transition: "background 0.25s ease, color 0.25s ease",
      }}
    >
      <PublicNavbar />

      {/* HERO */}
      <section
        style={{
          position: "relative",
          padding: "68px 0 45px",
          overflow: "hidden",
        }}
      >
        {/* Background decorations */}

        <div
          style={{
            position: "absolute",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background: "rgba(8,145,178,0.06)",
            top: "-220px",
            right: "-150px",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "380px",
            height: "380px",
            borderRadius: "50%",
            background: "rgba(5,150,105,0.045)",
            bottom: "-230px",
            left: "-150px",
            pointerEvents: "none",
          }}
        />

        <div className="container">
          <div className="row align-items-center g-5">

            {/* LEFT CONTENT */}

            <div className="col-lg-6">

              {/* Eyebrow */}

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "7px 13px",
                  borderRadius: "999px",
                  background: "rgba(8,145,178,0.08)",
                  border: "1px solid rgba(8,145,178,0.15)",
                  color: "var(--jc-cyan)",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.9px",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#14b8a6",
                    boxShadow:
                      "0 0 0 4px rgba(20,184,166,0.10)",
                    flexShrink: 0,
                  }}
                />

                {t.eyebrow}
              </div>

              {/* Main heading */}

              <h1
                style={{
                  margin: "0 0 20px",
                  fontSize: "clamp(42px, 5vw, 66px)",
                  lineHeight: 1.03,
                  fontWeight: 800,
                  letterSpacing: "-2.8px",
                  color: "var(--jc-text)",
                }}
              >
                {t.heroTitle1}
                <br />
                {t.heroTitle2}{" "}
                <span
                  style={{
                    color: "var(--jc-cyan)",
                  }}
                >
                  {t.heroHighlight}
                </span>{" "}
                {t.heroTitle3}
              </h1>

              {/* Description */}

              <p
                style={{
                  maxWidth: "590px",
                  marginBottom: "28px",
                  fontSize: "16px",
                  lineHeight: 1.75,
                  color: "var(--jc-muted)",
                }}
              >
                {t.heroDescription}
              </p>

              {/* Feature chips */}

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginBottom: "30px",
                }}
              >
                {featureChips.map((chip) => (
                  <div
                    key={chip.text}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "9px 12px",
                      borderRadius: "10px",
                      background: "var(--jc-panel)",
                      border: "1px solid var(--jc-border)",
                      color: "var(--jc-text-secondary)",
                      fontSize: "11px",
                      fontWeight: 600,
                      boxShadow:
                        "0 5px 18px var(--jc-shadow)",
                    }}
                  >
                    <i
                      className={"bi " + chip.icon}
                      style={{
                        color: chip.color,
                        fontSize: "15px",
                      }}
                    />

                    {chip.text}
                  </div>
                ))}
              </div>

              {/* Buttons */}

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                  marginBottom: "32px",
                }}
              >
                <Link
                  to="/choose-role"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    minHeight: "48px",
                    padding: "0 23px",
                    borderRadius: "11px",
                    textDecoration: "none",
                    background:
                      "linear-gradient(135deg, var(--jc-cyan), #06b6d4)",
                    color: "#ffffff",
                    fontSize: "13px",
                    fontWeight: 700,
                    boxShadow:
                      "0 10px 25px rgba(8,145,178,0.20)",
                  }}
                >
                  {t.getStarted}
                  <i className="bi bi-arrow-right" />
                </Link>

                <Link
                  to="/login"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    minHeight: "48px",
                    padding: "0 23px",
                    borderRadius: "11px",
                    textDecoration: "none",
                    background: "var(--jc-panel)",
                    color: "var(--jc-text)",
                    fontSize: "13px",
                    fontWeight: 700,
                    border: "1px solid var(--jc-border)",
                  }}
                >
                  <i className="bi bi-play-circle" />
                  {t.login}
                </Link>
              </div>

              {/* Languages */}

              <div>
                <div
                  style={{
                    marginBottom: "9px",
                    fontSize: "10px",
                    color: "var(--jc-subtle)",
                    fontWeight: 600,
                  }}
                >
                  {t.availableLanguages}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  {languages.map((language) => (
                    <span
                      key={language}
                      style={{
                        padding: "5px 9px",
                        borderRadius: "7px",
                        background: "var(--jc-panel)",
                        border: "1px solid var(--jc-border)",
                        fontSize: "10px",
                        color: "var(--jc-text-secondary)",
                      }}
                    >
                      {language}
                    </span>
                  ))}

                  <span
                    style={{
                      fontSize: "10px",
                      color: "var(--jc-cyan)",
                      fontWeight: 700,
                    }}
                  >
                    {t.more}
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT VISUAL */}

            <div className="col-lg-6">
              <HeroVisual t={t} />
            </div>
          </div>

          {/* FEATURE CARDS */}

          <div
            className="row g-3"
            style={{
              marginTop: "45px",
            }}
          >
            {featureCards.map((feature) => (
              <div
                className="col-12 col-sm-6 col-lg-3"
                key={feature.title}
              >
                <div
                  style={{
                    height: "100%",
                    padding: "21px",
                    borderRadius: "15px",
                    background: "var(--jc-panel)",
                    border: "1px solid var(--jc-border)",
                    boxShadow:
                      "0 10px 28px var(--jc-shadow)",
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "12px",
                      background: feature.background,
                      color: feature.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                      marginBottom: "14px",
                    }}
                  >
                    <i
                      className={"bi " + feature.icon}
                    />
                  </div>

                  <div
                    style={{
                      marginBottom: "6px",
                      fontSize: "13px",
                      fontWeight: 800,
                      color: "var(--jc-text)",
                    }}
                  >
                    {feature.title}
                  </div>

                  <div
                    style={{
                      fontSize: "10px",
                      lineHeight: 1.6,
                      color: "var(--jc-muted)",
                    }}
                  >
                    {feature.text}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* TRUST FOOTER */}

          <div
            style={{
              marginTop: "30px",
              padding: "18px 10px 0",
              textAlign: "center",
              fontSize: "10px",
              color: "var(--jc-subtle)",
            }}
          >
            <span>{t.betterCare}</span>

            <span style={{ margin: "0 12px" }}>
              •
            </span>

            <span>{t.smarterTechnology}</span>

            <span style={{ margin: "0 12px" }}>
              •
            </span>

            <span>{t.healthierTomorrow}</span>
          </div>
        </div>
      </section>
    </div>
  );
}

/* =========================================================
   HERO VISUAL
   ========================================================= */

function HeroVisual({ t }) {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "550px",
          minHeight: "455px",
          borderRadius: "28px",
          overflow: "hidden",
          background:
            "linear-gradient(145deg, var(--jc-panel-elevated), var(--jc-panel))",
          border: "1px solid rgba(8,145,178,0.18)",
          boxShadow:
            "0 25px 70px var(--jc-shadow)",
        }}
      >
        {/* Background glow */}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 75% 25%, rgba(8,145,178,0.18), transparent 30%), radial-gradient(circle at 25% 75%, rgba(5,150,105,0.12), transparent 30%)",
          }}
        />

        {/* Central medical figure */}

        <div
          style={{
            position: "absolute",
            width: "245px",
            height: "310px",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -43%)",
            borderRadius: "120px 120px 35px 35px",
            background:
              "linear-gradient(180deg, var(--jc-panel), var(--jc-panel-elevated))",
            boxShadow:
              "0 20px 45px var(--jc-shadow)",
            border: "1px solid var(--jc-border)",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "95px",
              height: "95px",
              borderRadius: "50%",
              background:
                "linear-gradient(145deg, #f6c9ad, #eeb99b)",
              top: "38px",
              left: "75px",
            }}
          />

          <div
            style={{
              position: "absolute",
              width: "135px",
              height: "145px",
              borderRadius: "70px 70px 20px 20px",
              background:
                "linear-gradient(180deg, var(--jc-panel), var(--jc-panel-elevated))",
              top: "130px",
              left: "55px",
            }}
          />

          <div
            style={{
              position: "absolute",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              background: "var(--jc-cyan)",
              top: "170px",
              left: "108px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
            }}
          >
            <i className="bi bi-heart-pulse" />
          </div>

          <div
            style={{
              position: "absolute",
              width: "75px",
              height: "5px",
              borderRadius: "5px",
              background: "rgba(8,145,178,0.25)",
              top: "218px",
              left: "85px",
            }}
          />

          <div
            style={{
              position: "absolute",
              width: "110px",
              height: "5px",
              borderRadius: "5px",
              background: "rgba(8,145,178,0.16)",
              top: "233px",
              left: "68px",
            }}
          />
        </div>

        {/* Voice card */}

        <div
          style={{
            position: "absolute",
            top: "45px",
            right: "25px",
            width: "205px",
            padding: "14px 15px",
            borderRadius: "15px",
            background: "var(--jc-panel)",
            border: "1px solid rgba(8,145,178,0.18)",
            boxShadow:
              "0 12px 30px var(--jc-shadow)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "9px",
              marginBottom: "8px",
            }}
          >
            <div
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "9px",
                background: "rgba(8,145,178,0.10)",
                color: "var(--jc-cyan)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i className="bi bi-mic-fill" />
            </div>

            <span
              style={{
                fontSize: "10px",
                color: "var(--jc-cyan)",
                fontWeight: 700,
              }}
            >
              {t.voiceCaseTaking}
            </span>
          </div>

          <div
            style={{
              fontSize: "12px",
              color: "var(--jc-text-secondary)",
              lineHeight: 1.5,
              fontWeight: 600,
            }}
          >
            “मला तीन दिवसांपासून
            <br />
            डोके दुखत आहे.”
          </div>
        </div>

        {/* Live insight */}

        <div
          style={{
            position: "absolute",
            left: "24px",
            top: "130px",
            width: "180px",
            padding: "14px",
            borderRadius: "15px",
            background: "var(--jc-panel)",
            border: "1px solid rgba(8,145,178,0.18)",
            boxShadow:
              "0 12px 30px var(--jc-shadow)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            <span
              style={{
                fontSize: "8px",
                letterSpacing: "1px",
                fontWeight: 800,
                color: "var(--jc-subtle)",
              }}
            >
              {t.liveCaseInsight}
            </span>

            <span
              style={{
                fontSize: "8px",
                fontWeight: 700,
                color: "var(--jc-green)",
                background: "rgba(5,150,105,0.09)",
                padding: "4px 7px",
                borderRadius: "999px",
              }}
            >
              {t.active}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: "3px",
              height: "34px",
              marginBottom: "10px",
            }}
          >
            {[12, 22, 17, 29, 15, 25, 19, 32, 20, 27, 14, 23].map(
              (height, index) => (
                <span
                  key={index}
                  style={{
                    width: "5px",
                    height: height + "px",
                    borderRadius: "4px",
                    background:
                      index % 3 === 0
                        ? "var(--jc-green)"
                        : "var(--jc-cyan)",
                    opacity: 0.75,
                  }}
                />
              )
            )}
          </div>

          <div
            style={{
              fontSize: "12px",
              fontWeight: 750,
              color: "var(--jc-text)",
              marginBottom: "5px",
            }}
          >
            {t.multilingualCaseTaking}
          </div>

          <div
            style={{
              fontSize: "9px",
              color: "var(--jc-muted)",
            }}
          >
            {t.marathiDetected}
          </div>
        </div>

        {/* Doctor verified card */}

        <div
          style={{
            position: "absolute",
            bottom: "32px",
            right: "22px",
            width: "235px",
            padding: "15px",
            borderRadius: "16px",
            background: "var(--jc-panel)",
            border: "1px solid rgba(5,150,105,0.18)",
            boxShadow:
              "0 14px 35px var(--jc-shadow)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "11px",
            }}
          >
            <div
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "12px",
                background: "rgba(5,150,105,0.10)",
                color: "var(--jc-green)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
              }}
            >
              <i className="bi bi-check-circle-fill" />
            </div>

            <div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 800,
                  color: "var(--jc-text)",
                }}
              >
                {t.doctorVerified}
              </div>

              <div
                style={{
                  fontSize: "9px",
                  color: "var(--jc-muted)",
                  marginTop: "3px",
                }}
              >
                {t.trustEveryStep}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

