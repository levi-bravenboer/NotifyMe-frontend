import React, { useState } from 'react';
import styled from 'styled-components';

const Input = ({ type, placeholder, value, onChange, icon: Icon }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <StyledInputWrapper>
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        $isFocused={isFocused}
      />
      {Icon && (
        <IconWrapper $isFocused={isFocused}>
          <Icon />
        </IconWrapper>
      )}
    </StyledInputWrapper>
  );
};

const StyledInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.span`
  position: absolute;
  left: 10px;
  color: #999;
  display: flex;
  align-items: center;
  opacity: ${(props) => (props.$isFocused ? 0 : 1)};
  transition: opacity 0.2s ease-in-out;
`;

const StyledInput = styled.input`
  padding: 10px 10px 10px ${(props) => (props.$isFocused ? '10px' : '40px')};
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  transition: padding 0.2s ease-in-out;

  &::placeholder {
    opacity: ${(props) => (props.$isFocused ? 0 : 1)};
    transition: opacity 0.2s ease-in-out;
  }
`;

export default Input;
