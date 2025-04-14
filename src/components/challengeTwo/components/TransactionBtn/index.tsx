import { Icon } from "lucide-react";
import { motion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  text: string;
  icon: ReactNode;
  className?: string;
  clickHandler?: () => void;
};

const variants = {
  initial: { x: -30, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: {
    x: -30,
    opacity: 0,
  },
};
const TransactionBtn = ({ text, icon, className, clickHandler }: Props) => {
  return (
    <button
      type="button"
      onClick={clickHandler}
      className={`flex flex-row justify-center items-center gap-x-2 bg-[#e9f2fd] px-4 py-1 rounded-xl w-full overflow-hidden font-[600] text-[#57aff7] text-lg hover:cursor-pointer ${className}`}
    >
      <motion.span
        initial={"initial"}
        animate={"animate"}
        transition={{ duration: 0.2, easings: ["easeIn", "easeOut"] }}
        exit={"exit"}
        variants={variants}
      >
        {icon}
      </motion.span>
      <motion.span
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        exit={{
          x: 30,
          opacity: 0,
        }}
      >
        {text}
      </motion.span>
    </button>
  );
};

export default TransactionBtn;
