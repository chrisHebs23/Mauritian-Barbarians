import React from "react";
import useFirestore from "../../hooks/useFirestore";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import LazyLoad from "react-lazyload";

const loadingAnimation = keyframes`
  0% {
    background-color: #fff;
  }
  50% {
    background-color: #ccc;
  }
  100% {
    background-color: #fff;
  }
`;

const ImageGrid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  width: 100%;
  padding: 0;

  @media (max-width: 64rem) {
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

  @media (max-height: 64rem) {
    li {
      height: 80vh;
    }
  }
`;

const Image = styled(motion.img)`
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  image-resolution: auto;
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

const ImageLayout = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  let index = 0;
  return (
    <ImageGrid>
      {docs &&
        docs.map((doc) => (
          <ImageWrap key={doc.id} onClick={() => setSelectedImg(doc.url)}>
            <Image src={doc.url} alt="gallery Images" />
          </ImageWrap>
        ))}
    </ImageGrid>
  );
};

export default ImageLayout;
