import React from 'react';
import ProductFollower from '../../Components/AppComponents/ProductFollower';
import Sidebar from '../../Components/AppComponents/SideBar';
import { AppLayout } from '../../Styles/Layouts';

function ProductFollowerPage() {
  return (
    <AppLayout>
      <Sidebar />
      <ProductFollower />
    </AppLayout>
  );
}

export default ProductFollowerPage;
