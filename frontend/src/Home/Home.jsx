import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Banner1 from "../components/Banner1";
import Footer from "../components/Footer";
import FreeBooks from "../components/FreeBooks";

const Home = () => {
  useEffect(() => {
    document.title = "Mold Skill";
  }, []);
  return (
    <>
      {alert("Website is under devlopment")}
      <Navbar />
      <Banner1 />
      <FreeBooks />
      <Footer />
    </>
  );
};

export default Home;
