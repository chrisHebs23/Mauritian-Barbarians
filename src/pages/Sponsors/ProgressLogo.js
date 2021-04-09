import React, { useEffect } from "react";
import useStorageLogo from "../../hooks/useStorageLogo";
import { motion } from "framer-motion";
import styled from "styled-components";
import * as theme from "../../themes/colors";

const Progressbar = styled(motion.div)`
  height: 5px;
  background: ${theme.PrimaryPink};
  margin-top: 20px;
`;

const ProgressLogo = ({ file, setFile }) => {
  const { progress, url } = useStorageLogo(file);
  console.log(progress, url);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <Progressbar
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></Progressbar>
  );
};

export default ProgressLogo;
