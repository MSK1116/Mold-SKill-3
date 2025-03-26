import React, { useEffect, useState } from "react";
import { useAuth } from "../context/Authprovider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TakeAdvice = () => {
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();

  const [showAdvice, setShowAdvice] = useState(false);

  useEffect(() => {
    const lookForAdvice = async () => {
      await axios
        .post("https://mold-s-kill-3-api.vercel.app/advice/advice", authUser.email)
        .then((res) => {
          console.log(res.data.message);
          if (res.data.message) {
            document.getElementById("my_modal_1").showModal();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    lookForAdvice();
  }, []);
  return (
    <>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box dark:bg-gray-700 bg-gray-100">
          <h3 className="font-bold text-lg">
            Hello! <span className=" text-red-500">{authUser.fullname.split(" ")[0]}</span>
          </h3>
          <p className="py-4">
            Mold Skill needs some serious advice from you!<br></br> Help it with your one minute by answering few question.
          </p>
          <button className=" bg-red-600 px-4 rounded-lg text-white  py-2" onClick={() => navigate("/takeadvice")}>
            {" "}
            Form
          </button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default TakeAdvice;
