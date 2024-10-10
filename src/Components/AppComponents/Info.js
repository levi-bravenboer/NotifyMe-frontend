import React from 'react';
import styled from 'styled-components';

function Info() {
  return (
    <StyledInfoCard>
      <StyledCard>
        <StyledCardContent>
          <StyledRow>
            <StyledDigit>0</StyledDigit>
            <StyledInfoContainer>
              <StyledTitle>Reminders</StyledTitle>
              <StyledSubTitle>This month</StyledSubTitle>
            </StyledInfoContainer>
          </StyledRow>
        </StyledCardContent>
      </StyledCard>
      <StyledCard>
        <StyledCardContent>
          <StyledRow>
            <StyledDigit>0</StyledDigit>
            <StyledInfoContainer>
              <StyledTitle>Following Items</StyledTitle>
              <StyledSubTitle>This month</StyledSubTitle>
            </StyledInfoContainer>
          </StyledRow>
        </StyledCardContent>
      </StyledCard>
    </StyledInfoCard>
  );
}

const StyledInfoCard = styled.div`
  height: 100%;
  width: 18rem;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  color: white;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
  }
`;

const StyledCard = styled.div`
  background-color: rgba(183, 194, 243, 0.3);
  border-radius: 1rem;
  margin-bottom: 1rem;
`;

const StyledCardContent = styled.div`
  padding: 0.7rem 1rem 0.3rem 1rem;
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
  ${({ justify }) =>
    justify &&
    `
      justify-content:space-around;
      width:90%
  `}
`;
const StyledDigit = styled.div`
  background-color: #6100d4;
  padding: 0.8rem 1rem;
  font-size: 1.3rem;
  border-radius: 1rem;
`;
const StyledInfoContainer = styled.div`
  margin-left: 0.7rem;
`;
const StyledTitle = styled.h3`
  color: black;
`;
const StyledSubTitle = styled.h5`
  color: #333333;
  font-weight: normal;
`;

export default Info;
