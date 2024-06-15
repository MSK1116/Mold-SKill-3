import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Notes from "./Notes/Notes";
import Books from "./Books/Books";
import Practise from "./Practise/Practise";
import Pdf from "./components/Pdf";
import PdfViewer from "./components/PdfViewer";
import Signup from "./components/Signup";
import { useAuth } from "./context/Authprovider";
import Faq from "./FAQ/Faq";
import Aboutus from "./About Us/Aboutus";
import Contactus from "./Contact Us/Contactus";

import Chem_xi from "./Notes/Chem_xi";
import Comp_xi from "./Notes/Comp_xi";
import Eng_xi from "./Notes/Eng_xi";
import Mat_xi from "./Notes/Mat_xi";
import Nepali_xi from "./Notes/Nepali_xi";
import Phy_xi from "./Notes/Phy_xi";

import Chem_xii from "./Notes/Chem_xii";
import Comp_xii from "./Notes/Comp_xii";
import Eng_xii from "./Notes/Eng_xii";
import Mat_xii from "./Notes/Mat_xii";
import Nepali_xii from "./Notes/Nepali_xii";
import Phy_xii from "./Notes/Phy_xi";

// Practise

import Chem_xi_p from "./Practise/Chem_xi_p";
import Comp_xi_p from "./Practise/Comp_xi_p";
import Eng_xi_p from "./Practise/Eng_xi_p";
import Mat_xi_p from "./Practise/Mat_xi_p";
import Nepali_xi_p from "./Practise/Nepali_xi_p";
import Phy_xi_p from "./Practise/Phy_xi_p";

import Chem_xii_p from "./Practise/Chem_xii_p";
import Comp_xii_p from "./Practise/Comp_xii_p";
import Eng_xii_p from "./Practise/Eng_xii_p";
import Mat_xii_p from "./Practise/Mat_xii_p";
import Nepali_xii_p from "./Practise/Nepali_xii_p";
import Phy_xii_p from "./Practise/Phy_xi_p";
import Error from "./components/Error";

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  return (
    <>
      <div className="dark:bg-slate-800 dark:text-white bg-white text-slate-700">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/practise" element={<Practise />} />
          <Route path="/pdf" element={<Pdf />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/about_us" element={<Aboutus />} />
          <Route path="*" element={<Error />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/pdfA" element={authUser ? <PdfViewer /> : <Navigate to="/register" />} />
          <Route path="/register" element={authUser ? <Navigate to="/" /> : <Signup />} />

          <Route path="/notes/xii/chemistry" element={<Chem_xii />} />
          <Route path="/notes/xii/computer" element={<Comp_xii />} />
          <Route path="/notes/xii/english" element={<Eng_xii />} />
          <Route path="/notes/xii/mathematics" element={<Mat_xii />} />
          <Route path="/notes/xii/nepali" element={<Nepali_xii />} />
          <Route path="/notes/xii/physics" element={<Phy_xii />} />

          <Route path="/notes/xi/chemistry" element={<Chem_xi />} />
          <Route path="/notes/xi/computer" element={<Comp_xi />} />
          <Route path="/notes/xi/english" element={<Eng_xi />} />
          <Route path="/notes/xi/mathematics" element={<Mat_xi />} />
          <Route path="/notes/xi/nepali" element={<Nepali_xi />} />
          <Route path="/notes/xi/physics" element={<Phy_xi />} />

          <Route path="/practise/xii/chemistry" element={<Chem_xii_p />} />
          <Route path="/practise/xii/computer" element={<Comp_xii_p />} />
          <Route path="/practise/xii/english" element={<Eng_xii_p />} />
          <Route path="/practise/xii/mathematics" element={<Mat_xii_p />} />
          <Route path="/practise/xii/nepali" element={<Nepali_xii_p />} />
          <Route path="/practise/xii/physics" element={<Phy_xii_p />} />

          <Route path="/practise/xi/chemistry" element={<Chem_xi_p />} />
          <Route path="/practise/xi/computer" element={<Comp_xi_p />} />
          <Route path="/practise/xi/english" element={<Eng_xi_p />} />
          <Route path="/practise/xi/mathematics" element={<Mat_xi_p />} />
          <Route path="/practise/xi/nepali" element={<Nepali_xi_p />} />
          <Route path="/practise/xi/physics" element={<Phy_xi_p />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
