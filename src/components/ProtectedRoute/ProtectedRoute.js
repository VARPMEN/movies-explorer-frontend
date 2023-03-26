import React from "react";
import { Navigate } from "react-router";

function ProtectedRoute({ isSuccess, children }) {
  if (!isSuccess) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
