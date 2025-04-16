"use client";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import NestedToggleButton from "../NestedToggleButton";

type Props = {
  isOn: boolean;
  setIsOn: (value: boolean) => void;
};
const ToggleButton = ({ isOn, setIsOn }: Props) => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <motion.div
      animate
      className="relative flex justify-start items-start bg-white shadow-[0_1px_50px_-12px_rgba(0,0,0,0.3)] p-1 rounded-full w-[30vw] h-20"
    >
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          left: isOn ? "49%" : "1%",
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          delay: isOn ? 0 : 0.2,
        }}
        className="z-30 absolute flex flex-col justify-center items-center bg-black p-1 rounded-full w-1/2 h-[90%] hover:cursor-pointer"
      >
        <AnimatePresence mode="wait">
          {isOn && (
            <motion.div
              key="nested-toggle"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="flex justify-center items-center w-full h-full"
            >
              <NestedToggleButton
                isAnnual={isAnnual}
                setIsAnnual={setIsAnnual}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <div className="flex flex-row justify-between items-center my-auto w-full overflow-hidden">
        <button
          onClick={() => setIsOn(false)}
          type="button"
          className={`z-50 w-1/2 font-semibold text-lg ${
            isOn ? "text-slate-950" : "text-slate-100"
          }`}
        >
          Free
        </button>
        <button
          onClick={() => setIsOn(true)}
          type="button"
          className={`z-50 w-1/2  flex flex-col ${
            isOn ? "text-slate-100" : "text-slate-950"
          }`}
        >
          <AnimatePresence>
            {!isOn && (
              <>
                <motion.span
                  key="premium-text"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="font-semibold text-inherit text-xl"
                >
                  Premium
                </motion.span>
                <motion.span
                  initial={{ scale: 2, opacity: 0, y: 0 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 2, opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="font-semibold text-inherit text-sm"
                >
                  Monthly &middot; Annual
                </motion.span>
              </>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.div>
  );
};

export default ToggleButton;
