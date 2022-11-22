import React, { useState } from "react";
import ProfilePicture from "../assets/images/profile.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const lists = [
    { name: "About Me", scroll: "hero" },
    { name: "Skills", scroll: "skills" },
    { name: "My Project", scroll: "project" },
  ];
  const mailtoHref = "mailto:resiwicaksono98@gmail.com";
  return (
    <div
      className=" w-full md:h-[100px] px-[63px] font-kanit text-white md:flex pt-3 md:pt-0 items-center justify-between"
      id="navbar"
    >
      <div className="flex  items-center justify-between gap-3 cursor-pointer mb-2 ">
        <div className="flex gap-3 items-center justify-center">
          <img
            src={ProfilePicture}
            alt="profile-picture"
            className="h-[38px] md:h-[51px]"
          />
          <div className="text-xs md:text-xl font-semibold leading-7">
            Resi Wicaksono
          </div>
        </div>
        {/* Icons */}
        {isOpen ? (
          <XMarkIcon
            className="h-5 md:opacity-0"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <Bars3Icon
            className={`h-5 md:opacity-0   `}
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>
      <ul
        className={`${
          isOpen
            ? ` md:flex flex-col md:flex-row bg-blue-navy md:bg-inherit rounded-xl   gap-[18px] text-lg font-semibold leading-6 transition-all duration-500 ease-in-out`
            : "opacity-0 md:opacity-100 md:flex md:gap-[18px]  absolute md:relative"
        }`}
      >
        {lists.map((list, i) => (
          <li
            className="text-[18px] text-center  font-semibold leading-6 cursor-pointer hover:underline hover:underline-offset-8 hover:decoration-dark-yellow hover:decoration-2 py-2"
            key={i}
          >
            <Link spy={true} smooth={true} to={list.scroll}>
              {list.name}
            </Link>
          </li>
        ))}
        <a
          href={mailtoHref}
          className="flex items-center justify-center hover:decoration-dark-yellow hover:decoration-2 hover:underline hover:underline-offset-8"
        >
          Contact
        </a>
      </ul>
    </div>
  );
}
