import { motion } from "framer-motion";
import Magnifier from "../assets/images/Magnifier.png";
import Puzzle from "../assets/images/Puzzle.png";
import Rocket from "../assets/images/Rocket.png";

export default function HireMe() {
  return (
    <div className=" flex  md:mt-16 md:h-[25rem]">
      <div className=" flex font-kanit text-[200px] font-semibold bg-inherit ml-10 w-full opacity-5 text-white justify-start ">
        Hire Me
      </div>
      <div className="absolute font-kanit text-[40px]  mt-24 w-full text-center  text-white font-semibold">
        Why Hire Me?
      </div>
      <div className="absolute flex flex-col  items-center md:items-start  lg:flex-row mt-[11rem] text-white w-full">
        {/* Attention to detail */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 2, type: "spring" }}
          className="flex flex-col gap-2 mb-6 lg:mb-0  w-full lg:mx-[60px] lg:w-[430px] items-center"
        >
          <div className="bg-slate-200 h-[100px] w-[100px] rounded-full drop-shadow-[15px_15px_0px_rgba(0,0,0,0.25)] ">
            <img
              src={Magnifier}
              alt="magnifier"
              className="h-[70px] w-[70px]  mt-3 ml-3"
            />
          </div>
          <div className="font-kanit text-[24px] font-semibold text-dark-yellow  leading-10">
            Attention To Detail
          </div>
          <span className="text-[16px] text-center text-slate-300 mx-16 md:mx-0">
            Pehatian lebih terhadap detail-detail agar lebih hati hati dan tidak
            melakukan kesalahan
          </span>
        </motion.div>
        {/* Love new things */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 2, type: "spring", delay: 0.5 }}
          className="flex flex-col gap-2 mb-6 lg:mb-0  w-full lg:mx-[60px] lg:w-[430px] items-center"
        >
          <div className="bg-slate-200 h-[100px] w-[100px] rounded-full drop-shadow-[15px_15px_0px_rgba(0,0,0,0.25)] ">
            <img
              src={Puzzle}
              alt="puzzle"
              className="h-[70px] w-[70px]  mt-3 ml-3"
            />
          </div>
          <div className="font-kanit text-[24px] font-semibold  text-dark-yellow  leading-10">
            Love New Things
          </div>
          <span className="text-[16px] text-center   text-slate-300 mx-16 md:mx-0">
            Menyukai hal hal baru dan mempelajari teknologi yang berkembang saat
            ini
          </span>
        </motion.div>
        {/* Web Dev Freelance */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 2, type: "spring", delay: 0.8 }}
          className="flex flex-col gap-2 mb-6 lg:mb-0  w-full lg:mx-[60px] lg:w-[430px] items-center"
        >
          <div className="bg-slate-200 h-[100px] w-[100px] rounded-full drop-shadow-[15px_15px_0px_rgba(0,0,0,0.25)] ">
            <img
              src={Rocket}
              alt="rocket"
              className="h-[70px] w-[70px]   mt-3 ml-3"
            />
          </div>
          <div className="font-kanit text-[24px]  text-dark-yellow  font-semibold leading-10">
            Web Dev Freelance
          </div>
          <span className="text-[16px] text-center  text-slate-300 mx-16 md:mx-0">
            Beberapa kali mengerjakan project-project freelance website
          </span>
        </motion.div>
      </div>
    </div>
  );
}
