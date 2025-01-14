import React, { useRef } from "react";
import "./Body.css";
import Team from "../components/Team";
import About from "../components/About";
import Offer from "../components/Offer";
import ContactUs from "../components/ContactUs";
import Slideshow from "../components/Slideshow";
const Body = () => {
  return (
    <>
      <About />
      <Team />
      <Slideshow />
      <Offer />
      <ContactUs />
    </>
  );
};

export default Body;
