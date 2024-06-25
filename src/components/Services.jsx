import React, { useState } from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";
import { services } from "../constants";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import SpringModal from "./Modal";
import { FiCheck } from "react-icons/fi";
import { fadeIn } from "../utils/motion";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const PriceCard = ({ type, title, price, bullets, moreInfo, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" w-full lg:w-1/4">
      {/* <div
       
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
      </div> */}
      <Card
        color="gray"
        variant="gradient"
        className="w-full max-w-[20rem] p-8"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-4 rounded-none border-b border-white/10 pb-4 text-center"
        >
          <Typography
            variant="small"
            color="white"
            className="font-normal uppercase text-[#ADC9F3]"
          >
            {type}
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="mt-4 flex justify-center gap-1 text-7xl font-normal"
          >
            <span className="mt-2 text-4xl">$</span>
            {price}{" "}
            <span className="self-end text-4xl">
              {index === 1 || index === 2 ? "/month" : ""}
            </span>
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
          {bullets.map((bullet, index) => {
            return (
              <ol className="flex flex-row">
                <li className="text-platinum mt-2">
                  <Typography className="font-normal">{bullet}</Typography>
                </li>
              </ol>
            );
          })}
          {/* <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <Typography className="font-normal">5 team members</Typography>
            </li>
            <li className="flex items-center gap-4">
              <Typography className="font-normal">200+ components</Typography>
            </li>
            <li className="flex items-center gap-4">
              <Typography className="font-normal">
                40+ built-in pages
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <Typography className="font-normal">
                1 year free updates
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <Typography className="font-normal">
                Life time technical support
              </Typography>
            </li>
          </ul> */}
        </CardBody>
        <CardFooter className="mt-8 p-0">
          <Button
            size="lg"
            color="white"
            className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
            ripple={false}
            fullWidth={true}
            onClick={() => setIsOpen(true)}
          >
            Find out more
          </Button>
        </CardFooter>
      </Card>
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
        <div className="flex flex-col flex-wrap md:flex-row mt-4 justify-center pl-5">
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
