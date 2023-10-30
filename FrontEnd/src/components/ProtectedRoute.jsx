import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  let token = localStorage.getItem("token");
  if (!token) return <Navigate to="/login" />;
  return (
    <div>
      <Outlet />
    </div>
  );
}
