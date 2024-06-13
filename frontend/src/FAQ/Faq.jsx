import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../context/Authprovider";

const Faq = () => {
  const [authUser, setAuthUser] = useAuth();
  const user = localStorage.getItem("user");
  const userInfo = JSON.parse(user);
  console.log(userInfo);

  document.title = "FAQ | Mold Skill";
  return (
    <>
      <Navbar />

      <div className="max-w-screen-2xl container mx-auto md:px-20px px-4 flex flex-col ">
        <section className=" bg-white">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex  lg:items-center">
            <div className="mx-auto max-w-xl text-center">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Learn. Adapt..
                <strong className="font-extrabold text-red-700 sm:block"> Grow... </strong>
                <strong className="font-extrabold mt-3 text-blue-700 sm:block"> FAQ </strong>
              </h1>

              <p className="mt-4 sm:text-xl/relaxed">Hello! I'm your FAQ, here to illuminate your path with answers to common questions. Dive in, and let's clear up those uncertainties together!</p>
            </div>
          </div>
        </section>
        <div className=" gap-6 flex flex-col max-w-screen">
          <div className="collapse collapse-arrow   hover:bg-slate-200 transition-all ">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium border-s-2 border-blue-700">What is this website about?</div>
            <div className="collapse-content border-s-2 border-blue-500">
              <p>Our website is a platform where users can find and share educational resources and practice questions across various subjects to enhance their learning experience.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow   hover:bg-slate-200 transition-all ">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium border-s-2 border-blue-700">How can I create an account?</div>
            <div className="collapse-content border-s-2 border-blue-500">
              <p>You can create an account by clicking on the "Login" button on the navbar and filling out the registration form with your details on register section</p>
            </div>
          </div>
          <div className="collapse collapse-arrow   hover:bg-slate-200 transition-all ">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium border-s-2 border-blue-700">Is there a fee to use this website?</div>
            <div className="collapse-content border-s-2 border-blue-500">
              <p>Yes! {authUser ? userInfo.fullname : ""}, Mold SKill is completely free for everyone for the lifetime</p>
            </div>
          </div>
          <div className="collapse collapse-arrow   hover:bg-slate-200 transition-all ">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium border-s-2 border-blue-700">How do I find educational resources or practice questions?</div>
            <div className="collapse-content border-s-2 border-blue-500">
              <p>You can browse our resource library by subject or use the search bar to find specific topics or questions.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow   hover:bg-slate-200 transition-all ">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium border-s-2 border-blue-700">Can I download materials for offline use?</div>
            <div className="collapse-content border-s-2 border-blue-500">
              <p>Yes, many resources are available for download so you can access them offline </p>
            </div>
          </div>
          <div className="collapse collapse-arrow   hover:bg-slate-200 transition-all ">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium border-s-2 border-blue-700">How do I report inappropriate content or behavior?</div>
            <div className="collapse-content border-s-2 border-blue-500">
              <p>You can report inappropriate content or behavior by clicking the 'Contact Us' at bottom pf page 'footer'</p>
            </div>
          </div>
          <div className="collapse collapse-arrow   hover:bg-slate-200 transition-all ">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium border-s-2 border-blue-700">How is my personal information protected?</div>
            <div className="collapse-content border-s-2 border-blue-500">
              <p>We take your privacy seriously. Your personal information is protected by our strict privacy policy and security measures, which you can read more about on our 'Privacy Policy' page.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Faq;
