import React from "react";
import Cards1 from "./Cards1";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import metaData from "../../public/book_list.json";
import Cards2 from "./Cards2";

const FreeBooks = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const filterData = metaData.filter((data) => data.id > 0);

  const shuffleArray = (array) => {
    return array.slice().sort(() => Math.random() - 0.5);
  };
  const shfData = shuffleArray(filterData);

  return (
    <>
      <div className="max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 mt-10 lg:px-8 lg:py-16 ">
        <h1 className="text-xl font-bold text"> Books for you!</h1>
        <div className="slider-container">
          <Slider {...settings}>
            {shfData.map((shfData) => (
              <Cards2 key={shfData.id} items={shfData} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FreeBooks;
