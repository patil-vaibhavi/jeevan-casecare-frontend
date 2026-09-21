import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const chooseRoleTranslations = {
en: {
secureConsent: "Secure & Consent-Based",
badge: "Better Care · Smarter Technology",
chooseYour: "Choose Your",
role: "Role",
description:
"Select how you want to use Jeevan CaseCare and continue to your personalized healthcare workspace.",
patient: "Patient",
patientDescription:
"Access your health records, appointments, and care journey.",
doctor: "Doctor",
doctorDescription:
"Case-taking, patient management, and clinical records.",
emergencyProvider: "Emergency Provider",
emergencyDescription:
"Access critical patient information during emergencies.",
admin: "Admin",
adminDescription:
"Manage users, doctors, and system settings.",
continue: "Continue",
consentBased: "Consent-based access",
multilingual: "Marathi · Hindi · English",
doctorReviewed: "Doctor-reviewed records",
footer: "Better Care · Smarter Technology · Healthier Tomorrow",
},

mr: {
secureConsent: "सुरक्षित आणि संमती-आधारित",
badge: "उत्तम उपचार · स्मार्ट तंत्रज्ञान",
chooseYour: "तुमची",
role: "भूमिका निवडा",
description:
"तुम्हाला Jeevan CaseCare कसे वापरायचे आहे ते निवडा आणि तुमच्या वैयक्तिक आरोग्य कार्यक्षेत्रात पुढे जा.",
patient: "रुग्ण",
patientDescription:
"तुमच्या आरोग्य नोंदी, भेटी आणि उपचार प्रवासात प्रवेश मिळवा.",
doctor: "डॉक्टर",
doctorDescription:
"केस-टेकिंग, रुग्ण व्यवस्थापन आणि वैद्यकीय नोंदी.",
emergencyProvider: "आपत्कालीन सेवा प्रदाता",
emergencyDescription:
"आपत्कालीन परिस्थितीत महत्त्वाच्या रुग्ण माहितीमध्ये प्रवेश मिळवा.",
admin: "अ‍ॅडमिन",
adminDescription:
"वापरकर्ते, डॉक्टर आणि सिस्टम सेटिंग्ज व्यवस्थापित करा.",
continue: "पुढे जा",
consentBased: "संमतीवर आधारित प्रवेश",
multilingual: "मराठी · हिंदी · इंग्रजी",
doctorReviewed: "डॉक्टरांनी तपासलेल्या नोंदी",
footer: "उत्तम उपचार · स्मार्ट तंत्रज्ञान · निरोगी उद्याचा मार्ग",
},

hi: {
secureConsent: "सुरक्षित और सहमति-आधारित",
badge: "बेहतर देखभाल · स्मार्ट तकनीक",
chooseYour: "अपनी",
role: "भूमिका चुनें",
description:
"चुनें कि आप Jeevan CaseCare का उपयोग कैसे करना चाहते हैं और अपने व्यक्तिगत स्वास्थ्य कार्यक्षेत्र में आगे बढ़ें।",
patient: "मरीज़",
patientDescription:
"अपने स्वास्थ्य रिकॉर्ड, अपॉइंटमेंट और देखभाल की यात्रा तक पहुंचें।",
doctor: "डॉक्टर",
doctorDescription:
"केस-टेकिंग, रोगी प्रबंधन और क्लिनिकल रिकॉर्ड।",
emergencyProvider: "आपातकालीन सेवा प्रदाता",
emergencyDescription:
"आपातकाल के दौरान महत्वपूर्ण रोगी जानकारी तक पहुंचें।",
admin: "एडमिन",
adminDescription:
"उपयोगकर्ताओं, डॉक्टरों और सिस्टम सेटिंग्स को प्रबंधित करें।",
continue: "जारी रखें",
consentBased: "सहमति-आधारित पहुंच",
multilingual: "हिंदी · मराठी · अंग्रेज़ी",
doctorReviewed: "डॉक्टर द्वारा समीक्षा किए गए रिकॉर्ड",
footer: "बेहतर देखभाल · स्मार्ट तकनीक · स्वस्थ कल",
},

gu: {
secureConsent: "સુરક્ષિત અને સંમતિ આધારિત",
badge: "વધુ સારી કાળજી · સ્માર્ટ ટેક્નોલોજી",
chooseYour: "તમારી",
role: "ભૂમિકા પસંદ કરો",
description:
"તમે Jeevan CaseCare નો ઉપયોગ કેવી રીતે કરવા માંગો છો તે પસંદ કરો અને તમારા વ્યક્તિગત હેલ્થકેર વર્કસ્પેસમાં આગળ વધો.",
patient: "દર્દી",
patientDescription:
"તમારા આરોગ્ય રેકોર્ડ, મુલાકાતો અને સારવારની સફર ઍક્સેસ કરો.",
doctor: "ડૉક્ટર",
doctorDescription:
"કેસ-ટેકિંગ, દર્દી વ્યવસ્થાપન અને ક્લિનિકલ રેકોર્ડ્સ.",
emergencyProvider: "ઇમરજન્સી પ્રોવાઇડર",
emergencyDescription:
"કટોકટી દરમિયાન મહત્વપૂર્ણ દર્દીની માહિતી ઍક્સેસ કરો.",
admin: "એડમિન",
adminDescription:
"વપરાશકર્તાઓ, ડૉક્ટરો અને સિસ્ટમ સેટિંગ્સનું સંચાલન કરો.",
continue: "આગળ વધો",
consentBased: "સંમતિ આધારિત ઍક્સેસ",
multilingual: "ગુજરાતી · હિન્દી · અંગ્રેજી",
doctorReviewed: "ડૉક્ટર દ્વારા સમીક્ષા કરાયેલા રેકોર્ડ",
footer: "વધુ સારી કાળજી · સ્માર્ટ ટેક્નોલોજી · સ્વસ્થ આવતીકાલ",
},

kn: {
secureConsent: "ಸುರಕ್ಷಿತ ಮತ್ತು ಒಪ್ಪಿಗೆ ಆಧಾರಿತ",
badge: "ಉತ್ತಮ ಆರೈಕೆ · ಸ್ಮಾರ್ಟ್ ತಂತ್ರಜ್ಞಾನ",
chooseYour: "ನಿಮ್ಮ",
role: "ಪಾತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
description:
"ನೀವು Jeevan CaseCare ಅನ್ನು ಹೇಗೆ ಬಳಸಲು ಬಯಸುತ್ತೀರಿ ಎಂಬುದನ್ನು ಆಯ್ಕೆಮಾಡಿ ಮತ್ತು ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಆರೋಗ್ಯ ಕಾರ್ಯಕ್ಷೇತ್ರಕ್ಕೆ ಮುಂದುವರಿಯಿರಿ.",
patient: "ರೋಗಿ",
patientDescription:
"ನಿಮ್ಮ ಆರೋಗ್ಯ ದಾಖಲೆಗಳು, ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್‌ಗಳು ಮತ್ತು ಆರೈಕೆ ಪ್ರಯಾಣವನ್ನು ಪ್ರವೇಶಿಸಿ.",
doctor: "ವೈದ್ಯರು",
doctorDescription:
"ಕೇಸ್-ಟೇಕಿಂಗ್, ರೋಗಿ ನಿರ್ವಹಣೆ ಮತ್ತು ಕ್ಲಿನಿಕಲ್ ದಾಖಲೆಗಳು.",
emergencyProvider: "ತುರ್ತು ಸೇವಾ ಪೂರೈಕೆದಾರ",
emergencyDescription:
"ತುರ್ತು ಸಂದರ್ಭಗಳಲ್ಲಿ ಪ್ರಮುಖ ರೋಗಿ ಮಾಹಿತಿಯನ್ನು ಪ್ರವೇಶಿಸಿ.",
admin: "ಅಡ್ಮಿನ್",
adminDescription:
"ಬಳಕೆದಾರರು, ವೈದ್ಯರು ಮತ್ತು ಸಿಸ್ಟಮ್ ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ನಿರ್ವಹಿಸಿ.",
continue: "ಮುಂದುವರಿಸಿ",
consentBased: "ಒಪ್ಪಿಗೆ ಆಧಾರಿತ ಪ್ರವೇಶ",
multilingual: "ಕನ್ನಡ · ಹಿಂದಿ · ಇಂಗ್ಲಿಷ್",
doctorReviewed: "ವೈದ್ಯರಿಂದ ಪರಿಶೀಲಿಸಲಾದ ದಾಖಲೆಗಳು",
footer: "ಉತ್ತಮ ಆರೈಕೆ · ಸ್ಮಾರ್ಟ್ ತಂತ್ರಜ್ಞಾನ · ಆರೋಗ್ಯಕರ ನಾಳೆ",
},

ta: {
secureConsent: "பாதுகாப்பான மற்றும் ஒப்புதல் அடிப்படையிலான",
badge: "சிறந்த பராமரிப்பு · ஸ்மார்ட் தொழில்நுட்பம்",
chooseYour: "உங்கள்",
role: "பாத்திரத்தைத் தேர்ந்தெடுக்கவும்",
description:
"Jeevan CaseCare-ஐ எவ்வாறு பயன்படுத்த விரும்புகிறீர்கள் என்பதைத் தேர்ந்தெடுத்து, உங்கள் தனிப்பட்ட சுகாதார பணியிடத்திற்குத் தொடரவும்.",
patient: "நோயாளர்",
patientDescription:
"உங்கள் மருத்துவ பதிவுகள், சந்திப்புகள் மற்றும் பராமரிப்பு பயணத்தை அணுகவும்.",
doctor: "மருத்துவர்",
doctorDescription:
"கேஸ்-டேக்கிங், நோயாளர் மேலாண்மை மற்றும் மருத்துவ பதிவுகள்.",
emergencyProvider: "அவசர சேவை வழங்குநர்",
emergencyDescription:
"அவசரநிலைகளின் போது முக்கியமான நோயாளர் தகவல்களை அணுகவும்.",
admin: "நிர்வாகி",
adminDescription:
"பயனர்கள், மருத்துவர்கள் மற்றும் கணினி அமைப்புகளை நிர்வகிக்கவும்.",
continue: "தொடரவும்",
consentBased: "ஒப்புதல் அடிப்படையிலான அணுகல்",
multilingual: "தமிழ் · இந்தி · ஆங்கிலம்",
doctorReviewed: "மருத்துவரால் மதிப்பாய்வு செய்யப்பட்ட பதிவுகள்",
footer: "சிறந்த பராமரிப்பு · ஸ்மார்ட் தொழில்நுட்பம் · ஆரோக்கியமான நாளை",
},
};

export default function ChooseRolePage() {
const { language } = useLanguage();

const t =
chooseRoleTranslations[language] ||
chooseRoleTranslations.en;

const roles = [
{
title: t.patient,
description: t.patientDescription,
icon: "bi-person-heart",
className: "patient",
to: "/login?role=patient",
enabled: true,
},
{
title: t.doctor,
description: t.doctorDescription,
icon: "bi-heart-pulse",
className: "doctor",
to: "/login?role=doctor",
enabled: true,
},
{
title: t.emergencyProvider,
description: t.emergencyDescription,
icon: "bi-shield-plus",
className: "emergency",
to: "/login?role=emergency",
enabled: true,
},
{
title: t.admin,
description: t.adminDescription,
icon: "bi-gear",
className: "admin",
to: "/login?role=admin",
enabled: true,
},
];

return (
<div
style={{
minHeight: "100vh",
background: "var(--jc-public-bg)",
color: "var(--jc-public-text)",
padding: "32px 20px",
position: "relative",
overflow: "hidden",
}}
>
{/* Decorative background shapes */}
<div
style={{
position: "absolute",
width: "360px",
height: "360px",
borderRadius: "50%",
background: "rgba(8, 145, 178, 0.06)",
top: "-150px",
right: "-100px",
pointerEvents: "none",
}}
/>

```
  <div
    style={{
      position: "absolute",
      width: "300px",
      height: "300px",
      borderRadius: "50%",
      background: "rgba(5, 150, 105, 0.05)",
      bottom: "-130px",
      left: "-100px",
      pointerEvents: "none",
    }}
  />

  <div
    style={{
      maxWidth: "1180px",
      margin: "0 auto",
      position: "relative",
      zIndex: 1,
    }}
  >
    {/* Header / Brand */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "55px",
        gap: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              "linear-gradient(135deg, #08a8c8, #059669)",
            color: "#ffffff",
            boxShadow:
              "0 8px 20px rgba(8, 145, 178, 0.18)",
          }}
        >
          <i
            className="bi bi-flower1"
            style={{
              fontSize: "25px",
            }}
          />
        </div>

        <div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.4px",
              color: "var(--jc-public-heading)",
            }}
          >
            Jeevan{" "}
            <span style={{ color: "#0891b2" }}>
              CaseCare
            </span>
          </div>

          <div
            style={{
              fontSize: "10px",
              color: "var(--jc-public-muted)",
              marginTop: "4px",
              letterSpacing: "0.2px",
            }}
          >
            AI-Powered Patient Case-Taking & EHR
          </div>
        </div>
      </div>

      <div
        style={{
          fontSize: "12px",
          color: "var(--jc-public-muted)",
          display: "flex",
          alignItems: "center",
          gap: "7px",
        }}
      >
        <i
          className="bi bi-shield-check"
          style={{
            color: "#059669",
            fontSize: "16px",
          }}
        />
        {t.secureConsent}
      </div>
    </div>

    {/* Main heading */}
    <div
      style={{
        textAlign: "center",
        maxWidth: "720px",
        margin: "0 auto 48px",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "7px 14px",
          borderRadius: "999px",
          background: "rgba(8, 145, 178, 0.08)",
          border: "1px solid rgba(8, 145, 178, 0.16)",
          color: "var(--jc-public-soft)",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.8px",
          textTransform: "uppercase",
          marginBottom: "18px",
        }}
      >
        <i className="bi bi-stars" />
        {t.badge}
      </div>

      <h1
        style={{
          margin: 0,
          fontSize: "42px",
          lineHeight: 1.12,
          fontWeight: 800,
          letterSpacing: "-1.5px",
          color: "var(--jc-public-heading)",
        }}
      >
        {t.chooseYour}{" "}
        <span style={{ color: "#0891b2" }}>
          {t.role}
        </span>
      </h1>

      <p
        style={{
          margin: "15px auto 0",
          maxWidth: "560px",
          fontSize: "15px",
          lineHeight: 1.7,
          color: "var(--jc-public-muted)",
        }}
      >
        {t.description}
      </p>
    </div>

    {/* Role Cards */}
    <div className="row g-4 justify-content-center">
      {roles.map((role) => {
        const cardContent = (
          <>
            {/* Icon */}
            <div
              style={{
                width: "68px",
                height: "68px",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 22px",
                background:
                  role.className === "patient"
                    ? "rgba(14, 165, 233, 0.11)"
                    : role.className === "doctor"
                    ? "rgba(5, 150, 105, 0.11)"
                    : role.className === "emergency"
                    ? "rgba(139, 92, 246, 0.10)"
                    : "rgba(245, 158, 11, 0.11)",
                color:
                  role.className === "patient"
                    ? "#0284c7"
                    : role.className === "doctor"
                    ? "#059669"
                    : role.className === "emergency"
                    ? "#7c3aed"
                    : "#d97706",
              }}
            >
              <i
                className={"bi " + role.icon}
                style={{
                  fontSize: "29px",
                }}
              />
            </div>

            {/* Title */}
            <h3
              style={{
                fontSize: "19px",
                fontWeight: 750,
                color: "var(--jc-public-heading)",
                marginBottom: "11px",
              }}
            >
              {role.title}
            </h3>

            {/* Description */}
            <p
              style={{
                fontSize: "12px",
                lineHeight: 1.65,
                color: "var(--jc-public-muted)",
                minHeight: "58px",
                marginBottom: "25px",
              }}
            >
              {role.description}
            </p>

            {/* Button */}
            <div
              style={{
                width: "100%",
                height: "42px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                fontSize: "12px",
                fontWeight: 700,
                background:
                  role.className === "patient"
                    ? "#0ea5e9"
                    : role.className === "doctor"
                    ? "#059669"
                    : role.className === "emergency"
                    ? "#7c3aed"
                    : "#f59e0b",
                color: "#ffffff",
                boxShadow:
                  "0 7px 16px rgba(15, 100, 130, 0.12)",
              }}
            >
              {t.continue}

              <i className="bi bi-arrow-right" />
            </div>
          </>
        );

        return (
          <div
            className="col-12 col-sm-6 col-lg-3"
            key={role.title}
          >
            <Link
              to={role.to}
              style={{
                display: "block",
                height: "100%",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  height: "100%",
                  minHeight: "355px",
                  padding: "30px 23px 24px",
                  borderRadius: "18px",

                  background:
                    "var(--jc-public-card-solid)",

                  border:
                    role.className === "patient"
                      ? "1px solid rgba(14,165,233,0.25)"
                      : role.className === "doctor"
                      ? "1px solid rgba(5,150,105,0.25)"
                      : role.className === "emergency"
                      ? "1px solid rgba(139,92,246,0.25)"
                      : "1px solid rgba(245,158,11,0.25)",

                  boxShadow:
                    "0 12px 35px var(--jc-public-shadow)",

                  textAlign: "center",
                  transition:
                    "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.transform =
                    "translateY(-5px)";

                  event.currentTarget.style.boxShadow =
                    "0 18px 42px var(--jc-public-shadow-hover)";
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.transform =
                    "translateY(0)";

                  event.currentTarget.style.boxShadow =
                    "0 12px 35px var(--jc-public-shadow)";
                }}
              >
                {cardContent}
              </div>
            </Link>
          </div>
        );
      })}
    </div>

    {/* Bottom trust section */}
    <div
      style={{
        marginTop: "48px",
        padding: "18px 25px",
        borderRadius: "14px",

        background:
          "var(--jc-public-trust-bg)",

        border:
          "1px solid rgba(8,145,178,0.12)",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "14px",
        fontSize: "11px",
        color: "var(--jc-public-muted)",
      }}
    >
      <span>
        <i
          className="bi bi-shield-check"
          style={{
            color: "#059669",
            marginRight: "6px",
          }}
        />
        {t.consentBased}
      </span>

      <span
        style={{
          color: "var(--jc-public-separator)",
        }}
      >
        •
      </span>

      <span>
        <i
          className="bi bi-translate"
          style={{
            color: "#0891b2",
            marginRight: "6px",
          }}
        />
        {t.multilingual}
      </span>

      <span
        style={{
          color: "var(--jc-public-separator)",
        }}
      >
        •
      </span>

      <span>
        <i
          className="bi bi-person-check"
          style={{
            color: "#059669",
            marginRight: "6px",
          }}
        />
        {t.doctorReviewed}
      </span>
    </div>

    {/* Footer */}
    <div
      style={{
        textAlign: "center",
        marginTop: "28px",
        fontSize: "10px",
        color: "var(--jc-public-label)",
        letterSpacing: "0.3px",
      }}
    >
      {t.footer}
    </div>
  </div>
</div>

);
}
