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

const Text = styled.h4`
  color: #fff;
  margin: 2%;
`;

export default function Sponsors() {
  return (
    <Layout>
      <LayoutCover>
        <Title style={{ color: "#fff" }}>To Our Sponsors</Title>
        <Text style={{ textAlign: "center" }}>
          Thank you for supporting the <em>Dream</em>! We look forward to
          working with you again in the future!
        </Text>

        <SimpleSlider />
      </LayoutCover>
    </Layout>
  );
}
