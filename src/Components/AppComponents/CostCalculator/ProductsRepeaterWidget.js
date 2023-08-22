import React from 'react';
import styled from 'styled-components';
import RepeaterRow from './RepeaterRow';

function ProductsRepeaterWidget({
  rows = [],
  dropdownOptions,
  euroDollarRate = 1,
  setRows,
}) {
  // const defaultRow = {

  // };

  const setRow = (newValue, index) => {
    const newRows = rows;
    newRows[index] = newValue;
    setRows(newRows);
  };

  return (
    <StyledContainer>
      {rows.map((row, index) => {
        return (
          <RepeaterRow
            key={index}
            euroDollarRate={euroDollarRate}
            dropdownOptions={dropdownOptions}
            value={row}
            onChange={setRow}
            index={index}
          />
        );
      })}
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
`;

export default ProductsRepeaterWidget;
