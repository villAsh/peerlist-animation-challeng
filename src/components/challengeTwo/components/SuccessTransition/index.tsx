"use client";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import TransactionBtn from "../TransactionBtn";
import { Check, CreditCard, LoaderCircle } from "lucide-react";

const SuccessTransition = () => {
  const [startTransaction, setStartTransaction] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (startTransaction) {
      const cleanup = setTimeout(() => {
        setSuccess(true);
      }, 3000);
      return () => clearTimeout(cleanup);
    }
  }, [startTransaction]);

  return (
    <AnimatePresence mode="wait">
      {!startTransaction && (
        <motion.div key="start" className="hover:cursor-pointer">
          <TransactionBtn
            clickHandler={() => setStartTransaction(true)}
            text="Start Transaction"
            icon={<CreditCard />}
            className="bg-slate-900 text-slate-100"
          />
        </motion.div>
      )}

      {startTransaction && !success && (
        <motion.div key="analyzing" className="hover:cursor-not-allowed">
          <TransactionBtn
            text="Analyzing transaction"
            icon={<LoaderCircle className="stroke-3 animate-spin" />}
          />
        </motion.div>
      )}

      {startTransaction && success && (
        <motion.div key="success" className="hover:cursor-pointer">
          <TransactionBtn
            text="Transaction safe"
            className="!bg-[#dcf2df] !text-[#44c568]"
            icon={<Check className="stroke-3" />}
          />
        </motion.div>
      )}

      {/* <button type="button">Transaction Safe</button>
    <button type="button">Transaction Warning</button> */}
    </AnimatePresence>
  );
};

export default SuccessTransition;
