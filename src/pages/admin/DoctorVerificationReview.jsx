import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const STORAGE_KEY = "jeevanDoctorIdentityRequests";

const DEFAULT_DOCTORS = [
  {
    id: "DOC-2026-001",
    name: "Dr. Aditi Sharma",
    registrationNo: "MMC-2021-45821",
    specialization: "General Medicine",
    submittedDate: "20 Sep 2026",
    status: "Pending Review",
    qualification: "MBBS, MD",
    medicalCouncil: "Maharashtra Medical Council",
    experience: "5 years",
    clinic: "CityCare Multispeciality Hospital",
    documents: "Complete",
  },
  {
    id: "DOC-2026-002",
    name: "Dr. Rahul Deshmukh",
    registrationNo: "MMC-2019-32714",
    specialization: "Cardiology",
    submittedDate: "19 Sep 2026",
    status: "Pending Review",
    qualification: "MBBS, DM Cardiology",
    medicalCouncil: "Maharashtra Medical Council",
    experience: "8 years",
    clinic: "HeartFirst Cardiac Centre",
    documents: "Complete",
  },
  {
    id: "DOC-2026-003",
    name: "Dr. Neha Kulkarni",
    registrationNo: "MMC-2022-51673",
    specialization: "Paediatrics",
    submittedDate: "18 Sep 2026",
    status: "Pending Review",
    qualification: "MBBS, DCH",
    medicalCouncil: "Maharashtra Medical Council",
    experience: "4 years",
    clinic: "LittleCare Children's Hospital",
    documents: "Complete",
  },
  {
    id: "DOC-2026-004",
    name: "Dr. Sameer Patil",
    registrationNo: "MMC-2018-28491",
    specialization: "Orthopaedics",
    submittedDate: "17 Sep 2026",
    status: "More Information",
    qualification: "MBBS, MS Orthopaedics",
    medicalCouncil: "Maharashtra Medical Council",
    experience: "10 years",
    clinic: "Pune Orthopaedic Institute",
    documents: "Additional document requested",
  },
  {
    id: "DOC-2026-005",
    name: "Dr. Priya Joshi",
    registrationNo: "MMC-2020-39128",
    specialization: "Dermatology",
    submittedDate: "16 Sep 2026",
    status: "Pending Review",
    qualification: "MBBS, MD Dermatology",
    medicalCouncil: "Maharashtra Medical Council",
    experience: "6 years",
    clinic: "DermaCare Clinic",
    documents: "Complete",
  },
];

const adminReviewTranslations = {
  en: {
    doctorNotFound: "Doctor not found",
    doctorNotFoundDescription:
      "The requested doctor verification record could not be found.",
    backToDashboard: "Back to Dashboard",
    backToDoctorVerification:
      "Back to Doctor Verification",

    reviewDoctor: "Review Doctor",
    reviewDescription:
      "Review the doctor's professional identity information and submitted credentials.",

    verified: "Verified",
    pendingReview: "Pending Review",
    moreInformation: "More Information",
    rejected: "Rejected",

    verificationSuccess:
      "Doctor identity has been verified successfully.",
    verificationRejected:
      "Doctor identity verification has been rejected.",
    informationRequested:
      "Additional information has been requested from the doctor.",

    doctorIdentity: "Doctor Identity",
    professionalInformation:
      "Professional Information",
    qualification: "Qualification",

    doctorName: "Doctor Name",
    specialization: "Specialization",
    experience: "Experience",
    clinicHospital: "Clinic / Hospital",
    medicalCouncil: "Medical Council",
    registrationNumber: "Registration Number",
    submitted: "Submitted",

    submittedDocuments: "Submitted Documents",
    credentialDocuments:
      "Doctor credential documents",
    credentialDescription:
      "Registration and qualification documents submitted for verification.",

    complete: "Complete",
    additionalDocument:
      "Additional document requested",

    identityNoteTitle:
      "Identity verification is separate from case verification.",
    identityNote:
      "Approving this request verifies the doctor's professional identity only. It does not automatically verify any patient case.",

    verificationDecision:
      "Verification Decision",
    decisionDescription:
      "Select an action based on the submitted credentials.",

    requestMoreInformation:
      "Request More Information",
    reject: "Reject",
    approve: "Approve",
  },

  mr: {
    doctorNotFound: "डॉक्टर सापडला नाही",
    doctorNotFoundDescription:
      "विनंती केलेला डॉक्टर पडताळणी रेकॉर्ड सापडला नाही.",
    backToDashboard: "डॅशबोर्डवर परत जा",
    backToDoctorVerification:
      "डॉक्टर पडताळणीकडे परत जा",

    reviewDoctor: "डॉक्टरचे पुनरावलोकन",
    reviewDescription:
      "डॉक्टरच्या व्यावसायिक ओळख माहिती आणि सादर केलेल्या प्रमाणपत्रांचे पुनरावलोकन करा.",

    verified: "पडताळलेले",
    pendingReview: "पडताळणी प्रलंबित",
    moreInformation: "अधिक माहिती",
    rejected: "नाकारले",

    verificationSuccess:
      "डॉक्टरची ओळख यशस्वीरित्या पडताळली गेली आहे.",
    verificationRejected:
      "डॉक्टरची ओळख पडताळणी नाकारण्यात आली आहे.",
    informationRequested:
      "डॉक्टरकडून अतिरिक्त माहितीची विनंती करण्यात आली आहे.",

    doctorIdentity: "डॉक्टरची ओळख",
    professionalInformation:
      "व्यावसायिक माहिती",
    qualification: "शैक्षणिक पात्रता",

    doctorName: "डॉक्टरचे नाव",
    specialization: "विशेषज्ञता",
    experience: "अनुभव",
    clinicHospital: "क्लिनिक / रुग्णालय",
    medicalCouncil: "वैद्यकीय परिषद",
    registrationNumber: "नोंदणी क्रमांक",
    submitted: "सादर केले",

    submittedDocuments:
      "सादर केलेले दस्तऐवज",
    credentialDocuments:
      "डॉक्टरची प्रमाणपत्रे",
    credentialDescription:
      "पडताळणीसाठी सादर केलेली नोंदणी आणि शैक्षणिक पात्रतेची कागदपत्रे.",

    complete: "पूर्ण",
    additionalDocument:
      "अतिरिक्त दस्तऐवजाची विनंती केली आहे",

    identityNoteTitle:
      "ओळख पडताळणी ही केस पडताळणीपासून स्वतंत्र आहे.",
    identityNote:
      "ही विनंती मंजूर केल्याने केवळ डॉक्टरची व्यावसायिक ओळख पडताळली जाते. कोणतीही रुग्ण केस आपोआप पडताळली जात नाही.",

    verificationDecision:
      "पडताळणी निर्णय",
    decisionDescription:
      "सादर केलेल्या प्रमाणपत्रांच्या आधारे कृती निवडा.",

    requestMoreInformation:
      "अधिक माहितीची विनंती करा",
    reject: "नकार द्या",
    approve: "मंजूर करा",
  },

  hi: {
    doctorNotFound: "डॉक्टर नहीं मिला",
    doctorNotFoundDescription:
      "अनुरोधित डॉक्टर सत्यापन रिकॉर्ड नहीं मिला।",
    backToDashboard: "डैशबोर्ड पर वापस जाएं",
    backToDoctorVerification:
      "डॉक्टर सत्यापन पर वापस जाएं",

    reviewDoctor: "डॉक्टर की समीक्षा",
    reviewDescription:
      "डॉक्टर की पेशेवर पहचान जानकारी और प्रस्तुत प्रमाण-पत्रों की समीक्षा करें।",

    verified: "सत्यापित",
    pendingReview: "समीक्षा लंबित",
    moreInformation: "अधिक जानकारी",
    rejected: "अस्वीकृत",

    verificationSuccess:
      "डॉक्टर की पहचान सफलतापूर्वक सत्यापित की गई है।",
    verificationRejected:
      "डॉक्टर का पहचान सत्यापन अस्वीकार कर दिया गया है।",
    informationRequested:
      "डॉक्टर से अतिरिक्त जानकारी का अनुरोध किया गया है।",

    doctorIdentity: "डॉक्टर की पहचान",
    professionalInformation:
      "पेशेवर जानकारी",
    qualification: "शैक्षणिक योग्यता",

    doctorName: "डॉक्टर का नाम",
    specialization: "विशेषज्ञता",
    experience: "अनुभव",
    clinicHospital: "क्लिनिक / अस्पताल",
    medicalCouncil: "मेडिकल काउंसिल",
    registrationNumber: "पंजीकरण संख्या",
    submitted: "प्रस्तुत किया गया",

    submittedDocuments:
      "प्रस्तुत दस्तावेज़",
    credentialDocuments:
      "डॉक्टर के प्रमाण-पत्र दस्तावेज़",
    credentialDescription:
      "सत्यापन के लिए प्रस्तुत पंजीकरण और योग्यता संबंधी दस्तावेज़।",

    complete: "पूर्ण",
    additionalDocument:
      "अतिरिक्त दस्तावेज़ का अनुरोध किया गया है",

    identityNoteTitle:
      "पहचान सत्यापन, केस सत्यापन से अलग है।",
    identityNote:
      "इस अनुरोध को स्वीकृत करने से केवल डॉक्टर की पेशेवर पहचान सत्यापित होती है। इससे किसी भी मरीज की केस जानकारी स्वतः सत्यापित नहीं होती।",

    verificationDecision:
      "सत्यापन निर्णय",
    decisionDescription:
      "प्रस्तुत प्रमाण-पत्रों के आधार पर कार्रवाई चुनें।",

    requestMoreInformation:
      "अधिक जानकारी का अनुरोध करें",
    reject: "अस्वीकार करें",
    approve: "स्वीकृत करें",
  },

  gu: {
    doctorNotFound: "ડૉક્ટર મળ્યા નથી",
    doctorNotFoundDescription:
      "વિનંતી કરાયેલ ડૉક્ટર ચકાસણી રેકોર્ડ મળી શક્યો નથી.",
    backToDashboard: "ડેશબોર્ડ પર પાછા જાઓ",
    backToDoctorVerification:
      "ડૉક્ટર ચકાસણી પર પાછા જાઓ",

    reviewDoctor: "ડૉક્ટરની સમીક્ષા",
    reviewDescription:
      "ડૉક્ટરની વ્યાવસાયિક ઓળખ માહિતી અને સબમિટ કરેલા પ્રમાણપત્રોની સમીક્ષા કરો.",

    verified: "ચકાસાયેલ",
    pendingReview: "સમીક્ષા બાકી",
    moreInformation: "વધુ માહિતી",
    rejected: "નકારાયેલ",

    verificationSuccess:
      "ડૉક્ટરની ઓળખ સફળતાપૂર્વક ચકાસવામાં આવી છે.",
    verificationRejected:
      "ડૉક્ટરની ઓળખ ચકાસણી નકારી દેવામાં આવી છે.",
    informationRequested:
      "ડૉક્ટર પાસેથી વધારાની માહિતીની વિનંતી કરવામાં આવી છે.",

    doctorIdentity: "ડૉક્ટરની ઓળખ",
    professionalInformation:
      "વ્યાવસાયિક માહિતી",
    qualification: "લાયકાત",

    doctorName: "ડૉક્ટરનું નામ",
    specialization: "વિશેષતા",
    experience: "અનુભવ",
    clinicHospital: "ક્લિનિક / હોસ્પિટલ",
    medicalCouncil: "મેડિકલ કાઉન્સિલ",
    registrationNumber: "નોંધણી નંબર",
    submitted: "સબમિટ કરેલ",

    submittedDocuments:
      "સબમિટ કરેલા દસ્તાવેજો",
    credentialDocuments:
      "ડૉક્ટરના પ્રમાણપત્ર દસ્તાવેજો",
    credentialDescription:
      "ચકાસણી માટે સબમિટ કરેલા નોંધણી અને લાયકાતના દસ્તાવેજો.",

    complete: "પૂર્ણ",
    additionalDocument:
      "વધારાના દસ્તાવેજની વિનંતી કરવામાં આવી છે",

    identityNoteTitle:
      "ઓળખ ચકાસણી કેસ ચકાસણીથી અલગ છે.",
    identityNote:
      "આ વિનંતીને મંજૂર કરવાથી માત્ર ડૉક્ટરની વ્યાવસાયિક ઓળખ ચકાસાય છે. કોઈપણ દર્દીના કેસની આપમેળે ચકાસણી થતી નથી.",

    verificationDecision:
      "ચકાસણી નિર્ણય",
    decisionDescription:
      "સબમિટ કરેલા પ્રમાણપત્રોના આધારે કાર્યવાહી પસંદ કરો.",

    requestMoreInformation:
      "વધુ માહિતીની વિનંતી કરો",
    reject: "નકારો",
    approve: "મંજૂર કરો",
  },

  kn: {
    doctorNotFound: "ವೈದ್ಯರು ಕಂಡುಬಂದಿಲ್ಲ",
    doctorNotFoundDescription:
      "ವಿನಂತಿಸಿದ ವೈದ್ಯರ ಪರಿಶೀಲನಾ ದಾಖಲೆ ಕಂಡುಬಂದಿಲ್ಲ.",
    backToDashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹಿಂತಿರುಗಿ",
    backToDoctorVerification:
      "ವೈದ್ಯರ ಪರಿಶೀಲನೆಗೆ ಹಿಂತಿರುಗಿ",

    reviewDoctor: "ವೈದ್ಯರ ಪರಿಶೀಲನೆ",
    reviewDescription:
      "ವೈದ್ಯರ ವೃತ್ತಿಪರ ಗುರುತು ಮಾಹಿತಿ ಮತ್ತು ಸಲ್ಲಿಸಿದ ಪ್ರಮಾಣಪತ್ರಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.",

    verified: "ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
    pendingReview: "ಪರಿಶೀಲನೆ ಬಾಕಿಯಿದೆ",
    moreInformation: "ಹೆಚ್ಚಿನ ಮಾಹಿತಿ",
    rejected: "ತಿರಸ್ಕರಿಸಲಾಗಿದೆ",

    verificationSuccess:
      "ವೈದ್ಯರ ಗುರುತನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ.",
    verificationRejected:
      "ವೈದ್ಯರ ಗುರುತು ಪರಿಶೀಲನೆಯನ್ನು ತಿರಸ್ಕರಿಸಲಾಗಿದೆ.",
    informationRequested:
      "ವೈದ್ಯರಿಂದ ಹೆಚ್ಚುವರಿ ಮಾಹಿತಿಯನ್ನು ಕೋರಲಾಗಿದೆ.",

    doctorIdentity: "ವೈದ್ಯರ ಗುರುತು",
    professionalInformation:
      "ವೃತ್ತಿಪರ ಮಾಹಿತಿ",
    qualification: "ಅರ್ಹತೆ",

    doctorName: "ವೈದ್ಯರ ಹೆಸರು",
    specialization: "ವಿಶೇಷತೆ",
    experience: "ಅನುಭವ",
    clinicHospital: "ಕ್ಲಿನಿಕ್ / ಆಸ್ಪತ್ರೆ",
    medicalCouncil: "ವೈದ್ಯಕೀಯ ಮಂಡಳಿ",
    registrationNumber: "ನೋಂದಣಿ ಸಂಖ್ಯೆ",
    submitted: "ಸಲ್ಲಿಸಲಾಗಿದೆ",

    submittedDocuments:
      "ಸಲ್ಲಿಸಿದ ದಾಖಲೆಗಳು",
    credentialDocuments:
      "ವೈದ್ಯರ ಪ್ರಮಾಣಪತ್ರ ದಾಖಲೆಗಳು",
    credentialDescription:
      "ಪರಿಶೀಲನೆಗಾಗಿ ಸಲ್ಲಿಸಲಾದ ನೋಂದಣಿ ಮತ್ತು ಅರ್ಹತಾ ದಾಖಲೆಗಳು.",

    complete: "ಪೂರ್ಣ",
    additionalDocument:
      "ಹೆಚ್ಚುವರಿ ದಾಖಲೆ ವಿನಂತಿಸಲಾಗಿದೆ",

    identityNoteTitle:
      "ಗುರುತು ಪರಿಶೀಲನೆಯು ಪ್ರಕರಣ ಪರಿಶೀಲನೆಯಿಂದ ಪ್ರತ್ಯೇಕವಾಗಿದೆ.",
    identityNote:
      "ಈ ವಿನಂತಿಯನ್ನು ಅನುಮೋದಿಸುವುದರಿಂದ ವೈದ್ಯರ ವೃತ್ತಿಪರ ಗುರುತು ಮಾತ್ರ ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ. ಯಾವುದೇ ರೋಗಿಯ ಪ್ರಕರಣವನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗುವುದಿಲ್ಲ.",

    verificationDecision:
      "ಪರಿಶೀಲನಾ ನಿರ್ಧಾರ",
    decisionDescription:
      "ಸಲ್ಲಿಸಿದ ಪ್ರಮಾಣಪತ್ರಗಳ ಆಧಾರದ ಮೇಲೆ ಕ್ರಮವನ್ನು ಆಯ್ಕೆಮಾಡಿ.",

    requestMoreInformation:
      "ಹೆಚ್ಚಿನ ಮಾಹಿತಿಯನ್ನು ವಿನಂತಿಸಿ",
    reject: "ತಿರಸ್ಕರಿಸಿ",
    approve: "ಅನುಮೋದಿಸಿ",
  },

  ta: {
    doctorNotFound: "மருத்துவர் கிடைக்கவில்லை",
    doctorNotFoundDescription:
      "கோரப்பட்ட மருத்துவர் சரிபார்ப்பு பதிவு கிடைக்கவில்லை.",
    backToDashboard: "டாஷ்போர்டுக்குத் திரும்பு",
    backToDoctorVerification:
      "மருத்துவர் சரிபார்ப்புக்குத் திரும்பு",

    reviewDoctor: "மருத்துவர் மதிப்பாய்வு",
    reviewDescription:
      "மருத்துவரின் தொழில்முறை அடையாளத் தகவல் மற்றும் சமர்ப்பிக்கப்பட்ட சான்றுகளை மதிப்பாய்வு செய்யவும்.",

    verified: "சரிபார்க்கப்பட்டது",
    pendingReview: "மதிப்பாய்வு நிலுவையில்",
    moreInformation: "மேலும் தகவல்",
    rejected: "நிராகரிக்கப்பட்டது",

    verificationSuccess:
      "மருத்துவரின் அடையாளம் வெற்றிகரமாக சரிபார்க்கப்பட்டது.",
    verificationRejected:
      "மருத்துவரின் அடையாள சரிபார்ப்பு நிராகரிக்கப்பட்டது.",
    informationRequested:
      "மருத்துவரிடமிருந்து கூடுதல் தகவல் கோரப்பட்டுள்ளது.",

    doctorIdentity: "மருத்துவர் அடையாளம்",
    professionalInformation:
      "தொழில்முறை தகவல்",
    qualification: "தகுதி",

    doctorName: "மருத்துவர் பெயர்",
    specialization: "சிறப்புப் பிரிவு",
    experience: "அனுபவம்",
    clinicHospital: "கிளினிக் / மருத்துவமனை",
    medicalCouncil: "மருத்துவ கவுன்சில்",
    registrationNumber: "பதிவு எண்",
    submitted: "சமர்ப்பிக்கப்பட்டது",

    submittedDocuments:
      "சமர்ப்பிக்கப்பட்ட ஆவணங்கள்",
    credentialDocuments:
      "மருத்துவர் சான்று ஆவணங்கள்",
    credentialDescription:
      "சரிபார்ப்புக்காக சமர்ப்பிக்கப்பட்ட பதிவு மற்றும் தகுதி ஆவணங்கள்.",

    complete: "முழுமையானது",
    additionalDocument:
      "கூடுதல் ஆவணம் கோரப்பட்டுள்ளது",

    identityNoteTitle:
      "அடையாள சரிபார்ப்பு வழக்கு சரிபார்ப்பிலிருந்து தனித்துவமானது.",
    identityNote:
      "இந்த கோரிக்கையை அங்கீகரிப்பது மருத்துவரின் தொழில்முறை அடையாளத்தை மட்டுமே சரிபார்க்கும். எந்த நோயாளியின் வழக்கும் தானாக சரிபார்க்கப்படாது.",

    verificationDecision:
      "சரிபார்ப்பு முடிவு",
    decisionDescription:
      "சமர்ப்பிக்கப்பட்ட சான்றுகளின் அடிப்படையில் ஒரு நடவடிக்கையைத் தேர்ந்தெடுக்கவும்.",

    requestMoreInformation:
      "மேலும் தகவலைக் கோரவும்",
    reject: "நிராகரிக்கவும்",
    approve: "அங்கீகரிக்கவும்",
  },
};

function loadDoctors() {
  try {
    const stored = localStorage.getItem(
      STORAGE_KEY
    );

    if (stored) {
      const parsed = JSON.parse(stored);

      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
  } catch (error) {
    console.error(
      "Unable to load doctor verification data:",
      error
    );
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(DEFAULT_DOCTORS)
  );

  return DEFAULT_DOCTORS;
}

function getStatusColor(status) {
  if (status === "Verified") {
    return "var(--jc-green)";
  }

  if (status === "Rejected") {
    return "#dc2626";
  }

  return "#d97706";
}

function getStatusBackground(status) {
  if (status === "Verified") {
    return "rgba(34, 197, 94, 0.10)";
  }

  if (status === "Rejected") {
    return "rgba(220, 38, 38, 0.10)";
  }

  return "rgba(217, 119, 6, 0.10)";
}

function translateStatus(status, t) {
  if (status === "Verified") {
    return t.verified;
  }

  if (status === "Pending Review") {
    return t.pendingReview;
  }

  if (status === "More Information") {
    return t.moreInformation;
  }

  if (status === "Rejected") {
    return t.rejected;
  }

  return status;
}

export default function DoctorVerificationReview() {
  const navigate = useNavigate();
  const { doctorId } = useParams();

  const { language } = useLanguage();

  const t =
    adminReviewTranslations[language] ||
    adminReviewTranslations.en;

  const [doctor, setDoctor] = useState(null);
  const [actionMessage, setActionMessage] =
    useState("");

  useEffect(() => {
    const doctors = loadDoctors();

    const selectedDoctor = doctors.find(
      (item) => item.id === doctorId
    );

    if (selectedDoctor) {
      setDoctor(selectedDoctor);
    }
  }, [doctorId]);

  const updateDoctorStatus = (newStatus) => {
    if (!doctor) {
      return;
    }

    const doctors = loadDoctors();

    const updatedDoctors = doctors.map(
      (item) =>
        item.id === doctor.id
          ? {
              ...item,
              status: newStatus,
            }
          : item
    );

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedDoctors)
    );

    setDoctor({
      ...doctor,
      status: newStatus,
    });

    setActionMessage(
      newStatus === "Verified"
        ? t.verificationSuccess
        : newStatus === "Rejected"
        ? t.verificationRejected
        : t.informationRequested
    );
  };

  if (!doctor) {
    return (
      <div
        style={{
          width: "100%",
          padding: "30px 0",
        }}
      >
        <div
          style={{
            background:
              "var(--jc-panel)",
            border:
              "1px solid var(--jc-border)",
            borderRadius: "16px",
            padding: "40px",
            textAlign: "center",
          }}
        >
          <i
            className="bi bi-person-x"
            style={{
              fontSize: "38px",
              color: "var(--jc-muted)",
            }}
          ></i>

          <h2
            style={{
              color: "var(--jc-text)",
              margin: "15px 0 8px",
              fontSize: "20px",
            }}
          >
            {t.doctorNotFound}
          </h2>

          <p
            style={{
              color: "var(--jc-muted)",
              marginBottom: "22px",
              fontSize: "13px",
            }}
          >
            {t.doctorNotFoundDescription}
          </p>

          <button
            type="button"
            onClick={() =>
              navigate("/admin/dashboard")
            }
            style={secondaryButtonStyle}
          >
            <i
              className="bi bi-arrow-left"
              style={{
                marginRight: "7px",
              }}
            ></i>

            {t.backToDashboard}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100%",
      }}
    >
      {/* =========================
          HEADER
      ========================== */}

      <div
        style={{
          marginBottom: "24px",
        }}
      >
        <button
          type="button"
          onClick={() =>
            navigate("/admin/dashboard")
          }
          style={{
            border: "none",
            background: "transparent",
            color: "var(--jc-muted)",
            padding: 0,
            cursor: "pointer",
            fontSize: "13px",
            marginBottom: "15px",
          }}
        >
          <i
            className="bi bi-arrow-left"
            style={{
              marginRight: "7px",
            }}
          ></i>

          {t.backToDoctorVerification}
        </button>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "11px",
                marginBottom: "7px",
              }}
            >
              <h1
                style={{
                  margin: 0,
                  color: "var(--jc-text)",
                  fontSize: "26px",
                  fontWeight: 700,
                }}
              >
                {t.reviewDoctor}
              </h1>

              <span
                style={{
                  padding: "6px 10px",
                  borderRadius: "8px",
                  background:
                    getStatusBackground(
                      doctor.status
                    ),
                  color:
                    getStatusColor(
                      doctor.status
                    ),
                  fontSize: "11px",
                  fontWeight: 650,
                }}
              >
                {translateStatus(
                  doctor.status,
                  t
                )}
              </span>
            </div>

            <p
              style={{
                margin: 0,
                color: "var(--jc-muted)",
                fontSize: "13px",
              }}
            >
              {t.reviewDescription}
            </p>
          </div>

          <div
            style={{
              padding: "8px 12px",
              border:
                "1px solid var(--jc-border)",
              borderRadius: "9px",
              color: "var(--jc-muted)",
              fontSize: "12px",
            }}
          >
            <i
              className="bi bi-hash"
              style={{
                marginRight: "4px",
              }}
            ></i>

            {doctor.id}
          </div>
        </div>
      </div>

      {/* =========================
          SUCCESS / ACTION MESSAGE
      ========================== */}

      {actionMessage && (
        <div
          style={{
            marginBottom: "20px",
            padding: "13px 15px",
            borderRadius: "10px",
            border:
              "1px solid rgba(34, 197, 94, 0.25)",
            background:
              "rgba(34, 197, 94, 0.08)",
            color: "var(--jc-green)",
            fontSize: "13px",
            display: "flex",
            alignItems: "center",
            gap: "9px",
          }}
        >
          <i className="bi bi-check-circle-fill"></i>
          {actionMessage}
        </div>
      )}

      {/* =========================
          DOCTOR IDENTITY
      ========================== */}

      <div
        style={{
          background:
            "var(--jc-panel)",
          border:
            "1px solid var(--jc-border)",
          borderRadius: "16px",
          boxShadow:
            "var(--jc-shadow)",
          padding: "22px",
          marginBottom: "18px",
        }}
      >
        <SectionTitle
          icon="bi-person-badge"
          title={t.doctorIdentity}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <div
            style={{
              width: "58px",
              height: "58px",
              borderRadius: "15px",
              background:
                "rgba(37, 99, 235, 0.10)",
              color: "#2563eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "25px",
              flexShrink: 0,
            }}
          >
            <i className="bi bi-person"></i>
          </div>

          <div>
            <h2
              style={{
                margin: "0 0 5px",
                color: "var(--jc-text)",
                fontSize: "19px",
                fontWeight: 650,
              }}
            >
              {doctor.name}
            </h2>

            <div
              style={{
                color:
                  "var(--jc-text-secondary)",
                fontSize: "13px",
              }}
            >
              {doctor.specialization}
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          PROFESSIONAL INFORMATION
      ========================== */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "18px",
          marginBottom: "18px",
        }}
      >
        <div style={cardStyle}>
          <SectionTitle
            icon="bi-briefcase"
            title={
              t.professionalInformation
            }
          />

          <InfoRow
            label={t.doctorName}
            value={doctor.name}
          />

          <InfoRow
            label={t.specialization}
            value={doctor.specialization}
          />

          <InfoRow
            label={t.experience}
            value={doctor.experience}
          />

          <InfoRow
            label={t.clinicHospital}
            value={doctor.clinic}
          />
        </div>

        <div style={cardStyle}>
          <SectionTitle
            icon="bi-mortarboard"
            title={t.qualification}
          />

          <InfoRow
            label={t.qualification}
            value={doctor.qualification}
          />

          <InfoRow
            label={t.medicalCouncil}
            value={doctor.medicalCouncil}
          />

          <InfoRow
            label={t.registrationNumber}
            value={doctor.registrationNo}
          />

          <InfoRow
            label={t.submitted}
            value={doctor.submittedDate}
          />
        </div>
      </div>

      {/* =========================
          DOCUMENTS
      ========================== */}

      <div
        style={{
          background:
            "var(--jc-panel)",
          border:
            "1px solid var(--jc-border)",
          borderRadius: "16px",
          boxShadow:
            "var(--jc-shadow)",
          padding: "22px",
          marginBottom: "18px",
        }}
      >
        <SectionTitle
          icon="bi-file-earmark-check"
          title={t.submittedDocuments}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "15px",
            padding: "14px",
            borderRadius: "10px",
            background:
              "var(--jc-panel-elevated)",
            border:
              "1px solid var(--jc-border)",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "11px",
            }}
          >
            <i
              className="bi bi-folder2-open"
              style={{
                fontSize: "20px",
                color: "#2563eb",
              }}
            ></i>

            <div>
              <div
                style={{
                  color: "var(--jc-text)",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                {t.credentialDocuments}
              </div>

              <div
                style={{
                  color: "var(--jc-muted)",
                  fontSize: "11px",
                  marginTop: "3px",
                }}
              >
                {t.credentialDescription}
              </div>
            </div>
          </div>

          <span
            style={{
              padding: "6px 10px",
              borderRadius: "7px",
              background:
                doctor.documents ===
                "Complete"
                  ? "rgba(34, 197, 94, 0.10)"
                  : "rgba(217, 119, 6, 0.10)",
              color:
                doctor.documents ===
                "Complete"
                  ? "var(--jc-green)"
                  : "#b45309",
              fontSize: "11px",
              fontWeight: 650,
            }}
          >
            <i
              className={
                doctor.documents ===
                "Complete"
                  ? "bi bi-check-circle"
                  : "bi bi-exclamation-circle"
              }
              style={{
                marginRight: "5px",
              }}
            ></i>

            {doctor.documents ===
            "Complete"
              ? t.complete
              : t.additionalDocument}
          </span>
        </div>
      </div>

      {/* =========================
          SEPARATE VERIFICATION NOTE
      ========================== */}

      <div
        style={{
          padding: "14px 16px",
          borderRadius: "10px",
          background:
            "rgba(37, 99, 235, 0.07)",
          border:
            "1px solid rgba(37, 99, 235, 0.18)",
          color:
            "var(--jc-text-secondary)",
          fontSize: "12px",
          lineHeight: 1.6,
          marginBottom: "22px",
        }}
      >
        <i
          className="bi bi-shield-lock"
          style={{
            color: "#2563eb",
            marginRight: "8px",
          }}
        ></i>

        <strong
          style={{
            color: "var(--jc-text)",
          }}
        >
          {t.identityNoteTitle}
        </strong>{" "}
        {t.identityNote}
      </div>

      {/* =========================
          ACTIONS
      ========================== */}

      <div
        style={{
          background:
            "var(--jc-panel)",
          border:
            "1px solid var(--jc-border)",
          borderRadius: "16px",
          boxShadow:
            "var(--jc-shadow)",
          padding: "20px 22px",
          marginBottom: "25px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                color: "var(--jc-text)",
                fontSize: "14px",
                fontWeight: 650,
              }}
            >
              {t.verificationDecision}
            </div>

            <div
              style={{
                color: "var(--jc-muted)",
                fontSize: "11px",
                marginTop: "4px",
              }}
            >
              {t.decisionDescription}
            </div>
          </div>

          <div
            className="doctor-review-actions"
            style={{
              display: "flex",
              gap: "9px",
              flexWrap: "wrap",
            }}
          >
            {/* Request More Information */}

            <button
              type="button"
              onClick={() =>
                updateDoctorStatus(
                  "More Information"
                )
              }
              style={{
                ...secondaryButtonStyle,
                color: "#b45309",
                borderColor:
                  "rgba(217, 119, 6, 0.35)",
                background:
                  "rgba(217, 119, 6, 0.06)",
              }}
            >
              <i
                className="bi bi-info-circle"
                style={{
                  marginRight: "7px",
                }}
              ></i>

              {t.requestMoreInformation}
            </button>

            {/* Reject */}

            <button
              type="button"
              onClick={() =>
                updateDoctorStatus(
                  "Rejected"
                )
              }
              style={{
                ...secondaryButtonStyle,
                color: "#dc2626",
                borderColor:
                  "rgba(220, 38, 38, 0.30)",
                background:
                  "rgba(220, 38, 38, 0.05)",
              }}
            >
              <i
                className="bi bi-x-circle"
                style={{
                  marginRight: "7px",
                }}
              ></i>

              {t.reject}
            </button>

            {/* Approve */}

            <button
              type="button"
              onClick={() =>
                updateDoctorStatus(
                  "Verified"
                )
              }
              style={{
                border:
                  "1px solid rgba(34, 197, 94, 0.35)",
                background:
                  "rgba(34, 197, 94, 0.10)",
                color:
                  "var(--jc-green)",
                borderRadius: "9px",
                padding: "9px 15px",
                fontSize: "12px",
                fontWeight: 650,
                cursor: "pointer",
              }}
            >
              <i
                className="bi bi-check-circle"
                style={{
                  marginRight: "7px",
                }}
              ></i>

              {t.approve}
            </button>
          </div>
        </div>
      </div>

      {/* =========================
          LOCAL STYLES
      ========================== */}

      <style>{`
        @media (max-width: 700px) {
          .doctor-review-actions {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

/* =========================
   HELPER COMPONENTS
========================== */

function SectionTitle({ icon, title }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "9px",
        marginBottom: "18px",
      }}
    >
      <i
        className={"bi " + icon}
        style={{
          color: "#2563eb",
          fontSize: "17px",
        }}
      ></i>

      <h3
        style={{
          margin: 0,
          color: "var(--jc-text)",
          fontSize: "15px",
          fontWeight: 650,
        }}
      >
        {title}
      </h3>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
        padding: "11px 0",
        borderTop:
          "1px solid var(--jc-border)",
      }}
    >
      <span
        style={{
          color: "var(--jc-muted)",
          fontSize: "12px",
        }}
      >
        {label}
      </span>

      <span
        style={{
          color: "var(--jc-text)",
          fontSize: "12px",
          fontWeight: 550,
          textAlign: "right",
          maxWidth: "60%",
        }}
      >
        {value}
      </span>
    </div>
  );
}

/* =========================
   SHARED STYLES
========================== */

const cardStyle = {
  background: "var(--jc-panel)",
  border: "1px solid var(--jc-border)",
  borderRadius: "16px",
  boxShadow: "var(--jc-shadow)",
  padding: "22px",
};

const secondaryButtonStyle = {
  border: "1px solid var(--jc-border)",
  background: "var(--jc-panel)",
  color: "var(--jc-text-secondary)",
  borderRadius: "9px",
  padding: "9px 14px",
  fontSize: "12px",
  fontWeight: 600,
  cursor: "pointer",
};