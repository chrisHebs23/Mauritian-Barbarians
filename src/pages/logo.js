import React, { useState } from "react";
import LogoForm from "./Sponsors/LogoForm";
import LogoDisplay from "./Sponsors/logoDisplay";
import { Title } from "./gallery";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

const ButtonContainer = styled.div`
  margin-left: 2%;
`;
const Button = styled.button`
  width: 10rem;
  margin: 5%;
  border: none;
  background-color: ${theme.primaryPink};
  color: #fff;
  text-align: center;
`;

export default function Upload() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/home");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <div>
      <Title>Upload Sponsors Logo</Title>
      {currentUser.email}
      <ButtonContainer>
        <Button onClick={handleLogout}>Log Out</Button>
      </ButtonContainer>
      <LogoForm />
      <LogoDisplay />
    </div>
  );
}
