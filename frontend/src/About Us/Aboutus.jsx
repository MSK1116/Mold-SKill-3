import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Aboutus_banner from "./Aboutus_banner";
import Testimonial from "./Testimonial";
import Aboutus_banner1 from "./Aboutus_banner1";

const Aboutus = () => {
  document.title = "About us | Mold Skill";
  return (
    <>
      <Navbar />
      <Aboutus_banner />
      <Aboutus_banner1 />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Aboutus;
