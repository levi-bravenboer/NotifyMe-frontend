import React, { useContext } from "react";
import styled from "styled-components";
import { RiHomeLine, RiFileCopyLine, RiLogoutBoxLine } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { AiOutlineUser, AiFillSkin } from "react-icons/ai";
import AvatarImage from "../../Assets/round_avatar.png";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";

function Sidebar(props) {
  let navigate = useNavigate();
  let authContext = useContext(AuthContext);
  let firstname = authContext.user.firstname
    ? authContext.user.firstname
    : "Sir/Madam.";
  let lastname = authContext.user.lastname ? authContext.user.lastname : "";
  let Avatar = authContext.user.userImg
    ? authContext.user.userImg
    : AvatarImage;
  return (
    <StyledContainer>
      <StyledProfileContainer>
        <StyledAvatar src={Avatar} />
        <StyledName>{`${firstname} ${lastname}`}</StyledName>
      </StyledProfileContainer>
      <StyledLinksContainer>
        <StyledLinks>
          <StyledLink onClick={() => navigate("/app")}>
            <RiHomeLine />
            <h3>Dashboard</h3>
          </StyledLink>
          <StyledLink onClick={() => navigate("/app/my-items")}>
            <RiFileCopyLine />
            <h3>Your items</h3>
          </StyledLink>
          <StyledLink onClick={() => navigate("/app/subscriptions")}>
            <FaWallet />
            <h3>Subscriptions</h3>
          </StyledLink>
          <StyledLink onClick={() => navigate("/app/products")}>
            <AiFillSkin />

            <h3>Products</h3>
          </StyledLink>
          <StyledLink onClick={() => navigate("/app/me")}>
            <AiOutlineUser />
            <h3>My settings</h3>
          </StyledLink>
        </StyledLinks>
        <StyledLogoutContainer onClick={() => authContext.logoutUser()}>
          <span>
            <RiLogoutBoxLine />
          </span>
          <p>Logout</p>
        </StyledLogoutContainer>
      </StyledLinksContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 20%;
  height: 100% !important;
  border-radius: 2rem;
  background-color: #091322;
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

const StyledLinksContainer = styled.div`
  background-color: #162349;
  height: 100%;
  width: 100%;
  border-radius: 2rem;
`;

const StyledLinks = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 75%;
`;

const StyledLink = styled.li`
  margin-left: 25%;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;

  h3 {
    font-weight: 300;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 3%;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    svg {
      margin-top: 0.7rem;
    }
  }
`;

const StyledLogoutContainer = styled.div`
  width: 60%;
  background-color: #091322;
  color: #c4c4c4;
  height: 15%;
  margin: auto auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  &:hover {
    cursor: pointer;
  }
  p {
    color: white;
    text-decoration: none;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;

export default Sidebar;
