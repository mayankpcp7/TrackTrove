import React, { useState } from "react";
import check from "../assets/images/svg/check.svg";
import greenellipse from "../assets/images/webp/green-ellipse.webp";
import mountain from "../assets/images/webp/mountains.webp";
import pillar from "../assets/images/webp/pillar.webp";
import serviceisland from "../assets/images/webp/service-island.webp";
import tajmahal from "../assets/images/webp/tajmahal.webp";
import serviceleftvec from "../assets/images/webp/serviceleft-vec.webp";

const Service = () => {
  function viewmore() {
    document.getElementById("serviceview").style.display = "flex";
    document.getElementById("serviceview2").style.display = "flex";
    document.getElementById("showbutton").style.display = "none";
    document.getElementById("showlessbutton").style.display = "flex";
  }
  function viewless() {
    document.getElementById("serviceview").style.display = "none";
    document.getElementById("serviceview2").style.display = "none";
    document.getElementById("showlessbutton").style.display = "none";
    document.getElementById("showbutton").style.display = "flex";
  }
  return (
    <>
      <section className="bg-[#f7fbf7] py-12 sm:py-[60px] relative">
        <div className="max-w-[1140px] mx-auto px-4 xl:px-0 relative">
          <img
            className="max-w-[80px] animate-tilt xl:max-w-[163px] absolute top-[-15%] xl:top-[-27%] start-[1%] xl:start-[-12%]"
            src={serviceleftvec}
            alt="leftvec"
          />
          <div className="flex flex-col-reverse gap-6 lg:gap-0 items-center xl:justify-normal justify-between  lg:flex-row">
            <div data-aos="fade-right" data-aos-duration="1500">
              <h2 className="text-center lg:text-start font-bold mx-auto lg:mx-0 lg:max-w-[474px] text-[30px] sm:text-[42px] xl:text-xl leading-[100%] sm:leading-[129%]">
                The Best And Most trusted
                <span className="text-lightgreen"> service</span>
              </h2>
              <p className="lg:text-start text-center max-w-[650px] lg:max-w-[479px] mx-auto lg:mx-0 mt-3 text-black opacity-60 text-base">
                Lorem ipsum dolor sit amet consectetur. In ultrices orci urna
                eget fringilla nisl duis lectus. Tincidunt pretium odio at
                scelerisque viverra integer et at. Penatibus in elementum
                habitant pellentesque sit posuere posuere accumsan.
              </p>
              <div className="flex items-center justify-center flex_col mt-4 lg:mt-0 lg:justify-start">
                <div className="flex items-center p_0 mx_0 mt-6 mt_0">
                  <img className="max-w-[20px] sm:max-w-[28px]" src={check} alt="check" />
                  <h5 className="text-center lg:text-start  text-black font-semibold text-md xl:text-[20px] ps-2">
                    Tailored Itineraries
                  </h5>
                </div>
                <div className="flex items-center mt_0 p_0 mx_0 mt-6 ms-8">
                  <img className="max-w-[20px] sm:max-w-[28px]" src={check} alt="check" />
                  <h5 className="text-black font-semibold text-md xl:text-[20px] ps-2 lg:ps-4">
                    Destination Expertise
                  </h5>
                </div>
              </div>
              <div className="flex m_40 items-center flex_col justify-center mx_0 lg:justify-start sm:pe-5 lg:pe-0 sm:me-2 lg:me-0">
                <div className="flex mt-6 items-center ms-2 sm:ms-0 p_0 mx_0">
                  <img className="max-w-[20px] ms_2 !lg:ms-0 sm:max-w-[28px]" src={check} alt="check" />
                  <h5 className="text-center  lg:text-start text-black font-semibold text-md xl:text-[20px] ps-2">
                    Unique Experiences
                  </h5>
                </div>
                <div className="flex mt-6 items-center p_0 mx_0 ms-5 justify-start">
                  <img className="max-w-[20px] sm:max-w-[28px] ms_0 ms-1 lg:ms-0" src={check} alt="check" />
                  <h5 className="text-black  font-semibold text-md xl:text-[20px] ps-2">
                    Hassle-Free Travel
                  </h5>
                </div>
              </div>
              <div
                className="hidden items-center flex_col justify-center lg:justify-start"
                id="serviceview"
              >
                <div className="flex items-center mt-6 p_0 mx_0 mt_0">
                  <img className="max-w-[20px] sm:max-w-[28px]" src={check} alt="check" />
                  <h5 className="text-center lg:text-start  text-black font-semibold text-md xl:text-[20px] ps-2">
                    Tailored Itineraries
                  </h5>
                </div>
                <div className="flex items-center mt_0 p_0 mx_0 mt-6 ms-8">
                  <img className="max-w-[20px] sm:max-w-[28px]" src={check} alt="check" />
                  <h5 className="text-black font-semibold text-md xl:text-[20px] ps-2 lg:ps-4">
                    Destination Expertise
                  </h5>
                </div>
              </div>
              <div
                className="hidden flex_col items-center  justify-center lg:justify-start pe-5 lg:pe-0 me-2"
                id="serviceview2"
              >
                <div className="flex items-center p_0 mx_0 mt-6 ">
                  <img className="max-w-[20px] sm:max-w-[28px]  sm:ms-0" src={check} alt="check" />
                  <h5 className="text-center  lg:text-start text-black font-semibold text-md xl:text-[20px] ps-2">
                    Unique Experiences
                  </h5>
                </div>
                <div className="flex items-center ms-5 p_0 mx_0 mt-6  justify-start">
                  <img className="max-w-[20px] sm:max-w-[28px]" src={check} alt="check" />
                  <h5 className="text-black  font-semibold text-md xl:text-[20px] ps-2">
                    Hassle-Free Travel
                  </h5>
                </div>
              </div>

              <button
                onClick={viewmore}
                id="showbutton"
                className=" w-[117px] mx-auto lg:mx-0 h-[52px] flex items-center justify-center mt-6 bg-lightgreen transition-all duration-300 text-white rounded-[32px] border-[3px] hover:bg-black hover:text-white font-semibold border-[#c2e2c2]"
              >
                View All
              </button>
              <button
                onClick={viewless}
                id="showlessbutton"
                className=" hidden w-[117px] mx-auto lg:mx-0 h-[52px] items-center justify-center mt-6 bg-lightgreen transition-all duration-300 text-white rounded-[32px] border-[3px] hover:bg-black hover:text-white font-semibold border-[#c2e2c2]"
              >
                View Less
              </button>
            </div>
            <div
              className="relative max-w-[486px] lg:ms-12 ms-xl-0 flex  xl:ms-[120px] justify-center md:scale-90 xl:scale-100  "
              data-aos="fade-in"
              data-aos-duration="1500"
            >
              <img
                className="max-w-[380px] sm:max-w-[486px] lg:max-w-[508px] xl:max-w-[650px] "
                src={greenellipse}
                alt="ellipse.webp"
              />
              <div className="flex items-center absolute top-[50%] start-[50%] translate-x-[-50%] translate-y-[-50%]">
                <div className="flex flex-col">
                  <img
                    className="tramsition-all destination_shadow rounded-[16px] mb-[24px] duration-300 hover:scale-90 max-w-[160px] sm:max-w-[202px] xl:max-w-[267px] m-[-8px]"
                    src={mountain}
                    alt="mountains.webp"
                  />
                  <img
                    className="tramsition-all destination_shadow rounded-[16px] duration-300 hover:scale-90 max-w-[160px] sm:max-w-[202px] xl:max-w-[267px] m-[-8px]"
                    src={serviceisland}
                    alt="serviceisland"
                  />
                </div>
                <div className="flex flex-col">
                  <img
                    className="tramsition-all mb-[24px] destination_shadow rounded-[16px] ms-6 duration-300 hover:scale-90 max-w-[160px] sm:max-w-[202px] xl:max-w-[267px] m-[-8px]"
                    src={pillar}
                    alt="pillar"
                  />
                  <img
                    className="tramsition-all destination_shadow rounded-[16px] duration-300 ms-6 hover:scale-90 max-w-[160px] sm:max-w-[202px] xl:max-w-[267px] m-[-8px]"
                    src={tajmahal}
                    alt="tajmahal"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Service;
