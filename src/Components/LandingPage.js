import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const LandingPage = () => {
  const history = useNavigate();
  const togglePage = () => {
    history("/home");
  };

  return (
    <motion.div
      className="landing"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      <div className="card1">
        <div className="btn1"></div>
        <div className="btn2"></div>
        <div className="btn3"></div>
        <div className="btn4"></div>
        <div className="card1-int">
          <div className="hello">
          𝐼𝓃𝒻𝑜𝓇𝓂𝒶𝓉𝓏
            <span className="hidden">-"where news meets clarity"</span>
            <button
              className="btn btn-outline-light hidden lets"
              onClick={togglePage}
            >
              Let's Go
            </button>
            <p className="tap">Click!!</p>
          </div>
        </div>
        <div className="top">
          <div className="camera">
            <div className="int"></div>
          </div>
          <div className="speaker"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default LandingPage;
