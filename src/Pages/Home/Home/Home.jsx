import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Service from "../Service/Service";
import NavBar from "../../Shared/NavBar/NavBar";
import Footer from "../../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <About></About>
      <Service></Service>
      <Footer></Footer>
    </div>
  );
};

export default Home;
