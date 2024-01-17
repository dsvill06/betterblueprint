import React from "react";
import ContactUs from "../components/ContactUs";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="bg-flashWhite w-max md:w-auto h-auto flex md:flex-col p-10 ">
      <div className="mt-52 flex flex-col md:flex-row md:justify-items-end md:gap-3 gap-56">
      <motion.div
          initial={{ opacity: 0}} // Initial position for "Better Blueprint"
          animate={{ opacity: 1}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div>
            <h1 className="text-eerieBlack text-7xl text-center ">
              Get In Touch With Us
            </h1>
            <p className="text-taupe text-xl text-center">
              Fill out our form and we'll reach back out to you.

            </p>
          </div>
        </motion.div>
        <ContactUs />
        
      </div>
    </section>
  );
};

export default Contact;
