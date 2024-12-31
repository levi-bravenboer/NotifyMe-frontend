import React from 'react';
import { TbTrash } from 'react-icons/tb';
import styled from 'styled-components';
import {
  formatPrice,
  getMonthlyPrice,
} from '../../../Utils/currency-api/EuroToDollar';

function RepeaterRow({ value, euroDollarRate = 1, onDelete }) {
  const priceFormatted = (() => {
    const price = Number(value?.price);
    if (isNaN(price) || price < 0) {
      return 'No valid price available';
    }

    const monthlyPrice = getMonthlyPrice(price);
    const euroPrice = formatPrice(monthlyPrice, '€');
    const dollarPrice = formatPrice(monthlyPrice * euroDollarRate, '$');

    return `Monthly price: ${euroPrice} | ${dollarPrice}`;
  })();

  return (
    <StyledContainer>
      <RepeaterRowLabel>
        <span>{value?.name || '-'}</span>
        <RepeaterRowPrice>{priceFormatted}</RepeaterRowPrice>
      </RepeaterRowLabel>
      <TrashIcon onClick={onDelete()} />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.borderColor || '#ccc'};
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.backgroundColor || '#f9f9f9'};
`;

const RepeaterRowLabel = styled.div`
  display: flex;
  gap: 10px;
`;

const RepeaterRowPrice = styled.span`
  color: #333;
  font-weight: bold;
  font-size: 1rem;
  line-height: 200%;
`;

const TrashIcon = styled(TbTrash).attrs({
  role: 'button',
  'aria-label': 'Delete row',
})`
  cursor: pointer;
  font-size: 1.5rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export default RepeaterRow;
