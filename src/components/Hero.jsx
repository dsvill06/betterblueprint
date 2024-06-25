import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { consulting, fulllogo, logo } from "../assets";

const Hero = () => {
  return (
    <>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        overflow-hidden bg-flashWhite rounded-br-[350px] "
      >
        <div
          className={`absolute inset-0 sm:top-[125px] top-[25px] 
          lg:top-[80px] xl:top-[200px] ${styles.paddingX} 
          max-w-7xl mx-auto flex lg:flex-row flex-col items-start
          justify-between gap-3`}
        >
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-1 sm:h-80 h-40 sm:hidden" />
          </div>

          <div className="md:order-last pb-64">
            <motion.div
              initial={{ opacity: 0, y: -50 }} // Initial position for "Better Blueprint"
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}
              >
                Better Blueprint{" "}
                <span
                  className="sm:text-[#acc9f4] sm:text-[90px] 
                  text-[#acc9f4] text-[50px] font-mova
                  font-extrabold uppercase"
                >
                  Consulting
                </span>
              </h1>
            </motion.div>
            <motion.p
              className={`${styles.heroSubText} mt-2 text-eerieBlack`}
              initial={{ opacity: 0, x: -50 }} // Initial position for "Better Blueprint"
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
             <div>Your Vision, Our Strategic Blueprint</div> 
             <div className="flex flex-col md:flex-row md:gap-5 mt-5">
                <button className="w-2/3 text-2xl rounded-2xl px-6 py-2 font-medium bg-[#acc9f4] text-white  transition-all shadow-xl hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                  Contact us
                </button>
                <a href='#services'><button className="w-fit text-2xl rounded-2xl px-6 py-2 font-medium bg-eerieBlack text-white  transition-all shadow-xl hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] w-fit">
                  Explore Services
                </button></a>
                
            </div>
            </motion.p>

           
          </div>
          <img
          src={logo}
          alt="consulting"
          className="block object-cover lg:ml-20 w-[200px] lg:w-[1000px] lg:mb-20 md:visible invisible"
        />
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"
          ></div>
          
        </div>
      </section>
    </>
  );
};

export default Hero;
