import styled from "styled-components";
import blueBackground from "../Assets/handson_background.svg";

export const OuterLayout = styled.section`
  background-color: var(--outerlayout-bg-color);
  backdrop-filter: blur(16px);

  position: absolute;
  width: 100%;
  height: 100%;
`;

export const InnerLayout = styled.section`
  background-image: url(${blueBackground});
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  background-color: var(--innerlayout-bg-color);
  position: absolute;
  left: 5%;
  right: 5%;
  top: 5%;
  bottom: 5%;
  width: 90%;
  height: 90%;
  box-shadow: 0px 4px 70px rgba(0, 0, 0, 0.06);
  border-radius: 8px;

  @media screen and (max-width: 940px) {
    background-image: none;
    width: 95%;
    height: 95%;
    left: 2.5%;
    right: 2.5%;
    top: 2.5%;
    bottom: 2.5%;
  }
`;

export const AppLayout = styled.section`
  margin: 1rem 1rem 1rem 1rem;
  display: flex;
  height: 97vh;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;
