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
  text-align: left;
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
          The Mauritian Barbarians is a not-for-profit organisation that was
          established to enable young Mauritian rugby players, both men and
          women from differing socio-economic groups to participate in top end
          international rugby competitions. Rugby teaches discipline, unity and
          teamwork, combined with demanding physical activity. It is a sport
          that attempts to develop players who are strong in body, mind and
          character.
          <br></br>
          <br></br>
          The concept of the Mauritian Barbarians originated in 2014 when it
          became apparent that some of the emerging rugby talent on the island
          of Mauritius would benefit from exposure to more than just club rugby
          against the same opponents and limited regional international
          competition.
        </InfoText>
      </InfoWrapper>
    </InfoLayout>
  );
}
