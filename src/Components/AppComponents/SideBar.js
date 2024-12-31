import React, { useContext, useMemo } from 'react';
import { AiOutlineUser, AiFillSkin } from 'react-icons/ai';
import {
  RiHomeLine,
  RiFileCopyLine,
  RiLogoutBoxLine,
  RiCalculatorFill,
} from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AvatarImage from '../../Assets/round_avatar.png';
import AuthContext from '../../Context/auth-context';

function Sidebar() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const { user } = authContext;

  const userData = useMemo(
    () => ({
      firstname: user.firstname || 'Sir/Madam.',
      lastname: user.lastname || '',
      avatar: user.userImg || AvatarImage,
    }),
    [user]
  );

  const navItems = useMemo(
    () => [
      {
        title: 'Dashboard',
        navigationPath: '/app',
        icon: RiHomeLine,
      },
      {
        title: 'Calculator',
        navigationPath: '/app/cost-calculator',
        icon: RiCalculatorFill,
      },
      {
        title: 'Products',
        navigationPath: '/app/products',
        icon: AiFillSkin,
      },
      {
        title: 'My settings',
        navigationPath: '/app/me',
        icon: AiOutlineUser,
      },
    ],
    []
  );

  return (
    <StyledContainer>
      <StyledProfileContainer>
        <StyledAvatar src={userData.avatar} />
        <StyledName>{`${userData.firstname} ${userData.lastname}`}</StyledName>
      </StyledProfileContainer>
      <StyledLinksContainer>
        <StyledLinks>
          {navItems.map((item) => (
            <StyledLink
              key={item.title}
              onClick={() => navigate(item.navigationPath)}
              aria-label={`Navigate to ${item.title}`}
            >
              <item.icon />
              <h3>{item.title}</h3>
            </StyledLink>
          ))}
        </StyledLinks>
        <StyledLogoutContainer onClick={() => authContext.logoutUser()}>
          <span>
            <RiLogoutBoxLine />
            Logout
          </span>
        </StyledLogoutContainer>
      </StyledLinksContainer>
    </StyledContainer>
  );
}

const BaseContainer = styled.div`
  border-radius: 2rem;
  background-color: #091322;
  color: #c4c4c4;
  &:hover {
    cursor: pointer;
  }
`;

const StyledContainer = styled(BaseContainer)`
  min-width: 250px;
  width: 20%;
  height: 100% !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
  }
`;

const StyledProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledAvatar = styled.img`
  height: 7rem;
  border-radius: 6rem;
  margin-top: 20%;
  background-color: white;
`;

const StyledName = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;

const StyledLinksContainer = styled(BaseContainer)`
  height: 100%;
  width: 100%;
`;

const StyledLinks = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 2rem;
  height: 75%;
`;

const StyledLink = styled.li`
  margin-left: 20%;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  h3 {
    font-weight: 300;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 3%;
  }
  &:hover {
    transform: scale(1.05);
    color: #ffffff;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    svg {
      margin-top: 0.7rem;
    }
  }
`;

const StyledLogoutContainer = styled(BaseContainer)`
  width: 60%;
  height: 15%;
  margin: auto auto;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: center;

  &:hover {
    background-color: #162349;
    transform: scale(1.05);
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;

export default Sidebar;
