import React from "react";
import styled from "styled-components";

function PricingBox() {
  return (
    <StyledSection>
      <StyledContainerPricing>
        <StyledPrice>
          <StyledHeader>Basic</StyledHeader>
          <StyledLi>First Month free</StyledLi>
          <StyledLi>Limited items</StyledLi>
          <StyledLi>SMS notification</StyledLi>
          <StyledLi>€10 each month</StyledLi>
        </StyledPrice>
      </StyledContainerPricing>
      <StyledContainerPricing>
        <StyledPrice>
          <StyledHeader>Unlimited</StyledHeader>
          <StyledLi>First Month free</StyledLi>
          <StyledLi>Unlimited items</StyledLi>
          <StyledLi>SMS notification</StyledLi>
          <StyledLi>€20 each month</StyledLi>
        </StyledPrice>
      </StyledContainerPricing>
    </StyledSection>
  );
}
const StyledSection = styled.section`
  margin-left: 5%;
  margin-top: 7%;
  margin-bottom: auto;
  margin-right: auto;
`;
const StyledContainerPricing = styled.div`
  background-color: white;
  float: left;
  width: 33.3%;
  margin-left: 3%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  @media only screen and (max-width: 900px) {
    margin-left: 10%;
    margin-top: 2%;
    width: 80%;
  }
`;

const StyledHeader = styled.li`
  padding: 15px;
  border-radius: 8px;
  background-color: var(--green-color);
  color: white;
  font-size: 3rem;
  text-align: center;
`;
const StyledLi = styled.li`
  border-bottom: 1px solid #eee;
  padding: 20px;
  text-align: center;
  background-color: white;
  color: black;
`;

const StyledPrice = styled.ul`
  &:hover {
    box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.2);
  }
  color: white;
  font-size: 25px;
  color: black;
`;

export default PricingBox;
