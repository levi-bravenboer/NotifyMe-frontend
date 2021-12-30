import React, { useState } from "react";
import styled from "styled-components";
import NavButton from "./NavButton";
import { Link } from "react-router-dom";

function Nav(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavBar isOpen={isOpen}>
      <Link to="/">
        <Logo>
          NOTIFY <span>me</span>
        </Logo>
      </Link>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <Link to="/">
          <MenuItem active={props.discover}>Discover</MenuItem>
        </Link>
        <Link to="/pricing">
          <MenuItem active={props.pricing}>Pricing</MenuItem>
        </Link>
        <Link to="/How">
          <MenuItem active={props.how}>How it works</MenuItem>
        </Link>
        <Link to="/">
          <NavButton name="Login"></NavButton>
        </Link>
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
    background-color: ${({ isOpen }) => isOpen && "var(--cool-blue)"};
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

const MenuItem = styled.a`
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease-in;

  &:hover {
    color: var(--green-color);
  }

  ${({ active }) =>
    active &&
    `
    color: var(--green-color);
  `}
  @media (max-width: 940px) {
    font-size: 1rem;
    padding-top: 1rem;
  }
`;

const Logo = styled.a`
  padding: 1rem 0;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

const Menu = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 940px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0px")};
    transition: all 0.2s ease-in-out;
  }
`;

export default Nav;
