import React, { useEffect, useState } from "react";
import Login from "./Login";
import { useAuth } from "../context/Authprovider";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const navList = (
    <>
      <li>
        <a onClick={() => navigate("/")}>Home</a>
      </li>
      <li>
        <a onClick={() => navigate("/books")}>Books</a>
      </li>
      <li>
        <a onClick={() => navigate("/practise")}>Practise</a>
      </li>
      <li>
        <a onClick={() => navigate("/notes")}>Notes</a>
      </li>
      <li>
        <a onClick={() => navigate("/about_us")}>About us</a>
      </li>
    </>
  );
  const [authUser, setAuthUser] = useAuth();
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : localStorage.setItem("theme", "light"));

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");

      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);
  const element = document.documentElement;

  return (
    <>
      <div
        className={`max-w-screen-2xl container mx-auto md:px-20px px-4 bg-gray-100 dark:bg-slate-900 dark:text-white fixed top-0 right-0 left-0 z-50 ${
          sticky ? "sticky-navbar shadow-md bg-gray-300 duration-300 dark:bg-gray-800 dark:text-white transition-all ease-in-out" : ""
        }`}>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  bg-white shadow-md dark:bg-slate-600  rounded-box  w-52">
                {navList}
              </ul>
            </div>
            <a
              onClick={() => {
                navigate("/");
              }}
              className="font-bold cursor-pointer text-xl">
              Mold Skill
            </a>
          </div>
          <div className="navbar-end space-x-6">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navList}</ul>
            </div>
            <label className="cursor-pointer grid place-items-center ">
              <input
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                type="checkbox"
                value="synthwave"
                checked={theme === "dark"}
                className="toggle theme-controller bg-base-content dark:bg-blue-600 row-start-1 col-start-1 col-span-2"
                readOnly
              />
              {/* SUN */}
              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              {/* Monn */}
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
            <div className="ml-3 ">
              {authUser ? (
                <Profile />
              ) : (
                <a onClick={() => document.getElementById("loginModal").showModal()} className="btn bt bg-blue-700 hover:bg-blue-500 text-white">
                  Login
                </a>
              )}

              <Login />
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Navbar;
