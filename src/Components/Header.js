import React from "react";
import styled from "styled-components";
import background_img from "../img/bg.svg";
import Nav from "./Nav";

function Header() {
  return (
    <HeaderStyled>
      <div className="header-content">
        <Nav />
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  height: 100vh;
  width: 100%;
  background-image: url(${background_img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 150%;
  .header-content {
    padding: 0 10rem;
  }
`;

export default Header;
