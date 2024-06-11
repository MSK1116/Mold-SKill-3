import React, { useEffect } from "react";
import Pdf from "../components/Pdf";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Books_banner from "./Books_banner";

const Books = () => {
  useEffect(() => {
    document.title = "Books - Mold Skill";
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
