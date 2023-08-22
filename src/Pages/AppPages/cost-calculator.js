import React from 'react';
import CostCalculator from '../../Components/AppComponents/CostCalculator/CostCalculator';
import Sidebar from '../../Components/AppComponents/SideBar';
import { AppLayout } from '../../Styles/Layouts';

function SubscriptionPage() {
  return (
    <AppLayout>
      <Sidebar />
      <CostCalculator />
    </AppLayout>
  );
}

export default SubscriptionPage;
