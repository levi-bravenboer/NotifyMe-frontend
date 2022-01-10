import React from "react";
import ComingSoon from "../../Components/AppComponents/ComingSoon";
import Sidebar from "../../Components/AppComponents/SideBar";
import { AppLayout } from "../../Styles/Layouts";

function MainPage() {
  return (
    <AppLayout>
      <Sidebar />
      <ComingSoon />
    </AppLayout>
  );
}

export default MainPage;
