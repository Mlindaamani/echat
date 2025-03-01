import React from "react";
import { authStore } from "../stores/authStore";
import { Outlet, Navigate } from "react-router-dom";

export const AuthRequired = () => {
  const { isAuthenticated } = authStore();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
