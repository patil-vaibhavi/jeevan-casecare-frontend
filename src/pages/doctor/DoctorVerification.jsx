import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const verificationTranslations = {
  en: {
    caseManagement: "CASE MANAGEMENT",
    title: "Doctor Verification",
    description:
      "Review the AI-generated case information before verification.",
    verifiedDoctor: "Verified Doctor",

    caseOverview: "Case Overview",
    caseOverviewSubtitle:
      "Patient and case identification",

    patient: "Patient",
    caseId: "Case ID",
    caseType: "Case Type",
    verificationStatus: "Verification Status",

    verified: "Verified",
    awaitingReview: "Awaiting Review",

    clinicalInformation: "Clinical Information",
    clinicalInformationSubtitle:
      "Key information extracted from the AI case-taking session",

    chiefComplaint: "Chief Complaint",
    severity: "Severity",
    onset: "Onset",
    frequency: "Frequency",
    aggravatingFactors: "Aggravating Factors",
    relievingFactors: "Relieving Factors",
    associatedSymptoms: "Associated Symptoms",

    clinicalSummary: "Clinical Summary",
    clinicalSummarySubtitle:
      "AI-generated summary of the patient's reported symptoms",

    noClinicalSummary:
      "No clinical summary has been recorded for this case.",

    reviewChecklist: "Review Checklist",
    reviewChecklistSubtitle:
      "Confirm each section before verifying the case",

    patientInformationReviewed:
      "Patient information reviewed",
    patientInformationDescription:
      "Patient and case identification confirmed.",

    clinicalFindingsReviewed:
      "Clinical findings reviewed",
    clinicalFindingsDescription:
      "Extracted symptoms and clinical information checked.",

    clinicalSummaryReviewed:
      "Clinical summary reviewed",
    clinicalSummaryDescription:
      "AI-generated summary checked before verification.",

    backToDashboard: "Back to Dashboard",
    caseVerified: "Case Verified",
    verifyCase: "Verify Case",

    notRecorded: "Not recorded",
    patientCase: "Patient Case",
    generalMedicine: "General Medicine",
    ayurveda: "Ayurveda",

    summaryPatientReports: "Patient reports a",
    summarySince: "since",
    summaryFor: "for",
    summaryProblemOccurs: "The problem occurs",
    summaryOccasionally: "occasionally",
    summaryWorsensWith: "worsens with",
    summaryImprovesWith: "and improves with",
    associatedSymptom: "Associated symptom:",

    occasional: "Occasional",
    frequent: "Frequent",
    daily: "Daily",
    constant: "Constant",

    yesterday: "yesterday",
    today: "today",
    ago: "ago",
  },

  mr: {
    caseManagement: "केस व्यवस्थापन",
    title: "डॉक्टर पडताळणी",
    description:
      "पडताळणीपूर्वी AI द्वारे तयार केलेली केस माहिती तपासा.",
    verifiedDoctor: "पडताळलेले डॉक्टर",

    caseOverview: "केसचा आढावा",
    caseOverviewSubtitle:
      "रुग्ण आणि केसची ओळख",

    patient: "रुग्ण",
    caseId: "केस आयडी",
    caseType: "केस प्रकार",
    verificationStatus: "पडताळणी स्थिती",

    verified: "पडताळलेले",
    awaitingReview: "तपासणीच्या प्रतीक्षेत",

    clinicalInformation: "वैद्यकीय माहिती",
    clinicalInformationSubtitle:
      "AI केस-टेकिंग सत्रातून मिळालेली महत्त्वाची माहिती",

    chiefComplaint: "मुख्य तक्रार",
    severity: "तीव्रता",
    onset: "सुरुवात",
    frequency: "वारंवारिता",
    aggravatingFactors: "वाढवणारे घटक",
    relievingFactors: "आराम देणारे घटक",
    associatedSymptoms: "संबंधित लक्षणे",

    clinicalSummary: "वैद्यकीय सारांश",
    clinicalSummarySubtitle:
      "रुग्णाने सांगितलेल्या लक्षणांचा AI द्वारे तयार केलेला सारांश",

    noClinicalSummary:
      "या केससाठी कोणताही वैद्यकीय सारांश नोंदवलेला नाही.",

    reviewChecklist: "तपासणी यादी",
    reviewChecklistSubtitle:
      "केस पडताळण्यापूर्वी प्रत्येक विभागाची पुष्टी करा",

    patientInformationReviewed:
      "रुग्णाची माहिती तपासली",
    patientInformationDescription:
      "रुग्ण आणि केसची ओळख निश्चित केली.",

    clinicalFindingsReviewed:
      "वैद्यकीय निष्कर्ष तपासले",
    clinicalFindingsDescription:
      "मिळालेली लक्षणे आणि वैद्यकीय माहिती तपासली.",

    clinicalSummaryReviewed:
      "वैद्यकीय सारांश तपासला",
    clinicalSummaryDescription:
      "पडताळणीपूर्वी AI द्वारे तयार केलेला सारांश तपासला.",

    backToDashboard: "डॅशबोर्डवर परत जा",
    caseVerified: "केस पडताळले",
    verifyCase: "केस पडताळा",

    notRecorded: "नोंदवलेले नाही",
    patientCase: "रुग्णाची केस",
    generalMedicine: "जनरल मेडिसिन",
    ayurveda: "आयुर्वेद",

    summaryPatientReports: "रुग्णाला",
    summarySince: "पासून",
    summaryFor: "इतक्या काळापासून",
    summaryProblemOccurs: "ही समस्या",
    summaryOccasionally: "कधीकधी",
    summaryWorsensWith: "यामुळे वाढते",
    summaryImprovesWith: "आणि यामुळे कमी होते",
    associatedSymptom: "संबंधित लक्षण:",

    occasional: "कधीकधी",
    frequent: "वारंवार",
    daily: "दररोज",
    constant: "सतत",

    yesterday: "काल",
    today: "आज",
    ago: "पूर्वी",
  },

  hi: {
    caseManagement: "केस प्रबंधन",
    title: "डॉक्टर सत्यापन",
    description:
      "सत्यापन से पहले AI द्वारा तैयार केस जानकारी की समीक्षा करें।",
    verifiedDoctor: "सत्यापित डॉक्टर",

    caseOverview: "केस का अवलोकन",
    caseOverviewSubtitle:
      "रोगी और केस की पहचान",

    patient: "रोगी",
    caseId: "केस आईडी",
    caseType: "केस प्रकार",
    verificationStatus: "सत्यापन स्थिति",

    verified: "सत्यापित",
    awaitingReview: "समीक्षा की प्रतीक्षा",

    clinicalInformation: "चिकित्सीय जानकारी",
    clinicalInformationSubtitle:
      "AI केस-टेकिंग सत्र से निकाली गई मुख्य जानकारी",

    chiefComplaint: "मुख्य शिकायत",
    severity: "तीव्रता",
    onset: "शुरुआत",
    frequency: "आवृत्ति",
    aggravatingFactors: "बढ़ाने वाले कारक",
    relievingFactors: "राहत देने वाले कारक",
    associatedSymptoms: "संबंधित लक्षण",

    clinicalSummary: "चिकित्सीय सारांश",
    clinicalSummarySubtitle:
      "रोगी द्वारा बताए गए लक्षणों का AI द्वारा तैयार सारांश",

    noClinicalSummary:
      "इस केस के लिए कोई चिकित्सीय सारांश दर्ज नहीं किया गया है।",

    reviewChecklist: "समीक्षा सूची",
    reviewChecklistSubtitle:
      "केस सत्यापित करने से पहले प्रत्येक अनुभाग की पुष्टि करें",

    patientInformationReviewed:
      "रोगी की जानकारी की समीक्षा की गई",
    patientInformationDescription:
      "रोगी और केस की पहचान की पुष्टि की गई।",

    clinicalFindingsReviewed:
      "चिकित्सीय निष्कर्षों की समीक्षा की गई",
    clinicalFindingsDescription:
      "निकाले गए लक्षणों और चिकित्सीय जानकारी की जांच की गई।",

    clinicalSummaryReviewed:
      "चिकित्सीय सारांश की समीक्षा की गई",
    clinicalSummaryDescription:
      "सत्यापन से पहले AI द्वारा तैयार सारांश की जांच की गई।",

    backToDashboard: "डैशबोर्ड पर वापस जाएं",
    caseVerified: "केस सत्यापित",
    verifyCase: "केस सत्यापित करें",

    notRecorded: "दर्ज नहीं किया गया",
    patientCase: "रोगी का केस",
    generalMedicine: "जनरल मेडिसिन",
    ayurveda: "आयुर्वेद",

    summaryPatientReports: "रोगी को",
    summarySince: "से",
    summaryFor: "से",
    summaryProblemOccurs: "समस्या",
    summaryOccasionally: "कभी-कभी",
    summaryWorsensWith: "से बढ़ती है",
    summaryImprovesWith: "और इससे बेहतर होती है",
    associatedSymptom: "संबंधित लक्षण:",

    occasional: "कभी-कभी",
    frequent: "अक्सर",
    daily: "प्रतिदिन",
    constant: "लगातार",

    yesterday: "कल",
    today: "आज",
    ago: "पहले",
  },

  gu: {
    caseManagement: "કેસ મેનેજમેન્ટ",
    title: "ડૉક્ટર ચકાસણી",
    description:
      "ચકાસણી પહેલાં AI દ્વારા તૈયાર કરેલી કેસ માહિતીની સમીક્ષા કરો.",
    verifiedDoctor: "ચકાસાયેલ ડૉક્ટર",

    caseOverview: "કેસનો સારાંશ",
    caseOverviewSubtitle:
      "દર્દી અને કેસની ઓળખ",

    patient: "દર્દી",
    caseId: "કેસ આઈડી",
    caseType: "કેસ પ્રકાર",
    verificationStatus: "ચકાસણી સ્થિતિ",

    verified: "ચકાસાયેલ",
    awaitingReview: "સમીક્ષાની રાહ જોઈ રહ્યા છીએ",

    clinicalInformation: "ક્લિનિકલ માહિતી",
    clinicalInformationSubtitle:
      "AI કેસ-ટેકિંગ સત્રમાંથી મેળવેલી મુખ્ય માહિતી",

    chiefComplaint: "મુખ્ય ફરિયાદ",
    severity: "તીવ્રતા",
    onset: "શરૂઆત",
    frequency: "આવર્તન",
    aggravatingFactors: "વધારતા પરિબળો",
    relievingFactors: "રાહત આપતા પરિબળો",
    associatedSymptoms: "સંબંધિત લક્ષણો",

    clinicalSummary: "ક્લિનિકલ સારાંશ",
    clinicalSummarySubtitle:
      "દર્દી દ્વારા જણાવાયેલા લક્ષણોનો AI દ્વારા તૈયાર કરાયેલ સારાંશ",

    noClinicalSummary:
      "આ કેસ માટે કોઈ ક્લિનિકલ સારાંશ નોંધાયેલ નથી.",

    reviewChecklist: "સમીક્ષા ચેકલિસ્ટ",
    reviewChecklistSubtitle:
      "કેસ ચકાસતા પહેલાં દરેક વિભાગની પુષ્ટિ કરો",

    patientInformationReviewed:
      "દર્દીની માહિતીની સમીક્ષા કરી",
    patientInformationDescription:
      "દર્દી અને કેસની ઓળખની પુષ્ટિ કરી.",

    clinicalFindingsReviewed:
      "ક્લિનિકલ તારણોની સમીક્ષા કરી",
    clinicalFindingsDescription:
      "મેળવેલા લક્ષણો અને ક્લિનિકલ માહિતી તપાસી.",

    clinicalSummaryReviewed:
      "ક્લિનિકલ સારાંશની સમીક્ષા કરી",
    clinicalSummaryDescription:
      "ચકાસણી પહેલાં AI દ્વારા તૈયાર કરાયેલ સારાંશ તપાસ્યો.",

    backToDashboard: "ડેશબોર્ડ પર પાછા જાઓ",
    caseVerified: "કેસ ચકાસાયેલ",
    verifyCase: "કેસ ચકાસો",

    notRecorded: "નોંધાયેલ નથી",
    patientCase: "દર્દીનો કેસ",
    generalMedicine: "જનરલ મેડિસિન",
    ayurveda: "આયુર્વેદ",

    summaryPatientReports: "દર્દી જણાવે છે કે",
    summarySince: "થી",
    summaryFor: "માટે",
    summaryProblemOccurs: "સમસ્યા",
    summaryOccasionally: "ક્યારેક",
    summaryWorsensWith: "થી વધે છે",
    summaryImprovesWith: "અને તેનાથી સુધરે છે",
    associatedSymptom: "સંબંધિત લક્ષણ:",

    occasional: "ક્યારેક",
    frequent: "વારંવાર",
    daily: "દરરોજ",
    constant: "સતત",

    yesterday: "ગઈકાલથી",
    today: "આજથી",
    ago: "પહેલાં",
  },

  kn: {
    caseManagement: "ಕೇಸ್ ನಿರ್ವಹಣೆ",
    title: "ವೈದ್ಯರ ಪರಿಶೀಲನೆ",
    description:
      "ಪರಿಶೀಲನೆಯ ಮೊದಲು AI ರಚಿಸಿದ ಕೇಸ್ ಮಾಹಿತಿಯನ್ನು ಪರಿಶೀಲಿಸಿ.",
    verifiedDoctor: "ಪರಿಶೀಲಿಸಲಾದ ವೈದ್ಯರು",

    caseOverview: "ಕೇಸ್ ಅವಲೋಕನ",
    caseOverviewSubtitle:
      "ರೋಗಿ ಮತ್ತು ಕೇಸ್ ಗುರುತಿಸುವಿಕೆ",

    patient: "ರೋಗಿ",
    caseId: "ಕೇಸ್ ಐಡಿ",
    caseType: "ಕೇಸ್ ಪ್ರಕಾರ",
    verificationStatus: "ಪರಿಶೀಲನೆ ಸ್ಥಿತಿ",

    verified: "ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
    awaitingReview: "ಪರಿಶೀಲನೆಗಾಗಿ ಕಾಯುತ್ತಿದೆ",

    clinicalInformation: "ವೈದ್ಯಕೀಯ ಮಾಹಿತಿ",
    clinicalInformationSubtitle:
      "AI ಕೇಸ್-ಟೇಕಿಂಗ್ ಅಧಿವೇಶನದಿಂದ ಪಡೆದ ಪ್ರಮುಖ ಮಾಹಿತಿ",

    chiefComplaint: "ಮುಖ್ಯ ದೂರು",
    severity: "ತೀವ್ರತೆ",
    onset: "ಪ್ರಾರಂಭ",
    frequency: "ಆವರ್ತನೆ",
    aggravatingFactors: "ಹೆಚ್ಚಿಸುವ ಅಂಶಗಳು",
    relievingFactors: "ಪರಿಹಾರ ನೀಡುವ ಅಂಶಗಳು",
    associatedSymptoms: "ಸಂಬಂಧಿತ ಲಕ್ಷಣಗಳು",

    clinicalSummary: "ವೈದ್ಯಕೀಯ ಸಾರಾಂಶ",
    clinicalSummarySubtitle:
      "ರೋಗಿಯು ತಿಳಿಸಿದ ಲಕ್ಷಣಗಳ AI ರಚಿಸಿದ ಸಾರಾಂಶ",

    noClinicalSummary:
      "ಈ ಕೇಸ್‌ಗೆ ಯಾವುದೇ ವೈದ್ಯಕೀಯ ಸಾರಾಂಶ ದಾಖಲಾಗಿಲ್ಲ.",

    reviewChecklist: "ಪರಿಶೀಲನಾ ಪಟ್ಟಿ",
    reviewChecklistSubtitle:
      "ಕೇಸ್ ಪರಿಶೀಲಿಸುವ ಮೊದಲು ಪ್ರತಿಯೊಂದು ವಿಭಾಗವನ್ನು ದೃಢೀಕರಿಸಿ",

    patientInformationReviewed:
      "ರೋಗಿಯ ಮಾಹಿತಿಯನ್ನು ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
    patientInformationDescription:
      "ರೋಗಿ ಮತ್ತು ಕೇಸ್ ಗುರುತಿಸುವಿಕೆಯನ್ನು ದೃಢೀಕರಿಸಲಾಗಿದೆ.",

    clinicalFindingsReviewed:
      "ವೈದ್ಯಕೀಯ ಕಂಡುಬಂದ ಮಾಹಿತಿಯನ್ನು ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
    clinicalFindingsDescription:
      "ಪಡೆದ ಲಕ್ಷಣಗಳು ಮತ್ತು ವೈದ್ಯಕೀಯ ಮಾಹಿತಿಯನ್ನು ಪರಿಶೀಲಿಸಲಾಗಿದೆ.",

    clinicalSummaryReviewed:
      "ವೈದ್ಯಕೀಯ ಸಾರಾಂಶವನ್ನು ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
    clinicalSummaryDescription:
      "ಪರಿಶೀಲನೆಯ ಮೊದಲು AI ರಚಿಸಿದ ಸಾರಾಂಶವನ್ನು ಪರಿಶೀಲಿಸಲಾಗಿದೆ.",

    backToDashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹಿಂತಿರುಗಿ",
    caseVerified: "ಕೇಸ್ ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
    verifyCase: "ಕೇಸ್ ಪರಿಶೀಲಿಸಿ",

    notRecorded: "ದಾಖಲಾಗಿಲ್ಲ",
    patientCase: "ರೋಗಿಯ ಕೇಸ್",
    generalMedicine: "ಜನರಲ್ ಮೆಡಿಸಿನ್",
    ayurveda: "ಆಯುರ್ವೇದ",

    summaryPatientReports: "ರೋಗಿಯು",
    summarySince: "ಇಂದಿನಿಂದ",
    summaryFor: "ಕಾಲದಿಂದ",
    summaryProblemOccurs: "ಸಮಸ್ಯೆ",
    summaryOccasionally: "ಸಾಂದರ್ಭಿಕವಾಗಿ",
    summaryWorsensWith: "ಇದರಿಂದ ಹೆಚ್ಚಾಗುತ್ತದೆ",
    summaryImprovesWith: "ಮತ್ತು ಇದರಿಂದ ಸುಧಾರಿಸುತ್ತದೆ",
    associatedSymptom: "ಸಂಬಂಧಿತ ಲಕ್ಷಣ:",

    occasional: "ಸಾಂದರ್ಭಿಕವಾಗಿ",
    frequent: "ಆಗಾಗ್ಗೆ",
    daily: "ಪ್ರತಿದಿನ",
    constant: "ನಿರಂತರವಾಗಿ",

    yesterday: "ನಿನ್ನೆ",
    today: "ಇಂದು",
    ago: "ಹಿಂದೆ",
  },

  ta: {
    caseManagement: "வழக்கு மேலாண்மை",
    title: "மருத்துவர் சரிபார்ப்பு",
    description:
      "சரிபார்ப்பதற்கு முன் AI உருவாக்கிய வழக்கு தகவலை மதிப்பாய்வு செய்யவும்.",
    verifiedDoctor: "சரிபார்க்கப்பட்ட மருத்துவர்",

    caseOverview: "வழக்கு மேலோட்டம்",
    caseOverviewSubtitle:
      "நோயாளி மற்றும் வழக்கு அடையாளம்",

    patient: "நோயாளர்",
    caseId: "வழக்கு ID",
    caseType: "வழக்கு வகை",
    verificationStatus: "சரிபார்ப்பு நிலை",

    verified: "சரிபார்க்கப்பட்டது",
    awaitingReview: "மதிப்பாய்வுக்காக காத்திருக்கிறது",

    clinicalInformation: "மருத்துவ தகவல்",
    clinicalInformationSubtitle:
      "AI வழக்கு பதிவு அமர்விலிருந்து பெறப்பட்ட முக்கிய தகவல்கள்",

    chiefComplaint: "முக்கிய புகார்",
    severity: "தீவிரம்",
    onset: "தொடக்கம்",
    frequency: "அடிக்கடி நிகழ்தல்",
    aggravatingFactors: "மோசமாக்கும் காரணிகள்",
    relievingFactors: "நிவாரணம் தரும் காரணிகள்",
    associatedSymptoms: "தொடர்புடைய அறிகுறிகள்",

    clinicalSummary: "மருத்துவ சுருக்கம்",
    clinicalSummarySubtitle:
      "நோயாளர் தெரிவித்த அறிகுறிகளின் AI உருவாக்கிய சுருக்கம்",

    noClinicalSummary:
      "இந்த வழக்கிற்கான மருத்துவ சுருக்கம் பதிவு செய்யப்படவில்லை.",

    reviewChecklist: "மதிப்பாய்வு பட்டியல்",
    reviewChecklistSubtitle:
      "வழக்கை சரிபார்ப்பதற்கு முன் ஒவ்வொரு பகுதியையும் உறுதிப்படுத்தவும்",

    patientInformationReviewed:
      "நோயாளர் தகவல் மதிப்பாய்வு செய்யப்பட்டது",
    patientInformationDescription:
      "நோயாளர் மற்றும் வழக்கு அடையாளம் உறுதிப்படுத்தப்பட்டது.",

    clinicalFindingsReviewed:
      "மருத்துவ கண்டுபிடிப்புகள் மதிப்பாய்வு செய்யப்பட்டன",
    clinicalFindingsDescription:
      "பெறப்பட்ட அறிகுறிகள் மற்றும் மருத்துவ தகவல்கள் சரிபார்க்கப்பட்டன.",

    clinicalSummaryReviewed:
      "மருத்துவ சுருக்கம் மதிப்பாய்வு செய்யப்பட்டது",
    clinicalSummaryDescription:
      "சரிபார்ப்பதற்கு முன் AI உருவாக்கிய சுருக்கம் சரிபார்க்கப்பட்டது.",

    backToDashboard: "டாஷ்போர்டுக்குத் திரும்பு",
    caseVerified: "வழக்கு சரிபார்க்கப்பட்டது",
    verifyCase: "வழக்கை சரிபார்க்கவும்",

    notRecorded: "பதிவு செய்யப்படவில்லை",
    patientCase: "நோயாளர் வழக்கு",
    generalMedicine: "பொது மருத்துவம்",
    ayurveda: "ஆயுர்வேதம்",

    summaryPatientReports: "நோயாளர்",
    summarySince: "முதல்",
    summaryFor: "காலமாக",
    summaryProblemOccurs: "பிரச்சனை",
    summaryOccasionally: "அவ்வப்போது",
    summaryWorsensWith: "இதனால் மோசமாகிறது",
    summaryImprovesWith: "மேலும் இதனால் மேம்படுகிறது",
    associatedSymptom: "தொடர்புடைய அறிகுறி:",

    occasional: "அவ்வப்போது",
    frequent: "அடிக்கடி",
    daily: "தினமும்",
    constant: "தொடர்ந்து",

    yesterday: "நேற்று",
    today: "இன்று",
    ago: "முன்பு",
  },
};

export default function DoctorVerification() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const t =
    verificationTranslations[language] ||
    verificationTranslations.en;

  const [verified, setVerified] = useState(false);

  const [checklist, setChecklist] = useState({
    patient: false,
    findings: false,
    summary: false,
  });

  const caseData = useMemo(() => {
    try {
      const sessionData =
        sessionStorage.getItem("jeevanCaseData");

      const localData =
        localStorage.getItem("jeevanCaseData");

      let sessionCase = null;
      let localCase = null;

      if (sessionData) {
        try {
          sessionCase = JSON.parse(sessionData);
        } catch (error) {
          console.error(
            "Unable to parse session case data:",
            error
          );
        }
      }

      if (localData) {
        try {
          localCase = JSON.parse(localData);
        } catch (error) {
          console.error(
            "Unable to parse local case data:",
            error
          );
        }
      }

      if (!sessionCase && !localCase) {
        return null;
      }

      return {
        ...(localCase || {}),
        ...(sessionCase || {}),

        messages:
          sessionCase?.messages ||
          localCase?.messages ||
          [],

        caseId:
          sessionCase?.caseId ||
          localCase?.caseId ||
          "JC-DEMO-001",

        patientName:
          sessionCase?.patientName ||
          localCase?.patientName ||
          t.patientCase,

        system:
          sessionCase?.system ||
          localCase?.system ||
          "general-medicine",

        systemLabel:
          sessionCase?.systemLabel ||
          localCase?.systemLabel ||
          t.generalMedicine,

        verificationStatus:
          sessionCase?.verificationStatus ||
          localCase?.verificationStatus ||
          t.awaitingReview,

        doctorChecklist:
          sessionCase?.doctorChecklist ||
          localCase?.doctorChecklist ||
          null,
      };
    } catch (error) {
      console.error(
        "Unable to read case data:",
        error
      );

      return null;
    }
  }, [t]);

  React.useEffect(() => {
    if (!caseData) {
      return;
    }

    if (
      caseData.verificationStatus ===
      "Verified"
    ) {
      setVerified(true);
    }

    if (caseData.doctorChecklist) {
      setChecklist({
        patient:
          caseData.doctorChecklist.patient ||
          false,

        findings:
          caseData.doctorChecklist.findings ||
          false,

        summary:
          caseData.doctorChecklist.summary ||
          false,
      });
    }
  }, [caseData]);

  const patientMessages = useMemo(() => {
    if (!Array.isArray(caseData?.messages)) {
      return [];
    }

    return caseData.messages.filter(
      (message) =>
        message?.type === "patient"
    );
  }, [caseData]);

  const patientTexts = useMemo(() => {
    return patientMessages
      .map((message) =>
        typeof message?.text === "string"
          ? message.text
          : ""
      )
      .map((text) => text.trim())
      .filter(Boolean);
  }, [patientMessages]);

  const allPatientText =
    patientTexts.join(" ");

  const chiefComplaint = useMemo(() => {
    if (!patientTexts.length) {
      return t.notRecorded;
    }

    let text = patientTexts[0]
      .trim()
      .replace(/[.!?]+$/, "");

    text = text
      .replace(
        /^i\s+(have|am having|am experiencing|feel)\s+(a|an|the)?\s*/i,
        ""
      )
      .replace(
        /^i\s+have\s+been\s+having\s+(a|an|the)?\s*/i,
        ""
      )
      .trim();

    if (!text) {
      return t.notRecorded;
    }

    return (
      text.charAt(0).toUpperCase() +
      text.slice(1)
    );
  }, [patientTexts, t]);

  const severity = useMemo(() => {
    const match = allPatientText.match(
      /\b(mild|moderate|severe)\b/i
    );

    if (!match) {
      return t.notRecorded;
    }

    return (
      match[1].charAt(0).toUpperCase() +
      match[1].slice(1).toLowerCase()
    );
  }, [allPatientText, t]);

  const frequency = useMemo(() => {
    const match = allPatientText.match(
      /\b(occasionally|occasional|sometimes|frequently|frequent|often|daily|every day|constant|constantly|regularly|rarely)\b/i
    );

    if (!match) {
      return t.notRecorded;
    }

    const value =
      match[1].toLowerCase();

    if (
      value === "occasionally" ||
      value === "occasional"
    ) {
      return t.occasional;
    }

    if (
      value === "frequently" ||
      value === "frequent"
    ) {
      return t.frequent;
    }

    if (value === "every day") {
      return t.daily;
    }

    if (value === "constantly") {
      return t.constant;
    }

    return (
      value.charAt(0).toUpperCase() +
      value.slice(1)
    );
  }, [allPatientText, t]);

  const onset = useMemo(() => {
    const sinceMatch =
      allPatientText.match(
        /\bsince\s+(yesterday|today)\b/i
      );

    if (sinceMatch) {
      return sinceMatch[1].toLowerCase() ===
        "yesterday"
        ? t.yesterday
        : t.today;
    }

    const agoMatch =
      allPatientText.match(
        /(\d+)\s+(day|days|week|weeks|month|months|year|years)\s+ago/i
      );

    if (agoMatch) {
      return (
        agoMatch[1] +
        " " +
        agoMatch[2] +
        " " +
        t.ago
      );
    }

    return t.notRecorded;
  }, [allPatientText, t]);

  const aggravatingFactor = useMemo(() => {
    for (const text of patientTexts) {
      const cleanedText = text
        .trim()
        .replace(/[.!?]+$/, "");

      const match = cleanedText.match(
        /^after\s+(.+)$/i
      );

      if (match) {
        return match[1].trim();
      }
    }

    return t.notRecorded;
  }, [patientTexts, t]);

  const relievingFactor = useMemo(() => {
    for (const text of patientTexts) {
      const cleanedText = text
        .trim()
        .replace(/[.!?]+$/, "");

      const feelBetterMatch =
        cleanedText.match(
          /^i\s+feel\s+better\s+(?:after|when|with)\s+(.+)$/i
        );

      if (feelBetterMatch) {
        const value =
          feelBetterMatch[1].trim();

        if (/^resting$/i.test(value)) {
          return "Resting";
        }

        return (
          value.charAt(0).toUpperCase() +
          value.slice(1)
        );
      }

      const getsBetterMatch =
        cleanedText.match(
          /gets?\s+better\s+(?:after|when|with)\s+(.+)$/i
        );

      if (getsBetterMatch) {
        const value =
          getsBetterMatch[1].trim();

        if (/^resting$/i.test(value)) {
          return "Resting";
        }

        return (
          value.charAt(0).toUpperCase() +
          value.slice(1)
        );
      }
    }

    return t.notRecorded;
  }, [patientTexts, t]);

  const associatedSymptoms = useMemo(() => {
    for (const text of patientTexts) {
      const cleanedText = text
        .trim()
        .replace(/[.!?]+$/, "");

      const feelMatch = cleanedText.match(
        /^i\s+feel\s+(.+)$/i
      );

      if (feelMatch) {
        const value =
          feelMatch[1].trim();

        if (
          /^(better|worse|good|fine|okay|well)\b/i.test(
            value
          )
        ) {
          continue;
        }

        if (/^bloated$/i.test(value)) {
          return "Bloating";
        }

        return (
          value.charAt(0).toUpperCase() +
          value.slice(1)
        );
      }

      const alsoMatch = cleanedText.match(
        /^(?:i\s+)?(?:also have|also has|also having|along with|associated with)\s+(.+)$/i
      );

      if (alsoMatch) {
        const value =
          alsoMatch[1].trim();

        if (
          /^(better|worse|good|fine|okay|well)\b/i.test(
            value
          )
        ) {
          continue;
        }

        if (/^bloated$/i.test(value)) {
          return "Bloating";
        }

        return (
          value.charAt(0).toUpperCase() +
          value.slice(1)
        );
      }
    }

    return t.notRecorded;
  }, [patientTexts, t]);

  const clinicalSummary = useMemo(() => {
    if (chiefComplaint === t.notRecorded) {
      return t.noClinicalSummary;
    }

    let complaint =
      chiefComplaint.toLowerCase();

    if (severity !== t.notRecorded) {
      complaint =
        severity.toLowerCase() +
        " " +
        complaint;
    }

    let summary =
      t.summaryPatientReports +
      " " +
      complaint;

    if (onset !== t.notRecorded) {
      if (
        onset === t.yesterday ||
        onset === t.today
      ) {
        summary +=
          " " +
          t.summarySince +
          " " +
          onset;
      } else {
        summary +=
          " " +
          t.summaryFor +
          " " +
          onset.replace(
            " " + t.ago,
            ""
          );
      }
    }

    if (frequency !== t.notRecorded) {
      summary +=
        ". " +
        t.summaryProblemOccurs +
        " " +
        frequency.toLowerCase();
    }

    if (
      aggravatingFactor !==
      t.notRecorded
    ) {
      summary +=
        ", " +
        t.summaryWorsensWith +
        " " +
        aggravatingFactor;
    }

    if (
      relievingFactor !==
      t.notRecorded
    ) {
      summary +=
        ", " +
        t.summaryImprovesWith +
        " " +
        relievingFactor;
    }

    summary += ".";

    if (
      associatedSymptoms !==
      t.notRecorded
    ) {
      summary +=
        " " +
        t.associatedSymptom +
        " " +
        associatedSymptoms +
        ".";
    }

    return summary;
  }, [
    chiefComplaint,
    severity,
    onset,
    frequency,
    aggravatingFactor,
    relievingFactor,
    associatedSymptoms,
    t,
  ]);

  const toggleChecklist = (key) => {
    setChecklist((previous) => ({
      ...previous,
      [key]: !previous[key],
    }));
  };

  const allChecked =
    checklist.patient &&
    checklist.findings &&
    checklist.summary;

  const handleVerify = () => {
    if (!allChecked || verified) {
      return;
    }

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
        console.error(
          "No case data found while verifying the case."
        );
        return;
      }

      const existingCaseData =
        JSON.parse(stored);

      const updatedCaseData = {
        ...existingCaseData,

        verificationStatus:
          "Verified",

        verifiedBy:
          "Doctor",

        verifiedAt:
          new Date().toISOString(),

        doctorChecklist: {
          patient:
            checklist.patient,

          findings:
            checklist.findings,

          summary:
            checklist.summary,
        },
      };

      const serializedCaseData =
        JSON.stringify(
          updatedCaseData
        );

      sessionStorage.setItem(
        "jeevanCaseData",
        serializedCaseData
      );

      localStorage.setItem(
        "jeevanCaseData",
        serializedCaseData
      );

      setVerified(true);

      setTimeout(() => {
        navigate(
          "/doctor/dashboard"
        );
      }, 500);
    } catch (error) {
      console.error(
        "Unable to save verification status:",
        error
      );
    }
  };

  const isAyurveda =
    caseData?.system === "ayurveda";

  const accent = isAyurveda
    ? "#059669"
    : "#0891b2";

  const accentBackground =
    isAyurveda
      ? "rgba(5,150,105,0.10)"
      : "rgba(8,145,178,0.10)";

  const systemLabel = isAyurveda
    ? t.ayurveda
    : t.generalMedicine;

  const infoBoxStyle = {
    padding: "15px",
    border: "1px solid var(--jc-border)",
    borderRadius: "9px",
    background:
      "var(--jc-panel-elevated)",
    height: "100%",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "6px",
    fontSize: "10px",
    fontWeight: 700,
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    color: "var(--jc-subtle)",
  };

  const valueStyle = {
    fontSize: "13px",
    fontWeight: 600,
    color: "var(--jc-text)",
  };

  const checklistStyle = (checked) => ({
    cursor: verified
      ? "default"
      : "pointer",
    padding: "14px 15px",
    border:
      checked
        ? "1px solid " +
          (isAyurveda
            ? "rgba(5,150,105,0.28)"
            : "rgba(8,145,178,0.28)")
        : "1px solid var(--jc-border)",
    borderRadius: "9px",
    background: checked
      ? accentBackground
      : "var(--jc-panel-elevated)",
    transition:
      "border-color 0.2s ease, background 0.2s ease",
  });

  return (
    <div
      className="container-fluid px-0 pb-5"
      style={{
        color: "var(--jc-text)",
      }}
    >
      <div className="jc-page-heading mb-4">
        <div>
          <div
            className="jc-kicker"
            style={{
              color: accent,
              fontSize: "11px",
              letterSpacing: "2px",
            }}
          >
            {t.caseManagement}
          </div>

          <h1
            className="mb-2"
            style={{
              color: "var(--jc-text)",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            {t.title}
          </h1>

          <p
            className="mb-0"
            style={{
              color: "var(--jc-muted)",
              fontSize: "14px",
            }}
          >
            {t.description}
          </p>
        </div>

        <span
          className="rounded-pill d-inline-flex align-items-center"
          style={{
            padding: "7px 12px",
            fontSize: "11px",
            fontWeight: 700,
            color: accent,
            background: accentBackground,
            border:
              "1px solid " +
              accent +
              "33",
          }}
        >
          <i className="bi bi-patch-check-fill me-1" />
          {t.verifiedDoctor}
        </span>
      </div>

      <div className="jc-dashboard-card mb-4">
        <div
          className="d-flex align-items-center gap-3 px-4 py-3"
          style={{
            borderBottom:
              "1px solid var(--jc-border)",
          }}
        >
          <div
            className="d-flex align-items-center justify-content-center flex-shrink-0"
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "11px",
              background: accentBackground,
              color: accent,
            }}
          >
            <i className="bi bi-person-vcard" />
          </div>

          <div>
            <div
              style={{
                fontSize: "15px",
                fontWeight: 700,
                color: "var(--jc-text)",
              }}
            >
              {t.caseOverview}
            </div>

            <div
              style={{
                fontSize: "11px",
                color: "var(--jc-muted)",
              }}
            >
              {t.caseOverviewSubtitle}
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="row g-3">
            <div className="col-md-6 col-xl-3">
              <div style={infoBoxStyle}>
                <span style={labelStyle}>
                  {t.patient}
                </span>

                <div style={valueStyle}>
                  {caseData?.patientName ||
                    t.patientCase}
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div style={infoBoxStyle}>
                <span style={labelStyle}>
                  {t.caseId}
                </span>

                <div style={valueStyle}>
                  {caseData?.caseId ||
                    "JC-DEMO-001"}
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div style={infoBoxStyle}>
                <span style={labelStyle}>
                  {t.caseType}
                </span>

                <div
                  style={{
                    ...valueStyle,
                    color: accent,
                  }}
                >
                  {systemLabel}
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div
                style={{
                  ...infoBoxStyle,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <span style={labelStyle}>
                  {t.verificationStatus}
                </span>

                <div>
                  {verified ? (
                    <span className="jc-status-pill success">
                      <i className="bi bi-check-circle-fill me-1" />
                      {t.verified}
                    </span>
                  ) : (
                    <span className="jc-status-pill danger">
                      <i className="bi bi-clock-fill me-1" />
                      {t.awaitingReview}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="jc-dashboard-card mb-4">
        <div
          className="d-flex align-items-center gap-3 px-4 py-3"
          style={{
            borderBottom:
              "1px solid var(--jc-border)",
          }}
        >
          <div
            className="d-flex align-items-center justify-content-center flex-shrink-0"
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "11px",
              background: accentBackground,
              color: accent,
            }}
          >
            <i className="bi bi-clipboard2-pulse" />
          </div>

          <div>
            <div
              style={{
                fontSize: "15px",
                fontWeight: 700,
                color: "var(--jc-text)",
              }}
            >
              {t.clinicalInformation}
            </div>

            <div
              style={{
                fontSize: "11px",
                color: "var(--jc-muted)",
              }}
            >
              {t.clinicalInformationSubtitle}
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="row g-3">
            <div className="col-md-6">
              <div style={infoBoxStyle}>
                <span style={labelStyle}>
                  {t.chiefComplaint}
                </span>

                <div style={valueStyle}>
                  {chiefComplaint}
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div style={infoBoxStyle}>
                <span style={labelStyle}>
                  {t.severity}
                </span>

                <div style={valueStyle}>
                  {severity}
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div style={infoBoxStyle}>
                <span style={labelStyle}>
                  {t.onset}
                </span>

                <div style={valueStyle}>
                  {onset}
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div style={infoBoxStyle}>
                <span style={labelStyle}>
                  {t.frequency}
                </span>

                <div style={valueStyle}>
                  {frequency}
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div style={infoBoxStyle}>
                <span style={labelStyle}>
                  {t.aggravatingFactors}
                </span>

                <div style={valueStyle}>
                  {aggravatingFactor}
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div style={infoBoxStyle}>
                <span style={labelStyle}>
                  {t.relievingFactors}
                </span>

                <div style={valueStyle}>
                  {relievingFactor}
                </div>
              </div>
            </div>

            <div className="col-12">
              <div style={infoBoxStyle}>
                <span style={labelStyle}>
                  {t.associatedSymptoms}
                </span>

                <div style={valueStyle}>
                  {associatedSymptoms}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="jc-dashboard-card mb-4">
        <div
          className="d-flex align-items-center gap-3 px-4 py-3"
          style={{
            borderBottom:
              "1px solid var(--jc-border)",
          }}
        >
          <div
            className="d-flex align-items-center justify-content-center flex-shrink-0"
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "11px",
              background: accentBackground,
              color: accent,
            }}
          >
            <i className="bi bi-file-medical" />
          </div>

          <div>
            <div
              style={{
                fontSize: "15px",
                fontWeight: 700,
                color: "var(--jc-text)",
              }}
            >
              {t.clinicalSummary}
            </div>

            <div
              style={{
                fontSize: "11px",
                color: "var(--jc-muted)",
              }}
            >
              {t.clinicalSummarySubtitle}
            </div>
          </div>
        </div>

        <div className="p-4">
          <div
            style={{
              padding: "18px",
              borderRadius: "10px",
              border:
                "1px dashed var(--jc-border)",
              background:
                "var(--jc-panel-elevated)",
            }}
          >
            <div className="d-flex gap-3 align-items-start">
              <div
                className="d-flex align-items-center justify-content-center flex-shrink-0"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: accentBackground,
                  color: accent,
                }}
              >
                <i className="bi bi-file-text" />
              </div>

              <p
                className="mb-0"
                style={{
                  color: "var(--jc-text)",
                  fontSize: "13px",
                  lineHeight: 1.7,
                }}
              >
                {clinicalSummary}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="jc-dashboard-card mb-4">
        <div
          className="d-flex align-items-center gap-3 px-4 py-3"
          style={{
            borderBottom:
              "1px solid var(--jc-border)",
          }}
        >
          <div
            className="d-flex align-items-center justify-content-center flex-shrink-0"
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "11px",
              background: accentBackground,
              color: accent,
            }}
          >
            <i className="bi bi-check2-square" />
          </div>

          <div>
            <div
              style={{
                fontSize: "15px",
                fontWeight: 700,
                color: "var(--jc-text)",
              }}
            >
              {t.reviewChecklist}
            </div>

            <div
              style={{
                fontSize: "11px",
                color: "var(--jc-muted)",
              }}
            >
              {t.reviewChecklistSubtitle}
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="d-grid gap-2">
            <label
              style={checklistStyle(
                checklist.patient
              )}
            >
              <div className="d-flex align-items-center gap-3">
                <input
                  type="checkbox"
                  checked={
                    checklist.patient
                  }
                  disabled={verified}
                  onChange={() =>
                    toggleChecklist(
                      "patient"
                    )
                  }
                  style={{
                    width: "17px",
                    height: "17px",
                    accentColor: accent,
                    flexShrink: 0,
                  }}
                />

                <div className="flex-grow-1">
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "var(--jc-text)",
                    }}
                  >
                    {t.patientInformationReviewed}
                  </div>

                  <div
                    style={{
                      marginTop: "3px",
                      fontSize: "11px",
                      color: "var(--jc-muted)",
                    }}
                  >
                    {t.patientInformationDescription}
                  </div>
                </div>

                {checklist.patient && (
                  <i
                    className="bi bi-check-circle-fill"
                    style={{
                      color: "#16a34a",
                      fontSize: "17px",
                    }}
                  />
                )}
              </div>
            </label>

            <label
              style={checklistStyle(
                checklist.findings
              )}
            >
              <div className="d-flex align-items-center gap-3">
                <input
                  type="checkbox"
                  checked={
                    checklist.findings
                  }
                  disabled={verified}
                  onChange={() =>
                    toggleChecklist(
                      "findings"
                    )
                  }
                  style={{
                    width: "17px",
                    height: "17px",
                    accentColor: accent,
                    flexShrink: 0,
                  }}
                />

                <div className="flex-grow-1">
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "var(--jc-text)",
                    }}
                  >
                    {t.clinicalFindingsReviewed}
                  </div>

                  <div
                    style={{
                      marginTop: "3px",
                      fontSize: "11px",
                      color: "var(--jc-muted)",
                    }}
                  >
                    {t.clinicalFindingsDescription}
                  </div>
                </div>

                {checklist.findings && (
                  <i
                    className="bi bi-check-circle-fill"
                    style={{
                      color: "#16a34a",
                      fontSize: "17px",
                    }}
                  />
                )}
              </div>
            </label>

            <label
              style={checklistStyle(
                checklist.summary
              )}
            >
              <div className="d-flex align-items-center gap-3">
                <input
                  type="checkbox"
                  checked={
                    checklist.summary
                  }
                  disabled={verified}
                  onChange={() =>
                    toggleChecklist(
                      "summary"
                    )
                  }
                  style={{
                    width: "17px",
                    height: "17px",
                    accentColor: accent,
                    flexShrink: 0,
                  }}
                />

                <div className="flex-grow-1">
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "var(--jc-text)",
                    }}
                  >
                    {t.clinicalSummaryReviewed}
                  </div>

                  <div
                    style={{
                      marginTop: "3px",
                      fontSize: "11px",
                      color: "var(--jc-muted)",
                    }}
                  >
                    {t.clinicalSummaryDescription}
                  </div>
                </div>

                {checklist.summary && (
                  <i
                    className="bi bi-check-circle-fill"
                    style={{
                      color: "#16a34a",
                      fontSize: "17px",
                    }}
                  />
                )}
              </div>
            </label>
          </div>
        </div>
      </div>

      <div
        className="d-flex flex-wrap align-items-center justify-content-between gap-3 p-3"
        style={{
          border:
            "1px solid var(--jc-border)",
          borderRadius: "10px",
          background:
            "var(--jc-panel-elevated)",
        }}
      >
        <button
          type="button"
          className="btn jc-btn-ghost"
          onClick={() =>
            navigate(
              "/doctor/dashboard"
            )
          }
        >
          <i className="bi bi-arrow-left me-2" />
          {t.backToDashboard}
        </button>

        <button
          type="button"
          className="btn px-4"
          disabled={
            !allChecked ||
            verified
          }
          onClick={handleVerify}
          style={{
            color: "#ffffff",
            background: verified
              ? "#16a34a"
              : accent,
            borderColor: verified
              ? "#16a34a"
              : accent,
            fontWeight: 600,
            borderRadius: "8px",
          }}
        >
          <i className="bi bi-patch-check me-2" />

          {verified
            ? t.caseVerified
            : t.verifyCase}
        </button>
      </div>
    </div>
  );
}