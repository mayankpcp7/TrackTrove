import React from "react";
import varanasi from "../assets/images/webp/varanasi.webp";
import agra from "../assets/images/webp/agra.webp";
import jaipur from "../assets/images/webp/jaipur.webp";
import cardvec from "../assets/images/webp/readright-vec.webp"
const Destination = () => {
  function viewall() {
    document.getElementById("view").style.display = "flex";
    document.getElementById("view2").style.display = "flex";
    document.getElementById("view3").style.display = "flex";
    document.getElementById("viewbutton").style.display = "none";
    document.getElementById("lessbutton").style.display = "flex";
  }
  function hideall() {
    document.getElementById("view").style.display = "none";
    document.getElementById("view2").style.display = "none";
    document.getElementById("view3").style.display = "none";
    document.getElementById("viewbutton").style.display = "flex";
    document.getElementById("lessbutton").style.display = "none";
  }

  return (
    <>
      <div
        className="max-w-[1140px]  sm:py-[60px] py-[48px] md:py-[80px] lg:py-[100px] xl:pt-[120px] xl:pb-[118px] mx-auto px-4 xl:px-0"
        id="destination"
      >
        <h2
          className="text-center font-bold  text-[30px] sm:text-[42px] xl:text-xl leading-[129%]"
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          Top <span className="text-lightgreen">Destination</span>
        </h2>
        <p className="text-center text-black capitalize opacity-60 max-w-[609px] mx-auto pt-4">
          Lorem ipsum dolor sit amet consectetur. In ultrices orci urna eget
          fringilla nisl duis lectus. Tincidunt pretium odio at scelerisque
          viverra integer et at.
        </p>
        <div className="flex flex-row flex-wrap relative z-10 justify-center mt-10 mx-3">
          <img
            className="absolute top-[-1.3%]  max-w-[80px] xl:max-w-[163px] end-[6.2%]"
            src={cardvec}
            alt="destination"
          />
          <div
            className=" sm:w-6/12 md:w-5/12 lg:w-4/12 px-3"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
          >
            <div className="flex max-w-[350px] overflow-hidden border-[5px] border-white w-full md:max-w-[364px] flex-col bg-white  rounded-[16px] destination_shadow shadow-[] relative">
              <img
                className="rounded-[16px] transition-all duration-300 hover:scale-110 "
                src={varanasi}
                alt="varanasi.webp"
              />
              <h4 className="text-white font-semibold text-[20px] lg:text-[24px] absolute bottom-[32px] start-[50%] text-nowrap leading-[100%] translate-x-[-50%]">
                Varanasi, Uttar Pradesh
              </h4>
            </div>
          </div>
          <div
            className=" sm:w-6/12 md:w-5/12 lg:w-4/12 px-3 pt-6 sm:pt-0"
            data-aos="zoom-in-up"
            data-aos-duration="1700"
          >
            <div className="flex max-w-[350px] overflow-hidden border-[5px] border-white w-full md:max-w-[364px] flex-col bg-white  rounded-[16px] destination_shadow relative">
              <img
                className=" rounded-[16px] transition-all duration-300 hover:scale-110  border-white"
                src={agra}
                alt="varanasi.webp"
              />
              <h4 className="text-white font-semibold text-[20px] lg:text-[24px] absolute bottom-[32px] start-[50%] text-nowrap leading-[100%] translate-x-[-50%]">
                Taj Mahal, Agra
              </h4>
            </div>
          </div>
          <div
            className=" sm:w-6/12 md:w-5/12 lg:w-4/12 px-3 pt-6 lg:pt-0"
            data-aos="zoom-in-up"
            data-aos-duration="1900"
          >
            <div className="flex  border-[5px] border-white max-w-[350px] overflow-hidden w-full md:max-w-[364px] flex-col bg-white  rounded-[16px] destination_shadow relative">
              <img
                className="rounded-[16px] transition-all duration-300 hover:scale-110  border-white"
                src={jaipur}
                alt="varanasi.webp"
              />
              <h4 className="text-white font-semibold text-[20px] lg:text-[24px] absolute bottom-[32px] start-[50%] text-nowrap leading-[100%] translate-x-[-50%]">
                Jaipur, Rajasthan
              </h4>
            </div>
          </div>

          <div
            className=" sm:w-6/12 md:w-5/12 lg:w-4/12 px-3 hidden pt-6"
            id="view"
          >
            <div className="flex max-w-[350px] overflow-hidden border-[5px] border-white w-full md:max-w-[364px] flex-col bg-white  rounded-[16px] destination_shadow relative">
              <img
                className="rounded-[16px] transition-all duration-300 hover:scale-110 "
                src={varanasi}
                alt="varanasi.webp"
              />
              <h4 className="text-white font-semibold text-[20px] lg:text-[24px] absolute bottom-[32px] start-[50%] text-nowrap leading-[100%] translate-x-[-50%]">
                Varanasi, Uttar Pradesh
              </h4>
            </div>
          </div>
          <div
            className=" sm:w-6/12 md:w-5/12 lg:w-4/12 px-3 pt-6  hidden"
            id="view2"
          >
            <div className="flex max-w-[350px] overflow-hidden border-[5px] border-white w-full md:max-w-[364px] flex-col bg-white  rounded-[16px] destination_shadow relative">
              <img
                className=" rounded-[16px] transition-all duration-300 hover:scale-110  border-white"
                src={agra}
                alt="agra.webp"
              />
              <h4 className="text-white font-semibold text-[20px] lg:text-[24px] absolute bottom-[32px] start-[50%] text-nowrap leading-[100%] translate-x-[-50%]">
                Taj Mahal, Agra
              </h4>
            </div>
          </div>
          <div
            className=" sm:w-6/12 md:w-5/12 lg:w-4/12 px-3 pt-6  hidden"
            id="view3"
          >
            <div className="flex  border-[5px] border-white max-w-[350px] overflow-hidden w-full md:max-w-[364px] flex-col bg-white  rounded-[16px] destination_shadow relative">
              <img
                className="rounded-[16px] transition-all duration-300 hover:scale-110  border-white"
                src={jaipur}
                alt="jaipur.webp"
              />
              <h4 className="text-white font-semibold text-[20px] lg:text-[24px] absolute bottom-[32px] start-[50%] text-nowrap leading-[100%] translate-x-[-50%]">
                Jaipur, Rajasthan
              </h4>
            </div>
          </div>
        </div>
        <button
          className="w-[117px] mx-auto h-[52px] flex items-center justify-center mt-8 bg-lightgreen transition-all duration-300 text-white rounded-[32px] border-[3px] hover:bg-black hover:text-white font-semibold border-[#c2e2c2]"
          id="viewbutton"
          onClick={viewall}
        >
          View All
        </button>
        <button
          onClick={hideall}
          className="w-[117px] mx-auto h-[52px] hidden items-center justify-center mt-8 bg-lightgreen transition-all duration-300 text-white rounded-[32px] border-[3px] hover:bg-black hover:text-white font-semibold border-[#c2e2c2]"
          id="lessbutton"
        >
          View Less
        </button>
      </div>
    </>
  );
};

export default Destination;
