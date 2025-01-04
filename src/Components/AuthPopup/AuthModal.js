import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import PasswordConfirm from './PasswordConfirm';
import RegisterForm from './RegisterForm';

function AuthPopupModal(props) {
  return (
    <StyledModalOverlay>
      <StyledModal>
        <StyledCloseButton to={'/'} onClick={props.closeFunction}>
          &times;
        </StyledCloseButton>
        {props.type === 'login' && (
          <LoginForm closeAuth={props.closeFunction} />
        )}
        {props.type === 'password-confirm' && (
          <PasswordConfirm closeAuth={props.closeFunction} />
        )}
        {props.type === 'register' && <RegisterForm />}
      </StyledModal>
    </StyledModalOverlay>
  );
}
const StyledModalOverlay = styled.div`
  display: flex;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.4);
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
