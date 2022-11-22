import React from "react";
import Email from "../assets/icons/Email.png";
import Download from "../assets/icons/Download.png";
import Instagram from "../assets/icons/Instagram.png";
import WhatsApp from "../assets/icons/WhatsApp.png";
import GitHub from "../assets/icons/GitHub.png";
import HeroSquare1 from "../assets/images/Hero-Square-1.png";
import HeroSquare2 from "../assets/images/Hero-Square-2.png";
import HeroProfile from "../assets/images/Hero-Profile.png";
import HeroCrown from "../assets/images/Hero-Crown.png";
import HeroGlassess from "../assets/images/Hero-Glassess.png";
import HeroThunder from "../assets/images/Hero-Thunder.png";
import CV from "../assets/CV.pdf";
import { motion } from "framer-motion";

export default function Hero() {
  const transition = { duration: 2, type: "spring" };
  const mailtoHref = "mailto:resiwicaksono98@gmail.com";
  const instagram = "https://www.instagram.com/resiwicaksono24/";
  const whatsapp = "https://wa.me/62895349150087";
  const github = "https://github.com/resiwicaksono98";
  return (
    <div
      className="flex flex-col-reverse mx-5 lg:flex-row  mt-8 md:mt-[94px]  sm:mx-8 md:ml-[110px] text-white"
      id="hero"
    >
      {/* Hero left  */}
      <div className="flex  flex-col lg:basis-1/2 ">
        <div className="font-kanit text-dark-yellow sm:text-[30px] font-semibold">
          Hai, Saya Resi Wicaksono
        </div>
        <div>
          <div className="font-kanit text-[28px]  sm:text-[46px] font-semibold">
            Web Developer
          </div>
          <div className="font-kanit  text-[28px]  sm:text-[46px] font-semibold">
            Fullstack Javascript.
          </div>
        </div>
        <div className="text-[18px] text-slate-400 pt-3 leading-5 md:w-full">
          Saya adalah lulusan baru yang ingin terjun ke dunia web developer
          dengan bahasa yang saya pelajari saat ini adalah javascript, Selama 2
          tahun ini saya mempelajari bahasa pemrogramman javascript MERN Stack (
          MongooDB, Express Js, React Js,Node Js) dan terus mengembangkan
          kemampuan saya sampai saat ini.
        </div>
        <div className="flex mt-4 items-center">
          {/* button Email */}
          <a
            href={mailtoHref}
            className="flex items-center gap-2 bg-yellow mb-3 md:mb-0 rounded-lg text-black hover:bg-dark-yellow px-3"
          >
            <img src={Email} alt="email" className="h-[45px] sm:h-[60px]" />{" "}
            <span>Email</span>
          </a>
          {/* Button Other Icons */}
          <div className="flex ml-5 mb-2 md:mb-0  sm:ml-[47px] items-center gap-[24px]  ">
            <a href={instagram}>
              <img
                src={Instagram}
                alt="instagram-icon"
                className="h-[45px] sm:h-[60px] cursor-pointer"
              />
            </a>
            <a href={whatsapp}>
              <img
                src={WhatsApp}
                alt="whatsapp-icon"
                className="h-[45px] sm:h-[60px] cursor-pointer"
              />
            </a>
            <a href={github}>
              <img
                src={GitHub}
                alt="github-icon"
                className="h-[45px] sm:h-[60px] cursor-pointer"
              />
            </a>
          </div>
        </div>
        <a
          href={CV}
          target="_blank"
          download={"CV"}
          className="md:mt-5 flex items-center gap-2 mb-3"
        >
          <img src={Download} alt="email" className="h-[30px]" />
          <span className="text-sm">Download CV</span>
        </a>
      </div>
      {/* Hero right */}
      <div className="mt-10 flex h-[20rem]  rounded-lg md:mt-0">
        <div className="">
          {/* Stack Hero Icons */}
          <motion.div
            initial={{ left: "45%" }}
            whileInView={{ x: "100px" }}
            transition={transition}
            className="absolute z-30 ml-[-13rem] md:ml-[-20rem] lg:ml-0"
          >
            <img
              src={HeroCrown}
              alt=""
              className="h-[60px] sm:h-[80px] mt-[-60px] ml-10 md:ml-[8rem]"
            />
          </motion.div>
          <motion.div
            initial={{ left: "57%" }}
            whileInView={{ left: "53%" }}
            transition={transition}
            className="absolute z-30 ml-[-9rem] sm:ml-[-7rem] md:ml-[-18rem] lg:ml-0 "
          >
            <img
              src={HeroGlassess}
              alt=""
              className="h-[60px] md:h-[80px] mt-[-60px] ml-[250px] md:ml-[430px]"
            />
          </motion.div>
          <motion.div
            initial={{ left: "57%" }}
            whileInView={{ left: "53%" }}
            transition={transition}
            className="absolute z-30 ml-[-9rem] sm:ml-[-6rem] md:ml-[-18rem] lg:ml-0"
          >
            <img
              src={HeroThunder}
              alt=""
              className="h-[60px] md:h-[80px] mt-[4rem] md:mt-24 ml-[250px] md:ml-[430px]"
            />
          </motion.div>
          {/* Stack Hero Profile*/}
          <div className="absolute sm:block z-30 mt-[-50px] sm:ml-[100px]">
            <img
              src={HeroProfile}
              alt=""
              className="h-[300px] ml-8 sm:h-[420px] "
            />
          </div>
          <div className="absolute z-10 ml-[35px]  md:ml-[6rem]  sm:block mt-[-50px] ">
            <img src={HeroSquare2} alt="" className="h-[320px] md:h-[420px]" />
          </div>
          <div className="absolute z-20 mt-36 md:mt-[12rem] md:ml-12">
            <img src={HeroSquare1} alt="" className="h-[8rem]" />
          </div>
        </div>
      </div>
    </div>
  );
}
