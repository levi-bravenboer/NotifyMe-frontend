import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../Components/Navbar/Nav';
import { OuterLayout, InnerLayout } from '../Styles/Layouts';

function ErrorPage(props) {
  const { type } = useParams();

  return (
    <OuterLayout>
      <InnerLayout>
        <Nav showModal={props.showModal} type={type} />
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
