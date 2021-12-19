import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DiscoverPage from "./Pages/LandingsPages/DiscoverPage";
import HowPage from "./Pages/LandingsPages/Howpage";
import PricingPage from "./Pages/LandingsPages/PricingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DiscoverPage />}></Route>
        <Route path="/how" element={<HowPage />}></Route>
        <Route path="/pricing" element={<PricingPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
