import React, { useState, useEffect } from "react";
import clientbg from "../assets/images/webp/client-bg.webp";
import clientvec from "../assets/images/svg/invertedcomas.svg";
import clientleftvec from "../assets/images/webp/clientleft-vec.webp";
import clientborder from "../assets/images/webp/clientborder.webp";
import { clientDataLg, clientsData } from "./common/Clientmap";


const Client = () => {
  const [activeClient, setActiveClient] = useState(null);

  useEffect(() => {
    setActiveClient(3);
  }, []);

  const handleClientClick = (index) => {
    setActiveClient(index === activeClient ? null : index);
    document.getElementById("client-pera").innerText = clientsData[index].text;
  };

  return (
    <>
      <section
        className="sm:py-[60px] py-12 md:py-[80px] lg:py-[100px] bg-[#f7fbf7]"
        id="client"
      >
        <div className="max-w-[1140px] mx-auto px-4 xl:px-0 relative">
          <img
            className="max-w-[80px] animate-tilt lg:block hidden xl:max-w-[163px] absolute top-[-35%] xl:top-[-60%] start-[1%] xl:start-[-12%]"
            src={clientleftvec}
            alt="clientvec.svg"
          />
          <h2 className="text-center font-bold  text-[30px] sm:text-[42px] xl:text-xl leading-[129%]">
            What Our <span className="text-lightgreen">Client Says </span>
          </h2>
          <div
            className="relative max-w-[980px] lg_none mx-auto mt-16"
            id="clientreview"
          >
            <img
              className="absolute top-[-12%] z-10 start-[8%]"
              src={clientvec}
              alt="clientvec.svg"
            />
            <img
              className="mx-auto min-h-[200px] border border-lightgreen rounded-[20px]"
              data-aos="zoom-in"
              data-aos-duration="1500"
              src={clientbg}
              alt="clientbg.webp"
            />
            <p
              id="client-pera"
              className="text-center absolute top-[50%] pb-5 px-3 xl:px-0 translate-x-[-50%] translate-y-[-50%] start-[50%] w-full max-w-[801px] text-black opacity-60"
            >
              {clientsData[activeClient]?.text}
            </p>
          </div>
          <div className="flex pt-4 client_slider max-w-[980px] mx-auto  mt-4 justify-center lg_none">
            {clientsData.map((client, index) => (
              <span
                key={index}
                className="relative flex flex-col items-center"
                onClick={() => handleClientClick(index)}
              >
                {activeClient === index && (
                  <img
                    className="max-w-[60px] absolute top-[-35%] start-[15%]"
                    src={clientborder}
                    alt="clientborder"
                  />
                )}
                <div className="flex items-center mt-5 justify-start">
                  <img
                    className="max-w-[80px] mx-6 transition_all duration-300 hover:scale-110"
                    src={client.image}
                    alt={`client-${index}`}
                  />
                  {activeClient === index && (
                    <div className="flex flex-col pe-6 ms-[-8px] justify-start mt-2">
                      <h6 className="text-black whitespace-nowrap text-base text-start font-semibold">
                        {client.name}
                      </h6>
                      <p className="text-black opacity-60 text-start text-base">
                        {client.country}
                      </p>
                    </div>
                  )}
                </div>
              </span>
            ))}
          </div>
          <>
            <div className="hidden lg_flex">
              {clientDataLg.map((clientlg, index) => (
                <div className="items-start mb-5" key={index}>
                  <img
                    className="max-w-[50px] sm:max-w-[60px]"
                    src={clientlg.image}
                    alt={clientlg.alt}
                  />
                  <div className="border ms-2 sm:ms-4 bg-[#eff7ef] border-lightgreen rounded-[20px] p-3 sm:p-5 max-w-[600px] justify-center">
                    <h5 className="text-[18px] font-semibold">{clientlg.name}</h5>
                    <p className="text-black opacity-60 mb-2 text-sm">
                      {clientlg.country}
                    </p>
                    <p className="text-sm sm:text-base text-justify">
                      {clientlg.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        </div>
      </section>
    </>
  );
};

export default Client;
