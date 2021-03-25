import React from "react";
import { Title } from "./gallery";
import founder1 from "../../public/images/founder1.png";
import funny1 from "../../public/images/funny1.jpg";
import founder2 from "../../public/images/founder3.png";
import founder3 from "../../public/images/founder2.png";
import funny2 from "../../public/images/funny3.jpg";
import funny3 from "../../public/images/funny2.jpg";
import styled from "styled-components";

const Layout = styled.div`
  height: 100%;
`;

const FounderWrap = styled.div`
  margin: 3% 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 48rem) {
    flex-direction: column;
  }
`;

const Founder = styled.div`
  width: auto;
  height: 100%;
  border-radius: 2%;
  padding: 2%;
  margin: 1% 1%;
  border: 1px solid rgba(191, 191, 191, 0.2);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: grid;
  grid-template-rows: 2fr 1fr;
  background-color: #fefefe;
`;

const Background1 = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: url(${founder1}) no-repeat 50% 5%;
  :hover {
    background: url(${funny1}) no-repeat 50% 5%;
    background-size: contain;
  }
`;

const Background2 = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: url(${founder2}) no-repeat 50% 5%;
  :hover {
    background: url(${funny2}) no-repeat 50% 5%;
    background-size: contain;
  }
`;

const Background3 = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: url(${founder3}) no-repeat 50% 5%;
  :hover {
    background: url(${funny3}) no-repeat 50% 5%;
    background-size: contain;
  }
`;

const FoundersText = styled.div`
  text-align: center;
  margin: 2%;
`;

export default function Founders() {
  return (
    <Layout>
      <Title>Founders</Title>
      <FounderWrap>
        <Founder>
          <Background1 />
          <FoundersText>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </FoundersText>
        </Founder>

        <Founder>
          <Background2 />
          <FoundersText>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </FoundersText>
        </Founder>

        <Founder>
          <Background3 />
          <FoundersText>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </FoundersText>
        </Founder>
      </FounderWrap>
    </Layout>
  );
}
