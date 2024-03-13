import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import threeperson from "../assets/images/webp/threeperson.webp";
import benchgirl from "../assets/images/webp/benchgirl.webp";
import hatgirl from "../assets/images/webp/hatgirl.webp";
import fieldgirl from "../assets/images/webp/fieldgirl.webp";
import snowgirl from "../assets/images/webp/redcoatgirl.webp";
import galleryvec from "../assets/images/webp/readright-vec.webp"

function Ourgallery() {
  return (
    <>
      <section className="xl:pt-[130px] lg:pt-[100px] lg:pb-[100px] md:py-[80px] sm:py-[60px] py-[48px] xl:pb-[118px] relative">
        <img
          className="animate-tilt-right sm:block hidden max-w-[80px] xl:max-w-[163px] absolute end-[2%] top-[-10%]"
          src={galleryvec}
          alt="vec"
        />
        <div className=" xl:max-w-[1140px] xl:mx-auto mx-4 relative overflow-hidden">
          <h2 className="text-center font-bold  text-[38px] sm:text-[42px] xl:text-xl leading-[129%]">
            Our <span className="text-lightgreen">Gallery </span>
          </h2>
          <p className="text-center max-w-[609px] capitalize mx-auto text-black opacity-60 text-base pt-4">
            Lorem ipsum dolor sit amet consectetur. In ultrices orci urna eget
            fringilla nisl duis lectus. Tincidunt pretium odio at scelerisque
            viverra integer et at.
          </p>

          <Swiper
            className=" absolute start-[50%] px-4 !translate-x-[-50%] my-10  "
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 500,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            breakpoints={{
              // when window width is >= 640px
              500: {
                slidesPerView: 3,
              },
              // when window width is >= 768px
            }}
          >
            <SwiperSlide>
              <img
                className="max-w-[300px] lg:max-w-[505px] gallery_shadow hover:scale-105 transition-all duration-300"
                src={hatgirl}
                alt="slide1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="max-w-[300px] lg:max-w-[505px] gallery_shadow hover:scale-105 transition-all duration-300"
                src={fieldgirl}
                alt="slide2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="max-w-[300px] lg:max-w-[505px] gallery_shadow hover:scale-105 transition-all duration-300"
                src={snowgirl}
                alt="slide3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="max-w-[300px] lg:max-w-[505px] gallery_shadow hover:scale-105 transition-all duration-300"
                src={fieldgirl}
                alt="slide4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="max-w-[300px] lg:max-w-[505px] gallery_shadow hover:scale-105 transition-all duration-300"
                src={threeperson}
                alt="threeperson"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="max-w-[300px] lg:max-w-[505px] gallery_shadow hover:scale-105 transition-all duration-300"
                src={benchgirl}
                alt="slide5"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
export default Ourgallery;
