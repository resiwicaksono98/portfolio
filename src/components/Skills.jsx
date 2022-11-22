import React from "react";
import Reactjs from "../assets/images/Reactjs.png";
import Tailwind from "../assets/images/Tailwind.png";
import Figma from "../assets/images/Figma.png";
import Nodejs from "../assets/images/Nodejs.png";
import JS from "../assets/images/JS.png";
import ReactIcon from "../assets/icons/React.png";
import FigmaIcon from "../assets/icons/Figma.png";
import JavaScriptIcon from "../assets/icons/JavaScript.png";
import GithubIcon from "../assets/icons/GitHub.png";
import SQLIcon from "../assets/icons/SQL.png";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div className="flex justify-center mt-16 sm:justify-start" id="skills">
      <div className=" flex font-kanit text-[200px] font-semibold bg-inherit mr-10 w-full opacity-5  text-white justify-end ">
        MY SKILLS
      </div>
      {/* Left */}
      <div className="absolute md:mt-24 flex flex-col items-center w-full lg:items-start  lg:ml-[173px]">
        <div className="font-kanit text-2xl mb-4 sm:text-[40px] font-semibold text-white">
          Some Of My Skill
        </div>
        <div className="flex gap-2">
          <img src={ReactIcon} alt="" className=" h-10 sm:h-14 md:h-14" />
          <img src={FigmaIcon} alt="" className="h-10 sm:h-12 md:h-14" />
          <img src={JavaScriptIcon} alt="" className="h-10 sm:h-12 md:h-14" />
          <img src={GithubIcon} alt="" className="h-10 sm:h-12 md:h-14" />
          <img src={SQLIcon} alt="" className="h-10 sm:h-12 md:h-14" />
        </div>
      </div>
      {/* Right */}
      <motion.div
        initial={{ rotate: 45 }}
        whileInView={{ rotate: 0 }}
        transition={{ duration: 2, type: "just" }}
        className="z-30 absolute flex mt-[10rem] md:mt-[18rem] lg:mt-0 bg-white h-[12rem] w-[12rem] md:h-[18rem] md:w-[18rem] justify-center items-center rounded-full ml-[1rem] sm:ml-[7rem]  md:ml-[13rem] lg:ml-[35rem] "
      >
        <div className="absolute flex items-center justify-center bg-dark-yellow  border-4 border-slate-300 h-[4rem] w-[4rem] md:h-[6rem] md:w-[6rem] rounded-full   ">
          <img src={JS} alt="" className="h-5 md:h-8" />
        </div>
        <div className="absolute -top-8 md:-top-10 flex items-center justify-center bg-white border-4 border-slate-300   h-[4rem] w-[4rem] md:h-[6rem] md:w-[6rem] rounded-full   ">
          <img src={Reactjs} alt="" className="h-10 md:h-14" />
        </div>
        <div className="absolute -bottom-8 md:-bottom-10 flex items-center justify-center bg-white border-4 border-slate-300  h-[4rem] w-[4rem] md:h-[6rem] md:w-[6rem]  rounded-full   ">
          <img src={Figma} alt="" className=" h-14" />
        </div>
        <div className="absolute -left-8 md:-left-12 flex items-center justify-center bg-white border-4 border-slate-300 h-[4rem] w-[4rem] md:h-[6rem] md:w-[6rem]  rounded-full   ">
          <img src={Nodejs} alt="" className=" md:h-10" />
        </div>
        <div className="absolute -right-8 md:-right-12 flex items-center justify-center bg-white border-4 border-slate-300 h-[4rem] w-[4rem] md:h-[6rem] md:w-[6rem]  rounded-full   ">
          <img src={Tailwind} alt="" className=" md:h-12" />
        </div>
      </motion.div>
      <div className=" absolute right-0 z-10 hidden lg:mr-20 lg:block -mt-[3rem] bg-dark-blue h-[15rem] w-[15rem]  rounded-full"></div>
      <div className=" absolute right-0 z-20 hidden lg:block lg:mr-20 mt-[6rem] bg-dark-yellow h-[15rem] w-[15rem]  rounded-full"></div>
    </div>
  );
}
