import React, { useState } from "react";
import styled from "styled-components";
import ProgressLogo from "./ProgressLogo";
import * as theme from "../../themes/colors";

const Form = styled.form`
  /* margin: 30px auto 10px; */
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  width: 30px;
  height: 30px;
  border: 1px solid ${theme.PrimaryBlue};
  border-radius: 50%;
  /* margin: auto; */
  /* line-height: 30px; */
  background-color: ${theme.PrimaryPink};
  font-weight: bold;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    height: 0;
    width: 0;
    opacity: 0;
  }

  &:hover {
    background: ${theme.PrimaryPink};
    color: #fff;
  }
`;

const Plus = styled.span`
  margin: auto 0;
`;

const LogoForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };

  return (
    <Form>
      <Label>
        <input type="file" onChange={handleChange} />
        <Plus>+</Plus>
      </Label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressLogo file={file} setFile={setFile} />}
      </div>
    </Form>
  );
};

export default LogoForm;
