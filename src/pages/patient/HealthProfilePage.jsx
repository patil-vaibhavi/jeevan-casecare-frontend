import React, { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

const healthProfileTranslations = {
  en: {
    title: "Health Profile",
    subtitle:
      "Keep your personal and emergency health information up to date.",
    personalInformation: "Personal Information",
    fullName: "Full Name",
    dateOfBirth: "Date of Birth",
    age: "Age",
    gender: "Gender",
    selectGender: "Select gender",
    male: "Male",
    female: "Female",
    other: "Other",
    preferNotToSay: "Prefer not to say",

    healthInformation: "Health Information",
    bloodGroup: "Blood Group",
    selectBloodGroup: "Select blood group",
    allergies: "Allergies",
    allergiesPlaceholder:
      "Enter known allergies, or write None",
    medications: "Current Medications",
    medicationsPlaceholder:
      "Enter current medications, or write None",
    conditions: "Major Medical Conditions",
    conditionsPlaceholder:
      "Enter major medical conditions, or write None",
    surgeries: "Previous Surgeries",
    surgeriesPlaceholder:
      "Enter previous surgeries, or write None",

    emergencyInformation: "Emergency Information",
    emergencyContact: "Emergency Contact",
    emergencyContactName: "Emergency Contact Name",
    emergencyContactPhone: "Emergency Contact Phone",
    emergencyContactRelation: "Relationship",

    healthIdInformation: "Jeevan Health ID",
    healthId: "Health ID",
    healthIdDescription:
      "Your Health ID is used to securely identify your health record.",
    protectedIdentity: "Protected identity",

    saveProfile: "Save Health Profile",
    saving: "Saving...",
    saved: "Health profile saved successfully.",
    requiredName: "Please enter your full name.",
    requiredDob: "Please enter your date of birth.",
    invalidDob: "Please enter a valid date of birth.",
    futureDob: "Date of birth cannot be in the future.",

    notAdded: "Not added",
    years: "years",
    optional: "Optional",

    secureNoticeTitle: "Your information is protected",
    secureNotice:
      "Health profile information is stored locally in this prototype and is used to support consent-based healthcare access and emergency identification.",

    clearProfile: "Clear Form",
  },

  mr: {
    title: "आरोग्य प्रोफाइल",
    subtitle:
      "तुमची वैयक्तिक आणि आपत्कालीन आरोग्य माहिती अद्ययावत ठेवा.",
    personalInformation: "वैयक्तिक माहिती",
    fullName: "पूर्ण नाव",
    dateOfBirth: "जन्मतारीख",
    age: "वय",
    gender: "लिंग",
    selectGender: "लिंग निवडा",
    male: "पुरुष",
    female: "स्त्री",
    other: "इतर",
    preferNotToSay: "सांगणे पसंत नाही",

    healthInformation: "आरोग्य माहिती",
    bloodGroup: "रक्तगट",
    selectBloodGroup: "रक्तगट निवडा",
    allergies: "अॅलर्जी",
    allergiesPlaceholder:
      "माहित असलेल्या अॅलर्जी लिहा किंवा नाही असे लिहा",
    medications: "सध्या सुरू असलेली औषधे",
    medicationsPlaceholder:
      "सध्या सुरू असलेली औषधे लिहा किंवा नाही असे लिहा",
    conditions: "महत्त्वाच्या वैद्यकीय समस्या",
    conditionsPlaceholder:
      "महत्त्वाच्या वैद्यकीय समस्या लिहा किंवा नाही असे लिहा",
    surgeries: "पूर्वीच्या शस्त्रक्रिया",
    surgeriesPlaceholder:
      "पूर्वीच्या शस्त्रक्रिया लिहा किंवा नाही असे लिहा",

    emergencyInformation: "आपत्कालीन माहिती",
    emergencyContact: "आपत्कालीन संपर्क",
    emergencyContactName: "आपत्कालीन संपर्काचे नाव",
    emergencyContactPhone: "आपत्कालीन संपर्काचा फोन",
    emergencyContactRelation: "नाते",

    healthIdInformation: "जीवन हेल्थ आयडी",
    healthId: "हेल्थ आयडी",
    healthIdDescription:
      "तुमच्या आरोग्य नोंदीची सुरक्षित ओळख पटवण्यासाठी हेल्थ आयडी वापरला जातो.",
    protectedIdentity: "सुरक्षित ओळख",

    saveProfile: "आरोग्य प्रोफाइल जतन करा",
    saving: "जतन करत आहे...",
    saved: "आरोग्य प्रोफाइल यशस्वीरित्या जतन झाले.",
    requiredName: "कृपया तुमचे पूर्ण नाव प्रविष्ट करा.",
    requiredDob: "कृपया तुमची जन्मतारीख प्रविष्ट करा.",
    invalidDob: "कृपया वैध जन्मतारीख प्रविष्ट करा.",
    futureDob: "जन्मतारीख भविष्यातील असू शकत नाही.",

    notAdded: "जोडलेले नाही",
    years: "वर्षे",
    optional: "पर्यायी",

    secureNoticeTitle: "तुमची माहिती सुरक्षित आहे",
    secureNotice:
      "या प्रोटोटाइपमध्ये आरोग्य प्रोफाइलची माहिती स्थानिक पातळीवर साठवली जाते आणि संमती-आधारित आरोग्यसेवा प्रवेश व आपत्कालीन ओळखीसाठी वापरली जाते.",

    clearProfile: "फॉर्म साफ करा",
  },

  hi: {
    title: "स्वास्थ्य प्रोफ़ाइल",
    subtitle:
      "अपनी व्यक्तिगत और आपातकालीन स्वास्थ्य जानकारी को अपडेट रखें.",
    personalInformation: "व्यक्तिगत जानकारी",
    fullName: "पूरा नाम",
    dateOfBirth: "जन्म तिथि",
    age: "आयु",
    gender: "लिंग",
    selectGender: "लिंग चुनें",
    male: "पुरुष",
    female: "महिला",
    other: "अन्य",
    preferNotToSay: "बताना पसंद नहीं",

    healthInformation: "स्वास्थ्य जानकारी",
    bloodGroup: "ब्लड ग्रुप",
    selectBloodGroup: "ब्लड ग्रुप चुनें",
    allergies: "एलर्जी",
    allergiesPlaceholder:
      "ज्ञात एलर्जी दर्ज करें या कोई नहीं लिखें",
    medications: "वर्तमान दवाइयाँ",
    medicationsPlaceholder:
      "वर्तमान दवाइयाँ दर्ज करें या कोई नहीं लिखें",
    conditions: "प्रमुख चिकित्सा स्थितियाँ",
    conditionsPlaceholder:
      "प्रमुख चिकित्सा स्थितियाँ दर्ज करें या कोई नहीं लिखें",
    surgeries: "पिछली सर्जरी",
    surgeriesPlaceholder:
      "पिछली सर्जरी दर्ज करें या कोई नहीं लिखें",

    emergencyInformation: "आपातकालीन जानकारी",
    emergencyContact: "आपातकालीन संपर्क",
    emergencyContactName: "आपातकालीन संपर्क का नाम",
    emergencyContactPhone: "आपातकालीन संपर्क का फोन",
    emergencyContactRelation: "संबंध",

    healthIdInformation: "जीवन हेल्थ आईडी",
    healthId: "हेल्थ आईडी",
    healthIdDescription:
      "आपके स्वास्थ्य रिकॉर्ड की सुरक्षित पहचान के लिए हेल्थ आईडी का उपयोग किया जाता है.",
    protectedIdentity: "सुरक्षित पहचान",

    saveProfile: "स्वास्थ्य प्रोफ़ाइल सहेजें",
    saving: "सहेजा जा रहा है...",
    saved: "स्वास्थ्य प्रोफ़ाइल सफलतापूर्वक सहेजी गई.",
    requiredName: "कृपया अपना पूरा नाम दर्ज करें.",
    requiredDob: "कृपया अपनी जन्म तिथि दर्ज करें.",
    invalidDob: "कृपया मान्य जन्म तिथि दर्ज करें.",
    futureDob: "जन्म तिथि भविष्य की नहीं हो सकती.",

    notAdded: "जोड़ा नहीं गया",
    years: "वर्ष",
    optional: "वैकल्पिक",

    secureNoticeTitle: "आपकी जानकारी सुरक्षित है",
    secureNotice:
      "इस प्रोटोटाइप में स्वास्थ्य प्रोफ़ाइल की जानकारी स्थानीय रूप से संग्रहीत की जाती है और सहमति-आधारित स्वास्थ्य सेवा तथा आपातकालीन पहचान के लिए उपयोग की जाती है.",

    clearProfile: "फॉर्म साफ़ करें",
  },

  gu: {
    title: "આરોગ્ય પ્રોફાઇલ",
    subtitle:
      "તમારી વ્યક્તિગત અને કટોકટીની આરોગ્ય માહિતી અપડેટ રાખો.",
    personalInformation: "વ્યક્તિગત માહિતી",
    fullName: "પૂરું નામ",
    dateOfBirth: "જન્મ તારીખ",
    age: "ઉંમર",
    gender: "લિંગ",
    selectGender: "લિંગ પસંદ કરો",
    male: "પુરુષ",
    female: "સ્ત્રી",
    other: "અન્ય",
    preferNotToSay: "કહેવા માંગતા નથી",

    healthInformation: "આરોગ્ય માહિતી",
    bloodGroup: "બ્લડ ગ્રુપ",
    selectBloodGroup: "બ્લડ ગ્રુપ પસંદ કરો",
    allergies: "એલર્જી",
    allergiesPlaceholder:
      "જાણીતી એલર્જી લખો અથવા કંઈ નથી લખો",
    medications: "હાલની દવાઓ",
    medicationsPlaceholder:
      "હાલની દવાઓ લખો અથવા કંઈ નથી લખો",
    conditions: "મુખ્ય તબીબી પરિસ્થિતિઓ",
    conditionsPlaceholder:
      "મુખ્ય તબીબી પરિસ્થિતિઓ લખો અથવા કંઈ નથી લખો",
    surgeries: "અગાઉની સર્જરી",
    surgeriesPlaceholder:
      "અગાઉની સર્જરી લખો અથવા કંઈ નથી લખો",

    emergencyInformation: "કટોકટીની માહિતી",
    emergencyContact: "કટોકટી સંપર્ક",
    emergencyContactName: "કટોકટી સંપર્કનું નામ",
    emergencyContactPhone: "કટોકટી સંપર્કનો ફોન",
    emergencyContactRelation: "સંબંધ",

    healthIdInformation: "જીવન હેલ્થ આઈડી",
    healthId: "હેલ્થ આઈડી",
    healthIdDescription:
      "તમારા આરોગ્ય રેકોર્ડને સુરક્ષિત રીતે ઓળખવા માટે હેલ્થ આઈડીનો ઉપયોગ થાય છે.",
    protectedIdentity: "સુરક્ષિત ઓળખ",

    saveProfile: "આરોગ્ય પ્રોફાઇલ સાચવો",
    saving: "સાચવી રહ્યું છે...",
    saved: "આરોગ્ય પ્રોફાઇલ સફળતાપૂર્વક સાચવાઈ.",
    requiredName: "કૃપા કરીને તમારું પૂરું નામ દાખલ કરો.",
    requiredDob: "કૃપા કરીને તમારી જન્મ તારીખ દાખલ કરો.",
    invalidDob: "કૃપા કરીને માન્ય જન્મ તારીખ દાખલ કરો.",
    futureDob: "જન્મ તારીખ ભવિષ્યની હોઈ શકતી નથી.",

    notAdded: "ઉમેર્યું નથી",
    years: "વર્ષ",
    optional: "વૈકલ્પિક",

    secureNoticeTitle: "તમારી માહિતી સુરક્ષિત છે",
    secureNotice:
      "આ પ્રોટોટાઇપમાં આરોગ્ય પ્રોફાઇલની માહિતી સ્થાનિક રીતે સંગ્રહિત થાય છે અને સંમતિ આધારિત આરોગ્ય સેવા તથા કટોકટીની ઓળખ માટે ઉપયોગમાં લેવાય છે.",

    clearProfile: "ફોર્મ સાફ કરો",
  },

  kn: {
    title: "ಆರೋಗ್ಯ ಪ್ರೊಫೈಲ್",
    subtitle:
      "ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಮತ್ತು ತುರ್ತು ಆರೋಗ್ಯ ಮಾಹಿತಿಯನ್ನು ನವೀಕೃತವಾಗಿರಿಸಿ.",
    personalInformation: "ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ",
    fullName: "ಪೂರ್ಣ ಹೆಸರು",
    dateOfBirth: "ಜನ್ಮ ದಿನಾಂಕ",
    age: "ವಯಸ್ಸು",
    gender: "ಲಿಂಗ",
    selectGender: "ಲಿಂಗ ಆಯ್ಕೆಮಾಡಿ",
    male: "ಪುರುಷ",
    female: "ಮಹಿಳೆ",
    other: "ಇತರೆ",
    preferNotToSay: "ಹೇಳಲು ಇಷ್ಟವಿಲ್ಲ",

    healthInformation: "ಆರೋಗ್ಯ ಮಾಹಿತಿ",
    bloodGroup: "ರಕ್ತದ ಗುಂಪು",
    selectBloodGroup: "ರಕ್ತದ ಗುಂಪನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    allergies: "ಅಲರ್ಜಿ",
    allergiesPlaceholder:
      "ತಿಳಿದಿರುವ ಅಲರ್ಜಿಗಳನ್ನು ನಮೂದಿಸಿ ಅಥವಾ ಯಾವುದೂ ಇಲ್ಲ ಎಂದು ಬರೆಯಿರಿ",
    medications: "ಪ್ರಸ್ತುತ ಔಷಧಿಗಳು",
    medicationsPlaceholder:
      "ಪ್ರಸ್ತುತ ಔಷಧಿಗಳನ್ನು ನಮೂದಿಸಿ ಅಥವಾ ಯಾವುದೂ ಇಲ್ಲ ಎಂದು ಬರೆಯಿರಿ",
    conditions: "ಪ್ರಮುಖ ವೈದ್ಯಕೀಯ ಪರಿಸ್ಥಿತಿಗಳು",
    conditionsPlaceholder:
      "ಪ್ರಮುಖ ವೈದ್ಯಕೀಯ ಪರಿಸ್ಥಿತಿಗಳನ್ನು ನಮೂದಿಸಿ ಅಥವಾ ಯಾವುದೂ ಇಲ್ಲ ಎಂದು ಬರೆಯಿರಿ",
    surgeries: "ಹಿಂದಿನ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗಳು",
    surgeriesPlaceholder:
      "ಹಿಂದಿನ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗಳನ್ನು ನಮೂದಿಸಿ ಅಥವಾ ಯಾವುದೂ ಇಲ್ಲ ಎಂದು ಬರೆಯಿರಿ",

    emergencyInformation: "ತುರ್ತು ಮಾಹಿತಿ",
    emergencyContact: "ತುರ್ತು ಸಂಪರ್ಕ",
    emergencyContactName: "ತುರ್ತು ಸಂಪರ್ಕದ ಹೆಸರು",
    emergencyContactPhone: "ತುರ್ತು ಸಂಪರ್ಕದ ಫೋನ್",
    emergencyContactRelation: "ಸಂಬಂಧ",

    healthIdInformation: "ಜೀವನ್ ಹೆಲ್ತ್ ಐಡಿ",
    healthId: "ಹೆಲ್ತ್ ಐಡಿ",
    healthIdDescription:
      "ನಿಮ್ಮ ಆರೋಗ್ಯ ದಾಖಲೆಯನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಗುರುತಿಸಲು ಹೆಲ್ತ್ ಐಡಿಯನ್ನು ಬಳಸಲಾಗುತ್ತದೆ.",
    protectedIdentity: "ಸುರಕ್ಷಿತ ಗುರುತು",

    saveProfile: "ಆರೋಗ್ಯ ಪ್ರೊಫೈಲ್ ಉಳಿಸಿ",
    saving: "ಉಳಿಸಲಾಗುತ್ತಿದೆ...",
    saved: "ಆರೋಗ್ಯ ಪ್ರೊಫೈಲ್ ಯಶಸ್ವಿಯಾಗಿ ಉಳಿಸಲಾಗಿದೆ.",
    requiredName: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ.",
    requiredDob: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಜನ್ಮ ದಿನಾಂಕವನ್ನು ನಮೂದಿಸಿ.",
    invalidDob: "ದಯವಿಟ್ಟು ಮಾನ್ಯವಾದ ಜನ್ಮ ದಿನಾಂಕವನ್ನು ನಮೂದಿಸಿ.",
    futureDob: "ಜನ್ಮ ದಿನಾಂಕವು ಭವಿಷ್ಯದದ್ದಾಗಿರಬಾರದು.",

    notAdded: "ಸೇರಿಸಲಾಗಿಲ್ಲ",
    years: "ವರ್ಷಗಳು",
    optional: "ಐಚ್ಛಿಕ",

    secureNoticeTitle: "ನಿಮ್ಮ ಮಾಹಿತಿ ಸುರಕ್ಷಿತವಾಗಿದೆ",
    secureNotice:
      "ಈ ಪ್ರೋಟೋಟೈಪ್‌ನಲ್ಲಿ ಆರೋಗ್ಯ ಪ್ರೊಫೈಲ್ ಮಾಹಿತಿಯನ್ನು ಸ್ಥಳೀಯವಾಗಿ ಸಂಗ್ರಹಿಸಲಾಗುತ್ತದೆ ಮತ್ತು ಒಪ್ಪಿಗೆ ಆಧಾರಿತ ಆರೋಗ್ಯ ಸೇವೆ ಹಾಗೂ ತುರ್ತು ಗುರುತಿಗಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ.",

    clearProfile: "ಫಾರ್ಮ್ ತೆರವುಗೊಳಿಸಿ",
  },

  ta: {
    title: "சுகாதார சுயவிவரம்",
    subtitle:
      "உங்கள் தனிப்பட்ட மற்றும் அவசரநிலை சுகாதார தகவல்களை புதுப்பித்த நிலையில் வைத்திருக்கவும்.",
    personalInformation: "தனிப்பட்ட தகவல்",
    fullName: "முழு பெயர்",
    dateOfBirth: "பிறந்த தேதி",
    age: "வயது",
    gender: "பாலினம்",
    selectGender: "பாலினத்தைத் தேர்ந்தெடுக்கவும்",
    male: "ஆண்",
    female: "பெண்",
    other: "மற்றவை",
    preferNotToSay: "தெரிவிக்க விரும்பவில்லை",

    healthInformation: "சுகாதார தகவல்",
    bloodGroup: "இரத்த வகை",
    selectBloodGroup: "இரத்த வகையைத் தேர்ந்தெடுக்கவும்",
    allergies: "ஒவ்வாமைகள்",
    allergiesPlaceholder:
      "தெரிந்த ஒவ்வாமைகளை உள்ளிடவும் அல்லது எதுவும் இல்லை என்று எழுதவும்",
    medications: "தற்போதைய மருந்துகள்",
    medicationsPlaceholder:
      "தற்போதைய மருந்துகளை உள்ளிடவும் அல்லது எதுவும் இல்லை என்று எழுதவும்",
    conditions: "முக்கிய மருத்துவ நிலைகள்",
    conditionsPlaceholder:
      "முக்கிய மருத்துவ நிலைகளை உள்ளிடவும் அல்லது எதுவும் இல்லை என்று எழுதவும்",
    surgeries: "முந்தைய அறுவை சிகிச்சைகள்",
    surgeriesPlaceholder:
      "முந்தைய அறுவை சிகிச்சைகளை உள்ளிடவும் அல்லது எதுவும் இல்லை என்று எழுதவும்",

    emergencyInformation: "அவசரநிலை தகவல்",
    emergencyContact: "அவசரநிலை தொடர்பு",
    emergencyContactName: "அவசரநிலை தொடர்பு பெயர்",
    emergencyContactPhone: "அவசரநிலை தொடர்பு தொலைபேசி",
    emergencyContactRelation: "உறவு",

    healthIdInformation: "ஜீவன் ஹெல்த் ஐடி",
    healthId: "ஹெல்த் ஐடி",
    healthIdDescription:
      "உங்கள் சுகாதார பதிவை பாதுகாப்பாக அடையாளம் காண ஹெல்த் ஐடி பயன்படுத்தப்படுகிறது.",
    protectedIdentity: "பாதுகாக்கப்பட்ட அடையாளம்",

    saveProfile: "சுகாதார சுயவிவரத்தை சேமிக்கவும்",
    saving: "சேமிக்கப்படுகிறது...",
    saved: "சுகாதார சுயவிவரம் வெற்றிகரமாக சேமிக்கப்பட்டது.",
    requiredName: "உங்கள் முழு பெயரை உள்ளிடவும்.",
    requiredDob: "உங்கள் பிறந்த தேதியை உள்ளிடவும்.",
    invalidDob: "சரியான பிறந்த தேதியை உள்ளிடவும்.",
    futureDob: "பிறந்த தேதி எதிர்காலத்தில் இருக்க முடியாது.",

    notAdded: "சேர்க்கப்படவில்லை",
    years: "ஆண்டுகள்",
    optional: "விருப்பத்தேர்வு",

    secureNoticeTitle: "உங்கள் தகவல் பாதுகாக்கப்படுகிறது",
    secureNotice:
      "இந்த முன்மாதிரியில் சுகாதார சுயவிவரத் தகவல் உள்ளூரில் சேமிக்கப்படுகிறது மற்றும் ஒப்புதல் அடிப்படையிலான சுகாதார அணுகல் மற்றும் அவசரநிலை அடையாளத்திற்காக பயன்படுத்தப்படுகிறது.",

    clearProfile: "படிவத்தை அழிக்கவும்",
  },
};

function calculateAge(dateOfBirth) {
  if (!dateOfBirth) {
    return "";
  }

  const birthDate = new Date(dateOfBirth);

  if (Number.isNaN(birthDate.getTime())) {
    return "";
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
    age = age - 1;
  }

  if (age < 0) {
    return "";
  }

  return age;
}

export default function HealthProfilePage() {
  const { language } = useLanguage();

  const t =
    healthProfileTranslations[language] ||
    healthProfileTranslations.en;

  const [user, setUser] = useState(null);

  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");

  const [allergies, setAllergies] = useState("");
  const [medications, setMedications] = useState("");
  const [majorConditions, setMajorConditions] =
    useState("");
  const [surgeries, setSurgeries] = useState("");

  const [emergencyContactName, setEmergencyContactName] =
    useState("");
  const [emergencyContactPhone, setEmergencyContactPhone] =
    useState("");
  const [emergencyContactRelation, setEmergencyContactRelation] =
    useState("");

  const [savedMessage, setSavedMessage] =
    useState("");
  const [errorMessage, setErrorMessage] =
    useState("");
  const [isSaving, setIsSaving] =
    useState(false);

  useEffect(() => {
    const storedUser =
      localStorage.getItem("jeevanUser");

    if (!storedUser) {
      return;
    }

    try {
      const parsedUser =
        JSON.parse(storedUser);

      setUser(parsedUser);

      setFullName(
        parsedUser.fullName ||
        parsedUser.name ||
        ""
      );

      setDateOfBirth(
        parsedUser.dateOfBirth || ""
      );

      setGender(
        parsedUser.gender || ""
      );

      setBloodGroup(
        parsedUser.bloodGroup || ""
      );

      setAllergies(
        parsedUser.allergies || ""
      );

      setMedications(
        parsedUser.medications || ""
      );

      setMajorConditions(
        parsedUser.majorConditions || ""
      );

      setSurgeries(
        parsedUser.surgeries || ""
      );

      setEmergencyContactName(
        parsedUser.emergencyContactName ||
        ""
      );

      setEmergencyContactPhone(
        parsedUser.emergencyContactPhone ||
        ""
      );

      setEmergencyContactRelation(
        parsedUser.emergencyContactRelation ||
        ""
      );
    } catch (error) {
      console.error(
        "Unable to load Jeevan user:",
        error
      );
    }
  }, []);

  const age = calculateAge(dateOfBirth);

  const handleDateOfBirthChange = (event) => {
    const value = event.target.value;

    setDateOfBirth(value);
    setErrorMessage("");
    setSavedMessage("");
  };

  const handleSave = () => {
    setErrorMessage("");
    setSavedMessage("");

    if (!fullName.trim()) {
      setErrorMessage(t.requiredName);
      return;
    }

    if (!dateOfBirth) {
      setErrorMessage(t.requiredDob);
      return;
    }

    const birthDate =
      new Date(dateOfBirth);

    if (
      Number.isNaN(
        birthDate.getTime()
      )
    ) {
      setErrorMessage(t.invalidDob);
      return;
    }

    const today = new Date();

    if (birthDate > today) {
      setErrorMessage(t.futureDob);
      return;
    }

    setIsSaving(true);

    const updatedUser = {
      ...(user || {}),
      name: fullName.trim(),
      fullName: fullName.trim(),
      dateOfBirth: dateOfBirth,
      gender: gender,
      bloodGroup: bloodGroup,
      allergies: allergies.trim(),
      medications: medications.trim(),
      majorConditions:
        majorConditions.trim(),
      surgeries: surgeries.trim(),
      emergencyContactName:
        emergencyContactName.trim(),
      emergencyContactPhone:
        emergencyContactPhone.trim(),
      emergencyContactRelation:
        emergencyContactRelation.trim(),
    };

    localStorage.setItem(
      "jeevanUser",
      JSON.stringify(updatedUser)
    );

    setUser(updatedUser);

    window.dispatchEvent(
      new Event("jeevanUserUpdated")
    );

    setTimeout(() => {
      setIsSaving(false);
      setSavedMessage(t.saved);
    }, 300);
  };

  const handleClear = () => {
    setDateOfBirth("");
    setGender("");
    setBloodGroup("");
    setAllergies("");
    setMedications("");
    setMajorConditions("");
    setSurgeries("");
    setEmergencyContactName("");
    setEmergencyContactPhone("");
    setEmergencyContactRelation("");

    setErrorMessage("");
    setSavedMessage("");
  };

  const healthId =
    user?.healthId ||
    "JVC-000123";

  return (
    <div className="jc-page">
      {/* HEADER */}
      <div
        className="d-flex justify-content-between align-items-start flex-wrap"
        style={{
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        <div>
          <div
            style={{
              color: "var(--jc-cyan)",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            {t.healthIdInformation}
          </div>

          <h1
            style={{
              margin: 0,
              color: "var(--jc-text)",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            {t.title}
          </h1>

          <p
            style={{
              marginTop: "8px",
              marginBottom: 0,
              color: "var(--jc-text-secondary)",
              fontSize: "14px",
            }}
          >
            {t.subtitle}
          </p>
        </div>

        <div
          style={{
            padding: "12px 16px",
            border: "1px solid var(--jc-border)",
            borderRadius: "12px",
            background:
              "var(--jc-panel-elevated)",
            minWidth: "180px",
          }}
        >
          <div
            style={{
              color: "var(--jc-muted)",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginBottom: "5px",
            }}
          >
            {t.healthId}
          </div>

          <div
            style={{
              color: "var(--jc-cyan)",
              fontSize: "17px",
              fontWeight: 700,
            }}
          >
            {healthId}
          </div>
        </div>
      </div>

      {/* SUCCESS MESSAGE */}
      {savedMessage && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "13px 16px",
            marginBottom: "18px",
            borderRadius: "10px",
            border:
              "1px solid rgba(34, 197, 94, 0.35)",
            background:
              "rgba(34, 197, 94, 0.08)",
            color: "var(--jc-green)",
            fontSize: "14px",
          }}
        >
          <i className="bi bi-check-circle-fill" />
          <span>{savedMessage}</span>
        </div>
      )}

      {/* ERROR MESSAGE */}
      {errorMessage && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "13px 16px",
            marginBottom: "18px",
            borderRadius: "10px",
            border:
              "1px solid rgba(239, 68, 68, 0.35)",
            background:
              "rgba(239, 68, 68, 0.08)",
            color: "#f87171",
            fontSize: "14px",
          }}
        >
          <i className="bi bi-exclamation-circle-fill" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* PERSONAL INFORMATION */}
      <section
        className="jc-card"
        style={{
          marginBottom: "20px",
          padding: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "rgba(34, 211, 238, 0.10)",
              color: "var(--jc-cyan)",
              fontSize: "18px",
            }}
          >
            <i className="bi bi-person-vcard" />
          </div>

          <div>
            <h2
              style={{
                margin: 0,
                color: "var(--jc-text)",
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              {t.personalInformation}
            </h2>
          </div>
        </div>

        <div className="row g-3">
          {/* FULL NAME */}
          <div className="col-12 col-md-6">
            <label
              className="form-label"
              style={{
                color: "var(--jc-text-secondary)",
                fontSize: "13px",
                fontWeight: 600,
              }}
            >
              {t.fullName}
            </label>

            <input
              type="text"
              value={fullName}
              onChange={(event) =>
                setFullName(event.target.value)
              }
              className="form-control"
              placeholder={t.fullName}
              style={{
                background:
                  "var(--jc-input-bg)",
                border:
                  "1px solid var(--jc-border)",
                color: "var(--jc-text)",
              }}
            />
          </div>

          {/* DOB */}
          <div className="col-12 col-md-6">
            <label
              className="form-label"
              style={{
                color: "var(--jc-text-secondary)",
                fontSize: "13px",
                fontWeight: 600,
              }}
            >
              {t.dateOfBirth}
            </label>

            <input
              type="date"
              value={dateOfBirth}
              onChange={
                handleDateOfBirthChange
              }
              className="form-control"
              style={{
                background:
                  "var(--jc-input-bg)",
                border:
                  "1px solid var(--jc-border)",
                color: "var(--jc-text)",
              }}
            />
          </div>

          {/* AGE */}
          <div className="col-12 col-md-6">
            <label
              className="form-label"
              style={{
                color: "var(--jc-text-secondary)",
                fontSize: "13px",
                fontWeight: 600,
              }}
            >
              {t.age}
            </label>

            <div
              style={{
                minHeight: "38px",
                padding: "8px 12px",
                borderRadius: "6px",
                border:
                  "1px solid var(--jc-border)",
                background:
                  "var(--jc-input-bg)",
                color: age
                  ? "var(--jc-text)"
                  : "var(--jc-muted)",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {age !== ""
                ? age + " " + t.years
                : t.notAdded}
            </div>
          </div>

          {/* GENDER */}
          <div className="col-12 col-md-6">
            <label
              className="form-label"
              style={{
                color: "var(--jc-text-secondary)",
                fontSize: "13px",
                fontWeight: 600,
              }}
            >
              {t.gender}
            </label>

            <select
              value={gender}
              onChange={(event) =>
                setGender(event.target.value)
              }
              className="form-select"
              style={{
                background:
                  "var(--jc-input-bg)",
                border:
                  "1px solid var(--jc-border)",
                color: "var(--jc-text)",
              }}
            >
              <option value="">
                {t.selectGender}
              </option>

              <option value="Male">
                {t.male}
              </option>

              <option value="Female">
                {t.female}
              </option>

              <option value="Other">
                {t.other}
              </option>

              <option value="Prefer not to say">
                {t.preferNotToSay}
              </option>
            </select>
          </div>
        </div>
      </section>

      {/* HEALTH INFORMATION */}
      <section
        className="jc-card"
        style={{
          marginBottom: "20px",
          padding: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "rgba(34, 211, 238, 0.10)",
              color: "var(--jc-cyan)",
              fontSize: "18px",
            }}
          >
            <i className="bi bi-heart-pulse" />
          </div>

          <div>
            <h2
              style={{
                margin: 0,
                color: "var(--jc-text)",
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              {t.healthInformation}
            </h2>
          </div>
        </div>

        <div className="row g-3">
          {/* BLOOD GROUP */}
          <div className="col-12 col-md-6">
            <label
              className="form-label"
              style={{
                color: "var(--jc-text-secondary)",
                fontSize: "13px",
                fontWeight: 600,
              }}
            >
              {t.bloodGroup}
            </label>

            <select
              value={bloodGroup}
              onChange={(event) =>
                setBloodGroup(event.target.value)
              }
              className="form-select"
              style={{
                background:
                  "var(--jc-input-bg)",
                border:
                  "1px solid var(--jc-border)",
                color: "var(--jc-text)",
              }}
            >
              <option value="">
                {t.selectBloodGroup}
              </option>

              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          {/* ALLERGIES */}
          <div className="col-12">
            <label
              className="form-label"
              style={{
                color: "var(--jc-text-secondary)",
                fontSize: "13px",
                fontWeight: 600,
              }}
            >
              {t.allergies}
            </label>

            <textarea
              value={allergies}
              onChange={(event) =>
                setAllergies(event.target.value)
              }
              className="form-control"
              rows="3"
              placeholder={
                t.allergiesPlaceholder
              }
              style={{
                background:
                  "var(--jc-input-bg)",
                border:
                  "1px solid var(--jc-border)",
                color: "var(--jc-text)",
                resize: "vertical",
              }}
            />
          </div>

          {/* MEDICATIONS */}
          <div className="col-12">
            <label
              className="form-label"
              style={{
                color: "var(--jc-text-secondary)",
                fontSize: "13px",
                fontWeight: 600,
              }}
            >
              {t.medications}
            </label>

            <textarea
              value={medications}
              onChange={(event) =>
                setMedications(event.target.value)
              }
              className="form-control"
              rows="3"
              placeholder={
                t.medicationsPlaceholder
              }
              style={{
                background:
                  "var(--jc-input-bg)",
                border:
                  "1px solid var(--jc-border)",
                color: "var(--jc-text)",
                resize: "vertical",
              }}
            />
          </div>

          {/* CONDITIONS */}
          <div className="col-12">
            <label
              className="form-label"
              style={{
                color: "var(--jc-text-secondary)",
                fontSize: "13px",
                fontWeight: 600,
              }}
            >
              {t.conditions}
            </label>

            <textarea
              value={majorConditions}
              onChange={(event) =>
                setMajorConditions(
                  event.target.value
                )
              }
              className="form-control"
              rows="3"
              placeholder={
                t.conditionsPlaceholder
              }
              style={{
                background:
                  "var(--jc-input-bg)",
                border:
                  "1px solid var(--jc-border)",
                color: "var(--jc-text)",
                resize: "vertical",
              }}
            />
          </div>

          {/* SURGERIES */}
          <div className="col-12">
            <label
              className="form-label"
              style={{
                color: "var(--jc-text-secondary)",
                fontSize: "13px",
                fontWeight: 600,
              }}
            >
              {t.surgeries}
            </label>

            <textarea
              value={surgeries}
              onChange={(event) =>
                setSurgeries(
                  event.target.value
                )
              }
              className="form-control"
              rows="3"
              placeholder={
                t.surgeriesPlaceholder
              }
              style={{
                background:
                  "var(--jc-input-bg)",
                border:
                  "1px solid var(--jc-border)",
                color: "var(--jc-text)",
                resize: "vertical",
              }}
            />
          </div>
        </div>
      </section>

      {/* EMERGENCY INFORMATION */}
      <section
        className="jc-card"
        style={{
          marginBottom: "20px",
          padding: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "rgba(34, 211, 238, 0.10)",
              color: "var(--jc-cyan)",
              fontSize: "18px",
            }}
          >
            <i className="bi bi-telephone" />
          </div>

          <div>
            <h2
              style={{
                margin: 0,
                color: "var(--jc-text)",
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              {t.emergencyInformation}
            </h2>
          </div>
        </div>

        <div className="row g-3">
          {/* CONTACT NAME */}
          <div className="col-12 col-md-4">
            <label
              className="form-label"
              style={{
                color: "var(--jc-text-secondary)",
                fontSize: "13px",
                fontWeight: 600,
              }}
            >
              {t.emergencyContactName}
            </label>

            <input
              type="text"
              value={emergencyContactName}
              onChange={(event) =>
                setEmergencyContactName(
                  event.target.value
                )
              }
              className="form-control"
              placeholder={t.optional}
              style={{
                background:
                  "var(--jc-input-bg)",
                border:
                  "1px solid var(--jc-border)",
                color: "var(--jc-text)",
              }}
            />
          </div>

          {/* CONTACT PHONE */}
          <div className="col-12 col-md-4">
            <label
              className="form-label"
              style={{
                color: "var(--jc-text-secondary)",
                fontSize: "13px",
                fontWeight: 600,
              }}
            >
              {t.emergencyContactPhone}
            </label>

            <input
              type="tel"
              value={emergencyContactPhone}
              onChange={(event) =>
                setEmergencyContactPhone(
                  event.target.value
                )
              }
              className="form-control"
              placeholder={t.optional}
              style={{
                background:
                  "var(--jc-input-bg)",
                border:
                  "1px solid var(--jc-border)",
                color: "var(--jc-text)",
              }}
            />
          </div>

          {/* RELATION */}
          <div className="col-12 col-md-4">
            <label
              className="form-label"
              style={{
                color: "var(--jc-text-secondary)",
                fontSize: "13px",
                fontWeight: 600,
              }}
            >
              {t.emergencyContactRelation}
            </label>

            <input
              type="text"
              value={emergencyContactRelation}
              onChange={(event) =>
                setEmergencyContactRelation(
                  event.target.value
                )
              }
              className="form-control"
              placeholder={t.optional}
              style={{
                background:
                  "var(--jc-input-bg)",
                border:
                  "1px solid var(--jc-border)",
                color: "var(--jc-text)",
              }}
            />
          </div>
        </div>
      </section>

      {/* HEALTH ID / SECURITY */}
      <section
        className="jc-card"
        style={{
          marginBottom: "20px",
          padding: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "rgba(34, 211, 238, 0.10)",
              color: "var(--jc-cyan)",
              fontSize: "18px",
            }}
          >
            <i className="bi bi-shield-lock-fill" />
          </div>

          <div>
            <h2
              style={{
                margin: 0,
                color: "var(--jc-text)",
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              {t.healthIdInformation}
            </h2>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            flexWrap: "wrap",
            padding: "16px",
            borderRadius: "12px",
            border:
              "1px solid var(--jc-border)",
            background:
              "var(--jc-panel-elevated)",
          }}
        >
          <div>
            <div
              style={{
                color: "var(--jc-muted)",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
                marginBottom: "6px",
              }}
            >
              {t.healthId}
            </div>

            <div
              style={{
                color: "var(--jc-cyan)",
                fontSize: "20px",
                fontWeight: 700,
                marginBottom: "6px",
              }}
            >
              {healthId}
            </div>

            <div
              style={{
                color: "var(--jc-text-secondary)",
                fontSize: "13px",
                maxWidth: "650px",
              }}
            >
              {t.healthIdDescription}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "9px 12px",
              borderRadius: "8px",
              background:
                "rgba(34, 197, 94, 0.08)",
              border:
                "1px solid rgba(34, 197, 94, 0.25)",
              color: "var(--jc-green)",
              fontSize: "12px",
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            <i className="bi bi-shield-check" />
            {t.protectedIdentity}
          </div>
        </div>
      </section>

      {/* SECURITY NOTICE */}
      <div
        style={{
          display: "flex",
          gap: "14px",
          padding: "16px",
          marginBottom: "24px",
          borderRadius: "12px",
          border:
            "1px solid var(--jc-border)",
          background:
            "var(--jc-panel-elevated)",
        }}
      >
        <div
          style={{
            color: "var(--jc-cyan)",
            fontSize: "20px",
            paddingTop: "1px",
          }}
        >
          <i className="bi bi-info-circle-fill" />
        </div>

        <div>
          <div
            style={{
              color: "var(--jc-text)",
              fontSize: "14px",
              fontWeight: 700,
              marginBottom: "5px",
            }}
          >
            {t.secureNoticeTitle}
          </div>

          <div
            style={{
              color: "var(--jc-text-secondary)",
              fontSize: "13px",
              lineHeight: 1.6,
            }}
          >
            {t.secureNotice}
          </div>
        </div>
      </div>

      {/* ACTIONS */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "12px",
          flexWrap: "wrap",
          paddingBottom: "20px",
        }}
      >
        <button
          type="button"
          onClick={handleClear}
          className="btn"
          style={{
            minWidth: "130px",
            border:
              "1px solid var(--jc-border)",
            background:
              "var(--jc-panel-elevated)",
            color: "var(--jc-text-secondary)",
          }}
        >
          {t.clearProfile}
        </button>

        <button
          type="button"
          onClick={handleSave}
          disabled={isSaving}
          className="btn"
          style={{
            minWidth: "190px",
            border:
              "1px solid var(--jc-cyan)",
            background:
              "var(--jc-cyan)",
            color: "#06141a",
            fontWeight: 700,
            opacity: isSaving ? 0.7 : 1,
          }}
        >
          <i
            className={
              isSaving
                ? "bi bi-arrow-repeat me-2"
                : "bi bi-check2-circle me-2"
            }
          />
          {isSaving
            ? t.saving
            : t.saveProfile}
        </button>
      </div>
    </div>
  );
}