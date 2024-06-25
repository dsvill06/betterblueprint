import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { squareData } from "../constants";

const TalentHero = () => {
  return (
    <>
      <section
        className="relative flex sm:flex-row flex-col w-full h-auto mx-auto 
       bg-overflow-hidden text-center">
       <div className="w-full px-8 py-12 grid grid-cols-1 mt-10 gap-8 max-w-6xl mx-auto justify-center">
      <motion.div initial={{ opacity: 0, y: -50 }} // Initial position for "Better Blueprint"
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}>
        <span className="block mb-4 text-xs md:text-lg text-primary font-medium">
          BetterBlueprint
        </span>
        <h3 className="text-4xl md:text-7xl font-semibold text-[#ADC9F3]">
         Talent Roster
        </h3>
        <p className="text-base md:text-xl my-4 md:my-6 text-eerieBlack">
          Meet some of the influencers we work with
        </p>
        {/* <a href="#clients">
          <button className="bg-[#acc9f4] text-flashWhite font-medium py-2 px-4 rounded transition-all hover:bg-[#81aff4] active:scale-95">
            Talent List
          </button>
        </a> */}
      </motion.div>
      {/* <ShuffleGrid /> */}
    </div>
      </section>
    </>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};



const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: " top center",
        backgroundRepeat: "no-repeat"
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default TalentHero;