import React from "react";
import { OuterLayout, InnerLayout } from "../Styles/Layouts";
import Nav from "../Components/Navbar/Nav";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function ErrorPage(props) {
  const params = useParams();

  return (
    <OuterLayout>
      <InnerLayout>
        <Nav showModal={props.showModal} type={params.type} />
        <StyledErrorText>404 page not found</StyledErrorText>
      </InnerLayout>
    </OuterLayout>
  );
}
const StyledErrorText = styled.h1`
  text-align: center;
  margin-top: 10%;
  font-size: 4rem;
  color: var(--green-color);
`;
export default ErrorPage;
