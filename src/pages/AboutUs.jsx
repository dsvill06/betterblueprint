import React from "react";
import { founder } from "../assets";
import { motion } from "framer-motion";
import { fulllogo } from "../assets";

const AboutUs = () => {
  return (
    <section className="w-auto h-auto bg-flashWhite font-poppins">
      <div className="flex flex-col md:flex-row h-auto">
        <motion.h1
          initial={{x:-50,opacity:0}}
          animate={{x:0, opacity:1}}
          transition={{duration:1}}
          className="text-center md:text-left text-5xl h-auto md:h-auto text-flashWhite bg-eerieBlack p-10 pt-32 font-poppins font-light flex flex-col gap-5"
        >
          About us
          <p className=" text-lg">Get to know our company and who founded it!</p>
        </motion.h1>
        <div className="w-full flex flex-col rounded-3xl ">
          <motion.img initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2, delay:.5}}
            src={founder}
            className=" object-cover w-[500px] h-[500px] scale-75 rounded-full mt-10 md:ml-5"
          />
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2, delay:2}} className="flex flex-col bg-taupe p-10 order-last md:rounded-3xl">
            <h1 className="text-center text-xl md:text-2xl">Company values</h1>
            <p className="text-eerieBlack text-center font-poppins">
              At Better Blueprint Consulting, we understand the fundamental
              importance of a solid blueprint in driving business success. We
              focus on cultivating brand partnerships, orchestrating flawless
              event planning and execution, and crafting intricate,
              results-driven social media strategies and calendars. A
              well-crafted blueprint is the key to progress and prosperity in
              the ever-evolving business landscape. At Better Blueprint
              Consulting, we're dedicated to ensuring your journey toward
              success is planned and perfected.
            </p>
          </motion.div>
        </div>{" "}
        <div className="flex flex-col md:w-9/12">
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.5, delay:.75}} className="font-poppins block text-sm bg-platinum text-taupe w-full text-clip object-cover md:px-5 p-5 rounded-3xl align-middle justify-center md:mt-16 text-center md:text-left ">
           <h1 className="text-2xl text-battleGray text-center ">Our Founder</h1>
            Lauryn Taylor is a UNC-Chapel Hill Advertising/Public Relations and
            Public Policy student passionate about helping businesses excel. Her
            early foray into the professional realm began as a Social Media
            Coordinator for Black Parent Magazine at the remarkable age of 16.
            Swiftly ascending the ranks, Lauryn assumed the role of Social Media
            Manager for a local franchise branch of Kwench Juice Cafe, marking the
            genesis of her impactful career trajectory. Diversifying her
            expertise, Lauryn established herself as a dynamic ambassador and
            content creator, lending her talents to an illustrious array of
            brands, including Bumble, Supergoop!, Parade, NBA, Cirkul, Youth to
            the People, Urban Decay, and many others. Over the past year, Lauryn
            has lent her strategic prowess to several companies, from non-profit
            pharmacies to financial service agencies to festival companies. With a
            focus on brand partnerships, event planning and execution, and social
            media strategies and calendars, Lauryn Taylor epitomizes innovation,
            versatility, and excellence in her multifaceted portfolio of
            achievements.
          </motion.p>
          <motion.img initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.5, delay:2}} src={fulllogo} alt="logo" className="w-[1000px] h-96 object-scale-down "/>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
