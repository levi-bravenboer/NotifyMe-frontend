import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

function NavButton(props) {
  const navigate = useNavigate();
  const location = useLocation();
  if (!location.pathname) {
    location.pathname = '';
  }
  const handleClick = () => {
    if (props.type === 'launch') {
      navigate('/app');
    } else {
      props.onClickFunction('login');
      navigate(`${location.pathname}login`);
    }
  };
  return <NavButtonStyled onClick={handleClick}>{props.name}</NavButtonStyled>;
}

const NavButtonStyled = styled.a`
  font-family: 'Avenir Next', sans-serif !important;

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
