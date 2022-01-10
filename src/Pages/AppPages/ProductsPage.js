import React from "react";
import ComingSoon from "../../Components/AppComponents/ComingSoon";
import Sidebar from "../../Components/AppComponents/SideBar";
import { AppLayout } from "../../Styles/Layouts";

function ProductsPage() {
  return (
    <AppLayout>
      <Sidebar />
      <ComingSoon />
    </AppLayout>
  );
}

export default ProductsPage;
