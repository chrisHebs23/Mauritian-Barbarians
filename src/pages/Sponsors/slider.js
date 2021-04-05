import React from "react";
import useFirestore from "../../hooks/useFirestore";
import styled from "styled-components";
import { motion } from "framer-motion";
import Carousel from "nuka-carousel";
import * as theme from "../../themes/theme";

const Image = styled(motion.img)`
  width: 18rem;
  height: auto;
  margin: auto;

  @media (max-width: 42rem) {
    width: 13rem;
  }
  @media (max-width: 30rem) {
    width: 12rem;
  }
`;

const ImageContainer = styled.a`
  width: auto;
  height: auto;
`;

const Slider = styled(Carousel)`
  height: 35vh !important;
  width: 100% !important;

  @media (max-width: 30rem) {
    height: 25vh !important;
  }
  .slider-frame {
    height: 100% !important;
  }

  .slider-list {
    height: 100% !important;
    width: 100% !important;
    margin: auto;
  }

  .slider-slide {
    display: flex !important; // make us of Flexbox
    align-items: center; // does vertically center the desired content
    justify-content: center; // horizontally centers single line items
    text-align: center; // optional, but helps horizontally center text that breaks into multiple lines
  }

  .slider-control-centerright,
  .slider-control-centerleft {
    display: none;
  }

  button {
    fill: ${theme.primaryPink} !important;
  }
`;

const SimpleSlider = () => {
  const { docs } = useFirestore("sponsors");

  return (
    <Slider autoplay autoplayInterval={1000} pauseOnHover wrapAround>
      {docs.map((doc) => (
        <ImageContainer href={doc.website} target="_blank" key={doc.id}>
          <Image src={doc.url} />
        </ImageContainer>
      ))}
    </Slider>
  );
};

export default SimpleSlider;
