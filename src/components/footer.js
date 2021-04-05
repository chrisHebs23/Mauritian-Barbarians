import React from "react";
import styled from "styled-components";
import * as theme from "../themes/theme";
import { FacebookCircle } from "@styled-icons/boxicons-logos/FacebookCircle";
import { InstagramAlt } from "@styled-icons/boxicons-logos/InstagramAlt";
import { StyledIconBase } from "@styled-icons/styled-icon";

const FooterStyle = styled.footer`
  background-color: ${theme.primaryBlue};
  width: 100%;
  height: 4rem;
  position: absolute;
  bottom: auto;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  flex-direction: row;
  align-items: center;
  justify-self: flex-end;
  justify-items: center;
`;

const IconStyleWrapper = styled.div`
  width: 100%;
  grid-column: 1/2;
  display: flex;
  justify-content: center;

  @media (max-width: 30rem) {
    width: 100%;
  }

  ${StyledIconBase} {
    width: 2.5rem;
    height: 2.5rem;
    color: #fff;
    margin-right: 2%;

    &:hover {
      color: ${theme.primaryPink};
      transform: rotate(50deg);
    }
  }
`;

const Year = styled.p`
  color: #fff;
  font-size: 0.9rem;
  margin: auto;
  @media (max-width: 30rem) {
    grid-column: 2/4;
    font-size: 0.7rem;
  }
`;

const getYear = () => {
  return new Date().getFullYear();
};

export default function Footer() {
  return (
    <FooterStyle>
      <IconStyleWrapper>
        <FacebookCircle />
        <InstagramAlt />
      </IconStyleWrapper>
      <Year>© {getYear()} Mauritian Barbarians</Year>
    </FooterStyle>
  );
}
