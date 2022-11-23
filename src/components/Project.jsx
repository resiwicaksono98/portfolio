import ProjectFoodMarket from "../assets/images/Project-FoodMarket.png";
import { LinkIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function Project() {
  return (
    <div
      className="flex justify-center mt-[50rem] md:mt-[20rem] lg:mt-0 h-[40rem] text-white"
      id="project"
    >
      <div className=" flex font-kanit text-[200px] font-semibold bg-inherit mr-10 w-full opacity-5  text-white justify-end ">
        Project
      </div>
      <div className="absolute font-kanit text-[40px]  mt-24 w-full text-center text-white font-semibold">
        Selected Project
      </div>
      <div className="flex flex-col mx-8  gap-12 absolute mt-[12rem]">
        {/* Project Foodmarket */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3.5, type: "spring" }}
          className="hover:text-dark-yellow"
        >
          <img
            src={ProjectFoodMarket}
            alt="project-mp"
            className="h-[300px] md:h-[500px] rounded-lg cursor-pointer"
          />
          <div className="md:flex items-center  gap-14 mt-4">
            <div className="flex mb-4 sm:mb-0 items-center gap-3">
              <BookOpenIcon className="h-5" />
              <div className="text-sm text-slate-200 hover:text-white cursor-pointer">
                View Study Case
              </div>
            </div>
            <div className="flex items-center gap-3">
              <LinkIcon className="h-5" />
              <div className="text-sm text-slate-200 hover:text-white cursor-pointer">
                Visit Website
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
