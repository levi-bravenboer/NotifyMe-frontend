import React from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import logo from "../img/logo.svg";

function Nav() {
  return (
    <NavigationStyled>
      <div className="logo">
        <img src={logo} alt=""></img>
      </div>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Prices</a>
        </li>
        <li>
          <a href="">Items</a>
        </li>
      </ul>
      <PrimaryButton name={"Login"} />
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export default Nav;
