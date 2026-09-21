import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "../pages/public/LandingPage";
import LoginPage from "../pages/public/LoginPage";
import ChooseRolePage from "../pages/public/ChooseRolePage";

import PatientDashboard from "../pages/patient/PatientDashboard";
import NewCasePage from "../pages/patient/NewCasePage";
import CaseTakingPage from "../pages/patient/CaseTakingPage";
import CaseSummaryPage from "../pages/patient/CaseSummaryPage.jsx";
import HealthProfilePage from "../pages/patient/HealthProfilePage";
import DoctorDashboard from "../pages/doctor/DoctorDashboard";
import DoctorVerification from "../pages/doctor/DoctorVerification";

import AdminDashboard from "../pages/admin/AdminDashboard";
import DoctorVerificationReview from "../pages/admin/DoctorVerificationReview";
import EmergencyDashboard from "../pages/emergency/EmergencyDashboard";
import EmergencySettings from "../pages/emergency/EmergencySettings";
import DashboardLayout from "../components/layout/DashboardLayout";

/*
 * Checks whether a user is logged in
 * and whether they have the required role.
 */
function ProtectedRoute({ role, children }) {
  const storedUser = localStorage.getItem("jeevanUser");

  if (!storedUser) {
    return (
      <Navigate
        to={`/login?role=${role}`}
        replace
      />
    );
  }

  let user;

  try {
    user = JSON.parse(storedUser);
  } catch (error) {
    localStorage.removeItem("jeevanUser");

    return (
      <Navigate
        to={`/login?role=${role}`}
        replace
      />
    );
  }

  /*
   * Prevent users from accessing pages
   * belonging to another role.
   */
  if (!user || user.role !== role) {
    return (
      <Navigate
        to={`/login?role=${role}`}
        replace
      />
    );
  }

  return children;
}

export default function AppRoutes() {
  return (
    <Routes>

      {/* =========================
          PUBLIC
      ========================== */}

      <Route
        path="/"
        element={<LandingPage />}
      />

      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route
        path="/choose-role"
        element={<ChooseRolePage />}
      />


      {/* =========================
          PATIENT DASHBOARD
      ========================== */}

      <Route
        path="/patient/dashboard"
        element={
          <ProtectedRoute role="patient">
            <DashboardLayout role="patient">
              <PatientDashboard />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />


      {/* =========================
          PATIENT NEW CASE
      ========================== */}

      <Route
        path="/patient/new-case"
        element={
          <ProtectedRoute role="patient">
            <DashboardLayout role="patient">
              <NewCasePage />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
    <Route
  path="/patient/health-profile"
  element={
    <ProtectedRoute role="patient">
      <DashboardLayout role="patient">
        <HealthProfilePage />
      </DashboardLayout>
    </ProtectedRoute>
  }
/>

      {/* =========================
          PATIENT CASE TAKING
      ========================== */}

      <Route
        path="/patient/case-taking"
        element={
          <ProtectedRoute role="patient">
            <DashboardLayout role="patient">
              <CaseTakingPage />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />


      {/* =========================
          PATIENT CASE SUMMARY
      ========================== */}

      <Route
        path="/patient/case-summary"
        element={
          <ProtectedRoute role="patient">
            <DashboardLayout role="patient">
              <CaseSummaryPage />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />


      {/* =========================
          DOCTOR DASHBOARD
      ========================== */}

      <Route
        path="/doctor/dashboard"
        element={
          <ProtectedRoute role="doctor">
            <DashboardLayout role="doctor">
              <DoctorDashboard />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />


      {/* =========================
          DOCTOR CASE VERIFICATION
      ========================== */}

      <Route
        path="/doctor/verification"
        element={
          <ProtectedRoute role="doctor">
            <DashboardLayout role="doctor">
              <DoctorVerification />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />


      {/* =========================
          ADMIN DASHBOARD
      ========================== */}

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute role="admin">
            <DashboardLayout role="admin">
              <AdminDashboard />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      <Route
  path="/admin/doctor-verification/:doctorId"
  element={
    <ProtectedRoute role="admin">
      <DashboardLayout role="admin">
        <DoctorVerificationReview />
      </DashboardLayout>
    </ProtectedRoute>
  }
/>


      {/* =========================
          EMERGENCY PROVIDER
      ========================== */}

      <Route
        path="/emergency/dashboard"
        element={
          <ProtectedRoute role="emergency">
            <DashboardLayout role="emergency">
              <EmergencyDashboard />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
    <Route
  path="/emergency/settings"
  element={
    <ProtectedRoute role="emergency">
      <DashboardLayout role="emergency">
        <EmergencySettings />
      </DashboardLayout>
    </ProtectedRoute>
  }
/>

      {/* =========================
          UNKNOWN ROUTES
      ========================== */}

      <Route
        path="*"
        element={
          <Navigate
            to="/"
            replace
          />
        }
      />

    </Routes>
  );
}