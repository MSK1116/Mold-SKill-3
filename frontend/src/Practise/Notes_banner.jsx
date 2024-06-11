import React from "react";
import Book_list from "../../public/sub_list.json";
import Notes_card from "./Notes_card";

const Notes_banner = () => {
  const filterData = Book_list.filter((data) => data.id > 0);
  const shuffleArray = (array) => {
    return array.slice().sort(() => Math.random() - 0.5);
  };

  const shfData = shuffleArray(filterData);
  return (
    <>
      {/* class 11 */}
      <section className="max-w-screen-2xl px-10 container  dark:text-white">
        <div className="mx-auto my-16 max-w-screen-xl px-4 py-4 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Let's Begin</h2>
            <p className="mt-4 text-red-300">For class XI</p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8 ">
          {shfData.map((shfData) => (
            <Notes_card key={shfData.id} items={shfData} grade="XI" />
          ))}
        </div>
      </section>

      {/* class 12 */}

      <section className="max-w-screen-2xl px-10 my-10 container  dark:text-white">
        <div className="mx-auto my-16 max-w-screen-xl px-4 py-4 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <p className="mt-4 text-blue-300">For class XII</p>
          </div>
        </div>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-4 gap-8 ">
          {shfData.map((shfData) => (
            <Notes_card key={shfData.id} items={shfData} grade="XII" />
          ))}
        </div>
      </section>
    </>
  );
};

export default Notes_banner;
