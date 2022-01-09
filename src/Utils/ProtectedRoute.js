import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router";
import AuthContext from "../Context/AuthContext";

const ProtectedRoute = () => {
  const authContext = useContext(AuthContext);
  console.log(authContext.user, " USER");
  return authContext.user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
