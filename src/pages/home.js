import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "../themes/Button";
import Who from "./information/who";
import Goal from "./information/goal";
import SupportUs from "./information/supportUs";
import Aos from "aos";
import "aos/dist/aos.css";
import useFirestore from "../hooks/useFirestore";
import BackgroundSlider from "react-background-slider";
import "./home.css";

const Layout = styled.div`
  height: 100%;
  text-align: center;
  margin: 0 auto;
  position: relative;
`;

const CoverBack = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-items: center;
  align-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  margin: auto 0;
  color: white;
  font-size: 4rem;
`;

const TitleContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  margin: 10%;
`;

const Span = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

export default function Home() {
  const { docs } = useFirestore("background");

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Layout>
      <CoverBack>
        <BackgroundSlider
          images={docs.map((doc) => doc.url)}
          duration={3}
          transition={2}
        ></BackgroundSlider>
        <TitleContainer>
          <Title>Mauritian Barbarians</Title>
          <ButtonContainer>
            <Button className="buttons">
              <Span href="https://www.gofundme.com/" target="_blank">
                Sponsor The Dream
              </Span>
            </Button>
          </ButtonContainer>
        </TitleContainer>
        <div data-aos="fade-down">
          <Who />
        </div>
        <div data-aos="fade-down">
          <Goal />
        </div>
        <div data-aos="fade-down">
          <SupportUs />
        </div>
      </CoverBack>
    </Layout>
  );
}
