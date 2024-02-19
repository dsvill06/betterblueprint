import React from "react";
import { david, founder } from "../assets";
import { motion } from "framer-motion";
import { fulllogo } from "../assets";

const AboutUs = () => {
  return (
    <section className="w-auto h-auto bg-flashWhite font-poppins">
      <div className="flex flex-col h-auto">
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center text-5xl h-auto md:h-auto text-flashWhite bg-eerieBlack p-10 pt-32 font-poppins font-light flex flex-col gap-5"
        >
          About us
          <p className=" text-lg">
            Get to know our company and who founded it!
          </p>
        </motion.h1>

        <div className="flex flex-col md:flex-row w-full md:w-10/12 ">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            src={founder}
            className=" object-right-top object-cover w-[500px] h-fit scale-75  md:ml-5 shadow-card"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.75 }}
            className="font-poppins block text-lg bg-platinum h-fit text-taupe  md:w-full text-clip object-cover md:px-5 p-5  align-middle justify-center md:mt-36 text-center md:text-left md:shadow-card "
          >
            <h1 className="text-3xl inset-1 text-battleGray text-center ">
              Our Founder
            </h1>
            Lauryn Taylor is a{" "}
            <span className="text-[#62C6F2]">
              UNC-Chapel Hill Advertising/Public Relations and Public Policy
              student
            </span>{" "}
            passionate about helping businesses excel. Her early foray into the
            professional realm began as a Social Media Coordinator for Black
            Parent Magazine at the remarkable age of 16. Swiftly ascending the
            ranks, Lauryn assumed the role of Social Media Manager for a local
            franchise branch of Kwench Juice Cafe, marking the genesis of her
            impactful career trajectory. Diversifying her expertise, Lauryn
            established herself as a dynamic ambassador and content creator,
            lending her talents to an illustrious array of brands, including
            Bumble, Supergoop!, Parade, NBA, Cirkul, Youth to the People, Urban
            Decay, and many others. Over the past year, Lauryn has lent her
            strategic prowess to several companies, from non-profit pharmacies
            to financial service agencies to festival companies. With a focus on
            brand partnerships, event planning and execution, and social media
            strategies and calendars, Lauryn Taylor epitomizes innovation,
            versatility, and excellence in her multifaceted portfolio of
            achievements.
          </motion.p>
        </div>
        <div className="flex flex-col md:flex-row w-full md:pl-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.75 }}
            className="font-poppins block text-lg bg-platinum h-fit md:shadow-card text-taupe md:w-full text-clip object-cover md:px-5 p-5  align-middle justify-center md:mt-36 text-center md:text-left "
          >
            <h1 className="text-3xl inset-1 text-battleGray text-center ">
              Website Designer/ Graphic Designer
            </h1>
            My name is David Villavicencio, and I am currently pursuing a degree
            in Computer Science at the University of North Carolina at Chapel
            Hill. Alongside my studies, I am also passionate about
            Entrepreneurship and Engineering, which I am minoring in. I am
            originally from Ecuador, but I also take great pride in my Colombian
            heritage on my Mom's side. Through my experiences as a
            first-generation immigrant facing various barriers in accessing
            education, healthcare, and job opportunities I plan to use my
            education and skills to promote the development of minority
            communities within the United States using technology.
          </motion.p>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            src={david}
            className=" object-right-top shadow-card object-cover w-[500px] h-fit scale-75  md:ml-5"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
