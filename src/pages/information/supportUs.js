import React from "react";
import { InfoLayout, InfoText, InfoTitle, InfoWrapper } from "./who";
import Button from "../../themes/Button";
import * as theme from "../../themes/colors";
import styled from "styled-components";
import { PiggyBank } from "@styled-icons/fa-solid/PiggyBank";
import { Gofundme } from "@styled-icons/simple-icons/Gofundme";
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
          Taking a team of twelve players and three support staff from Mauritius
          to Dubai every year is not an inexpensive undertaking. There are costs
          involved in preparing the team for the very highest level of amateur
          competition, return flights, accommodation, transport, meals, playing
          kit, basic medical supplies and insurance. In the past we have relied
          on corporate sponsorship and donations, coupled with fundraising
          initiatives. The advent of Covid-19 has changed the landscape and we
          are having to look at alternative fundraising mechanisms. If you have
          a couple of dollars to spare, please hit the button for our
          fundraising page. Our thanks for helping us to put deserving players
          onto the field!
        </InfoText>
      </InfoWrapper>
      <Button>
        <Fund />
        {` Go Fund Us`}
      </Button>
    </InfoLayout>
  );
}
