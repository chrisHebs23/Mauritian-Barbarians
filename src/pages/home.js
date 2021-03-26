import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "../themes/Button";
import Who from "./information/who";
import Goal from "./information/goal";
import SupportUs from "./information/supportUs";
import Aos from "aos";
import "aos/dist/aos.css";
import image1 from "../../public/backgroundImages/image1.jpg";
import image2 from "../../public/backgroundImages/image2.jpg";
import image3 from "../../public/backgroundImages/image3.jpg";
import image4 from "../../public/backgroundImages/image4.jpg";
import image5 from "../../public/backgroundImages/image5.jpg";
import image6 from "../../public/backgroundImages/image6.jpg";
import image7 from "../../public/backgroundImages/image7.jpg";
import image8 from "../../public/backgroundImages/image8.jpg";
import image9 from "../../public/backgroundImages/image9.jpg";
import image10 from "../../public/backgroundImages/image10.jpg";
import BackgroundSlider from "react-background-slider";
import "./home.css";

const Layout = styled.div`
  margin: 10%;
  height: 100%;
  text-align: center;
  margin: 0 auto;
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
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Layout>
      <CoverBack>
        <BackgroundSlider
          images={[
            image1,
            image2,
            image3,
            image4,
            image5,
            image6,
            image7,
            image8,
            image9,
            image10,
          ]}
          duration={3}
          transition={2}
        />
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
