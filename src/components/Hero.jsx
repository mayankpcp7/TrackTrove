import React from "react";
import Nav from "./Nav";
import select from "../assets/images/svg/select.svg";
import location from "../assets/images/svg/location.svg";
import calender from "../assets/images/svg/calender.svg";
const Hero = () => {
  return (
    <>
      <header
        className="bg_header bg-no-repeat bg-center bg-cover pb-[100px] xl:pb-[190px] 2xl:pb-0 flex flex-col 2xl:min-h-screen"
        id="Hero"
      >
        {/*----------------------------------------- navbar -------------------------------------*/}
        <Nav />

        {/*----------------------------------------- hero section-------------------------------- */}
        <main className="flex flex-col h-full justify-center grow 2xl:pt-0 pt-[80px] lg:pt-[163px] px-4 xl:px-0">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-0 justify-between max-w-[1140px] w-full mx-auto">
            <div
              className="flex flex-col justify-center items-center lg:items-start lg:justify-start max-w-[530px] lg:max-w-[500px] xl:max-w-[598px]"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <h1 className="font-jost font-bold  text-[36px] sm:text-[40px] lg:text-[45px] xl:text-xxl capitalize leading-[120%] lg:text-start text-center">
                Its time to travel around
                <span className="text-lightgreen"> the World !</span>
              </h1>
              <p className="text-center lg:text-start font-jost capitalize text-black text-sm lg:text-base lg:max-w-[535px] pt-2 lg:pt-4  font-normal opacity-60">
                Discover the world with Wanderlust Travels, your ultimate
                companion for unforgettable journeys and remarkable adventures.
                Whether you're seeking the tranquility of secluded beaches, the
                excitement of bustling cities, or the awe-inspiring beauty of
                natural wonders, we've got you covered.
              </p>
              <button className="w-[112px] h-[52px] flex items-center justify-center mt-8 bg-lightgreen transition-all duration-300 text-white rounded-[32px] border-[3px] hover:bg-black hover:text-white font-semibold border-[#c2e2c2]">
                Explore
              </button>
            </div>
            {/* ---------------------------input box---------------------------------------- */}
            <div
              className="flex flex-col w-[340px] sm:w-[373px] h-[308px] p-4 sm:p-8 lg:mt-[82px] lg:ms-3 xl:ms-0 bg-white justify-center rounded-[16px]"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className=" text-secondaryblack pb-2 font-jost text-base opacity-60 ">
                <p className="text-base leading-[100%] pb-2"> Location </p>
                <div class="relative">
                  <img
                    className="absolute ms-4 top-[50%] translate-y-[-50%] start-0"
                    src={location}
                    alt="location.svg"
                  />
                  <select class="block ps-10 appearance-none w-full rounded-[48px] h-[48px] bg-white border border-[#c2e2c2] focus:outline-none">
                    <option className="font-jost text-sm text-secondaryblack opacity-60">
                      Bali, Indonesia
                    </option>
                    <option className="font-jost text-sm text-secondaryblack opacity-60">
                      Malasia
                    </option>
                    <option className="font-jost text-sm text-secondaryblack opacity-60">
                      Thailand
                    </option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <img
                      className="cursor-pointer me-4"
                      src={select}
                      alt="selectarrow.svg"
                    />
                  </div>
                </div>
              </div>
              <div className=" text-secondaryblack pb-2 font-jost text-base opacity-60 ">
                <p className="mt-2 leading-[100%] pb-2">Dates</p>
                <div class="relative">
                  <img
                    className="absolute ms-4 top-[50%] translate-y-[-50%] start-0"
                    src={calender}
                    alt="calender.svg"
                  />
                  <select class="block ps-10 appearance-none w-full rounded-[48px] h-[48px] bg-white border border-[#c2e2c2] focus:outline-none">
                    <option className="font-jost text-sm text-secondaryblack opacity-60">
                      Select a date range
                    </option>
                    <option className="font-jost text-sm text-secondaryblack opacity-60">
                      3/03/2024
                    </option>
                    <option className="font-jost text-sm text-secondaryblack opacity-60">
                      4/03/2024
                    </option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <img
                      className="cursor-pointer me-4"
                      src={select}
                      alt="selectarrow.svg"
                    />
                  </div>
                </div>
              </div>
              <button className="w-full transition-all hover:bg-black font-semibold duration-300 min-h-[52px] flex items-center justify-center mt-6 bg-lightgreen text-white rounded-[32px] border-[3px] border-[#c2e2c2]">
                Search
              </button>
            </div>
          </div>
        </main>
      </header>
    </>
  );
};

export default Hero;
