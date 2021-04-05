import React, { useEffect, lazy, Suspense } from "react";
import styled from "styled-components";
import Button from "../themes/Button";
import Who from "./information/who";
import Goal from "./information/goal";
import SupportUs from "./information/supportUs";
import Aos from "aos";
import "aos/dist/aos.css";

const Background = lazy(() => import("./background"));

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
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Layout>
      <CoverBack>
        <Suspense fallback={<p>Loading Background Images...</p>}>
          <Background />
        </Suspense>

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
