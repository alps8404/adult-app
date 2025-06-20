import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import AgeVerification from "./AgeVerification";
import MainContent from "./MainContent";
import CustomNavbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';

function App() {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isVerified ? <Navigate to="/main" /> : <AgeVerification onVerify={() => setIsVerified(true)} />
          }
        />
        <Route
          path="/main"
          element={
            isVerified ? (
              <>
                <CustomNavbar />
                <MainContent />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
