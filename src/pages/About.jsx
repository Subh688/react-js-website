import React from "react";
import Common from "../components/Common";
import about from "../images/about.png";

const About = () => {
  return (
  <>
    <Common 
      name="Welcome to about page" 
      imgsrc={about} 
      visit="/contact" 
      btnname="Contact Now" 
    />
  </>
  );
};

export default About;
