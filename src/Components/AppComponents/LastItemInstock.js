import React from "react";
import styled from "styled-components";
import AvatarImage from "../../Assets/round_avatar.png";

function LastItemInstock() {
  return (
    <RecommendProject>
      <StyledCardContent>
        <StyledDetail>
          <InfoContainer>
            <StyledAvatar>
              <img src={AvatarImage} alt="" />
            </StyledAvatar>
            <Info>
              <InfoName>Thomas Martin</InfoName>
              <InfoUpdate>Updated 10m ago</InfoUpdate>
            </Info>
          </InfoContainer>
        </StyledDetail>
        <StyledTitle>
          Need a designer to form branding essentials for my business.
        </StyledTitle>
        <ProjectInfo>
          Looking for a talented brand designer to create all the branding
          materials for my new startup.
        </ProjectInfo>
        <StyledPriceContainer>
          <Price>$8700/month</Price>
        </StyledPriceContainer>
      </StyledCardContent>
    </RecommendProject>
  );
}

const RecommendProject = styled.div`
  border-radius: 1rem;
  height: 130%;
  padding: 1rem;
  background-color: white;
  width: 27.5vw;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 80%;
    margin: 2rem 0;
  }
`;

const StyledCardContent = styled.div`
  margin: 0.4rem;
`;

const StyledDetail = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.2rem;
    margin-bottom: 1rem;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;
const StyledAvatar = styled.div`
  margin-right: 1rem;
  img {
    height: 5rem;
    border-radius: 5rem;
  }
`;
const Info = styled.div``;
const InfoName = styled.h3`
  font-weight: 500;
`;
const InfoUpdate = styled.h5`
  font-weight: 300;
`;
const StyledTitle = styled.h4`
  font-weight: 500;
`;
const ProjectInfo = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  color: #3b3b3b;
  margin-bottom: 0.5em;
`;
const StyledPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background-color: rgba(146, 166, 255, 0.3);
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;

    gap: 0.4rem;
  }
`;
const Price = styled.div``;

export default LastItemInstock;
