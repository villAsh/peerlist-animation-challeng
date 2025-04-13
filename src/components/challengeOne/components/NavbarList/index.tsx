import { AnimatePresence, motion } from "motion/react";
import React from "react";
import { House, LogOut, Mail, Settings, User } from "lucide-react";

const menu = [
  {
    id: 10,
    comp: <House className="text-black" />,
  },
  {
    id: 20,
    comp: <Mail className="text-black" />,
  },
  {
    id: 30,
    comp: <User className="text-black" />,
  },
  {
    id: 40,
    comp: <Settings className="text-black" />,
  },
  {
    id: 50,
    comp: <LogOut className="text-black" />,
  },
];

const parentVariants = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const childVariants = {
  open: {
    opacity: 1,
    y: 0,
  },
  closed: {
    opacity: 0,
    y: -10,
  },
};

type Props = {
  isOpen: boolean;
};
const NavbarList = ({ isOpen }: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          initial="closed"
          animate="open"
          exit="closed"
          variants={parentVariants}
          className="top-12 absolute flex flex-col justify-center items-center gap-y-1 mt-2"
        >
          {menu.map((item) => (
            <motion.li
              className="flex justify-center items-center bg-slate-100 rounded-full w-12 h-12"
              key={item.id}
              variants={childVariants}
            >
              {item.comp}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default NavbarList;
