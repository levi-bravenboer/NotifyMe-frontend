import React, { useEffect } from 'react';
import styled from 'styled-components';
import Dropdown from 'react-dropdown';

function RepeaterRow({
  value,
  dropdownOptions,
  euroDollarRate = 1,
  onChange,
  index,
}) {
  const priceFormatted = () => {
    const euroPrice = `€ ${value}`;
    const dollarPrice = `$ ${value * euroDollarRate}`;
    return `Monthly price ${euroPrice} | ${dollarPrice}`;
  };

  useEffect(() => {
    onChange(index, value);
  }, [value]);

  return (
    <StyledContainer>
      <Dropdown
        options={dropdownOptions}
        onChange={this._onSelect}
        value={value}
        placeholder="Select an item"
      />
      <RepeaterRowPrice>{priceFormatted}</RepeaterRowPrice>
      <p>trashIcon</p>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: auto;
`;

const RepeaterRowPrice = styled.span`
  color: black;
  font-weight: bold;
`;

export default RepeaterRow;
