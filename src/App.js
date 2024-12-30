import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context/auth-context';
import AuthPopupModal from './Components/AuthPopup/auth-modal';
import ProtectedRoute from './Utils/ProtectedRoute';

import DiscoverPage from './Pages/LandingsPages/discover';
import HowPage from './Pages/LandingsPages/how';
import PricingPage from './Pages/LandingsPages/pricing';
import SubscriptionPage from './Pages/AppPages/subscriptions';
import YourItemsPage from './Pages/AppPages/my-items';
import MePage from './Pages/AppPages/me';
import ProductsPage from './Pages/AppPages/products-overview';
import MainPage from './Pages/AppPages/dashboard';
import ErrorPage from './Pages/error';
import CostCalculatorPage from './Pages/AppPages/cost-calculator';

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authModalType, setAuthModalType] = useState('');

  const openAuthModal = (type) => {
    setShowAuthModal(true);
    setAuthModalType(type);
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={<DiscoverPage showModal={openAuthModal} />}
          />
          <Route
            path="/pricing"
            element={<PricingPage showModal={openAuthModal} />}
          />
          <Route path="/how" element={<HowPage showModal={openAuthModal} />} />
          <Route
            path="/pricing/:type"
            element={<PricingPage showModal={openAuthModal} />}
          />
          <Route
            path="/how/:type"
            element={<HowPage showModal={openAuthModal} />}
          />
          <Route
            path=":type"
            element={<DiscoverPage showModal={openAuthModal} />}
          />

          <Route element={<ProtectedRoute />}>
            <Route path="/app" element={<MainPage />} />
            <Route path="/app/subscriptions" element={<SubscriptionPage />} />
            <Route
              path="/app/cost-calculator"
              element={<CostCalculatorPage />}
              title="Notify me - Cost Calculator"
            />
            <Route path="/app/my-items" element={<YourItemsPage />} />
            <Route path="/app/products" element={<ProductsPage />} />
            <Route path="/app/products/:slug" element={<ProductsPage />} />
            <Route path="/app/me" element={<MePage />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Routes>

        {showAuthModal && (
          <AuthPopupModal
            type={authModalType}
            closeFunction={() => setShowAuthModal(false)}
          />
        )}
      </AuthProvider>
    </Router>
  );
}

export default App;
