import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { ArrowLeftCircle } from "@styled-icons/bootstrap/ArrowLeftCircle";
import { ArrowRightCircle } from "@styled-icons/bootstrap/ArrowRightCircle";

const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: auto;
  height: auto;
`;

const Image = styled(motion.img)`
  max-width: 80%;
  max-height: 80%;
  margin-top: 2%;
  box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
  border: 3px solid white;
  @media (max-width: 64rem) {
    max-width: 95%;
    max-height: 95%;
    margin: 20%;
  }
`;

const LeftArrow = styled(ArrowLeftCircle)`
  margin-left: 2%;
  align-self: center;
  width: 2rem;
  height: 2rem;
  color: #fff;
  @media (max-width: 30rem) {
    align-content: flex-start;
    margin-top: 10%;
    color: blue;
  }
`;

const RightArrow = styled(ArrowRightCircle)`
  margin-right: 2%;
  align-self: center;
  width: 2rem;
  height: 2rem;
  color: #fff;
`;

export default function Modal({ setSelectedImg, selectedImg, images }) {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  // function handleLeftClick() {
  //   return images.indexOf(selectedImg);
  // }

  // function handleLeftClick() {}

  return (
    <Backdrop
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="backdrop"
    >
      <ImageContainer className="backdrop">
        <Image
          src={selectedImg}
          alt="enlarged pic"
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
        />
      </ImageContainer>
    </Backdrop>
  );
}
