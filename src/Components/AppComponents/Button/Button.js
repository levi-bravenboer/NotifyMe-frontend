import React from 'react';
import styled from 'styled-components';

export default function Button({ size = 'medium', ...props }) {
  return (
    <StyledButton size={size} {...props}>
      {props.children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  transition: all 0.2s ease;
  padding: ${(props) =>
    props.size === 'small'
      ? '0.375rem 0.75rem'
      : props.size === 'large'
        ? '0.625rem 1.25rem'
        : '0.5rem 1rem'};

  color: #ffffff;
  background-color: #000000;
  border: none;

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &:hover {
    cursor: pointer;
  }
`;
