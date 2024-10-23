import React from 'react';
import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';

const Sheet = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <StyledSheetOverlay onClick={onClose} />
      <StyledSheetContent isOpen={isOpen}>
        <StyledCloseButton onClick={onClose}>
          <IoClose />
        </StyledCloseButton>
        {children}
      </StyledSheetContent>
    </>
  );
};

export default Sheet;

const StyledSheetOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 50;
`;

const StyledSheetContent = styled.div`
  position: fixed;
  z-index: 51;
  background-color: white;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease-in-out;
  top: 0;
  right: 0;
  bottom: 0;
  width: 450px;
  transform: translateX(${(props) => (props.isOpen ? '0' : '100%')});
  padding: 20px;
`;

const StyledCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 5px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
