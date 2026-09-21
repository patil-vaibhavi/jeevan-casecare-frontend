import React, { useEffect, useRef, useState } from "react";
import QrScanner from "qr-scanner";
import { useLanguage } from "../../context/LanguageContext";

const emergencyTranslations = {
  en: {
    emergencyAccess: "EMERGENCY ACCESS",
    dashboardTitle: "Emergency Provider Dashboard",
    dashboardSubtitle:
      "Controlled emergency access to critical patient information.",
    emergencyProvider: "Emergency Provider",

    controlledAccess: "Controlled Emergency Access",
    controlledAccessText:
      "Emergency access is a controlled exception. Patient consent is not required during a genuine emergency, but the provider must identify the patient, provide a reason, confirm Break-Glass access, and accept mandatory audit logging.",

    identifyPatient: "Identify Patient",
    identifyPatientText:
      "Enter the patient's Health ID or scan their Health ID QR code to begin controlled emergency access.",
    patientHealthId: "Patient Health ID",
    healthIdPlaceholder: "e.g. JVC-000123",
    identifyPatientButton: "Identify Patient",
    healthId: "Health ID",

    scanQr: "Scan QR",
    stopScanner: "Stop Scanner",
    scannerTitle: "Scan Patient Health ID QR",
    scannerText:
      "Point the camera at the patient's Jeevan Health ID QR code.",
    cameraPermission:
      "Camera permission is required to scan the QR code.",
    qrInvalid:
      "Invalid QR code. Please scan a valid Jeevan Health ID QR code.",
    qrDetected:
      "QR code detected. Patient Health ID has been entered.",
    cameraError:
      "Unable to start the camera. Please check camera permission or use manual Health ID entry.",

    pleaseEnterHealthId: "Please enter a Health ID.",
    patientIdentified:
      "Patient identified successfully. Complete face verification before emergency access.",
    faceVerification: "Face Verification",
    faceVerificationText: "Confirm the identified patient before continuing to emergency access.",
    startFaceVerification: "Start Face Verification",
    verifyFace: "Verify Face",
    faceCameraText: "Position the patient's face inside the camera frame.",
    faceVerificationComplete: "Face verification completed for this demo.",
    faceVerificationRequired: "Complete face verification before emergency access.",
    faceCameraError: "Unable to access the camera for face verification. Please check camera permission.",
    faceVerificationDemo: "Demo verification: this step confirms the workflow but does not perform biometric face matching.",
    biometricVerification: "Biometric Identity Verification",
    biometricVerificationText: "Use fingerprint, face verification, or emergency fallback to verify the patient identity.",
    fingerprintVerification: "Fingerprint Verification",
    startFingerprint: "Start Fingerprint Scan",
    fingerprintScanning: "Scanning fingerprint...",
    fingerprintDemo: "Demo scanner: no physical fingerprint hardware is connected. This simulates the verification workflow.",
    fingerprintComplete: "Fingerprint verification completed for this demo.",
    fingerprintRequired: "Complete fingerprint, face, or emergency fallback verification before emergency access.",
    fingerprintUnavailable: "Fingerprint verification unavailable because no physical scanner is connected.",
    emergencyFallback: "Emergency Identity Fallback",
    emergencyFallbackText: "If the patient's face and fingers are damaged or cannot be scanned, use documented emergency identity fallback.",
    fallbackReason: "Why is biometric verification unavailable?",
    fallbackReasonPlaceholder: "e.g. Face and fingers are injured or unavailable",
    fallbackContact: "Emergency contact confirmation",
    fallbackContactPlaceholder: "e.g. Family member / caregiver confirmed identity",
    confirmFallback: "Confirm Emergency Fallback",
    fallbackComplete: "Emergency identity fallback confirmed. Biometric verification was unavailable.",
    fallbackRequired: "Provide a fallback reason and confirm the emergency identity fallback.",
    identityMethod: "Identity verification method",
    fingerprintMethod: "Fingerprint",
    faceMethod: "Face",
    fallbackMethod: "Emergency Fallback",
    identityVerificationRequired: "Complete one identity verification method before emergency access.",
    patientNotFound:
      "Patient not found. Please verify the Health ID.",
    demoPatient: "Demo Patient",

    emergencyAuthorization: "Emergency Access Authorization",
    emergencyAuthorizationText:
      "Complete the required emergency authorization before accessing the patient's critical information.",
    emergencyReason: "Emergency Reason",
    selectEmergencyReason: "Select emergency reason",

    unconsciousPatient: "Unconscious or incapacitated patient",
    lifeThreatening: "Life-threatening emergency",
    unableConsent: "Patient unable to provide consent",
    criticalInformation:
      "Critical information required immediately",
    otherEmergency: "Other emergency",

    confirmBreakGlass:
      "Confirm Break-Glass Emergency Access",
    breakGlassText:
      "I confirm that emergency circumstances require immediate access to this patient's critical medical information. I understand that this access will be restricted and permanently recorded in the audit log.",
    grantEmergencyAccess: "Grant Emergency Access",

    identifyFirst: "Please identify the patient first.",
    selectReason: "Please select an emergency reason.",
    confirmBreakGlassError:
      "Please confirm Break-Glass emergency access.",

    accessGranted: "Emergency Access Granted",
    accessGrantedAt: "Access granted at",
    limitedAccess: "LIMITED ACCESS",
    emergencySnapshot: "Emergency Snapshot",
    emergencySnapshotText:
      "Only critical information necessary for emergency care is displayed.",

    bloodGroup: "Blood Group",
    allergies: "Allergies",
    criticalMedications: "Critical Medications",
    majorConditions: "Major Conditions",
    majorSurgeries: "Major Surgeries",
    emergencyContact: "Emergency Contact",

    security: "SECURITY",
    auditLogTitle: "Emergency Access Audit Log",
    auditLogText:
      "Every emergency access event is recorded for accountability.",
    noAuditEvents:
      "No emergency access events recorded yet.",

    action: "Action",
    patient: "Patient",
    reason: "Reason",
    scope: "Scope",
    time: "Time",

    emergencyBreakGlassAccess:
      "Emergency Break-Glass Access",
    emergencySnapshotScope: "Emergency Snapshot",

    emergencyAccessGranted:
      "Emergency access granted. Only critical emergency information is available.",

    notRecorded: "Not recorded",

    identitySeparate:
      "Emergency access is a controlled exception."
  },

  mr: {
    emergencyAccess: "आपत्कालीन प्रवेश",
    dashboardTitle: "आपत्कालीन प्रदाता डॅशबोर्ड",
    dashboardSubtitle:
      "महत्त्वाच्या रुग्णांच्या माहितीसाठी नियंत्रित आपत्कालीन प्रवेश.",
    emergencyProvider: "आपत्कालीन प्रदाता",

    controlledAccess: "नियंत्रित आपत्कालीन प्रवेश",
    controlledAccessText:
      "आपत्कालीन प्रवेश हा नियंत्रित अपवाद आहे. वास्तविक आपत्कालीन परिस्थितीत रुग्णाची संमती आवश्यक नसते; मात्र प्रदात्याने रुग्णाची ओळख निश्चित करणे, कारण देणे, Break-Glass प्रवेशाची पुष्टी करणे आणि अनिवार्य ऑडिट नोंद स्वीकारणे आवश्यक आहे.",

    identifyPatient: "रुग्णाची ओळख निश्चित करा",
    identifyPatientText:
      "नियंत्रित आपत्कालीन प्रवेश सुरू करण्यासाठी रुग्णाचा Health ID प्रविष्ट करा किंवा QR कोड स्कॅन करा.",
    patientHealthId: "रुग्णाचा Health ID",
    healthIdPlaceholder: "उदा. JVC-000123",
    identifyPatientButton: "रुग्णाची ओळख निश्चित करा",
    healthId: "Health ID",

    scanQr: "QR स्कॅन करा",
    stopScanner: "स्कॅनर थांबवा",
    scannerTitle: "रुग्णाचा Health ID QR स्कॅन करा",
    scannerText:
      "रुग्णाच्या Jeevan Health ID QR कोडकडे कॅमेरा निर्देशित करा.",
    cameraPermission:
      "QR कोड स्कॅन करण्यासाठी कॅमेरा परवानगी आवश्यक आहे.",
    qrInvalid:
      "अवैध QR कोड. कृपया वैध Jeevan Health ID QR कोड स्कॅन करा.",
    qrDetected:
      "QR कोड सापडला. रुग्णाचा Health ID प्रविष्ट केला आहे.",
    cameraError:
      "कॅमेरा सुरू करता आला नाही. कृपया कॅमेरा परवानगी तपासा किंवा Health ID स्वतः प्रविष्ट करा.",

    pleaseEnterHealthId: "कृपया Health ID प्रविष्ट करा.",
    patientIdentified:
      "रुग्णाची ओळख यशस्वीरित्या निश्चित झाली. आपत्कालीन प्रवेशापूर्वी चेहरा पडताळणी पूर्ण करा.",
    faceVerification: "चेहरा पडताळणी",
    faceVerificationText: "आपत्कालीन प्रवेश सुरू करण्यापूर्वी ओळखलेल्या रुग्णाची पडताळणी करा.",
    startFaceVerification: "चेहरा पडताळणी सुरू करा",
    verifyFace: "चेहरा पडताळा",
    faceCameraText: "रुग्णाचा चेहरा कॅमेऱ्याच्या चौकटीत ठेवा.",
    faceVerificationComplete: "या डेमोसाठी चेहरा पडताळणी पूर्ण झाली.",
    faceVerificationRequired: "आपत्कालीन प्रवेशापूर्वी चेहरा पडताळणी पूर्ण करा.",
    faceCameraError: "चेहरा पडताळणीसाठी कॅमेरा वापरता आला नाही. कॅमेरा परवानगी तपासा.",
    faceVerificationDemo: "डेमो पडताळणी: ही पायरी कार्यप्रवाह दाखवते; प्रत्यक्ष बायोमेट्रिक चेहरा जुळवणी केली जात नाही.",
    biometricVerification: "बायोमेट्रिक ओळख पडताळणी",
    biometricVerificationText: "रुग्णाची ओळख पडताळण्यासाठी फिंगरप्रिंट, चेहरा पडताळणी किंवा आपत्कालीन पर्याय वापरा.",
    fingerprintVerification: "फिंगरप्रिंट पडताळणी",
    startFingerprint: "फिंगरप्रिंट स्कॅन सुरू करा",
    fingerprintScanning: "फिंगरप्रिंट स्कॅन होत आहे...",
    fingerprintDemo: "डेमो स्कॅनर: कोणतेही प्रत्यक्ष फिंगरप्रिंट हार्डवेअर जोडलेले नाही. ही पडताळणी प्रक्रिया सिम्युलेट केली जाते.",
    fingerprintComplete: "या डेमोसाठी फिंगरप्रिंट पडताळणी पूर्ण झाली.",
    fingerprintRequired: "आपत्कालीन प्रवेशापूर्वी फिंगरप्रिंट, चेहरा किंवा आपत्कालीन पर्यायाची पडताळणी पूर्ण करा.",
    fingerprintUnavailable: "प्रत्यक्ष स्कॅनर जोडलेला नसल्यामुळे फिंगरप्रिंट पडताळणी उपलब्ध नाही.",
    emergencyFallback: "आपत्कालीन ओळख पर्याय",
    emergencyFallbackText: "रुग्णाचा चेहरा आणि बोटे जखमी असतील किंवा स्कॅन करता येत नसतील तर नोंद केलेला आपत्कालीन ओळख पर्याय वापरा.",
    fallbackReason: "बायोमेट्रिक पडताळणी का उपलब्ध नाही?",
    fallbackReasonPlaceholder: "उदा. चेहरा आणि बोटांना दुखापत झाली आहे",
    fallbackContact: "आपत्कालीन संपर्काची पुष्टी",
    fallbackContactPlaceholder: "उदा. कुटुंबातील सदस्य / काळजीवाहूने ओळख निश्चित केली",
    confirmFallback: "आपत्कालीन पर्यायाची पुष्टी करा",
    fallbackComplete: "आपत्कालीन ओळख पर्यायाची पुष्टी झाली. बायोमेट्रिक पडताळणी उपलब्ध नव्हती.",
    fallbackRequired: "आपत्कालीन पर्यायाचे कारण द्या आणि त्याची पुष्टी करा.",
    identityMethod: "ओळख पडताळणी पद्धत",
    fingerprintMethod: "फिंगरप्रिंट",
    faceMethod: "चेहरा",
    fallbackMethod: "आपत्कालीन पर्याय",
    identityVerificationRequired: "आपत्कालीन प्रवेशापूर्वी एक ओळख पडताळणी पद्धत पूर्ण करा.",
    patientNotFound:
      "रुग्ण सापडला नाही. कृपया Health ID तपासा.",
    demoPatient: "डेमो रुग्ण",

    emergencyAuthorization: "आपत्कालीन प्रवेश अधिकृतता",
    emergencyAuthorizationText:
      "रुग्णाची महत्त्वाची माहिती पाहण्यापूर्वी आवश्यक आपत्कालीन अधिकृतता पूर्ण करा.",
    emergencyReason: "आपत्कालीन कारण",
    selectEmergencyReason: "आपत्कालीन कारण निवडा",

    unconsciousPatient: "बेशुद्ध किंवा अक्षम रुग्ण",
    lifeThreatening: "जीवघेणी आपत्कालीन परिस्थिती",
    unableConsent: "रुग्ण संमती देण्यास असमर्थ",
    criticalInformation:
      "तात्काळ महत्त्वाची माहिती आवश्यक",
    otherEmergency: "इतर आपत्कालीन परिस्थिती",

    confirmBreakGlass:
      "Break-Glass आपत्कालीन प्रवेशाची पुष्टी करा",
    breakGlassText:
      "मी पुष्टी करतो/करते की आपत्कालीन परिस्थितीमुळे या रुग्णाच्या महत्त्वाच्या वैद्यकीय माहितीस तात्काळ प्रवेश आवश्यक आहे. हा प्रवेश मर्यादित असेल आणि ऑडिट लॉगमध्ये कायमस्वरूपी नोंदवला जाईल याची मला जाणीव आहे.",
    grantEmergencyAccess: "आपत्कालीन प्रवेश द्या",

    identifyFirst: "कृपया प्रथम रुग्णाची ओळख निश्चित करा.",
    selectReason: "कृपया आपत्कालीन कारण निवडा.",
    confirmBreakGlassError:
      "कृपया Break-Glass आपत्कालीन प्रवेशाची पुष्टी करा.",

    accessGranted: "आपत्कालीन प्रवेश मंजूर",
    accessGrantedAt: "प्रवेश मंजूर वेळ",
    limitedAccess: "मर्यादित प्रवेश",
    emergencySnapshot: "आपत्कालीन माहिती",
    emergencySnapshotText:
      "आपत्कालीन उपचारासाठी आवश्यक असलेली केवळ महत्त्वाची माहिती प्रदर्शित केली जाते.",

    bloodGroup: "रक्तगट",
    allergies: "अॅलर्जी",
    criticalMedications: "महत्त्वाची औषधे",
    majorConditions: "प्रमुख आजार",
    majorSurgeries: "प्रमुख शस्त्रक्रिया",
    emergencyContact: "आपत्कालीन संपर्क",

    security: "सुरक्षा",
    auditLogTitle: "आपत्कालीन प्रवेश ऑडिट लॉग",
    auditLogText:
      "जबाबदारीसाठी प्रत्येक आपत्कालीन प्रवेशाची नोंद केली जाते.",
    noAuditEvents:
      "अद्याप कोणत्याही आपत्कालीन प्रवेशाची नोंद नाही.",

    action: "कृती",
    patient: "रुग्ण",
    reason: "कारण",
    scope: "प्रवेश क्षेत्र",
    time: "वेळ",

    emergencyBreakGlassAccess:
      "आपत्कालीन Break-Glass प्रवेश",
    emergencySnapshotScope: "आपत्कालीन माहिती",

    emergencyAccessGranted:
      "आपत्कालीन प्रवेश मंजूर झाला आहे. केवळ महत्त्वाची आपत्कालीन माहिती उपलब्ध आहे.",

    notRecorded: "नोंद उपलब्ध नाही",

    identitySeparate:
      "आपत्कालीन प्रवेश हा नियंत्रित अपवाद आहे."
  },

  hi: {
    emergencyAccess: "आपातकालीन एक्सेस",
    dashboardTitle: "आपातकालीन प्रदाता डैशबोर्ड",
    dashboardSubtitle:
      "महत्वपूर्ण रोगी जानकारी तक नियंत्रित आपातकालीन एक्सेस।",
    emergencyProvider: "आपातकालीन प्रदाता",

    controlledAccess: "नियंत्रित आपातकालीन एक्सेस",
    controlledAccessText:
      "आपातकालीन एक्सेस एक नियंत्रित अपवाद है। वास्तविक आपातकाल में रोगी की सहमति आवश्यक नहीं है, लेकिन प्रदाता को रोगी की पहचान करनी होगी, कारण देना होगा, Break-Glass एक्सेस की पुष्टि करनी होगी और अनिवार्य ऑडिट लॉगिंग स्वीकार करनी होगी।",

    identifyPatient: "रोगी की पहचान करें",
    identifyPatientText:
      "नियंत्रित आपातकालीन एक्सेस शुरू करने के लिए रोगी का Health ID दर्ज करें या QR कोड स्कैन करें।",
    patientHealthId: "रोगी का Health ID",
    healthIdPlaceholder: "उदा. JVC-000123",
    identifyPatientButton: "रोगी की पहचान करें",
    healthId: "Health ID",

    scanQr: "QR स्कैन करें",
    stopScanner: "स्कैनर रोकें",
    scannerTitle: "रोगी का Health ID QR स्कैन करें",
    scannerText:
      "रोगी के Jeevan Health ID QR कोड की ओर कैमरा रखें।",
    cameraPermission:
      "QR कोड स्कैन करने के लिए कैमरा अनुमति आवश्यक है।",
    qrInvalid:
      "अमान्य QR कोड। कृपया वैध Jeevan Health ID QR कोड स्कैन करें।",
    qrDetected:
      "QR कोड मिल गया। रोगी का Health ID दर्ज कर दिया गया है।",
    cameraError:
      "कैमरा शुरू नहीं हो सका। कृपया कैमरा अनुमति जांचें या Health ID मैन्युअली दर्ज करें।",

    pleaseEnterHealthId: "कृपया Health ID दर्ज करें।",
    patientIdentified:
      "रोगी की पहचान सफलतापूर्वक हो गई है। आपातकालीन एक्सेस से पहले फेस वेरिफिकेशन पूरा करें।",
    faceVerification: "फेस वेरिफिकेशन",
    faceVerificationText: "आपातकालीन एक्सेस जारी रखने से पहले पहचाने गए रोगी की पुष्टि करें।",
    startFaceVerification: "फेस वेरिफिकेशन शुरू करें",
    verifyFace: "फेस वेरिफाई करें",
    faceCameraText: "रोगी का चेहरा कैमरा फ्रेम के अंदर रखें।",
    faceVerificationComplete: "इस डेमो के लिए फेस वेरिफिकेशन पूरा हुआ।",
    faceVerificationRequired: "आपातकालीन एक्सेस से पहले फेस वेरिफिकेशन पूरा करें।",
    faceCameraError: "फेस वेरिफिकेशन के लिए कैमरा नहीं खुल सका। कैमरा अनुमति जांचें।",
    faceVerificationDemo: "डेमो वेरिफिकेशन: यह चरण वर्कफ़्लो दिखाता है; वास्तविक बायोमेट्रिक फेस मैचिंग नहीं की जाती है।",
    biometricVerification: "बायोमेट्रिक पहचान सत्यापन",
    biometricVerificationText: "रोगी की पहचान सत्यापित करने के लिए फिंगरप्रिंट, फेस वेरिफिकेशन या आपातकालीन विकल्प का उपयोग करें।",
    fingerprintVerification: "फिंगरप्रिंट सत्यापन",
    startFingerprint: "फिंगरप्रिंट स्कैन शुरू करें",
    fingerprintScanning: "फिंगरप्रिंट स्कैन हो रहा है...",
    fingerprintDemo: "डेमो स्कैनर: कोई वास्तविक फिंगरप्रिंट हार्डवेयर जुड़ा नहीं है। यह सत्यापन प्रक्रिया का सिमुलेशन है।",
    fingerprintComplete: "इस डेमो के लिए फिंगरप्रिंट सत्यापन पूरा हुआ।",
    fingerprintRequired: "आपातकालीन एक्सेस से पहले फिंगरप्रिंट, फेस या आपातकालीन विकल्प सत्यापन पूरा करें।",
    fingerprintUnavailable: "कोई वास्तविक स्कैनर जुड़ा नहीं होने के कारण फिंगरप्रिंट सत्यापन उपलब्ध नहीं है।",
    emergencyFallback: "आपातकालीन पहचान विकल्प",
    emergencyFallbackText: "यदि रोगी का चेहरा और उंगलियां घायल हैं या स्कैन नहीं हो सकतीं, तो दस्तावेज़ित आपातकालीन पहचान विकल्प का उपयोग करें।",
    fallbackReason: "बायोमेट्रिक सत्यापन उपलब्ध क्यों नहीं है?",
    fallbackReasonPlaceholder: "उदा. चेहरा और उंगलियां घायल या अनुपलब्ध हैं",
    fallbackContact: "आपातकालीन संपर्क की पुष्टि",
    fallbackContactPlaceholder: "उदा. परिवार के सदस्य / देखभालकर्ता ने पहचान की पुष्टि की",
    confirmFallback: "आपातकालीन विकल्प की पुष्टि करें",
    fallbackComplete: "आपातकालीन पहचान विकल्प की पुष्टि हुई। बायोमेट्रिक सत्यापन उपलब्ध नहीं था।",
    fallbackRequired: "आपातकालीन विकल्प का कारण दें और उसकी पुष्टि करें।",
    identityMethod: "पहचान सत्यापन विधि",
    fingerprintMethod: "फिंगरप्रिंट",
    faceMethod: "फेस",
    fallbackMethod: "आपातकालीन विकल्प",
    identityVerificationRequired: "आपातकालीन एक्सेस से पहले एक पहचान सत्यापन विधि पूरी करें।",
    patientNotFound:
      "रोगी नहीं मिला। कृपया Health ID सत्यापित करें।",
    demoPatient: "डेमो रोगी",

    emergencyAuthorization: "आपातकालीन एक्सेस प्राधिकरण",
    emergencyAuthorizationText:
      "रोगी की महत्वपूर्ण जानकारी तक पहुंचने से पहले आवश्यक आपातकालीन प्राधिकरण पूरा करें।",
    emergencyReason: "आपातकालीन कारण",
    selectEmergencyReason: "आपातकालीन कारण चुनें",

    unconsciousPatient: "बेहोश या अक्षम रोगी",
    lifeThreatening: "जीवन के लिए खतरा उत्पन्न करने वाली आपातकालीन स्थिति",
    unableConsent: "रोगी सहमति देने में असमर्थ है",
    criticalInformation:
      "तुरंत महत्वपूर्ण जानकारी आवश्यक है",
    otherEmergency: "अन्य आपातकालीन स्थिति",

    confirmBreakGlass:
      "Break-Glass आपातकालीन एक्सेस की पुष्टि करें",
    breakGlassText:
      "मैं पुष्टि करता/करती हूँ कि आपातकालीन परिस्थितियों में इस रोगी की महत्वपूर्ण चिकित्सा जानकारी तक तत्काल पहुंच आवश्यक है। मैं समझता/समझती हूँ कि यह एक्सेस सीमित होगा और ऑडिट लॉग में स्थायी रूप से दर्ज किया जाएगा।",
    grantEmergencyAccess: "आपातकालीन एक्सेस दें",

    identifyFirst: "कृपया पहले रोगी की पहचान करें।",
    selectReason: "कृपया आपातकालीन कारण चुनें।",
    confirmBreakGlassError:
      "कृपया Break-Glass आपातकालीन एक्सेस की पुष्टि करें।",

    accessGranted: "आपातकालीन एक्सेस प्रदान किया गया",
    accessGrantedAt: "एक्सेस प्रदान किया गया",
    limitedAccess: "सीमित एक्सेस",
    emergencySnapshot: "आपातकालीन सारांश",
    emergencySnapshotText:
      "आपातकालीन उपचार के लिए आवश्यक केवल महत्वपूर्ण जानकारी प्रदर्शित की जाती है।",

    bloodGroup: "रक्त समूह",
    allergies: "एलर्जी",
    criticalMedications: "महत्वपूर्ण दवाएं",
    majorConditions: "प्रमुख रोग",
    majorSurgeries: "प्रमुख सर्जरी",
    emergencyContact: "आपातकालीन संपर्क",

    security: "सुरक्षा",
    auditLogTitle: "आपातकालीन एक्सेस ऑडिट लॉग",
    auditLogText:
      "जवाबदेही के लिए प्रत्येक आपातकालीन एक्सेस घटना दर्ज की जाती है।",
    noAuditEvents:
      "अभी तक कोई आपातकालीन एक्सेस घटना दर्ज नहीं हुई है।",

    action: "कार्रवाई",
    patient: "रोगी",
    reason: "कारण",
    scope: "क्षेत्र",
    time: "समय",

    emergencyBreakGlassAccess:
      "आपातकालीन Break-Glass एक्सेस",
    emergencySnapshotScope: "आपातकालीन सारांश",

    emergencyAccessGranted:
      "आपातकालीन एक्सेस प्रदान किया गया है। केवल महत्वपूर्ण आपातकालीन जानकारी उपलब्ध है।",

    notRecorded: "दर्ज नहीं है",

    identitySeparate:
      "आपातकालीन एक्सेस एक नियंत्रित अपवाद है।"
  },

  gu: {
    emergencyAccess: "કટોકટી પ્રવેશ",
    dashboardTitle: "કટોકટી પ્રોવાઇડર ડેશબોર્ડ",
    dashboardSubtitle:
      "મહત્વપૂર્ણ દર્દીની માહિતી માટે નિયંત્રિત કટોકટી પ્રવેશ.",
    emergencyProvider: "કટોકટી પ્રોવાઇડર",

    controlledAccess: "નિયંત્રિત કટોકટી પ્રવેશ",
    controlledAccessText:
      "કટોકટી પ્રવેશ એક નિયંત્રિત અપવાદ છે. વાસ્તવિક કટોકટી દરમિયાન દર્દીની સંમતિ જરૂરી નથી, પરંતુ પ્રોવાઇડરે દર્દીની ઓળખ કરવી, કારણ આપવું, Break-Glass પ્રવેશની પુષ્ટિ કરવી અને ફરજિયાત ઓડિટ લોગિંગ સ્વીકારવું જરૂરી છે.",

    identifyPatient: "દર્દીની ઓળખ કરો",
    identifyPatientText:
      "નિયંત્રિત કટોકટી પ્રવેશ શરૂ કરવા માટે દર્દીનો Health ID દાખલ કરો અથવા QR કોડ સ્કેન કરો.",
    patientHealthId: "દર્દીનો Health ID",
    healthIdPlaceholder: "દા.ત. JVC-000123",
    identifyPatientButton: "દર્દીની ઓળખ કરો",
    healthId: "Health ID",

    scanQr: "QR સ્કેન કરો",
    stopScanner: "સ્કેનર બંધ કરો",
    scannerTitle: "દર્દીનો Health ID QR સ્કેન કરો",
    scannerText:
      "દર્દીના Jeevan Health ID QR કોડ તરફ કેમેરા રાખો.",
    cameraPermission:
      "QR કોડ સ્કેન કરવા માટે કેમેરાની પરવાનગી જરૂરી છે.",
    qrInvalid:
      "અમાન્ય QR કોડ. કૃપા કરીને માન્ય Jeevan Health ID QR કોડ સ્કેન કરો.",
    qrDetected:
      "QR કોડ મળ્યો. દર્દીનો Health ID દાખલ કરવામાં આવ્યો છે.",
    cameraError:
      "કેમેરા શરૂ કરી શકાયો નથી. કૃપા કરીને કેમેરાની પરવાનગી તપાસો અથવા Health ID મેન્યુઅલી દાખલ કરો.",

    pleaseEnterHealthId: "કૃપા કરીને Health ID દાખલ કરો.",
    patientIdentified:
      "દર્દીની ઓળખ સફળતાપૂર્વક થઈ છે. કટોકટી પ્રવેશ પહેલાં ચહેરા ચકાસણી પૂર્ણ કરો.",
    faceVerification: "ચહેરા ચકાસણી",
    faceVerificationText: "કટોકટી પ્રવેશ ચાલુ રાખતા પહેલાં ઓળખાયેલા દર્દીની પુષ્ટિ કરો.",
    startFaceVerification: "ચહેરા ચકાસણી શરૂ કરો",
    verifyFace: "ચહેરો ચકાસો",
    faceCameraText: "દર્દીનો ચહેરો કેમેરા ફ્રેમની અંદર રાખો.",
    faceVerificationComplete: "આ ડેમો માટે ચહેરાની ચકાસણી પૂર્ણ થઈ.",
    faceVerificationRequired: "કટોકટી પ્રવેશ પહેલાં ચહેરાની ચકાસણી પૂર્ણ કરો.",
    faceCameraError: "ચહેરાની ચકાસણી માટે કેમેરા ઍક્સેસ થઈ શક્યો નથી. કેમેરાની પરવાનગી તપાસો.",
    faceVerificationDemo: "ડેમો ચકાસણી: આ પગલું વર્કફ્લો દર્શાવે છે; વાસ્તવિક બાયોમેટ્રિક ચહેરા મેચિંગ થતું નથી.",
    biometricVerification: "બાયોમેટ્રિક ઓળખ ચકાસણી",
    biometricVerificationText: "દર્દીની ઓળખ ચકાસવા માટે ફિંગરપ્રિન્ટ, ચહેરો અથવા કટોકટી વિકલ્પનો ઉપયોગ કરો.",
    fingerprintVerification: "ફિંગરપ્રિન્ટ ચકાસણી",
    startFingerprint: "ફિંગરપ્રિન્ટ સ્કેન શરૂ કરો",
    fingerprintScanning: "ફિંગરપ્રિન્ટ સ્કેન થઈ રહ્યું છે...",
    fingerprintDemo: "ડેમો સ્કેનર: કોઈ વાસ્તવિક ફિંગરપ્રિન્ટ હાર્ડવેર જોડાયેલ નથી. આ ચકાસણી પ્રક્રિયાનું સિમ્યુલેશન છે.",
    fingerprintComplete: "આ ડેમો માટે ફિંગરપ્રિન્ટ ચકાસણી પૂર્ણ થઈ.",
    fingerprintRequired: "કટોકટી પ્રવેશ પહેલાં ફિંગરપ્રિન્ટ, ચહેરો અથવા કટોકટી વિકલ્પ ચકાસણી પૂર્ણ કરો.",
    fingerprintUnavailable: "કોઈ વાસ્તવિક સ્કેનર જોડાયેલ ન હોવાથી ફિંગરપ્રિન્ટ ચકાસણી ઉપલબ્ધ નથી.",
    emergencyFallback: "કટોકટી ઓળખ વિકલ્પ",
    emergencyFallbackText: "જો દર્દીનો ચહેરો અને આંગળીઓ ઇજાગ્રસ્ત હોય અથવા સ્કેન ન થઈ શકે, તો દસ્તાવેજિત કટોકટી ઓળખ વિકલ્પનો ઉપયોગ કરો.",
    fallbackReason: "બાયોમેટ્રિક ચકાસણી ઉપલબ્ધ કેમ નથી?",
    fallbackReasonPlaceholder: "દા.ત. ચહેરો અને આંગળીઓ ઇજાગ્રસ્ત અથવા ઉપલબ્ધ નથી",
    fallbackContact: "કટોકટી સંપર્કની પુષ્ટિ",
    fallbackContactPlaceholder: "દા.ત. પરિવારના સભ્ય / સંભાળ રાખનારએ ઓળખની પુષ્ટિ કરી",
    confirmFallback: "કટોકટી વિકલ્પની પુષ્ટિ કરો",
    fallbackComplete: "કટોકટી ઓળખ વિકલ્પની પુષ્ટિ થઈ. બાયોમેટ્રિક ચકાસણી ઉપલબ્ધ ન હતી.",
    fallbackRequired: "કટોકટી વિકલ્પનું કારણ આપો અને તેની પુષ્ટિ કરો.",
    identityMethod: "ઓળખ ચકાસણી પદ્ધતિ",
    fingerprintMethod: "ફિંગરપ્રિન્ટ",
    faceMethod: "ચહેરો",
    fallbackMethod: "કટોકટી વિકલ્પ",
    identityVerificationRequired: "કટોકટી પ્રવેશ પહેલાં એક ઓળખ ચકાસણી પદ્ધતિ પૂર્ણ કરો.",
    patientNotFound:
      "દર્દી મળ્યો નથી. કૃપા કરીને Health ID ચકાસો.",
    demoPatient: "ડેમો દર્દી",

    emergencyAuthorization: "કટોકટી પ્રવેશ અધિકૃતતા",
    emergencyAuthorizationText:
      "દર્દીની મહત્વપૂર્ણ માહિતી મેળવતા પહેલાં જરૂરી કટોકટી અધિકૃતતા પૂર્ણ કરો.",
    emergencyReason: "કટોકટીનું કારણ",
    selectEmergencyReason: "કટોકટીનું કારણ પસંદ કરો",

    unconsciousPatient: "બેભાન અથવા અક્ષમ દર્દી",
    lifeThreatening: "જીવન માટે જોખમી કટોકટી",
    unableConsent: "દર્દી સંમતિ આપવા અસમર્થ છે",
    criticalInformation:
      "તાત્કાલિક મહત્વપૂર્ણ માહિતી જરૂરી છે",
    otherEmergency: "અન્ય કટોકટી",

    confirmBreakGlass:
      "Break-Glass કટોકટી પ્રવેશની પુષ્ટિ કરો",
    breakGlassText:
      "હું પુષ્ટિ કરું છું કે કટોકટીની પરિસ્થિતિમાં આ દર્દીની મહત્વપૂર્ણ તબીબી માહિતીની તાત્કાલિક જરૂર છે. હું સમજું છું કે આ પ્રવેશ મર્યાદિત રહેશે અને ઓડિટ લોગમાં કાયમી રીતે નોંધવામાં આવશે.",
    grantEmergencyAccess: "કટોકટી પ્રવેશ આપો",

    identifyFirst: "કૃપા કરીને પહેલા દર્દીની ઓળખ કરો.",
    selectReason: "કૃપા કરીને કટોકટીનું કારણ પસંદ કરો.",
    confirmBreakGlassError:
      "કૃપા કરીને Break-Glass કટોકટી પ્રવેશની પુષ્ટિ કરો.",

    accessGranted: "કટોકટી પ્રવેશ મંજૂર",
    accessGrantedAt: "પ્રવેશ મંજૂર થયો",
    limitedAccess: "મર્યાદિત પ્રવેશ",
    emergencySnapshot: "કટોકટી સારાંશ",
    emergencySnapshotText:
      "કટોકટી સારવાર માટે જરૂરી માત્ર મહત્વપૂર્ણ માહિતી દર્શાવવામાં આવે છે.",

    bloodGroup: "બ્લડ ગ્રુપ",
    allergies: "એલર્જી",
    criticalMedications: "મહત્વપૂર્ણ દવાઓ",
    majorConditions: "મુખ્ય રોગો",
    majorSurgeries: "મુખ્ય સર્જરી",
    emergencyContact: "કટોકટી સંપર્ક",

    security: "સુરક્ષા",
    auditLogTitle: "કટોકટી પ્રવેશ ઓડિટ લોગ",
    auditLogText:
      "જવાબદારી માટે દરેક કટોકટી પ્રવેશ ઘટના નોંધવામાં આવે છે.",
    noAuditEvents:
      "હજુ સુધી કોઈ કટોકટી પ્રવેશ ઘટના નોંધાઈ નથી.",

    action: "ક્રિયા",
    patient: "દર્દી",
    reason: "કારણ",
    scope: "ક્ષેત્ર",
    time: "સમય",

    emergencyBreakGlassAccess:
      "કટોકટી Break-Glass પ્રવેશ",
    emergencySnapshotScope: "કટોકટી સારાંશ",

    emergencyAccessGranted:
      "કટોકટી પ્રવેશ મંજૂર કરવામાં આવ્યો છે. માત્ર મહત્વપૂર્ણ કટોકટી માહિતી ઉપલબ્ધ છે.",

    notRecorded: "નોંધાયેલ નથી",

    identitySeparate:
      "કટોકટી પ્રવેશ એક નિયંત્રિત અપવાદ છે."
  },

  kn: {
    emergencyAccess: "ತುರ್ತು ಪ್ರವೇಶ",
    dashboardTitle: "ತುರ್ತು ಪೂರೈಕೆದಾರ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    dashboardSubtitle:
      "ಮುಖ್ಯ ರೋಗಿಯ ಮಾಹಿತಿಗೆ ನಿಯಂತ್ರಿತ ತುರ್ತು ಪ್ರವೇಶ.",
    emergencyProvider: "ತುರ್ತು ಪೂರೈಕೆದಾರ",

    controlledAccess: "ನಿಯಂತ್ರಿತ ತುರ್ತು ಪ್ರವೇಶ",
    controlledAccessText:
      "ತುರ್ತು ಪ್ರವೇಶವು ನಿಯಂತ್ರಿತ ವಿನಾಯಿತಿಯಾಗಿದೆ. ನಿಜವಾದ ತುರ್ತು ಪರಿಸ್ಥಿತಿಯಲ್ಲಿ ರೋಗಿಯ ಒಪ್ಪಿಗೆ ಅಗತ್ಯವಿಲ್ಲ, ಆದರೆ ಪೂರೈಕೆದಾರರು ರೋಗಿಯನ್ನು ಗುರುತಿಸಬೇಕು, ಕಾರಣವನ್ನು ನೀಡಬೇಕು, Break-Glass ಪ್ರವೇಶವನ್ನು ದೃಢೀಕರಿಸಬೇಕು ಮತ್ತು ಕಡ್ಡಾಯ ಆಡಿಟ್ ಲಾಗಿಂಗ್ ಅನ್ನು ಒಪ್ಪಿಕೊಳ್ಳಬೇಕು.",

    identifyPatient: "ರೋಗಿಯನ್ನು ಗುರುತಿಸಿ",
    identifyPatientText:
      "ನಿಯಂತ್ರಿತ ತುರ್ತು ಪ್ರವೇಶವನ್ನು ಪ್ರಾರಂಭಿಸಲು ರೋಗಿಯ Health ID ನಮೂದಿಸಿ ಅಥವಾ QR ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ.",
    patientHealthId: "ರೋಗಿಯ Health ID",
    healthIdPlaceholder: "ಉದಾ. JVC-000123",
    identifyPatientButton: "ರೋಗಿಯನ್ನು ಗುರುತಿಸಿ",
    healthId: "Health ID",

    scanQr: "QR ಸ್ಕ್ಯಾನ್ ಮಾಡಿ",
    stopScanner: "ಸ್ಕ್ಯಾನರ್ ನಿಲ್ಲಿಸಿ",
    scannerTitle: "ರೋಗಿಯ Health ID QR ಸ್ಕ್ಯಾನ್ ಮಾಡಿ",
    scannerText:
      "ರೋಗಿಯ Jeevan Health ID QR ಕೋಡ್ ಕಡೆಗೆ ಕ್ಯಾಮೆರಾ ತೋರಿಸಿ.",
    cameraPermission:
      "QR ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಲು ಕ್ಯಾಮೆರಾ ಅನುಮತಿ ಅಗತ್ಯವಿದೆ.",
    qrInvalid:
      "ಅಮಾನ್ಯ QR ಕೋಡ್. ದಯವಿಟ್ಟು ಮಾನ್ಯ Jeevan Health ID QR ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ.",
    qrDetected:
      "QR ಕೋಡ್ ಪತ್ತೆಯಾಗಿದೆ. ರೋಗಿಯ Health ID ನಮೂದಿಸಲಾಗಿದೆ.",
    cameraError:
      "ಕ್ಯಾಮೆರಾ ಪ್ರಾರಂಭಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಕ್ಯಾಮೆರಾ ಅನುಮತಿಯನ್ನು ಪರಿಶೀಲಿಸಿ ಅಥವಾ Health ID ಅನ್ನು ಕೈಯಾರೆ ನಮೂದಿಸಿ.",

    pleaseEnterHealthId: "ದಯವಿಟ್ಟು Health ID ನಮೂದಿಸಿ.",
    patientIdentified:
      "ರೋಗಿಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಗುರುತಿಸಲಾಗಿದೆ. ತುರ್ತು ಪ್ರವೇಶದ ಮೊದಲು ಮುಖ ಪರಿಶೀಲನೆ ಪೂರ್ಣಗೊಳಿಸಿ.",
    faceVerification: "ಮುಖ ಪರಿಶೀಲನೆ",
    faceVerificationText: "ತುರ್ತು ಪ್ರವೇಶ ಮುಂದುವರಿಸುವ ಮೊದಲು ಗುರುತಿಸಲಾದ ರೋಗಿಯನ್ನು ಪರಿಶೀಲಿಸಿ.",
    startFaceVerification: "ಮುಖ ಪರಿಶೀಲನೆ ಪ್ರಾರಂಭಿಸಿ",
    verifyFace: "ಮುಖ ಪರಿಶೀಲಿಸಿ",
    faceCameraText: "ರೋಗಿಯ ಮುಖವನ್ನು ಕ್ಯಾಮೆರಾ ಫ್ರೇಮ್ ಒಳಗೆ ಇರಿಸಿ.",
    faceVerificationComplete: "ಈ ಡೆಮೊಗಾಗಿ ಮುಖ ಪರಿಶೀಲನೆ ಪೂರ್ಣಗೊಂಡಿದೆ.",
    faceVerificationRequired: "ತುರ್ತು ಪ್ರವೇಶದ ಮೊದಲು ಮುಖ ಪರಿಶೀಲನೆ ಪೂರ್ಣಗೊಳಿಸಿ.",
    faceCameraError: "ಮುಖ ಪರಿಶೀಲನೆಗಾಗಿ ಕ್ಯಾಮೆರಾ ಪ್ರವೇಶಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ಕ್ಯಾಮೆರಾ ಅನುಮತಿಯನ್ನು ಪರಿಶೀಲಿಸಿ.",
    faceVerificationDemo: "ಡೆಮೊ ಪರಿಶೀಲನೆ: ಈ ಹಂತವು ಕಾರ್ಯಪ್ರವಾಹವನ್ನು ತೋರಿಸುತ್ತದೆ; ನಿಜವಾದ ಬಯೋಮೆಟ್ರಿಕ್ ಮುಖ ಹೊಂದಾಣಿಕೆ ನಡೆಯುವುದಿಲ್ಲ.",
    biometricVerification: "ಬಯೋಮೆಟ್ರಿಕ್ ಗುರುತು ಪರಿಶೀಲನೆ",
    biometricVerificationText: "ರೋಗಿಯ ಗುರುತನ್ನು ಪರಿಶೀಲಿಸಲು ಫಿಂಗರ್‌ಪ್ರಿಂಟ್, ಮುಖ ಅಥವಾ ತುರ್ತು ಪರ್ಯಾಯವನ್ನು ಬಳಸಿ.",
    fingerprintVerification: "ಫಿಂಗರ್‌ಪ್ರಿಂಟ್ ಪರಿಶೀಲನೆ",
    startFingerprint: "ಫಿಂಗರ್‌ಪ್ರಿಂಟ್ ಸ್ಕ್ಯಾನ್ ಪ್ರಾರಂಭಿಸಿ",
    fingerprintScanning: "ಫಿಂಗರ್‌ಪ್ರಿಂಟ್ ಸ್ಕ್ಯಾನ್ ಆಗುತ್ತಿದೆ...",
    fingerprintDemo: "ಡೆಮೊ ಸ್ಕ್ಯಾನರ್: ಯಾವುದೇ ನಿಜವಾದ ಫಿಂಗರ್‌ಪ್ರಿಂಟ್ ಹಾರ್ಡ್‌ವೇರ್ ಸಂಪರ್ಕಗೊಂಡಿಲ್ಲ. ಇದು ಪರಿಶೀಲನಾ ಪ್ರಕ್ರಿಯೆಯ ಸಿಮ್ಯುಲೇಶನ್.",
    fingerprintComplete: "ಈ ಡೆಮೊಗಾಗಿ ಫಿಂಗರ್‌ಪ್ರಿಂಟ್ ಪರಿಶೀಲನೆ ಪೂರ್ಣಗೊಂಡಿದೆ.",
    fingerprintRequired: "ತುರ್ತು ಪ್ರವೇಶಕ್ಕೂ ಮೊದಲು ಫಿಂಗರ್‌ಪ್ರಿಂಟ್, ಮುಖ ಅಥವಾ ತುರ್ತು ಪರ್ಯಾಯ ಪರಿಶೀಲನೆಯನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ.",
    fingerprintUnavailable: "ನಿಜವಾದ ಸ್ಕ್ಯಾನರ್ ಸಂಪರ್ಕಗೊಂಡಿಲ್ಲದ ಕಾರಣ ಫಿಂಗರ್‌ಪ್ರಿಂಟ್ ಪರಿಶೀಲನೆ ಲಭ್ಯವಿಲ್ಲ.",
    emergencyFallback: "ತುರ್ತು ಗುರುತು ಪರ್ಯಾಯ",
    emergencyFallbackText: "ರೋಗಿಯ ಮುಖ ಮತ್ತು ಬೆರಳುಗಳು ಗಾಯಗೊಂಡಿದ್ದರೆ ಅಥವಾ ಸ್ಕ್ಯಾನ್ ಮಾಡಲು ಸಾಧ್ಯವಾಗದಿದ್ದರೆ ದಾಖಲಿತ ತುರ್ತು ಗುರುತು ಪರ್ಯಾಯವನ್ನು ಬಳಸಿ.",
    fallbackReason: "ಬಯೋಮೆಟ್ರಿಕ್ ಪರಿಶೀಲನೆ ಏಕೆ ಲಭ್ಯವಿಲ್ಲ?",
    fallbackReasonPlaceholder: "ಉದಾ. ಮುಖ ಮತ್ತು ಬೆರಳುಗಳು ಗಾಯಗೊಂಡಿವೆ ಅಥವಾ ಲಭ್ಯವಿಲ್ಲ",
    fallbackContact: "ತುರ್ತು ಸಂಪರ್ಕ ದೃಢೀಕರಣ",
    fallbackContactPlaceholder: "ಉದಾ. ಕುಟುಂಬದ ಸದಸ್ಯ / ಆರೈಕೆದಾರರು ಗುರುತನ್ನು ದೃಢಪಡಿಸಿದ್ದಾರೆ",
    confirmFallback: "ತುರ್ತು ಪರ್ಯಾಯವನ್ನು ದೃಢೀಕರಿಸಿ",
    fallbackComplete: "ತುರ್ತು ಗುರುತು ಪರ್ಯಾಯ ದೃಢೀಕರಿಸಲಾಗಿದೆ. ಬಯೋಮೆಟ್ರಿಕ್ ಪರಿಶೀಲನೆ ಲಭ್ಯವಿರಲಿಲ್ಲ.",
    fallbackRequired: "ತುರ್ತು ಪರ್ಯಾಯದ ಕಾರಣವನ್ನು ನೀಡಿ ಮತ್ತು ದೃಢೀಕರಿಸಿ.",
    identityMethod: "ಗುರುತು ಪರಿಶೀಲನೆ ವಿಧಾನ",
    fingerprintMethod: "ಫಿಂಗರ್‌ಪ್ರಿಂಟ್",
    faceMethod: "ಮುಖ",
    fallbackMethod: "ತುರ್ತು ಪರ್ಯಾಯ",
    identityVerificationRequired: "ತುರ್ತು ಪ್ರವೇಶಕ್ಕೂ ಮೊದಲು ಒಂದು ಗುರುತು ಪರಿಶೀಲನೆ ವಿಧಾನವನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ.",
    patientNotFound:
      "ರೋಗಿ ಕಂಡುಬಂದಿಲ್ಲ. ದಯವಿಟ್ಟು Health ID ಪರಿಶೀಲಿಸಿ.",
    demoPatient: "ಡೆಮೊ ರೋಗಿ",

    emergencyAuthorization: "ತುರ್ತು ಪ್ರವೇಶ ಅನುಮತಿ",
    emergencyAuthorizationText:
      "ರೋಗಿಯ ಪ್ರಮುಖ ಮಾಹಿತಿಯನ್ನು ಪ್ರವೇಶಿಸುವ ಮೊದಲು ಅಗತ್ಯವಿರುವ ತುರ್ತು ಅನುಮತಿಯನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ.",
    emergencyReason: "ತುರ್ತು ಕಾರಣ",
    selectEmergencyReason: "ತುರ್ತು ಕಾರಣ ಆಯ್ಕೆಮಾಡಿ",

    unconsciousPatient: "ಪ್ರಜ್ಞಾಹೀನ ಅಥವಾ ಅಸಮರ್ಥ ರೋಗಿ",
    lifeThreatening: "ಜೀವಕ್ಕೆ ಅಪಾಯಕಾರಿಯಾದ ತುರ್ತು ಪರಿಸ್ಥಿತಿ",
    unableConsent: "ರೋಗಿಗೆ ಒಪ್ಪಿಗೆ ನೀಡಲು ಸಾಧ್ಯವಿಲ್ಲ",
    criticalInformation:
      "ತಕ್ಷಣದ ಪ್ರಮುಖ ಮಾಹಿತಿ ಅಗತ್ಯವಿದೆ",
    otherEmergency: "ಇತರ ತುರ್ತು ಪರಿಸ್ಥಿತಿ",

    confirmBreakGlass:
      "Break-Glass ತುರ್ತು ಪ್ರವೇಶವನ್ನು ದೃಢೀಕರಿಸಿ",
    breakGlassText:
      "ತುರ್ತು ಪರಿಸ್ಥಿತಿಯಲ್ಲಿ ಈ ರೋಗಿಯ ಪ್ರಮುಖ ವೈದ್ಯಕೀಯ ಮಾಹಿತಿಗೆ ತಕ್ಷಣದ ಪ್ರವೇಶ ಅಗತ್ಯವಿದೆ ಎಂದು ನಾನು ದೃಢೀಕರಿಸುತ್ತೇನೆ. ಈ ಪ್ರವೇಶ ಸೀಮಿತವಾಗಿರುತ್ತದೆ ಮತ್ತು ಆಡಿಟ್ ಲಾಗ್‌ನಲ್ಲಿ ಶಾಶ್ವತವಾಗಿ ದಾಖಲಿಸಲಾಗುತ್ತದೆ ಎಂಬುದನ್ನು ನಾನು ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೇನೆ.",
    grantEmergencyAccess: "ತುರ್ತು ಪ್ರವೇಶ ನೀಡಿ",

    identifyFirst: "ದಯವಿಟ್ಟು ಮೊದಲು ರೋಗಿಯನ್ನು ಗುರುತಿಸಿ.",
    selectReason: "ದಯವಿಟ್ಟು ತುರ್ತು ಕಾರಣವನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
    confirmBreakGlassError:
      "ದಯವಿಟ್ಟು Break-Glass ತುರ್ತು ಪ್ರವೇಶವನ್ನು ದೃಢೀಕರಿಸಿ.",

    accessGranted: "ತುರ್ತು ಪ್ರವೇಶ ನೀಡಲಾಗಿದೆ",
    accessGrantedAt: "ಪ್ರವೇಶ ನೀಡಿದ ಸಮಯ",
    limitedAccess: "ಸೀಮಿತ ಪ್ರವೇಶ",
    emergencySnapshot: "ತುರ್ತು ಸಾರಾಂಶ",
    emergencySnapshotText:
      "ತುರ್ತು ಆರೈಕೆಗೆ ಅಗತ್ಯವಿರುವ ಪ್ರಮುಖ ಮಾಹಿತಿಯನ್ನು ಮಾತ್ರ ಪ್ರದರ್ಶಿಸಲಾಗುತ್ತದೆ.",

    bloodGroup: "ರಕ್ತದ ಗುಂಪು",
    allergies: "ಅಲರ್ಜಿಗಳು",
    criticalMedications: "ಪ್ರಮುಖ ಔಷಧಿಗಳು",
    majorConditions: "ಪ್ರಮುಖ ಕಾಯಿಲೆಗಳು",
    majorSurgeries: "ಪ್ರಮುಖ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗಳು",
    emergencyContact: "ತುರ್ತು ಸಂಪರ್ಕ",

    security: "ಭದ್ರತೆ",
    auditLogTitle: "ತುರ್ತು ಪ್ರವೇಶ ಆಡಿಟ್ ಲಾಗ್",
    auditLogText:
      "ಜವಾಬ್ದಾರಿಗಾಗಿ ಪ್ರತಿಯೊಂದು ತುರ್ತು ಪ್ರವೇಶ ಘಟನೆಯನ್ನು ದಾಖಲಿಸಲಾಗುತ್ತದೆ.",
    noAuditEvents:
      "ಇನ್ನೂ ಯಾವುದೇ ತುರ್ತು ಪ್ರವೇಶ ಘಟನೆಗಳು ದಾಖಲಾಗಿಲ್ಲ.",

    action: "ಕ್ರಿಯೆ",
    patient: "ರೋಗಿ",
    reason: "ಕಾರಣ",
    scope: "ವ್ಯಾಪ್ತಿ",
    time: "ಸಮಯ",

    emergencyBreakGlassAccess:
      "ತುರ್ತು Break-Glass ಪ್ರವೇಶ",
    emergencySnapshotScope: "ತುರ್ತು ಸಾರಾಂಶ",

    emergencyAccessGranted:
      "ತುರ್ತು ಪ್ರವೇಶ ನೀಡಲಾಗಿದೆ. ಪ್ರಮುಖ ತುರ್ತು ಮಾಹಿತಿ ಮಾತ್ರ ಲಭ್ಯವಿದೆ.",

    notRecorded: "ದಾಖಲಾಗಿಲ್ಲ",

    identitySeparate:
      "ತುರ್ತು ಪ್ರವೇಶವು ನಿಯಂತ್ರಿತ ವಿನಾಯಿತಿಯಾಗಿದೆ."
  },

  ta: {
    emergencyAccess: "அவசர அணுகல்",
    dashboardTitle: "அவசர சேவை வழங்குநர் டாஷ்போர்டு",
    dashboardSubtitle:
      "முக்கியமான நோயாளர் தகவலுக்கான கட்டுப்படுத்தப்பட்ட அவசர அணுகல்.",
    emergencyProvider: "அவசர சேவை வழங்குநர்",

    controlledAccess: "கட்டுப்படுத்தப்பட்ட அவசர அணுகல்",
    controlledAccessText:
      "அவசர அணுகல் ஒரு கட்டுப்படுத்தப்பட்ட விதிவிலக்காகும். உண்மையான அவசரநிலையில் நோயாளியின் சம்மதம் தேவையில்லை. ஆனால் வழங்குநர் நோயாளியை அடையாளம் காண வேண்டும், காரணத்தை வழங்க வேண்டும், Break-Glass அணுகலை உறுதிப்படுத்த வேண்டும் மற்றும் கட்டாய ஆடிட் பதிவை ஏற்க வேண்டும்.",

    identifyPatient: "நோயாளியை அடையாளம் காண்க",
    identifyPatientText:
      "கட்டுப்படுத்தப்பட்ட அவசர அணுகலைத் தொடங்க நோயாளியின் Health ID-ஐ உள்ளிடவும் அல்லது QR குறியீட்டை ஸ்கேன் செய்யவும்.",
    patientHealthId: "நோயாளியின் Health ID",
    healthIdPlaceholder: "எ.கா. JVC-000123",
    identifyPatientButton: "நோயாளியை அடையாளம் காண்க",
    healthId: "Health ID",

    scanQr: "QR ஸ்கேன்",
    stopScanner: "ஸ்கேனரை நிறுத்தவும்",
    scannerTitle: "நோயாளியின் Health ID QR-ஐ ஸ்கேன் செய்யவும்",
    scannerText:
      "நோயாளியின் Jeevan Health ID QR குறியீட்டை நோக்கி கேமராவை வைத்திருக்கவும்.",
    cameraPermission:
      "QR குறியீட்டை ஸ்கேன் செய்ய கேமரா அனுமதி தேவை.",
    qrInvalid:
      "தவறான QR குறியீடு. சரியான Jeevan Health ID QR குறியீட்டை ஸ்கேன் செய்யவும்.",
    qrDetected:
      "QR குறியீடு கண்டறியப்பட்டது. நோயாளியின் Health ID உள்ளிடப்பட்டது.",
    cameraError:
      "கேமராவைத் தொடங்க முடியவில்லை. கேமரா அனுமதியைச் சரிபார்க்கவும் அல்லது Health ID-ஐ கைமுறையாக உள்ளிடவும்.",

    pleaseEnterHealthId: "தயவுசெய்து Health ID-ஐ உள்ளிடவும்.",
    patientIdentified:
      "நோயாளர் வெற்றிகரமாக அடையாளம் காணப்பட்டார். அவசர அணுகலுக்கு முன் முக சரிபார்ப்பை முடிக்கவும்.",
    faceVerification: "முக சரிபார்ப்பு",
    faceVerificationText: "அவசர அணுகலைத் தொடர முன் அடையாளம் காணப்பட்ட நோயாளியைச் சரிபார்க்கவும்.",
    startFaceVerification: "முக சரிபார்ப்பை தொடங்கு",
    verifyFace: "முகத்தை சரிபார்",
    faceCameraText: "நோயாளியின் முகத்தை கேமரா சட்டகத்திற்குள் வைக்கவும்.",
    faceVerificationComplete: "இந்த டெமோவிற்கான முக சரிபார்ப்பு முடிந்தது.",
    faceVerificationRequired: "அவசர அணுகலுக்கு முன் முக சரிபார்ப்பை முடிக்கவும்.",
    faceCameraError: "முக சரிபார்ப்பிற்காக கேமராவை அணுக முடியவில்லை. கேமரா அனுமதியைச் சரிபார்க்கவும்.",
    faceVerificationDemo: "டெமோ சரிபார்ப்பு: இந்த படி பணிப்பாய்வை காட்டுகிறது; உண்மையான பயோமெட்ரிக் முக பொருத்தம் செய்யப்படவில்லை.",
    biometricVerification: "பயோமெட்ரிக் அடையாள சரிபார்ப்பு",
    biometricVerificationText: "நோயாளியின் அடையாளத்தை சரிபார்க்க கைரேகை, முக சரிபார்ப்பு அல்லது அவசர மாற்று முறையைப் பயன்படுத்தவும்.",
    fingerprintVerification: "கைரேகை சரிபார்ப்பு",
    startFingerprint: "கைரேகை ஸ்கேன் தொடங்கவும்",
    fingerprintScanning: "கைரேகை ஸ்கேன் செய்யப்படுகிறது...",
    fingerprintDemo: "டெமோ ஸ்கேனர்: உண்மையான கைரேகை வன்பொருள் இணைக்கப்படவில்லை. இது சரிபார்ப்பு பணிப்பாய்வை சிமுலேட் செய்கிறது.",
    fingerprintComplete: "இந்த டெமோவுக்கான கைரேகை சரிபார்ப்பு முடிந்தது.",
    fingerprintRequired: "அவசர அணுகலுக்கு முன் கைரேகை, முகம் அல்லது அவசர மாற்று சரிபார்ப்பை முடிக்கவும்.",
    fingerprintUnavailable: "உண்மையான ஸ்கேனர் இணைக்கப்படாததால் கைரேகை சரிபார்ப்பு கிடைக்கவில்லை.",
    emergencyFallback: "அவசர அடையாள மாற்று",
    emergencyFallbackText: "நோயாளியின் முகம் மற்றும் விரல்கள் காயமடைந்திருந்தால் அல்லது ஸ்கேன் செய்ய முடியாவிட்டால், பதிவுசெய்யப்பட்ட அவசர அடையாள மாற்றைப் பயன்படுத்தவும்.",
    fallbackReason: "பயோமெட்ரிக் சரிபார்ப்பு ஏன் கிடைக்கவில்லை?",
    fallbackReasonPlaceholder: "எ.கா. முகம் மற்றும் விரல்கள் காயமடைந்துள்ளன அல்லது கிடைக்கவில்லை",
    fallbackContact: "அவசர தொடர்பு உறுதிப்படுத்தல்",
    fallbackContactPlaceholder: "எ.கா. குடும்ப உறுப்பினர் / பராமரிப்பாளர் அடையாளத்தை உறுதிப்படுத்தினார்",
    confirmFallback: "அவசர மாற்றை உறுதிப்படுத்தவும்",
    fallbackComplete: "அவசர அடையாள மாற்று உறுதிப்படுத்தப்பட்டது. பயோமெட்ரிக் சரிபார்ப்பு கிடைக்கவில்லை.",
    fallbackRequired: "அவசர மாற்றிற்கான காரணத்தை வழங்கி உறுதிப்படுத்தவும்.",
    identityMethod: "அடையாள சரிபார்ப்பு முறை",
    fingerprintMethod: "கைரேகை",
    faceMethod: "முகம்",
    fallbackMethod: "அவசர மாற்று",
    identityVerificationRequired: "அவசர அணுகலுக்கு முன் ஒரு அடையாள சரிபார்ப்பு முறையை முடிக்கவும்.",
    patientNotFound:
      "நோயாளர் கிடைக்கவில்லை. Health ID-ஐ சரிபார்க்கவும்.",
    demoPatient: "டெமோ நோயாளர்",

    emergencyAuthorization: "அவசர அணுகல் அங்கீகாரம்",
    emergencyAuthorizationText:
      "நோயாளியின் முக்கியமான தகவலை அணுகுவதற்கு முன் தேவையான அவசர அங்கீகாரத்தை முடிக்கவும்.",
    emergencyReason: "அவசர காரணம்",
    selectEmergencyReason: "அவசர காரணத்தைத் தேர்ந்தெடுக்கவும்",

    unconsciousPatient: "நினைவிழந்த அல்லது செயலிழந்த நோயாளர்",
    lifeThreatening: "உயிருக்கு ஆபத்தான அவசரநிலை",
    unableConsent: "நோயாளர் சம்மதம் வழங்க முடியவில்லை",
    criticalInformation:
      "உடனடியாக முக்கியமான தகவல் தேவை",
    otherEmergency: "பிற அவசரநிலை",

    confirmBreakGlass:
      "Break-Glass அவசர அணுகலை உறுதிப்படுத்தவும்",
    breakGlassText:
      "அவசர சூழ்நிலைகளில் இந்த நோயாளியின் முக்கியமான மருத்துவ தகவலை உடனடியாக அணுக வேண்டும் என்பதை நான் உறுதிப்படுத்துகிறேன். இந்த அணுகல் கட்டுப்படுத்தப்பட்டதாக இருக்கும் என்றும் ஆடிட் பதிவில் நிரந்தரமாக பதிவு செய்யப்படும் என்றும் நான் புரிந்துகொள்கிறேன்.",
    grantEmergencyAccess: "அவசர அணுகலை வழங்கவும்",

    identifyFirst: "முதலில் நோயாளியை அடையாளம் காணவும்.",
    selectReason: "தயவுசெய்து அவசர காரணத்தைத் தேர்ந்தெடுக்கவும்.",
    confirmBreakGlassError:
      "தயவுசெய்து Break-Glass அவசர அணுகலை உறுதிப்படுத்தவும்.",

    accessGranted: "அவசர அணுகல் வழங்கப்பட்டது",
    accessGrantedAt: "அணுகல் வழங்கப்பட்ட நேரம்",
    limitedAccess: "வரையறுக்கப்பட்ட அணுகல்",
    emergencySnapshot: "அவசர சுருக்கம்",
    emergencySnapshotText:
      "அவசர சிகிச்சைக்கு தேவையான முக்கியமான தகவல்கள் மட்டுமே காட்டப்படுகின்றன.",

    bloodGroup: "இரத்த வகை",
    allergies: "ஒவ்வாமைகள்",
    criticalMedications: "முக்கியமான மருந்துகள்",
    majorConditions: "முக்கிய நோய்கள்",
    majorSurgeries: "முக்கிய அறுவை சிகிச்சைகள்",
    emergencyContact: "அவசர தொடர்பு",

    security: "பாதுகாப்பு",
    auditLogTitle: "அவசர அணுகல் ஆடிட் பதிவு",
    auditLogText:
      "பொறுப்புக்கூறலுக்காக ஒவ்வொரு அவசர அணுகல் நிகழ்வும் பதிவு செய்யப்படுகிறது.",
    noAuditEvents:
      "இதுவரை எந்த அவசர அணுகல் நிகழ்வும் பதிவு செய்யப்படவில்லை.",

    action: "செயல்",
    patient: "நோயாளர்",
    reason: "காரணம்",
    scope: "வரம்பு",
    time: "நேரம்",

    emergencyBreakGlassAccess:
      "அவசர Break-Glass அணுகல்",
    emergencySnapshotScope: "அவசர சுருக்கம்",

    emergencyAccessGranted:
      "அவசர அணுகல் வழங்கப்பட்டுள்ளது. முக்கியமான அவசர தகவல்கள் மட்டுமே கிடைக்கின்றன.",

    notRecorded: "பதிவு செய்யப்படவில்லை",

    identitySeparate:
      "அவசர அணுகல் ஒரு கட்டுப்படுத்தப்பட்ட விதிவிலக்காகும்."
  },
};

export default function EmergencyDashboard() {
  const { language } = useLanguage();

  const t =
    emergencyTranslations[language] ||
    emergencyTranslations.en;

  const [healthId, setHealthId] = useState("");
  const [emergencyReason, setEmergencyReason] = useState("");
  const [identifiedPatient, setIdentifiedPatient] = useState(null);
  const [faceVerificationOpen, setFaceVerificationOpen] = useState(false);
  const [faceVerified, setFaceVerified] = useState(false);
  const [faceCameraError, setFaceCameraError] = useState("");
  const [fingerprintVerificationOpen, setFingerprintVerificationOpen] = useState(false);
  const [fingerprintVerified, setFingerprintVerified] = useState(false);
  const [fingerprintScanning, setFingerprintScanning] = useState(false);
  const [fallbackOpen, setFallbackOpen] = useState(false);
  const [fallbackVerified, setFallbackVerified] = useState(false);
  const [fallbackReason, setFallbackReason] = useState("");
  const [fallbackContact, setFallbackContact] = useState("");
  const [identityMethod, setIdentityMethod] = useState("");
  const [breakGlass, setBreakGlass] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);
  const [accessTime, setAccessTime] = useState(null);
  const [message, setMessage] = useState("");
  const [auditLog, setAuditLog] = useState([]);
  const [scannerError, setScannerError] = useState("");

  const videoRef = useRef(null);
  const qrScannerRef = useRef(null);
  const faceVideoRef = useRef(null);
  const faceStreamRef = useRef(null);

  useEffect(() => {
    try {
      const sessionCase =
        sessionStorage.getItem("jeevanCaseData");

      const localCase =
        localStorage.getItem("jeevanCaseData");

      const storedCase =
        sessionCase || localCase
          ? JSON.parse(sessionCase || localCase)
          : null;

      setCaseData(storedCase);
    } catch (error) {
      console.error(
        "Unable to load case data:",
        error
      );
    }

    try {
      const storedAudit =
        localStorage.getItem(
          "jeevanEmergencyAuditLog"
        );

      if (storedAudit) {
        setAuditLog(JSON.parse(storedAudit));
      }
    } catch (error) {
      console.error(
        "Unable to load emergency audit log:",
        error
      );
    }

    return () => {
      if (qrScannerRef.current) {
        qrScannerRef.current.stop();
        qrScannerRef.current.destroy();
        qrScannerRef.current = null;
      }
    };
  }, []);

  const handleIdentifyPatient = (
    suppliedHealthId
  ) => {
    setMessage("");
    setAccessGranted(false);
    setAccessTime(null);
    setFaceVerified(false);
    setFaceVerificationOpen(false);
    setFaceCameraError("");
    setFingerprintVerificationOpen(false);
    setFingerprintVerified(false);
    setFingerprintScanning(false);
    setFallbackOpen(false);
    setFallbackVerified(false);
    setFallbackReason("");
    setFallbackContact("");
    setIdentityMethod("");

    const enteredId =
      (
        suppliedHealthId !== undefined
          ? suppliedHealthId
          : healthId
      )
        .trim()
        .toUpperCase();

    if (!enteredId) {
      setIdentifiedPatient(null);
      setMessage(t.pleaseEnterHealthId);
      return false;
    }

    const storedHealthId = (
      caseData?.patientId ||
      caseData?.patient?.healthId ||
      ""
    ).toUpperCase();

    const patientName =
      caseData?.patientName ||
      caseData?.patient?.name ||
      t.demoPatient;

    if (
      enteredId === storedHealthId ||
      enteredId === "JVC-000123"
    ) {
      setHealthId(enteredId);

      setIdentifiedPatient({
        healthId: enteredId,
        name: patientName,
      });

      setMessage(t.patientIdentified);

      return true;
    }

    setIdentifiedPatient(null);
    setMessage(t.patientNotFound);

    return false;
  };

  const stopQrScanner = () => {
    if (qrScannerRef.current) {
      try {
        qrScannerRef.current.stop();
      } catch (error) {
        console.error(
          "Unable to stop QR scanner:",
          error
        );
      }

      try {
        qrScannerRef.current.destroy();
      } catch (error) {
        console.error(
          "Unable to destroy QR scanner:",
          error
        );
      }

      qrScannerRef.current = null;
    }

    setScannerOpen(false);
  };

  const handleQrResult = (result) => {
    const rawValue =
      typeof result === "string"
        ? result
        : result?.data || "";

    const value = rawValue
      .trim()
      .toUpperCase();

    if (!value) {
      return;
    }

    let scannedHealthId = "";

    if (
      value.indexOf("JEEVAN://PATIENT/") === 0
    ) {
      scannedHealthId = value.replace(
        "JEEVAN://PATIENT/",
        ""
      );
    } else {
      setScannerError(t.qrInvalid);
      return;
    }

    if (!scannedHealthId) {
      setScannerError(t.qrInvalid);
      return;
    }

    if (qrScannerRef.current) {
      try {
        qrScannerRef.current.stop();
      } catch (error) {
        console.error(
          "Unable to stop QR scanner after detection:",
          error
        );
      }

      try {
        qrScannerRef.current.destroy();
      } catch (error) {
        console.error(
          "Unable to destroy QR scanner after detection:",
          error
        );
      }

      qrScannerRef.current = null;
    }

    setScannerOpen(false);
    setScannerError("");
    setHealthId(scannedHealthId);
    setMessage(t.qrDetected);

    handleIdentifyPatient(scannedHealthId);
  };

  useEffect(() => {
    if (!scannerOpen) {
      return;
    }

    let cancelled = false;
    let scanner = null;

    const startScanner = async () => {
      await new Promise((resolve) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(resolve);
        });
      });

      if (cancelled) {
        return;
      }

      if (!videoRef.current) {
        setScannerError(t.cameraError);
        return;
      }

      try {
        if (qrScannerRef.current) {
          try {
            qrScannerRef.current.stop();
          } catch (error) {
            console.error(
              "Unable to stop previous QR scanner:",
              error
            );
          }

          try {
            qrScannerRef.current.destroy();
          } catch (error) {
            console.error(
              "Unable to destroy previous QR scanner:",
              error
            );
          }

          qrScannerRef.current = null;
        }

        scanner = new QrScanner(
          videoRef.current,
          (result) => {
            if (!cancelled) {
              handleQrResult(result);
            }
          },
          {
            returnDetailedScanResult: true,
            highlightScanRegion: true,
            highlightCodeOutline: true,
            maxScansPerSecond: 10,
          }
        );

        qrScannerRef.current = scanner;

        await scanner.start();

        if (cancelled) {
          try {
            scanner.stop();
          } catch (error) {
            console.error(
              "Unable to stop cancelled QR scanner:",
              error
            );
          }

          try {
            scanner.destroy();
          } catch (error) {
            console.error(
              "Unable to destroy cancelled QR scanner:",
              error
            );
          }

          if (
            qrScannerRef.current === scanner
          ) {
            qrScannerRef.current = null;
          }
        }
      } catch (error) {
        console.error(
          "QR scanner camera error:",
          error
        );

        if (qrScannerRef.current === scanner) {
          qrScannerRef.current = null;
        }

        try {
          if (scanner) {
            scanner.stop();
          }
        } catch (stopError) {
          console.error(
            "Unable to stop failed QR scanner:",
            stopError
          );
        }

        try {
          if (scanner) {
            scanner.destroy();
          }
        } catch (destroyError) {
          console.error(
            "Unable to destroy failed QR scanner:",
            destroyError
          );
        }

        if (!cancelled) {
          setScannerError(t.cameraError);
        }
      }
    };

    startScanner();

    return () => {
      cancelled = true;

      if (qrScannerRef.current) {
        try {
          qrScannerRef.current.stop();
        } catch (error) {
          console.error(
            "Unable to stop QR scanner during cleanup:",
            error
          );
        }

        try {
          qrScannerRef.current.destroy();
        } catch (error) {
          console.error(
            "Unable to destroy QR scanner during cleanup:",
            error
          );
        }

        qrScannerRef.current = null;
      }
    };
  }, [scannerOpen]);

  const stopFaceCamera = () => {
    if (faceStreamRef.current) {
      faceStreamRef.current.getTracks().forEach((track) => {
        track.stop();
      });
      faceStreamRef.current = null;
    }

    if (faceVideoRef.current) {
      faceVideoRef.current.srcObject = null;
    }
  };

  useEffect(() => {
    if (!faceVerificationOpen || faceVerified) {
      stopFaceCamera();
      return;
    }

    let cancelled = false;

    const startFaceCamera = async () => {
      setFaceCameraError("");

      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "user",
          },
          audio: false,
        });

        if (cancelled) {
          stream.getTracks().forEach((track) => {
            track.stop();
          });
          return;
        }

        faceStreamRef.current = stream;

        if (faceVideoRef.current) {
          faceVideoRef.current.srcObject = stream;
          await faceVideoRef.current.play();
        }
      } catch (error) {
        console.error(
          "Unable to start face verification camera:",
          error
        );

        if (!cancelled) {
          setFaceCameraError(t.faceCameraError);
        }
      }
    };

    startFaceCamera();

    return () => {
      cancelled = true;
      stopFaceCamera();
    };
  }, [faceVerificationOpen, faceVerified]);

  const handleStartFingerprint = () => {
    setFingerprintVerificationOpen(true);
    setFingerprintScanning(true);
    setFingerprintVerified(false);
    setFaceVerified(false);
    setFaceVerificationOpen(false);
    stopFaceCamera();
    setFallbackOpen(false);
    setFallbackVerified(false);
    setIdentityMethod("");
    setBreakGlass(false);
    setMessage("");

    window.setTimeout(() => {
      setFingerprintScanning(false);
      setFingerprintVerified(true);
      setFingerprintVerificationOpen(false);
      setIdentityMethod("fingerprint");
      setMessage(t.fingerprintComplete);
    }, 2200);
  };

  const handleStartEmergencyFallback = () => {
    setFallbackOpen(true);
    setFingerprintVerificationOpen(false);
    setFingerprintScanning(false);
    setFaceVerificationOpen(false);
    stopFaceCamera();
    setFallbackVerified(false);
    setFingerprintVerified(false);
    setFaceVerified(false);
    setIdentityMethod("");
    setBreakGlass(false);
    setMessage("");
  };

  const handleConfirmFallback = () => {
    if (!fallbackReason.trim() || !fallbackContact.trim()) {
      setMessage(t.fallbackRequired);
      return;
    }

    setFallbackVerified(true);
    setIdentityMethod("fallback");
    setFallbackOpen(false);
    setMessage(t.fallbackComplete);
  };

  const handleStartFaceVerification = () => {
    setFaceCameraError("");
    setFaceVerificationOpen(true);
    setFaceVerified(false);
    setFingerprintVerificationOpen(false);
    setFingerprintScanning(false);
    setFingerprintVerified(false);
    setFallbackOpen(false);
    setFallbackVerified(false);
    setIdentityMethod("");
    setBreakGlass(false);
    setMessage("");
  };

  const handleVerifyFace = () => {
    setFaceVerified(true);
    setFaceVerificationOpen(false);
    setFingerprintVerified(false);
    setFallbackVerified(false);
    setIdentityMethod("face");
    setFaceCameraError("");
    setMessage(t.faceVerificationComplete);
    stopFaceCamera();
  };

  const handleEmergencyAccess = () => {
    setMessage("");

    if (!identifiedPatient) {
      setMessage(t.identifyFirst);
      return;
    }

    if (!faceVerified && !fingerprintVerified && !fallbackVerified) {
      setMessage(t.identityVerificationRequired);
      return;
    }

    if (!emergencyReason) {
      setMessage(t.selectReason);
      return;
    }

    if (!breakGlass) {
      setMessage(t.confirmBreakGlassError);
      return;
    }

    const now =
      new Date().toISOString();

    const newAuditEntry = {
      id: "EMG-" + Date.now(),
      action:
        "Emergency Break-Glass Access",
      patientHealthId:
        identifiedPatient.healthId,
      patientName:
        identifiedPatient.name,
      reason: emergencyReason,
      providerRole:
        "Emergency Provider",
      timestamp: now,
      scope: "Emergency Snapshot",
      identityMethod: identityMethod || "Not recorded",
    };

    const updatedAudit = [
      newAuditEntry,
      ...auditLog,
    ];

    setAuditLog(updatedAudit);
    setAccessGranted(true);
    setAccessTime(now);

    localStorage.setItem(
      "jeevanEmergencyAuditLog",
      JSON.stringify(updatedAudit)
    );

    setMessage(
      t.emergencyAccessGranted
    );
  };

  const emergencySnapshot = {
    bloodGroup:
      caseData?.bloodGroup ||
      caseData?.patient?.bloodGroup ||
      t.notRecorded,

    allergies:
      caseData?.allergies ||
      caseData?.patient?.allergies ||
      t.notRecorded,

    medications:
      caseData?.medications ||
      caseData?.patient?.medications ||
      t.notRecorded,

    majorConditions:
      caseData?.majorConditions ||
      caseData?.patient?.majorConditions ||
      t.notRecorded,

    surgeries:
      caseData?.surgeries ||
      caseData?.patient?.surgeries ||
      t.notRecorded,

    emergencyContact:
      caseData?.emergencyContact ||
      caseData?.patient?.emergencyContact ||
      t.notRecorded,
  };

  const formatDateTime = (value) => {
    if (!value) return "—";

    try {
      return new Date(value).toLocaleString(
        language === "mr"
          ? "mr-IN"
          : language === "hi"
          ? "hi-IN"
          : language === "gu"
          ? "gu-IN"
          : language === "kn"
          ? "kn-IN"
          : language === "ta"
          ? "ta-IN"
          : "en-IN"
      );
    } catch {
      return value;
    }
  };

  const getReasonLabel = (reason) => {
    const reasonMap = {
      "Unconscious or incapacitated patient":
        t.unconsciousPatient,

      "Life-threatening emergency":
        t.lifeThreatening,

      "Patient unable to provide consent":
        t.unableConsent,

      "Critical information required immediately":
        t.criticalInformation,

      "Other emergency":
        t.otherEmergency,
    };

    return (
      reasonMap[reason] ||
      reason ||
      t.notRecorded
    );
  };

  return (
    <div>

      {/* PAGE HEADER */}

      <div
        className="d-flex justify-content-between align-items-start flex-wrap gap-3"
        style={{ marginBottom: "24px" }}
      >
        <div>
          <div
            className="jc-kicker"
            style={{
              color: "#dc2626",
              marginBottom: "6px",
            }}
          >
            {t.emergencyAccess}
          </div>

          <h1
            className="jc-page-heading"
            style={{ marginBottom: "6px" }}
          >
            {t.dashboardTitle}
          </h1>

          <p
            style={{
              color: "var(--jc-muted)",
              marginBottom: 0,
            }}
          >
            {t.dashboardSubtitle}
          </p>
        </div>

        <div
          className="jc-verified-badge"
          style={{
            color: "#dc2626",
            borderColor:
              "rgba(220, 38, 38, 0.25)",
          }}
        >
          <i className="bi bi-shield-check" />
          {t.emergencyProvider}
        </div>
      </div>

      {/* SECURITY NOTICE */}

      <div
        className="jc-dashboard-card"
        style={{
          marginBottom: "20px",
          borderLeft:
            "4px solid #dc2626",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "14px",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "rgba(220, 38, 38, 0.10)",
              color: "#dc2626",
              flexShrink: 0,
            }}
          >
            <i
              className="bi bi-shield-exclamation"
              style={{ fontSize: "20px" }}
            />
          </div>

          <div>
            <h3
              style={{
                fontSize: "15px",
                fontWeight: 700,
                color:
                  "var(--jc-text)",
                marginBottom: "5px",
              }}
            >
              {t.controlledAccess}
            </h3>

            <p
              style={{
                margin: 0,
                color:
                  "var(--jc-muted)",
                fontSize: "13px",
                lineHeight: 1.6,
              }}
            >
              {t.controlledAccessText}
            </p>
          </div>
        </div>
      </div>

      {/* IDENTIFY PATIENT */}

      <div
        className="jc-dashboard-card"
        style={{ marginBottom: "20px" }}
      >
        <div style={{ marginBottom: "20px" }}>
          <h2
            style={{
              fontSize: "17px",
              fontWeight: 700,
              color:
                "var(--jc-text)",
              marginBottom: "5px",
            }}
          >
            {t.identifyPatient}
          </h2>

          <p
            style={{
              color:
                "var(--jc-muted)",
              fontSize: "13px",
              marginBottom: 0,
            }}
          >
            {t.identifyPatientText}
          </p>
        </div>

        <div className="row g-3 align-items-end">

          <div className="col-md-7">
            <label
              style={{
                display: "block",
                fontSize: "13px",
                fontWeight: 600,
                color:
                  "var(--jc-text)",
                marginBottom: "7px",
              }}
            >
              {t.patientHealthId}
            </label>

            <input
              type="text"
              value={healthId}
              onChange={(e) =>
                setHealthId(e.target.value)
              }
              placeholder={t.healthIdPlaceholder}
              className="form-control"
              style={{
                background:
                  "var(--jc-panel)",
                color:
                  "var(--jc-text)",
                borderColor:
                  "var(--jc-border)",
                minHeight: "44px",
              }}
            />
          </div>

          <div className="col-md-5">
            <div
              className="d-flex gap-2"
              style={{
                flexWrap: "wrap",
              }}
            >
              <button
                type="button"
                onClick={
                  handleIdentifyPatient
                }
                className="btn"
                style={{
                  minHeight: "44px",
                  background: "#dc2626",
                  color: "#ffffff",
                  border: "none",
                  fontWeight: 600,
                  flex: 1,
                }}
              >
                <i className="bi bi-search me-2" />
                {t.identifyPatientButton}
              </button>

              <button
                type="button"
                onClick={() => {
                  setScannerError("");
                  setMessage("");
                  setScannerOpen(true);
                }}
                className="btn"
                style={{
                  minHeight: "44px",
                  background:
                    "var(--jc-panel)",
                  color:
                    "var(--jc-text)",
                  border:
                    "1px solid var(--jc-border)",
                  fontWeight: 600,
                  flex: 1,
                }}
              >
                <i className="bi bi-qr-code-scan me-2" />
                {t.scanQr}
              </button>
            </div>
          </div>

        </div>

        {/* QR SCANNER */}

        {scannerOpen && (
          <div
            style={{
              marginTop: "20px",
              padding: "18px",
              borderRadius: "14px",
              background:
                "var(--jc-panel)",
              border:
                "1px solid var(--jc-border)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems: "flex-start",
                gap: "12px",
                marginBottom: "14px",
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color:
                      "var(--jc-text)",
                    marginBottom: "5px",
                  }}
                >
                  <i className="bi bi-camera me-2" />
                  {t.scannerTitle}
                </h3>

                <p
                  style={{
                    margin: 0,
                    fontSize: "12px",
                    color:
                      "var(--jc-muted)",
                  }}
                >
                  {t.scannerText}
                </p>
              </div>

              <button
                type="button"
                onClick={stopQrScanner}
                className="btn btn-sm"
                style={{
                  color:
                    "var(--jc-text)",
                  border:
                    "1px solid var(--jc-border)",
                  background:
                    "var(--jc-panel)",
                  whiteSpace:
                    "nowrap",
                }}
              >
                <i className="bi bi-stop-circle me-1" />
                {t.stopScanner}
              </button>
            </div>

            <div
              style={{
                width: "100%",
                maxWidth: "520px",
                margin: "0 auto",
                overflow: "hidden",
                borderRadius: "14px",
                background: "#000000",
                position: "relative",
              }}
            >
              <video
                ref={videoRef}
                style={{
                  display: "block",
                  width: "100%",
                  minHeight: "260px",
                  objectFit: "cover",
                }}
                muted
                playsInline
              />
            </div>

            {scannerError && (
              <div
                style={{
                  marginTop: "12px",
                  padding: "11px 13px",
                  borderRadius: "10px",
                  background:
                    "rgba(220, 38, 38, 0.08)",
                  color: "#b91c1c",
                  fontSize: "12px",
                }}
              >
                <i className="bi bi-exclamation-circle me-2" />
                {scannerError}
              </div>
            )}
          </div>
        )}

        {identifiedPatient && (
          <div
            style={{
              marginTop: "18px",
              padding: "14px 16px",
              borderRadius: "12px",
              background:
                "rgba(5, 150, 105, 0.08)",
              border:
                "1px solid rgba(5, 150, 105, 0.20)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <i
                className="bi bi-check-circle-fill"
                style={{
                  color: "#059669",
                  fontSize: "18px",
                }}
              />

              <div>
                <strong
                  style={{
                    color:
                      "var(--jc-text)",
                    fontSize: "14px",
                  }}
                >
                  {identifiedPatient.name}
                </strong>

                <div
                  style={{
                    color:
                      "var(--jc-muted)",
                    fontSize: "12px",
                    marginTop: "2px",
                  }}
                >
                  {t.healthId}:{" "}
                  {identifiedPatient.healthId}
                </div>
              </div>
            </div>
          </div>
        )}

        {message && (
          <div
            style={{
              marginTop: "16px",
              padding: "12px 14px",
              borderRadius: "10px",
              background:
                identifiedPatient
                  ? "rgba(5, 150, 105, 0.08)"
                  : "rgba(220, 38, 38, 0.08)",
              color:
                identifiedPatient
                  ? "#047857"
                  : "#b91c1c",
              fontSize: "13px",
            }}
          >
            <i
              className={
                "bi " +
                (
                  identifiedPatient
                    ? "bi-check-circle"
                    : "bi-exclamation-circle"
                ) +
                " me-2"
              }
            />
            {message}
          </div>
        )}
      </div>

      {identifiedPatient && !accessGranted && (
        <div
          className="jc-dashboard-card"
          style={{ marginBottom: "20px" }}
        >
          <div style={{ marginBottom: "18px" }}>
            <h2
              style={{
                fontSize: "17px",
                fontWeight: 700,
                color: "var(--jc-text)",
                marginBottom: "5px",
              }}
            >
              {t.biometricVerification}
            </h2>
            <p
              style={{
                color: "var(--jc-muted)",
                fontSize: "13px",
                marginBottom: 0,
              }}
            >
              {t.biometricVerificationText}
            </p>
          </div>

          {!fingerprintVerified && !faceVerified && !fallbackVerified && (
            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                marginBottom: "14px",
              }}
            >
              <button
                type="button"
                onClick={handleStartFingerprint}
                disabled={fingerprintScanning}
                className="btn btn-primary"
                style={{ minHeight: "44px", fontWeight: 600 }}
              >
                <i className="bi bi-fingerprint me-2" />
                {fingerprintScanning ? t.fingerprintScanning : t.startFingerprint}
              </button>

              <button
                type="button"
                onClick={handleStartFaceVerification}
                className="btn btn-outline-primary"
                style={{ minHeight: "44px", fontWeight: 600 }}
              >
                <i className="bi bi-person-bounding-box me-2" />
                {t.startFaceVerification}
              </button>

              <button
                type="button"
                onClick={handleStartEmergencyFallback}
                className="btn btn-outline-secondary"
                style={{ minHeight: "44px", fontWeight: 600 }}
              >
                <i className="bi bi-shield-exclamation me-2" />
                {t.emergencyFallback}
              </button>
            </div>
          )}

          {!fingerprintVerified && !faceVerified && !fallbackVerified && (
            <div
              style={{
                padding: "11px 13px",
                borderRadius: "10px",
                background: "rgba(14, 165, 233, 0.07)",
                border: "1px solid rgba(14, 165, 233, 0.16)",
                color: "var(--jc-muted)",
                fontSize: "12px",
                marginBottom: "14px",
              }}
            >
              <i className="bi bi-info-circle me-2" />
              {t.fingerprintDemo}
            </div>
          )}

          {fingerprintVerificationOpen && fingerprintScanning && (
            <div
              style={{
                padding: "18px",
                borderRadius: "12px",
                background: "var(--jc-input-bg)",
                border: "1px solid var(--jc-border)",
                textAlign: "center",
                marginBottom: "14px",
              }}
            >
              <div
                style={{
                  width: "110px",
                  height: "110px",
                  margin: "0 auto 12px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid var(--jc-cyan)",
                  boxShadow: "0 0 0 8px rgba(14, 165, 233, 0.06)",
                }}
              >
                <i
                  className="bi bi-fingerprint"
                  style={{ fontSize: "62px", color: "var(--jc-cyan)" }}
                />
              </div>
              <div
                style={{
                  color: "var(--jc-text)",
                  fontWeight: 700,
                  fontSize: "14px",
                  marginBottom: "5px",
                }}
              >
                {t.fingerprintScanning}
              </div>
              <div style={{ color: "var(--jc-muted)", fontSize: "12px" }}>
                {t.fingerprintDemo}
              </div>
            </div>
          )}

          {faceVerificationOpen && !faceVerified && (
            <div
              style={{
                padding: "14px",
                borderRadius: "12px",
                background: "var(--jc-input-bg)",
                border: "1px solid var(--jc-border)",
                marginBottom: "14px",
              }}
            >
              <div
                style={{
                  color: "var(--jc-muted)",
                  fontSize: "12px",
                  marginBottom: "10px",
                }}
              >
                {t.faceCameraText}
              </div>

              <div
                style={{
                  width: "100%",
                  maxWidth: "420px",
                  margin: "0 auto",
                  borderRadius: "12px",
                  overflow: "hidden",
                  background: "#000",
                }}
              >
                <video
                  ref={faceVideoRef}
                  autoPlay
                  muted
                  playsInline
                  style={{
                    display: "block",
                    width: "100%",
                    minHeight: "260px",
                    objectFit: "cover",
                    transform: "scaleX(-1)",
                  }}
                />
              </div>

              {faceCameraError && (
                <div
                  style={{
                    marginTop: "12px",
                    padding: "11px 13px",
                    borderRadius: "10px",
                    background: "rgba(220, 38, 38, 0.08)",
                    color: "#b91c1c",
                    fontSize: "12px",
                  }}
                >
                  <i className="bi bi-exclamation-circle me-2" />
                  {faceCameraError}
                </div>
              )}

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "14px",
                  flexWrap: "wrap",
                }}
              >
                <button
                  type="button"
                  onClick={handleVerifyFace}
                  className="btn btn-success"
                  style={{ minHeight: "44px", fontWeight: 600 }}
                >
                  <i className="bi bi-check-circle me-2" />
                  {t.verifyFace}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFaceVerificationOpen(false);
                    stopFaceCamera();
                  }}
                  className="btn btn-outline-secondary"
                  style={{ minHeight: "44px" }}
                >
                  {t.stopScanner}
                </button>
              </div>
            </div>
          )}

          {fallbackOpen && !fallbackVerified && (
            <div
              style={{
                padding: "16px",
                borderRadius: "12px",
                background: "var(--jc-input-bg)",
                border: "1px solid var(--jc-border)",
                marginBottom: "14px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "8px",
                }}
              >
                <i
                  className="bi bi-shield-exclamation"
                  style={{ color: "var(--jc-cyan)", fontSize: "20px" }}
                />
                <strong style={{ color: "var(--jc-text)", fontSize: "14px" }}>
                  {t.emergencyFallback}
                </strong>
              </div>

              <p
                style={{
                  color: "var(--jc-muted)",
                  fontSize: "12px",
                  lineHeight: 1.6,
                  marginBottom: "14px",
                }}
              >
                {t.emergencyFallbackText}
              </p>

              <label
                style={{
                  display: "block",
                  color: "var(--jc-text)",
                  fontSize: "12px",
                  fontWeight: 600,
                  marginBottom: "6px",
                }}
              >
                {t.fallbackReason}
              </label>

              <textarea
                value={fallbackReason}
                onChange={(e) => setFallbackReason(e.target.value)}
                className="form-control"
                rows="3"
                placeholder={t.fallbackReasonPlaceholder}
                style={{
                  background: "var(--jc-panel)",
                  color: "var(--jc-text)",
                  borderColor: "var(--jc-border)",
                  marginBottom: "12px",
                }}
              />

              <label
                style={{
                  display: "block",
                  color: "var(--jc-text)",
                  fontSize: "12px",
                  fontWeight: 600,
                  marginBottom: "6px",
                }}
              >
                {t.fallbackContact}
              </label>

              <input
                type="text"
                value={fallbackContact}
                onChange={(e) => setFallbackContact(e.target.value)}
                className="form-control"
                placeholder={t.fallbackContactPlaceholder}
                style={{
                  background: "var(--jc-panel)",
                  color: "var(--jc-text)",
                  borderColor: "var(--jc-border)",
                  marginBottom: "14px",
                }}
              />

              <button
                type="button"
                onClick={handleConfirmFallback}
                className="btn btn-primary"
                style={{ minHeight: "44px", fontWeight: 600 }}
              >
                <i className="bi bi-check-circle me-2" />
                {t.confirmFallback}
              </button>
            </div>
          )}

          {(fingerprintVerified || faceVerified || fallbackVerified) && (
            <div
              style={{
                padding: "12px 14px",
                borderRadius: "10px",
                background: "rgba(5, 150, 105, 0.08)",
                border: "1px solid rgba(5, 150, 105, 0.20)",
                color: "#047857",
                fontSize: "13px",
              }}
            >
              <i className="bi bi-shield-check me-2" />
              {fingerprintVerified
                ? t.fingerprintComplete
                : faceVerified
                  ? t.faceVerificationComplete
                  : t.fallbackComplete}
            </div>
          )}
        </div>
      )}

      {/* BREAK GLASS */}

      {identifiedPatient &&
        (fingerprintVerified || faceVerified || fallbackVerified) &&
        !accessGranted && (
          <div
            className="jc-dashboard-card"
            style={{
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                marginBottom: "20px",
              }}
            >
              <h2
                style={{
                  fontSize: "17px",
                  fontWeight: 700,
                  color:
                    "var(--jc-text)",
                  marginBottom: "5px",
                }}
              >
                {t.emergencyAuthorization}
              </h2>

              <p
                style={{
                  color:
                    "var(--jc-muted)",
                  fontSize: "13px",
                  marginBottom: 0,
                }}
              >
                {t.emergencyAuthorizationText}
              </p>
            </div>

            <div
              style={{
                marginBottom: "18px",
                padding: "11px 13px",
                borderRadius: "10px",
                background: "rgba(14, 165, 233, 0.07)",
                border: "1px solid rgba(14, 165, 233, 0.16)",
                color: "var(--jc-muted)",
                fontSize: "12px",
              }}
            >
              <strong style={{ color: "var(--jc-text)" }}>
                {t.identityMethod}: {" "}
              </strong>
              {identityMethod === "fingerprint"
                ? t.fingerprintMethod
                : identityMethod === "face"
                  ? t.faceMethod
                  : t.fallbackMethod}
            </div>

            <div
              style={{
                marginBottom: "18px",
              }}
            >
              <label
                style={{
                  display: "block",
                  fontSize: "13px",
                  fontWeight: 600,
                  color:
                    "var(--jc-text)",
                  marginBottom: "7px",
                }}
              >
                {t.emergencyReason}
              </label>

              <select
                value={emergencyReason}
                onChange={(e) =>
                  setEmergencyReason(
                    e.target.value
                  )
                }
                className="form-select"
                style={{
                  background:
                    "var(--jc-panel)",
                  color:
                    "var(--jc-text)",
                  borderColor:
                    "var(--jc-border)",
                  minHeight: "44px",
                }}
              >
                <option value="">
                  {t.selectEmergencyReason}
                </option>

                <option value="Unconscious or incapacitated patient">
                  {t.unconsciousPatient}
                </option>

                <option value="Life-threatening emergency">
                  {t.lifeThreatening}
                </option>

                <option value="Patient unable to provide consent">
                  {t.unableConsent}
                </option>

                <option value="Critical information required immediately">
                  {t.criticalInformation}
                </option>

                <option value="Other emergency">
                  {t.otherEmergency}
                </option>
              </select>
            </div>

            <div
              style={{
                padding: "16px",
                borderRadius: "12px",
                background:
                  "rgba(220, 38, 38, 0.06)",
                border:
                  "1px solid rgba(220, 38, 38, 0.20)",
                marginBottom: "18px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <input
                  type="checkbox"
                  checked={breakGlass}
                  onChange={(e) =>
                    setBreakGlass(
                      e.target.checked
                    )
                  }
                  style={{
                    width: "18px",
                    height: "18px",
                    marginTop: "2px",
                    accentColor: "#dc2626",
                  }}
                />

                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "14px",
                      color:
                        "var(--jc-text)",
                      marginBottom: "5px",
                    }}
                  >
                    {t.confirmBreakGlass}
                  </div>

                  <div
                    style={{
                      fontSize: "12px",
                      lineHeight: 1.6,
                      color:
                        "var(--jc-muted)",
                    }}
                  >
                    {t.breakGlassText}
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={
                handleEmergencyAccess
              }
              className="btn"
              style={{
                background: "#dc2626",
                color: "#ffffff",
                border: "none",
                fontWeight: 700,
                minHeight: "46px",
                padding: "0 22px",
              }}
            >
              <i className="bi bi-shield-exclamation me-2" />
              {t.grantEmergencyAccess}
            </button>
          </div>
        )}

      {/* ACCESS GRANTED */}

      {accessGranted && (
        <>
          <div
            className="jc-dashboard-card"
            style={{
              marginBottom: "20px",
              borderLeft:
                "4px solid #059669",
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
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background:
                    "rgba(5, 150, 105, 0.10)",
                  color: "#059669",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="bi bi-check-lg" />
              </div>

              <div>
                <div
                  style={{
                    fontWeight: 700,
                    color:
                      "var(--jc-text)",
                    fontSize: "15px",
                  }}
                >
                  {t.accessGranted}
                </div>

                <div
                  style={{
                    color:
                      "var(--jc-muted)",
                    fontSize: "12px",
                    marginTop: "3px",
                  }}
                >
                  {t.accessGrantedAt}{" "}
                  {formatDateTime(
                    accessTime
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* EMERGENCY SNAPSHOT */}

          <div
            className="jc-dashboard-card"
            style={{
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                marginBottom: "20px",
              }}
            >
              <div
                className="jc-kicker"
                style={{
                  color: "#dc2626",
                  marginBottom: "6px",
                }}
              >
                {t.limitedAccess}
              </div>

              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color:
                    "var(--jc-text)",
                  marginBottom: "5px",
                }}
              >
                {t.emergencySnapshot}
              </h2>

              <p
                style={{
                  color:
                    "var(--jc-muted)",
                  fontSize: "13px",
                  marginBottom: 0,
                }}
              >
                {t.emergencySnapshotText}
              </p>
            </div>

            <div className="row g-3">

              <SnapshotCard
                icon="bi-droplet-half"
                label={t.bloodGroup}
                value={
                  emergencySnapshot.bloodGroup
                }
              />

              <SnapshotCard
                icon="bi-exclamation-triangle"
                label={t.allergies}
                value={
                  emergencySnapshot.allergies
                }
              />

              <SnapshotCard
                icon="bi-capsule"
                label={
                  t.criticalMedications
                }
                value={
                  emergencySnapshot.medications
                }
              />

              <SnapshotCard
                icon="bi-heart-pulse"
                label={t.majorConditions}
                value={
                  emergencySnapshot.majorConditions
                }
              />

              <SnapshotCard
                icon="bi-bandaid"
                label={t.majorSurgeries}
                value={
                  emergencySnapshot.surgeries
                }
              />

              <SnapshotCard
                icon="bi-telephone"
                label={t.emergencyContact}
                value={
                  emergencySnapshot.emergencyContact
                }
              />

            </div>
          </div>
        </>
      )}

      {/* AUDIT LOG */}

      <div className="jc-dashboard-card">
        <div
          style={{
            marginBottom: "18px",
          }}
        >
          <div
            className="jc-kicker"
            style={{
              color:
                "var(--jc-muted)",
              marginBottom: "6px",
            }}
          >
            {t.security}
          </div>

          <h2
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color:
                "var(--jc-text)",
              marginBottom: "5px",
            }}
          >
            {t.auditLogTitle}
          </h2>

          <p
            style={{
              color:
                "var(--jc-muted)",
              fontSize: "13px",
              marginBottom: 0,
            }}
          >
            {t.auditLogText}
          </p>
        </div>

        {auditLog.length === 0 ? (
          <div
            style={{
              padding: "28px",
              textAlign: "center",
              border:
                "1px dashed var(--jc-border)",
              borderRadius: "12px",
              color:
                "var(--jc-muted)",
              fontSize: "13px",
            }}
          >
            <i
              className="bi bi-shield-check"
              style={{
                fontSize: "24px",
                display: "block",
                marginBottom: "8px",
              }}
            />

            {t.noAuditEvents}
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table jc-table align-middle mb-0">
              <thead>
                <tr>
                  <th>{t.action}</th>
                  <th>{t.patient}</th>
                  <th>{t.reason}</th>
                  <th>{t.scope}</th>
                  <th>{t.time}</th>
                </tr>
              </thead>

              <tbody>
                {auditLog.map((entry) => (
                  <tr key={entry.id}>
                    <td>
                      <span
                        style={{
                          fontWeight: 600,
                          fontSize: "12px",
                        }}
                      >
                        {t.emergencyBreakGlassAccess}
                      </span>
                    </td>

                    <td>
                      <div
                        style={{
                          fontWeight: 600,
                          fontSize: "13px",
                        }}
                      >
                        {entry.patientName}
                      </div>

                      <div
                        style={{
                          color:
                            "var(--jc-muted)",
                          fontSize: "11px",
                        }}
                      >
                        {entry.patientHealthId}
                      </div>
                    </td>

                    <td
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      {getReasonLabel(
                        entry.reason
                      )}
                    </td>

                    <td>
                      <span className="jc-status-pill success">
                        {t.emergencySnapshotScope}
                      </span>
                    </td>

                    <td
                      style={{
                        fontSize: "12px",
                        color:
                          "var(--jc-muted)",
                      }}
                    >
                      {formatDateTime(
                        entry.timestamp
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function SnapshotCard({
  icon,
  label,
  value,
}) {
  return (
    <div className="col-md-6">
      <div
        style={{
          height: "100%",
          padding: "16px",
          border:
            "1px solid var(--jc-border)",
          borderRadius: "12px",
          background:
            "var(--jc-panel)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "rgba(220, 38, 38, 0.08)",
              color: "#dc2626",
              flexShrink: 0,
            }}
          >
            <i
              className={
                "bi " + icon
              }
            />
          </div>

          <div>
            <div
              style={{
                fontSize: "11px",
                color:
                  "var(--jc-muted)",
                marginBottom: "4px",
                textTransform:
                  "uppercase",
                letterSpacing:
                  "0.04em",
              }}
            >
              {label}
            </div>

            <div
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color:
                  "var(--jc-text)",
              }}
            >
              {value}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}