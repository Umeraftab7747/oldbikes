import React from "react";
import Header from "../screens/Header/Header";
import Hero from "../screens/Hero/Hero";
import Sale from "../screens/Sale/Sale";
import About from "../screens/About/About";
import Contact from "../screens/Contactus/Contact";
import Featured from "../screens/Featured/Featured";

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Sale />
      <About />
      <Contact />
      <Featured />
    </div>
  );
};

export default HomeScreen;
