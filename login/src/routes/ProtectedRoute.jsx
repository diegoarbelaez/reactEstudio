import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../auth/AuthProvider";

export const ProtectedRoute = () => {
  const isAuth = useAuth();
  console.log(isAuth.isAuthenticated);
  return isAuth.isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};
