"use client";
import { motion } from "motion/react";
import React from "react";

type Props = {
  isAnnual: boolean;
  setIsAnnual: (value: boolean) => void;
};
const NestedToggleButton = ({ isAnnual, setIsAnnual }: Props) => {
  return (
    <motion.div className="relative flex justify-start items-center bg-white p-1 rounded-full w-[98%] h-[90%]">
      <motion.button
        animate={{
          left: isAnnual ? "49%" : "1%",
        }}
        transition={{ duration: 0.2 }}
        className="z-30 absolute flex justify-center items-center bg-black p-1 rounded-full w-1/2 h-[90%] hover:cursor-pointer"
      />
      <div className="flex flex-row justify-between items-center my-auto w-full h-full overflow-hidden">
        <button
          onClick={() => setIsAnnual(false)}
          type="button"
          className={`z-50 w-1/2 font-semibold text-xs h-full ${
            isAnnual ? "text-black" : "text-white"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setIsAnnual(true)}
          type="button"
          className={`z-50 w-1/2 font-semibold text-xs h-full ${
            isAnnual ? "text-white" : "text-black"
          }`}
        >
          Annual
        </button>
      </div>
    </motion.div>
  );
};

export default NestedToggleButton;
