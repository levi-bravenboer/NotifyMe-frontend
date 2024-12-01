import React from 'react';
import styled from 'styled-components';

const Input = ({ type, placeholder, value, onChange, icon: Icon }) => {
  return (
    <StyledInputWrapper>
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {Icon && (
        <IconWrapper>
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
`;

const StyledInput = styled.input`
  padding: 10px 10px 10px 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
`;

export default Input;
