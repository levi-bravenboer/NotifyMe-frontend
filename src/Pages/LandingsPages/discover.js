import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { OuterLayout, InnerLayout } from '../../Styles/Layouts';
import Nav from '../../Components/Navbar/nav';

function DiscoverPage(props) {
  const params = useParams();
  useEffect(() => {
    if (
      params.type === 'login' ||
      params.type === 'register' ||
      params.type === 'reset' ||
      params.type === 'password-confirm'
    ) {
      props.showModal(params.type);
    }
  }, [params.type]);

  return (
    <OuterLayout>
      <InnerLayout>
        <Nav showModal={props.showModal} type={params.type} discover={true} />
        <StyledSection>
          <StyledH1>Know when to buy</StyledH1>
          <StyledText>
            Your item always out of stock? Get a notifcation when the item is
            instock.
          </StyledText>
        </StyledSection>
      </InnerLayout>
    </OuterLayout>
  );
}

const StyledH1 = styled.h1`
  color: black;
  font-size: 5rem;

  @media screen and (max-width: 940px) {
    font-size: 4rem;
  }
`;
const StyledSection = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin-top: -10%;
  margin-left: 10%;
`;
const StyledText = styled.p`
  color: #3e3e3e;
  font-size: 2rem;

  @media screen and (max-width: 940px) {
    font-size: 1.5rem;
  }
`;
export default DiscoverPage;
