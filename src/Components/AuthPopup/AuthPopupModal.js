import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import PasswordConfirm from "./PasswordConfirm";

function AuthPopupModal(props) {
  return (
    <StyledModalOverlay>
      <StyledModal>
        <StyledCloseButton to={"/"} onClick={props.closeFunction}>
          &times;
        </StyledCloseButton>
        {props.type === "login" ? (
          <LoginForm closeAuth={props.closeFunction}></LoginForm>
        ) : null}
        {props.type === "password-confirm" ? (
          <PasswordConfirm closeAuth={props.closeFunction}></PasswordConfirm>
        ) : null}
        {props.type === "register" ? <RegisterForm></RegisterForm> : null}
      </StyledModal>
    </StyledModalOverlay>
  );
}
const StyledModalOverlay = styled.div`
  display: flex; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;
const StyledModal = styled.div`
  border-radius: 5px;
  background-color: #fefefe;
  margin: auto;
  border: 1px solid #888;
  width: 50%;
  min-height: 40%;
  position: relative;
  @media screen and (max-width: 940px) {
    width: 80%;
  }
`;

const StyledCloseButton = styled(Link)`
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  cursor: default;
  &:hover {
    color: var(--green-color);
  }
`;

export default AuthPopupModal;
