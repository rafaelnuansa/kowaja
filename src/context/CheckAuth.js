import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
const CheckAuth = ({ children }) => {
  const { user } = useAuth();
  console.log("Check user in Private: ", user);
  if (user) {
    return <Navigate to="/dashboard" />;
  }else{
    console.log(user);
  }
};
export default CheckAuth;
