import React, {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

const LanguageContext = createContext(null);

export const LANGUAGES = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
  },
  {
    code: "mr",
    name: "Marathi",
    nativeName: "मराठी",
  },
  {
    code: "hi",
    name: "Hindi",
    nativeName: "हिंदी",
  },
  {
    code: "gu",
    name: "Gujarati",
    nativeName: "ગુજરાતી",
  },
  {
    code: "kn",
    name: "Kannada",
    nativeName: "ಕನ್ನಡ",
  },
  {
    code: "ta",
    name: "Tamil",
    nativeName: "தமிழ்",
  },
];

export const translations = {
  en: {
    login: "Login",
    getStarted: "Get Started",
    switchToLight: "Switch to light mode",
    switchToDark: "Switch to dark mode",

    eyebrow: "SMARTER CASE-TAKING. BETTER CARE.",
    heroTitle1: "Healthcare records",
    heroTitle2: "that",
    heroHighlight: "understand",
    heroTitle3: "people.",
    heroDescription:
      "Jeevan CaseCare helps clinicians capture structured patient histories through multilingual voice, adaptive questioning, and doctor-reviewed AI summaries.",

    consent: "Consent-based access",
    multilingual: "Marathi · Hindi · English",
    doctorReviewed: "Doctor-reviewed records",

    smarterCaseTaking: "Smarter Case-Taking",
    smarterCaseTakingText:
      "AI listens, understands, and asks the right questions.",

    traditionalModern: "Traditional + Modern",
    traditionalModernText:
      "Blend of Allopathic & Ayurvedic clinical frameworks.",

    secureCompliant: "Secure & Compliant",
    secureCompliantText:
      "Your data. Your trust. End-to-end security.",

    betterOutcomes: "Better Outcomes",
    betterOutcomesText:
      "Personalized care for every patient.",

    availableLanguages: "Available in multiple languages",
    more: "+ More",

    betterCare: "Better Care",
    smarterTechnology: "Smarter Technology",
    healthierTomorrow: "Healthier Tomorrow",

    voiceCaseTaking: "VOICE CASE-TAKING",
    liveCaseInsight: "LIVE CASE INSIGHT",
    active: "● Active",
    multilingualCaseTaking: "Multilingual case-taking",
    marathiDetected: "Marathi detected",
    doctorVerified: "Doctor verified",
    trustEveryStep: "Trust at every step",
  },

  mr: {
    login: "लॉगिन",
    getStarted: "सुरू करा",
    switchToLight: "लाइट मोडवर जा",
    switchToDark: "डार्क मोडवर जा",

    eyebrow: "स्मार्ट केस-टेकिंग. उत्तम उपचार.",
    heroTitle1: "रुग्णांच्या नोंदी",
    heroTitle2: "ज्या",
    heroHighlight: "समजून घेतात",
    heroTitle3: "प्रत्येक व्यक्तीला.",
    heroDescription:
      "Jeevan CaseCare बहुभाषिक आवाज, अनुकूल प्रश्न आणि डॉक्टरांनी तपासलेल्या AI सारांशाद्वारे रुग्णांचा संरचित वैद्यकीय इतिहास नोंदवण्यास मदत करते.",

    consent: "संमतीवर आधारित प्रवेश",
    multilingual: "मराठी · हिंदी · इंग्रजी",
    doctorReviewed: "डॉक्टरांनी तपासलेल्या नोंदी",

    smarterCaseTaking: "स्मार्ट केस-टेकिंग",
    smarterCaseTakingText:
      "AI ऐकते, समजते आणि योग्य प्रश्न विचारते.",

    traditionalModern: "पारंपरिक + आधुनिक",
    traditionalModernText:
      "अ‍ॅलोपॅथिक आणि आयुर्वेदिक वैद्यकीय पद्धतींचा समन्वय.",

    secureCompliant: "सुरक्षित आणि विश्वासार्ह",
    secureCompliantText:
      "तुमचा डेटा. तुमचा विश्वास. एंड-टू-एंड सुरक्षा.",

    betterOutcomes: "उत्तम परिणाम",
    betterOutcomesText:
      "प्रत्येक रुग्णासाठी वैयक्तिक उपचार.",

    availableLanguages: "अनेक भाषांमध्ये उपलब्ध",
    more: "+ अधिक",

    betterCare: "उत्तम उपचार",
    smarterTechnology: "स्मार्ट तंत्रज्ञान",
    healthierTomorrow: "निरोगी उद्याचा मार्ग",

    voiceCaseTaking: "आवाजाद्वारे केस-टेकिंग",
    liveCaseInsight: "लाइव्ह केस इनसाइट",
    active: "● सक्रिय",
    multilingualCaseTaking: "बहुभाषिक केस-टेकिंग",
    marathiDetected: "मराठी भाषा ओळखली",
    doctorVerified: "डॉक्टरांनी सत्यापित केले",
    trustEveryStep: "प्रत्येक टप्प्यावर विश्वास",
  },

  hi: {
    login: "लॉगिन",
    getStarted: "शुरू करें",
    switchToLight: "लाइट मोड पर जाएं",
    switchToDark: "डार्क मोड पर जाएं",

    eyebrow: "स्मार्ट केस-टेकिंग. बेहतर देखभाल.",
    heroTitle1: "स्वास्थ्य रिकॉर्ड",
    heroTitle2: "जो",
    heroHighlight: "समझते हैं",
    heroTitle3: "लोगों को।",
    heroDescription:
      "Jeevan CaseCare बहुभाषी आवाज़, अनुकूल प्रश्न और डॉक्टर द्वारा समीक्षा किए गए AI सारांश के माध्यम से संरचित रोगी इतिहास तैयार करने में मदद करता है।",

    consent: "सहमति-आधारित पहुंच",
    multilingual: "हिंदी · मराठी · अंग्रेज़ी",
    doctorReviewed: "डॉक्टर द्वारा समीक्षा किए गए रिकॉर्ड",

    smarterCaseTaking: "स्मार्ट केस-टेकिंग",
    smarterCaseTakingText:
      "AI सुनता है, समझता है और सही प्रश्न पूछता है।",

    traditionalModern: "पारंपरिक + आधुनिक",
    traditionalModernText:
      "एलोपैथिक और आयुर्वेदिक चिकित्सा पद्धतियों का संयोजन।",

    secureCompliant: "सुरक्षित और विश्वसनीय",
    secureCompliantText:
      "आपका डेटा। आपका विश्वास। एंड-टू-एंड सुरक्षा।",

    betterOutcomes: "बेहतर परिणाम",
    betterOutcomesText:
      "हर मरीज के लिए व्यक्तिगत देखभाल।",

    availableLanguages: "कई भाषाओं में उपलब्ध",
    more: "+ अधिक",

    betterCare: "बेहतर देखभाल",
    smarterTechnology: "स्मार्ट तकनीक",
    healthierTomorrow: "स्वस्थ कल",

    voiceCaseTaking: "वॉइस केस-टेकिंग",
    liveCaseInsight: "लाइव केस इनसाइट",
    active: "● सक्रिय",
    multilingualCaseTaking: "बहुभाषी केस-टेकिंग",
    marathiDetected: "मराठी पहचानी गई",
    doctorVerified: "डॉक्टर द्वारा सत्यापित",
    trustEveryStep: "हर कदम पर भरोसा",
  },

  gu: {
    login: "લૉગિન",
    getStarted: "શરૂ કરો",
    switchToLight: "લાઇટ મોડ પર જાઓ",
    switchToDark: "ડાર્ક મોડ પર જાઓ",

    eyebrow: "સ્માર્ટ કેસ-ટેકિંગ. વધુ સારી કાળજી.",
    heroTitle1: "હેલ્થકેર રેકોર્ડ્સ",
    heroTitle2: "જે",
    heroHighlight: "સમજે છે",
    heroTitle3: "લોકોને.",
    heroDescription:
      "Jeevan CaseCare બહુભાષી વૉઇસ, અનુકૂલનશીલ પ્રશ્નો અને ડૉક્ટર દ્વારા સમીક્ષા કરાયેલા AI સારાંશ દ્વારા દર્દીઓનો વ્યવસ્થિત ઇતિહાસ તૈયાર કરવામાં મદદ કરે છે.",

    consent: "સંમતિ આધારિત ઍક્સેસ",
    multilingual: "ગુજરાતી · હિન્દી · અંગ્રેજી",
    doctorReviewed: "ડૉક્ટર દ્વારા સમીક્ષા કરાયેલા રેકોર્ડ",

    smarterCaseTaking: "સ્માર્ટ કેસ-ટેકિંગ",
    smarterCaseTakingText:
      "AI સાંભળે છે, સમજે છે અને યોગ્ય પ્રશ્નો પૂછે છે.",

    traditionalModern: "પરંપરાગત + આધુનિક",
    traditionalModernText:
      "એલોપેથિક અને આયુર્વેદિક ક્લિનિકલ પદ્ધતિઓનું સંયોજન.",

    secureCompliant: "સુરક્ષિત અને વિશ્વસનીય",
    secureCompliantText:
      "તમારો ડેટા. તમારો વિશ્વાસ. એન્ડ-ટુ-એન્ડ સુરક્ષા.",

    betterOutcomes: "વધુ સારા પરિણામો",
    betterOutcomesText:
      "દરેક દર્દી માટે વ્યક્તિગત સંભાળ.",

    availableLanguages: "બહુવિધ ભાષાઓમાં ઉપલબ્ધ",
    more: "+ વધુ",

    betterCare: "વધુ સારી કાળજી",
    smarterTechnology: "સ્માર્ટ ટેક્નોલોજી",
    healthierTomorrow: "સ્વસ્થ આવતીકાલ",

    voiceCaseTaking: "વૉઇસ કેસ-ટેકિંગ",
    liveCaseInsight: "લાઇવ કેસ ઇનસાઇટ",
    active: "● સક્રિય",
    multilingualCaseTaking: "બહુભાષી કેસ-ટેકિંગ",
    marathiDetected: "મરાઠી ઓળખાઈ",
    doctorVerified: "ડૉક્ટર દ્વારા ચકાસાયેલ",
    trustEveryStep: "દરેક પગલે વિશ્વાસ",
  },

  kn: {
    login: "ಲಾಗಿನ್",
    getStarted: "ಪ್ರಾರಂಭಿಸಿ",
    switchToLight: "ಲೈಟ್ ಮೋಡ್‌ಗೆ ಬದಲಿಸಿ",
    switchToDark: "ಡಾರ್ಕ್ ಮೋಡ್‌ಗೆ ಬದಲಿಸಿ",

    eyebrow: "ಸ್ಮಾರ್ಟ್ ಕೇಸ್-ಟೇಕಿಂಗ್. ಉತ್ತಮ ಆರೈಕೆ.",
    heroTitle1: "ಆರೋಗ್ಯ ದಾಖಲೆಗಳು",
    heroTitle2: "ಜನರನ್ನು",
    heroHighlight: "ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವ",
    heroTitle3: "ದಾಖಲೆಗಳು.",
    heroDescription:
      "Jeevan CaseCare ಬಹುಭಾಷಾ ಧ್ವನಿ, ಹೊಂದಿಕೊಳ್ಳುವ ಪ್ರಶ್ನೆಗಳು ಮತ್ತು ವೈದ್ಯರಿಂದ ಪರಿಶೀಲಿಸಲಾದ AI ಸಾರಾಂಶಗಳ ಮೂಲಕ ರೋಗಿಗಳ ರಚಿತ ಇತಿಹಾಸವನ್ನು ದಾಖಲಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",

    consent: "ಒಪ್ಪಿಗೆ ಆಧಾರಿತ ಪ್ರವೇಶ",
    multilingual: "ಕನ್ನಡ · ಹಿಂದಿ · ಇಂಗ್ಲಿಷ್",
    doctorReviewed: "ವೈದ್ಯರಿಂದ ಪರಿಶೀಲಿಸಲಾದ ದಾಖಲೆಗಳು",

    smarterCaseTaking: "ಸ್ಮಾರ್ಟ್ ಕೇಸ್-ಟೇಕಿಂಗ್",
    smarterCaseTakingText:
      "AI ಕೇಳುತ್ತದೆ, ಅರ್ಥಮಾಡಿಕೊಳ್ಳುತ್ತದೆ ಮತ್ತು ಸರಿಯಾದ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳುತ್ತದೆ.",

    traditionalModern: "ಸಾಂಪ್ರದಾಯಿಕ + ಆಧುನಿಕ",
    traditionalModernText:
      "ಅಲೋಪಥಿಕ್ ಮತ್ತು ಆಯುರ್ವೇದ ವೈದ್ಯಕೀಯ ವಿಧಾನಗಳ ಸಂಯೋಜನೆ.",

    secureCompliant: "ಸುರಕ್ಷಿತ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹ",
    secureCompliantText:
      "ನಿಮ್ಮ ಡೇಟಾ. ನಿಮ್ಮ ನಂಬಿಕೆ. ಎಂಡ್-ಟು-ಎಂಡ್ ಭದ್ರತೆ.",

    betterOutcomes: "ಉತ್ತಮ ಫಲಿತಾಂಶಗಳು",
    betterOutcomesText:
      "ಪ್ರತಿ ರೋಗಿಗೂ ವೈಯಕ್ತಿಕ ಆರೈಕೆ.",

    availableLanguages: "ಹಲವು ಭಾಷೆಗಳಲ್ಲಿ ಲಭ್ಯ",
    more: "+ ಇನ್ನಷ್ಟು",

    betterCare: "ಉತ್ತಮ ಆರೈಕೆ",
    smarterTechnology: "ಸ್ಮಾರ್ಟ್ ತಂತ್ರಜ್ಞಾನ",
    healthierTomorrow: "ಆರೋಗ್ಯಕರ ನಾಳೆ",

    voiceCaseTaking: "ಧ್ವನಿ ಕೇಸ್-ಟೇಕಿಂಗ್",
    liveCaseInsight: "ಲೈವ್ ಕೇಸ್ ಇನ್ಸೈಟ್",
    active: "● ಸಕ್ರಿಯ",
    multilingualCaseTaking: "ಬಹುಭಾಷಾ ಕೇಸ್-ಟೇಕಿಂಗ್",
    marathiDetected: "ಮರಾಠಿ ಪತ್ತೆಯಾಗಿದೆ",
    doctorVerified: "ವೈದ್ಯರಿಂದ ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
    trustEveryStep: "ಪ್ರತಿ ಹಂತದಲ್ಲೂ ನಂಬಿಕೆ",
  },

  ta: {
    login: "உள்நுழை",
    getStarted: "தொடங்குங்கள்",
    switchToLight: "லைட் மோடுக்கு மாற்றவும்",
    switchToDark: "டார்க் மோடுக்கு மாற்றவும்",

    eyebrow: "ஸ்மார்ட் கேஸ்-டேக்கிங். சிறந்த பராமரிப்பு.",
    heroTitle1: "மருத்துவ பதிவுகள்",
    heroTitle2: "மக்களை",
    heroHighlight: "புரிந்துகொள்ளும்",
    heroTitle3: "பதிவுகள்.",
    heroDescription:
      "Jeevan CaseCare பலமொழி குரல், மாற்றத்திற்கேற்ப கேள்விகள் மற்றும் மருத்துவர் மதிப்பாய்வு செய்த AI சுருக்கங்கள் மூலம் நோயாளிகளின் கட்டமைக்கப்பட்ட வரலாற்றைப் பதிவு செய்ய உதவுகிறது.",

    consent: "ஒப்புதல் அடிப்படையிலான அணுகல்",
    multilingual: "தமிழ் · இந்தி · ஆங்கிலம்",
    doctorReviewed: "மருத்துவர் மதிப்பாய்வு செய்த பதிவுகள்",

    smarterCaseTaking: "ஸ்மார்ட் கேஸ்-டேக்கிங்",
    smarterCaseTakingText:
      "AI கேட்டு, புரிந்து கொண்டு சரியான கேள்விகளைக் கேட்கிறது.",

    traditionalModern: "பாரம்பரிய + நவீன",
    traditionalModernText:
      "அலோபதி மற்றும் ஆயுர்வேத மருத்துவ அணுகுமுறைகளின் இணைப்பு.",

    secureCompliant: "பாதுகாப்பான மற்றும் நம்பகமான",
    secureCompliantText:
      "உங்கள் தரவு. உங்கள் நம்பிக்கை. முழுமையான பாதுகாப்பு.",

    betterOutcomes: "சிறந்த முடிவுகள்",
    betterOutcomesText:
      "ஒவ்வொரு நோயாளிக்கும் தனிப்பட்ட பராமரிப்பு.",

    availableLanguages: "பல மொழிகளில் கிடைக்கும்",
    more: "+ மேலும்",

    betterCare: "சிறந்த பராமரிப்பு",
    smarterTechnology: "ஸ்மார்ட் தொழில்நுட்பம்",
    healthierTomorrow: "ஆரோக்கியமான நாளை",

    voiceCaseTaking: "குரல் கேஸ்-டேக்கிங்",
    liveCaseInsight: "நேரடி கேஸ் இன்சைட்",
    active: "● செயலில்",
    multilingualCaseTaking: "பலமொழி கேஸ்-டேக்கிங்",
    marathiDetected: "மராத்தி கண்டறியப்பட்டது",
    doctorVerified: "மருத்துவரால் சரிபார்க்கப்பட்டது",
    trustEveryStep: "ஒவ்வொரு நிலையிலும் நம்பிக்கை",
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("jeevanLanguage") || "en";
  });

  const changeLanguage = (code) => {
    setLanguage(code);
    localStorage.setItem("jeevanLanguage", code);
    document.documentElement.setAttribute("lang", code);
  };

  const value = useMemo(() => {
    return {
      language,
      setLanguage: changeLanguage,
      languages: LANGUAGES,
      t: translations[language] || translations.en,
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}