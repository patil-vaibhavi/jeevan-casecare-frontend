
import React, { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const caseTakingTranslations = {
  en: {
    aiCaseTaking: "AI Case-Taking",
    aiAssisted: "AI Assisted",
    answerNaturally:
      "Answer naturally. The assistant will ask follow-up questions based on your responses.",
    exitCase: "Exit Case",
    caseCompletion: "Case completion",
    informationCollected: "Information collected",
    caseId: "Case ID",
    jeevanAI: "Jeevan AI",
    you: "You",
    assistant: "Jeevan AI Assistant",
    sessionActive: "Case-taking session active",
    typeAnswer: "Type your answer here...",
    voiceInput: "Voice input",
    listening: "Listening... Speak naturally.",
    pressEnter:
      "Press Enter to send • Voice input can be used when available",
    informationCheck: "Information check",
    missingDetails: "AI detected missing details",
    noMissing:
      "No major missing information detected.",
    redFlagMonitor: "Red-flag monitor",
    importantInfo: "Potentially important information",
    attention: "ATTENTION",
    additionalClinical:
      "Additional clinical information may be required. Doctor review is recommended.",
    noRedFlags:
      "No red flags detected from current information.",
    caseWorkflow: "Case workflow",
    caseStarted: "Case started",
    aiCaseTaking: "AI case-taking",
    informationCheckStep: "Information check",
    aiSummary: "AI summary",
    doctorReview: "Doctor review",
    doctorApproval: "Doctor approval",
    readyFinish: "Ready to finish?",
    preparedForReview:
      "The information will be prepared for doctor review.",
    continueSummary: "Continue to Case Summary",

    patient: "Patient",
    now: "Now",

    duration: "Duration of symptoms",
    temperature: "Current temperature",
    associatedSymptoms: "Associated symptoms",
    temperatureReading: "Temperature reading",
    durationFever: "Duration of fever",
    frequency: "Frequency",
    aggravating: "Aggravating factors",
    relieving: "Relieving factors",
    severity: "Severity",
    additionalClinicalDetails: "Additional clinical details",

    initialGeneral:
      "Hello. I’ll help you create a structured medical case. Please describe the main health concern that brought you here today.",
    initialAyurveda:
      "Namaste. I’ll help you create a structured Ayurvedic health case. Please describe the main health concern that brought you here today.",

    qWhenBegin:
      "Thank you. When did this problem first begin?",
    qTemperature:
      "What was the highest temperature you measured, and how did you measure it?",
    qBreathing:
      "You mentioned difficulty breathing. Can you describe when it occurs and whether it is getting worse?",
    qChest:
      "Please describe the chest discomfort — when it started, where you feel it, and whether anything makes it better or worse.",
    qFrequency:
      "How often does this problem occur?",
    qWorse:
      "What makes the problem worse?",
    qBetter:
      "What makes the problem better or provides relief?",
    qAssociated:
      "Do you have any other symptoms along with this problem?",
    qSeverity:
      "Thank you. I have recorded the associated symptoms. How severe is your main problem — mild, moderate, or severe?",
    qRecordedSeverity:
      "Thank you. I have recorded the severity. You can continue reviewing the case summary.",
    qMoreDetail:
      "Thank you. Could you provide a little more detail about this problem?",

    difficultyBreathing: "Difficulty breathing reported",
    chestDiscomfort: "Chest discomfort reported",

    mild: "mild",
    moderate: "moderate",
    severe: "severe",
  },

  mr: {
    aiCaseTaking: "एआय केस-टेकिंग",
    aiAssisted: "एआय सहाय्यित",
    answerNaturally:
      "नैसर्गिक पद्धतीने उत्तर द्या. तुमच्या उत्तरांनुसार सहाय्यक पुढील प्रश्न विचारेल.",
    exitCase: "केसमधून बाहेर पडा",
    caseCompletion: "केस पूर्णता",
    informationCollected: "माहिती संकलित",
    caseId: "केस आयडी",
    jeevanAI: "जीवन एआय",
    you: "तुम्ही",
    assistant: "जीवन एआय सहाय्यक",
    sessionActive: "केस-टेकिंग सत्र सक्रिय आहे",
    typeAnswer: "तुमचे उत्तर येथे लिहा...",
    voiceInput: "व्हॉइस इनपुट",
    listening: "ऐकत आहे... नैसर्गिकपणे बोला.",
    pressEnter:
      "पाठवण्यासाठी Enter दाबा • उपलब्ध असल्यास व्हॉइस इनपुट वापरता येईल",
    informationCheck: "माहिती तपासणी",
    missingDetails: "एआयने गहाळ माहिती शोधली",
    noMissing:
      "कोणतीही महत्त्वाची गहाळ माहिती आढळली नाही.",
    redFlagMonitor: "धोक्याच्या लक्षणांचे निरीक्षण",
    importantInfo: "संभाव्यतः महत्त्वाची माहिती",
    attention: "लक्ष द्या",
    additionalClinical:
      "अतिरिक्त वैद्यकीय माहिती आवश्यक असू शकते. डॉक्टरांचा आढावा घेण्याची शिफारस केली जाते.",
    noRedFlags:
      "सध्याच्या माहितीमध्ये कोणतीही धोक्याची लक्षणे आढळली नाहीत.",
    caseWorkflow: "केस प्रक्रिया",
    caseStarted: "केस सुरू",
    aiCaseTaking: "एआय केस-टेकिंग",
    informationCheckStep: "माहिती तपासणी",
    aiSummary: "एआय सारांश",
    doctorReview: "डॉक्टरांचा आढावा",
    doctorApproval: "डॉक्टरांची मंजुरी",
    readyFinish: "केस पूर्ण करण्यासाठी तयार आहात?",
    preparedForReview:
      "ही माहिती डॉक्टरांच्या आढाव्यासाठी तयार केली जाईल.",
    continueSummary: "केस सारांशाकडे पुढे जा",

    patient: "रुग्ण",
    now: "आत्ता",

    duration: "लक्षणांचा कालावधी",
    temperature: "सध्याचे तापमान",
    associatedSymptoms: "संबंधित लक्षणे",
    temperatureReading: "तापमानाचे मोजमाप",
    durationFever: "तापाचा कालावधी",
    frequency: "वारंवारता",
    aggravating: "त्रास वाढवणारे घटक",
    relieving: "आराम देणारे घटक",
    severity: "तीव्रता",
    additionalClinicalDetails: "अतिरिक्त वैद्यकीय माहिती",

    initialGeneral:
      "नमस्कार. मी तुम्हाला संरचित वैद्यकीय केस तयार करण्यात मदत करेन. आज तुम्हाला येथे आणणारी मुख्य आरोग्य समस्या कृपया सांगा.",
    initialAyurveda:
      "नमस्कार. मी तुम्हाला संरचित आयुर्वेदिक आरोग्य केस तयार करण्यात मदत करेन. आज तुम्हाला येथे आणणारी मुख्य आरोग्य समस्या कृपया सांगा.",

    qWhenBegin:
      "धन्यवाद. ही समस्या प्रथम कधी सुरू झाली?",
    qTemperature:
      "तुम्ही मोजलेले सर्वाधिक तापमान किती होते आणि तुम्ही ते कसे मोजले?",
    qBreathing:
      "तुम्ही श्वास घेण्यास त्रास होत असल्याचे सांगितले. तो कधी होतो आणि तो वाढत आहे का ते सांगू शकता का?",
    qChest:
      "छातीतील अस्वस्थतेचे वर्णन करा — ती कधी सुरू झाली, कुठे जाणवते आणि कोणत्या गोष्टींमुळे ती कमी किंवा जास्त होते.",
    qFrequency:
      "ही समस्या किती वेळा होते?",
    qWorse:
      "ही समस्या कशामुळे वाढते?",
    qBetter:
      "ही समस्या कशामुळे कमी होते किंवा आराम मिळतो?",
    qAssociated:
      "या समस्येसोबत तुम्हाला आणखी काही लक्षणे आहेत का?",
    qSeverity:
      "धन्यवाद. संबंधित लक्षणे नोंदवली आहेत. तुमची मुख्य समस्या किती तीव्र आहे — सौम्य, मध्यम की तीव्र?",
    qRecordedSeverity:
      "धन्यवाद. तीव्रता नोंदवली आहे. आता तुम्ही केस सारांशाचे पुनरावलोकन सुरू ठेवू शकता.",
    qMoreDetail:
      "धन्यवाद. या समस्येबद्दल थोडी अधिक माहिती देऊ शकता का?",

    difficultyBreathing: "श्वास घेण्यास त्रास नोंदवला",
    chestDiscomfort: "छातीतील अस्वस्थता नोंदवली",

    mild: "सौम्य",
    moderate: "मध्यम",
    severe: "तीव्र",
  },

  hi: {
    aiCaseTaking: "एआई केस-टेकिंग",
    aiAssisted: "एआई सहायता प्राप्त",
    answerNaturally:
      "स्वाभाविक रूप से उत्तर दें। आपके उत्तरों के आधार पर सहायक आगे के प्रश्न पूछेगा।",
    exitCase: "केस से बाहर निकलें",
    caseCompletion: "केस पूर्णता",
    informationCollected: "जानकारी एकत्रित",
    caseId: "केस आईडी",
    jeevanAI: "जीवन एआई",
    you: "आप",
    assistant: "जीवन एआई सहायक",
    sessionActive: "केस-टेकिंग सत्र सक्रिय है",
    typeAnswer: "अपना उत्तर यहां लिखें...",
    voiceInput: "वॉइस इनपुट",
    listening: "सुन रहा है... स्वाभाविक रूप से बोलें।",
    pressEnter:
      "भेजने के लिए Enter दबाएं • उपलब्ध होने पर वॉइस इनपुट का उपयोग किया जा सकता है",
    informationCheck: "जानकारी जांच",
    missingDetails: "एआई ने कुछ जानकारी की कमी पहचानी",
    noMissing:
      "कोई महत्वपूर्ण जानकारी गायब नहीं पाई गई।",
    redFlagMonitor: "रेड-फ्लैग निगरानी",
    importantInfo: "संभावित रूप से महत्वपूर्ण जानकारी",
    attention: "ध्यान दें",
    additionalClinical:
      "अतिरिक्त चिकित्सीय जानकारी की आवश्यकता हो सकती है। डॉक्टर द्वारा समीक्षा की सलाह दी जाती है।",
    noRedFlags:
      "वर्तमान जानकारी में कोई रेड फ्लैग नहीं पाया गया।",
    caseWorkflow: "केस प्रक्रिया",
    caseStarted: "केस शुरू",
    aiCaseTaking: "एआई केस-टेकिंग",
    informationCheckStep: "जानकारी जांच",
    aiSummary: "एआई सारांश",
    doctorReview: "डॉक्टर की समीक्षा",
    doctorApproval: "डॉक्टर की मंजूरी",
    readyFinish: "क्या आप केस पूरा करने के लिए तैयार हैं?",
    preparedForReview:
      "जानकारी डॉक्टर की समीक्षा के लिए तैयार की जाएगी।",
    continueSummary: "केस सारांश पर जाएं",

    patient: "मरीज",
    now: "अभी",

    duration: "लक्षणों की अवधि",
    temperature: "वर्तमान तापमान",
    associatedSymptoms: "संबंधित लक्षण",
    temperatureReading: "तापमान रीडिंग",
    durationFever: "बुखार की अवधि",
    frequency: "आवृत्ति",
    aggravating: "बढ़ाने वाले कारक",
    relieving: "राहत देने वाले कारक",
    severity: "गंभीरता",
    additionalClinicalDetails: "अतिरिक्त चिकित्सीय जानकारी",

    initialGeneral:
      "नमस्ते। मैं आपको एक संरचित चिकित्सा केस तैयार करने में मदद करूंगा। कृपया आज आपको यहां लाने वाली मुख्य स्वास्थ्य समस्या बताएं।",
    initialAyurveda:
      "नमस्ते। मैं आपको एक संरचित आयुर्वेदिक स्वास्थ्य केस तैयार करने में मदद करूंगा। कृपया आज आपको यहां लाने वाली मुख्य स्वास्थ्य समस्या बताएं।",

    qWhenBegin:
      "धन्यवाद। यह समस्या पहली बार कब शुरू हुई?",
    qTemperature:
      "आपने सबसे अधिक तापमान कितना मापा और आपने उसे कैसे मापा?",
    qBreathing:
      "आपने सांस लेने में कठिनाई बताई है। कृपया बताएं कि यह कब होती है और क्या यह बढ़ रही है?",
    qChest:
      "सीने की परेशानी का वर्णन करें — यह कब शुरू हुई, कहां महसूस होती है और किस चीज से बेहतर या खराब होती है।",
    qFrequency:
      "यह समस्या कितनी बार होती है?",
    qWorse:
      "इस समस्या को क्या बढ़ाता है?",
    qBetter:
      "इस समस्या को क्या बेहतर करता है या राहत देता है?",
    qAssociated:
      "क्या इस समस्या के साथ आपको कोई अन्य लक्षण भी हैं?",
    qSeverity:
      "धन्यवाद। संबंधित लक्षण दर्ज कर लिए गए हैं। आपकी मुख्य समस्या कितनी गंभीर है — हल्की, मध्यम या गंभीर?",
    qRecordedSeverity:
      "धन्यवाद। गंभीरता दर्ज कर ली गई है। अब आप केस सारांश की समीक्षा जारी रख सकते हैं।",
    qMoreDetail:
      "धन्यवाद। क्या आप इस समस्या के बारे में थोड़ी और जानकारी दे सकते हैं?",

    difficultyBreathing: "सांस लेने में कठिनाई दर्ज की गई",
    chestDiscomfort: "सीने की परेशानी दर्ज की गई",

    mild: "हल्की",
    moderate: "मध्यम",
    severe: "गंभीर",
  },

  gu: {
    aiCaseTaking: "AI કેસ-ટેકિંગ",
    aiAssisted: "AI સહાયિત",
    answerNaturally:
      "સ્વાભાવિક રીતે જવાબ આપો. તમારા જવાબોના આધારે સહાયક આગળના પ્રશ્નો પૂછશે.",
    exitCase: "કેસમાંથી બહાર નીકળો",
    caseCompletion: "કેસ પૂર્ણતા",
    informationCollected: "માહિતી એકત્રિત",
    caseId: "કેસ ID",
    jeevanAI: "જીવન AI",
    you: "તમે",
    assistant: "જીવન AI સહાયક",
    sessionActive: "કેસ-ટેકિંગ સત્ર સક્રિય છે",
    typeAnswer: "તમારો જવાબ અહીં લખો...",
    voiceInput: "વૉઇસ ઇનપુટ",
    listening: "સાંભળી રહ્યું છે... સ્વાભાવિક રીતે બોલો.",
    pressEnter:
      "મોકલવા માટે Enter દબાવો • ઉપલબ્ધ હોય ત્યારે વૉઇસ ઇનપુટનો ઉપયોગ કરી શકાય છે",
    informationCheck: "માહિતી તપાસ",
    missingDetails: "AI એ કેટલીક માહિતીની અછત શોધી છે",
    noMissing:
      "કોઈ મહત્વપૂર્ણ માહિતી ખૂટતી જોવા મળી નથી.",
    redFlagMonitor: "રેડ-ફ્લેગ મોનિટર",
    importantInfo: "સંભવિત રીતે મહત્વપૂર્ણ માહિતી",
    attention: "ધ્યાન આપો",
    additionalClinical:
      "વધારાની તબીબી માહિતી જરૂરી હોઈ શકે છે. ડૉક્ટરની સમીક્ષા કરવાની ભલામણ કરવામાં આવે છે.",
    noRedFlags:
      "વર્તમાન માહિતીમાંથી કોઈ રેડ ફ્લેગ મળ્યો નથી.",
    caseWorkflow: "કેસ પ્રક્રિયા",
    caseStarted: "કેસ શરૂ",
    aiCaseTaking: "AI કેસ-ટેકિંગ",
    informationCheckStep: "માહિતી તપાસ",
    aiSummary: "AI સારાંશ",
    doctorReview: "ડૉક્ટરની સમીક્ષા",
    doctorApproval: "ડૉક્ટરની મંજૂરી",
    readyFinish: "કેસ પૂર્ણ કરવા માટે તૈયાર છો?",
    preparedForReview:
      "માહિતી ડૉક્ટરની સમીક્ષા માટે તૈયાર કરવામાં આવશે.",
    continueSummary: "કેસ સારાંશ પર આગળ વધો",

    patient: "દર્દી",
    now: "હમણાં",

    duration: "લક્ષણોનો સમયગાળો",
    temperature: "વર્તમાન તાપમાન",
    associatedSymptoms: "સંબંધિત લક્ષણો",
    temperatureReading: "તાપમાનનું માપન",
    durationFever: "તાવનો સમયગાળો",
    frequency: "આવર્તન",
    aggravating: "તકલીફ વધારતા પરિબળો",
    relieving: "રાહત આપતા પરિબળો",
    severity: "તીવ્રતા",
    additionalClinicalDetails: "વધારાની તબીબી માહિતી",

    initialGeneral:
      "નમસ્તે. હું તમને એક સંરચિત તબીબી કેસ તૈયાર કરવામાં મદદ કરીશ. કૃપા કરીને આજે તમને અહીં લાવતી મુખ્ય આરોગ્ય સમસ્યા જણાવો.",
    initialAyurveda:
      "નમસ્તે. હું તમને એક સંરચિત આયુર્વેદિક આરોગ્ય કેસ તૈયાર કરવામાં મદદ કરીશ. કૃપા કરીને આજે તમને અહીં લાવતી મુખ્ય આરોગ્ય સમસ્યા જણાવો.",

    qWhenBegin:
      "આભાર. આ સમસ્યા પહેલી વાર ક્યારે શરૂ થઈ?",
    qTemperature:
      "તમે માપેલું સૌથી વધુ તાપમાન કેટલું હતું અને તમે તે કેવી રીતે માપ્યું?",
    qBreathing:
      "તમે શ્વાસ લેવામાં તકલીફ જણાવી છે. તે ક્યારે થાય છે અને શું તે વધી રહી છે તે જણાવી શકો છો?",
    qChest:
      "છાતીમાં થતી અસ્વસ્થતાનું વર્ણન કરો — તે ક્યારે શરૂ થઈ, ક્યાં અનુભવાય છે અને શેનાથી સારી કે ખરાબ થાય છે.",
    qFrequency:
      "આ સમસ્યા કેટલી વાર થાય છે?",
    qWorse:
      "આ સમસ્યા શેનાથી વધુ ખરાબ થાય છે?",
    qBetter:
      "આ સમસ્યા શેનાથી સારી થાય છે અથવા રાહત મળે છે?",
    qAssociated:
      "આ સમસ્યા સાથે તમને અન્ય કોઈ લક્ષણો છે?",
    qSeverity:
      "આભાર. સંબંધિત લક્ષણો નોંધવામાં આવ્યા છે. તમારી મુખ્ય સમસ્યા કેટલી ગંભીર છે — હળવી, મધ્યમ કે ગંભીર?",
    qRecordedSeverity:
      "આભાર. તીવ્રતા નોંધવામાં આવી છે. હવે તમે કેસ સારાંશની સમીક્ષા ચાલુ રાખી શકો છો.",
    qMoreDetail:
      "આભાર. શું તમે આ સમસ્યા વિશે થોડી વધુ માહિતી આપી શકો છો?",

    difficultyBreathing: "શ્વાસ લેવામાં તકલીફ નોંધાઈ",
    chestDiscomfort: "છાતીમાં અસ્વસ્થતા નોંધાઈ",

    mild: "હળવી",
    moderate: "મધ્યમ",
    severe: "ગંભીર",
  },

  kn: {
    aiCaseTaking: "AI ಕೇಸ್-ಟೇಕಿಂಗ್",
    aiAssisted: "AI ಸಹಾಯಿತ",
    answerNaturally:
      "ಸ್ವಾಭಾವಿಕವಾಗಿ ಉತ್ತರಿಸಿ. ನಿಮ್ಮ ಉತ್ತರಗಳ ಆಧಾರದ ಮೇಲೆ ಸಹಾಯಕರು ಮುಂದಿನ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳುತ್ತಾರೆ.",
    exitCase: "ಕೇಸ್‌ನಿಂದ ನಿರ್ಗಮಿಸಿ",
    caseCompletion: "ಕೇಸ್ ಪೂರ್ಣತೆ",
    informationCollected: "ಮಾಹಿತಿ ಸಂಗ್ರಹಿಸಲಾಗಿದೆ",
    caseId: "ಕೇಸ್ ID",
    jeevanAI: "ಜೀವನ್ AI",
    you: "ನೀವು",
    assistant: "ಜೀವನ್ AI ಸಹಾಯಕ",
    sessionActive: "ಕೇಸ್-ಟೇಕಿಂಗ್ ಸೆಷನ್ ಸಕ್ರಿಯವಾಗಿದೆ",
    typeAnswer: "ನಿಮ್ಮ ಉತ್ತರವನ್ನು ಇಲ್ಲಿ ಬರೆಯಿರಿ...",
    voiceInput: "ಧ್ವನಿ ಇನ್‌ಪುಟ್",
    listening: "ಆಲಿಸಲಾಗುತ್ತಿದೆ... ಸ್ವಾಭಾವಿಕವಾಗಿ ಮಾತನಾಡಿ.",
    pressEnter:
      "ಕಳುಹಿಸಲು Enter ಒತ್ತಿರಿ • ಲಭ್ಯವಿದ್ದಾಗ ಧ್ವನಿ ಇನ್‌ಪುಟ್ ಬಳಸಬಹುದು",
    informationCheck: "ಮಾಹಿತಿ ಪರಿಶೀಲನೆ",
    missingDetails: "AI ಕೆಲವು ಮಾಹಿತಿಯ ಕೊರತೆಯನ್ನು ಗುರುತಿಸಿದೆ",
    noMissing:
      "ಯಾವುದೇ ಪ್ರಮುಖ ಮಾಹಿತಿ ಕೊರತೆ ಕಂಡುಬಂದಿಲ್ಲ.",
    redFlagMonitor: "ರೆಡ್-ಫ್ಲ್ಯಾಗ್ ಮೇಲ್ವಿಚಾರಣೆ",
    importantInfo: "ಸಂಭಾವ್ಯವಾಗಿ ಪ್ರಮುಖ ಮಾಹಿತಿ",
    attention: "ಗಮನಿಸಿ",
    additionalClinical:
      "ಹೆಚ್ಚುವರಿ ವೈದ್ಯಕೀಯ ಮಾಹಿತಿ ಅಗತ್ಯವಾಗಬಹುದು. ವೈದ್ಯರ ಪರಿಶೀಲನೆಯನ್ನು ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ.",
    noRedFlags:
      "ಪ್ರಸ್ತುತ ಮಾಹಿತಿಯಿಂದ ಯಾವುದೇ ರೆಡ್ ಫ್ಲ್ಯಾಗ್ ಕಂಡುಬಂದಿಲ್ಲ.",
    caseWorkflow: "ಕೇಸ್ ಪ್ರಕ್ರಿಯೆ",
    caseStarted: "ಕೇಸ್ ಪ್ರಾರಂಭವಾಗಿದೆ",
    aiCaseTaking: "AI ಕೇಸ್-ಟೇಕಿಂಗ್",
    informationCheckStep: "ಮಾಹಿತಿ ಪರಿಶೀಲನೆ",
    aiSummary: "AI ಸಾರಾಂಶ",
    doctorReview: "ವೈದ್ಯರ ಪರಿಶೀಲನೆ",
    doctorApproval: "ವೈದ್ಯರ ಅನುಮೋದನೆ",
    readyFinish: "ಕೇಸ್ ಪೂರ್ಣಗೊಳಿಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ?",
    preparedForReview:
      "ಮಾಹಿತಿಯನ್ನು ವೈದ್ಯರ ಪರಿಶೀಲನೆಗಾಗಿ ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತದೆ.",
    continueSummary: "ಕೇಸ್ ಸಾರಾಂಶಕ್ಕೆ ಮುಂದುವರಿಯಿರಿ",

    patient: "ರೋಗಿ",
    now: "ಈಗ",

    duration: "ಲಕ್ಷಣಗಳ ಅವಧಿ",
    temperature: "ಪ್ರಸ್ತುತ ತಾಪಮಾನ",
    associatedSymptoms: "ಸಂಬಂಧಿತ ಲಕ್ಷಣಗಳು",
    temperatureReading: "ತಾಪಮಾನ ಮಾಪನ",
    durationFever: "ಜ್ವರದ ಅವಧಿ",
    frequency: "ಆವರ್ತನೆ",
    aggravating: "ತೊಂದರೆ ಹೆಚ್ಚಿಸುವ ಅಂಶಗಳು",
    relieving: "ಪರಿಹಾರ ನೀಡುವ ಅಂಶಗಳು",
    severity: "ತೀವ್ರತೆ",
    additionalClinicalDetails: "ಹೆಚ್ಚುವರಿ ವೈದ್ಯಕೀಯ ಮಾಹಿತಿ",

    initialGeneral:
      "ನಮಸ್ಕಾರ. ಸಂರಚಿತ ವೈದ್ಯಕೀಯ ಕೇಸ್ ರಚಿಸಲು ನಾನು ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತೇನೆ. ಇಂದು ನಿಮ್ಮನ್ನು ಇಲ್ಲಿಗೆ ಕರೆತಂದ ಮುಖ್ಯ ಆರೋಗ್ಯ ಸಮಸ್ಯೆಯನ್ನು ವಿವರಿಸಿ.",
    initialAyurveda:
      "ನಮಸ್ಕಾರ. ಸಂರಚಿತ ಆಯುರ್ವೇದಿಕ ಆರೋಗ್ಯ ಕೇಸ್ ರಚಿಸಲು ನಾನು ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತೇನೆ. ಇಂದು ನಿಮ್ಮನ್ನು ಇಲ್ಲಿಗೆ ಕರೆತಂದ ಮುಖ್ಯ ಆರೋಗ್ಯ ಸಮಸ್ಯೆಯನ್ನು ವಿವರಿಸಿ.",

    qWhenBegin:
      "ಧನ್ಯವಾದಗಳು. ಈ ಸಮಸ್ಯೆ ಮೊದಲ ಬಾರಿಗೆ ಯಾವಾಗ ಪ್ರಾರಂಭವಾಯಿತು?",
    qTemperature:
      "ನೀವು ಅಳೆಯಿದ ಗರಿಷ್ಠ ತಾಪಮಾನ ಎಷ್ಟು ಮತ್ತು ಅದನ್ನು ಹೇಗೆ ಅಳೆಯಲಾಯಿತು?",
    qBreathing:
      "ನೀವು ಉಸಿರಾಟದ ತೊಂದರೆಯನ್ನು ತಿಳಿಸಿದ್ದಾರೆ. ಅದು ಯಾವಾಗ ಸಂಭವಿಸುತ್ತದೆ ಮತ್ತು ಅದು ಹೆಚ್ಚಾಗುತ್ತಿದೆಯೇ ಎಂದು ವಿವರಿಸಬಹುದೇ?",
    qChest:
      "ಎದೆ ಅಸ್ವಸ್ಥತೆಯನ್ನು ವಿವರಿಸಿ — ಅದು ಯಾವಾಗ ಪ್ರಾರಂಭವಾಯಿತು, ಎಲ್ಲಿ ಅನುಭವವಾಗುತ್ತದೆ ಮತ್ತು ಯಾವುದರಿಂದ ಉತ್ತಮವಾಗುತ್ತದೆ ಅಥವಾ ಕೆಟ್ಟದಾಗುತ್ತದೆ.",
    qFrequency:
      "ಈ ಸಮಸ್ಯೆ ಎಷ್ಟು ಬಾರಿ ಸಂಭವಿಸುತ್ತದೆ?",
    qWorse:
      "ಈ ಸಮಸ್ಯೆಯನ್ನು ಯಾವುದು ಹೆಚ್ಚಿಸುತ್ತದೆ?",
    qBetter:
      "ಈ ಸಮಸ್ಯೆಯನ್ನು ಯಾವುದು ಉತ್ತಮಗೊಳಿಸುತ್ತದೆ ಅಥವಾ ಪರಿಹಾರ ನೀಡುತ್ತದೆ?",
    qAssociated:
      "ಈ ಸಮಸ್ಯೆಯೊಂದಿಗೆ ನಿಮಗೆ ಬೇರೆ ಯಾವುದೇ ಲಕ್ಷಣಗಳಿವೆಯೇ?",
    qSeverity:
      "ಧನ್ಯವಾದಗಳು. ಸಂಬಂಧಿತ ಲಕ್ಷಣಗಳನ್ನು ದಾಖಲಿಸಲಾಗಿದೆ. ನಿಮ್ಮ ಮುಖ್ಯ ಸಮಸ್ಯೆ ಎಷ್ಟು ತೀವ್ರವಾಗಿದೆ — ಸೌಮ್ಯ, ಮಧ್ಯಮ ಅಥವಾ ತೀವ್ರ?",
    qRecordedSeverity:
      "ಧನ್ಯವಾದಗಳು. ತೀವ್ರತೆಯನ್ನು ದಾಖಲಿಸಲಾಗಿದೆ. ಈಗ ನೀವು ಕೇಸ್ ಸಾರಾಂಶವನ್ನು ಪರಿಶೀಲಿಸುವುದನ್ನು ಮುಂದುವರಿಸಬಹುದು.",
    qMoreDetail:
      "ಧನ್ಯವಾದಗಳು. ಈ ಸಮಸ್ಯೆಯ ಬಗ್ಗೆ ಇನ್ನಷ್ಟು ವಿವರಗಳನ್ನು ನೀಡಬಹುದೇ?",

    difficultyBreathing: "ಉಸಿರಾಟದ ತೊಂದರೆ ದಾಖಲಾಗಿದೆ",
    chestDiscomfort: "ಎದೆ ಅಸ್ವಸ್ಥತೆ ದಾಖಲಾಗಿದೆ",

    mild: "ಸೌಮ್ಯ",
    moderate: "ಮಧ್ಯಮ",
    severe: "ತೀವ್ರ",
  },

  ta: {
    aiCaseTaking: "AI வழக்கு பதிவு",
    aiAssisted: "AI உதவியுடன்",
    answerNaturally:
      "இயல்பாக பதிலளிக்கவும். உங்கள் பதில்களின் அடிப்படையில் உதவியாளர் தொடர்ந்து கேள்விகளைக் கேட்பார்.",
    exitCase: "வழக்கிலிருந்து வெளியேறு",
    caseCompletion: "வழக்கு நிறைவு",
    informationCollected: "தகவல் சேகரிக்கப்பட்டது",
    caseId: "வழக்கு ID",
    jeevanAI: "ஜீவன் AI",
    you: "நீங்கள்",
    assistant: "ஜீவன் AI உதவியாளர்",
    sessionActive: "வழக்கு பதிவு அமர்வு செயலில் உள்ளது",
    typeAnswer: "உங்கள் பதிலை இங்கே எழுதுங்கள்...",
    voiceInput: "குரல் உள்ளீடு",
    listening: "கேட்கிறது... இயல்பாகப் பேசுங்கள்.",
    pressEnter:
      "அனுப்ப Enter அழுத்தவும் • கிடைக்கும் போது குரல் உள்ளீட்டைப் பயன்படுத்தலாம்",
    informationCheck: "தகவல் சரிபார்ப்பு",
    missingDetails: "AI சில தகவல்கள் விடுபட்டிருப்பதை கண்டறிந்துள்ளது",
    noMissing:
      "முக்கியமான தகவல் எதுவும் விடுபட்டதாக கண்டறியப்படவில்லை.",
    redFlagMonitor: "அபாய அறிகுறி கண்காணிப்பு",
    importantInfo: "முக்கியமானதாக இருக்கக்கூடிய தகவல்",
    attention: "கவனம்",
    additionalClinical:
      "கூடுதல் மருத்துவ தகவல் தேவைப்படலாம். மருத்துவர் பரிசீலனை பரிந்துரைக்கப்படுகிறது.",
    noRedFlags:
      "தற்போதைய தகவலில் எந்த அபாய அறிகுறிகளும் கண்டறியப்படவில்லை.",
    caseWorkflow: "வழக்கு செயல்முறை",
    caseStarted: "வழக்கு தொடங்கியது",
    aiCaseTaking: "AI வழக்கு பதிவு",
    informationCheckStep: "தகவல் சரிபார்ப்பு",
    aiSummary: "AI சுருக்கம்",
    doctorReview: "மருத்துவர் பரிசீலனை",
    doctorApproval: "மருத்துவர் ஒப்புதல்",
    readyFinish: "வழக்கை முடிக்கத் தயாரா?",
    preparedForReview:
      "தகவல் மருத்துவர் பரிசீலனைக்காகத் தயாரிக்கப்படும்.",
    continueSummary: "வழக்கு சுருக்கத்திற்குச் செல்லவும்",

    patient: "நோயாளர்",
    now: "இப்போது",

    duration: "அறிகுறிகளின் காலம்",
    temperature: "தற்போதைய வெப்பநிலை",
    associatedSymptoms: "தொடர்புடைய அறிகுறிகள்",
    temperatureReading: "வெப்பநிலை அளவீடு",
    durationFever: "காய்ச்சலின் காலம்",
    frequency: "அடிக்கடி நிகழ்தல்",
    aggravating: "பிரச்சினையை மோசமாக்கும் காரணிகள்",
    relieving: "நிவாரணம் தரும் காரணிகள்",
    severity: "தீவிரம்",
    additionalClinicalDetails: "கூடுதல் மருத்துவ தகவல்",

    initialGeneral:
      "வணக்கம். கட்டமைக்கப்பட்ட மருத்துவ வழக்கை உருவாக்க நான் உங்களுக்கு உதவுகிறேன். இன்று உங்களை இங்கு அழைத்து வந்த முக்கிய உடல்நலப் பிரச்சினையை விவரிக்கவும்.",
    initialAyurveda:
      "வணக்கம். கட்டமைக்கப்பட்ட ஆயுர்வேத சுகாதார வழக்கை உருவாக்க நான் உங்களுக்கு உதவுகிறேன். இன்று உங்களை இங்கு அழைத்து வந்த முக்கிய உடல்நலப் பிரச்சினையை விவரிக்கவும்.",

    qWhenBegin:
      "நன்றி. இந்தப் பிரச்சினை முதலில் எப்போது தொடங்கியது?",
    qTemperature:
      "நீங்கள் அளந்த அதிகபட்ச வெப்பநிலை என்ன, அதை எவ்வாறு அளந்தீர்கள்?",
    qBreathing:
      "நீங்கள் சுவாசிப்பதில் சிரமம் இருப்பதாகக் கூறியுள்ளீர்கள். அது எப்போது ஏற்படுகிறது, மேலும் அது மோசமாகி வருகிறதா என்பதை விவரிக்க முடியுமா?",
    qChest:
      "மார்பு அசௌகரியத்தை விவரிக்கவும் — அது எப்போது தொடங்கியது, எங்கு உணரப்படுகிறது, மேலும் எதனால் நன்றாகவோ மோசமாகவோ ஆகிறது.",
    qFrequency:
      "இந்தப் பிரச்சினை எவ்வளவு அடிக்கடி ஏற்படுகிறது?",
    qWorse:
      "இந்தப் பிரச்சினையை எது மோசமாக்குகிறது?",
    qBetter:
      "இந்தப் பிரச்சினையை எது மேம்படுத்துகிறது அல்லது நிவாரணம் அளிக்கிறது?",
    qAssociated:
      "இந்தப் பிரச்சினையுடன் வேறு ஏதேனும் அறிகுறிகள் உள்ளனவா?",
    qSeverity:
      "நன்றி. தொடர்புடைய அறிகுறிகள் பதிவு செய்யப்பட்டுள்ளன. உங்கள் முக்கிய பிரச்சினையின் தீவிரம் எவ்வளவு — லேசானதா, மிதமானதா அல்லது தீவிரமானதா?",
    qRecordedSeverity:
      "நன்றி. தீவிரம் பதிவு செய்யப்பட்டுள்ளது. இப்போது வழக்கு சுருக்கத்தை தொடர்ந்து மதிப்பாய்வு செய்யலாம்.",
    qMoreDetail:
      "நன்றி. இந்தப் பிரச்சினையைப் பற்றி இன்னும் கொஞ்சம் விவரிக்க முடியுமா?",

    difficultyBreathing: "சுவாசிப்பதில் சிரமம் பதிவு செய்யப்பட்டது",
    chestDiscomfort: "மார்பு அசௌகரியம் பதிவு செய்யப்பட்டது",

    mild: "லேசான",
    moderate: "மிதமான",
    severe: "தீவிரமான",
  },
};

export default function CaseTakingPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { language } = useLanguage();

  const t =
    caseTakingTranslations[language] ||
    caseTakingTranslations.en;

  const system =
    searchParams.get("system") || "general-medicine";

  const isAyurveda = system === "ayurveda";

  const accent = isAyurveda ? "#059669" : "#0891b2";

  // ---------------------------------------------------------
  // LOGGED-IN PATIENT
  // ---------------------------------------------------------

  const storedUser = localStorage.getItem("jeevanUser");

  let currentUser = null;

  try {
    currentUser = storedUser
      ? JSON.parse(storedUser)
      : null;
  } catch {
    currentUser = null;
  }

  const patientName =
    currentUser?.patientName ||
    currentUser?.name ||
    currentUser?.fullName ||
    t.patient;

  const healthId =
    currentUser?.healthId || null;

  // ---------------------------------------------------------
  // MESSAGES
  // ---------------------------------------------------------

  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      text: isAyurveda
        ? t.initialAyurveda
        : t.initialGeneral,
      time: t.now,
    },
  ]);

  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [progress, setProgress] = useState(12);

  const [missingInfo, setMissingInfo] = useState([
    t.duration,
    t.temperature,
    t.associatedSymptoms,
  ]);

  const [redFlags, setRedFlags] = useState([]);

  const systemLabel = useMemo(
    () =>
      isAyurveda
        ? t.ayurveda || "Ayurveda"
        : t.generalMedicine || "General Medicine",
    [isAyurveda, t]
  );

  // ---------------------------------------------------------
  // SEND MESSAGE
  // ---------------------------------------------------------

  const handleSend = () => {
    const value = input.trim();

    if (!value) return;

    // Prevent accidentally submitting the exact same answer twice
    const lastPatientMessage = [...messages]
      .reverse()
      .find((message) => message.type === "patient");

    if (
      lastPatientMessage &&
      lastPatientMessage.text.trim().toLowerCase() ===
        value.toLowerCase()
    ) {
      setInput("");
      return;
    }

    const patientMessage = {
      id: Date.now(),
      type: "patient",
      text: value,
      time: t.now,
    };

    const patientCount = messages.filter(
      (message) => message.type === "patient"
    ).length;

    // Add patient answer
    setMessages((current) => [
      ...current,
      patientMessage,
    ]);

    // Clear input
    setInput("");

    setTimeout(() => {
      const lower = value.toLowerCase();

      let nextQuestion = t.qWhenBegin;

      let newMissing = [
        t.duration,
        t.associatedSymptoms,
      ];

      let detectedRedFlags = [];

      // ---------------------------------------------
      // RED FLAGS
      // ---------------------------------------------

      if (
        lower.includes("difficulty breathing") ||
        lower.includes("breathlessness") ||
        lower.includes("shortness of breath") ||
        lower.includes("can't breathe") ||
        lower.includes("cannot breathe")
      ) {
        nextQuestion = t.qBreathing;

        detectedRedFlags = [
          t.difficultyBreathing,
        ];
      }

      else if (
        lower.includes("chest pain") ||
        lower.includes("chest discomfort")
      ) {
        nextQuestion = t.qChest;

        detectedRedFlags = [
          t.chestDiscomfort,
        ];
      }

      // ---------------------------------------------
      // FIRST PATIENT RESPONSE
      // ---------------------------------------------

      else if (patientCount === 0) {
        if (
          lower.includes("fever") ||
          lower.includes("temperature")
        ) {
          nextQuestion = t.qTemperature;

          newMissing = [
            t.temperatureReading,
            t.durationFever,
            t.associatedSymptoms,
          ];
        } else {
          nextQuestion = t.qWhenBegin;

          newMissing = [
            t.duration,
            t.associatedSymptoms,
          ];
        }
      }

      // ---------------------------------------------
      // TEMPERATURE ANSWER
      // ---------------------------------------------

      else if (
        lower.includes("degree") ||
        lower.includes("celsius") ||
        lower.includes("fahrenheit") ||
        /\b\d{2,3}\s*(°|degrees?)?\s*(c|f)?\b/.test(lower)
      ) {
        nextQuestion = t.qWhenBegin;

        newMissing = [
          t.duration,
          t.associatedSymptoms,
        ];
      }

      // ---------------------------------------------
      // DURATION / ONSET
      // ---------------------------------------------

      else if (
        lower.includes("day") ||
        lower.includes("days") ||
        lower.includes("week") ||
        lower.includes("weeks") ||
        lower.includes("month") ||
        lower.includes("months") ||
        lower.includes("year") ||
        lower.includes("years") ||
        lower.includes("ago") ||
        lower.includes("started") ||
        lower.includes("began") ||
        lower.includes("since yesterday") ||
        lower.includes("since today")
      ) {
        nextQuestion = t.qFrequency;

        newMissing = [
          t.frequency,
          t.aggravating,
          t.relieving,
          t.associatedSymptoms,
        ];
      }

      // ---------------------------------------------
      // FREQUENCY
      // ---------------------------------------------

      else if (
        lower.includes("occasionally") ||
        lower.includes("sometimes") ||
        lower.includes("frequently") ||
        lower.includes("often") ||
        lower.includes("daily") ||
        lower.includes("constant") ||
        lower.includes("regularly") ||
        lower.includes("rarely") ||
        lower.includes("once a day") ||
        lower.includes("twice a day") ||
        lower.includes("every day")
      ) {
        nextQuestion = t.qWorse;

        newMissing = [
          t.aggravating,
          t.relieving,
          t.associatedSymptoms,
        ];
      }

      // ---------------------------------------------
      // AGGRAVATING FACTORS
      // ---------------------------------------------

      else if (
        lower.includes("worse") ||
        lower.includes("aggravated") ||
        lower.includes("aggravate") ||
        lower.includes("increase") ||
        lower.includes("increases") ||
        lower.includes("after eating") ||
        lower.includes("when i eat") ||
        lower.includes("when I eat".toLowerCase()) ||
        lower.includes("when bending") ||
        lower.includes("during activity")
      ) {
        nextQuestion = t.qBetter;

        newMissing = [
          t.relieving,
          t.associatedSymptoms,
        ];
      }

      // ---------------------------------------------
      // RELIEVING FACTORS
      // ---------------------------------------------

      else if (
        lower.includes("better") ||
        lower.includes("relief") ||
        lower.includes("relieved") ||
        lower.includes("improves") ||
        lower.includes("improve") ||
        lower.includes("rest") ||
        lower.includes("sleep") ||
        lower.includes("lying down") ||
        lower.includes("warm water") ||
        lower.includes("medicine helps")
      ) {
        nextQuestion = t.qAssociated;

        newMissing = [
          t.associatedSymptoms,
          t.severity,
        ];
      }

      // ---------------------------------------------
      // ASSOCIATED SYMPTOMS
      // ---------------------------------------------

      else if (
        lower.includes("bloating") ||
        lower.includes("bloated") ||
        lower.includes("dizziness") ||
        lower.includes("dizzy") ||
        lower.includes("nausea") ||
        lower.includes("vomiting") ||
        lower.includes("vomit") ||
        lower.includes("weakness") ||
        lower.includes("fatigue") ||
        lower.includes("tired") ||
        lower.includes("stiffness") ||
        lower.includes("sweating") ||
        lower.includes("chills") ||
        lower.includes("cough") ||
        lower.includes("cold") ||
        lower.includes("headache") ||
        lower.includes("sore throat") ||
        lower.includes("body ache") ||
        lower.includes("body pain") ||
        lower.includes("also have") ||
        lower.includes("also has") ||
        lower.includes("also having") ||
        lower.includes("along with") ||
        lower.includes("other symptoms") ||
        lower.includes("associated with")
      ) {
        nextQuestion = t.qSeverity;

        newMissing = [
          t.severity,
        ];
      }

      // ---------------------------------------------
      // SEVERITY
      // ---------------------------------------------

      else if (
        lower === "mild" ||
        lower === "moderate" ||
        lower === "severe" ||
        lower.includes("mild pain") ||
        lower.includes("moderate pain") ||
        lower.includes("severe pain") ||
        lower.includes("very painful") ||
        lower.includes("very severe")
      ) {
        nextQuestion = t.qRecordedSeverity;

        newMissing = [];
      }

      // ---------------------------------------------
      // DEFAULT
      // ---------------------------------------------

      else {
        nextQuestion = t.qMoreDetail;

        newMissing = [
          t.additionalClinicalDetails,
        ];
      }

      const aiMessage = {
        id: Date.now() + 1,
        type: "ai",
        text: nextQuestion,
        time: t.now,
      };

      setMessages((current) => [
        ...current,
        aiMessage,
      ]);

      setMissingInfo(newMissing);

      // Preserve previous red flags
      if (detectedRedFlags.length > 0) {
        setRedFlags((current) => [
          ...new Set([
            ...current,
            ...detectedRedFlags,
          ]),
        ]);
      }

      setProgress((current) =>
        Math.min(current + 8, 82)
      );
    }, 500);
  };

  // ---------------------------------------------------------
  // KEYBOARD
  // ---------------------------------------------------------

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  // ---------------------------------------------------------
  // VOICE
  // ---------------------------------------------------------

  const toggleListening = () => {
    setIsListening((current) => !current);
  };

  // ---------------------------------------------------------
  // FINISH CASE
  // ---------------------------------------------------------

  const handleFinish = () => {
    const caseData = {
      system: system,
      systemLabel: systemLabel,

      // Keep the existing case ID for compatibility
      caseId: "JC-DEMO-001",

      // Patient identity
      patientName: patientName,
      patientId: healthId,

      // Also provide a patient object
      patient: {
        name: patientName,
        healthId: healthId,
      },

      // Case workflow status
      verificationStatus: "Awaiting Review",

      // Case creation timestamp
      createdAt: new Date().toISOString(),

      // Conversation data
      messages: messages,

      // Clinical information
      missingInfo: missingInfo,
      redFlags: redFlags,

      // Progress
      progress: progress,
    };

    const serializedCaseData =
      JSON.stringify(caseData);

    // Keep the case available in the current browser session
    sessionStorage.setItem(
      "jeevanCaseData",
      serializedCaseData
    );

    // Also persist it
    localStorage.setItem(
      "jeevanCaseData",
      serializedCaseData
    );

    navigate(
      `/patient/case-summary?system=${system}`
    );
  };

  return (
    <div className="container-fluid px-0">

      {/* =====================================================
          HEADER
          ===================================================== */}

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
            {t.aiCaseTaking}
          </div>

          <div className="d-flex align-items-center gap-3">

            <h1
              className="fw-bold mb-0"
              style={{
                fontSize: "30px",
              }}
            >
              {systemLabel} Case
            </h1>

            <span
              className="badge rounded-pill"
              style={{
                color: accent,
                background: isAyurveda
                  ? "rgba(5,150,105,0.10)"
                  : "rgba(8,145,178,0.10)",
                border:
                  isAyurveda
                    ? "1px solid rgba(5,150,105,0.20)"
                    : "1px solid rgba(8,145,178,0.20)",
              }}
            >
              <i className="bi bi-stars me-1" />
              {t.aiAssisted}
            </span>

          </div>

          <p
            className="mb-0 mt-2"
            style={{
              color: "var(--jc-muted)",
              fontSize: "14px",
            }}
          >
            {t.answerNaturally}
          </p>

        </div>

        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() =>
            navigate("/patient/new-case")
          }
        >
          <i className="bi bi-arrow-left me-2" />
          {t.exitCase}
        </button>

      </div>


      {/* =====================================================
          PROGRESS
          ===================================================== */}

      <div className="jc-dashboard-card mb-4">

        <div className="d-flex justify-content-between align-items-center mb-2">

          <div>

            <span
              className="fw-semibold"
              style={{
                color: "var(--jc-text)",
                fontSize: "13px",
              }}
            >
              {t.caseCompletion}
            </span>

            <span
              className="ms-2"
              style={{
                color: "var(--jc-muted)",
                fontSize: "12px",
              }}
            >
              {progress}%
            </span>

          </div>

          <span
            style={{
              color: "var(--jc-muted)",
              fontSize: "11px",
            }}
          >
            {t.informationCollected}
          </span>

        </div>

        <div
          style={{
            height: "7px",
            background: "var(--jc-panel-elevated)",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >

          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: accent,
              borderRadius: "20px",
              transition: "width 0.4s ease",
            }}
          />

        </div>

      </div>


      {/* =====================================================
          MAIN WORKSPACE
          ===================================================== */}

      <div className="row g-4">

        {/* ===================================================
            CHAT
            =================================================== */}

        <div className="col-xl-8">

          <div
            className="jc-dashboard-card p-0 overflow-hidden"
            style={{
              minHeight: "610px",
              display: "flex",
              flexDirection: "column",
            }}
          >

            {/* CHAT HEADER */}

            <div
              className="px-4 py-3 d-flex justify-content-between align-items-center"
              style={{
                borderBottom:
                  "1px solid var(--jc-border)",
              }}
            >

              <div className="d-flex align-items-center gap-3">

                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "12px",
                    background: isAyurveda
                      ? "rgba(5,150,105,0.10)"
                      : "rgba(8,145,178,0.10)",
                    color: accent,
                  }}
                >
                  <i
                    className="bi bi-stars"
                    style={{ fontSize: "19px" }}
                  />
                </div>

                <div>

                  <div
                    className="fw-semibold"
                    style={{
                      color: "var(--jc-text)",
                    }}
                  >
                    {t.assistant}
                  </div>

                  <div
                    className="d-flex align-items-center gap-2"
                    style={{
                      color: "var(--jc-muted)",
                      fontSize: "11px",
                    }}
                  >
                    <span
                      style={{
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
                        background: "#22c55e",
                        display: "inline-block",
                      }}
                    />

                    {t.sessionActive}

                  </div>

                </div>

              </div>

              <div
                className="small"
                style={{
                  color: "var(--jc-subtle)",
                }}
              >
                {t.caseId}:{" "}

                <span
                  style={{
                    fontFamily: "monospace",
                    color: "var(--jc-muted)",
                  }}
                >
                  JC-DEMO-001
                </span>

              </div>

            </div>


            {/* CHAT BODY */}

            <div
              className="flex-grow-1 p-4"
              style={{
                overflowY: "auto",
                minHeight: "390px",
                maxHeight: "470px",
              }}
            >

              {messages.map((message) => {

                const isAI =
                  message.type === "ai";

                return (
                  <div
                    key={message.id}
                    className={
                      "d-flex mb-4 " +
                      (isAI
                        ? "justify-content-start"
                        : "justify-content-end")
                    }
                  >

                    <div
                      style={{
                        maxWidth: "78%",
                      }}
                    >

                      <div
                        className="d-flex align-items-center gap-2 mb-1"
                        style={{
                          justifyContent: isAI
                            ? "flex-start"
                            : "flex-end",
                        }}
                      >

                        <span
                          style={{
                            color:
                              isAI
                                ? accent
                                : "var(--jc-muted)",
                            fontSize: "10px",
                            fontWeight: "700",
                            textTransform:
                              "uppercase",
                            letterSpacing: "0.6px",
                          }}
                        >
                          {isAI
                            ? t.jeevanAI
                            : t.you}
                        </span>

                      </div>


                      <div
                        style={{
                          padding: "13px 16px",
                          borderRadius: isAI
                            ? "14px 14px 14px 4px"
                            : "14px 14px 4px 14px",

                          background: isAI
                            ? "var(--jc-panel-elevated)"
                            : isAyurveda
                              ? "rgba(5,150,105,0.10)"
                              : "rgba(8,145,178,0.10)",

                          border:
                            isAI
                              ? "1px solid var(--jc-border)"
                              : isAyurveda
                                ? "1px solid rgba(5,150,105,0.18)"
                                : "1px solid rgba(8,145,178,0.18)",

                          color:
                            "var(--jc-text)",

                          fontSize: "13px",

                          lineHeight: "1.6",
                        }}
                      >
                        {message.text}
                      </div>


                      <div
                        style={{
                          color:
                            "var(--jc-subtle)",
                          fontSize: "10px",
                          marginTop: "4px",
                          textAlign: isAI
                            ? "left"
                            : "right",
                        }}
                      >
                        {message.time}
                      </div>

                    </div>

                  </div>
                );
              })}

            </div>


            {/* INPUT AREA */}

            <div
              className="p-3"
              style={{
                borderTop:
                  "1px solid var(--jc-border)",
              }}
            >

              {isListening && (
                <div
                  className="mb-2 px-3 py-2 d-flex align-items-center gap-2"
                  style={{
                    borderRadius: "9px",
                    background:
                      "rgba(244,63,94,0.07)",
                    border:
                      "1px solid rgba(244,63,94,0.18)",
                    color: "#e11d48",
                    fontSize: "11px",
                  }}
                >
                  <span
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      background: "#e11d48",
                    }}
                  />

                  {t.listening}

                </div>
              )}


              <div className="d-flex gap-2">

                <button
                  type="button"
                  onClick={toggleListening}
                  className="jc-theme-toggle"
                  style={{
                    color: isListening
                      ? "#e11d48"
                      : accent,
                    borderColor: isListening
                      ? "rgba(225,29,72,0.30)"
                      : "var(--jc-border)",
                    background:
                      "var(--jc-panel)",
                  }}
                  title={t.voiceInput}
                >
                  <i
                    className={
                      isListening
                        ? "bi bi-mic-fill"
                        : "bi bi-mic"
                    }
                  />
                </button>


                <textarea
                  value={input}
                  onChange={(event) =>
                    setInput(event.target.value)
                  }
                  onKeyDown={handleKeyDown}
                  rows={1}
                  placeholder={t.typeAnswer}
                  className="form-control"
                  style={{
                    resize: "none",
                    minHeight: "42px",
                    maxHeight: "100px",
                  }}
                />


                <button
                  type="button"
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="btn"
                  style={{
                    minWidth: "48px",
                    borderRadius: "9px",
                    background: accent,
                    color: "#ffffff",
                    border: "none",
                    opacity: input.trim()
                      ? 1
                      : 0.45,
                  }}
                >
                  <i className="bi bi-send-fill" />
                </button>

              </div>


              <div
                className="text-center mt-2"
                style={{
                  color: "var(--jc-subtle)",
                  fontSize: "10px",
                }}
              >
                {t.pressEnter}
              </div>

            </div>

          </div>

        </div>


        {/* ===================================================
            CLINICAL STATUS PANEL
            =================================================== */}

        <div className="col-xl-4">

          {/* INFORMATION CHECK */}

          <div className="jc-dashboard-card mb-4">

            <div className="d-flex align-items-center gap-2 mb-3">

              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "9px",
                  background:
                    "rgba(245,158,11,0.10)",
                  color: "#d97706",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="bi bi-search" />
              </div>

              <div>

                <div
                  className="fw-semibold"
                  style={{
                    color:
                      "var(--jc-text)",
                    fontSize: "13px",
                  }}
                >
                  {t.informationCheck}
                </div>

                <div
                  style={{
                    color:
                      "var(--jc-muted)",
                    fontSize: "10px",
                  }}
                >
                  {t.missingDetails}
                </div>

              </div>

            </div>


            {missingInfo.length === 0 ? (

              <div
                className="p-3"
                style={{
                  borderRadius: "9px",
                  background:
                    "rgba(34,197,94,0.08)",
                  color: "#16a34a",
                  fontSize: "12px",
                }}
              >
                <i className="bi bi-check-circle me-2" />
                {t.noMissing}
              </div>

            ) : (

              <div>

                {missingInfo.map((item) => (

                  <div
                    key={item}
                    className="d-flex align-items-center gap-2 mb-2"
                    style={{
                      color:
                        "var(--jc-muted)",
                      fontSize: "11px",
                    }}
                  >
                    <i
                      className="bi bi-dash-circle"
                      style={{
                        color: "#d97706",
                      }}
                    />
                    {item}
                  </div>

                ))}

              </div>

            )}

          </div>


          {/* RED FLAGS */}

          <div
            className="jc-dashboard-card mb-4"
            style={{
              borderColor:
                redFlags.length > 0
                  ? "rgba(225,29,72,0.35)"
                  : "var(--jc-border)",
            }}
          >

            <div className="d-flex align-items-center gap-2 mb-3">

              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "9px",
                  background:
                    redFlags.length > 0
                      ? "rgba(225,29,72,0.10)"
                      : "rgba(34,197,94,0.08)",
                  color:
                    redFlags.length > 0
                      ? "#e11d48"
                      : "#16a34a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i
                  className={
                    redFlags.length > 0
                      ? "bi bi-exclamation-triangle"
                      : "bi bi-shield-check"
                  }
                />
              </div>

              <div>

                <div
                  className="fw-semibold"
                  style={{
                    color:
                      "var(--jc-text)",
                    fontSize: "13px",
                  }}
                >
                  {t.redFlagMonitor}
                </div>

                <div
                  style={{
                    color:
                      "var(--jc-muted)",
                    fontSize: "10px",
                  }}
                >
                  {t.importantInfo}
                </div>

              </div>

            </div>


            {redFlags.length > 0 ? (

              <div
                className="p-3"
                style={{
                  borderRadius: "9px",
                  background:
                    "rgba(225,29,72,0.07)",
                  border:
                    "1px solid rgba(225,29,72,0.15)",
                }}
              >

                <div
                  className="fw-semibold mb-2"
                  style={{
                    color: "#e11d48",
                    fontSize: "11px",
                  }}
                >
                  {t.attention}
                </div>

                {redFlags.map((flag) => (

                  <div
                    key={flag}
                    style={{
                      color:
                        "var(--jc-text)",
                      fontSize: "11px",
                      lineHeight: "1.5",
                    }}
                  >
                    <i className="bi bi-dot me-1" />
                    {flag}
                  </div>

                ))}

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

            ) : (

              <div
                className="p-3"
                style={{
                  borderRadius: "9px",
                  background:
                    "rgba(34,197,94,0.07)",
                  color: "#16a34a",
                  fontSize: "11px",
                }}
              >
                <i className="bi bi-shield-check me-2" />
                {t.noRedFlags}
              </div>

            )}

          </div>


          {/* CASE STATUS */}

          <div className="jc-dashboard-card">

            <div
              className="fw-semibold mb-3"
              style={{
                color: "var(--jc-text)",
                fontSize: "13px",
              }}
            >
              {t.caseWorkflow}
            </div>

            {[
              ["1", t.caseStarted, true],
              ["2", t.aiCaseTaking, true],
              [
                "3",
                t.informationCheckStep,
                progress >= 25,
              ],
              ["4", t.aiSummary, false],
              ["5", t.doctorReview, false],
              ["6", t.doctorApproval, false],
            ].map(([number, label, complete]) => (

              <div
                key={number}
                className="d-flex align-items-center gap-3 mb-3"
              >

                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: "27px",
                    height: "27px",
                    minWidth: "27px",
                    borderRadius: "50%",
                    background: complete
                      ? accent
                      : "var(--jc-panel-elevated)",
                    color: complete
                      ? "#ffffff"
                      : "var(--jc-subtle)",
                    border:
                      "1px solid var(--jc-border)",
                    fontSize: "10px",
                    fontWeight: "700",
                  }}
                >
                  {complete ? (
                    <i className="bi bi-check" />
                  ) : (
                    number
                  )}
                </div>

                <div
                  style={{
                    color: complete
                      ? "var(--jc-text)"
                      : "var(--jc-muted)",
                    fontSize: "11px",
                  }}
                >
                  {label}
                </div>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* =====================================================
          FINISH CASE
          ===================================================== */}

      <div
        className="d-flex justify-content-between align-items-center mt-4 p-3"
        style={{
          borderRadius: "12px",
          border:
            "1px solid var(--jc-border)",
          background:
            "var(--jc-panel)",
        }}
      >

        <div>

          <div
            className="fw-semibold"
            style={{
              color: "var(--jc-text)",
              fontSize: "12px",
            }}
          >
            {t.readyFinish}
          </div>

          <div
            style={{
              color: "var(--jc-muted)",
              fontSize: "10px",
              marginTop: "3px",
            }}
          >
            {t.preparedForReview}
          </div>

        </div>


        <button
          type="button"
          className="btn"
          onClick={handleFinish}
          style={{
            background: accent,
            color: "#ffffff",
            border: "none",
            borderRadius: "9px",
            fontWeight: "600",
          }}
        >
          {t.continueSummary}

          <i className="bi bi-arrow-right ms-2" />
        </button>

      </div>

    </div>
  );
}
