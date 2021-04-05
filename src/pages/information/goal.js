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
  text-align: left;
  @media (max-width: 48rem) {
    display: inline;
    text-align: center;
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
          The focus of the Mauritian Barbarians is to develop talent and improve
          skills levels with a conscious bias towards including players from
          vulnerable communities and communities not historically associated
          with rugby.
          <br></br>
          <br></br>
          Our ethos is not one of winning at all costs, the primary goal of the
          Mauritian Barbarians is the development of rugby and rugby players in
          Mauritius, exposing them to international competitions and the broader
          world view while creating an inclusive environment that enables the
          selection of raw and developing talent that may one day aspire to
          greater things.
        </InfoTextGoal>
      </InfoWrapperGoal>
    </InfoLayout>
  );
}
