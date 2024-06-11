import React from "react";
import Cards1 from "./Cards1";
import list_org from "../../public/sub_list.json";
const SubjectDisp = () => {
  const filterData = list_org.filter((data) => data.category !== "Free");
  console.log(filterData);
  const shuffleArray = (array) => {
    return array.slice().sort(() => Math.random() - 0.5);
  };
  const items = shuffleArray(filterData);
  return (
    <>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3  ">
        {items.map((items) => (
          <Cards1 key={items.id} items={items} />
        ))}
      </div>
    </>
  );
};

export default SubjectDisp;
