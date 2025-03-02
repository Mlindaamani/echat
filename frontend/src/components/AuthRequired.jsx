import { authStore } from "../stores/authStore";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export const AuthRequired = () => {
  const location = useLocation();
  const { isAuthenticated } = authStore();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

// Response design
/* <div className="col-12 col-md-8 col-lg-6 col-xl-5"></div> */
