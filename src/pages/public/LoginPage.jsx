
import React, { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const loginTranslations = {
  en: {
    secureAccess: "SECURE HEALTHCARE ACCESS",
    welcome: "Welcome back.",
    yourCare: "Your care,",
    connected: "connected.",
    description:
      "Sign in to Jeevan CaseCare to access your personalized healthcare workspace, clinical records, and intelligent case-taking tools.",
    secureTitle: "Secure & consent-based",
    secureText:
      "Your healthcare information stays protected.",
    multilingualTitle: "Multilingual care",
    multilingualText: "Marathi · Hindi · English",
    doctorTitle: "Doctor-reviewed records",
    doctorText:
      "Clinical information with trusted review.",
    signIn: "Sign in",
    emergencyAccess: "Emergency Provider Access",
    adminAccess: "Administrator Access",
    workspaceAccess:
      "Access your Jeevan CaseCare workspace",
    fullName: "Full name",
    enterFullName: "Enter your full name",
    providerId: "Provider ID",
    adminId: "Admin ID",
    emailHealthId: "Email or Health ID",
    enterProviderId: "Enter your Provider ID",
    enterAdminId: "Enter your Admin ID",
    enterEmailHealthId:
      "Enter your Email or Health ID",
    password: "Password",
    enterPassword: "Enter your password",
    signInAs: "Sign in as",
    patient: "Patient",
    doctor: "Doctor",
    emergency: "Emergency",
    admin: "Admin",
    securityNote:
      "Your information is securely handled",
    backHome: "Back to home",
    alertName: "Please enter your full name.",
    alertAdminId: "Please enter your Admin ID.",
    alertEmail:
      "Please enter your Email or Health ID.",
    alertPassword: "Please enter your password.",
  },

  mr: {
    secureAccess: "सुरक्षित आरोग्यसेवा प्रवेश",
    welcome: "पुन्हा स्वागत आहे.",
    yourCare: "तुमची काळजी,",
    connected: "जोडलेली.",
    description:
      "तुमच्या वैयक्तिक आरोग्य कार्यक्षेत्र, क्लिनिकल नोंदी आणि बुद्धिमान केस-टेकिंग साधनांमध्ये प्रवेश करण्यासाठी Jeevan CaseCare मध्ये साइन इन करा.",
    secureTitle: "सुरक्षित आणि संमती-आधारित",
    secureText:
      "तुमची आरोग्य माहिती सुरक्षित ठेवली जाते.",
    multilingualTitle: "बहुभाषिक सेवा",
    multilingualText: "मराठी · हिंदी · इंग्रजी",
    doctorTitle: "डॉक्टरांनी तपासलेल्या नोंदी",
    doctorText:
      "विश्वासार्ह तपासणीसह क्लिनिकल माहिती.",
    signIn: "साइन इन",
    emergencyAccess: "आपत्कालीन सेवा प्रदाता प्रवेश",
    adminAccess: "प्रशासक प्रवेश",
    workspaceAccess:
      "तुमच्या Jeevan CaseCare कार्यक्षेत्रात प्रवेश करा",
    fullName: "पूर्ण नाव",
    enterFullName: "तुमचे पूर्ण नाव प्रविष्ट करा",
    providerId: "प्रदाता ID",
    adminId: "प्रशासक ID",
    emailHealthId: "ईमेल किंवा हेल्थ ID",
    enterProviderId: "तुमचा प्रदाता ID प्रविष्ट करा",
    enterAdminId: "तुमचा प्रशासक ID प्रविष्ट करा",
    enterEmailHealthId:
      "तुमचा ईमेल किंवा हेल्थ ID प्रविष्ट करा",
    password: "पासवर्ड",
    enterPassword: "तुमचा पासवर्ड प्रविष्ट करा",
    signInAs: "म्हणून साइन इन करा",
    patient: "रुग्ण",
    doctor: "डॉक्टर",
    emergency: "आपत्कालीन",
    admin: "प्रशासक",
    securityNote:
      "तुमची माहिती सुरक्षितपणे हाताळली जाते",
    backHome: "मुख्यपृष्ठावर परत जा",
    alertName: "कृपया तुमचे पूर्ण नाव प्रविष्ट करा.",
    alertAdminId: "कृपया तुमचा प्रशासक ID प्रविष्ट करा.",
    alertEmail:
      "कृपया तुमचा ईमेल किंवा हेल्थ ID प्रविष्ट करा.",
    alertPassword: "कृपया तुमचा पासवर्ड प्रविष्ट करा.",
  },

  hi: {
    secureAccess: "सुरक्षित स्वास्थ्य सेवा पहुंच",
    welcome: "वापसी पर स्वागत है।",
    yourCare: "आपकी देखभाल,",
    connected: "जुड़ी हुई।",
    description:
      "अपने व्यक्तिगत स्वास्थ्य कार्यक्षेत्र, क्लिनिकल रिकॉर्ड और बुद्धिमान केस-टेकिंग टूल्स तक पहुंचने के लिए Jeevan CaseCare में साइन इन करें।",
    secureTitle: "सुरक्षित और सहमति-आधारित",
    secureText:
      "आपकी स्वास्थ्य जानकारी सुरक्षित रखी जाती है।",
    multilingualTitle: "बहुभाषी देखभाल",
    multilingualText: "हिंदी · मराठी · अंग्रेज़ी",
    doctorTitle: "डॉक्टर द्वारा समीक्षा किए गए रिकॉर्ड",
    doctorText:
      "विश्वसनीय समीक्षा के साथ क्लिनिकल जानकारी।",
    signIn: "साइन इन",
    emergencyAccess: "आपातकालीन सेवा प्रदाता पहुंच",
    adminAccess: "प्रशासक पहुंच",
    workspaceAccess:
      "अपने Jeevan CaseCare कार्यक्षेत्र तक पहुंचें",
    fullName: "पूरा नाम",
    enterFullName: "अपना पूरा नाम दर्ज करें",
    providerId: "प्रदाता ID",
    adminId: "प्रशासक ID",
    emailHealthId: "ईमेल या हेल्थ ID",
    enterProviderId: "अपना प्रदाता ID दर्ज करें",
    enterAdminId: "अपना प्रशासक ID दर्ज करें",
    enterEmailHealthId:
      "अपना ईमेल या हेल्थ ID दर्ज करें",
    password: "पासवर्ड",
    enterPassword: "अपना पासवर्ड दर्ज करें",
    signInAs: "के रूप में साइन इन करें",
    patient: "मरीज",
    doctor: "डॉक्टर",
    emergency: "आपातकालीन",
    admin: "प्रशासक",
    securityNote:
      "आपकी जानकारी सुरक्षित रूप से संभाली जाती है",
    backHome: "होम पर वापस जाएं",
    alertName: "कृपया अपना पूरा नाम दर्ज करें।",
    alertAdminId: "कृपया अपना प्रशासक ID दर्ज करें।",
    alertEmail:
      "कृपया अपना ईमेल या हेल्थ ID दर्ज करें।",
    alertPassword: "कृपया अपना पासवर्ड दर्ज करें।",
  },

  gu: {
    secureAccess: "સુરક્ષિત આરોગ્ય સેવા ઍક્સેસ",
    welcome: "ફરીથી સ્વાગત છે.",
    yourCare: "તમારી સંભાળ,",
    connected: "જોડાયેલી.",
    description:
      "તમારા વ્યક્તિગત હેલ્થકેર વર્કસ્પેસ, ક્લિનિકલ રેકોર્ડ્સ અને બુદ્ધિશાળી કેસ-ટેકિંગ સાધનોને ઍક્સેસ કરવા માટે Jeevan CaseCare માં સાઇન ઇન કરો.",
    secureTitle: "સુરક્ષિત અને સંમતિ આધારિત",
    secureText:
      "તમારી આરોગ્ય માહિતી સુરક્ષિત રાખવામાં આવે છે.",
    multilingualTitle: "બહુભાષી કાળજી",
    multilingualText: "ગુજરાતી · હિન્દી · અંગ્રેજી",
    doctorTitle: "ડૉક્ટર દ્વારા સમીક્ષા કરાયેલા રેકોર્ડ",
    doctorText:
      "વિશ્વસનીય સમીક્ષા સાથે ક્લિનિકલ માહિતી.",
    signIn: "સાઇન ઇન",
    emergencyAccess: "ઇમર્જન્સી પ્રોવાઇડર ઍક્સેસ",
    adminAccess: "એડમિનિસ્ટ્રેટર ઍક્સેસ",
    workspaceAccess:
      "તમારા Jeevan CaseCare વર્કસ્પેસને ઍક્સેસ કરો",
    fullName: "પૂરું નામ",
    enterFullName: "તમારું પૂરું નામ દાખલ કરો",
    providerId: "પ્રોવાઇડર ID",
    adminId: "એડમિન ID",
    emailHealthId: "ઇમેઇલ અથવા હેલ્થ ID",
    enterProviderId: "તમારું પ્રોવાઇડર ID દાખલ કરો",
    enterAdminId: "તમારું એડમિન ID દાખલ કરો",
    enterEmailHealthId:
      "તમારું ઇમેઇલ અથવા હેલ્થ ID દાખલ કરો",
    password: "પાસવર્ડ",
    enterPassword: "તમારો પાસવર્ડ દાખલ કરો",
    signInAs: "આ તરીકે સાઇન ઇન કરો",
    patient: "દર્દી",
    doctor: "ડૉક્ટર",
    emergency: "ઇમર્જન્સી",
    admin: "એડમિન",
    securityNote:
      "તમારી માહિતી સુરક્ષિત રીતે સંભાળવામાં આવે છે",
    backHome: "હોમ પર પાછા જાઓ",
    alertName: "કૃપા કરીને તમારું પૂરું નામ દાખલ કરો.",
    alertAdminId: "કૃપા કરીને તમારું એડમિન ID દાખલ કરો.",
    alertEmail:
      "કૃપા કરીને તમારું ઇમેઇલ અથવા હેલ્થ ID દાખલ કરો.",
    alertPassword: "કૃપા કરીને તમારો પાસવર્ડ દાખલ કરો.",
  },

  kn: {
    secureAccess: "ಸುರಕ್ಷಿತ ಆರೋಗ್ಯ ಸೇವಾ ಪ್ರವೇಶ",
    welcome: "ಮತ್ತೆ ಸ್ವಾಗತ.",
    yourCare: "ನಿಮ್ಮ ಆರೈಕೆ,",
    connected: "ಸಂಪರ್ಕಿತ.",
    description:
      "ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಆರೋಗ್ಯ ಕಾರ್ಯಕ್ಷೇತ್ರ, ಕ್ಲಿನಿಕಲ್ ದಾಖಲೆಗಳು ಮತ್ತು ಬುದ್ಧಿವಂತ ಕೇಸ್-ಟೇಕಿಂಗ್ ಸಾಧನಗಳನ್ನು ಪ್ರವೇಶಿಸಲು Jeevan CaseCare ಗೆ ಸೈನ್ ಇನ್ ಮಾಡಿ.",
    secureTitle: "ಸುರಕ್ಷಿತ ಮತ್ತು ಒಪ್ಪಿಗೆ ಆಧಾರಿತ",
    secureText:
      "ನಿಮ್ಮ ಆರೋಗ್ಯ ಮಾಹಿತಿಯನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಇರಿಸಲಾಗುತ್ತದೆ.",
    multilingualTitle: "ಬಹುಭಾಷಾ ಆರೈಕೆ",
    multilingualText: "ಕನ್ನಡ · ಹಿಂದಿ · ಇಂಗ್ಲಿಷ್",
    doctorTitle: "ವೈದ್ಯರಿಂದ ಪರಿಶೀಲಿಸಲಾದ ದಾಖಲೆಗಳು",
    doctorText:
      "ವಿಶ್ವಾಸಾರ್ಹ ಪರಿಶೀಲನೆಯೊಂದಿಗೆ ಕ್ಲಿನಿಕಲ್ ಮಾಹಿತಿ.",
    signIn: "ಸೈನ್ ಇನ್",
    emergencyAccess: "ತುರ್ತು ಸೇವಾ ಪೂರೈಕೆದಾರ ಪ್ರವೇಶ",
    adminAccess: "ನಿರ್ವಾಹಕ ಪ್ರವೇಶ",
    workspaceAccess:
      "ನಿಮ್ಮ Jeevan CaseCare ಕಾರ್ಯಕ್ಷೇತ್ರವನ್ನು ಪ್ರವೇಶಿಸಿ",
    fullName: "ಪೂರ್ಣ ಹೆಸರು",
    enterFullName: "ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",
    providerId: "ಪೂರೈಕೆದಾರ ID",
    adminId: "ನಿರ್ವಾಹಕ ID",
    emailHealthId: "ಇಮೇಲ್ ಅಥವಾ ಆರೋಗ್ಯ ID",
    enterProviderId: "ನಿಮ್ಮ ಪೂರೈಕೆದಾರ ID ನಮೂದಿಸಿ",
    enterAdminId: "ನಿಮ್ಮ ನಿರ್ವಾಹಕ ID ನಮೂದಿಸಿ",
    enterEmailHealthId:
      "ನಿಮ್ಮ ಇಮೇಲ್ ಅಥವಾ ಆರೋಗ್ಯ ID ನಮೂದಿಸಿ",
    password: "ಪಾಸ್‌ವರ್ಡ್",
    enterPassword: "ನಿಮ್ಮ ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ",
    signInAs: "ಈ ರೀತಿಯಾಗಿ ಸೈನ್ ಇನ್ ಮಾಡಿ",
    patient: "ರೋಗಿ",
    doctor: "ವೈದ್ಯ",
    emergency: "ತುರ್ತು",
    admin: "ನಿರ್ವಾಹಕ",
    securityNote:
      "ನಿಮ್ಮ ಮಾಹಿತಿಯನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ನಿರ್ವಹಿಸಲಾಗುತ್ತದೆ",
    backHome: "ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ",
    alertName: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ.",
    alertAdminId:
      "ದಯವಿಟ್ಟು ನಿಮ್ಮ ನಿರ್ವಾಹಕ ID ನಮೂದಿಸಿ.",
    alertEmail:
      "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಇಮೇಲ್ ಅಥವಾ ಆರೋಗ್ಯ ID ನಮೂದಿಸಿ.",
    alertPassword: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ.",
  },

  ta: {
    secureAccess: "பாதுகாப்பான மருத்துவ அணுகல்",
    welcome: "மீண்டும் வரவேற்கிறோம்.",
    yourCare: "உங்கள் பராமரிப்பு,",
    connected: "இணைக்கப்பட்டுள்ளது.",
    description:
      "உங்கள் தனிப்பட்ட சுகாதார பணியிடம், மருத்துவ பதிவுகள் மற்றும் புத்திசாலித்தனமான கேஸ்-டேக்கிங் கருவிகளை அணுக Jeevan CaseCare இல் உள்நுழையவும்.",
    secureTitle: "பாதுகாப்பான மற்றும் ஒப்புதல் அடிப்படையிலான",
    secureText:
      "உங்கள் மருத்துவ தகவல்கள் பாதுகாப்பாக வைக்கப்படுகின்றன.",
    multilingualTitle: "பலமொழி பராமரிப்பு",
    multilingualText: "தமிழ் · இந்தி · ஆங்கிலம்",
    doctorTitle: "மருத்துவர் மதிப்பாய்வு செய்த பதிவுகள்",
    doctorText:
      "நம்பகமான மதிப்பாய்வுடன் மருத்துவத் தகவல்கள்.",
    signIn: "உள்நுழை",
    emergencyAccess: "அவசர சேவை வழங்குநர் அணுகல்",
    adminAccess: "நிர்வாகி அணுகல்",
    workspaceAccess:
      "உங்கள் Jeevan CaseCare பணியிடத்தை அணுகவும்",
    fullName: "முழுப் பெயர்",
    enterFullName: "உங்கள் முழுப் பெயரை உள்ளிடவும்",
    providerId: "வழங்குநர் ID",
    adminId: "நிர்வாகி ID",
    emailHealthId: "மின்னஞ்சல் அல்லது சுகாதார ID",
    enterProviderId: "உங்கள் வழங்குநர் ID-ஐ உள்ளிடவும்",
    enterAdminId: "உங்கள் நிர்வாகி ID-ஐ உள்ளிடவும்",
    enterEmailHealthId:
      "உங்கள் மின்னஞ்சல் அல்லது சுகாதார ID-ஐ உள்ளிடவும்",
    password: "கடவுச்சொல்",
    enterPassword: "உங்கள் கடவுச்சொல்லை உள்ளிடவும்",
    signInAs: "இவ்வாறு உள்நுழைக",
    patient: "நோயாளி",
    doctor: "மருத்துவர்",
    emergency: "அவசரநிலை",
    admin: "நிர்வாகி",
    securityNote:
      "உங்கள் தகவல்கள் பாதுகாப்பாக கையாளப்படுகின்றன",
    backHome: "முகப்புக்குத் திரும்பு",
    alertName: "உங்கள் முழுப் பெயரை உள்ளிடவும்.",
    alertAdminId:
      "உங்கள் நிர்வாகி ID-ஐ உள்ளிடவும்.",
    alertEmail:
      "உங்கள் மின்னஞ்சல் அல்லது சுகாதார ID-ஐ உள்ளிடவும்.",
    alertPassword: "உங்கள் கடவுச்சொல்லை உள்ளிடவும்.",
  },
};

export default function LoginPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { language } = useLanguage();

  const t =
    loginTranslations[language] ||
    loginTranslations.en;

  const requestedRole = searchParams.get("role");

  const [name, setName] = useState("");
  const [emailOrHealthId, setEmailOrHealthId] =
    useState("");
  const [password, setPassword] = useState("");

  const [role, setRole] = useState(
    requestedRole === "doctor"
      ? "doctor"
      : requestedRole === "emergency"
      ? "emergency"
      : requestedRole === "admin"
      ? "admin"
      : "patient"
  );

  useEffect(() => {
    if (requestedRole === "doctor") {
      setRole("doctor");
    } else if (requestedRole === "emergency") {
      setRole("emergency");
    } else if (requestedRole === "admin") {
      setRole("admin");
    } else if (requestedRole === "patient") {
      setRole("patient");
    }
  }, [requestedRole]);

  const handleLogin = (event) => {
    event.preventDefault();

    if (!name.trim()) {
      alert(t.alertName);
      return;
    }

    if (!emailOrHealthId.trim()) {
      alert(
        role === "admin"
          ? t.alertAdminId
          : t.alertEmail
      );
      return;
    }

    if (!password.trim()) {
      alert(t.alertPassword);
      return;
    }

    const cleanedName = name.trim();
    const cleanedEmailOrHealthId =
      emailOrHealthId.trim();

    const user = {
      name: cleanedName,
      fullName: cleanedName,
      role: role,
      emailOrHealthId: cleanedEmailOrHealthId,

      patientName:
        role === "patient"
          ? cleanedName
          : null,

      healthId:
        role === "patient"
          ? "JVC-000123"
          : null,

      doctorName:
        role === "doctor"
          ? cleanedName
          : null,

      doctorId:
        role === "doctor"
          ? cleanedEmailOrHealthId
          : null,

      specialization:
        role === "doctor"
          ? "General Medicine"
          : null,

      emergencyProviderName:
        role === "emergency"
          ? cleanedName
          : null,

      emergencyProviderId:
        role === "emergency"
          ? cleanedEmailOrHealthId
          : null,

      adminName:
        role === "admin"
          ? cleanedName
          : null,

      adminId:
        role === "admin"
          ? cleanedEmailOrHealthId
          : null,

      loggedInAt:
        new Date().toISOString(),
    };

    localStorage.removeItem("jeevanUser");

    localStorage.setItem(
      "jeevanUser",
      JSON.stringify(user)
    );

    window.dispatchEvent(
      new Event("jeevanUserUpdated")
    );

    if (role === "doctor") {
      navigate("/doctor/dashboard");
    } else if (role === "emergency") {
      navigate("/emergency/dashboard");
    } else if (role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/patient/dashboard");
    }
  };

  const isEmergency = role === "emergency";
  const isAdmin = role === "admin";

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, var(--jc-bg) 0%, var(--jc-panel) 50%, var(--jc-panel-elevated) 100%)",
        color: "var(--jc-text)",
        position: "relative",
        overflow: "hidden",
        transition:
          "background 0.25s ease, color 0.25s ease",
      }}
    >
      {/* Decorative background */}
      <div
        style={{
          position: "absolute",
          width: "430px",
          height: "430px",
          borderRadius: "50%",
          background:
            "rgba(8, 145, 178, 0.055)",
          top: "-180px",
          right: "-120px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background:
            "rgba(5, 150, 105, 0.045)",
          bottom: "-180px",
          left: "-120px",
          pointerEvents: "none",
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "35px",
          paddingBottom: "35px",
        }}
      >
        <div className="row w-100 align-items-center g-5">

          {/* LEFT BRANDING */}
          <div className="col-lg-6">
            <div
              style={{
                maxWidth: "540px",
                margin: "0 auto",
              }}
            >

              {/* Logo */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "42px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    background:
                      "linear-gradient(135deg, #08a8c8, #059669)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    boxShadow:
                      "0 8px 22px rgba(8,145,178,0.18)",
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
                      fontSize: "21px",
                      fontWeight: 800,
                      letterSpacing: "-0.5px",
                      lineHeight: 1.1,
                      color: "var(--jc-text)",
                    }}
                  >
                    Jeevan{" "}
                    <span
                      style={{
                        color: "var(--jc-cyan)",
                      }}
                    >
                      CaseCare
                    </span>
                  </div>

                  <div
                    style={{
                      fontSize: "10px",
                      color: "var(--jc-subtle)",
                      marginTop: "4px",
                    }}
                  >
                    AI-Powered Patient Case-Taking & EHR
                  </div>
                </div>
              </div>

              {/* Eyebrow */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "7px 13px",
                  borderRadius: "999px",
                  background:
                    "rgba(8,145,178,0.08)",
                  border:
                    "1px solid rgba(8,145,178,0.14)",
                  color: "var(--jc-cyan)",
                  fontSize: "10px",
                  fontWeight: 800,
                  letterSpacing: "0.9px",
                  marginBottom: "18px",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#14b8a6",
                  }}
                />

                {t.secureAccess}
              </div>

              <h1
                style={{
                  fontSize:
                    "clamp(38px, 5vw, 57px)",
                  lineHeight: 1.05,
                  fontWeight: 800,
                  letterSpacing: "-2px",
                  color: "var(--jc-text)",
                  marginBottom: "20px",
                }}
              >
                {t.welcome}
                <br />

                <span
                  style={{
                    color: "var(--jc-cyan)",
                  }}
                >
                  {t.yourCare}
                </span>{" "}
                {t.connected}
              </h1>

              <p
                style={{
                  maxWidth: "500px",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--jc-muted)",
                  marginBottom: "28px",
                }}
              >
                {t.description}
              </p>

              {/* Trust points */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "13px",
                }}
              >
                {[
                  {
                    icon: "bi-shield-check",
                    title: t.secureTitle,
                    text: t.secureText,
                    color: "var(--jc-green)",
                  },
                  {
                    icon: "bi-translate",
                    title: t.multilingualTitle,
                    text: t.multilingualText,
                    color: "var(--jc-cyan)",
                  },
                  {
                    icon: "bi-person-check",
                    title: t.doctorTitle,
                    text: t.doctorText,
                    color: "#0f766e",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        flexShrink: 0,
                        borderRadius: "11px",
                        background:
                          "rgba(8,145,178,0.08)",
                        color: item.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "16px",
                      }}
                    >
                      <i
                        className={
                          "bi " + item.icon
                        }
                      />
                    </div>

                    <div>
                      <div
                        style={{
                          fontSize: "11px",
                          fontWeight: 800,
                          color:
                            "var(--jc-text-secondary)",
                        }}
                      >
                        {item.title}
                      </div>

                      <div
                        style={{
                          fontSize: "10px",
                          color:
                            "var(--jc-subtle)",
                          marginTop: "2px",
                        }}
                      >
                        {item.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* LOGIN CARD */}
          <div className="col-lg-6">
            <div
              style={{
                maxWidth: "455px",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  background: "var(--jc-panel)",
                  borderRadius: "22px",
                  border:
                    "1px solid var(--jc-border)",
                  padding: "34px",
                  boxShadow:
                    "0 25px 70px var(--jc-shadow)",
                  transition:
                    "background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
                }}
              >

                {/* Card header */}
                <div
                  style={{
                    textAlign: "center",
                    marginBottom: "28px",
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      margin: "0 auto 15px",
                      borderRadius: "16px",
                      background:
                        isEmergency
                          ? "rgba(220,38,38,0.09)"
                          : isAdmin
                          ? "rgba(37,99,235,0.09)"
                          : "rgba(8,145,178,0.09)",
                      color:
                        isEmergency
                          ? "#dc2626"
                          : isAdmin
                          ? "#2563eb"
                          : "var(--jc-cyan)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "23px",
                    }}
                  >
                    <i
                      className={
                        isEmergency
                          ? "bi bi-shield-exclamation"
                          : isAdmin
                          ? "bi bi-person-gear"
                          : "bi bi-shield-lock-fill"
                      }
                    />
                  </div>

                  <h2
                    style={{
                      fontSize: "24px",
                      fontWeight: 800,
                      color: "var(--jc-text)",
                      marginBottom: "7px",
                    }}
                  >
                    {t.signIn}
                  </h2>

                  <p
                    style={{
                      fontSize: "11px",
                      color: "var(--jc-subtle)",
                      margin: 0,
                    }}
                  >
                    {isEmergency
                      ? t.emergencyAccess
                      : isAdmin
                      ? t.adminAccess
                      : t.workspaceAccess}
                  </p>
                </div>

                <form onSubmit={handleLogin}>

                  {/* Full Name */}
                  <div
                    style={{
                      marginBottom: "17px",
                    }}
                  >
                    <label
                      style={{
                        display: "block",
                        fontSize: "10px",
                        fontWeight: 800,
                        color:
                          "var(--jc-text-secondary)",
                        marginBottom: "7px",
                        textTransform:
                          "uppercase",
                        letterSpacing:
                          "0.45px",
                      }}
                    >
                      {t.fullName}
                    </label>

                    <div
                      style={{
                        position: "relative",
                      }}
                    >
                      <i
                        className="bi bi-person"
                        style={{
                          position: "absolute",
                          left: "14px",
                          top: "50%",
                          transform:
                            "translateY(-50%)",
                          color:
                            "var(--jc-subtle)",
                          fontSize: "15px",
                          zIndex: 2,
                        }}
                      />

                      <input
                        className="form-control"
                        placeholder={t.enterFullName}
                        value={name}
                        onChange={(event) =>
                          setName(
                            event.target.value
                          )
                        }
                        style={{
                          height: "45px",
                          borderRadius: "10px",
                          border:
                            "1px solid var(--jc-border)",
                          paddingLeft: "40px",
                          fontSize: "12px",
                          color: "var(--jc-text)",
                          background:
                            "var(--jc-input-bg)",
                          boxShadow: "none",
                        }}
                      />
                    </div>
                  </div>

                  {/* Email / Health ID / Admin ID */}
                  <div
                    style={{
                      marginBottom: "17px",
                    }}
                  >
                    <label
                      style={{
                        display: "block",
                        fontSize: "10px",
                        fontWeight: 800,
                        color:
                          "var(--jc-text-secondary)",
                        marginBottom: "7px",
                        textTransform:
                          "uppercase",
                        letterSpacing:
                          "0.45px",
                      }}
                    >
                      {role === "emergency"
                        ? t.providerId
                        : role === "admin"
                        ? t.adminId
                        : t.emailHealthId}
                    </label>

                    <div
                      style={{
                        position: "relative",
                      }}
                    >
                      <i
                        className={
                          role === "emergency"
                            ? "bi bi-person-badge"
                            : role === "admin"
                            ? "bi bi-person-gear"
                            : "bi bi-card-text"
                        }
                        style={{
                          position: "absolute",
                          left: "14px",
                          top: "50%",
                          transform:
                            "translateY(-50%)",
                          color:
                            "var(--jc-subtle)",
                          fontSize: "15px",
                          zIndex: 2,
                        }}
                      />

                      <input
                        className="form-control"
                        placeholder={
                          role === "emergency"
                            ? t.enterProviderId
                            : role === "admin"
                            ? t.enterAdminId
                            : t.enterEmailHealthId
                        }
                        value={emailOrHealthId}
                        onChange={(event) =>
                          setEmailOrHealthId(
                            event.target.value
                          )
                        }
                        style={{
                          height: "45px",
                          borderRadius: "10px",
                          border:
                            "1px solid var(--jc-border)",
                          paddingLeft: "40px",
                          fontSize: "12px",
                          color: "var(--jc-text)",
                          background:
                            "var(--jc-input-bg)",
                          boxShadow: "none",
                        }}
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div
                    style={{
                      marginBottom: "17px",
                    }}
                  >
                    <label
                      style={{
                        display: "block",
                        fontSize: "10px",
                        fontWeight: 800,
                        color:
                          "var(--jc-text-secondary)",
                        marginBottom: "7px",
                        textTransform:
                          "uppercase",
                        letterSpacing:
                          "0.45px",
                      }}
                    >
                      {t.password}
                    </label>

                    <div
                      style={{
                        position: "relative",
                      }}
                    >
                      <i
                        className="bi bi-lock"
                        style={{
                          position: "absolute",
                          left: "14px",
                          top: "50%",
                          transform:
                            "translateY(-50%)",
                          color:
                            "var(--jc-subtle)",
                          fontSize: "15px",
                          zIndex: 2,
                        }}
                      />

                      <input
                        className="form-control"
                        type="password"
                        placeholder={t.enterPassword}
                        value={password}
                        onChange={(event) =>
                          setPassword(
                            event.target.value
                          )
                        }
                        style={{
                          height: "45px",
                          borderRadius: "10px",
                          border:
                            "1px solid var(--jc-border)",
                          paddingLeft: "40px",
                          fontSize: "12px",
                          color: "var(--jc-text)",
                          background:
                            "var(--jc-input-bg)",
                          boxShadow: "none",
                        }}
                      />
                    </div>
                  </div>

                  {/* Role */}
                  <div
                    style={{
                      marginBottom: "23px",
                    }}
                  >
                    <label
                      style={{
                        display: "block",
                        fontSize: "10px",
                        fontWeight: 800,
                        color:
                          "var(--jc-text-secondary)",
                        marginBottom: "8px",
                        textTransform:
                          "uppercase",
                        letterSpacing:
                          "0.45px",
                      }}
                    >
                      {t.signInAs}
                    </label>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(2, 1fr)",
                        gap: "8px",
                      }}
                    >

                      {/* Patient */}
                      <button
                        type="button"
                        onClick={() =>
                          setRole("patient")
                        }
                        style={{
                          height: "54px",
                          borderRadius: "11px",
                          border:
                            role === "patient"
                              ? "1.5px solid var(--jc-cyan)"
                              : "1px solid var(--jc-border)",
                          background:
                            role === "patient"
                              ? "rgba(8,145,178,0.07)"
                              : "var(--jc-panel)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent:
                            "center",
                          gap: "6px",
                          color:
                            role === "patient"
                              ? "var(--jc-cyan)"
                              : "var(--jc-muted)",
                          fontSize: "10px",
                          fontWeight: 750,
                          cursor: "pointer",
                        }}
                      >
                        <i className="bi bi-person-heart" />
                        {t.patient}
                      </button>

                      {/* Doctor */}
                      <button
                        type="button"
                        onClick={() =>
                          setRole("doctor")
                        }
                        style={{
                          height: "54px",
                          borderRadius: "11px",
                          border:
                            role === "doctor"
                              ? "1.5px solid var(--jc-green)"
                              : "1px solid var(--jc-border)",
                          background:
                            role === "doctor"
                              ? "rgba(5,150,105,0.07)"
                              : "var(--jc-panel)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent:
                            "center",
                          gap: "6px",
                          color:
                            role === "doctor"
                              ? "var(--jc-green)"
                              : "var(--jc-muted)",
                          fontSize: "10px",
                          fontWeight: 750,
                          cursor: "pointer",
                        }}
                      >
                        <i className="bi bi-heart-pulse" />
                        {t.doctor}
                      </button>

                      {/* Emergency Provider */}
                      <button
                        type="button"
                        onClick={() =>
                          setRole("emergency")
                        }
                        style={{
                          height: "54px",
                          borderRadius: "11px",
                          border:
                            role === "emergency"
                              ? "1.5px solid #dc2626"
                              : "1px solid var(--jc-border)",
                          background:
                            role === "emergency"
                              ? "rgba(220,38,38,0.07)"
                              : "var(--jc-panel)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent:
                            "center",
                          gap: "6px",
                          color:
                            role === "emergency"
                              ? "#dc2626"
                              : "var(--jc-muted)",
                          fontSize: "10px",
                          fontWeight: 750,
                          cursor: "pointer",
                        }}
                      >
                        <i className="bi bi-shield-exclamation" />
                        {t.emergency}
                      </button>

                      {/* Admin */}
                      <button
                        type="button"
                        onClick={() =>
                          setRole("admin")
                        }
                        style={{
                          height: "54px",
                          borderRadius: "11px",
                          border:
                            role === "admin"
                              ? "1.5px solid #2563eb"
                              : "1px solid var(--jc-border)",
                          background:
                            role === "admin"
                              ? "rgba(37,99,235,0.07)"
                              : "var(--jc-panel)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent:
                            "center",
                          gap: "6px",
                          color:
                            role === "admin"
                              ? "#2563eb"
                              : "var(--jc-muted)",
                          fontSize: "10px",
                          fontWeight: 750,
                          cursor: "pointer",
                        }}
                      >
                        <i className="bi bi-person-gear" />
                        {t.admin}
                      </button>

                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      height: "48px",
                      border: "none",
                      borderRadius: "11px",
                      background:
                        isEmergency
                          ? "#dc2626"
                          : isAdmin
                          ? "#2563eb"
                          : "linear-gradient(135deg, var(--jc-cyan), #06b6d4)",
                      color: "#ffffff",
                      fontSize: "12px",
                      fontWeight: 800,
                      display: "flex",
                      alignItems: "center",
                      justifyContent:
                        "center",
                      gap: "9px",
                      boxShadow:
                        isEmergency
                          ? "0 10px 24px rgba(220,38,38,0.18)"
                          : isAdmin
                          ? "0 10px 24px rgba(37,99,235,0.18)"
                          : "0 10px 24px rgba(8,145,178,0.18)",
                      cursor: "pointer",
                    }}
                  >
                    {t.signIn}
                    <i className="bi bi-arrow-right" />
                  </button>

                </form>

                {/* Security note */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    marginTop: "17px",
                    fontSize: "9px",
                    color: "var(--jc-subtle)",
                  }}
                >
                  <i
                    className="bi bi-shield-check"
                    style={{
                      color:
                        isEmergency
                          ? "#dc2626"
                          : isAdmin
                          ? "#2563eb"
                          : "var(--jc-green)",
                    }}
                  />

                  {t.securityNote}
                </div>

              </div>

              {/* Back */}
              <div
                style={{
                  textAlign: "center",
                  marginTop: "18px",
                }}
              >
                <Link
                  to="/"
                  style={{
                    color: "var(--jc-muted)",
                    textDecoration: "none",
                    fontSize: "11px",
                    fontWeight: 600,
                  }}
                >
                  <i className="bi bi-arrow-left me-1" />
                  {t.backHome}
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

