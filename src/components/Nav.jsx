import { useState } from "react";
import logo from "../assets/images/webp/logo.webp";
import { RxCross1 } from "react-icons/rx";
import { BiMenu } from "react-icons/bi";

const Nav = () => {
 const [head, sethead] = useState(true);
 function showUl() {
   sethead(!head);
 }
 if (!head) {
   document.body.style.overflow = "hidden";
 } else {
   document.body.style.overflow = "unset";
  }
  
  return (
    <>
      <section className="relative z-[2] animate__rotateInDownRight">
        <div className="max-w-[1140px] mx-auto xl:px-0 px-4 pt-5">
          <div className="flex md:justify-start justify-between items-center w-full">
            <img
              className="max-w-[97.8px] relative z-50 cursor-pointer mb-2"
              src={logo}
              alt="navlogo"
            />
            <div onClick={showUl} className="z-20 md:hidden">
              <h3 className="text-white text-3xl">
                {head ? <BiMenu /> : <RxCross1 />}
              </h3>
            </div>
            <div
              className={`flex flex-col md:flex-row fixed md:relative w-full min-h-screen md:min-h-0 top-[0] left-[-100%] md:left-0 ttransition-opacity duration-700 md:transition-none  justify-center md:justify-start
           items-center ${head ? "" : "!left-0 backdrop-blur-lg"}`}
            >
              <ul className="flex md:ms-9 md:hidden gap-6 flex-col md:flex-row items-center lg:gap-7">
                <li>
                  <a
                    onClick={showUl}
                    className="font-jost text-[20px] sm:text-[24px] md:text-base transition-all duration-300 text-lightgreen stroke_2"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    onClick={showUl}
                    className="font-jost text-[20px] sm:text-[24px] md:text-base transition-all duration-300 hover:text-lightgreen hover_stroke2 text-secondaryblack opacity-60 hover:opacity-100"
                    href="#aboutus"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    onClick={showUl}
                    className="font-jost text-[20px] sm:text-[24px] md:text-base transition-all duration-300 hover:text-lightgreen hover_stroke2 text-secondaryblack opacity-60 hover:opacity-100"
                    href="#client"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    onClick={showUl}
                    className="font-jost text-[20px] sm:text-[24px] md:text-base transition-all duration-300 hover:text-lightgreen hover_stroke2 text-secondaryblack opacity-60 hover:opacity-100"
                    href="#destination"
                  >
                    Destination
                  </a>
                </li>
              </ul>
              <ul className="hidden md:ms-9 md:flex items-center gap-7">
                <li>
                  <a
                    className="font-jost text-[20px] sm:text-[24px] md:text-base transition-all duration-300 text-lightgreen stroke_2"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="font-jost text-[20px] sm:text-[24px] md:text-base transition-all duration-300 hover:text-lightgreen hover_stroke2 text-secondaryblack opacity-60 hover:opacity-100"
                    href="#aboutus"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className="font-jost text-[20px] sm:text-[24px] md:text-base transition-all duration-300 hover:text-lightgreen hover_stroke2 text-secondaryblack opacity-60 hover:opacity-100"
                    href="#client"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a 
                    className="font-jost text-[20px] sm:text-[24px] md:text-base transition-all duration-300 hover:text-lightgreen hover_stroke2 text-secondaryblack opacity-60 hover:opacity-100"
                    href="#destination"
                  >
                    Destination
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nav;
