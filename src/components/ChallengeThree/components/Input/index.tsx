import { motion } from "motion/react";
import React from "react";

const tickVariants = {
  checked: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.1,
      delay: 0.1,
    },
  },
  unchecked: {
    pathLength: 0,
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};

type Props = {
  checked: boolean;
  handleChecked: () => void;
  id: string;
};

const InputCheckbox = ({ checked, handleChecked, id }: Props) => {
  return (
    <button type="button" className="relative flex items-center">
      <input
        id={id}
        className="relative checked:bg-blue-500 border-2 border-blue-gray-200 checked:border-blue-500 rounded-md w-6 h-6 transition-all duration-500 appearance-none cursor-pointer"
        onChange={handleChecked}
        type="checkbox"
      />
      <div className="top-1/2 left-1/2 absolute text-white -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3.5"
          stroke="currentColor"
          className="w-3.5 h-3.5"
          initial={false}
          animate={checked ? "checked" : "unchecked"}
        >
          <title>Checkbox tick icon</title>
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
            variants={tickVariants}
          />
        </motion.svg>
      </div>
    </button>
  );
};

export default InputCheckbox;
