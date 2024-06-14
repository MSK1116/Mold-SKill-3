import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Testimonial from "./Testimonial";
import Aboutus_banner1 from "./Aboutus_banner1";
import Aboutus_banner from "./Aboutus_banner";

const Aboutus = () => {
  const sectionRef = useRef(null);

  document.title = "About us | Mold Skill";
  return (
    <>
      <Navbar />
      <Aboutus_banner sectionRef={sectionRef} />
      <Aboutus_banner1 />
      <Testimonial sectionRef={sectionRef} />
      <Footer />
    </>
  );
};

export default Aboutus;
