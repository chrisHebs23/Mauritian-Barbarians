import React, { useState } from "react";
import styled from "styled-components";
import ProgressBarGallery from "./ProgressBarGallery";
import * as theme from "../../themes/theme";

const Form = styled.form`
  text-align: center;
  display: flex;
  justify-content: center;
  align-self: center;
`;

const Label = styled.label`
  width: 30px;
  height: 30px;
  border: 1px solid ${theme.primaryBlue};
  border-radius: 50%;
  background-color: ${theme.primaryPink};
  font-weight: bold;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
  align-self: center;
  input {
    height: 0;
    width: 0;
    opacity: 0;
  }

  &:hover {
    background: ${theme.primaryPink};
    color: #fff;
  }
`;

const Plus = styled.span`
  margin-bottom: 3%;
  display: flex;
  justify-content: center;
  align-self: center;
`;

const UploadForm = () => {
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
        {file && <ProgressBarGallery file={file} setFile={setFile} />}
      </div>
    </Form>
  );
};

export default UploadForm;
