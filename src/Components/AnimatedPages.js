import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import LandingPage from "./LandingPage";
import { AnimatePresence } from "framer-motion";

const AnimatedPages = () => {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/" element={<LandingPage />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedPages;
