
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const newCaseTranslations = {
  en: {
    newPatientCase: "New Patient Case",
    startHealthCase: "Start your health case",
    intro:
      "Jeevan CaseCare will guide you through a structured case-taking conversation.",
    chooseMedicalSystem: "Choose medical system",
    selectCare:
      "Select the type of care for this case.",
    generalMedicine: "General Medicine",
    generalDescription:
      "For common health concerns, symptoms, illnesses, medications, lifestyle and general medical history.",
    symptoms: "Symptoms",
    medicalHistory: "Medical History",
    medications: "Medications",
    lifestyle: "Lifestyle",
    ayurveda: "Ayurveda",
    ayurvedaDescription:
      "For Ayurvedic case-taking including prakriti, vikriti, lifestyle, digestion, sleep and traditional health assessment.",
    prakriti: "Prakriti",
    vikriti: "Vikriti",
    digestion: "Digestion",
    backDashboard: "Back to dashboard",
    continue: "Continue",
  },

  mr: {
    newPatientCase: "नवीन रुग्ण केस",
    startHealthCase: "तुमची आरोग्य केस सुरू करा",
    intro:
      "जीवन केसकेअर तुम्हाला संरचित केस-टेकिंग संभाषणातून मार्गदर्शन करेल.",
    chooseMedicalSystem: "वैद्यकीय प्रणाली निवडा",
    selectCare:
      "या केससाठी आवश्यक उपचार पद्धती निवडा.",
    generalMedicine: "जनरल मेडिसिन",
    generalDescription:
      "सामान्य आरोग्य समस्या, लक्षणे, आजार, औषधे, जीवनशैली आणि सामान्य वैद्यकीय इतिहासासाठी.",
    symptoms: "लक्षणे",
    medicalHistory: "वैद्यकीय इतिहास",
    medications: "औषधे",
    lifestyle: "जीवनशैली",
    ayurveda: "आयुर्वेद",
    ayurvedaDescription:
      "प्रकृती, विकृती, जीवनशैली, पचन, झोप आणि पारंपरिक आरोग्य मूल्यांकनासह आयुर्वेदिक केस-टेकिंगसाठी.",
    prakriti: "प्रकृती",
    vikriti: "विकृती",
    digestion: "पचन",
    backDashboard: "डॅशबोर्डवर परत जा",
    continue: "पुढे जा",
  },

  hi: {
    newPatientCase: "नया मरीज केस",
    startHealthCase: "अपना स्वास्थ्य केस शुरू करें",
    intro:
      "जीवन केसकेयर आपको एक संरचित केस-टेकिंग बातचीत के माध्यम से मार्गदर्शन करेगा।",
    chooseMedicalSystem: "चिकित्सा प्रणाली चुनें",
    selectCare:
      "इस केस के लिए देखभाल का प्रकार चुनें।",
    generalMedicine: "जनरल मेडिसिन",
    generalDescription:
      "सामान्य स्वास्थ्य समस्याओं, लक्षणों, बीमारियों, दवाओं, जीवनशैली और सामान्य चिकित्सा इतिहास के लिए।",
    symptoms: "लक्षण",
    medicalHistory: "चिकित्सा इतिहास",
    medications: "दवाएं",
    lifestyle: "जीवनशैली",
    ayurveda: "आयुर्वेद",
    ayurvedaDescription:
      "प्रकृति, विकृति, जीवनशैली, पाचन, नींद और पारंपरिक स्वास्थ्य मूल्यांकन सहित आयुर्वेदिक केस-टेकिंग के लिए।",
    prakriti: "प्रकृति",
    vikriti: "विकृति",
    digestion: "पाचन",
    backDashboard: "डैशबोर्ड पर वापस जाएं",
    continue: "जारी रखें",
  },

  gu: {
    newPatientCase: "નવો દર્દી કેસ",
    startHealthCase: "તમારો આરોગ્ય કેસ શરૂ કરો",
    intro:
      "જીવન કેસકેર તમને એક સંરચિત કેસ-ટેકિંગ વાતચીત દ્વારા માર્ગદર્શન આપશે.",
    chooseMedicalSystem: "તબીબી પદ્ધતિ પસંદ કરો",
    selectCare:
      "આ કેસ માટે સંભાળનો પ્રકાર પસંદ કરો.",
    generalMedicine: "જનરલ મેડિસિન",
    generalDescription:
      "સામાન્ય આરોગ્ય સમસ્યાઓ, લક્ષણો, બીમારીઓ, દવાઓ, જીવનશૈલી અને સામાન્ય તબીબી ઇતિહાસ માટે.",
    symptoms: "લક્ષણો",
    medicalHistory: "તબીબી ઇતિહાસ",
    medications: "દવાઓ",
    lifestyle: "જીવનશૈલી",
    ayurveda: "આયુર્વેદ",
    ayurvedaDescription:
      "પ્રકૃતિ, વિકૃતિ, જીવનશૈલી, પાચન, ઊંઘ અને પરંપરાગત આરોગ્ય મૂલ્યાંકન સહિત આયુર્વેદિક કેસ-ટેકિંગ માટે.",
    prakriti: "પ્રકૃતિ",
    vikriti: "વિકૃતિ",
    digestion: "પાચન",
    backDashboard: "ડેશબોર્ડ પર પાછા જાઓ",
    continue: "આગળ વધો",
  },

  kn: {
    newPatientCase: "ಹೊಸ ರೋಗಿ ಪ್ರಕರಣ",
    startHealthCase: "ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರಕರಣವನ್ನು ಪ್ರಾರಂಭಿಸಿ",
    intro:
      "ಜೀವನ್ ಕೇರ್‌ಕೇರ್ ನಿಮಗೆ ಸಂರಚಿತ ಕೇಸ್-ಟೇಕಿಂಗ್ ಸಂಭಾಷಣೆಯ ಮೂಲಕ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತದೆ.",
    chooseMedicalSystem: "ವೈದ್ಯಕೀಯ ವ್ಯವಸ್ಥೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    selectCare:
      "ಈ ಪ್ರಕರಣಕ್ಕೆ ಅಗತ್ಯವಿರುವ ಆರೈಕೆಯ ಪ್ರಕಾರವನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
    generalMedicine: "ಜನರಲ್ ಮೆಡಿಸಿನ್",
    generalDescription:
      "ಸಾಮಾನ್ಯ ಆರೋಗ್ಯ ಸಮಸ್ಯೆಗಳು, ಲಕ್ಷಣಗಳು, ಕಾಯಿಲೆಗಳು, ಔಷಧಿಗಳು, ಜೀವನಶೈಲಿ ಮತ್ತು ಸಾಮಾನ್ಯ ವೈದ್ಯಕೀಯ ಇತಿಹಾಸಕ್ಕಾಗಿ.",
    symptoms: "ಲಕ್ಷಣಗಳು",
    medicalHistory: "ವೈದ್ಯಕೀಯ ಇತಿಹಾಸ",
    medications: "ಔಷಧಿಗಳು",
    lifestyle: "ಜೀವನಶೈಲಿ",
    ayurveda: "ಆಯುರ್ವೇದ",
    ayurvedaDescription:
      "ಪ್ರಕೃತಿ, ವಿಕೃತಿ, ಜೀವನಶೈಲಿ, ಜೀರ್ಣಕ್ರಿಯೆ, ನಿದ್ರೆ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಆರೋಗ್ಯ ಮೌಲ್ಯಮಾಪನ ಸೇರಿದಂತೆ ಆಯುರ್ವೇದಿಕ ಕೇಸ್-ಟೇಕಿಂಗ್‌ಗಾಗಿ.",
    prakriti: "ಪ್ರಕೃತಿ",
    vikriti: "ವಿಕೃತಿ",
    digestion: "ಜೀರ್ಣಕ್ರಿಯೆ",
    backDashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹಿಂತಿರುಗಿ",
    continue: "ಮುಂದುವರಿಸಿ",
  },

  ta: {
    newPatientCase: "புதிய நோயாளர் வழக்கு",
    startHealthCase: "உங்கள் சுகாதார வழக்கைத் தொடங்குங்கள்",
    intro:
      "ஜீவன் கேஸ்கேர் ஒரு கட்டமைக்கப்பட்ட வழக்கு-பதிவு உரையாடல் மூலம் உங்களுக்கு வழிகாட்டும்.",
    chooseMedicalSystem: "மருத்துவ முறையைத் தேர்ந்தெடுக்கவும்",
    selectCare:
      "இந்த வழக்கிற்கான சிகிச்சை வகையைத் தேர்ந்தெடுக்கவும்.",
    generalMedicine: "பொது மருத்துவம்",
    generalDescription:
      "பொதுவான உடல்நலப் பிரச்சினைகள், அறிகுறிகள், நோய்கள், மருந்துகள், வாழ்க்கை முறை மற்றும் பொதுவான மருத்துவ வரலாற்றிற்காக.",
    symptoms: "அறிகுறிகள்",
    medicalHistory: "மருத்துவ வரலாறு",
    medications: "மருந்துகள்",
    lifestyle: "வாழ்க்கை முறை",
    ayurveda: "ஆயுர்வேதம்",
    ayurvedaDescription:
      "பிரகிருதி, விக்ருதி, வாழ்க்கை முறை, செரிமானம், தூக்கம் மற்றும் பாரம்பரிய உடல்நல மதிப்பீடு உள்ளிட்ட ஆயுர்வேத வழக்கு-பதிவிற்காக.",
    prakriti: "பிரகிருதி",
    vikriti: "விக்ருதி",
    digestion: "செரிமானம்",
    backDashboard: "டாஷ்போர்டுக்குத் திரும்பு",
    continue: "தொடரவும்",
  },
};

export default function NewCasePage() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const t =
    newCaseTranslations[language] ||
    newCaseTranslations.en;

  const [selectedSystem, setSelectedSystem] = useState(null);

  const handleContinue = () => {
    if (!selectedSystem) return;

    navigate(
      `/patient/case-taking?system=${selectedSystem}`
    );
  };

  const generalMedicineTags = [
    t.symptoms,
    t.medicalHistory,
    t.medications,
    t.lifestyle,
  ];

  const ayurvedaTags = [
    t.prakriti,
    t.vikriti,
    t.lifestyle,
    t.digestion,
  ];

  return (
    <div className="container-fluid px-0">

      {/* =====================================================
          HEADER
          ===================================================== */}

      <div className="mb-4">

        <div
          className="text-uppercase fw-semibold mb-2"
          style={{
            color: "#0891b2",
            fontSize: "11px",
            letterSpacing: "2px",
          }}
        >
          {t.newPatientCase}
        </div>

        <h1 className="fw-bold mb-2">
          {t.startHealthCase}
        </h1>

        <p
          className="mb-0"
          style={{
            color: "var(--jc-muted)",
            fontSize: "14px",
          }}
        >
          {t.intro}
        </p>

      </div>


      {/* =====================================================
          STEP INDICATOR
          ===================================================== */}

      <div className="jc-dashboard-card mb-4">

        <div className="d-flex align-items-center gap-3">

          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              width: "40px",
              height: "40px",
              minWidth: "40px",
              borderRadius: "50%",
              background:
                "rgba(8,145,178,0.10)",
              border:
                "1px solid rgba(8,145,178,0.30)",
              color: "#0891b2",
              fontWeight: "800",
              fontSize: "14px",
            }}
          >
            1
          </div>

          <div>

            <div
              className="fw-semibold"
              style={{
                color: "var(--jc-text)",
                fontSize: "14px",
              }}
            >
              {t.chooseMedicalSystem}
            </div>

            <div
              className="small"
              style={{
                color: "var(--jc-muted)",
                marginTop: "3px",
              }}
            >
              {t.selectCare}
            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          SYSTEM CARDS
          ===================================================== */}

      <div className="row g-4">

        {/* ===================================================
            GENERAL MEDICINE
            =================================================== */}

        <div className="col-lg-6">

          <button
            type="button"
            onClick={() =>
              setSelectedSystem("general-medicine")
            }
            className="w-100 text-start border-0 p-0"
            style={{
              background: "transparent",
            }}
          >

            <div
              className="jc-dashboard-card h-100"
              style={{
                cursor: "pointer",

                border:
                  selectedSystem === "general-medicine"
                    ? "1px solid #0891b2"
                    : "1px solid var(--jc-border)",

                boxShadow:
                  selectedSystem === "general-medicine"
                    ? "0 12px 35px rgba(8,145,178,0.14)"
                    : "0 8px 30px var(--jc-shadow)",

                transform:
                  selectedSystem === "general-medicine"
                    ? "translateY(-2px)"
                    : "none",

                transition:
                  "all 0.2s ease",
              }}
            >

              <div className="d-flex justify-content-between align-items-start">

                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "15px",
                    background:
                      "rgba(8,145,178,0.10)",
                    color: "#0891b2",
                    border:
                      "1px solid rgba(8,145,178,0.14)",
                  }}
                >
                  <i
                    className="bi bi-heart-pulse"
                    style={{
                      fontSize: "25px",
                    }}
                  />
                </div>

                {selectedSystem ===
                  "general-medicine" && (
                  <i
                    className="bi bi-check-circle-fill"
                    style={{
                      color: "#0891b2",
                      fontSize: "22px",
                    }}
                  />
                )}

              </div>


              <h3
                className="fw-bold mt-4 mb-2"
                style={{
                  color: "var(--jc-text)",
                  fontSize: "22px",
                }}
              >
                {t.generalMedicine}
              </h3>


              <p
                className="mb-4"
                style={{
                  color: "var(--jc-muted)",
                  fontSize: "14px",
                  lineHeight: "1.7",
                }}
              >
                {t.generalDescription}
              </p>


              <div className="d-flex flex-wrap gap-2">

                {generalMedicineTags.map((item) => (
                  <span
                    key={item}
                    style={{
                      padding: "6px 10px",
                      borderRadius: "7px",
                      background:
                        "rgba(8,145,178,0.07)",
                      border:
                        "1px solid rgba(8,145,178,0.15)",
                      color: "var(--jc-muted)",
                      fontSize: "11px",
                      fontWeight: "600",
                    }}
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>

          </button>

        </div>


        {/* ===================================================
            AYURVEDA
            =================================================== */}

        <div className="col-lg-6">

          <button
            type="button"
            onClick={() =>
              setSelectedSystem("ayurveda")
            }
            className="w-100 text-start border-0 p-0"
            style={{
              background: "transparent",
            }}
          >

            <div
              className="jc-dashboard-card h-100"
              style={{
                cursor: "pointer",

                border:
                  selectedSystem === "ayurveda"
                    ? "1px solid #059669"
                    : "1px solid var(--jc-border)",

                boxShadow:
                  selectedSystem === "ayurveda"
                    ? "0 12px 35px rgba(5,150,105,0.14)"
                    : "0 8px 30px var(--jc-shadow)",

                transform:
                  selectedSystem === "ayurveda"
                    ? "translateY(-2px)"
                    : "none",

                transition:
                  "all 0.2s ease",
              }}
            >

              <div className="d-flex justify-content-between align-items-start">

                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "15px",
                    background:
                      "rgba(5,150,105,0.10)",
                    color: "#059669",
                    border:
                      "1px solid rgba(5,150,105,0.14)",
                  }}
                >
                  <i
                    className="bi bi-flower1"
                    style={{
                      fontSize: "25px",
                    }}
                  />
                </div>

                {selectedSystem === "ayurveda" && (
                  <i
                    className="bi bi-check-circle-fill"
                    style={{
                      color: "#059669",
                      fontSize: "22px",
                    }}
                  />
                )}

              </div>


              <h3
                className="fw-bold mt-4 mb-2"
                style={{
                  color: "var(--jc-text)",
                  fontSize: "22px",
                }}
              >
                {t.ayurveda}
              </h3>


              <p
                className="mb-4"
                style={{
                  color: "var(--jc-muted)",
                  fontSize: "14px",
                  lineHeight: "1.7",
                }}
              >
                {t.ayurvedaDescription}
              </p>


              <div className="d-flex flex-wrap gap-2">

                {ayurvedaTags.map((item) => (
                  <span
                    key={item}
                    style={{
                      padding: "6px 10px",
                      borderRadius: "7px",
                      background:
                        "rgba(5,150,105,0.07)",
                      border:
                        "1px solid rgba(5,150,105,0.15)",
                      color: "var(--jc-muted)",
                      fontSize: "11px",
                      fontWeight: "600",
                    }}
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>

          </button>

        </div>

      </div>


      {/* =====================================================
          FOOTER ACTIONS
          ===================================================== */}

      <div
        className="d-flex justify-content-between align-items-center mt-4"
      >

        <button
          type="button"
          className="btn btn-outline-secondary px-3"
          onClick={() =>
            navigate("/patient/dashboard")
          }
        >
          <i className="bi bi-arrow-left me-2" />

          {t.backDashboard}
        </button>


        <button
          type="button"
          className="btn px-4 py-2"
          disabled={!selectedSystem}
          onClick={handleContinue}
          style={{
            background:
              selectedSystem === "ayurveda"
                ? "#059669"
                : "#0891b2",

            color: "#ffffff",

            border: "none",

            borderRadius: "9px",

            fontWeight: "600",

            opacity: selectedSystem ? 1 : 0.45,

            cursor: selectedSystem
              ? "pointer"
              : "not-allowed",
          }}
        >

          {t.continue}

          <i className="bi bi-arrow-right ms-2" />

        </button>

      </div>

    </div>
  );
}
