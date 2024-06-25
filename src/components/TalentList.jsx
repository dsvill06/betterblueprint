import React, { useState, useEffect } from "react";
import "../styles.css";

import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { cards, talent } from "../constants";
import { CardDefault } from "./Card";


export const TalentList = () => {
  const [width, setWidth] = useState(window.innerWidth);


  const isMobile = width <= 768;
  const [index, setIndex] = useState(false);
  return (
    <motion.div
    initial={{ opacity: 0, x: -50 }} // Initial position for "Better Blueprint"
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.8 }}
      id="clients"
      className={` flex h-auto justify-center content-center gap-10 pb-10 bg-flashWhite px-10`}
    >
      {talent.map((talent, i) => {
        return (<CardDefault key={i} talent={talent}/>)
      })}
    </motion.div>
  );
};
