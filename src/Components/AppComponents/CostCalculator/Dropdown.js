import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Dropdown = ({ options, placeholder, onClick }) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedOption, setSelectedItem] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    const newValue = selectedOption == id ? null : id;
    if (newValue) toggleDropdown();
    setSelectedItem(newValue);
    onClick(newValue);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <StyledDropdownOuterContainer ref={dropdownRef}>
      <StyledDropdownContainer>
        <StyledDropdownHeader onClick={toggleDropdown}>
          {selectedOption
            ? options.find((option) => option.id == selectedOption).title
            : placeholder}
          <StyledIcon
            className={`fa fa-chevron-right ${isOpen && 'open'}`}
          ></StyledIcon>
        </StyledDropdownHeader>
        <StyledDropdownBody className={`${isOpen && 'open'}`}>
          {options.map((item) => (
            <StyledDropdownItem
              onClick={(e) => handleItemClick(e.target.id)}
              id={item.id}
              key={item.id}
              className={`${item.id == selectedOption && 'selected'}`}
            >
              {item.title}
            </StyledDropdownItem>
          ))}
        </StyledDropdownBody>
      </StyledDropdownContainer>
    </StyledDropdownOuterContainer>
  );
};

const StyledDropdownOuterContainer = styled.div`
  position: relative;
  display: block;
`;

const StyledDropdownContainer = styled.div`
  min-width: 200px;
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const StyledDropdownHeader = styled.div`
  padding: 15px;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
`;

const StyledDropdownBody = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 10;
  border-top: 1px solid #e5e8ec;
  display: none;
  max-height: 60vh;
  overflow-y: auto;
  background-color: white;

  &.open {
    display: block;
  }
`;

const StyledDropdownItem = styled.div`
  padding: 10px;

  &.selected {
    background-color: #d3d3d3;
  }

  &:hover {
    cursor: pointer;
  }
`;

const StyledIcon = styled.i`
  font-size: 13px;
  flex-shrink: 0;
  width: 20px;
  text-align: center;
  transform: rotate(0deg);
  transition: all 0.2s ease-in-out;

  &.open {
    transform: rotate(90deg);
  }
`;

export default Dropdown;
