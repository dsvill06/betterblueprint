import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { clients } from "../constants";
import About from "./Experience";
import { fadeIn } from "../utils/motion";
import {useMediaQuery} from 'react-responsive';

const ClientCard = () => {
  return (
    <div className="mt-[10px] flex lg:flex-row  md:gap-x-44 min-h-[50vh] gap-[430px]">
       {clients.map((client, index) => {
         return(<motion.div
            variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
            className="xs:w-[250px] w-full p-[1px] rounded-[20px] "
            whileHover={{scale: 1.1}}
            key={index}
          >
            <div className="relative ">
              <div className="absolute shadow-xl h-96 w-96 rounded-[24px] ">
                <img
                  src={client.icon}
                  alt={client.title}
                  className="w-full h-full opacity-[1.5] rounded-[24px] object-cover z-10  "
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary to-100% rounded-[24px] p-4 ">
                  {" "}
                  <h1 className="text-[#acc9f4] p-[1%] mx-auto font-poppins">{client.type}</h1>
                  <h1 className="text-flashWhite p-[1%] mx-auto text-3xl font-poppins">{client.title}</h1>
                  <p className="p-[1%] text-platinum text-lg">{client.description}</p>
                </div>
              </div>
      
       
            </div>
          </motion.div>)
       })}
      </div>
    
  );
};
const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10000000;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: .5,
  stiffness: 250,
  damping: 50,
};

export const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  console.log(isMobile);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === clients.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER ) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };
  return (
    <div className="relative overflow-hidden py-8 ">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${isMobile ? imgIndex * 112 : imgIndex * 50}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <ClientCard  />
      </motion.div>

{isMobile ? <></>: <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />}
    </div>

  );
};

const i = 2;
const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {Array.from(Array(3), (_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};