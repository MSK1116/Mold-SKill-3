import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Subject_banner from "./Subject_banner";
import notes_list from "../../public/notes_list.json";
import Practise_card1 from "./Practise_card1";
const Phy_xii_p = () => {
  const filterData = notes_list.filter((data) => data.id > 0);

  document.title = "Physics-XII By Mold Skill";

  return (
    <>
      <Navbar />
      <Subject_banner />

      <div className="max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 mt-10 lg:px-8 lg:py-16 ">
        <h1 className="text-xl font-bold text mb-3"> It's for you!</h1>
        <div className="grid  grid-cols-1 md:grid-cols-4 gap-4 ">
          {filterData.map((filterData) => (
            <Practise_card1 key={filterData.id} items={filterData} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Phy_xii_p;
