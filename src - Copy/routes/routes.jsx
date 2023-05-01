//import react router dom
import { Routes, Route } from "react-router-dom";
//import view Login
import Login from "../pages/Login.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import LoanApp from "../pages/LoanApp.jsx";

// Auth context to firebase
import { AuthContextProdiver } from "../context/AuthContext.jsx";

function RoutesIndex() {
  return (
    <AuthContextProdiver>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/loan" element={<LoanApp />} />
      </Routes>
    </AuthContextProdiver>
  );
}

export default RoutesIndex;
