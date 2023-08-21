import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FontAwesome from "react-fontawesome";

function Dropdown({ list, isOpen, headerTitle, onSelect }) {
  const [listOpen, setListOpen] = useState(false);

  useEffect(() => {
    setListOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    setListOpen(isOpen);
  }, [isOpen]);

  const toggleList = () => {
    setListOpen(!listOpen);
  };

  return (
    <DropdownWrapper>
      <button type="button" className="dd-header" onClick={toggleList}>
        <div className="dd-header-title">{headerTitle}</div>
        {listOpen ? (
          <FontAwesome name="angle-up" size="2x" />
        ) : (
          <FontAwesome name="angle-down" size="2x" />
        )}
      </button>
      {listOpen && (
        <div role="list" className="dd-list">
          {list.map((item) => (
            <button
              type="button"
              className="dd-list-item"
              key={item.id}
              onClick={() => onSelect(item)}
            >
              {item.title} {item.selected && <FontAwesome name="check" />}
            </button>
          ))}
        </div>
      )}
    </DropdownWrapper>
  );
}

const DropdownWrapper = styled.div`
  font-family: "Avenir Next", sans-serif !important;
`;

export default Dropdown;
