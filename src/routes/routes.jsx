//import react router dom
import { Routes, Route } from "react-router-dom";
//import view Login
import Login from "../pages/Login.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import LoanApp from "../pages/LoanApp.jsx";
import UploadAds from "../pages/UploadAds.jsx";

// Auth context to firebase
import { AuthContextProdiver } from "../context/AuthContext.jsx";
import CreateNews from "../pages/CreateNews.jsx";

function RoutesIndex() {
  return (
    <AuthContextProdiver>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/loan" element={<LoanApp />} />
        <Route path="/upload" element={<UploadAds />} />
        <Route path="/create-news" element={<CreateNews />} />
        <Route path="/create-product" element={<UploadAds />} />
      </Routes>
    </AuthContextProdiver>
  );
}

export default RoutesIndex;
