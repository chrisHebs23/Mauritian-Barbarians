import React from "react";
import useFirestore from "../../hooks/useFirestore";
import styled from "styled-components";
import { motion } from "framer-motion";

const ImageGrid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  width: 100%;
  padding: 0;

  @media (max-width: 64rem) {
    ul {
      flex-direction: row;
    }

    li {
      height: auto;
      width: 100%;
    }

    img {
      width: 100%;
      max-height: 75vh;
      min-width: 0;
    }
  }
`;

const ImageWrap = styled(motion.li)`
  height: 40vh;
  flex-grow: 1;
  margin: 1%;

  @media (max-aspect-ratio: 1/1) {
    li {
      height: 30vh;
    }
  }
  @media (max-height: 64rem) {
    li {
      height: 80vh;
    }
  }
`;

const Image = styled(motion.img)`
  max-height: 100%;
  min-width: 45%;
  object-fit: cover;
  vertical-align: bottom;

  @media (max-width: 64rem) {
    img {
      width: 100%;
      max-height: 75vh;
      min-width: 0;
      overflow: hide;
    }
  }
`;

const LogoDisplay = ({ setSelectedImg }) => {
  const { docs } = useFirestore("sponsors");

  return (
    <ImageGrid>
      {docs &&
        docs.map((doc) => (
          <ImageWrap key={doc.id} onClick={() => setSelectedImg(doc.url)}>
            <Image src={doc.url} />
          </ImageWrap>
        ))}
    </ImageGrid>
  );
};

export default LogoDisplay;
