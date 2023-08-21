import React, { useEffect } from "react";
import { OuterLayout, InnerLayout } from "../../Styles/Layouts";
import Nav from "../../Components/Navbar/Nav";
import { useParams } from "react-router-dom";
import PricingBox from "../../Components/PricingBox";

function PricingPage(props) {
  const params = useParams();
  useEffect(() => {
    if (
      params.type === "login" ||
      params.type === "register" ||
      params.type === "reset" ||
      params.type === "resetconfirm"
    ) {
      props.showModal(params.type);
    }
  }, [params.type]);

  return (
    <OuterLayout>
      <InnerLayout>
        <Nav showModal={props.showModal} type={params.type} pricing={true} />
        <PricingBox />
      </InnerLayout>
    </OuterLayout>
  );
}

export default PricingPage;
