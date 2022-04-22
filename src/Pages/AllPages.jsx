import React from "react";
import { Route, Routes } from "react-router-dom";
import Experiences from "../Components/Experiences/Experiences";
import FrontendProjects from "../Components/Projects/FrontendProjects";
import UIProjects from "../Components/Projects/UIProjects";
import Skills from "../Components/Skills/Skills";
import Homepage from "./Homepage/Homepage";

const AllPages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/frontendprojects" element={<FrontendProjects />} />
        <Route path="/uiprojects" element={<UIProjects />} />
        <Route path="/experiences" element={<Experiences />} />
      </Routes>
    </>
  );
};

export default AllPages;
