import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Notes_banner from "./Notes_banner";
import Subject_banner from "./Subject_banner";

const Notes = () => {
  useEffect(() => {
    document.title = "Notes - Mold Skill";
  }, []);
  return (
    <>
      <Navbar />
      <Notes_banner />
      <Footer />
    </>
  );
};

export default Notes;
