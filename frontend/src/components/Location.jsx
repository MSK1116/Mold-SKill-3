import React, { useEffect, useState } from "react";
import axios from "axios";

const Location = () => {
  const [locationData, setLocationData] = useState();
  useEffect(() => {
    const getMessage = async () => {
      try {
        const res = await axios.get("https://mold-s-kill-3-api.vercel.app/location");
        if (res.data.country != "NP") {
          setLocationData(res.data);
          console.log(res.data);
          document.getElementById("my_modal_2").showModal();
        }
      } catch (error) {
        console.log(error);
      }
    };
    getMessage();
  }, []);

  return (
    <>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box dark:bg-slate-500 bg-slate-100">
          <h3 className="font-bold text-lg text-red-600 ">Dear user, we are sorry!</h3>
          <p className="py-4">
            Our website is currently tailored for Nepalese students and is unavailable in your region: <span className=" text-red-600">{locationData ? locationData.city + ", " + locationData.region : "region"}</span>. However, you can still explore a
            few of our services. We’re working hard to expand globally.<br></br>
            <br></br>
            <span className=" text-right">—thank you for your understanding💓!</span>
          </p>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Location;
