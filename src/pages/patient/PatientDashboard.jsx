import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import { useLanguage } from "../../context/LanguageContext";

const patientTranslations = {
  en: {
    patientOverview: "Patient Overview",
    goodMorning: "Good morning",
    healthJourney:
      "Your health journey, organized in one secure place.",
    healthId: "Health ID",
    jeevanHealthId: "Jeevan Health ID",
    protectedIdentity: "Protected identity",
    upcomingAppointment: "Upcoming appointment",
    generalMedicine: "General Medicine",
    activeAccessRequests: "Active access requests",
    awaitingConsent: "Awaiting your consent",
    recentHealthActivity: "Recent health activity",
    updatedToday: "Updated today",
    generalMedicineCase: "General Medicine case record",
    awaitingDoctorReview: "Awaiting doctor review",
    consentGranted: "Consent granted",
    temporaryAccess: "Temporary access for consultation",
    appointmentScheduled: "Appointment scheduled",
    appointmentTime: "General Medicine · 10:30 AM",
    today: "Today",
    yesterday: "Yesterday",
    twoDaysAgo: "2 days ago",
    emergencyInformation: "Emergency information",
    emergencyDescription:
      "Keep your critical information ready for authorized emergency providers.",
    allergies: "Allergies",
    bloodGroup: "Blood group",
    age: "Age",
    gender: "Gender",
    notAdded: "Not added",
    updateEmergencyInfo: "Update emergency info",
    secureWorkspace: "Secure healthcare workspace",
    securityDescription:
      "Your health information is accessed through consent-based controls and audit tracking.",
    healthIdPending: "Health ID pending",
    scanForEmergencyAccess: "Scan for emergency access",
    patient: "Patient",
    consentBasedAccess: "Consent-based healthcare access",
    qrGenerated: "QR code available",
    qrCode: "Health ID QR Code",
    scanInstruction:
      "Show this QR code to an authorized emergency provider.",
    downloadHealthId: "Download Health ID",
  },

  mr: {
    patientOverview: "रुग्णाचा आढावा",
    goodMorning: "शुभ प्रभात",
    healthJourney:
      "तुमचा आरोग्य प्रवास एका सुरक्षित ठिकाणी व्यवस्थित ठेवला आहे.",
    healthId: "हेल्थ ID",
    jeevanHealthId: "जीवन हेल्थ ID",
    protectedIdentity: "सुरक्षित ओळख",
    upcomingAppointment: "आगामी भेट",
    generalMedicine: "जनरल मेडिसिन",
    activeAccessRequests: "सक्रिय प्रवेश विनंत्या",
    awaitingConsent: "तुमच्या संमतीची प्रतीक्षा",
    recentHealthActivity: "अलीकडील आरोग्य गतिविधी",
    updatedToday: "आज अपडेट केले",
    generalMedicineCase: "जनरल मेडिसिन केस रेकॉर्ड",
    awaitingDoctorReview: "डॉक्टरांच्या तपासणीची प्रतीक्षा",
    consentGranted: "संमती दिली",
    temporaryAccess: "तपासणीसाठी तात्पुरता प्रवेश",
    appointmentScheduled: "भेट निश्चित केली",
    appointmentTime: "जनरल मेडिसिन · सकाळी १०:३०",
    today: "आज",
    yesterday: "काल",
    twoDaysAgo: "२ दिवसांपूर्वी",
    emergencyInformation: "आपत्कालीन माहिती",
    emergencyDescription:
      "अधिकृत आपत्कालीन सेवा प्रदात्यांसाठी तुमची महत्त्वाची माहिती तयार ठेवा.",
    allergies: "अॅलर्जी",
    bloodGroup: "रक्तगट",
    age: "वय",
    gender: "लिंग",
    notAdded: "नोंद केलेली नाही",
    updateEmergencyInfo: "आपत्कालीन माहिती अपडेट करा",
    secureWorkspace: "सुरक्षित आरोग्य कार्यक्षेत्र",
    securityDescription:
      "तुमच्या आरोग्य माहितीचा प्रवेश संमती-आधारित नियंत्रण आणि ऑडिट ट्रॅकिंगद्वारे केला जातो.",
    healthIdPending: "हेल्थ ID प्रलंबित",
    scanForEmergencyAccess: "आपत्कालीन प्रवेशासाठी स्कॅन करा",
    patient: "रुग्ण",
    consentBasedAccess: "संमती-आधारित आरोग्यसेवा प्रवेश",
    qrGenerated: "QR कोड उपलब्ध आहे",
    qrCode: "हेल्थ ID QR कोड",
    scanInstruction:
      "हा QR कोड अधिकृत आपत्कालीन सेवा प्रदात्याला दाखवा.",
    downloadHealthId: "हेल्थ ID डाउनलोड करा",
  },

  hi: {
    patientOverview: "मरीज़ का अवलोकन",
    goodMorning: "सुप्रभात",
    healthJourney:
      "आपकी स्वास्थ्य यात्रा एक सुरक्षित स्थान पर व्यवस्थित है।",
    healthId: "हेल्थ ID",
    jeevanHealthId: "जीवन हेल्थ ID",
    protectedIdentity: "सुरक्षित पहचान",
    upcomingAppointment: "आगामी अपॉइंटमेंट",
    generalMedicine: "जनरल मेडिसिन",
    activeAccessRequests: "सक्रिय एक्सेस अनुरोध",
    awaitingConsent: "आपकी सहमति की प्रतीक्षा",
    recentHealthActivity: "हाल की स्वास्थ्य गतिविधि",
    updatedToday: "आज अपडेट किया गया",
    generalMedicineCase: "जनरल मेडिसिन केस रिकॉर्ड",
    awaitingDoctorReview: "डॉक्टर की समीक्षा की प्रतीक्षा",
    consentGranted: "सहमति दी गई",
    temporaryAccess: "परामर्श के लिए अस्थायी एक्सेस",
    appointmentScheduled: "अपॉइंटमेंट निर्धारित",
    appointmentTime: "जनरल मेडिसिन · सुबह 10:30 बजे",
    today: "आज",
    yesterday: "कल",
    twoDaysAgo: "2 दिन पहले",
    emergencyInformation: "आपातकालीन जानकारी",
    emergencyDescription:
      "अधिकृत आपातकालीन सेवा प्रदाताओं के लिए अपनी महत्वपूर्ण जानकारी तैयार रखें।",
    allergies: "एलर्जी",
    bloodGroup: "ब्लड ग्रुप",
    age: "उम्र",
    gender: "लिंग",
    notAdded: "जोड़ा नहीं गया",
    updateEmergencyInfo: "आपातकालीन जानकारी अपडेट करें",
    secureWorkspace: "सुरक्षित स्वास्थ्य कार्यक्षेत्र",
    securityDescription:
      "आपकी स्वास्थ्य जानकारी को सहमति-आधारित नियंत्रण और ऑडिट ट्रैकिंग के माध्यम से एक्सेस किया जाता है।",
    healthIdPending: "हेल्थ ID लंबित",
    scanForEmergencyAccess: "आपातकालीन एक्सेस के लिए स्कैन करें",
    patient: "मरीज़",
    consentBasedAccess: "सहमति-आधारित स्वास्थ्य सेवा एक्सेस",
    qrGenerated: "QR कोड उपलब्ध है",
    qrCode: "हेल्थ ID QR कोड",
    scanInstruction:
      "यह QR कोड अधिकृत आपातकालीन सेवा प्रदाता को दिखाएं।",
    downloadHealthId: "हेल्थ ID डाउनलोड करें",
  },

  gu: {
    patientOverview: "દર્દીનો અવલોકન",
    goodMorning: "સુપ્રભાત",
    healthJourney:
      "તમારી આરોગ્ય યાત્રા એક સુરક્ષિત સ્થળે વ્યવસ્થિત છે.",
    healthId: "હેલ્થ ID",
    jeevanHealthId: "જીવન હેલ્થ ID",
    protectedIdentity: "સુરક્ષિત ઓળખ",
    upcomingAppointment: "આગામી મુલાકાત",
    generalMedicine: "જનરલ મેડિસિન",
    activeAccessRequests: "સક્રિય ઍક્સેસ વિનંતીઓ",
    awaitingConsent: "તમારી સંમતિની રાહ જોવાઈ રહી છે",
    recentHealthActivity: "તાજેતરની આરોગ્ય પ્રવૃત્તિ",
    updatedToday: "આજે અપડેટ થયું",
    generalMedicineCase: "જનરલ મેડિસિન કેસ રેકોર્ડ",
    awaitingDoctorReview: "ડૉક્ટરની સમીક્ષાની રાહ જોવાઈ રહી છે",
    consentGranted: "સંમતિ આપવામાં આવી",
    temporaryAccess: "કન્સલ્ટેશન માટે અસ્થાયી ઍક્સેસ",
    appointmentScheduled: "મુલાકાત નિર્ધારિત",
    appointmentTime: "જનરલ મેડિસિન · સવારે 10:30",
    today: "આજે",
    yesterday: "ગઈકાલે",
    twoDaysAgo: "2 દિવસ પહેલાં",
    emergencyInformation: "કટોકટીની માહિતી",
    emergencyDescription:
      "અધિકૃત ઇમરજન્સી પ્રોવાઇડર્સ માટે તમારી મહત્વપૂર્ણ માહિતી તૈયાર રાખો.",
    allergies: "એલર્જી",
    bloodGroup: "બ્લડ ગ્રુપ",
    age: "ઉંમર",
    gender: "લિંગ",
    notAdded: "ઉમેરવામાં આવ્યું નથી",
    updateEmergencyInfo: "કટોકટીની માહિતી અપડેટ કરો",
    secureWorkspace: "સુરક્ષિત હેલ્થકેર વર્કસ્પેસ",
    securityDescription:
      "તમારી આરોગ્ય માહિતી સંમતિ આધારિત નિયંત્રણો અને ઑડિટ ટ્રેકિંગ દ્વારા ઍક્સેસ કરવામાં આવે છે.",
    healthIdPending: "હેલ્થ ID બાકી છે",
    scanForEmergencyAccess: "ઇમરજન્સી ઍક્સેસ માટે સ્કેન કરો",
    patient: "દર્દી",
    consentBasedAccess: "સંમતિ આધારિત હેલ્થકેર ઍક્સેસ",
    qrGenerated: "QR કોડ ઉપલબ્ધ છે",
    qrCode: "હેલ્થ ID QR કોડ",
    scanInstruction:
      "આ QR કોડ અધિકૃત ઇમરજન્સી પ્રોવાઇડરને બતાવો.",
    downloadHealthId: "હેલ્થ ID ડાઉનલોડ કરો",
  },

  kn: {
    patientOverview: "ರೋಗಿಯ ಅವಲೋಕನ",
    goodMorning: "ಶುಭೋದಯ",
    healthJourney:
      "ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರಯಾಣವನ್ನು ಒಂದೇ ಸುರಕ್ಷಿತ ಸ್ಥಳದಲ್ಲಿ ವ್ಯವಸ್ಥಿತಗೊಳಿಸಲಾಗಿದೆ.",
    healthId: "ಹೆಲ್ತ್ ID",
    jeevanHealthId: "ಜೀವನ್ ಹೆಲ್ತ್ ID",
    protectedIdentity: "ಸುರಕ್ಷಿತ ಗುರುತು",
    upcomingAppointment: "ಮುಂಬರುವ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್",
    generalMedicine: "ಜನರಲ್ ಮೆಡಿಸಿನ್",
    activeAccessRequests: "ಸಕ್ರಿಯ ಪ್ರವೇಶ ವಿನಂತಿಗಳು",
    awaitingConsent: "ನಿಮ್ಮ ಒಪ್ಪಿಗೆಯ ನಿರೀಕ್ಷೆಯಲ್ಲಿದೆ",
    recentHealthActivity: "ಇತ್ತೀಚಿನ ಆರೋಗ್ಯ ಚಟುವಟಿಕೆ",
    updatedToday: "ಇಂದು ನವೀಕರಿಸಲಾಗಿದೆ",
    generalMedicineCase: "ಜನರಲ್ ಮೆಡಿಸಿನ್ ಕೇಸ್ ದಾಖಲೆ",
    awaitingDoctorReview: "ವೈದ್ಯರ ಪರಿಶೀಲನೆಯ ನಿರೀಕ್ಷೆಯಲ್ಲಿದೆ",
    consentGranted: "ಒಪ್ಪಿಗೆ ನೀಡಲಾಗಿದೆ",
    temporaryAccess: "ಸಮಾಲೋಚನೆಗಾಗಿ ತಾತ್ಕಾಲಿಕ ಪ್ರವೇಶ",
    appointmentScheduled: "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ನಿಗದಿಯಾಗಿದೆ",
    appointmentTime: "ಜನರಲ್ ಮೆಡಿಸಿನ್ · ಬೆಳಿಗ್ಗೆ 10:30",
    today: "ಇಂದು",
    yesterday: "ನಿನ್ನೆ",
    twoDaysAgo: "2 ದಿನಗಳ ಹಿಂದೆ",
    emergencyInformation: "ತುರ್ತು ಮಾಹಿತಿ",
    emergencyDescription:
      "ಅಧಿಕೃತ ತುರ್ತು ಸೇವಾ ಪೂರೈಕೆದಾರರಿಗಾಗಿ ನಿಮ್ಮ ಪ್ರಮುಖ ಮಾಹಿತಿಯನ್ನು ಸಿದ್ಧವಾಗಿಡಿ.",
    allergies: "ಅಲರ್ಜಿಗಳು",
    bloodGroup: "ರಕ್ತದ ಗುಂಪು",
    age: "ವಯಸ್ಸು",
    gender: "ಲಿಂಗ",
    notAdded: "ಸೇರಿಸಲಾಗಿಲ್ಲ",
    updateEmergencyInfo: "ತುರ್ತು ಮಾಹಿತಿಯನ್ನು ನವೀಕರಿಸಿ",
    secureWorkspace: "ಸುರಕ್ಷಿತ ಆರೋಗ್ಯ ಕಾರ್ಯಕ್ಷೇತ್ರ",
    securityDescription:
      "ನಿಮ್ಮ ಆರೋಗ್ಯ ಮಾಹಿತಿಯನ್ನು ಒಪ್ಪಿಗೆ ಆಧಾರಿತ ನಿಯಂತ್ರಣಗಳು ಮತ್ತು ಆಡಿಟ್ ಟ್ರ್ಯಾಕಿಂಗ್ ಮೂಲಕ ಪ್ರವೇಶಿಸಲಾಗುತ್ತದೆ.",
    healthIdPending: "ಹೆಲ್ತ್ ID ಬಾಕಿಯಿದೆ",
    scanForEmergencyAccess: "ತುರ್ತು ಪ್ರವೇಶಕ್ಕಾಗಿ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ",
    patient: "ರೋಗಿ",
    consentBasedAccess: "ಒಪ್ಪಿಗೆ ಆಧಾರಿತ ಆರೋಗ್ಯ ಸೇವಾ ಪ್ರವೇಶ",
    qrGenerated: "QR ಕೋಡ್ ಲಭ್ಯವಿದೆ",
    qrCode: "ಹೆಲ್ತ್ ID QR ಕೋಡ್",
    scanInstruction:
      "ಈ QR ಕೋಡ್ ಅನ್ನು ಅಧಿಕೃತ ತುರ್ತು ಸೇವಾ ಪೂರೈಕೆದಾರರಿಗೆ ತೋರಿಸಿ.",
    downloadHealthId: "ಹೆಲ್ತ್ ID ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
  },

  ta: {
    patientOverview: "நோயாளர் மேலோட்டம்",
    goodMorning: "காலை வணக்கம்",
    healthJourney:
      "உங்கள் சுகாதாரப் பயணம் ஒரே பாதுகாப்பான இடத்தில் ஒழுங்குபடுத்தப்பட்டுள்ளது.",
    healthId: "ஹெல்த் ID",
    jeevanHealthId: "ஜீவன் ஹெல்த் ID",
    protectedIdentity: "பாதுகாக்கப்பட்ட அடையாளம்",
    upcomingAppointment: "வரவிருக்கும் சந்திப்பு",
    generalMedicine: "ஜெனரல் மெடிசின்",
    activeAccessRequests: "செயலில் உள்ள அணுகல் கோரிக்கைகள்",
    awaitingConsent: "உங்கள் ஒப்புதலுக்காக காத்திருக்கிறது",
    recentHealthActivity: "சமீபத்திய சுகாதார செயல்பாடு",
    updatedToday: "இன்று புதுப்பிக்கப்பட்டது",
    generalMedicineCase: "ஜெனரல் மெடிசின் கேஸ் பதிவு",
    awaitingDoctorReview: "மருத்துவர் மதிப்பாய்வுக்காக காத்திருக்கிறது",
    consentGranted: "ஒப்புதல் வழங்கப்பட்டது",
    temporaryAccess: "ஆலோசனைக்கான தற்காலிக அணுகல்",
    appointmentScheduled: "சந்திப்பு திட்டமிடப்பட்டது",
    appointmentTime: "ஜெனரல் மெடிசின் · காலை 10:30",
    today: "இன்று",
    yesterday: "நேற்று",
    twoDaysAgo: "2 நாட்களுக்கு முன்பு",
    emergencyInformation: "அவசர தகவல்",
    emergencyDescription:
      "அங்கீகரிக்கப்பட்ட அவசர சேவை வழங்குநர்களுக்காக உங்கள் முக்கியமான தகவல்களைத் தயாராக வைத்திருங்கள்.",
    allergies: "ஒவ்வாமைகள்",
    bloodGroup: "இரத்த வகை",
    age: "வயது",
    gender: "பாலினம்",
    notAdded: "சேர்க்கப்படவில்லை",
    updateEmergencyInfo: "அவசர தகவலைப் புதுப்பிக்கவும்",
    secureWorkspace: "பாதுகாப்பான சுகாதார பணியிடம்",
    securityDescription:
      "உங்கள் சுகாதாரத் தகவல்கள் ஒப்புதல் அடிப்படையிலான கட்டுப்பாடுகள் மற்றும் தணிக்கை கண்காணிப்பு மூலம் அணுகப்படுகின்றன.",
    healthIdPending: "ஹெல்த் ID நிலுவையில் உள்ளது",
    scanForEmergencyAccess: "அவசர அணுகலுக்கு ஸ்கேன் செய்யவும்",
    patient: "நோயாளர்",
    consentBasedAccess: "ஒப்புதல் அடிப்படையிலான சுகாதார அணுகல்",
    qrGenerated: "QR குறியீடு உள்ளது",
    qrCode: "ஹெல்த் ID QR குறியீடு",
    scanInstruction:
      "இந்த QR குறியீட்டை அங்கீகரிக்கப்பட்ட அவசர சேவை வழங்குநரிடம் காட்டவும்.",
    downloadHealthId: "ஹெல்த் ID பதிவிறக்கவும்",
  },
};

function calculateAge(dateOfBirth) {
  if (!dateOfBirth) {
    return null;
  }

  const birthDate = new Date(dateOfBirth);

  if (Number.isNaN(birthDate.getTime())) {
    return null;
  }

  const today = new Date();

  let age =
    today.getFullYear() -
    birthDate.getFullYear();

  const monthDifference =
    today.getMonth() -
    birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (
      monthDifference === 0 &&
      today.getDate() < birthDate.getDate()
    )
  ) {
    age--;
  }

  return age >= 0 ? age : null;
}

export default function PatientDashboard() {
  const { language } = useLanguage();

  const t =
    patientTranslations[language] ||
    patientTranslations.en;

  const [user, setUser] = useState(null);
  const [qrDataUrl, setQrDataUrl] = useState("");

  useEffect(() => {
    const loadUser = () => {
      const storedUser =
        localStorage.getItem("jeevanUser");

      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (error) {
          console.error(
            "Unable to load user:",
            error
          );
        }
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
  }, []);

  const patientName =
    user?.name || "Patient";

  const nameParts = patientName
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  const firstName =
    nameParts[0] || "Patient";

  const displayFirstName =
    firstName.charAt(0).toUpperCase() +
    firstName.slice(1).toLowerCase();

  const healthId =
    user?.healthId ||
    t.healthIdPending;

  const patientAge =
    calculateAge(user?.dateOfBirth);

  const patientGender =
    user?.gender || null;

  useEffect(() => {
    const generateVisibleQr = async () => {
      if (!user?.healthId) {
        setQrDataUrl("");
        return;
      }

      try {
        const qrData =
          "JEEVAN://PATIENT/" +
          user.healthId;

        const generatedQr =
          await QRCode.toDataURL(
            qrData,
            {
              width: 260,
              margin: 2,
              errorCorrectionLevel: "H",
              color: {
                dark: "#0f172a",
                light: "#ffffff",
              },
            }
          );

        setQrDataUrl(generatedQr);
      } catch (error) {
        console.error(
          "Unable to generate visible QR:",
          error
        );

        setQrDataUrl("");
      }
    };

    generateVisibleQr();
  }, [user]);

  const downloadHealthId = async () => {
    const canvas =
      document.createElement("canvas");

    const ctx =
      canvas.getContext("2d");

    canvas.width = 1400;
    canvas.height = 800;

    ctx.fillStyle = "#0f172a";
    ctx.fillRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    ctx.strokeStyle = "#06b6d4";
    ctx.lineWidth = 3;
    ctx.strokeRect(
      30,
      30,
      1340,
      740
    );

    ctx.fillStyle = "#06b6d4";
    ctx.font =
      "bold 34px Arial";

    ctx.fillText(
      "Jeevan CaseCare",
      80,
      100
    );

    ctx.fillStyle = "#94a3b8";
    ctx.font =
      "20px Arial";

    ctx.fillText(
      "AI-powered patient case-taking & EHR",
      80,
      135
    );

    ctx.fillStyle = "#ffffff";
    ctx.font =
      "bold 26px Arial";

    ctx.fillText(
      "JEEVAN HEALTH ID",
      80,
      230
    );

    ctx.fillStyle = "#ffffff";
    ctx.font =
      "bold 52px Arial";

    ctx.fillText(
      healthId,
      80,
      310
    );

    ctx.fillStyle = "#cbd5e1";
    ctx.font =
      "26px Arial";

    ctx.fillText(
      t.patient,
      80,
      400
    );

    ctx.fillStyle = "#ffffff";
    ctx.font =
      "bold 32px Arial";

    ctx.fillText(
      patientName,
      80,
      445
    );

    ctx.fillStyle = "#22c55e";
    ctx.font =
      "22px Arial";

    ctx.fillText(
      t.protectedIdentity,
      80,
      525
    );

    ctx.fillStyle = "#64748b";
    ctx.font =
      "18px Arial";

    ctx.fillText(
      t.consentBasedAccess,
      80,
      600
    );

    try {
      const qrData =
        "JEEVAN://PATIENT/" +
        healthId;

      const qrDataUrlForDownload =
        await QRCode.toDataURL(
          qrData,
          {
            width: 260,
            margin: 2,
            errorCorrectionLevel: "H",
            color: {
              dark: "#0f172a",
              light: "#ffffff",
            },
          }
        );

      const qrImage =
        new Image();

      qrImage.onload = () => {
        ctx.fillStyle = "#ffffff";

        ctx.fillRect(
          1040,
          180,
          280,
          280
        );

        ctx.drawImage(
          qrImage,
          1050,
          190,
          260,
          260
        );

        ctx.fillStyle = "#ffffff";
        ctx.font =
          "bold 18px Arial";

        ctx.textAlign = "center";

        ctx.fillText(
          t.scanForEmergencyAccess,
          1180,
          500
        );

        ctx.textAlign = "left";

        const link =
          document.createElement("a");

        link.download =
          "Jeevan-Health-ID-" +
          healthId +
          ".png";

        link.href =
          canvas.toDataURL("image/png");

        link.click();
      };

      qrImage.src =
        qrDataUrlForDownload;
    } catch (error) {
      console.error(
        "Unable to generate QR:",
        error
      );

      const link =
        document.createElement("a");

      link.download =
        "Jeevan-Health-ID-" +
        healthId +
        ".png";

      link.href =
        canvas.toDataURL("image/png");

      link.click();
    }
  };

  const recentActivities = [
    {
      icon: "bi-file-earmark-medical",
      title: t.generalMedicineCase,
      description:
        t.awaitingDoctorReview,
      time: t.today,
    },
    {
      icon: "bi-shield-check",
      title: t.consentGranted,
      description:
        t.temporaryAccess,
      time: t.yesterday,
    },
    {
      icon: "bi-calendar-check",
      title: t.appointmentScheduled,
      description:
        t.appointmentTime,
      time: t.twoDaysAgo,
    },
  ];

  return (
    <div className="container-fluid px-0">

      {/* PAGE HEADER */}

      <div className="d-flex justify-content-between align-items-start mb-4">

        <div>
          <div
            className="text-uppercase fw-semibold mb-2"
            style={{
              color: "#06b6d4",
              fontSize: "12px",
              letterSpacing: "2px",
            }}
          >
            {t.patientOverview}
          </div>

          <h1 className="fw-bold mb-2">
            {t.goodMorning},{" "}
            {displayFirstName} 👋
          </h1>

          <p className="text-secondary mb-0">
            {t.healthJourney}
          </p>
        </div>

        <button
          type="button"
          onClick={downloadHealthId}
          className="btn btn-outline-light d-flex align-items-center gap-2"
        >
          <i className="bi bi-download" />
          {t.downloadHealthId}
        </button>

      </div>


      {/* SUMMARY CARDS */}

      <div className="row g-4 mb-4">

        {/* HEALTH ID */}

        <div className="col-xl-4 col-md-6">
          <div className="jc-dashboard-card h-100">

            <div className="small text-secondary mb-3">
              {t.jeevanHealthId}
            </div>

            <div
              className="fw-bold mb-2"
              style={{
                fontSize: "28px",
                letterSpacing: "1px",
              }}
            >
              {healthId}
            </div>

            <div className="small text-success d-flex align-items-center gap-2">
              <i className="bi bi-shield-check" />
              {t.protectedIdentity}
            </div>

            <div className="small text-secondary mt-3 d-flex align-items-center gap-2">
              <i className="bi bi-qr-code" />
              {t.qrGenerated}
            </div>

          </div>
        </div>


        {/* APPOINTMENT */}

        <div className="col-xl-4 col-md-6">
          <div className="jc-dashboard-card h-100">

            <div className="small text-secondary mb-3">
              {t.upcomingAppointment}
            </div>

            <div
              className="fw-bold mb-2"
              style={{
                fontSize: "28px",
              }}
            >
              18 Sep 2026
            </div>

            <div className="small text-success d-flex align-items-center gap-2">
              <i className="bi bi-calendar-check" />
              {t.generalMedicine}
            </div>

          </div>
        </div>


        {/* ACCESS REQUESTS */}

        <div className="col-xl-4 col-md-6">
          <div className="jc-dashboard-card h-100">

            <div className="small text-secondary mb-3">
              {t.activeAccessRequests}
            </div>

            <div
              className="fw-bold mb-2"
              style={{
                fontSize: "28px",
              }}
            >
              02
            </div>

            <div className="small text-secondary d-flex align-items-center gap-2">
              <i className="bi bi-clock" />
              {t.awaitingConsent}
            </div>

          </div>
        </div>

      </div>


      {/* LOWER CONTENT */}

      <div className="row g-4">

        {/* RECENT ACTIVITY */}

        <div className="col-xl-8">

          <div className="jc-dashboard-card h-100">

            <div className="d-flex justify-content-between align-items-center mb-3">

              <h4 className="fw-bold mb-0">
                {t.recentHealthActivity}
              </h4>

              <span
                className="badge rounded-pill px-3 py-2"
                style={{
                  color: "#06b6d4",
                  background:
                    "rgba(6, 182, 212, 0.08)",
                  border:
                    "1px solid rgba(6, 182, 212, 0.3)",
                }}
              >
                {t.updatedToday}
              </span>

            </div>

            <div
              style={{
                borderTop:
                  "1px solid #1e293b",
              }}
            />

            {recentActivities.map(
              (activity, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center py-4"
                  style={{
                    borderBottom:
                      index !==
                      recentActivities.length - 1
                        ? "1px solid #1e293b"
                        : "none",
                  }}
                >

                  <div
                    className="d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "42px",
                      height: "42px",
                      minWidth: "42px",
                      borderRadius: "10px",
                      background:
                        "rgba(6, 182, 212, 0.08)",
                      color: "#06b6d4",
                    }}
                  >
                    <i
                      className={
                        "bi " +
                        activity.icon
                      }
                      style={{
                        fontSize: "18px",
                      }}
                    />
                  </div>

                  <div className="flex-grow-1">

                    <div className="fw-semibold">
                      {activity.title}
                    </div>

                    <div className="small text-secondary mt-1">
                      {activity.description}
                    </div>

                  </div>

                  <div className="small text-secondary">
                    {activity.time}
                  </div>

                </div>
              )
            )}

          </div>

        </div>


        {/* EMERGENCY / PATIENT INFORMATION */}

        <div className="col-xl-4">

          <div
            className="jc-dashboard-card h-100"
            style={{
              borderColor:
                "rgba(244, 63, 94, 0.45)",
            }}
          >

            <div className="d-flex justify-content-between align-items-center mb-4">

              <h4 className="fw-bold mb-0">
                {t.emergencyInformation}
              </h4>

              <i
                className="bi bi-heart-pulse"
                style={{
                  color: "#f43f5e",
                  fontSize: "20px",
                }}
              />

            </div>

            <p className="text-secondary small mb-4">
              {t.emergencyDescription}
            </p>


            {/* AGE */}

            <div
              className="d-flex justify-content-between py-3"
              style={{
                borderBottom:
                  "1px solid #1e293b",
              }}
            >
              <span className="text-secondary">
                {t.age}
              </span>

              <strong>
                {patientAge !== null
                  ? patientAge
                  : t.notAdded}
              </strong>
            </div>


            {/* GENDER */}

            <div
              className="d-flex justify-content-between py-3"
              style={{
                borderBottom:
                  "1px solid #1e293b",
              }}
            >
              <span className="text-secondary">
                {t.gender}
              </span>

              <strong>
                {patientGender ||
                  t.notAdded}
              </strong>
            </div>


            {/* ALLERGIES */}

            <div
              className="d-flex justify-content-between py-3"
              style={{
                borderBottom:
                  "1px solid #1e293b",
              }}
            >
              <span className="text-secondary">
                {t.allergies}
              </span>

              <strong>
                {user?.allergies ||
                  t.notAdded}
              </strong>
            </div>


            {/* BLOOD GROUP */}

            <div
              className="d-flex justify-content-between py-3"
              style={{
                borderBottom:
                  "1px solid #1e293b",
              }}
            >
              <span className="text-secondary">
                {t.bloodGroup}
              </span>

              <strong>
                {user?.bloodGroup ||
                  t.notAdded}
              </strong>
            </div>

            <button
              type="button"
              className="btn w-100 mt-4"
              style={{
                color: "#fb7185",
                border:
                  "1px solid rgba(244, 63, 94, 0.65)",
                background:
                  "rgba(244, 63, 63, 0.08)",
              }}
            >
              {t.updateEmergencyInfo}
            </button>

          </div>

        </div>

      </div>


      {/* VISIBLE QR CODE */}

      <div className="row g-4 mt-1">

        <div className="col-xl-6">

          <div className="jc-dashboard-card h-100">

            <div className="d-flex justify-content-between align-items-center mb-3">

              <div>
                <h4 className="fw-bold mb-1">
                  {t.qrCode}
                </h4>

                <p className="small text-secondary mb-0">
                  {t.scanInstruction}
                </p>
              </div>

              <i
                className="bi bi-qr-code"
                style={{
                  color: "#06b6d4",
                  fontSize: "26px",
                }}
              />

            </div>

            <div
              className="d-flex flex-column align-items-center justify-content-center p-4"
              style={{
                background: "#ffffff",
                borderRadius: "14px",
                minHeight: "320px",
              }}
            >

              {qrDataUrl ? (
                <img
                  src={qrDataUrl}
                  alt="Jeevan Health ID QR Code"
                  style={{
                    width: "260px",
                    height: "260px",
                    maxWidth: "100%",
                  }}
                />
              ) : (
                <div
                  className="text-center"
                  style={{
                    color: "#0f172a",
                  }}
                >
                  <i
                    className="bi bi-qr-code"
                    style={{
                      fontSize: "80px",
                    }}
                  />

                  <div className="mt-2">
                    {t.healthIdPending}
                  </div>
                </div>
              )}

            </div>

            <div className="small text-secondary mt-3 text-center">
              {healthId}
            </div>

          </div>

        </div>

      </div>


      {/* SECURITY NOTICE */}

      <div
        className="jc-dashboard-card mt-4"
        style={{
          borderColor:
            "rgba(34, 197, 94, 0.25)",
        }}
      >

        <div className="d-flex align-items-center gap-3">

          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              width: "42px",
              height: "42px",
              minWidth: "42px",
              borderRadius: "10px",
              background:
                "rgba(34, 197, 94, 0.08)",
              color: "#22c55e",
            }}
          >
            <i className="bi bi-shield-lock" />
          </div>

          <div>

            <div className="fw-semibold">
              {t.secureWorkspace}
            </div>

            <div className="small text-secondary">
              {t.securityDescription}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}