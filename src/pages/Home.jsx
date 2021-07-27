import React from "react";
import Common from "../components/Common";
import home from "../images/home.png";

const Home = () => {
  return (
  <>
    <Common 
      name="Grow your business with" 
      imgsrc={home} 
      visit="/service" 
      btnname="Get Started" 
    />
  </>
  );
};

export default Home;
