import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contactus_banner from "./Contactus_banner";

const Contactus = () => {
  document.title = "Contact | Mold Skill";
  return (
    <>
      <Navbar />
      <Contactus_banner />
      <Footer />
    </>
  );
};

export default Contactus;
