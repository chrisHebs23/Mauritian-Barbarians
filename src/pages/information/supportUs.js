import React from "react";
import { InfoLayout, InfoText, InfoTitle, InfoWrapper } from "./who";
import Button from "../../config/Button";
import styled from "styled-components";
import { PiggyBank } from "@styled-icons/fa-solid/PiggyBank";
import { Gofundme } from "@styled-icons/simple-icons/Gofundme";
import * as theme from "../../config/theme";
import "aos/dist/aos.css";

const Fund = styled(Gofundme)`
  width: 2rem;
  height: auto;
  color: #fff;
`;
const Bank = styled(PiggyBank)`
  width: 15rem;

  color: ${theme.SecondaryPink};
  @media (max-width: 48rem) {
    width: 5rem;
  }
`;

export default function SupportUs() {
  return (
    <InfoLayout>
      <InfoTitle>How To Support Us?</InfoTitle>
      <InfoWrapper>
        <div data-aos="flip-right">
          <Bank />
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
      <Button>
        <Fund />
        {` Go Fund Us`}
      </Button>
    </InfoLayout>
  );
}
