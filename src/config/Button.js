import React from "react";
import styled from "styled-components";
import * as theme from "./theme";

const ButtonStyle = styled.button`
  background-color: ${theme.primaryPink};
  width: auto;
  border: none;
  justify-self: center;
  align-self: center;
  margin-bottom: auto;
  color: #fff;
  text-align: center;
  :hover {
    background-color: ${theme.primaryBlue};
  }
`;

export default function Buttons({ children }) {
  return <ButtonStyle>{children}</ButtonStyle>;
}
