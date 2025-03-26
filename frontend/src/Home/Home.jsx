import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Banner1 from "../components/Banner1";
import Footer from "../components/Footer";
import FreeBooks from "../components/FreeBooks";
import Location from "../components/Location";
import TakeAdvice from "../components/TakeAdvice";

const Home = () => {
  useEffect(() => {
    document.title = "Mold Skill- Learn, Adapt & Grow";
  }, []);

  return (
    <>
      <TakeAdvice />
      <Location />
      <Navbar />
      <Banner1 />
      {/* <FreeBooks /> */}
      <Footer />
    </>
  );
};

export default Home;
