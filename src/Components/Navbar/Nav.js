import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavButton from './NavButton';
import AuthContext from '../../Context/auth-context';

function Nav(props) {
  const authContext = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavBar isOpen={isOpen}>
      <Logo to="/">
        NOTIFY <span>me</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuItem to={'/'} aria-current={props.discover ? 'page' : undefined}>
          Discover
        </MenuItem>
        <MenuItem
          to={'/pricing/'}
          aria-current={props.pricing ? 'page' : undefined}
        >
          Pricing
        </MenuItem>
        <MenuItem to={'/how/'} aria-current={props.how ? 'page' : undefined}>
          How it works
        </MenuItem>
        <NavButton
          onClick={props.showModal}
          type={authContext.user ? 'launch' : props.type}
          name={authContext.user ? 'Launch' : 'Login'}
        ></NavButton>
      </Menu>
    </NavBar>
  );
}

const NavBar = styled.div`
  padding: 0 2rem;
  justify-content: space-between;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background: none;
  margin-top: 1rem;

  @media (max-width: 940px) {
    margin-top: 0;
    border-radius: 8px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: ${({ isOpen }) => isOpen && 'var(--cool-blue)'};
    transition: all 0.2s ease-in-out;
  }
`;

const Hamburger = styled.div`
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: black;
    margin-bottom: 4px;
    border-radius: 5px;

    @media (max-width: 940px) {
      display: flex;
    }
  }
`;

const MenuItem = styled(Link)`
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease-in;
  font-size: 1.4rem;
  &:hover {
    color: var(--green-color);
  }
  color: ${({ 'aria-current': ariaCurrent }) =>
    ariaCurrent === 'page' ? 'var(--green-color)' : 'inherit'};

  @media (max-width: 940px) {
    padding-top: 1rem;
  }
`;

const Logo = styled(Link)`
  padding: 1rem 0;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 940px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0px')};
    transition: all 0.2s ease-in-out;
  }
`;

export default Nav;
