import React, { useState, useEffect } from "react";
import "../styles.css";

import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { cards } from "../constants";

const Cards = ({ cards, setIndex }) => {
  
  return (
    <>
      <div className="w-full h-full grid flex-wrap grid-row-3 p-4 md:grid-rows-3 grid-cols-1 md:grid-cols-2 gap-4 justify-center hover:cursor-pointer">
        {cards.map((card, i) => (
          <>
            <div
              key={card.id}
              /* Bento Box Grid Layout */
              className={`col-span-1 md:col-span-1 p-0`}
            >
              <motion.div
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 0.95,
                  duration: 0.3,
                  color: "#f7f7f7",
                }}
                className={`flex w-full h-[325px] rounded-3xl object-contain`}
                onClick={() => {
                  setIndex(i);
                }}
                style={{
                  backgroundImage:  `  url(${card.img})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition:"center"
                }}
                layoutId={card.id}
              >
                {/* <p className="text-3xl p-4 font-bold self-end">{card.title}</p> */}
              </motion.div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

//Single card modal
const ModalCard = ({ index, cards }) => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  return (
    /* Container */
    <motion.div
      id={cards[index].id}
      style={{
        position: "fixed",
        top: "50%",
        transform: "translate(-50%, -50%)",
        left: "50%",
        display: "flex",
        width: "fit-content",
        height: "fit-content",
        justifyContent: "center",
        justifySelf: "center",
        alignContent: "center",
      }}
    >
      {/* Card */}
      <motion.div
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          duration: 0.3,
          ease: "easeInOut",
        }}
        /* Layout ID */
        layoutId={cards[index].id}
        style={{
          width: `${isMobile ? "100vw": "70vw"}`,
          height: "70vh",
          borderRadius: "20px",
          backgroundColor: "rgba(0,0,0,0.88)",
          // backgroundImage: `url(${cards[index].color})`,
          backgroundSize: " cover",
        }}
        className={`single-image flex justify-center bg-black/30  `}
      >
        {index !== false && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            <p className="text-3xl text-white font-bold m-10 text-left">
              {cards[index].title}
            </p>
            <p className="text-2xl m-10 text-left">
              {cards[index].description}
            </p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export const ClientList = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  const [index, setIndex] = useState(false);
  return (
    <div
      id="clients"
      className={` flex h-auto justify-center content-center bg-flashWhite`}
    >
      <LayoutGroup>
        <AnimatePresence>
          {/* Cards */}
          <Cards index={index} setIndex={setIndex} cards={cards} />
          {/* Overlay */}
          {index !== false && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              key="overlay"
              style={{
                // backgroundColor: "rgba(0,0,0,0.99)",
                width: "100vw",
                height:  `${isMobile ? "450%": "260%"}`,
                position: "absolute",
              }}
              className="hover:cursor-pointer"
              onClick={() => {
                setIndex(false);
              }}
            />
          )}

          {index !== false && (
            <ModalCard
              key="singlecard"
              index={index}
              cards={cards}
              setIndex={setIndex}
            />
          )}
        </AnimatePresence>
      </LayoutGroup>
    </div>
  );
};
