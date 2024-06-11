import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner1 from "../components/Banner1";
import Subject_banner from "../Notes/Subject_banner";
import Practise_banner from "./Practise_banner";

const Practise = () => {
  useEffect(() => {
    document.title = "Practise - Mold Skill";
  }, []);
  return (
    <>
      <Navbar />
      <Practise_banner />
      <Footer />
    </>
  );
};

export default Practise;
