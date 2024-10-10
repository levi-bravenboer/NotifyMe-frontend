import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import Earnings from './TotalItems';
import Info from './Info';
import LastItemInstock from './LastItemInstock';
import YourItems from './YourItems';
import NewItems from './NewItems';

function ContentDashboard() {
  return (
    <StyledContainer>
      <NavBar />
      <StyledSubContainer>
        <StyledFirstSection>
          <ColumnOne1>
            <Earnings />
            <Info />
          </ColumnOne1>
          <ColumnTwo1>
            <StyledHeaderThree>Items you follow</StyledHeaderThree>
            <YourItems />
          </ColumnTwo1>
        </StyledFirstSection>
        <StyledSecondSection>
          <ColumnOne2>
            <InvoiceContainer>
              <StyledHeaderThree>What is new</StyledHeaderThree>
              <NewItems />
            </InvoiceContainer>
          </ColumnOne2>
          <ColumnTwo2>
            <StyledHeaderThree>Last Instock item</StyledHeaderThree>
            <LastItemInstock />
          </ColumnTwo2>
        </StyledSecondSection>
      </StyledSubContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 80%;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  margin: 1rem 8rem 1rem 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

const StyledSubContainer = styled.div`
  margin: 0.5rem 0;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;
const StyledFirstSection = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40%;
  gap: 2rem;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
`;
const ColumnOne1 = styled.div`
  display: flex;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
`;

const ColumnTwo1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 115%;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    justify-content: center;
    align-items: center;
  }
`;

const StyledHeaderThree = styled.h3`
  height: 20%;
  /* padding-top */
`;

const StyledSecondSection = styled.div`
  display: flex;
  gap: 2rem;
  height: 26vh;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    height: max-content;
    width: 100%;
  }
`;
const ColumnOne2 = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;
const InvoiceContainer = styled.div`
  height: 60%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;

const ColumnTwo2 = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export default ContentDashboard;
