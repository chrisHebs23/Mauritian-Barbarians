import React from "react";
import useFirestore from "../hooks/useFirestore";
import BackgroundSlider from "react-background-slider";
import "./home.css";

export default function Background() {
  const { docs } = useFirestore("background");
  return (
    <BackgroundSlider
      images={docs.map((doc) => doc.url)}
      duration={3}
      transition={2}
    ></BackgroundSlider>
  );
}
