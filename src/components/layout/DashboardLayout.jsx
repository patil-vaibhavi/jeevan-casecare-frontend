import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({
  children,
  role = "patient",
}) {
  return (
    <div className="jc-app-shell">

      <Sidebar role={role} />

      <div className="jc-main">

        <Topbar role={role} />

        <main className="jc-content">
          {children}
        </main>

      </div>

    </div>
  );
}