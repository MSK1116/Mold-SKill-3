import React, { useEffect } from "react";
import Pdf from "../components/Pdf";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Books_banner from "./Books_banner";

const Books = () => {
  useEffect(() => {
    document.title = "Books - Mold Skill";
    document.querySelector('meta[name="description"]').content =
      "Mold SKill is the online learning platform which provides various eduvational resources for NEB students to support their education. Mold SKil provides various international books free of cost";
  }, []);

  return (
    <>
      <Navbar />
      <Books_banner />

      <Footer />
    </>
  );
};

export default Books;
