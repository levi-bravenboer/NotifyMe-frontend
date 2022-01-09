import React from "react";
import Sidebar from "../../Components/AppComponents/SideBar";
import { AppLayout } from "../../Styles/Layouts";

function MainPage() {
  return (
    <AppLayout>
      <Sidebar userName={"Levi Bravenboer"}></Sidebar>
    </AppLayout>
  );
}

export default MainPage;
