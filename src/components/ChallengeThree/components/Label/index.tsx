import { motion } from "motion/react";
import React from "react";

type Props = {
  label: string;
  isChecked: boolean;
  id: string;
};
const Label = ({ label, isChecked, id }: Props) => {
  return (
    <motion.label
      className="relative ml-2 overflow-hidden font-medium text-slate-100 text-xl line-through"
      htmlFor={id}
      animate={{
        x: isChecked ? [0, -4, 0] : [0, 4, 0],
        color: isChecked ? "green" : "red",
        textDecorationLine: isChecked ? "line-through" : "none",
      }}
      initial={false}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      {label}
    </motion.label>
  );
};

export default Label;
