import React, { useEffect, useState } from "react";
import BackgroundSlider from "react-background-slider";
import b1 from "./backgroundImages/1.jpg";
import b2 from "./backgroundImages/2.jpg";
import b3 from "./backgroundImages/3.jpg";
import b4 from "./backgroundImages/4.jpg";
import b5 from "./backgroundImages/5.jpg";
import b7 from "./backgroundImages/7.jpg";
import b8 from "./backgroundImages/8.jpg";
import b9 from "./backgroundImages/9.jpg";
import b10 from "./backgroundImages/10.jpg";
import "./home.css";

export default function Background() {
  const images = [b1, b2, b3, b4, b5, b7, b8, b9, b10];

  return (
    <BackgroundSlider
      images={images}
      duration={3}
      transition={2}
      alt="background-images"
    ></BackgroundSlider>
  );
}
