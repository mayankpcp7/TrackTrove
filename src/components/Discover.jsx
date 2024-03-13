import React from "react";
import island from "../assets/images/webp/island.webp";
import hut from "../assets/images/webp/huts.webp";
import leftvec from "../assets/images/webp/headerleft-vec.webp";
const Discover = () => {
  return (
    <>
      <div
        className="max-w-[1140px] mx-auto px-4 xl:px-0 xl:pt-[120px] lg:pt-[100px] md:pt-[80px] sm:pt-[60px] pt-[48px] relative"
        id="aboutus"
      >
        {/* ------------------------------------images and card of discover----------------------------- */}
        <img
          className="max-w-[80px] xl:max-w-[163px] absolute top-[-10%] xl:top-[-22%] start-[1%] xl:start-[-12%] animate-tilt"
          src={leftvec}
          alt="vec"
        />
        <div className="flex lg:flex-row flex-col-reverse items-center justify-between">
          <div className="flex flex-col mb-[-80px] scale-[0.8] scale_6 sm:scale-[0.9] lg:scale-100 -my_80 sm:my-[0px] lg:my-0">
            <div className="flex px-4 sm:px-0">
              <img
                className="max-w-[352px] bg-white destination_shadow  border-white rounded-[16px] p-2"
                src={island}
                alt="island.webp"
              />
              <div className="shadow-[4px_4px_16px_0px_#00000029] flex flex-col justify-center rounded-[8px] ms-6 mt-9 items-center  w-[139px] h-[116px]">
                <h3 className="text-lg text-lightgreen font-semibold">200+</h3>
                <p className="font-jos text-center text-black text-base opacity-60">
                  Customer & partners
                </p>
              </div>
            </div>
            <div className="flex ms-5  px-4 sm:pe-0">
              <div className="shadow-[4px_4px_16px_0px_#00000029] flex bg-white flex-col justify-center rounded-[8px] ms-6 mt-9 items-center w-[139px] h-[116px]">
                <h3 className="text-lg text-lightgreen font-semibold">500+</h3>
                <p className="font-jos text-center max-w-[91px] mx-auto text-black text-base opacity-60">
                  Place in the world
                </p>
              </div>
              <img
                className="max-w-[352px] ms-9 mt-[-36%] bg-white destination_shadow rounded-[16px] p-2"
                src={hut}
                alt="hut.webp"
              />
            </div>
          </div>

          <div
            className="flex flex-col items-center lg:items-start lg:ps-12 "
            data-aos="fade-in-right"
            data-aos-duration="1500"
          >

          {/* -----------------------------subheading and content--------------------------------- */}
            <h2 className="text-center sm:text-[48px] text-[27px] lg:text-start xl:text-xl text-secondaryblack font-bold leading-[120%] lg:max-w-[481px]">
              Discover the <span className="text-lightgreen">World </span> with
              Us
            </h2>
            <p className="pt-2 md:pt-4 text-black opacity-60 max-w-[530px] sm:max-w-[700px] lg:max-w-[459px] lg:text-start text-center text-base capitalize">
              Lorem ipsum dolor sit amet consectetur. In ultrices orci urna eget
              fringilla nisl duis lectus. Tincidunt pretium odio at scelerisque
              viverra integer et at. Penatibus in elementum habitant
              pellentesque sit posuere posuere accumsan.
            </p>
            <button className="w-[140px] hidden h-[52px] lg:flex items-center justify-center mt-8 bg-lightgreen transition-all duration-300 text-white rounded-[32px] border-[3px] hover:bg-black hover:text-white font-semibold border-[#c2e2c2]">
              Learn More
            </button>
          </div>
        </div>
        <button className="w-[140px] mx-auto mb-12 sm:mb-0 lg:hidden h-[52px] flex items-center justify-center mt-12 sm:mt-2 my_6 bg-lightgreen transition-all duration-300 text-white rounded-[32px] border-[3px] hover:bg-black hover:text-white font-semibold border-[#c2e2c2]">
          Learn More
        </button>
      </div>
    </>
  );
};

export default Discover;
