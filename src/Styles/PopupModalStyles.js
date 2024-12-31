import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledInput = styled.input`
  margin-top: 2vh;
  display: block;
  width: 100%;
  padding: 10px;
  outline: none;
  border: 1px solid #aaa;
  border-radius: 5px;
`;

export const StyledSubmitButton = styled.button`
  margin-top: 4vh;

  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  font-size: 1.2rem;
  color: white;
  background-color: var(--green-color);
  border-radius: 15px;
  cursor: pointer;
  font-weight: 600;
`;

export const StyledForm = styled.form`
  margin: 10% 10% 10% 10%;
  min-width: 80%;
  min-height: 40%;
`;

export const StyledLoader = styled.form`
  display: flex;
  align-items: center;
`;
export const StyledLoadingGif = styled.img`
  width: 2.5rem;
  height: auto;
  align-items: center;
`;

export const StyledFormLink = styled(Link)`
  display: right;
  text-align: right;
  font-size: 1rem;
  color: #1a79ca;
  text-decoration: none;
  font-weight: 600;
`;

export const StyledPopupModal = styled.div`
  margin: 10% 10% 10% 10%;
  min-width: 80%;
  min-height: 40%;
  background-color: white;
  text-align: center;
  margin-top: 10%;
`;

export const StyledFormErrorText = styled.div`
  color: red;
  font-family: 'Inter';
  font-style: 'normal';
  font-weight: 'normal';
  font-size: 0.8rem;
  color: red;
  white-space: 'pre-wrap';
  padding-left: 16px;
  padding-top: 4px;
`;

export const StyledLinkButton = styled(Link)`
  margin-top: 4vh;
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  font-size: 1.2rem;
  color: white;
  background-color: var(--green-color);
  border-radius: 15px;
  cursor: pointer;
  font-weight: 600;
`;
