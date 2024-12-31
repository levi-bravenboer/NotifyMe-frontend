import React, { useEffect, useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import styled from 'styled-components';
import Dropdown from './Dropdown';
import RepeaterRow from './RepeaterRow';
import { getEuroToDollarExchangeRate } from '../../../Utils/currency-api/EuroToDollar';
import { getAllItems } from '../../../Utils/Items';
import Button from '../Button/Button';

function CostCalculator() {
  const [itemData, setItemData] = useState([]);
  const [dropdownData, setDropdownData] = useState([]);
  const [rows, setRows] = useState([]);
  const [euroDollarRate, setEuroDollarRate] = useState(1);
  const [selectedItem, setSelectedItem] = useState();

  useEffect(() => {
    const fetchItemData = async () => {
      let items = [];
      try {
        items = await getAllItems();
      } catch (e) {
        console.error(e);
      }
      setItemData(items);
      setDropdownData(items.map(({ id, name }) => ({ id, title: name })));
    };

    const fetchRateData = async () => {
      try {
        const rate = await getEuroToDollarExchangeRate();
        setEuroDollarRate(rate);
      } catch (e) {
        console.error('Error fetching euro to dollar rate:', e);
        setEuroDollarRate(1);
      }
    };

    fetchItemData();
    fetchRateData();
  }, []);

  const addItem = () => {
    const item = itemData.find(({ id }) => Number(id) === Number(selectedItem));
    if (item) {
      const updatedRows = new Set(rows.map((row) => row.id));
      updatedRows.add(item.id);
      setRows(itemData.filter(({ id }) => updatedRows.has(id)));
    }
  };

  return (
    <>
      <StyledView>
        <StyledHeader>
          <Dropdown
            onClick={setSelectedItem}
            placeholder="Select item"
            options={dropdownData}
          />
          <Button onClick={addItem} disabled={!selectedItem || rows.length > 4}>
            <StyledIcon />
          </Button>
          <span>{`Items ${rows.length} / 5`}</span>
        </StyledHeader>
        <StyledContainer>
          {rows.map((row, index) => {
            return (
              <RepeaterRow
                key={index}
                euroDollarRate={euroDollarRate}
                value={row}
              />
            );
          })}
          <StyledFooter>test</StyledFooter>
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
  display: flex;
  gap: 1em;
  align-items: center;
`;

const StyledContainer = styled.div`
  padding: 20px 20px 20px 20px;
  width: 100%;
  max-height: 80%;
`;

const StyledIcon = styled(BiPlus)`
  min-height: 2em;
  vertical-align: middle;
  position: relative;
  top: -0.1em;
`;

const StyledFooter = styled.div`
  display: flex;
  gap: 10px;
`;

export default CostCalculator;
