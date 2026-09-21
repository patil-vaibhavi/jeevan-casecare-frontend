import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const caseSummaryTranslations = {
  en: {
    caseManagement: "Case Management",
    caseSummary: "Case Summary",
    generalMedicine: "General Medicine",
    ayurveda: "Ayurveda",
    reviewInformation:
      "Review the information collected during the case-taking session.",
    back: "Back",

    patientCaseOverview: "Patient / Case Overview",
    basicCaseInfo: "Basic information about this case",
    activeCase: "Active Case",

    patientName: "Patient Name",
    caseId: "Case ID",
    age: "Age",
    gender: "Gender",
    dateCreated: "Date Created",
    caseStatus: "Case Status",

    caseProgress: "Case Progress",
    currentWorkflow: "Current position in the case workflow",
    aiCaseTakingComplete: "AI Case-Taking Complete",

    clinicalInformation: "Clinical Information",
    keyInformation: "Key information collected during case-taking",

    chiefComplaint: "Chief Complaint",
    symptoms: "Symptoms",
    duration: "Duration",
    temperature: "Temperature",
    relevantHistory: "Relevant History",
    currentMedications: "Current Medications",
    allergies: "Allergies",

    notRecorded: "Not recorded",
    notSpecificallyRecorded: "Not specifically recorded",

    severity: "Severity",
    frequency: "Frequency",
    onset: "Onset",
    aggravatingFactors: "Aggravating Factors",
    relievingFactors: "Relieving Factors",
    associatedSymptoms: "Associated Symptoms",

    symptomsAndFindings: "Symptoms & Findings",
    detailedPresentation:
      "Detailed presentation of the patient's symptoms",

    clinicalFindings: "Clinical Findings",
    patient: "Patient:",
    noConversation:
      "No case conversation has been recorded yet.",

    attention: "ATTENTION",
    additionalClinical:
      "Additional clinical information may be required. Doctor review is recommended.",

    clinicalSummary: "Clinical Summary",
    aiGeneratedSummary: "AI-generated case summary",

    caseStarted: "Case started",
    aiCaseTakingCompleted: "AI case-taking completed",
    caseSummaryCompleted: "Case summary completed",
    doctorReviewCompleted: "Doctor review completed",
    caseVerified: "Case verified",
    awaitingDoctorReview: "Awaiting doctor review",

    patientReports: "Patient reports",
    patientReportsA: "Patient reports a",
    recordedTemperature: "Recorded temperature is",
    problemOccurs: "The problem occurs",
    worsensWith: "worsens with",
    improvesWith: "and improves with",
    associatedSymptom: "Associated symptom:",

    severityWord: {
      Mild: "mild",
      Moderate: "moderate",
      Severe: "severe",
    },

    frequencyWord: {
      Occasional: "occasionally",
      Frequent: "frequently",
      Daily: "daily",
      Constant: "constantly",
      Rare: "rarely",
    },

    severityOccurrence: "severity",
    occurrence: "occurrence",
    onsetLabel: "Onset:",
    worseWith: "Worse with",
    improvesWith: "Improves with",

    noClinicalInformation:
      "No clinical information has been recorded yet.",

    currentMedicationNote:
      "Not recorded during this case-taking session.",
    allergyNote:
      "Not recorded during this case-taking session.",

    for: "for",
    since: "since",
    today: "today",
    yesterday: "yesterday",
    thisMorning: "this morning",
    thisEvening: "this evening",
    lastNight: "last night",

    healthCase: "health case",

    verifiedStatus: "Verified",
    awaitingStatus: "Awaiting Review",
  },

  mr: {
    caseManagement: "केस व्यवस्थापन",
    caseSummary: "केस सारांश",
    generalMedicine: "जनरल मेडिसिन",
    ayurveda: "आयुर्वेद",
    reviewInformation:
      "केस-टेकिंग सत्रादरम्यान गोळा केलेल्या माहितीचे पुनरावलोकन करा.",
    back: "मागे",

    patientCaseOverview: "रुग्ण / केस आढावा",
    basicCaseInfo: "या केसची मूलभूत माहिती",
    activeCase: "सक्रिय केस",

    patientName: "रुग्णाचे नाव",
    caseId: "केस आयडी",
    age: "वय",
    gender: "लिंग",
    dateCreated: "तयार केल्याची तारीख",
    caseStatus: "केस स्थिती",

    caseProgress: "केस प्रगती",
    currentWorkflow:
      "केस वर्कफ्लोमधील सध्याची स्थिती",
    aiCaseTakingComplete: "AI केस-टेकिंग पूर्ण",

    clinicalInformation: "वैद्यकीय माहिती",
    keyInformation:
      "केस-टेकिंगदरम्यान गोळा केलेली महत्त्वाची माहिती",

    chiefComplaint: "मुख्य तक्रार",
    symptoms: "लक्षणे",
    duration: "कालावधी",
    temperature: "तापमान",
    relevantHistory: "संबंधित इतिहास",
    currentMedications: "सध्याची औषधे",
    allergies: "अॅलर्जी",

    notRecorded: "नोंद केलेली नाही",
    notSpecificallyRecorded:
      "विशेषतः नोंद केलेली नाही",

    severity: "तीव्रता",
    frequency: "वारंवारता",
    onset: "सुरुवात",
    aggravatingFactors: "वाढवणारे घटक",
    relievingFactors: "आराम देणारे घटक",
    associatedSymptoms: "सहवर्ती लक्षणे",

    symptomsAndFindings: "लक्षणे आणि निष्कर्ष",
    detailedPresentation:
      "रुग्णाच्या लक्षणांचे सविस्तर स्वरूप",

    clinicalFindings: "वैद्यकीय निष्कर्ष",
    patient: "रुग्ण:",
    noConversation:
      "केस संभाषणाची अद्याप नोंद झालेली नाही.",

    attention: "लक्ष द्या",
    additionalClinical:
      "अधिक वैद्यकीय माहिती आवश्यक असू शकते. डॉक्टरांच्या तपासणीची शिफारस केली जाते.",

    clinicalSummary: "वैद्यकीय सारांश",
    aiGeneratedSummary: "AI द्वारे तयार केलेला केस सारांश",

    caseStarted: "केस सुरू झाला",
    aiCaseTakingCompleted:
      "AI केस-टेकिंग पूर्ण झाले",
    caseSummaryCompleted:
      "केस सारांश पूर्ण झाला",
    doctorReviewCompleted:
      "डॉक्टरांचे पुनरावलोकन पूर्ण झाले",
    caseVerified: "केस पडताळला गेला",
    awaitingDoctorReview:
      "डॉक्टरांच्या पुनरावलोकनाची प्रतीक्षा",

    patientReports: "रुग्ण सांगतो की",
    patientReportsA: "रुग्णाला",
    recordedTemperature: "नोंद केलेले तापमान",
    problemOccurs: "ही समस्या",
    worsensWith: "यामुळे वाढते",
    improvesWith: "आणि यामुळे कमी होते",
    associatedSymptom: "सहवर्ती लक्षण:",

    severityWord: {
      Mild: "सौम्य",
      Moderate: "मध्यम",
      Severe: "तीव्र",
    },

    frequencyWord: {
      Occasional: "कधीकधी",
      Frequent: "वारंवार",
      Daily: "दररोज",
      Constant: "सतत",
      Rare: "क्वचित",
    },

    severityOccurrence: "तीव्रता",
    occurrence: "वारंवारता",
    onsetLabel: "सुरुवात:",
    worseWith: "यामुळे वाढते",
    improvesWith: "यामुळे सुधारते",

    noClinicalInformation:
      "अद्याप कोणतीही वैद्यकीय माहिती नोंदवलेली नाही.",

    currentMedicationNote:
      "या केस-टेकिंग सत्रादरम्यान नोंद केलेले नाही.",
    allergyNote:
      "या केस-टेकिंग सत्रादरम्यान नोंद केलेले नाही.",

    for: "इतके",
    since: "पासून",
    today: "आज",
    yesterday: "काल",
    thisMorning: "आज सकाळपासून",
    thisEvening: "आज संध्याकाळपासून",
    lastNight: "काल रात्रीपासून",

    healthCase: "आरोग्य केस",

    verifiedStatus: "पडताळलेले",
    awaitingStatus: "पुनरावलोकनाची प्रतीक्षा",
  },

  hi: {
    caseManagement: "केस प्रबंधन",
    caseSummary: "केस सारांश",
    generalMedicine: "जनरल मेडिसिन",
    ayurveda: "आयुर्वेद",
    reviewInformation:
      "केस-टेकिंग सत्र के दौरान एकत्र की गई जानकारी की समीक्षा करें।",
    back: "वापस",

    patientCaseOverview: "रोगी / केस अवलोकन",
    basicCaseInfo: "इस केस की मूल जानकारी",
    activeCase: "सक्रिय केस",

    patientName: "रोगी का नाम",
    caseId: "केस आईडी",
    age: "आयु",
    gender: "लिंग",
    dateCreated: "बनाने की तारीख",
    caseStatus: "केस स्थिति",

    caseProgress: "केस प्रगति",
    currentWorkflow:
      "केस वर्कफ़्लो में वर्तमान स्थिति",
    aiCaseTakingComplete: "AI केस-टेकिंग पूर्ण",

    clinicalInformation: "चिकित्सीय जानकारी",
    keyInformation:
      "केस-टेकिंग के दौरान एकत्र की गई महत्वपूर्ण जानकारी",

    chiefComplaint: "मुख्य शिकायत",
    symptoms: "लक्षण",
    duration: "अवधि",
    temperature: "तापमान",
    relevantHistory: "संबंधित इतिहास",
    currentMedications: "वर्तमान दवाएँ",
    allergies: "एलर्जी",

    notRecorded: "दर्ज नहीं किया गया",
    notSpecificallyRecorded:
      "विशेष रूप से दर्ज नहीं किया गया",

    severity: "गंभीरता",
    frequency: "आवृत्ति",
    onset: "शुरुआत",
    aggravatingFactors: "बढ़ाने वाले कारक",
    relievingFactors: "राहत देने वाले कारक",
    associatedSymptoms: "संबंधित लक्षण",

    symptomsAndFindings: "लक्षण और निष्कर्ष",
    detailedPresentation:
      "रोगी के लक्षणों का विस्तृत विवरण",

    clinicalFindings: "चिकित्सीय निष्कर्ष",
    patient: "रोगी:",
    noConversation:
      "अभी तक किसी केस बातचीत की रिकॉर्डिंग नहीं हुई है।",

    attention: "ध्यान दें",
    additionalClinical:
      "अतिरिक्त चिकित्सीय जानकारी की आवश्यकता हो सकती है। डॉक्टर की समीक्षा की सिफारिश की जाती है।",

    clinicalSummary: "चिकित्सीय सारांश",
    aiGeneratedSummary:
      "AI द्वारा तैयार किया गया केस सारांश",

    caseStarted: "केस शुरू हुआ",
    aiCaseTakingCompleted:
      "AI केस-टेकिंग पूर्ण",
    caseSummaryCompleted:
      "केस सारांश पूर्ण",
    doctorReviewCompleted:
      "डॉक्टर की समीक्षा पूर्ण",
    caseVerified: "केस सत्यापित",
    awaitingDoctorReview:
      "डॉक्टर की समीक्षा की प्रतीक्षा",

    patientReports: "रोगी बताता है कि",
    patientReportsA: "रोगी को",
    recordedTemperature: "दर्ज तापमान",
    problemOccurs: "समस्या",
    worsensWith: "से बढ़ती है",
    improvesWith: "और इससे बेहतर होती है",
    associatedSymptom: "संबंधित लक्षण:",

    severityWord: {
      Mild: "हल्की",
      Moderate: "मध्यम",
      Severe: "गंभीर",
    },

    frequencyWord: {
      Occasional: "कभी-कभी",
      Frequent: "बार-बार",
      Daily: "प्रतिदिन",
      Constant: "लगातार",
      Rare: "कभी-कभार",
    },

    severityOccurrence: "गंभीरता",
    occurrence: "आवृत्ति",
    onsetLabel: "शुरुआत:",
    worseWith: "से बढ़ता है",
    improvesWith: "से बेहतर होता है",

    noClinicalInformation:
      "अभी तक कोई चिकित्सीय जानकारी दर्ज नहीं की गई है।",

    currentMedicationNote:
      "इस केस-टेकिंग सत्र के दौरान दर्ज नहीं किया गया।",
    allergyNote:
      "इस केस-टेकिंग सत्र के दौरान दर्ज नहीं किया गया।",

    for: "के लिए",
    since: "से",
    today: "आज",
    yesterday: "कल",
    thisMorning: "आज सुबह से",
    thisEvening: "आज शाम से",
    lastNight: "कल रात से",

    healthCase: "स्वास्थ्य केस",

    verifiedStatus: "सत्यापित",
    awaitingStatus: "समीक्षा की प्रतीक्षा",
  },

  gu: {
    caseManagement: "કેસ મેનેજમેન્ટ",
    caseSummary: "કેસ સારાંશ",
    generalMedicine: "જનરલ મેડિસિન",
    ayurveda: "આયુર્વેદ",
    reviewInformation:
      "કેસ-ટેકિંગ સત્ર દરમિયાન એકત્રિત કરવામાં આવેલી માહિતીની સમીક્ષા કરો.",
    back: "પાછળ",

    patientCaseOverview: "દર્દી / કેસ ઝાંખી",
    basicCaseInfo: "આ કેસની મૂળભૂત માહિતી",
    activeCase: "સક્રિય કેસ",

    patientName: "દર્દીનું નામ",
    caseId: "કેસ આઈડી",
    age: "ઉંમર",
    gender: "લિંગ",
    dateCreated: "બનાવ્યાની તારીખ",
    caseStatus: "કેસ સ્થિતિ",

    caseProgress: "કેસ પ્રગતિ",
    currentWorkflow:
      "કેસ વર્કફ્લોમાં વર્તમાન સ્થિતિ",
    aiCaseTakingComplete: "AI કેસ-ટેકિંગ પૂર્ણ",

    clinicalInformation: "તબીબી માહિતી",
    keyInformation:
      "કેસ-ટેકિંગ દરમિયાન એકત્રિત કરાયેલી મહત્વપૂર્ણ માહિતી",

    chiefComplaint: "મુખ્ય ફરિયાદ",
    symptoms: "લક્ષણો",
    duration: "સમયગાળો",
    temperature: "તાપમાન",
    relevantHistory: "સંબંધિત ઇતિહાસ",
    currentMedications: "વર્તમાન દવાઓ",
    allergies: "એલર્જી",

    notRecorded: "નોંધાયેલ નથી",
    notSpecificallyRecorded:
      "ખાસ રીતે નોંધાયેલ નથી",

    severity: "તીવ્રતા",
    frequency: "આવર્તન",
    onset: "શરૂઆત",
    aggravatingFactors: "વધારતા પરિબળો",
    relievingFactors: "રાહત આપતા પરિબળો",
    associatedSymptoms: "સંબંધિત લક્ષણો",

    symptomsAndFindings: "લક્ષણો અને તારણો",
    detailedPresentation:
      "દર્દીના લક્ષણોની વિગતવાર રજૂઆત",

    clinicalFindings: "તબીબી તારણો",
    patient: "દર્દી:",
    noConversation:
      "હજુ સુધી કોઈ કેસ વાતચીત નોંધાઈ નથી.",

    attention: "ધ્યાન આપો",
    additionalClinical:
      "વધારાની તબીબી માહિતી જરૂરી હોઈ શકે છે. ડૉક્ટરની સમીક્ષા કરવાની ભલામણ કરવામાં આવે છે.",

    clinicalSummary: "તબીબી સારાંશ",
    aiGeneratedSummary:
      "AI દ્વારા તૈયાર કરાયેલ કેસ સારાંશ",

    caseStarted: "કેસ શરૂ થયો",
    aiCaseTakingCompleted:
      "AI કેસ-ટેકિંગ પૂર્ણ થયું",
    caseSummaryCompleted:
      "કેસ સારાંશ પૂર્ણ થયો",
    doctorReviewCompleted:
      "ડૉક્ટરની સમીક્ષા પૂર્ણ થઈ",
    caseVerified: "કેસ ચકાસાયેલ",
    awaitingDoctorReview:
      "ડૉક્ટરની સમીક્ષાની રાહ જોવાઈ રહી છે",

    patientReports: "દર્દી જણાવે છે કે",
    patientReportsA: "દર્દીને",
    recordedTemperature: "નોંધાયેલ તાપમાન",
    problemOccurs: "સમસ્યા",
    worsensWith: "થી વધે છે",
    improvesWith: "અને તેનાથી સુધરે છે",
    associatedSymptom: "સંબંધિત લક્ષણ:",

    severityWord: {
      Mild: "હળવી",
      Moderate: "મધ્યમ",
      Severe: "તીવ્ર",
    },

    frequencyWord: {
      Occasional: "ક્યારેક",
      Frequent: "વારંવાર",
      Daily: "દરરોજ",
      Constant: "સતત",
      Rare: "ભાગ્યે જ",
    },

    severityOccurrence: "તીવ્રતા",
    occurrence: "આવર્તન",
    onsetLabel: "શરૂઆત:",
    worseWith: "થી વધે છે",
    improvesWith: "થી સુધરે છે",

    noClinicalInformation:
      "હજુ સુધી કોઈ તબીબી માહિતી નોંધાઈ નથી.",

    currentMedicationNote:
      "આ કેસ-ટેકિંગ સત્ર દરમિયાન નોંધાયેલ નથી.",
    allergyNote:
      "આ કેસ-ટેકિંગ સત્ર દરમિયાન નોંધાયેલ નથી.",

    for: "માટે",
    since: "થી",
    today: "આજે",
    yesterday: "ગઈકાલે",
    thisMorning: "આજે સવારથી",
    thisEvening: "આજે સાંજથી",
    lastNight: "ગઈકાલે રાતથી",

    healthCase: "આરોગ્ય કેસ",

    verifiedStatus: "ચકાસાયેલ",
    awaitingStatus: "સમીક્ષાની રાહ",
  },

  kn: {
    caseManagement: "ಪ್ರಕರಣ ನಿರ್ವಹಣೆ",
    caseSummary: "ಪ್ರಕರಣ ಸಾರಾಂಶ",
    generalMedicine: "ಜನರಲ್ ಮೆಡಿಸಿನ್",
    ayurveda: "ಆಯುರ್ವೇದ",
    reviewInformation:
      "ಕೇಸ್-ಟೇಕಿಂಗ್ ಸಮಯದಲ್ಲಿ ಸಂಗ್ರಹಿಸಿದ ಮಾಹಿತಿಯನ್ನು ಪರಿಶೀಲಿಸಿ.",
    back: "ಹಿಂದಕ್ಕೆ",

    patientCaseOverview: "ರೋಗಿ / ಪ್ರಕರಣ ಅವಲೋಕನ",
    basicCaseInfo: "ಈ ಪ್ರಕರಣದ ಮೂಲ ಮಾಹಿತಿ",
    activeCase: "ಸಕ್ರಿಯ ಪ್ರಕರಣ",

    patientName: "ರೋಗಿಯ ಹೆಸರು",
    caseId: "ಪ್ರಕರಣ ಐಡಿ",
    age: "ವಯಸ್ಸು",
    gender: "ಲಿಂಗ",
    dateCreated: "ರಚಿಸಿದ ದಿನಾಂಕ",
    caseStatus: "ಪ್ರಕರಣ ಸ್ಥಿತಿ",

    caseProgress: "ಪ್ರಕರಣ ಪ್ರಗತಿ",
    currentWorkflow:
      "ಪ್ರಕರಣ ವರ್ಕ್‌ಫ್ಲೋದಲ್ಲಿನ ಪ್ರಸ್ತುತ ಸ್ಥಾನ",
    aiCaseTakingComplete:
      "AI ಕೇಸ್-ಟೇಕಿಂಗ್ ಪೂರ್ಣಗೊಂಡಿದೆ",

    clinicalInformation: "ವೈದ್ಯಕೀಯ ಮಾಹಿತಿ",
    keyInformation:
      "ಕೇಸ್-ಟೇಕಿಂಗ್ ಸಮಯದಲ್ಲಿ ಸಂಗ್ರಹಿಸಿದ ಪ್ರಮುಖ ಮಾಹಿತಿ",

    chiefComplaint: "ಮುಖ್ಯ ದೂರು",
    symptoms: "ಲಕ್ಷಣಗಳು",
    duration: "ಅವಧಿ",
    temperature: "ತಾಪಮಾನ",
    relevantHistory: "ಸಂಬಂಧಿತ ಇತಿಹಾಸ",
    currentMedications: "ಪ್ರಸ್ತುತ ಔಷಧಿಗಳು",
    allergies: "ಅಲರ್ಜಿಗಳು",

    notRecorded: "ದಾಖಲಾಗಿಲ್ಲ",
    notSpecificallyRecorded:
      "ನಿರ್ದಿಷ್ಟವಾಗಿ ದಾಖಲಾಗಿಲ್ಲ",

    severity: "ತೀವ್ರತೆ",
    frequency: "ಆವರ್ತನ",
    onset: "ಆರಂಭ",
    aggravatingFactors: "ಹೆಚ್ಚಿಸುವ ಅಂಶಗಳು",
    relievingFactors: "ಪರಿಹಾರ ನೀಡುವ ಅಂಶಗಳು",
    associatedSymptoms: "ಸಂಬಂಧಿತ ಲಕ್ಷಣಗಳು",

    symptomsAndFindings:
      "ಲಕ್ಷಣಗಳು ಮತ್ತು ಕಂಡುಬಂದ ಅಂಶಗಳು",
    detailedPresentation:
      "ರೋಗಿಯ ಲಕ್ಷಣಗಳ ವಿವರವಾದ ಪ್ರಸ್ತುತಿ",

    clinicalFindings:
      "ವೈದ್ಯಕೀಯ ಕಂಡುಬಂದ ಅಂಶಗಳು",
    patient: "ರೋಗಿ:",
    noConversation:
      "ಇನ್ನೂ ಯಾವುದೇ ಪ್ರಕರಣ ಸಂಭಾಷಣೆ ದಾಖಲಾಗಿಲ್ಲ.",

    attention: "ಗಮನಿಸಿ",
    additionalClinical:
      "ಹೆಚ್ಚುವರಿ ವೈದ್ಯಕೀಯ ಮಾಹಿತಿ ಅಗತ್ಯವಾಗಬಹುದು. ವೈದ್ಯರ ಪರಿಶೀಲನೆಯನ್ನು ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ.",

    clinicalSummary: "ವೈದ್ಯಕೀಯ ಸಾರಾಂಶ",
    aiGeneratedSummary:
      "AI ರಚಿಸಿದ ಪ್ರಕರಣ ಸಾರಾಂಶ",

    caseStarted: "ಪ್ರಕರಣ ಪ್ರಾರಂಭವಾಗಿದೆ",
    aiCaseTakingCompleted:
      "AI ಕೇಸ್-ಟೇಕಿಂಗ್ ಪೂರ್ಣಗೊಂಡಿದೆ",
    caseSummaryCompleted:
      "ಪ್ರಕರಣ ಸಾರಾಂಶ ಪೂರ್ಣಗೊಂಡಿದೆ",
    doctorReviewCompleted:
      "ವೈದ್ಯರ ಪರಿಶೀಲನೆ ಪೂರ್ಣಗೊಂಡಿದೆ",
    caseVerified: "ಪ್ರಕರಣ ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
    awaitingDoctorReview:
      "ವೈದ್ಯರ ಪರಿಶೀಲನೆಗಾಗಿ ಕಾಯುತ್ತಿದೆ",

    patientReports: "ರೋಗಿಯು ತಿಳಿಸುತ್ತಾರೆ",
    patientReportsA: "ರೋಗಿಗೆ",
    recordedTemperature: "ದಾಖಲಿಸಿದ ತಾಪಮಾನ",
    problemOccurs: "ಸಮಸ್ಯೆ",
    worsensWith: "ಇದರಿಂದ ಹೆಚ್ಚಾಗುತ್ತದೆ",
    improvesWith: "ಮತ್ತು ಇದರಿಂದ ಸುಧಾರಿಸುತ್ತದೆ",
    associatedSymptom: "ಸಂಬಂಧಿತ ಲಕ್ಷಣ:",

    severityWord: {
      Mild: "ಸೌಮ್ಯ",
      Moderate: "ಮಧ್ಯಮ",
      Severe: "ತೀವ್ರ",
    },

    frequencyWord: {
      Occasional: "ಕೆಲವೊಮ್ಮೆ",
      Frequent: "ಆಗಾಗ್ಗೆ",
      Daily: "ಪ್ರತಿದಿನ",
      Constant: "ನಿರಂತರವಾಗಿ",
      Rare: "ಅಪರೂಪವಾಗಿ",
    },

    severityOccurrence: "ತೀವ್ರತೆ",
    occurrence: "ಆವರ್ತನೆ",
    onsetLabel: "ಆರಂಭ:",
    worseWith: "ಇದರಿಂದ ಹೆಚ್ಚಾಗುತ್ತದೆ",
    improvesWith: "ಇದರಿಂದ ಸುಧಾರಿಸುತ್ತದೆ",

    noClinicalInformation:
      "ಇನ್ನೂ ಯಾವುದೇ ವೈದ್ಯಕೀಯ ಮಾಹಿತಿ ದಾಖಲಾಗಿಲ್ಲ.",

    currentMedicationNote:
      "ಈ ಕೇಸ್-ಟೇಕಿಂಗ್ ಸಮಯದಲ್ಲಿ ದಾಖಲಾಗಿಲ್ಲ.",
    allergyNote:
      "ಈ ಕೇಸ್-ಟೇಕಿಂಗ್ ಸಮಯದಲ್ಲಿ ದಾಖಲಾಗಿಲ್ಲ.",

    for: "ಕಾಲ",
    since: "ಇಂದ",
    today: "ಇಂದು",
    yesterday: "ನಿನ್ನೆ",
    thisMorning: "ಇಂದು ಬೆಳಗ್ಗೆಯಿಂದ",
    thisEvening: "ಇಂದು ಸಂಜೆದಿಂದ",
    lastNight: "ನಿನ್ನೆ ರಾತ್ರಿಯಿಂದ",

    healthCase: "ಆರೋಗ್ಯ ಪ್ರಕರಣ",

    verifiedStatus: "ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
    awaitingStatus: "ಪರಿಶೀಲನೆಗಾಗಿ ಕಾಯುತ್ತಿದೆ",
  },

  ta: {
    caseManagement: "கேஸ் மேலாண்மை",
    caseSummary: "கேஸ் சுருக்கம்",
    generalMedicine: "பொது மருத்துவம்",
    ayurveda: "ஆயுர்வேதம்",
    reviewInformation:
      "கேஸ்-டேக்கிங் அமர்வின் போது சேகரிக்கப்பட்ட தகவல்களைப் பரிசீலிக்கவும்.",
    back: "பின்செல்",

    patientCaseOverview:
      "நோயாளர் / கேஸ் கண்ணோட்டம்",
    basicCaseInfo:
      "இந்த கேஸின் அடிப்படை தகவல்கள்",
    activeCase: "செயலில் உள்ள கேஸ்",

    patientName: "நோயாளர் பெயர்",
    caseId: "கேஸ் ஐடி",
    age: "வயது",
    gender: "பாலினம்",
    dateCreated: "உருவாக்கிய தேதி",
    caseStatus: "கேஸ் நிலை",

    caseProgress: "கேஸ் முன்னேற்றம்",
    currentWorkflow:
      "கேஸ் பணிச்செயல்முறையில் தற்போதைய நிலை",
    aiCaseTakingComplete:
      "AI கேஸ்-டேக்கிங் முடிந்தது",

    clinicalInformation: "மருத்துவ தகவல்",
    keyInformation:
      "கேஸ்-டேக்கிங்கின் போது சேகரிக்கப்பட்ட முக்கிய தகவல்கள்",

    chiefComplaint: "முக்கிய புகார்",
    symptoms: "அறிகுறிகள்",
    duration: "கால அளவு",
    temperature: "வெப்பநிலை",
    relevantHistory:
      "தொடர்புடைய மருத்துவ வரலாறு",
    currentMedications: "தற்போதைய மருந்துகள்",
    allergies: "ஒவ்வாமைகள்",

    notRecorded: "பதிவு செய்யப்படவில்லை",
    notSpecificallyRecorded:
      "குறிப்பாக பதிவு செய்யப்படவில்லை",

    severity: "தீவிரம்",
    frequency: "அடிக்கடி ஏற்படும் நிலை",
    onset: "தொடக்கம்",
    aggravatingFactors: "அதிகரிக்கும் காரணிகள்",
    relievingFactors: "நிவாரணம் தரும் காரணிகள்",
    associatedSymptoms:
      "தொடர்புடைய அறிகுறிகள்",

    symptomsAndFindings:
      "அறிகுறிகள் மற்றும் கண்டறிதல்கள்",
    detailedPresentation:
      "நோயாளியின் அறிகுறிகளின் விரிவான விளக்கம்",

    clinicalFindings: "மருத்துவ கண்டறிதல்கள்",
    patient: "நோயாளர்:",
    noConversation:
      "இதுவரை எந்த கேஸ் உரையாடலும் பதிவு செய்யப்படவில்லை.",

    attention: "கவனம்",
    additionalClinical:
      "கூடுதல் மருத்துவ தகவல்கள் தேவைப்படலாம். மருத்துவர் பரிசீலனை பரிந்துரைக்கப்படுகிறது.",

    clinicalSummary: "மருத்துவ சுருக்கம்",
    aiGeneratedSummary:
      "AI உருவாக்கிய கேஸ் சுருக்கம்",

    caseStarted: "கேஸ் தொடங்கப்பட்டது",
    aiCaseTakingCompleted:
      "AI கேஸ்-டேக்கிங் முடிந்தது",
    caseSummaryCompleted:
      "கேஸ் சுருக்கம் முடிந்தது",
    doctorReviewCompleted:
      "மருத்துவர் பரிசீலனை முடிந்தது",
    caseVerified: "கேஸ் சரிபார்க்கப்பட்டது",
    awaitingDoctorReview:
      "மருத்துவர் பரிசீலனைக்காக காத்திருக்கிறது",

    patientReports:
      "நோயாளர் தெரிவிக்கிறார்",
    patientReportsA: "நோயாளிக்கு",
    recordedTemperature:
      "பதிவு செய்யப்பட்ட வெப்பநிலை",
    problemOccurs: "பிரச்சனை",
    worsensWith: "இதனால் மோசமாகிறது",
    improvesWith:
      "மேலும் இதனால் மேம்படுகிறது",
    associatedSymptom:
      "தொடர்புடைய அறிகுறி:",

    severityWord: {
      Mild: "லேசான",
      Moderate: "மிதமான",
      Severe: "கடுமையான",
    },

    frequencyWord: {
      Occasional: "சில நேரங்களில்",
      Frequent: "அடிக்கடி",
      Daily: "தினமும்",
      Constant: "தொடர்ந்து",
      Rare: "அரிதாக",
    },

    severityOccurrence: "தீவிரம்",
    occurrence: "நிகழ்வு",
    onsetLabel: "தொடக்கம்:",
    worseWith: "இதனால் மோசமாகிறது",
    improvesWith: "இதனால் மேம்படுகிறது",

    noClinicalInformation:
      "இதுவரை எந்த மருத்துவ தகவலும் பதிவு செய்யப்படவில்லை.",

    currentMedicationNote:
      "இந்த கேஸ்-டேக்கிங் அமர்வின் போது பதிவு செய்யப்படவில்லை.",
    allergyNote:
      "இந்த கேஸ்-டேக்கிங் அமர்வின் போது பதிவு செய்யப்படவில்லை.",

    for: "காலமாக",
    since: "முதல்",
    today: "இன்று",
    yesterday: "நேற்று",
    thisMorning: "இன்று காலை முதல்",
    thisEvening: "இன்று மாலை முதல்",
    lastNight: "நேற்று இரவு முதல்",

    healthCase: "சுகாதார கேஸ்",

    verifiedStatus: "சரிபார்க்கப்பட்டது",
    awaitingStatus:
      "பரிசீலனைக்காக காத்திருக்கிறது",
  },
};

export default function CaseSummaryPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const languageContext = useLanguage();

  const language =
    languageContext?.language || "en";

  const t =
    caseSummaryTranslations[language] ||
    caseSummaryTranslations.en;

  const system =
    searchParams.get("system") ||
    "general-medicine";

  const isAyurveda =
    system === "ayurveda";

  const accent = isAyurveda
    ? "#059669"
    : "#0891b2";

  const systemLabel = isAyurveda
    ? t.ayurveda
    : t.generalMedicine;

  const accentBackground = isAyurveda
    ? "rgba(5,150,105,0.10)"
    : "rgba(8,145,178,0.10)";

  const savedCaseData =
    sessionStorage.getItem("jeevanCaseData") ||
    localStorage.getItem("jeevanCaseData");

  let caseData = null;

  try {
    caseData = savedCaseData
      ? JSON.parse(savedCaseData)
      : null;
  } catch (error) {
    console.error(
      "Unable to read case data:",
      error
    );
    caseData = null;
  }

  const verificationStatus =
    caseData?.verificationStatus ||
    "Awaiting Review";

  const patientMessages =
    Array.isArray(caseData?.messages)
      ? caseData.messages.filter(
          (message) =>
            message &&
            message.type === "patient"
        )
      : [];

  const patientTexts =
    patientMessages.map(
      (message) =>
        typeof message.text === "string"
          ? message.text
          : ""
    );

  const allPatientText =
    patientTexts.join(" ");

  const chiefComplaint =
    getChiefComplaint(patientTexts);

  const severity =
    getSeverity(allPatientText);

  const frequency =
    getFrequency(allPatientText);

  const onset =
    getOnset(allPatientText);

  const temperature =
    getTemperature(allPatientText);

  const aggravatingFactor =
    getAggravatingFactor(allPatientText);

  const relievingFactor =
    getRelievingFactor(allPatientText);

  const associatedSymptoms =
    getAssociatedSymptoms(
      allPatientText,
      patientTexts
    );

  const clinicalSummary =
    buildClinicalSummary({
      chiefComplaint,
      severity,
      frequency,
      onset,
      temperature,
      aggravatingFactor,
      relievingFactor,
      associatedSymptoms,
      language,
      t,
    });

  const displaySeverity =
    severity === "Not specifically recorded"
      ? t.notSpecificallyRecorded
      : t.severityWord[severity] ||
        severity;

  const displayFrequency =
    frequency === "Not specifically recorded"
      ? t.notSpecificallyRecorded
      : t.frequencyWord[frequency] ||
        frequency;

  const displayOnset =
    onset === "Not recorded"
      ? t.notRecorded
      : onset;

  const displayTemperature =
    temperature || t.notRecorded;

  const displayAggravating =
    aggravatingFactor === "Not recorded"
      ? t.notRecorded
      : naturalizeFactor(
          aggravatingFactor
        );

  const displayRelieving =
    relievingFactor === "Not recorded"
      ? t.notRecorded
      : naturalizeFactor(
          relievingFactor
        );

  const displayAssociated =
    associatedSymptoms === "Not recorded"
      ? t.notRecorded
      : associatedSymptoms;

  const localizedVerificationStatus =
    verificationStatus === "Verified"
      ? t.verifiedStatus
      : t.awaitingStatus;

  return (
    <div
      className="container-fluid px-0"
      style={{
        color: "var(--jc-text)",
      }}
    >
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
            {t.caseManagement}
          </div>

          <div className="d-flex align-items-center gap-3">
            <h1
              className="fw-bold mb-0"
              style={{
                fontSize: "30px",
                color: "var(--jc-text)",
              }}
            >
              {t.caseSummary}
            </h1>

            <span
              className="badge rounded-pill"
              style={{
                color: accent,
                background:
                  accentBackground,
                border:
                  "1px solid " + accent,
              }}
            >
              {systemLabel}
            </span>
          </div>

          <p
            className="mb-0 mt-2"
            style={{
              color: "var(--jc-muted)",
              fontSize: "14px",
            }}
          >
            {t.reviewInformation}
          </p>
        </div>

        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => navigate(-1)}
        >
          <i className="bi bi-arrow-left me-2"></i>
          {t.back}
        </button>
      </div>

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
                  color: "var(--jc-text)",
                  fontSize: "15px",
                }}
              >
                {t.patientCaseOverview}
              </div>

              <div
                style={{
                  color: "var(--jc-muted)",
                  fontSize: "11px",
                  marginTop: "3px",
                }}
              >
                {t.basicCaseInfo}
              </div>
            </div>
          </div>

          <span
            className="badge rounded-pill"
            style={{
              color: "#16a34a",
              background:
                "rgba(34,197,94,0.08)",
              border:
                "1px solid rgba(34,197,94,0.16)",
            }}
          >
            <i className="bi bi-circle-fill me-1"></i>
            {t.activeCase}
          </span>
        </div>

        <div className="row g-3">
          <InfoItem
            label={t.patientName}
            value={
              caseData?.patientName ||
              caseData?.patient?.name ||
              "Patient Name"
            }
          />

          <InfoItem
            label={t.caseId}
            value={
              caseData?.caseId ||
              "JC-DEMO-001"
            }
          />

          <InfoItem
            label={t.age}
            value={
              caseData?.age ||
              caseData?.patient?.age ||
              "--"
            }
          />

          <InfoItem
            label={t.gender}
            value={
              caseData?.gender ||
              caseData?.patient?.gender ||
              "--"
            }
          />

          <InfoItem
            label={t.dateCreated}
            value={
              caseData?.createdAt
                ? new Date(
                    caseData.createdAt
                  ).toLocaleDateString()
                : "--"
            }
          />

          <InfoItem
            label={t.caseStatus}
            value={
              localizedVerificationStatus
            }
          />
        </div>
      </div>

      <div className="jc-dashboard-card mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <div
              className="fw-semibold"
              style={{
                color: "var(--jc-text)",
                fontSize: "14px",
              }}
            >
              {t.caseProgress}
            </div>

            <div
              style={{
                color: "var(--jc-muted)",
                fontSize: "11px",
                marginTop: "3px",
              }}
            >
              {t.currentWorkflow}
            </div>
          </div>

          <span
            style={{
              color: accent,
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            {t.aiCaseTakingComplete}
          </span>
        </div>

        <div
          style={{
            height: "7px",
            background:
              "var(--jc-panel-elevated)",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "55%",
              height: "100%",
              background: accent,
              borderRadius: "20px",
            }}
          ></div>
        </div>
      </div>

      <div className="jc-dashboard-card mb-4">
        <SectionHeader
          icon="bi-clipboard2-pulse"
          title={t.clinicalInformation}
          subtitle={t.keyInformation}
          accent={accent}
          background={accentBackground}
        />

        <div className="row g-3">
          <ClinicalItem
            label={t.chiefComplaint}
            value={
              chiefComplaint ===
              "Not recorded"
                ? t.notRecorded
                : chiefComplaint
            }
            fullWidth={true}
          />

          <ClinicalItem
            label={t.symptoms}
            value={
              [
                severity !==
                "Not specifically recorded"
                  ? displaySeverity +
                    " " +
                    t.severityOccurrence
                  : null,

                frequency !==
                "Not specifically recorded"
                  ? displayFrequency +
                    " " +
                    t.occurrence
                  : null,

                associatedSymptoms !==
                "Not recorded"
                  ? t.associatedSymptom +
                    " " +
                    displayAssociated
                  : null,
              ]
                .filter(Boolean)
                .join(" • ") ||
              t.notRecorded
            }
          />

          <ClinicalItem
            label={t.duration}
            value={displayOnset}
          />

          <ClinicalItem
            label={t.temperature}
            value={displayTemperature}
          />

          <ClinicalItem
            label={t.relevantHistory}
            value={
              [
                onset !== "Not recorded"
                  ? t.onsetLabel +
                    " " +
                    displayOnset
                  : null,

                aggravatingFactor !==
                "Not recorded"
                  ? t.worseWith +
                    " " +
                    naturalizeFactor(
                      aggravatingFactor
                    )
                  : null,

                relievingFactor !==
                "Not recorded"
                  ? t.improvesWith +
                    " " +
                    naturalizeFactor(
                      relievingFactor
                    )
                  : null,
              ]
                .filter(Boolean)
                .join(" • ") ||
              t.notRecorded
            }
          />

          <ClinicalItem
            label={t.currentMedications}
            value={
              t.currentMedicationNote
            }
          />

          <ClinicalItem
            label={t.allergies}
            value={t.allergyNote}
          />
        </div>
      </div>

      <div className="jc-dashboard-card mb-4">
        <SectionHeader
          icon="bi-activity"
          title={t.symptomsAndFindings}
          subtitle={t.detailedPresentation}
          accent={accent}
          background={accentBackground}
        />

        <div className="row g-3">
          <FindingItem
            label={t.severity}
            value={displaySeverity}
          />

          <FindingItem
            label={t.frequency}
            value={displayFrequency}
          />

          <FindingItem
            label={t.onset}
            value={displayOnset}
          />

          <FindingItem
            label={t.aggravatingFactors}
            value={displayAggravating}
          />

          <FindingItem
            label={t.relievingFactors}
            value={displayRelieving}
          />

          <FindingItem
            label={t.associatedSymptoms}
            value={displayAssociated}
          />
        </div>

        <div
          className="mt-3"
          style={{
            padding: "15px",
            borderRadius: "9px",
            border:
              "1px dashed var(--jc-border)",
            background:
              "var(--jc-panel-elevated)",
          }}
        >
          <div
            style={{
              color: "var(--jc-subtle)",
              fontSize: "10px",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              marginBottom: "7px",
            }}
          >
            {t.clinicalFindings}
          </div>

          <div
            style={{
              color: "var(--jc-muted)",
              fontSize: "12px",
              lineHeight: "1.6",
            }}
          >
            {patientMessages.length > 0 ? (
              <div>
                {patientMessages.map(
                  (message, index) => (
                    <div
                      key={
                        message.id ||
                        "patient-message-" +
                          index
                      }
                      className="mb-2"
                      style={{
                        color:
                          "var(--jc-text)",
                        fontSize: "12px",
                        lineHeight: "1.6",
                      }}
                    >
                      <span
                        style={{
                          color:
                            "var(--jc-muted)",
                          fontWeight: "600",
                        }}
                      >
                        {t.patient}
                      </span>{" "}
                      {message.text}
                    </div>
                  )
                )}
              </div>
            ) : (
              <div
                style={{
                  color:
                    "var(--jc-muted)",
                  fontSize: "12px",
                  lineHeight: "1.6",
                }}
              >
                {t.noConversation}
              </div>
            )}
          </div>
        </div>

        {Array.isArray(
          caseData?.redFlags
        ) &&
          caseData.redFlags.length > 0 && (
            <div
              className="mt-3"
              style={{
                padding: "15px",
                borderRadius: "9px",
                background:
                  "rgba(225,29,72,0.07)",
                border:
                  "1px solid rgba(225,29,72,0.18)",
              }}
            >
              <div
                style={{
                  color: "#e11d48",
                  fontSize: "10px",
                  fontWeight: "700",
                  letterSpacing: "0.5px",
                  marginBottom: "8px",
                }}
              >
                {t.attention}
              </div>

              {caseData.redFlags.map(
                (flag, index) => (
                  <div
                    key={
                      "red-flag-" +
                      index
                    }
                    style={{
                      color:
                        "var(--jc-text)",
                      fontSize: "12px",
                      lineHeight: "1.6",
                    }}
                  >
                    <i className="bi bi-exclamation-triangle me-2"></i>
                    {flag}
                  </div>
                )
              )}

              <div
                className="mt-2"
                style={{
                  color:
                    "var(--jc-muted)",
                  fontSize: "10px",
                  lineHeight: "1.5",
                }}
              >
                {t.additionalClinical}
              </div>
            </div>
          )}
      </div>

      <div className="row g-4">
        <div className="col-xl-8">
          <div className="jc-dashboard-card">
            <SectionHeader
              icon="bi-file-medical"
              title={t.clinicalSummary}
              subtitle={t.aiGeneratedSummary}
              accent={accent}
              background={accentBackground}
            />

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
              <div
                style={{
                  color:
                    "var(--jc-text)",
                  fontSize: "12px",
                  lineHeight: "1.7",
                }}
              >
                {clinicalSummary}
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4">
          <div className="jc-dashboard-card">
            <div
              className="fw-semibold mb-3"
              style={{
                color:
                  "var(--jc-text)",
                fontSize: "14px",
              }}
            >
              {t.caseStatus}
            </div>

            <StatusRow
              icon="bi-check-circle-fill"
              label={t.caseStarted}
              completed={true}
              accent={accent}
            />

            <StatusRow
              icon="bi-check-circle-fill"
              label={
                t.aiCaseTakingCompleted
              }
              completed={
                patientMessages.length > 0
              }
              accent={accent}
            />

            <StatusRow
              icon="bi-check-circle-fill"
              label={
                t.caseSummaryCompleted
              }
              completed={true}
              accent={accent}
            />

            {verificationStatus ===
            "Verified" ? (
              <>
                <StatusRow
                  icon="bi-person-check-fill"
                  label={
                    t.doctorReviewCompleted
                  }
                  completed={true}
                  accent={accent}
                />

                <StatusRow
                  icon="bi-patch-check-fill"
                  label={t.caseVerified}
                  completed={true}
                  accent={accent}
                />
              </>
            ) : (
              <StatusRow
                icon="bi-person-check"
                label={
                  t.awaitingDoctorReview
                }
                completed={false}
                accent={accent}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function getChiefComplaint(patientTexts) {
  if (!Array.isArray(patientTexts) ||
      patientTexts.length === 0) {
    return "Not recorded";
  }

  let text =
    typeof patientTexts[0] === "string"
      ? patientTexts[0]
          .trim()
          .replace(/[.!?]+$/, "")
      : "";

  text = text
    .replace(
      /^i\s+have\s+(been\s+having\s+)?(a|an|the)?\s*/i,
      ""
    )
    .replace(
      /^i\s+(am having|am experiencing|feel)\s+(a|an|the)?\s*/i,
      ""
    )
    .trim();

  if (!text) {
    return "Not recorded";
  }

  return (
    text.charAt(0).toUpperCase() +
    text.slice(1)
  );
}

function getSeverity(text) {
  if (/\bsevere\b/i.test(text)) {
    return "Severe";
  }

  if (/\bmoderate\b/i.test(text)) {
    return "Moderate";
  }

  if (/\bmild\b/i.test(text)) {
    return "Mild";
  }

  return "Not specifically recorded";
}

function getFrequency(text) {
  if (
    /\boccasionally\b/i.test(text) ||
    /\bsometimes\b/i.test(text)
  ) {
    return "Occasional";
  }

  if (
    /\bfrequently\b/i.test(text) ||
    /\bfrequent\b/i.test(text) ||
    /\boften\b/i.test(text)
  ) {
    return "Frequent";
  }

  if (
    /\bdaily\b/i.test(text) ||
    /\bevery day\b/i.test(text)
  ) {
    return "Daily";
  }

  if (/\bconstant\b/i.test(text)) {
    return "Constant";
  }

  if (/\brarely\b/i.test(text)) {
    return "Rare";
  }

  return "Not specifically recorded";
}

function getOnset(text) {
  const cleanText =
    typeof text === "string"
      ? text.trim()
      : "";

  if (!cleanText) {
    return "Not recorded";
  }

  const patterns = [
    /\bsince\s+(yesterday|today|this morning|this evening|last night)\b/i,

    /\bfor\s+(\d+\s+(?:day|days|week|weeks|month|months|year|years))\b/i,

    /\bstarted\s+(?:having\s+|with\s+|about\s+)?(?:this\s+)?(yesterday|today|this morning|this evening|last night)\b/i,

    /\bbegan\s+(?:having\s+|with\s+|about\s+)?(?:this\s+)?(yesterday|today|this morning|this evening|last night)\b/i,

    /\bstarted\s+(?:having\s+|with\s+|about\s+)?(?:this\s+)?(\d+\s+(?:day|days|week|weeks|month|months|year|years))\s+ago\b/i,

    /\bbegan\s+(?:having\s+|with\s+|about\s+)?(?:this\s+)?(\d+\s+(?:day|days|week|weeks|month|months|year|years))\s+ago\b/i,
  ];

  for (
    let index = 0;
    index < patterns.length;
    index += 1
  ) {
    const match =
      cleanText.match(patterns[index]);

    if (match && match[1]) {
      return match[1].trim();
    }
  }

  return "Not recorded";
}

function getTemperature(text) {
  const cleanText =
    typeof text === "string"
      ? text.trim()
      : "";

  if (!cleanText) {
    return "";
  }

  const temperatureMatch =
    cleanText.match(
      /\b(?:temperature|fever)\s*(?:is|of|was|around|at)?\s*(\d+(?:\.\d+)?)\s*(?:°?\s*F|°?\s*C|degrees?\s*(?:F|C))\b/i
    );

  if (
    temperatureMatch &&
    temperatureMatch[1]
  ) {
    const unitMatch =
      temperatureMatch[0].match(
        /(F|C)\b/i
      );

    const unit = unitMatch
      ? "°" +
        unitMatch[1].toUpperCase()
      : "";

    return (
      temperatureMatch[1] +
      unit
    );
  }

  return "";
}

function getAggravatingFactor(text) {
  const cleanText =
    typeof text === "string"
      ? text.trim()
      : "";

  if (!cleanText) {
    return "Not recorded";
  }

  const patterns = [
    /\bworse\s+(?:with|after|when)\s+([^,.!?]+)/i,
    /\bworsens\s+(?:with|after|when)\s+([^,.!?]+)/i,
    /\baggravated\s+(?:by|with|after)\s+([^,.!?]+)/i,
    /\baggravating\s+factor\s*(?:is|:)?\s*([^,.!?]+)/i,
    /\bgets\s+worse\s+(?:with|after|when)\s+([^,.!?]+)/i,
    /\bincreases\s+(?:with|after|when)\s+([^,.!?]+)/i,
  ];

  for (
    let index = 0;
    index < patterns.length;
    index += 1
  ) {
    const match =
      cleanText.match(patterns[index]);

    if (match && match[1]) {
      return cleanFactor(match[1]);
    }
  }

  if (
    /\b(?:worse|worsens|aggravated|increases)\b[\s\S]*\beating\b/i.test(
      cleanText
    )
  ) {
    return "eating";
  }

  return "Not recorded";
}

function getRelievingFactor(text) {
  const cleanText =
    typeof text === "string"
      ? text.trim()
      : "";

  if (!cleanText) {
    return "Not recorded";
  }

  const patterns = [
    /\bbetter\s+(?:with|after|when)\s+([^,.!?]+)/i,

    /\bimproves\s+(?:with|after|when)\s+([^,.!?]+)/i,

    /\bimproved\s+(?:with|after|when)\s+([^,.!?]+)/i,

    /\brelieved\s+(?:by|with)\s+([^,.!?]+)/i,

    /\brelieving\s+factor\s*(?:is|:)?\s*([^,.!?]+)/i,

    /\bdecreases\s+(?:with|after|when)\s+([^,.!?]+)/i,

    /\bgets\s+better\s+(?:with|after|when)\s+([^,.!?]+)/i,

    /\b([a-zA-Z]+ing)\s+makes\s+(?:it|the\s+(?:pain|problem|symptom))\s+better\b/i,

    /\b(rest|resting)\s+makes\s+(?:it|the\s+(?:pain|problem|symptom))\s+better\b/i,
  ];

  for (
    let index = 0;
    index < patterns.length;
    index += 1
  ) {
    const match =
      cleanText.match(patterns[index]);

    if (match && match[1]) {
      const cleaned =
        cleanFactor(match[1]);

      if (
        /^rest$/i.test(cleaned) ||
        /^resting$/i.test(cleaned)
      ) {
        return "Resting";
      }

      return cleaned;
    }
  }

  if (
    /\b(?:better|improves|improved|relieved|decreases)\b[\s\S]*\b(?:rest|resting)\b/i.test(
      cleanText
    )
  ) {
    return "Resting";
  }

  return "Not recorded";
}

function getAssociatedSymptoms(
  text,
  patientTexts
) {
  const lower =
    typeof text === "string"
      ? text.toLowerCase()
      : "";

  if (!lower.trim()) {
    return "Not recorded";
  }

  if (
    lower.includes("bloating") ||
    lower.includes("bloated")
  ) {
    return "Bloating";
  }

  if (
    lower.includes("dizziness") ||
    lower.includes("dizzy")
  ) {
    return "Dizziness";
  }

  if (lower.includes("nausea")) {
    return "Nausea";
  }

  if (
    lower.includes("vomiting") ||
    lower.includes("vomit")
  ) {
    return "Vomiting";
  }

  if (
    lower.includes("weakness") ||
    lower.includes("fatigue") ||
    lower.includes("tired")
  ) {
    return "Weakness / fatigue";
  }

  if (lower.includes("chills")) {
    return "Chills";
  }

  if (lower.includes("sweating")) {
    return "Sweating";
  }

  if (lower.includes("cough")) {
    return "Cough";
  }

  if (lower.includes("headache")) {
    return "Headache";
  }

  const message =
    Array.isArray(patientTexts)
      ? patientTexts.find(
          (item) => {
            const value =
              typeof item === "string"
                ? item.toLowerCase()
                : "";

            return (
              value.includes("also have") ||
              value.includes("also has") ||
              value.includes("also having") ||
              value.includes("along with") ||
              value.includes("other symptoms") ||
              value.includes("associated with")
            );
          }
        )
      : null;

  if (!message) {
    return "Not recorded";
  }

  const alsoMatch =
    message.match(
      /also\s+(?:have|has|having)\s+(.+)$/i
    );

  if (
    alsoMatch &&
    alsoMatch[1]
  ) {
    return cleanFactor(
      alsoMatch[1]
    );
  }

  const alongMatch =
    message.match(
      /along\s+with\s+(.+)$/i
    );

  if (
    alongMatch &&
    alongMatch[1]
  ) {
    return cleanFactor(
      alongMatch[1]
    );
  }

  const associatedMatch =
    message.match(
      /associated\s+with\s+(.+)$/i
    );

  if (
    associatedMatch &&
    associatedMatch[1]
  ) {
    return cleanFactor(
      associatedMatch[1]
    );
  }

  return "Not recorded";
}

function buildClinicalSummary({
  chiefComplaint,
  severity,
  frequency,
  onset,
  temperature,
  aggravatingFactor,
  relievingFactor,
  associatedSymptoms,
  language,
  t,
}) {
  if (
    !chiefComplaint ||
    chiefComplaint === "Not recorded"
  ) {
    return t.noClinicalInformation;
  }

  const cleanedComplaint =
    chiefComplaint
      .trim()
      .replace(
        /^i\s+have\s+/i,
        ""
      )
      .replace(
        /^i\s+am\s+having\s+/i,
        ""
      )
      .replace(
        /^i\s+feel\s+/i,
        ""
      )
      .replace(
        /[.!?]+$/,
        ""
      )
      .trim();

  let summary = "";

  if (
    severity !==
    "Not specifically recorded"
  ) {
    const severityText =
      t.severityWord[severity] ||
      severity.toLowerCase();

    if (language === "en") {
      summary =
        t.patientReportsA +
        " " +
        severityText +
        " " +
        cleanedComplaint.toLowerCase();
    } else {
      summary =
        t.patientReportsA +
        " " +
        cleanedComplaint.toLowerCase() +
        " (" +
        severityText +
        ")";
    }
  } else {
    if (language === "en") {
      summary =
        t.patientReports +
        " " +
        cleanedComplaint.toLowerCase();
    } else {
      summary =
        t.patientReportsA +
        " " +
        cleanedComplaint.toLowerCase();
    }
  }

  if (onset !== "Not recorded") {
    const durationText =
      onset
        .replace(
          /^for\s+/i,
          ""
        )
        .replace(
          /\s+ago$/i,
          ""
        )
        .trim();

    if (
      /^(yesterday|today|this morning|this evening|last night)$/i.test(
        durationText
      )
    ) {
      summary +=
        " " +
        t.since +
        " " +
        durationText;
    } else if (language === "en") {
      summary +=
        " " +
        t.for +
        " " +
        durationText;
    } else {
      summary +=
        " " +
        durationText;
    }
  }

  if (temperature) {
    summary +=
      ". " +
      t.recordedTemperature +
      " " +
      temperature;
  }

  if (
    frequency !==
    "Not specifically recorded"
  ) {
    const frequencyText =
      t.frequencyWord[frequency] ||
      frequency.toLowerCase();

    summary +=
      ". " +
      t.problemOccurs +
      " " +
      frequencyText;
  }

  if (
    aggravatingFactor !==
    "Not recorded"
  ) {
    summary +=
      ", " +
      t.worsensWith +
      " " +
      naturalizeFactor(
        aggravatingFactor
      );
  }

  if (
    relievingFactor !==
    "Not recorded"
  ) {
    summary +=
      ", " +
      t.improvesWith +
      " " +
      naturalizeFactor(
        relievingFactor
      );
  }

  if (
    associatedSymptoms !==
    "Not recorded"
  ) {
    summary +=
      ". " +
      t.associatedSymptom +
      " " +
      associatedSymptoms;
  }

  return summary + ".";
}

function cleanFactor(value) {
  if (
    typeof value !== "string" ||
    !value
  ) {
    return "";
  }

  return value
    .trim()
    .replace(/[.!?]+$/, "")
    .replace(/^I\s+/i, "")
    .replace(/^it\s+/i, "")
    .replace(
      /^the\s+problem\s+/i,
      ""
    )
    .trim();
}

function naturalizeFactor(value) {
  const cleaned =
    cleanFactor(value);

  if (
    /^look at screens$/i.test(
      cleaned
    )
  ) {
    return "looking at screens";
  }

  if (
    /^sleep$/i.test(cleaned)
  ) {
    return "sleep";
  }

  if (
    /^rest$/i.test(cleaned) ||
    /^resting$/i.test(cleaned)
  ) {
    return "Resting";
  }

  return cleaned;
}

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
          className={"bi " + icon}
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

function InfoItem({
  label,
  value,
}) {
  return (
    <div className="col-md-6 col-xl-4">
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
            marginBottom: "6px",
          }}
        >
          {label}
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

function ClinicalItem({
  label,
  value,
  fullWidth,
}) {
  return (
    <div
      className={
        fullWidth
          ? "col-12"
          : "col-md-6"
      }
    >
      <div
        style={{
          padding: "16px",
          border:
            "1px solid var(--jc-border)",
          borderRadius: "9px",
          background:
            "var(--jc-panel-elevated)",
          minHeight: "82px",
        }}
      >
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
            marginBottom: "7px",
          }}
        >
          {label}
        </div>

        <div
          style={{
            color:
              "var(--jc-text)",
            fontSize: "12px",
            lineHeight: "1.6",
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );
}

function FindingItem({
  label,
  value,
}) {
  return (
    <div className="col-md-6 col-xl-4">
      <div
        style={{
          padding: "15px",
          border:
            "1px solid var(--jc-border)",
          borderRadius: "9px",
          background:
            "var(--jc-panel-elevated)",
          minHeight: "78px",
        }}
      >
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
            marginBottom: "7px",
          }}
        >
          {label}
        </div>

        <div
          style={{
            color:
              "var(--jc-text)",
            fontSize: "12px",
            lineHeight: "1.6",
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );
}

function StatusRow({
  icon,
  label,
  completed,
  accent,
}) {
  return (
    <div className="d-flex align-items-center gap-3 mb-3">
      <div
        className="d-flex align-items-center justify-content-center flex-shrink-0"
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          background: completed
            ? accent
            : "var(--jc-panel-elevated)",
          color: completed
            ? "#ffffff"
            : "var(--jc-subtle)",
          border:
            "1px solid var(--jc-border)",
        }}
      >
        <i
          className={"bi " + icon}
        ></i>
      </div>

      <div
        style={{
          color: completed
            ? "var(--jc-text)"
            : "var(--jc-muted)",
          fontSize: "12px",
          fontWeight: completed
            ? "600"
            : "400",
        }}
      >
        {label}
      </div>
    </div>
  );
}