import React from "react";
import styled from "styled-components";
import NavButton from "./NavButton";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <NavigationStyled>
      <ul>
        <li className={props.discover ? "clickedItem" : null}>
          <Link to="/">Discover</Link>
        </li>
        <li className={props.pricing ? "clickedItem" : null}>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li className={props.how ? "clickedItem" : null}>
          <Link to="/how">How it Works</Link>
        </li>
      </ul>
      <NavButton name={"Login"} />
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  min-height: 10vh;
  align-items: center;
  width: 90%;
  margin-left: 20%;
  ul {
    display: flex;
    justify-content: space-between;
    width: 50%;
    align-items: center;
  }
  li {
    font-family: "Avenir Next", sans-serif !important;

    :hover {
      color: var(--green-color);
    }
  }

  button {
    margin-right: 15%;
  }

  .clickedItem {
    color: var(--green-color);
  }
`;

export default Nav;
