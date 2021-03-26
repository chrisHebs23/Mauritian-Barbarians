import React from "react";
import useFirestore from "../../hooks/useFirestore";
import styled from "styled-components";
import { motion } from "framer-motion";
import Carousel from "nuka-carousel";

const Image = styled(motion.img)`
  width: 18rem;
  height: auto;
  margin: auto;
  @media (max-width: 30rem) {
    width: 10rem;
  }
`;

const ImageContainer = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  justify-self: center;
  align-self: center;
  margin-bottom: 10%;
`;

const Slider = styled(Carousel)`
  height: 70% !important;
  width: 100% !important;

  @media (max-width: 30rem) {
    height: 50% !important;
  }

  .slider-frame {
    height: 90% !important;
  }

  .slider-list {
    margin: 5% 20% !important;
  }

  .slider-slide {
    display: flex !important;
    justify-self: center;
    align-items: center;
    width: 100% !important;
    height: auto !important;
  }
  .slider-control-centerright,
  .slider-control-centerleft {
    display: none;
  }
  .slider-control-bottomcenter {
    margin-top: 5%;
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
