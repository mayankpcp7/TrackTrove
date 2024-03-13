import React from "react";
import { readSlider } from "./Helper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Nextbtn, Prevbtn } from "./icons/Sliderarrows";
import readvec from "../assets/images/webp/readright-vec.webp";

const ReadBefore = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const first = React.useRef();
  return (
    <>
      <section
        className="pt-[48px] sm:pt-[60px] md:pt-[80px] lg:pt-[100px] xl:pt-[120px] md:pb-[289px] pb-[250px]"
        id="readbefore"
      >
        <div className="xl:max-w-[1140px]  lg:max-w-[900px] sm:max-w-[640px] mx-auto px-4 xl:px-0 relative">
          <img
            className="animate-tilt-right z-0 sm:block hidden max-w-[80px] xl:max-w-[163px] absolute top-[-10%] xl:top-[-30%] end-[-5%] xl:end-[-12%]"
            src={readvec}
            alt="readvec"
          />
          <h2
            className="text-center font-bold  text-[30px] sm:text-[42px] xl:text-xl leading-[129%]"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            Read
            <span className="text-lightgreen"> Before You</span> Travel
          </h2>
          <p
            className="text-center max-w-[519px] mx-auto text-black opacity-60 text-base pt-4"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            Lorem ipsum dolor sit amet consectetur. In ultrices orci urna eget
            fringilla nisl duis lectus. Tincidunt pretium odio at .
          </p>
          <div className="relative">
            <span
              className="cursor-pointer md:block hidden absolute start-[-56px] top-[50%] translate-y-[-50%]"
              onClick={() => first.current.slickPrev()}
            >
              <Prevbtn />
            </span>
            <span
              className="cursor-pointer md:block hidden absolute end-[-56px] top-[50%] translate-y-[-50%]"
              onClick={() => first.current.slickNext()}
            >
              <Nextbtn />
            </span>
            <Slider className="relative z-20" ref={first} {...settings}>
              {readSlider.map((places) => {
                return (
                  <div className="d-flex max-w-[300px] relative z-30 mx-auto lg:max-w-[364px] flex-column border-[5px] rounded-[16px] border-[#FCFEFC] bg-white read_shadow transition-all duration-300">
                    <img
                      className="max-w-[356px] w-full"
                      src={places.readimg}
                      alt="placeimg"
                    />
                    <div className="flex flex-col py-4 xl:py-8 px-3 xl:px-6">
                      <h3 className="font-semibold text-[20px] leading-[110%]">
                        {places.name}
                      </h3>
                      <p className="mt-2 opacity-60 text-secondaryblack text-base">
                        {places.about}
                      </p>
                      <div className="flex mt-4 justify-between">
                        <p className="text-lightgreen text-base">Anna</p>
                        <p className="text-lightgreen text-base">8 Dec 2023</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReadBefore;
