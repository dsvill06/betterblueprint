import React, { useState } from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";
import { services } from "../constants";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import SpringModal from "./Modal";
import { FiCheck } from "react-icons/fi";
import { fadeIn } from "../utils/motion";

const PriceCard = ({ type, title, price, bullets, moreInfo, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" w-full lg:w-1/4">
      <div
       
        className=" md:h-[415px] h-auto m-5 p-5 border-taupe border-2 rounded-xl flex flex-col gap-2 hover:cursor-pointer shadow-lg mt-10 "
        onClick={() => setIsOpen(true)}
      >
        <div className="flex flex-col gap-y-1">
          <h1 className=" text-battleGray text-xl">{type}:</h1>
          <h2 className="text-eerieBlack font-bold text-2xl">{title}</h2>
          <p className="text-[#2c4b76] text-5xl ">
            $
            <span className=" font-semibold ">
              {price}
              <span className="text-3xl">
                {index === 1 || index === 2 ? "/month" : ""}
              </span>
            </span>
          </p>
          {bullets.map((bullet, index) => {
            return (
              <ol className="flex flex-row">
                <li className=" text-jet mt-2">{bullet}</li>
              </ol>
            );
          })}
          <motion.button
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 0.95,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            className="bg-primary shadow-xl hover:shadow-none rounded-xl p-2  text-center font-poppins hover:cursor-pointer w-full col-end-1"
          >
            Find out more
          </motion.button>
        </div>
      </div>
      <SpringModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={title}
        moreInfo={moreInfo}
      />
    </div>
  );
};

const Services = () => {
  return (
    <>
      <section
        className="bg-flashWhite relative flex flex-col w-screen h-auto  mx-auto 
        overflow-hidden justify-center pt-10 md:mt-0 rounded-t-lx md:rounded-tl-[250px] pb-16"
      >
        <h1
          className={`text-7xl font-light text-eerieBlack justify-center text-center font-poppins`}
        >
          Our Services
        </h1>
        <h2 className="text-2xl font-light text-taupe text-center w-1/2 self-center">
          Here are the services that we offer to develop your company or
          organization!
        </h2>
        <div className="flex flex-col flex-wrap md:flex-row mt-4 justify-center">
          {services.map((service, index) => {
            return (
              <PriceCard
                title={service.title}
                type={service.type}
                price={service.price}
                bullets={service.bullets}
                moreInfo={service.moreInfo}
                index={index}
                {...service}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Services;
