import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Banner1 from "../components/Banner1";
import Footer from "../components/Footer";
import FreeBooks from "../components/FreeBooks";

const Home = () => {
  useEffect(() => {
    document.title = "Mold Skill- Learn, Adapt & Grow";
  }, []);

  return (
    <>
      <Navbar />
      <Banner1 />
      <FreeBooks />
      <Footer />
    </>
  );
};

export default Home;
