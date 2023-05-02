
//import react router dom
import { Routes, Route } from "react-router-dom";

//import pages
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import LoanApp from "../pages/LoanApp";
import UploadAds from "../pages/UploadAds";
import CreateNews from "../pages/CreateNews";
import CreateProduct from "../pages/CreateProduct";

// Auth context to firebase
import { AuthContextProvider } from "../context/AuthContext";


function RoutesIndex() {

 
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Login />  } />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/loan" element={<LoanApp />} />
        <Route path="/upload" element={<UploadAds />} />
        <Route path="/create-news" element={<CreateNews />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/update-profile" element={<CreateProduct />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default RoutesIndex;
