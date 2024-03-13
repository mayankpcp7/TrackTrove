import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import eifletower from "../assets/images/webp/eifle-tower.webp";
import benchgirl from "../assets/images/webp/benchgirl.webp";
import hatgirl from "../assets/images/webp/hat-girl.webp";
import fieldgirl from "../assets/images/webp/field-girl.webp";
import snowgirl from "../assets/images/webp/redcoat-girl.webp";
import galleryvec from "../assets/images/webp/readright-vec.webp"

function OurGallery() {
  return (
    <>
      <section className="xl:pt-[130px] lg:pt-[100px] lg:pb-[100px] md:py-[80px] sm:py-[60px] py-[48px] xl:pb-[118px] relative">
        <img
          className="animate-tilt-right sm:block hidden max-w-[80px] xl:max-w-[163px] absolute end-[2%] top-[-10%]"
          src={galleryvec}
          alt="vec"
        />
        {/* ------------------------subheading-------------------------- */}
        <div className=" xl:max-w-[1140px] xl:mx-auto mx-4 relative overflow-hidden">
          <h2 className="text-center font-bold  text-[38px] sm:text-[42px] xl:text-xl leading-[129%]">
            Our <span className="text-lightgreen">Gallery </span>
          </h2>
          <p className="text-center max-w-[609px] capitalize mx-auto text-black opacity-60 text-base pt-4">
            Lorem ipsum dolor sit amet consectetur. In ultrices orci urna eget
            fringilla nisl duis lectus. Tincidunt pretium odio at scelerisque
            viverra integer et at.
          </p>

          {/*------------------------------------------ our gallery slider----------------------------------- */}
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
                alt="hatgirl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="max-w-[300px] lg:max-w-[505px] gallery_shadow hover:scale-105 transition-all duration-300"
                src={fieldgirl}
                alt="fieldgirl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="max-w-[300px] lg:max-w-[505px] gallery_shadow hover:scale-105 transition-all duration-300"
                src={snowgirl}
                alt="snowgirl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="max-w-[300px] lg:max-w-[505px] gallery_shadow hover:scale-105 transition-all duration-300"
                src={fieldgirl}
                alt="fieldgirl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="max-w-[300px] lg:max-w-[505px] gallery_shadow hover:scale-105 transition-all duration-300"
                src={eifletower}
                alt="eifletower"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="max-w-[300px] lg:max-w-[505px] gallery_shadow hover:scale-105 transition-all duration-300"
                src={benchgirl}
                alt="benchgirl"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
export default OurGallery;

