import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Title } from "./gallery";
import SimpleSlider from "./Sponsors/slider";
import SponsorImage from "./Sponsors/sponsorImage.jpg";

const Layout = styled.div`
  height: 100vh;
  background: url(${SponsorImage}) no-repeat center center;
  background-size: cover;
`;

const LayoutCover = styled.div`
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  background-size: cover;
`;

export default function Sponsors() {
  return (
    <Layout>
      <LayoutCover>
        <Title>To Our Sponsors</Title>
        <h4 style={{ textAlign: "center" }}>
          Thank you for supporting the <em>Dream</em>! We look forward to
          working with you again in the future!
        </h4>
        <SimpleSlider />
      </LayoutCover>
    </Layout>
  );
}
