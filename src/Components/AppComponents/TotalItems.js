import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoStatsChart } from "react-icons/io5";
import { getAllItems } from "../../Utils/ApiCalls";
function TotalItems() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let items = [];
      try {
        items = await getAllItems();
      } catch (e) {
        console.error(e);
      }
      return items;
    };
    setApiData(fetchData());
  }, []);

  return (
    <StyledTotalItems>
      <CardContent>
        <StyledChart>
          <IoStatsChart />
        </StyledChart>
        <TotalItemsText>Available items</TotalItemsText>
        <StyledItemsTotal>{apiData ? apiData.length : 0}</StyledItemsTotal>
        <StyledNewItems>More are coming!</StyledNewItems>
      </CardContent>
    </StyledTotalItems>
  );
}

const StyledTotalItems = styled.div`
  height: 100%;
  width: 14rem;
  background-color: #6100d4;
  padding: 1rem;
  border-radius: 1rem;
  color: white;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
  }
`;

const CardContent = styled.div`
  margin: 1rem;
`;

const StyledChart = styled.div`
  display: flex;
  justify-content: center;
  svg {
    height: 4rem;
    width: 4rem;
  }
`;

const TotalItemsText = styled.h3`
  text-align: center;
  font-weight: normal;
  padding: 0.4rem 0;
  font-size: 1.4rem;
`;

const StyledItemsTotal = styled.h2`
  text-align: center;
`;

const StyledNewItems = styled.h5`
  text-align: center;
  font-weight: normal;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  border-radius: 2rem;
`;

export default TotalItems;
