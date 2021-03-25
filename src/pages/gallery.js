import React, { useState } from "react";
import styled from "styled-components";
import ImageLayout from "./galleryComponents/imageLayout";
import Modal from "./galleryComponents/modal";
import Joy from "../../public/images/Joy.jpg";
import useFirestore from "../hooks/useFirestore";

export const Title = styled.h1`
  margin: auto 0;
  color: Black;
  font-size: 4rem;
  text-align: center;
  margin: 0;
`;

const Background = styled.div`
  background: url(${Joy}) no-repeat 50% 30%;
  height: 10rem;
  background-size: 98%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 48rem) {
    background: url(${Joy}) no-repeat 40% 20%;
    background-size: 98%;
    height: auto;
  }
`;

const Cover = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  height: 10rem;
  width: 98%;
  @media (max-width: 48rem) {
    background-size: 98%;
    height: auto;
  }
`;

export default function GalleryPage() {
  const [selectedImg, setSelectedImg] = useState(null);
  const { docs } = useFirestore("images");

  return (
    <div>
      <Background>
        <Cover>
          <Title style={{ color: "white" }}>Gallery</Title>
        </Cover>
      </Background>

      <ImageLayout setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal
          selectedImg={selectedImg}
          setSelectedImg={setSelectedImg}
          images={docs}
        />
      )}
    </div>
  );
}
