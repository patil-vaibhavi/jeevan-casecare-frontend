import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const sidebarTranslations = {
en: {
patientSpace: "PATIENT SPACE",
doctorSpace: "DOCTOR SPACE",
emergencyProvider: "EMERGENCY PROVIDER",
adminSpace: "ADMIN SPACE",


dashboard: "Dashboard",
newCase: "New Case",
healthProfile: "Health Profile",
medicalTimeline: "Medical Timeline",
appointments: "Appointments",
consentAccess: "Consent & Access",
emergencyInfo: "Emergency Info",

patientSearch: "Patient Search",
myPatients: "My Patients",
caseRecords: "Case Records",
verification: "Verification",

emergencyDashboard: "Emergency Dashboard",
adminDashboard: "Admin Dashboard",

secureWorkspace: "Secure workspace",
consentBasedAccess: "Consent-based access",

settings: "Settings",
logout: "Logout",


},

mr: {
patientSpace: "रुग्ण विभाग",
doctorSpace: "डॉक्टर विभाग",
emergencyProvider: "आपत्कालीन प्रदाता",
adminSpace: "प्रशासक विभाग",


dashboard: "डॅशबोर्ड",
newCase: "नवीन केस",
healthProfile: "आरोग्य प्रोफाइल",
medicalTimeline: "वैद्यकीय टाइमलाइन",
appointments: "भेटी",
consentAccess: "संमती आणि प्रवेश",
emergencyInfo: "आपत्कालीन माहिती",

patientSearch: "रुग्ण शोध",
myPatients: "माझे रुग्ण",
caseRecords: "केस नोंदी",
verification: "पडताळणी",

emergencyDashboard: "आपत्कालीन डॅशबोर्ड",
adminDashboard: "प्रशासक डॅशबोर्ड",

secureWorkspace: "सुरक्षित कार्यक्षेत्र",
consentBasedAccess: "संमतीवर आधारित प्रवेश",

settings: "सेटिंग्ज",
logout: "लॉगआउट",


},

hi: {
patientSpace: "रोगी अनुभाग",
doctorSpace: "डॉक्टर अनुभाग",
emergencyProvider: "आपातकालीन प्रदाता",
adminSpace: "प्रशासक अनुभाग",


dashboard: "डैशबोर्ड",
newCase: "नया केस",
healthProfile: "स्वास्थ्य प्रोफ़ाइल",
medicalTimeline: "चिकित्सा टाइमलाइन",
appointments: "अपॉइंटमेंट",
consentAccess: "सहमति और एक्सेस",
emergencyInfo: "आपातकालीन जानकारी",

patientSearch: "रोगी खोज",
myPatients: "मेरे रोगी",
caseRecords: "केस रिकॉर्ड",
verification: "सत्यापन",

emergencyDashboard: "आपातकालीन डैशबोर्ड",
adminDashboard: "प्रशासक डैशबोर्ड",

secureWorkspace: "सुरक्षित कार्यक्षेत्र",
consentBasedAccess: "सहमति-आधारित एक्सेस",

settings: "सेटिंग्स",
logout: "लॉगआउट",


},

gu: {
patientSpace: "દર્દી વિભાગ",
doctorSpace: "ડૉક્ટર વિભાગ",
emergencyProvider: "કટોકટી પ્રદાતા",
adminSpace: "એડમિન વિભાગ",


dashboard: "ડેશબોર્ડ",
newCase: "નવો કેસ",
healthProfile: "આરોગ્ય પ્રોફાઇલ",
medicalTimeline: "તબીબી સમયરેખા",
appointments: "મુલાકાતો",
consentAccess: "સંમતિ અને ઍક્સેસ",
emergencyInfo: "કટોકટીની માહિતી",

patientSearch: "દર્દીની શોધ",
myPatients: "મારા દર્દીઓ",
caseRecords: "કેસ રેકોર્ડ્સ",
verification: "ચકાસણી",

emergencyDashboard: "કટોકટી ડેશબોર્ડ",
adminDashboard: "એડમિન ડેશબોર્ડ",

secureWorkspace: "સુરક્ષિત કાર્યક્ષેત્ર",
consentBasedAccess: "સંમતિ આધારિત ઍક્સેસ",

settings: "સેટિંગ્સ",
logout: "લૉગઆઉટ",


},

kn: {
patientSpace: "ರೋಗಿ ವಿಭಾಗ",
doctorSpace: "ವೈದ್ಯರ ವಿಭಾಗ",
emergencyProvider: "ತುರ್ತು ಸೇವಾ ಪೂರೈಕೆದಾರ",
adminSpace: "ನಿರ್ವಾಹಕ ವಿಭಾಗ",


dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
newCase: "ಹೊಸ ಪ್ರಕರಣ",
healthProfile: "ಆರೋಗ್ಯ ಪ್ರೊಫೈಲ್",
medicalTimeline: "ವೈದ್ಯಕೀಯ ಟೈಮ್‌ಲೈನ್",
appointments: "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್‌ಗಳು",
consentAccess: "ಒಪ್ಪಿಗೆ ಮತ್ತು ಪ್ರವೇಶ",
emergencyInfo: "ತುರ್ತು ಮಾಹಿತಿ",

patientSearch: "ರೋಗಿ ಹುಡುಕಾಟ",
myPatients: "ನನ್ನ ರೋಗಿಗಳು",
caseRecords: "ಪ್ರಕರಣ ದಾಖಲೆಗಳು",
verification: "ಪರಿಶೀಲನೆ",

emergencyDashboard: "ತುರ್ತು ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
adminDashboard: "ನಿರ್ವಾಹಕ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",

secureWorkspace: "ಸುರಕ್ಷಿತ ಕಾರ್ಯಕ್ಷೇತ್ರ",
consentBasedAccess: "ಒಪ್ಪಿಗೆ ಆಧಾರಿತ ಪ್ರವೇಶ",

settings: "ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
logout: "ಲಾಗ್‌ಔಟ್",


},

ta: {
patientSpace: "நோயாளர் பகுதி",
doctorSpace: "மருத்துவர் பகுதி",
emergencyProvider: "அவசரநிலை சேவை வழங்குநர்",
adminSpace: "நிர்வாகப் பகுதி",


dashboard: "டாஷ்போர்டு",
newCase: "புதிய கேஸ்",
healthProfile: "சுகாதார சுயவிவரம்",
medicalTimeline: "மருத்துவ காலவரிசை",
appointments: "சந்திப்புகள்",
consentAccess: "ஒப்புதல் மற்றும் அணுகல்",
emergencyInfo: "அவசரநிலை தகவல்",

patientSearch: "நோயாளர் தேடல்",
myPatients: "என் நோயாளிகள்",
caseRecords: "கேஸ் பதிவுகள்",
verification: "சரிபார்ப்பு",

emergencyDashboard: "அவசரநிலை டாஷ்போர்டு",
adminDashboard: "நிர்வாக டாஷ்போர்டு",

secureWorkspace: "பாதுகாப்பான பணியிடம்",
consentBasedAccess: "ஒப்புதல் அடிப்படையிலான அணுகல்",

settings: "அமைப்புகள்",
logout: "வெளியேறு",


},
};

export default function Sidebar({ role = "patient" }) {
const navigate = useNavigate();
const { language } = useLanguage();

const t =
sidebarTranslations[language] ||
sidebarTranslations.en;

const patientItems = [
{
label: t.dashboard,
icon: "bi-grid-fill",
path: "/patient/dashboard",
},
{
label: t.newCase,
icon: "bi-plus-circle",
path: "/patient/new-case",
},
{
label: t.healthProfile,
icon: "bi-person-vcard",
path: "/patient/health-profile",
},
{
label: t.medicalTimeline,
icon: "bi-clock-history",
path: "/patient/medical-timeline",
},
{
label: t.appointments,
icon: "bi-calendar-check",
path: "/patient/appointments",
},
{
label: t.consentAccess,
icon: "bi-shield-check",
path: "/patient/consent",
},
{
label: t.emergencyInfo,
icon: "bi-heart-pulse",
path: "/patient/emergency",
},
];

const doctorItems = [
{
label: t.dashboard,
icon: "bi-grid-fill",
path: "/doctor/dashboard",
},
{
label: t.patientSearch,
icon: "bi-search",
path: "/doctor/patients",
},
{
label: t.myPatients,
icon: "bi-people",
path: "/doctor/my-patients",
},
{
label: t.caseRecords,
icon: "bi-file-earmark-medical",
path: "/doctor/cases",
},
{
label: t.appointments,
icon: "bi-calendar-check",
path: "/doctor/appointments",
},
{
label: t.verification,
icon: "bi-patch-check",
path: "/doctor/verification",
},
];

const emergencyItems = [
{
label: t.emergencyDashboard,
icon: "bi-shield-exclamation",
path: "/emergency/dashboard",
},
];

const adminItems = [
{
label: t.adminDashboard,
icon: "bi-grid-fill",
path: "/admin/dashboard",
},
];

let items = patientItems;
let sectionTitle = t.patientSpace;

if (role === "doctor") {
items = doctorItems;
sectionTitle = t.doctorSpace;
} else if (role === "emergency") {
items = emergencyItems;
sectionTitle = t.emergencyProvider;
} else if (role === "admin") {
items = adminItems;
sectionTitle = t.adminSpace;
}

let settingsPath = "/patient/settings";

if (role === "doctor") {
settingsPath = "/doctor/settings";
} else if (role === "emergency") {
settingsPath = "/emergency/settings";
} else if (role === "admin") {
settingsPath = "/admin/settings";
}

const handleLogout = () => {
localStorage.removeItem("jeevanUser");
window.dispatchEvent(
new Event("jeevanUserUpdated")
);
navigate("/login", { replace: true });
};

return ( <aside className="jc-sidebar">
{/* BRAND */} <div className="jc-sidebar-brand"> <div className="jc-logo-mark"> <i className="bi bi-heart-pulse-fill" /> </div>


    <div className="jc-brand-text">
      <div className="jc-brand-name">
        Jeevan <span>CaseCare</span>
      </div>

      <div className="jc-brand-subtitle">
        AI-powered patient case-taking & EHR
      </div>
    </div>
  </div>

  {/* SECTION TITLE */}
  <div className="jc-sidebar-section-title">
    {sectionTitle}
  </div>

  {/* NAVIGATION */}
  <nav className="jc-sidebar-nav">
    {items.map((item) => (
      <NavLink
        key={item.path}
        to={item.path}
        className={({ isActive }) =>
          `jc-sidebar-link ${
            isActive ? "active" : ""
          }`
        }
      >
        <span className="jc-sidebar-icon">
          <i
            className={"bi " + item.icon}
          />
        </span>

        <span className="jc-sidebar-label">
          {item.label}
        </span>
      </NavLink>
    ))}
  </nav>

  {/* BOTTOM AREA */}
  <div className="jc-sidebar-bottom">
    <div className="jc-secure-card">
      <div className="jc-secure-icon">
        <i className="bi bi-shield-lock-fill" />
      </div>

      <div>
        <div className="jc-secure-title">
          {t.secureWorkspace}
        </div>

        <div className="jc-secure-subtitle">
          {t.consentBasedAccess}
        </div>
      </div>
    </div>

    {/* SETTINGS */}
    <NavLink
      to={settingsPath}
      className={({ isActive }) =>
        `jc-sidebar-link jc-settings-link ${
          isActive ? "active" : ""
        }`
      }
    >
      <span className="jc-sidebar-icon">
        <i className="bi bi-gear" />
      </span>

      <span className="jc-sidebar-label">
        {t.settings}
      </span>
    </NavLink>

    {/* LOGOUT */}
    <button
      type="button"
      onClick={handleLogout}
      className="jc-sidebar-link"
      style={{
        width: "100%",
        border: "none",
        background: "transparent",
        textAlign: "left",
        cursor: "pointer",
      }}
    >
      <span className="jc-sidebar-icon">
        <i className="bi bi-box-arrow-right" />
      </span>

      <span className="jc-sidebar-label">
        {t.logout}
      </span>
    </button>
  </div>
</aside>


);
}
