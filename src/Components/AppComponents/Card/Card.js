import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import styled from 'styled-components';

const Card = ({ image, active, onHeartClick }) => {
  return (
    <StyledContainer image={image}>
      <StyledHeartIcon active={active} onClick={onHeartClick} />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fff;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
`;

const StyledHeartIcon = styled(({ active, ...rest }) => (
  <AiFillHeart {...rest} />
))`
  width: 1em;
  height: 1em;
  vertical-align: middle;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  color: ${(props) => (props.active ? '#ff0000' : '#d3d3d3')};
  cursor: pointer;

  &:hover {
    color: ${(props) => (props.active ? '#ff6666' : '#a9a9a9')};
  }
`;

export default Card;
