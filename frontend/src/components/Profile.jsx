import React from "react";
import Swal from "sweetalert2";
import { useAuth } from "../context/Authprovider";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });

      localStorage.removeItem("user");
      window.location.reload();
    } catch (error) {
      toast.error("Error" + error.message);
    }
  };

  const confirmLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be looged out and won't be able to use most of feature",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log me out!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logged Out",
          text: "See you soon! Keep exploring",
          icon: "success",
        }).then(() => {
          handleLogout();
        });
      }
    });
  };

  return (
    <>
      <div>
        <div className="dropdown dropdown-end ">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="profile pic" src="https://t4.ftcdn.net/jpg/03/32/59/65/360_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg" />
            </div>
          </div>
          <ul tabIndex={0} className="bg-slate-200 dark:bg-slate-600  mt-3 z-[1] p-2 shadow menu gap-y-1 menu-sm dropdown-content  rounded-box w-52">
            <li>
              <p>{authUser.fullname}</p>
            </li>
            <li>
              <button className="justify-between " disabled>
                Profile
                <span className="badge">Coming soon..</span>
              </button>
            </li>

            <li>
              <a onClick={confirmLogOut}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Profile;
