"use client";
import React, { useState } from "react";
import ChallengeTitle from "../ChallengeTitle";
import { AnimatePresence, motion } from "framer-motion";

const ChallengeFour = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <main className="flex flex-col justify-center items-center gap-y-4 h-[80vh]">
      <ChallengeTitle
        heading="Peerlist Animation Challenge - 4"
        title="Animated Toggles"
      />
      <div className="flex flex-col justify-start items-start gap-y-2 mt03">
        <motion.div
          animate
          className="relative flex justify-start items-start bg-white p-1 rounded-full w-[30vw] h-20"
        >
          <motion.button
            onClick={() => setIsOn(!isOn)}
            animate={{
              left: isOn ? "49%" : "1%",
            }}
            transition={{
              duration: 0.3,
            }}
            className="absolute flex justify-center items-center bg-black p-1 rounded-full w-1/2 h-[90%] hover:cursor-pointer"
          >
            <AnimatePresence mode="wait">
              {isOn && (
                <motion.h6
                  key="premium"
                  className="font-[600] text-2xl"
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.2,
                  }}
                  exit={{
                    x: 30,
                    opacity: 0,
                  }}
                >
                  Premium
                </motion.h6>
              )}
              {!isOn && (
                <motion.h6
                  key="free"
                  className="font-[600] text-2xl"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.2,
                  }}
                  exit={{
                    x: -30,
                    opacity: 0,
                  }}
                >
                  Free
                </motion.h6>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </div>
    </main>
  );
};

export default ChallengeFour;
