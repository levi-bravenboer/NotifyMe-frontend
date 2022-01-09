import React, { useEffect } from "react";
import { OuterLayout, InnerLayout } from "../../Styles/Layouts";
import Nav from "../../Components/Navbar/Nav";
import { useParams } from "react-router-dom";

function DiscoverPage(props) {
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
    return () => {};
  }, [params.type]);

  return (
    <OuterLayout>
      <InnerLayout>
        <Nav showModal={props.showModal} type={params.type} discover={true} />
      </InnerLayout>
    </OuterLayout>
  );
}

export default DiscoverPage;
