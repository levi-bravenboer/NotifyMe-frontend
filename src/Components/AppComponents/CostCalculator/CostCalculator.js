import React from 'react';
import styled from 'styled-components';
import Dropdown from './Dropdown';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllItems } from '../../../Utils/ApiCalls';
import { euroToDollarRate } from '../../../Utils/currencyApi/ApiCalls';
import ProductsRepeaterWidget from './ProductsRepeaterWidget';
import CostSummaryWidget from './CostSummaryWidget';

function CostCalculator() {
  const [itemData, setItemData] = useState([]);
  const [rows, setRows] = useState([]);
  const [euroDollarRate, setEuroDollarRate] = useState(1);

  useEffect(() => {
    const fetchItemData = async () => {
      let items = [];
      try {
        items = await getAllItems();
      } catch (e) {
        console.error(e);
      }
      setItemData(items);
    };

    const fetchRateData = async () => {
      let rate = 1;
      try {
        rate = await euroToDollarRate();
      } catch (e) {
        console.error(e);
      }
      setEuroDollarRate(rate);
    };

    fetchItemData();
    fetchRateData();
  }, []);

  return (
    <>
      <StyledContainer>
        <Dropdown onClick={console.log('test')} text="test" />
      </StyledContainer>
      <StyledView>
        <StyledHeader>
          <p>test</p>
        </StyledHeader>
        <StyledContainer>
          <ProductsRepeaterWidget
            euroDollarRate={euroDollarRate}
            rows={rows}
            dropdownOptions={itemData}
            setRows={setRows}
          />
          <CostSummaryWidget></CostSummaryWidget>
        </StyledContainer>
      </StyledView>
    </>
  );
}

const StyledView = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledHeader = styled.div`
  margin: 20px 20px 20px 20px;
  width: 20%;
  heightt: 10%;
`;

const StyledContainer = styled.div`
  padding: 20px 20px 20px 20px;
  width: 100%;
  max-height: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

export default CostCalculator;
