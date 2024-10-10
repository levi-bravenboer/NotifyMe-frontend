import React, { useEffect } from 'react';
import { OuterLayout, InnerLayout } from '../../Styles/Layouts';
import Nav from '../../Components/Navbar/Nav';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function HowPage(props) {
  const params = useParams();
  useEffect(() => {
    if (
      params.type === 'login' ||
      params.type === 'register' ||
      params.type === 'reset' ||
      params.type === 'resetconfirm'
    ) {
      props.showModal(params.type);
    }
  }, [params.type]);
  return (
    <OuterLayout>
      <InnerLayout>
        <Nav showModal={props.showModal} type={params.type} how={true} />
        <StyledSection>
          <StyledH1>We check if your item is instock every second!</StyledH1>
          <StyledText>
            When it is in stock we will send you a message. Go to the website
            and buy the item you wanted for months.
          </StyledText>
        </StyledSection>
      </InnerLayout>
    </OuterLayout>
  );
}

const StyledH1 = styled.h1`
  color: black;
  font-size: 4rem;

  @media screen and (max-width: 940px) {
    font-size: 3rem;
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

export default HowPage;
