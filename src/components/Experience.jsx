import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper.jsx";
import { fadeIn } from "../utils/motion";
import { franklin } from "../assets";
import { clients } from "../constants";
import { SwipeCarousel } from "./SwipeCarousel";



const About = () => {
  return (
    <div id="ourClients" className={`pt-48 pb-10 max-w-8xl relative z-0 -mt-[8rem] rounded-l-full`}>
      <motion.div variants={textVariant()} className=" px-12">
        <h1 className={styles.sectionSubText}>Experience</h1>
        <h2 className={styles.sectionHeadText}>Clients</h2>
        <h3 className='mt-1 text-taupe text-[20px] font-poppins max-w-3xl leading-[30px]'>See some of the companies and organizations we have worked with!</h3>
      </motion.div>
      <div className="mt-[30px] flex lg:flex-row flex-col min-h-[50vh] gap-5 md:pl-10 w-full lg:justify-center">
       <SwipeCarousel/>
      </div>
    </div>
  );
};

export default About;
