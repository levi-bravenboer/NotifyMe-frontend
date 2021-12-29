import React from "react";
import styled from "styled-components";

function NavButton({ name }) {
  return <NavButtonStyled>{name}</NavButtonStyled>;
}

const NavButtonStyled = styled.button`
  font-family: "Avenir Next", sans-serif !important;

  background-color: transparent;
  padding: 0.6rem 2.2rem;
  font-size: 1.6rem;
  color: inherit;
  border-radius: 12px;
  border: 1px solid black;

  :hover {
    border: 1px solid var(--green-color);
    color: var(--green-color);
    transition: all 0.2s ease-in;
  }
`;

export default NavButton;
