"use client";
import { Menu, Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import NavbarList from "./components/NavbarList";

const ChallengeOne = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="flex flex-col justify-start items-start self-start place-self-start w-full h-full">
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
    </main>
  );
};

export default ChallengeOne;
