import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DiscoverPage from "./Pages/LandingsPages/DiscoverPage";
import HowPage from "./Pages/LandingsPages/Howpage";
import PricingPage from "./Pages/LandingsPages/PricingPage";
import ErrorPage from "./Pages/ErrorPage";
import { AuthProvider } from "./Context/AuthContext";
import AuthPopupModal from "./Components/AuthPopup/AuthPopupModal";
import ProtectedRoute from "./Utils/ProtectedRoute";

import SubscriptionPage from "./Pages/AppPages/SubscriptionPage";
import YourItemsPage from "./Pages/AppPages/YourItemsPage";
import MePage from "./Pages/AppPages/MePage";
import ProductsPage from "./Pages/AppPages/ProductsPage";
import MainPage from "./Pages/AppPages/MainPage";

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authModalType, setAuthModalType] = useState("");

  const openAuthModal = (type) => {
    setShowAuthModal(true);
    setAuthModalType(type);
  };
  const closeAuthModal = () => {
    setShowAuthModal(false);
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={<DiscoverPage showModal={openAuthModal} />}
          ></Route>
          <Route
            path="/pricing/"
            element={<PricingPage showModal={openAuthModal} />}
          ></Route>
          <Route
            path="/how/"
            element={<HowPage showModal={openAuthModal} />}
          ></Route>
          <Route
            path="/pricing/:type"
            element={<PricingPage showModal={openAuthModal} />}
          ></Route>
          <Route
            path="/how/:type"
            element={<HowPage showModal={openAuthModal} />}
          ></Route>
          <Route
            path=":type"
            element={<DiscoverPage showModal={openAuthModal} />}
          ></Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/app" element={<MainPage />}></Route>
            <Route
              path="/app/subscriptions"
              element={<SubscriptionPage />}
            ></Route>
            <Route path="/app/my-items" element={<YourItemsPage />}></Route>
            <Route path="/app/products" element={<ProductsPage />}></Route>
            <Route
              path="/app/products/:slug"
              element={<ProductsPage />}
            ></Route>
            <Route path="/app/me" element={<MePage />}></Route>
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        {showAuthModal ? (
          <AuthPopupModal
            type={authModalType}
            closeFunction={closeAuthModal}
          ></AuthPopupModal>
        ) : null}
      </AuthProvider>
    </Router>
  );
}

export default App;
