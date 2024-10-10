import React from 'react';
import ComingSoon from '../../Components/AppComponents/ComingSoon';
import Sidebar from '../../Components/AppComponents/SideBar';
import { AppLayout } from '../../Styles/Layouts';

function YourItemsPage() {
  return (
    <AppLayout>
      <Sidebar />
      <ComingSoon />
    </AppLayout>
  );
}

export default YourItemsPage;
