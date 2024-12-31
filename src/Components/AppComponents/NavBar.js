import dayjs from 'dayjs';
import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import AuthContext from '../../Context/auth-context';

function NavBar() {
  const [partOfDay, setPartOfDay] = useState('evening');
  const authContext = useContext(AuthContext);
  const firstname = authContext.user.firstname
    ? authContext.user.firstname
    : 'Sir/Madam.';

  useEffect(() => {
    const currentHour = dayjs().hour();
    if (currentHour < 12) {
      setPartOfDay('morning');
    } else if (currentHour < 18) {
      setPartOfDay('afternoon');
    }
  }, []);

  return (
    <StyledNavbarContainer>
      <StyledHeader>
        {`Good ${partOfDay}, `}
        <span>{firstname}</span>
      </StyledHeader>
    </StyledNavbarContainer>
  );
}

const StyledNavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

const StyledHeader = styled.h1`
  margin-left: 1%;
  span {
    font-weight: 500;
    color: #484258;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 1rem;
  }
`;

export default NavBar;
