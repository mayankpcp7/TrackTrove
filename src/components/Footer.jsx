import React from "react";
import footerlogo from "../assets/images/webp/footerlogo.webp";
import leftarrow from "../assets/images/svg/welcome-left.svg";
import rightarrow from "../assets/images/svg/welcome-right.svg";
import footervec from "../assets/images/webp/headerleft-vec.webp";
import { Facebook, Instagram, Linkedin } from "./icons/Footersocialicons";
const Footer = () => {
  return (
    <>
      <footer className="bg-secondaryblack pt-[218px] px-4 relative">
        <div className="relative mt-[-400px] max-w-[980px] mx-auto">
          <img
            className="animate-tilt max-w-[80px] xl:max-w-[163px] absolute top-[-35%] xl:top-[-42%] start-[-2%] xl:start-[-23%]"
            src={footervec}
            alt="vec"
          />
          <div className="w-full  lg:max-w-[980px] bg-lightgreen py-[40px] px-4 md:py-[52px] rounded-[48px] relative">
            <img
              className="absolute bottom-[20%] start-[6%] sm:max-w-[74px] hidden md:block lg:max-w-full"
              src={leftarrow}
              alt="arrow"
            />
            <img
              className="absolute bottom-[17%] end-[6%] sm:max-w-[74px]  lg:max-w-full hidden md:block"
              src={rightarrow}
              alt="arrow"
            />
            <h4 className="font-bold xl:text-xl  sm:text-[40px] leading-[100%] md:text-[48px] text-[38px] text-white text-center">
              Welcome to Our Newsletter
            </h4>
            <p className="pt-4 text-white text-base opacity-60 max-w-[466px] mx-auto text-center">
              Lorem ipsum dolor sit amet consectetur. In ultrices orci urna eget
              fringilla nisl duis lectus. Tincidunt pretium odio
            </p>
            <div className="flex bg-white items-center rounded-[32px] mt-8 p-1 sm:p-2 max-w-[408px] mx-auto">
              <input
                required
                id="mail-input"
                className="rounded-[32px] w-full border-none outline-0 px-3"
                placeholder="Enter your email"
              />
              <label htmlFor="mail-input">
                <button className="min-w-[94px] sm:min-w-[114px] h-[45px] sm:h-[52px] flex items-center justify-center bg-lightgreen transition-all duration-300 text-white rounded-[32px] border-[3px] hover:bg-black hover:text-white font-semibold border-[#c2e2c2]">
                  Sign Up
                </button>
              </label>
            </div>
          </div>
        </div>
        <div className="max-w-[1140px] mt-[50px] mx-auto px-4 xl:px-0">
          <div className="flex flex-wrap gap-8  lg:gap-14 xl:gap-0 ">
            <div className="flex flex-col">
              <a className="max-w-[97px]" href="#Hero">
                <img
                  className="max-w-[97px]"
                  src={footerlogo}
                  alt="logo.webp"
                />
              </a>
              <p className="text-start fon-bold text-base text-offwhite opacity-60 max-w-[445px] pt-4">
                Lorem ipsum dolor sit amet consectetur. Amet lobortis auctor
                ultricies consectetur. Vulputate lobortis aliquet pellentesque
                integer habitasse.
              </p>
            </div>
            <div className="flex flex-col xl:ms-[153px] me-5 xl:me-0">
              <h5 className="font-medium text-offwhite text-base">
                Quick Links
              </h5>
              <ul>
                <li className="pt-4">
                  <a
                    href="#"
                    className="text-offwhite text-base opacity-60 hover:opacity-100 transition-all duration-300"
                  >
                    Home
                  </a>
                </li>
                <li className="pt-4">
                  <a
                    href="#"
                    className="text-offwhite text-base opacity-60 hover:opacity-100 transition-all duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li className="pt-4">
                  <a
                    href="#"
                    className="text-offwhite text-base opacity-60 hover:opacity-100 transition-all duration-300"
                  >
                    Contact Us
                  </a>
                </li>
                <li className="pt-4">
                  <a
                    href="#"
                    className="text-offwhite text-base opacity-60 hover:opacity-100 transition-all duration-300"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col xl:ms-[100px]">
              <h5 className="font-medium text-offwhite text-base">Legal</h5>
              <ul>
                <li className="pt-4">
                  <a
                    href="#"
                    className="text-offwhite text-base opacity-60 hover:opacity-100 transition-all duration-300"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li className="pt-4">
                  <a
                    href="#"
                    className="text-offwhite text-base opacity-60 hover:opacity-100 transition-all duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col xl:ms-[100px]">
              <h5 className="text-white text-base font-medium">Follow Us On</h5>
              <div className="flex gap-4 mt-4">
                <a target="_blank" href="https://www.linkedin.com/feed/">
                  <Linkedin />
                </a>
                <a target="_blank" href="https://www.facebook.com/">
                  <Facebook />
                </a>
                <a target="_blank" href="https://www.instagram.com/">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
        </div>
        <span className="mt-8 flex bg_white opacity-60 h-[1px] w-full"></span>
        <p className="py-4 text-offwhite opacity-60 text-center">
          © All Rights Reserved 2024 | Travel
        </p>
      </footer>
    </>
  );
};

export default Footer;
