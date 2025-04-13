"use client";
import { Menu, Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import NavbarList from "./components/NavbarList";

const ChallengeOne = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="w-full h-full">
      <header className="relative flex flex-col justify-start items-start self-start place-self-start">
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.button
              type="button"
              onClick={() => setIsOpen(false)}
              initial={{ rotate: 0, scale: 0.98, opacity: 1 }}
              animate={{ rotate: 45, scale: 0.98 }}
              whileHover={{
                scale: 1.1,
              }}
              exit={{ rotate: 0, opacity: 0 }}
              className="flex justify-center items-center bg-slate-50 rounded-full w-12 h-12 hover:cursor-pointer"
            >
              <Plus className="text-black" />
            </motion.button>
          ) : (
            <motion.button
              onClick={() => setIsOpen(true)}
              initial={{ rotate: 0, scale: 0.98, opacity: 1 }}
              animate={{ rotate: 0 }}
              exit={{ rotate: 0, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              className="flex justify-center items-center bg-slate-50 rounded-full w-12 h-12 hover:cursor-pointer"
            >
              <Menu className="text-black" />
            </motion.button>
          )}
        </AnimatePresence>
        <NavbarList isOpen={isOpen} />
      </header>
      <section className="flex flex-col justify-center items-center w-full h-[80vh] text-center">
        <h1 className="shadow-white text-shadow drop-shadow-2xl font-semibold text-slate-200 max-lg:text-2xl text-4xl">
          Peerlist Animation Challenge - 1
        </h1>
        <p className="font-semibold max-lg:text-lg text-2xl">
          Fluid Menu Animation
        </p>
      </section>
    </main>
  );
};

export default ChallengeOne;
