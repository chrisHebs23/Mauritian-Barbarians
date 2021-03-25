import React from "react";
import LogoForm from "./Sponsors/LogoForm";
import LogoDisplay from "./Sponsors/logoDisplay";
import { Title } from "./gallery";

export default function Upload() {
  return (
    <div>
      <Title>Upload Sponsors Logo</Title>
      <LogoForm />
      <LogoDisplay />
    </div>
  );
}
