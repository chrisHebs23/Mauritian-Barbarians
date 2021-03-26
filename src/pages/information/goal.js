import React from "react";
import "aos/dist/aos.css";
import styled from "styled-components";
import { Medal } from "@styled-icons/fa-solid/Medal";
import { InfoLayout, InfoTitle, InfoWrapper } from "./who";

const Medals = styled(Medal)`
  width: 15rem;
  justify-content: end;
  color: #ffe05d;
  @media (max-width: 48rem) {
    width: 5rem;
  }
`;
const InfoWrapperGoal = styled.div`
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: 48rem) {
    display: inline;
  }
`;

const InfoTextGoal = styled.div`
  display: flex;
  justify-items: start;
`;

export default function Goal() {
  return (
    <InfoLayout>
      <InfoTitle>Our Goal!</InfoTitle>
      <InfoWrapperGoal>
        <div data-aos="flip-right">
          <Medals />
        </div>
        <InfoTextGoal>
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
        </InfoTextGoal>
      </InfoWrapperGoal>
    </InfoLayout>
  );
}
