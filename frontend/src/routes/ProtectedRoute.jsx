// src/routes/AdminProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const data = localStorage.getItem("admin"); // stored after login

  if (!data) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />; // renders child routes if authenticated
};

export default ProtectedRoute;
