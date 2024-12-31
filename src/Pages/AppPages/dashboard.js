import React from 'react';
import ContentDashboard from '../../Components/AppComponents/ContentDashboard';
import Sidebar from '../../Components/AppComponents/SideBar';
import { AppLayout } from '../../Styles/Layouts';

function DashboardPage() {
  return (
    <AppLayout>
      <Sidebar />
      <ContentDashboard />
    </AppLayout>
  );
}

export default DashboardPage;
