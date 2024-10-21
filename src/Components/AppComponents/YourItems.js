import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NoImageFound from '../../Assets/no_image_found.png';

function YourItems() {
  return (
    <StyledContainer>
      <StyledProject>
        <StyledAvatar>
          <img src={NoImageFound} alt="" />
        </StyledAvatar>
        <StyledDetail>
          <StyledTitle>No items are being followed</StyledTitle>
          <StyledSubTitle>0 day remaining</StyledSubTitle>
        </StyledDetail>
      </StyledProject>
      <StyledLink to={'/app/my-items'}>See all your items</StyledLink>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  height: 70%;
  background-color: white;
  margin: 0;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 75%;
    margin-top: 1rem;
  }
`;

const StyledProject = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
`;
const StyledAvatar = styled.div`
  img {
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
  }
`;
const StyledDetail = styled.div`
  margin-left: 1rem;
`;
const StyledTitle = styled.h3`
  font-weight: 500;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
  }
`;
const StyledSubTitle = styled.h5`
  font-weight: 300;
`;
const StyledLink = styled(Link)`
  float: right;
  color: #6100d4;
  cursor: pointer;
`;

export default YourItems;
