import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  background-color: #df54ad;
  width: auto;
  border: none;
  justify-self: center;
  align-self: center;
  margin-bottom: auto;
  color: #fff;
  text-align: center;
  &:hover {
    background-color: #1a1e83;
    color: #fff;
  }
`;

export default function Buttons({ children }) {
  return <ButtonStyle>{children}</ButtonStyle>;
}
