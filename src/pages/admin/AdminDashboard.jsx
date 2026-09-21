
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const DEFAULT_DOCTOR_REQUESTS = [
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

const STORAGE_KEY = "jeevanDoctorIdentityRequests";

const adminTranslations = {
  en: {
    dashboard: "Admin Dashboard",
    description: "Manage doctor identity verification requests.",
    secureWorkspace: "Secure administrator workspace",

    pendingReview: "Pending Review",
    moreInformation: "More Information",
    identityVerified: "Identity Verified",
    rejected: "Rejected",

    verificationRequests: "Doctor Verification Requests",
    verificationDescription:
      "Review and verify doctor identity credentials.",

    all: "All",

    doctor: "Doctor",
    registrationNo: "Registration No.",
    specialization: "Specialization",
    submitted: "Submitted",
    status: "Status",
    review: "Review",

    noRequests: "No doctor verification requests found.",

    identityNote:
      "Doctor Identity Verification is separate from Doctor Case Verification.",

    pendingStatus: "Pending Review",
    moreInfoStatus: "More Information",
    verifiedStatus: "Verified",
    rejectedStatus: "Rejected",

    complete: "Complete",
    additionalDocument: "Additional document requested",
  },

  mr: {
    dashboard: "अॅडमिन डॅशबोर्ड",
    description:
      "डॉक्टर ओळख पडताळणी विनंत्या व्यवस्थापित करा.",
    secureWorkspace: "सुरक्षित प्रशासकीय कार्यक्षेत्र",

    pendingReview: "पडताळणी प्रलंबित",
    moreInformation: "अधिक माहिती",
    identityVerified: "ओळख पडताळलेली",
    rejected: "नाकारले",

    verificationRequests: "डॉक्टर पडताळणी विनंत्या",
    verificationDescription:
      "डॉक्टरांच्या ओळख प्रमाणपत्रांचे पुनरावलोकन आणि पडताळणी करा.",

    all: "सर्व",

    doctor: "डॉक्टर",
    registrationNo: "नोंदणी क्रमांक",
    specialization: "विशेषज्ञता",
    submitted: "सादर केले",
    status: "स्थिती",
    review: "पुनरावलोकन",

    noRequests:
      "डॉक्टर पडताळणीच्या कोणत्याही विनंत्या आढळल्या नाहीत.",

    identityNote:
      "डॉक्टर ओळख पडताळणी ही डॉक्टर केस पडताळणीपासून स्वतंत्र आहे.",

    pendingStatus: "पडताळणी प्रलंबित",
    moreInfoStatus: "अधिक माहिती",
    verifiedStatus: "पडताळलेले",
    rejectedStatus: "नाकारलेले",

    complete: "पूर्ण",
    additionalDocument: "अतिरिक्त दस्तऐवजाची विनंती केली आहे",
  },

  hi: {
    dashboard: "एडमिन डैशबोर्ड",
    description:
      "डॉक्टर पहचान सत्यापन अनुरोधों को प्रबंधित करें।",
    secureWorkspace: "सुरक्षित प्रशासकीय कार्यक्षेत्र",

    pendingReview: "समीक्षा लंबित",
    moreInformation: "अधिक जानकारी",
    identityVerified: "पहचान सत्यापित",
    rejected: "अस्वीकृत",

    verificationRequests: "डॉक्टर सत्यापन अनुरोध",
    verificationDescription:
      "डॉक्टर की पहचान संबंधी प्रमाण-पत्रों की समीक्षा और सत्यापन करें।",

    all: "सभी",

    doctor: "डॉक्टर",
    registrationNo: "पंजीकरण संख्या",
    specialization: "विशेषज्ञता",
    submitted: "प्रस्तुत",
    status: "स्थिति",
    review: "समीक्षा",

    noRequests: "डॉक्टर सत्यापन के कोई अनुरोध नहीं मिले।",

    identityNote:
      "डॉक्टर पहचान सत्यापन, डॉक्टर केस सत्यापन से अलग है।",

    pendingStatus: "समीक्षा लंबित",
    moreInfoStatus: "अधिक जानकारी",
    verifiedStatus: "सत्यापित",
    rejectedStatus: "अस्वीकृत",

    complete: "पूर्ण",
    additionalDocument: "अतिरिक्त दस्तावेज़ का अनुरोध किया गया है",
  },

  gu: {
    dashboard: "એડમિન ડેશબોર્ડ",
    description:
      "ડૉક્ટરની ઓળખ ચકાસણી વિનંતીઓનું સંચાલન કરો.",
    secureWorkspace: "સુરક્ષિત પ્રશાસકીય કાર્યક્ષેત્ર",

    pendingReview: "સમીક્ષા બાકી",
    moreInformation: "વધુ માહિતી",
    identityVerified: "ઓળખ ચકાસાયેલ",
    rejected: "નકારાયેલ",

    verificationRequests: "ડૉક્ટર ચકાસણી વિનંતીઓ",
    verificationDescription:
      "ડૉક્ટરની ઓળખ સંબંધિત પ્રમાણપત્રોની સમીક્ષા અને ચકાસણી કરો.",

    all: "બધા",

    doctor: "ડૉક્ટર",
    registrationNo: "નોંધણી નંબર",
    specialization: "વિશેષતા",
    submitted: "સબમિટ કરેલ",
    status: "સ્થિતિ",
    review: "સમીક્ષા",

    noRequests: "ડૉક્ટર ચકાસણીની કોઈ વિનંતીઓ મળી નથી.",

    identityNote:
      "ડૉક્ટરની ઓળખ ચકાસણી, ડૉક્ટર કેસ ચકાસણીથી અલગ છે.",

    pendingStatus: "સમીક્ષા બાકી",
    moreInfoStatus: "વધુ માહિતી",
    verifiedStatus: "ચકાસાયેલ",
    rejectedStatus: "નકારાયેલ",

    complete: "પૂર્ણ",
    additionalDocument:
      "વધારાના દસ્તાવેજની વિનંતી કરવામાં આવી છે",
  },

  kn: {
    dashboard: "ಅಡ್ಮಿನ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    description:
      "ವೈದ್ಯರ ಗುರುತು ಪರಿಶೀಲನೆ ವಿನಂತಿಗಳನ್ನು ನಿರ್ವಹಿಸಿ.",
    secureWorkspace: "ಸುರಕ್ಷಿತ ಆಡಳಿತ ಕಾರ್ಯಕ್ಷೇತ್ರ",

    pendingReview: "ಪರಿಶೀಲನೆ ಬಾಕಿಯಿದೆ",
    moreInformation: "ಹೆಚ್ಚಿನ ಮಾಹಿತಿ",
    identityVerified: "ಗುರುತು ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
    rejected: "ತಿರಸ್ಕರಿಸಲಾಗಿದೆ",

    verificationRequests: "ವೈದ್ಯರ ಪರಿಶೀಲನೆ ವಿನಂತಿಗಳು",
    verificationDescription:
      "ವೈದ್ಯರ ಗುರುತು ದಾಖಲೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ದೃಢೀಕರಿಸಿ.",

    all: "ಎಲ್ಲಾ",

    doctor: "ವೈದ್ಯರು",
    registrationNo: "ನೋಂದಣಿ ಸಂಖ್ಯೆ",
    specialization: "ವಿಶೇಷತೆ",
    submitted: "ಸಲ್ಲಿಸಲಾಗಿದೆ",
    status: "ಸ್ಥಿತಿ",
    review: "ಪರಿಶೀಲನೆ",

    noRequests:
      "ಯಾವುದೇ ವೈದ್ಯರ ಪರಿಶೀಲನೆ ವಿನಂತಿಗಳು ಕಂಡುಬಂದಿಲ್ಲ.",

    identityNote:
      "ವೈದ್ಯರ ಗುರುತು ಪರಿಶೀಲನೆಯು ವೈದ್ಯರ ಪ್ರಕರಣ ಪರಿಶೀಲನೆಯಿಂದ ಪ್ರತ್ಯೇಕವಾಗಿದೆ.",

    pendingStatus: "ಪರಿಶೀಲನೆ ಬಾಕಿಯಿದೆ",
    moreInfoStatus: "ಹೆಚ್ಚಿನ ಮಾಹಿತಿ",
    verifiedStatus: "ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
    rejectedStatus: "ತಿರಸ್ಕರಿಸಲಾಗಿದೆ",

    complete: "ಪೂರ್ಣ",
    additionalDocument: "ಹೆಚ್ಚುವರಿ ದಾಖಲೆ ವಿನಂತಿಸಲಾಗಿದೆ",
  },

  ta: {
    dashboard: "நிர்வாக டாஷ்போர்டு",
    description:
      "மருத்துவர் அடையாள சரிபார்ப்பு கோரிக்கைகளை நிர்வகிக்கவும்.",
    secureWorkspace: "பாதுகாப்பான நிர்வாக பணியிடம்",

    pendingReview: "மதிப்பாய்வு நிலுவையில்",
    moreInformation: "மேலும் தகவல்",
    identityVerified: "அடையாளம் சரிபார்க்கப்பட்டது",
    rejected: "நிராகரிக்கப்பட்டது",

    verificationRequests: "மருத்துவர் சரிபார்ப்பு கோரிக்கைகள்",
    verificationDescription:
      "மருத்துவரின் அடையாளச் சான்றுகளை மதிப்பாய்வு செய்து சரிபார்க்கவும்.",

    all: "அனைத்தும்",

    doctor: "மருத்துவர்",
    registrationNo: "பதிவு எண்",
    specialization: "சிறப்புப் பிரிவு",
    submitted: "சமர்ப்பிக்கப்பட்டது",
    status: "நிலை",
    review: "மதிப்பாய்வு",

    noRequests:
      "மருத்துவர் சரிபார்ப்பு கோரிக்கைகள் எதுவும் கிடைக்கவில்லை.",

    identityNote:
      "மருத்துவர் அடையாள சரிபார்ப்பு, மருத்துவர் வழக்கு சரிபார்ப்பிலிருந்து தனித்துவமானது.",

    pendingStatus: "மதிப்பாய்வு நிலுவையில்",
    moreInfoStatus: "மேலும் தகவல்",
    verifiedStatus: "சரிபார்க்கப்பட்டது",
    rejectedStatus: "நிராகரிக்கப்பட்டது",

    complete: "முழுமையானது",
    additionalDocument: "கூடுதல் ஆவணம் கோரப்பட்டுள்ளது",
  },
};

function getStoredRequests() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

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
    JSON.stringify(DEFAULT_DOCTOR_REQUESTS)
  );

  return DEFAULT_DOCTOR_REQUESTS;
}

function getStatusClass(status) {
  if (status === "Verified") {
    return "admin-status admin-status-success";
  }

  if (status === "Rejected") {
    return "admin-status admin-status-danger";
  }

  if (status === "More Information") {
    return "admin-status admin-status-warning";
  }

  return "admin-status admin-status-pending";
}

function translateStatus(status, t) {
  if (status === "Pending Review") {
    return t.pendingStatus;
  }

  if (status === "More Information") {
    return t.moreInfoStatus;
  }

  if (status === "Verified") {
    return t.verifiedStatus;
  }

  if (status === "Rejected") {
    return t.rejectedStatus;
  }

  return status;
}

function translateFilter(filter, t) {
  if (filter === "All") {
    return t.all;
  }

  if (filter === "Pending Review") {
    return t.pendingReview;
  }

  if (filter === "More Information") {
    return t.moreInformation;
  }

  if (filter === "Verified") {
    return t.verifiedStatus;
  }

  if (filter === "Rejected") {
    return t.rejectedStatus;
  }

  return filter;
}

export default function AdminDashboard() {
  const navigate = useNavigate();

  const { language } = useLanguage();

  const t =
    adminTranslations[language] ||
    adminTranslations.en;

  const [doctorRequests, setDoctorRequests] =
    useState(getStoredRequests);

  const [activeFilter, setActiveFilter] =
    useState("All");

  const [searchQuery, setSearchQuery] =
    useState("");

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(doctorRequests)
    );
  }, [doctorRequests]);

  const filteredDoctors = doctorRequests.filter(
    (doctor) => {
      const matchesFilter =
        activeFilter === "All" ||
        doctor.status === activeFilter;

      const query =
        searchQuery.trim().toLowerCase();

      const matchesSearch =
        query === "" ||
        doctor.name
          ?.toLowerCase()
          .includes(query) ||
        doctor.registrationNo
          ?.toLowerCase()
          .includes(query) ||
        doctor.specialization
          ?.toLowerCase()
          .includes(query);

      return matchesFilter && matchesSearch;
    }
  );

  const pendingCount =
    doctorRequests.filter(
      (doctor) =>
        doctor.status === "Pending Review"
    ).length;

  const moreInfoCount =
    doctorRequests.filter(
      (doctor) =>
        doctor.status === "More Information"
    ).length;

  const verifiedCount =
    doctorRequests.filter(
      (doctor) =>
        doctor.status === "Verified"
    ).length;

  const rejectedCount =
    doctorRequests.filter(
      (doctor) =>
        doctor.status === "Rejected"
    ).length;

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
          marginBottom: "28px",
        }}
      >
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
                gap: "10px",
                marginBottom: "8px",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  background:
                    "rgba(37, 99, 235, 0.12)",
                  color: "#2563eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                }}
              >
                <i className="bi bi-person-gear"></i>
              </div>

              <h1
                style={{
                  margin: 0,
                  color: "var(--jc-text)",
                  fontSize: "28px",
                  fontWeight: 700,
                }}
              >
                {t.dashboard}
              </h1>
            </div>

            <p
              style={{
                margin: 0,
                color: "var(--jc-text-secondary)",
                fontSize: "14px",
              }}
            >
              {t.description}
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "9px 13px",
              borderRadius: "10px",
              border:
                "1px solid var(--jc-border)",
              background:
                "var(--jc-panel)",
              color:
                "var(--jc-text-secondary)",
              fontSize: "13px",
            }}
          >
            <i className="bi bi-shield-check"></i>
            {t.secureWorkspace}
          </div>
        </div>
      </div>

      {/* =========================
          SUMMARY CARDS
      ========================== */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(190px, 1fr))",
          gap: "16px",
          marginBottom: "28px",
        }}
      >
        {/* Pending */}

        <div
          style={{
            background: "var(--jc-panel)",
            border:
              "1px solid var(--jc-border)",
            borderRadius: "14px",
            padding: "20px",
            boxShadow: "var(--jc-shadow)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  color: "var(--jc-muted)",
                  fontSize: "13px",
                  marginBottom: "8px",
                }}
              >
                {t.pendingReview}
              </div>

              <div
                style={{
                  color: "var(--jc-text)",
                  fontSize: "28px",
                  fontWeight: 700,
                }}
              >
                {pendingCount}
              </div>
            </div>

            <i
              className="bi bi-hourglass-split"
              style={{
                fontSize: "24px",
                color: "#d97706",
              }}
            ></i>
          </div>
        </div>

        {/* More Information */}

        <div
          style={{
            background: "var(--jc-panel)",
            border:
              "1px solid var(--jc-border)",
            borderRadius: "14px",
            padding: "20px",
            boxShadow: "var(--jc-shadow)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  color: "var(--jc-muted)",
                  fontSize: "13px",
                  marginBottom: "8px",
                }}
              >
                {t.moreInformation}
              </div>

              <div
                style={{
                  color: "var(--jc-text)",
                  fontSize: "28px",
                  fontWeight: 700,
                }}
              >
                {moreInfoCount}
              </div>
            </div>

            <i
              className="bi bi-info-circle"
              style={{
                fontSize: "24px",
                color: "#d97706",
              }}
            ></i>
          </div>
        </div>

        {/* Verified */}

        <div
          style={{
            background: "var(--jc-panel)",
            border:
              "1px solid var(--jc-border)",
            borderRadius: "14px",
            padding: "20px",
            boxShadow: "var(--jc-shadow)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  color: "var(--jc-muted)",
                  fontSize: "13px",
                  marginBottom: "8px",
                }}
              >
                {t.identityVerified}
              </div>

              <div
                style={{
                  color: "var(--jc-text)",
                  fontSize: "28px",
                  fontWeight: 700,
                }}
              >
                {verifiedCount}
              </div>
            </div>

            <i
              className="bi bi-patch-check"
              style={{
                fontSize: "24px",
                color: "var(--jc-green)",
              }}
            ></i>
          </div>
        </div>

        {/* Rejected */}

        <div
          style={{
            background: "var(--jc-panel)",
            border:
              "1px solid var(--jc-border)",
            borderRadius: "14px",
            padding: "20px",
            boxShadow: "var(--jc-shadow)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  color: "var(--jc-muted)",
                  fontSize: "13px",
                  marginBottom: "8px",
                }}
              >
                {t.rejected}
              </div>

              <div
                style={{
                  color: "var(--jc-text)",
                  fontSize: "28px",
                  fontWeight: 700,
                }}
              >
                {rejectedCount}
              </div>
            </div>

            <i
              className="bi bi-x-circle"
              style={{
                fontSize: "24px",
                color: "#dc2626",
              }}
            ></i>
          </div>
        </div>
      </div>

      {/* =========================
          VERIFICATION SECTION
      ========================== */}

      <div
        style={{
          background: "var(--jc-panel)",
          border:
            "1px solid var(--jc-border)",
          borderRadius: "16px",
          boxShadow: "var(--jc-shadow)",
          overflow: "hidden",
        }}
      >
        {/* Section Header */}

        <div
          style={{
            padding: "22px 24px",
            borderBottom:
              "1px solid var(--jc-border)",
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
              <h2
                style={{
                  margin: 0,
                  color: "var(--jc-text)",
                  fontSize: "19px",
                  fontWeight: 650,
                }}
              >
                {t.verificationRequests}
              </h2>

              <p
                style={{
                  margin: "6px 0 0",
                  color: "var(--jc-muted)",
                  fontSize: "13px",
                }}
              >
                {t.verificationDescription}
              </p>
            </div>

            {/* Search + Filters */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              {/* Search */}

              <div
                style={{
                  position: "relative",
                  width: "220px",
                }}
              >
                <i
                  className="bi bi-search"
                  style={{
                    position: "absolute",
                    left: "11px",
                    top: "50%",
                    transform:
                      "translateY(-50%)",
                    color: "var(--jc-muted)",
                    fontSize: "13px",
                    pointerEvents: "none",
                  }}
                ></i>

                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) =>
                    setSearchQuery(
                      e.target.value
                    )
                  }
                  placeholder="Search doctors..."
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    border:
                      "1px solid var(--jc-border)",
                    background:
                      "var(--jc-panel)",
                    color: "var(--jc-text)",
                    borderRadius: "8px",
                    padding:
                      "8px 11px 8px 32px",
                    fontSize: "12px",
                    outline: "none",
                  }}
                />
              </div>

              {/* Filters */}

              <div
                style={{
                  display: "flex",
                  gap: "6px",
                  flexWrap: "wrap",
                }}
              >
                {[
                  "All",
                  "Pending Review",
                  "More Information",
                  "Verified",
                  "Rejected",
                ].map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() =>
                      setActiveFilter(filter)
                    }
                    style={{
                      border:
                        activeFilter === filter
                          ? "1px solid #2563eb"
                          : "1px solid var(--jc-border)",
                      background:
                        activeFilter === filter
                          ? "rgba(37, 99, 235, 0.10)"
                          : "var(--jc-panel)",
                      color:
                        activeFilter === filter
                          ? "#2563eb"
                          : "var(--jc-text-secondary)",
                      borderRadius: "8px",
                      padding: "7px 11px",
                      fontSize: "12px",
                      cursor: "pointer",
                      fontWeight:
                        activeFilter === filter
                          ? 600
                          : 500,
                    }}
                  >
                    {translateFilter(
                      filter,
                      t
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            TABLE
        ========================== */}

        <div
          style={{
            overflowX: "auto",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              minWidth: "900px",
            }}
          >
            <thead>
              <tr
                style={{
                  background:
                    "var(--jc-panel-elevated)",
                }}
              >
                <th style={headerStyle}>
                  {t.doctor}
                </th>

                <th style={headerStyle}>
                  {t.registrationNo}
                </th>

                <th style={headerStyle}>
                  {t.specialization}
                </th>

                <th style={headerStyle}>
                  {t.submitted}
                </th>

                <th style={headerStyle}>
                  {t.status}
                </th>

                <th
                  style={{
                    ...headerStyle,
                    textAlign: "right",
                  }}
                >
                  {t.review}
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredDoctors.length === 0 ? (
                <tr>
                  <td
                    colSpan="6"
                    style={{
                      padding: "45px 20px",
                      textAlign: "center",
                      color: "var(--jc-muted)",
                    }}
                  >
                    {t.noRequests}
                  </td>
                </tr>
              ) : (
                filteredDoctors.map((doctor) => (
                  <tr
                    key={doctor.id}
                    style={{
                      borderTop:
                        "1px solid var(--jc-border)",
                    }}
                  >
                    <td style={cellStyle}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "11px",
                        }}
                      >
                        <div
                          style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "10px",
                            background:
                              "rgba(37, 99, 235, 0.10)",
                            color: "#2563eb",
                            display: "flex",
                            alignItems: "center",
                            justifyContent:
                              "center",
                            flexShrink: 0,
                          }}
                        >
                          <i className="bi bi-person"></i>
                        </div>

                        <div>
                          <div
                            style={{
                              color:
                                "var(--jc-text)",
                              fontWeight: 600,
                              fontSize: "13px",
                            }}
                          >
                            {doctor.name}
                          </div>

                          <div
                            style={{
                              color:
                                "var(--jc-muted)",
                              fontSize: "11px",
                              marginTop: "2px",
                            }}
                          >
                            {doctor.id}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td style={cellStyle}>
                      {doctor.registrationNo}
                    </td>

                    <td style={cellStyle}>
                      {doctor.specialization}
                    </td>

                    <td style={cellStyle}>
                      {doctor.submittedDate}
                    </td>

                    <td style={cellStyle}>
                      <span
                        className={getStatusClass(
                          doctor.status
                        )}
                      >
                        {translateStatus(
                          doctor.status,
                          t
                        )}
                      </span>
                    </td>

                    <td
                      style={{
                        ...cellStyle,
                        textAlign: "right",
                      }}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          navigate(
                            `/admin/doctor-verification/${doctor.id}`
                          )
                        }
                        style={{
                          border:
                            "1px solid var(--jc-border)",
                          background:
                            "var(--jc-panel)",
                          color: "#2563eb",
                          borderRadius: "8px",
                          padding: "8px 13px",
                          fontSize: "12px",
                          fontWeight: 600,
                          cursor: "pointer",
                        }}
                      >
                        <i
                          className="bi bi-eye"
                          style={{
                            marginRight: "6px",
                          }}
                        ></i>

                        {t.review}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer note */}

        <div
          style={{
            padding: "15px 24px",
            borderTop:
              "1px solid var(--jc-border)",
            color: "var(--jc-muted)",
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <i className="bi bi-info-circle"></i>

          {t.identityNote}
        </div>
      </div>

      {/* =========================
          LOCAL STYLES
      ========================== */}

      <style>{`
        .admin-status {
          display: inline-flex;
          align-items: center;
          padding: 5px 9px;
          border-radius: 7px;
          font-size: 11px;
          font-weight: 600;
          white-space: nowrap;
        }

        .admin-status-pending {
          background: rgba(217, 119, 6, 0.10);
          color: #b45309;
        }

        .admin-status-warning {
          background: rgba(217, 119, 6, 0.10);
          color: #b45309;
        }

        .admin-status-success {
          background: rgba(34, 197, 94, 0.10);
          color: var(--jc-green);
        }

        .admin-status-danger {
          background: rgba(220, 38, 38, 0.10);
          color: #dc2626;
        }
      `}</style>
    </div>
  );
}

const headerStyle = {
  padding: "13px 18px",
  textAlign: "left",
  color: "var(--jc-muted)",
  fontSize: "11px",
  fontWeight: 650,
  textTransform: "uppercase",
  letterSpacing: "0.04em",
};

const cellStyle = {
  padding: "16px 18px",
  color: "var(--jc-text-secondary)",
  fontSize: "12px",
  verticalAlign: "middle",
};
