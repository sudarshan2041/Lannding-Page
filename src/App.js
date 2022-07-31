import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPage from "./containers/FormPage";
import LandingPage from "./containers/LandingPage.js";

function App() {
  return (
    <div className="bd-main">
      <BrowserRouter>
        <Routes>
          <Route path="/form" element={<FormPage />} />
          <Route
            path="*"
            element={<LandingPage to="/landing-page" replace />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
