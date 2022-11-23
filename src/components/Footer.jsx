import Instagram from "../assets/icons/Instagram.png";
import WhatsApp from "../assets/icons/WhatsApp.png";
import GitHub from "../assets/icons/GitHub.png";
import Facebook from "../assets/icons/Facebook.png";

export default function Footer() {
  return (
    <div className="flex md:mt-[10rem]  items-center text-white font-kanit bg-dark-blue h-[8rem]">
      <div className="font-semibold text-md md:flex gap-12 justify-center items-center w-full">
        <div className="flex mx-4 text-sm justify-center">
          © Copyright 2022 • Resi Wicaksono • All Right Reserved
        </div>
        <div className="flex gap-4 mt-4 md:mt-0 justify-center">
          <img src={Instagram} alt="instagram" className="h-[50px]" />
          <img src={WhatsApp} alt="whatsapp" className="h-[50px]" />
          <img src={GitHub} alt="github" className="h-[50px]" />
          <img src={Facebook} alt="facebook" className="h-[50px]" />
        </div>
      </div>
    </div>
  );
}
