import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import About from "../Pages/About/About";

const AllPages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default AllPages;
