import React, { useState } from "react";
import ImageLayout from "./galleryComponents/imageLayout";
import UploadForm from "./galleryComponents/UploadForm";
import { Title } from "./gallery";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import * as theme from "../themes/theme";

const ButtonContainer = styled.div`
  display: flex;
  margin: 0 40%;
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
  let history = useHistory();

  async function handleClick(e) {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div>
      <Title>Upload Images</Title>

      <ButtonContainer>
        <Button onClick={handleClick}>Log Out</Button>
      </ButtonContainer>
      <UploadForm />
      <ImageLayout />
    </div>
  );
}
