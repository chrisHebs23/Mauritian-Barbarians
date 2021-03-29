import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Title } from "./gallery";
import SimpleSlider from "./Sponsors/slider";
import SponsorImage from "./Sponsors/sponsorImage.jpg";

const Layout = styled.div`
  height: 100vh;
  background: url(${SponsorImage}) no-repeat center center;
  background-size: cover;
  position: relative;
`;

const LayoutCover = styled.div`
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  background-size: cover;
  padding-bottom: 5%;
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
