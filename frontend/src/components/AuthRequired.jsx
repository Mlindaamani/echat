import { useAuthStore } from "../stores/authStore";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export const AuthRequired = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuthStore();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
