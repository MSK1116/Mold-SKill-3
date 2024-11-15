import React, { useEffect, useState } from "react";
import axios from "axios";

const Location = () => {
  const [locationData, setLocationData] = useState();
  useEffect(() => {
    const getMessage = async () => {
      try {
        const res = await axios.get("https://mold-s-kill-3-api.vercel.app/location");
        if ((res.data.country = "NP")) {
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
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Location;
