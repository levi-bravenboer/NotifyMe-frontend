import React, { useEffect, useState } from "react";
import styled from "styled-components";
import noAvatarImage from "../../Assets/no_image_found.png";
import { getAllItems } from "../../Utils/ApiCalls";

function NewItems() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    getAllItems()
      .then((items) => {
        setApiData(items);
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      setApiData([]);
    };
  }, []);

  if (apiData) {
    return (
      <InvoicesContainer>
        <CardContent>
          <Invoice>
            <Info>
              <StyledAvatar>
                <img
                  src={
                    apiData.productimage != null
                      ? apiData.productimage
                      : noAvatarImage
                  }
                  alt=""
                />
              </StyledAvatar>
              <TextContainer>
                <StyledTitle>
                  {apiData[0] ? apiData[0].name : "Placeholder"}
                </StyledTitle>
                <StyledSubTitle>
                  {apiData[0] ? apiData[0].color : "Placeholder"}
                </StyledSubTitle>
              </TextContainer>
            </Info>
            <Container>
              <Price>{`€ ${apiData[0] ? apiData[0].price : "0.00"}`}</Price>
            </Container>
          </Invoice>
          <Invoice>
            <Info>
              <StyledAvatar>
                <img
                  src={
                    apiData.productimage ? apiData.productimage : noAvatarImage
                  }
                  alt=""
                />
              </StyledAvatar>
              <TextContainer>
                <StyledTitle>
                  {apiData[1] ? apiData[1].name : "Placeholder"}
                </StyledTitle>
                <StyledSubTitle>
                  {apiData[1] ? apiData[1].color : "Placeholder"}
                </StyledSubTitle>
              </TextContainer>
            </Info>
            <Container>
              <Price>{`€ ${apiData[1] ? apiData[1].price : "0.00"}`}</Price>
            </Container>
          </Invoice>
        </CardContent>
      </InvoicesContainer>
    );
  } else {
    return <p>test</p>;
  }
}

const InvoicesContainer = styled.div`
  width: 35rem;
  border-radius: 1rem;
  margin-top: 1rem;
  background-color: white;
  height: 140%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CardContent = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 2rem 0;
  }
`;
const Invoice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0.4rem;
  padding-top: 0.6rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
`;
const StyledAvatar = styled.div`
  img {
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 3.5rem;
  }
`;
const TextContainer = styled.div`
  margin-left: 1rem;
`;
const StyledTitle = styled.h4`
  font-size: 1.1rem;
`;
const StyledSubTitle = styled.h5`
  font-weight: 400;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    flex-direction: column;
    gap: 0.6rem;
  }
`;

const Price = styled.div``;

export default NewItems;
