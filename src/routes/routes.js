//import react router dom
import { Routes, Route } from "react-router-dom";
//import view Login
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import LoanApp from "../pages/LoanApp";
import UploadAds from "../pages/UploadAds";

// Auth context to firebase
import { AuthContextProdiver } from "../context/AuthContext";
import CreateNews from "../pages/CreateNews";
import CreateProduct from "../pages/CreateProduct";

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
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
    </AuthContextProdiver>
  );
}

export default RoutesIndex;
