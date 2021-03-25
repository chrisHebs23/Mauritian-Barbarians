import React from "react";
import useFirestore from "../../hooks/useFirestore";
import styled from "styled-components";
import { motion } from "framer-motion";
import Carousel from "nuka-carousel";

const Image = styled(motion.img)`
  width: 60%;
  height: auto;
  margin: 0 auto;
`;

const ImageContainer = styled.a`
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
`;

const Slider = styled(Carousel)`
  background-color: rgba(191, 191, 191, 0.1);
  height: auto !important;
  width: 100% !important;
  margin: 0 auto;

  @media (max-width: 30rem) {
  }

  .slider-slide {
    display: flex !important;
    justify-items: center;
    align-items: center;
  }
  .slider-control-centerright,
  .slider-control-centerleft {
    display: none;
  }
  .slider-control-bottomcenter {
  }
`;

const SimpleSlider = () => {
  const { docs } = useFirestore("sponsors");

  return (
    <Slider autoplay>
      {docs.map((doc) => (
        <ImageContainer href={doc.website} target="_blank" key={doc.id}>
          <Image src={doc.url} />
        </ImageContainer>
      ))}
    </Slider>
  );
};

export default SimpleSlider;
