import React from "react";
import styled from "styled-components";
import Logo from "../../../public/logo.png";
import "aos/dist/aos.css";

export const InfoLayout = styled.div`
  height: 100%;
  margin: 1% 10%;
  padding: 2%;
  background: #fefefe;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const InfoTitle = styled.h2`
  grid-column: 2/3;
  margin-bottom: 5%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 48rem) {
    display: inline;
  }
`;

export const InfoText = styled.p`
  grid-column: 2/3;
  margin: 1% 5%;
`;

const Image = styled.img`
  width: 15rem;
  margin-bottom: 5%;
  @media (max-width: 48rem) {
    width: 8rem;
  }
`;

export default function Who() {
  return (
    <InfoLayout>
      <InfoTitle>Who Are The Barbarians?</InfoTitle>
      <InfoWrapper>
        <div data-aos="flip-left">
          <Image src={Logo} />
        </div>

        <InfoText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus
          mauris ultrices eros in cursus turpis massa. Ipsum suspendisse
          ultrices gravida dictum. At tellus at urna condimentum mattis. Urna
          nec tincidunt praesent semper feugiat nibh sed pulvinar proin.
          Tincidunt lobortis feugiat vivamus at augue. Venenatis cras sed felis
          eget velit aliquet sagittis. Amet porttitor eget dolor morbi non. Sed
          vulputate odio ut enim blandit volutpat maecenas volutpat blandit. In
          metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
          Rhoncus dolor purus non enim praesent. Aliquam ultrices sagittis orci
          a. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Pharetra
          et ultrices neque ornare aenean euismod. Elementum eu facilisis sed
          odio morbi quis commodo odio. Enim diam vulputate ut pharetra sit amet
          aliquam. Volutpat odio facilisis mauris sit amet massa. Ridiculus mus
          mauris vitae ultricies leo integer malesuada. Massa massa ultricies mi
          quis hendrerit dolor. Nibh nisl condimentum id venenatis.
        </InfoText>
      </InfoWrapper>
    </InfoLayout>
  );
}
