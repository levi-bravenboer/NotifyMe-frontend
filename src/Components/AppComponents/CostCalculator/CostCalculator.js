import React from 'react';
import styled from 'styled-components';
import Dropdown from './Dropdown';

function CostCalculator() {
  return (
    <StyledContainer>
      <Dropdown onClick={console.log('test')} text="test" />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: auto;
`;

export default CostCalculator;
