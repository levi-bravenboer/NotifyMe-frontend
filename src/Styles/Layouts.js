import styled from "styled-components";

export const OuterLayout = styled.section`
  background-color: var(--outerlayout-bg-color);
  backdrop-filter: blur(16px);

  position: absolute;
  width: 100%;
  height: 100%;
`;

export const InnerLayout = styled.section`
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
`;
